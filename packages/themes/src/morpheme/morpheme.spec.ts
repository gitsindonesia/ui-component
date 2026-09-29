import {readdirSync, readFileSync} from 'node:fs';
import {fileURLToPath} from 'node:url';
import {compile} from 'sass';

const themeDir = fileURLToPath(new URL('.', import.meta.url));

// Returns the line numbers of declarations that appear after a nested rule
// in the same block. Sass warns about these (https://sass-lang.com/d/mixed-decls)
// and, from Dart Sass 1.92, emits them in a separate rule after the nested one.
function findDeclarationsAfterNestedRules(source: string) {
  const lines: number[] = [];
  const blocks: {hasNestedRule: boolean}[] = [];
  let statement = '';
  let statementLine = 1;
  let line = 1;

  const checkStatement = () => {
    const current = blocks[blocks.length - 1];
    if (current?.hasNestedRule && /^[a-z-]+\s*:(?!:)/i.test(statement)) {
      lines.push(statementLine);
    }
    statement = '';
  };

  const append = (text: string) => {
    if (!statement && !text.trim()) return;
    if (!statement) statementLine = line;
    statement += text;
  };

  for (let i = 0; i < source.length; i++) {
    const char = source[i];

    if (char === '/' && source[i + 1] === '/') {
      while (i < source.length && source[i] !== '\n') i++;
      i--;
      continue;
    }

    if (char === '/' && source[i + 1] === '*') {
      const end = source.indexOf('*/', i + 2);
      line += (source.slice(i, end).match(/\n/g) ?? []).length;
      i = end + 1;
      continue;
    }

    if (char === '"' || char === "'") {
      const end = source.indexOf(char, i + 1);
      append(source.slice(i, end + 1));
      i = end;
      continue;
    }

    if (char === '#' && source[i + 1] === '{') {
      const end = source.indexOf('}', i);
      append(source.slice(i, end + 1));
      i = end;
      continue;
    }

    if (char === '\n') line++;

    if (char === '{') {
      const parent = blocks[blocks.length - 1];
      if (parent) parent.hasNestedRule = true;
      blocks.push({hasNestedRule: false});
      statement = '';
    } else if (char === '}') {
      checkStatement();
      blocks.pop();
    } else if (char === ';') {
      checkStatement();
    } else {
      append(char);
    }
  }

  return lines;
}

describe('morpheme theme', () => {
  const partials = readdirSync(themeDir).filter((file) =>
    file.endsWith('.scss'),
  );

  test.each(partials)('%s has no declarations after nested rules', (file) => {
    const source = readFileSync(`${themeDir}/${file}`, 'utf8');
    expect(findDeclarationsAfterNestedRules(source)).toEqual([]);
  });

  test.each(['main.scss', 'main.dark.scss'])(
    '%s compiles without mixed-decls deprecation warnings',
    (entry) => {
      const warnings: string[] = [];
      compile(`${themeDir}/${entry}`, {
        logger: {warn: (message) => warnings.push(message)},
      });

      expect(
        warnings.filter((message) => message.includes('mixed-decls')),
      ).toEqual([]);
    },
  );

  test('keeps the data table pagination meta layout in a single rule', () => {
    const {css} = compile(`${themeDir}/main.scss`, {
      logger: {warn: () => {}},
    });

    const rule = css.match(/\.v-data-table-pagination-meta \{([^}]*)\}/)?.[1];

    expect(rule).toContain('display: none;');
    expect(rule).toContain('gap: 0.25rem;');
    expect(rule).toContain('align-items: center;');
    expect(rule).toContain('font-size: 0.875rem;');
    expect(rule).toContain('order: 2;');
    expect(rule).toContain('flex: 1 1 0%;');
  });
});
