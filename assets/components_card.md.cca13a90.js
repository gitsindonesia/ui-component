import{_ as o,o as n,c as e,a as l,b as s,r as t}from"./app.ae30c26f.js";const m=JSON.parse('{"title":"Card","description":"","frontmatter":{},"headers":[{"level":2,"title":"Usage","slug":"usage","link":"#usage","children":[{"level":3,"title":"Basic Usage","slug":"basic-usage","link":"#basic-usage","children":[]},{"level":3,"title":"With Title","slug":"with-title","link":"#with-title","children":[]},{"level":3,"title":"Header and Footer","slug":"header-and-footer","link":"#header-and-footer","children":[]},{"level":3,"title":"Hide Header and Footer","slug":"hide-header-and-footer","link":"#hide-header-and-footer","children":[]},{"level":3,"title":"Colors","slug":"colors","link":"#colors","children":[]},{"level":3,"title":"Bordered","slug":"bordered","link":"#bordered","children":[]},{"level":3,"title":"Shadow","slug":"shadow","link":"#shadow","children":[]}]},{"level":2,"title":"Props","slug":"props","link":"#props","children":[]},{"level":2,"title":"Methods","slug":"methods","link":"#methods","children":[]},{"level":2,"title":"Events","slug":"events","link":"#events","children":[]},{"level":2,"title":"Slots","slug":"slots","link":"#slots","children":[]},{"level":2,"title":"CSS Variables","slug":"css-variables","link":"#css-variables","children":[]},{"level":2,"title":"Customization","slug":"customization","link":"#customization","children":[]},{"level":2,"title":"Manual Installation","slug":"manual-installation","link":"#manual-installation","children":[]},{"level":2,"title":"Tailwind Plugin","slug":"tailwind-plugin","link":"#tailwind-plugin","children":[]},{"level":2,"title":"Storybook","slug":"storybook","link":"#storybook","children":[]}],"relativePath":"components/card.md"}'),p={name:"components/card.md"},r=s(`<h1 id="card" tabindex="-1">Card <a class="header-anchor" href="#card" aria-hidden="true">#</a></h1><h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-hidden="true">#</a></h2><h3 id="basic-usage" tabindex="-1">Basic Usage <a class="header-anchor" href="#basic-usage" aria-hidden="true">#</a></h3><div class="language-vue"><button class="copy"></button><span class="lang">vue</span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#676E95;">&lt;!-- VCard is registered globally --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">VCard</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> Hello World </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#FFCB6B;">VCard</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div>`,4),c=s(`<div class="info custom-block"><p class="custom-block-title">INFO</p><p>The <code>VCard</code> component is registered globally when you install with <code>@gits-id/ui</code>. So you don&#39;t need to import it manually.</p></div><h3 id="with-title" tabindex="-1">With Title <a class="header-anchor" href="#with-title" aria-hidden="true">#</a></h3><div class="language-vue"><button class="copy"></button><span class="lang">vue</span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">VCard</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">title</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Header</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> Hello World </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#FFCB6B;">VCard</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div>`,3),d=s(`<h3 id="header-and-footer" tabindex="-1">Header and Footer <a class="header-anchor" href="#header-and-footer" aria-hidden="true">#</a></h3><div class="language-vue"><button class="copy"></button><span class="lang">vue</span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">VCard</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">title</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Header</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">&lt;!-- footer slot --&gt;</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;"> #</span><span style="color:#C792EA;">footer</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">VBtn</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> Action </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#FFCB6B;">VBtn</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">&lt;!-- body --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">p</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">Hello World</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">p</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#FFCB6B;">VCard</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div>`,2),F=s(`<h3 id="hide-header-and-footer" tabindex="-1">Hide Header and Footer <a class="header-anchor" href="#hide-header-and-footer" aria-hidden="true">#</a></h3><div class="language-vue"><button class="copy"></button><span class="lang">vue</span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">VCard</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">title</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Header</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">hide-header</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">hide-footer</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">&lt;!-- footer slot --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;"> #</span><span style="color:#C792EA;">footer</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">VBtn</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> Action </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#FFCB6B;">VBtn</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">&lt;!-- body --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">p</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">Hello World</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">p</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#FFCB6B;">VCard</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div>`,2),D=s(`<h3 id="colors" tabindex="-1">Colors <a class="header-anchor" href="#colors" aria-hidden="true">#</a></h3><ul><li><strong>prop</strong>: <code>color</code></li><li><strong>type</strong>: <code>string</code></li><li><strong>default</strong>: <code>default</code></li><li><strong>required</strong>: <code>false</code></li></ul><p>Use <code>color</code> to different color style to the card.</p><div class="language-vue"><button class="copy"></button><span class="lang">vue</span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">VCard</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> Hello World </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#FFCB6B;">VCard</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">VCard</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">color</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">primary</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> Hello World </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#FFCB6B;">VCard</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">VCard</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">color</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">secondary</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> Hello World </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#FFCB6B;">VCard</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">VCard</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">color</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">info</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> Hello World </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#FFCB6B;">VCard</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">VCard</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">color</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">warning</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> Hello World </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#FFCB6B;">VCard</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">VCard</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">color</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">success</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> Hello World </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#FFCB6B;">VCard</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">VCard</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">color</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">error</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> Hello World </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#FFCB6B;">VCard</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div>`,4),y=s(`<h3 id="bordered" tabindex="-1">Bordered <a class="header-anchor" href="#bordered" aria-hidden="true">#</a></h3><ul><li><strong>prop</strong>: <code>bordered</code></li><li><strong>type</strong>: <code>boolean</code></li><li><strong>default</strong>: <code>false</code></li><li><strong>required</strong>: <code>false</code></li></ul><p>Use <code>bordered</code> to apply border to the card.</p><div class="language-vue"><button class="copy"></button><span class="lang">vue</span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">VCard</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">bordered</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> Hello World </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#FFCB6B;">VCard</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div>`,4),i=s(`<h3 id="shadow" tabindex="-1">Shadow <a class="header-anchor" href="#shadow" aria-hidden="true">#</a></h3><ul><li><strong>prop</strong>: <code>shadow</code></li><li><strong>type</strong>: <code>boolean | &#39;sm&#39; | &#39;md&#39; | &#39;lg&#39; | &#39;xl&#39; | &#39;2xl&#39; | &#39;inner&#39; | &#39;none&#39;</code></li><li><strong>default</strong>: <code>none</code></li><li><strong>required</strong>: <code>false</code></li></ul><p>Use <code>shadow</code> to apply shadow style to the card.</p><div class="language-vue"><button class="copy"></button><span class="lang">vue</span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">setup</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">lang</span><span style="color:#A6ACCD;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">ts</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;">ref</span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">vue</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">VCard</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">shadow</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> Hello World </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#FFCB6B;">VCard</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">VCard</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">shadow</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">sm</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> Hello World </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#FFCB6B;">VCard</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">VCard</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">shadow</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">md</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> Hello World </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#FFCB6B;">VCard</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">VCard</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">shadow</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">lg</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> Hello World </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#FFCB6B;">VCard</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">VCard</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">shadow</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">xl</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> Hello World </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#FFCB6B;">VCard</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">VCard</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">shadow</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">2xl</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> Hello World </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#FFCB6B;">VCard</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">VCard</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">shadow</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">inner</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> Hello World </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#FFCB6B;">VCard</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">VCard</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">shadow</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">none</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> Hello World </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#FFCB6B;">VCard</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div>`,4),C=s(`<h2 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-hidden="true">#</a></h2><table><thead><tr><th>Name</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><a href="#color">color</a></td><td><code>string</code> , <a href="/ui-component/guide/theme.html#colors">available colors</a></td><td><code>default</code></td></tr><tr><td><a href="#shadow">shadow</a></td><td><code>boolean</code>, <code>string</code>, <a href="/ui-component/guide/theme.html#shadows">available shadows</a></td><td><code>true</code></td></tr><tr><td><a href="#flat">flat</a></td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td><a href="#bordered">bordered</a></td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td><a href="#title">title</a></td><td><code>string</code></td><td><code>false</code></td></tr><tr><td><a href="#flat">flat</a></td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td><a href="#hide-header">hide-header</a></td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td><a href="#hide-footer">hide-footer</a></td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td><a href="#to">to</a></td><td><code>string</code>, <code>RouteLocation</code></td><td><code></code></td></tr><tr><td><a href="#default-wrapper-class">default-wrapper-class</a></td><td><code>string</code></td><td><code></code></td></tr><tr><td><a href="#default-header-class">default-header-class</a></td><td><code>string</code></td><td><code>card-header</code></td></tr><tr><td><a href="#default-body-class">default-body-class</a></td><td><code>string</code></td><td><code>card-body</code></td></tr><tr><td><a href="#default-footer-class">default-footer-class</a></td><td><code>string</code></td><td><code>card-footer</code></td></tr><tr><td><a href="#wrapper-class">wrapper-class</a></td><td><code>string</code></td><td><code></code></td></tr><tr><td><a href="#header-class">header-class</a></td><td><code>string</code></td><td><code></code></td></tr><tr><td><a href="#footer-class">footer-class</a></td><td><code>string</code></td><td><code></code></td></tr><tr><td><a href="#body-class">body-class</a></td><td><code>string</code></td><td><code></code></td></tr></tbody></table><h2 id="methods" tabindex="-1">Methods <a class="header-anchor" href="#methods" aria-hidden="true">#</a></h2><p>None</p><h2 id="events" tabindex="-1">Events <a class="header-anchor" href="#events" aria-hidden="true">#</a></h2><p>None</p><h2 id="slots" tabindex="-1">Slots <a class="header-anchor" href="#slots" aria-hidden="true">#</a></h2><table><thead><tr><th>Name</th><th>Props</th><th>Description</th></tr></thead><tbody><tr><td><a href="#default">default</a></td><td>None</td><td>The default Vue slot</td></tr><tr><td><a href="#header">header</a></td><td>None</td><td>The card header</td></tr><tr><td><a href="#header.append">header.append</a></td><td>None</td><td>Slot to append before the actual header</td></tr><tr><td><a href="#header.prepend">header.prepend</a></td><td>None</td><td>Slot to prepend before the actual header</td></tr><tr><td><a href="#default">footer</a></td><td>None</td><td>The card footer</td></tr></tbody></table><h2 id="css-variables" tabindex="-1">CSS Variables <a class="header-anchor" href="#css-variables" aria-hidden="true">#</a></h2><table><thead><tr><th>Variable</th><th>Default Value</th></tr></thead><tbody><tr><td><a href="#--card-padding-x"><code>--card-padding-x</code></a></td><td><code>theme(&#39;padding.4&#39;)</code></td></tr><tr><td><a href="#--card-padding-y"><code>--card-padding-y</code></a></td><td><code>theme(&#39;padding.3&#39;)</code></td></tr><tr><td><a href="#--card-bg-color"><code>--card-bg-color</code></a></td><td><code>theme(&#39;colors.white&#39;)</code></td></tr><tr><td><a href="#--card-color"><code>--card-color</code></a></td><td><code>theme(&#39;colors.gray.800&#39;)</code></td></tr><tr><td><a href="#--card-border-style"><code>--card-border-style</code></a></td><td><code>solid</code></td></tr><tr><td><a href="#--card-border-width"><code>--card-border-width</code></a></td><td><code>theme(&#39;borderWidth.DEFAULT&#39;)</code></td></tr><tr><td><a href="#--card-border-color"><code>--card-border-color</code></a></td><td><code>theme(&#39;borderColor.DEFAULT&#39;)</code></td></tr><tr><td><a href="#--card-border-radius"><code>--card-border-radius</code></a></td><td><code>theme(&#39;borderRadius.DEFAULT&#39;)</code></td></tr></tbody></table><h2 id="customization" tabindex="-1">Customization <a class="header-anchor" href="#customization" aria-hidden="true">#</a></h2><p>With the power of CSS Variables and Tailwind&#39;s <code>theme</code> function, you can create your custom card.</p><div class="language-vue"><button class="copy"></button><span class="lang">vue</span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">VCard</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">color</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">indigo</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> Indigo Colored Card </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#FFCB6B;">VCard</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">style</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">card-indigo</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">  --card-bg-color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> theme(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">colors.indigo.500</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">  --card-color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> theme(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">colors.white</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">style</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><h2 id="manual-installation" tabindex="-1">Manual Installation <a class="header-anchor" href="#manual-installation" aria-hidden="true">#</a></h2><p>You can also install the <code>Card</code> component individually via <code>@gits-id/card</code> package:</p><div class="language-bash"><button class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#A6ACCD;">yarn install @gits-id/card</span></span>
<span class="line"></span></code></pre></div><div class="language-vue"><button class="copy"></button><span class="lang">vue</span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">setup</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">lang</span><span style="color:#A6ACCD;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">ts</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> VCard </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@gits-id/card</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">VCard</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> Hello World </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#FFCB6B;">VCard</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><h2 id="tailwind-plugin" tabindex="-1">Tailwind Plugin <a class="header-anchor" href="#tailwind-plugin" aria-hidden="true">#</a></h2><p>This package comes with custom tailwind plugin for styling. If you are installing this package separately from <code>@gits-id/ui</code> package, you need to include the plugin in <code>plugins</code> section in your Tailwind config file.</p><div class="language-js"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#676E95;">// tailwind.config.js</span></span>
<span class="line"><span style="color:#89DDFF;">module.exports</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">content</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> []</span><span style="color:#89DDFF;">,</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">plugins</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span><span style="color:#82AAFF;">require</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@gits-id/tailwind-components/card</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"></span></code></pre></div><h2 id="storybook" tabindex="-1">Storybook <a class="header-anchor" href="#storybook" aria-hidden="true">#</a></h2><p>View Storybook documentation <a href="https://gits-ui.web.app/?path=/story/components-card--default" target="_blank" rel="noreferrer">here</a>.</p>`,22);function h(g,A,u,f,_,b){const a=t("LivePreview");return n(),e("div",null,[r,l(a,{src:"components-card--default",height:"160"}),c,l(a,{src:"components-card--hide-footer",height:"120"}),d,l(a,{src:"components-card--default",height:"160"}),F,l(a,{src:"components-card--body-only",height:"90"}),D,l(a,{src:"components-card--colors",height:"480"}),y,l(a,{src:"components-card--bordered",height:"200"}),i,l(a,{src:"components-card--shadow",height:"520"}),C])}const v=o(p,[["render",h]]);export{m as __pageData,v as default};