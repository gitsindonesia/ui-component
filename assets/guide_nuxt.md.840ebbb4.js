import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.9d71178d.js";const u=JSON.parse('{"title":"Using Morpheme UI with Nuxt","description":"","frontmatter":{},"headers":[],"relativePath":"guide/nuxt.md","filePath":"guide/nuxt.md"}'),p={name:"guide/nuxt.md"},e=l(`<h1 id="using-morpheme-ui-with-nuxt" tabindex="-1">Using Morpheme UI with Nuxt <a class="header-anchor" href="#using-morpheme-ui-with-nuxt" aria-label="Permalink to &quot;Using Morpheme UI with Nuxt&quot;">​</a></h1><p>Morpheme UI is designed to work seamlessly with Nuxt 3 projects. You can easily install it in a new or existing Nuxt project, or use our starter project to get started faster.</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>Checkout <a href="/ui-component/tools/cli.html">Morpheme CLI</a> to setup your application quickly.</p></div><h2 id="compatibility" tabindex="-1">Compatibility <a class="header-anchor" href="#compatibility" aria-label="Permalink to &quot;Compatibility&quot;">​</a></h2><p>Currently, <strong>Morpheme UI only support Nuxt 3</strong>.</p><h2 id="installation" tabindex="-1">Installation <a class="header-anchor" href="#installation" aria-label="Permalink to &quot;Installation&quot;">​</a></h2><ol><li>Install Nuxt Morpheme UI by running the following command:</li></ol><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">yarn</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">add</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">@morpheme/nuxt</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">yarn</span><span style="color:#24292E;"> </span><span style="color:#032F62;">add</span><span style="color:#24292E;"> </span><span style="color:#032F62;">@morpheme/nuxt</span></span></code></pre></div><ol start="2"><li>Install <code>@nuxtjs/tailwindcss</code> and <code>sass</code>:</li></ol><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">yarn</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">add</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--dev</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">@nuxtjs/tailwindcss</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">sass</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">yarn</span><span style="color:#24292E;"> </span><span style="color:#032F62;">add</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--dev</span><span style="color:#24292E;"> </span><span style="color:#032F62;">@nuxtjs/tailwindcss</span><span style="color:#24292E;"> </span><span style="color:#032F62;">sass</span></span></code></pre></div><ol start="3"><li>Add the modules to your <code>nuxt.config.ts</code> file:</li></ol><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">defineNuxtConfig</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  modules: [</span><span style="color:#9ECBFF;">&#39;@morpheme/nuxt&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;@nuxtjs/tailwindcss&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">  morpheme: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    darkMode: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    sass: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    theme: </span><span style="color:#9ECBFF;">&#39;morpheme&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">defineNuxtConfig</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">  modules: [</span><span style="color:#032F62;">&#39;@morpheme/nuxt&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;@nuxtjs/tailwindcss&#39;</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">  morpheme: {</span></span>
<span class="line"><span style="color:#24292E;">    darkMode: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    sass: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    theme: </span><span style="color:#032F62;">&#39;morpheme&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">});</span></span></code></pre></div><ol><li>Create your tailwind config by running:</li></ol><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">npx</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">tailwindcss</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">init</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-p</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">npx</span><span style="color:#24292E;"> </span><span style="color:#032F62;">tailwindcss</span><span style="color:#24292E;"> </span><span style="color:#032F62;">init</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-p</span></span></code></pre></div><ol start="6"><li>Scan the <code>@morpheme/*</code> folders inside the <code>node_modules</code> by adding <code>&#39;./node_modules/@morpheme/**/src/**/*.{vue,js,ts,jsx,tsx,css}&#39;</code> to the <code>content</code> block in your Tailwind config. Also, add the default preset to the <code>presets</code> option.</li></ol><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark has-highlighted-lines vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">module</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">exports</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">  content: [</span><span style="color:#9ECBFF;">&#39;./node_modules/@morpheme/**/src/**/*.{vue,js,ts,jsx,tsx,css}&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">  presets: [</span><span style="color:#B392F0;">require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;@morpheme/tailwind-config/preset&#39;</span><span style="color:#E1E4E8;">)],</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span></code></pre><pre class="shiki github-light has-highlighted-lines vp-code-light"><code><span class="line"><span style="color:#005CC5;">module</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">exports</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line highlighted"><span style="color:#24292E;">  content: [</span><span style="color:#032F62;">&#39;./node_modules/@morpheme/**/src/**/*.{vue,js,ts,jsx,tsx,css}&#39;</span><span style="color:#24292E;">],</span></span>
<span class="line highlighted"><span style="color:#24292E;">  presets: [</span><span style="color:#6F42C1;">require</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;@morpheme/tailwind-config/preset&#39;</span><span style="color:#24292E;">)],</span></span>
<span class="line"><span style="color:#24292E;">};</span></span></code></pre></div><ol start="7"><li>Run the development server:</li></ol><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">yarn</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">dev</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">yarn</span><span style="color:#24292E;"> </span><span style="color:#032F62;">dev</span></span></code></pre></div><h2 id="options" tabindex="-1">Options <a class="header-anchor" href="#options" aria-label="Permalink to &quot;Options&quot;">​</a></h2><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">interface</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ModuleOptions</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">   * Determine whether to load the css bundle.</span></span>
<span class="line"><span style="color:#6A737D;">   *</span></span>
<span class="line"><span style="color:#6A737D;">   * </span><span style="color:#F97583;">@default</span><span style="color:#6A737D;"> </span><span style="color:#E1E4E8;">false</span></span>
<span class="line"><span style="color:#6A737D;">   * </span><span style="color:#F97583;">@example</span></span>
<span class="line"><span style="color:#6A737D;">   * // nuxt.config.ts</span></span>
<span class="line"><span style="color:#6A737D;">   * export default defineConfig({</span></span>
<span class="line"><span style="color:#6A737D;">   *  morpheme: {</span></span>
<span class="line"><span style="color:#6A737D;">   *   css: true</span></span>
<span class="line"><span style="color:#6A737D;">   * })</span></span>
<span class="line"><span style="color:#6A737D;">   */</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">css</span><span style="color:#F97583;">?:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">boolean</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">   * Determine whether to load the sass bundle.</span></span>
<span class="line"><span style="color:#6A737D;">   *</span></span>
<span class="line"><span style="color:#6A737D;">   * </span><span style="color:#F97583;">@default</span><span style="color:#6A737D;"> </span><span style="color:#E1E4E8;">false</span></span>
<span class="line"><span style="color:#6A737D;">   * </span><span style="color:#F97583;">@example</span></span>
<span class="line"><span style="color:#6A737D;">   * // nuxt.config.ts</span></span>
<span class="line"><span style="color:#6A737D;">   * export default defineConfig({</span></span>
<span class="line"><span style="color:#6A737D;">   *  morpheme: {</span></span>
<span class="line"><span style="color:#6A737D;">   *   sass: true</span></span>
<span class="line"><span style="color:#6A737D;">   * })</span></span>
<span class="line"><span style="color:#6A737D;">   */</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">sass</span><span style="color:#F97583;">?:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">boolean</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">   * Determine whether to auto-imports the components.</span></span>
<span class="line"><span style="color:#6A737D;">   *</span></span>
<span class="line"><span style="color:#6A737D;">   * </span><span style="color:#F97583;">@default</span><span style="color:#6A737D;"> </span><span style="color:#E1E4E8;">true</span></span>
<span class="line"><span style="color:#6A737D;">   * </span><span style="color:#F97583;">@example</span></span>
<span class="line"><span style="color:#6A737D;">   * // nuxt.config.ts</span></span>
<span class="line"><span style="color:#6A737D;">   * export default defineConfig({</span></span>
<span class="line"><span style="color:#6A737D;">   *  morpheme: {</span></span>
<span class="line"><span style="color:#6A737D;">   *   components: true</span></span>
<span class="line"><span style="color:#6A737D;">   * })</span></span>
<span class="line"><span style="color:#6A737D;">   */</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">components</span><span style="color:#F97583;">?:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">boolean</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">   * Determine whether to transpile dependencies.</span></span>
<span class="line"><span style="color:#6A737D;">   *</span></span>
<span class="line"><span style="color:#6A737D;">   * </span><span style="color:#F97583;">@default</span><span style="color:#6A737D;"> </span><span style="color:#E1E4E8;">true</span></span>
<span class="line"><span style="color:#6A737D;">   * </span><span style="color:#F97583;">@example</span></span>
<span class="line"><span style="color:#6A737D;">   * // nuxt.config.ts</span></span>
<span class="line"><span style="color:#6A737D;">   * export default defineConfig({</span></span>
<span class="line"><span style="color:#6A737D;">   *  morpheme: {</span></span>
<span class="line"><span style="color:#6A737D;">   *   transpileDeps: true</span></span>
<span class="line"><span style="color:#6A737D;">   * })</span></span>
<span class="line"><span style="color:#6A737D;">   */</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">transpileDeps</span><span style="color:#F97583;">?:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">boolean</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">   * Determine whether to load floating vue styles. Only works when \`theme\` is \`legacy\`.</span></span>
<span class="line"><span style="color:#6A737D;">   *</span></span>
<span class="line"><span style="color:#6A737D;">   * </span><span style="color:#F97583;">@default</span><span style="color:#6A737D;"> </span><span style="color:#E1E4E8;">true</span></span>
<span class="line"><span style="color:#6A737D;">   * </span><span style="color:#F97583;">@example</span></span>
<span class="line"><span style="color:#6A737D;">   * // nuxt.config.ts</span></span>
<span class="line"><span style="color:#6A737D;">   * export default defineConfig({</span></span>
<span class="line"><span style="color:#6A737D;">   *  morpheme: {</span></span>
<span class="line"><span style="color:#6A737D;">   *   loadFloatingVueStyles: true</span></span>
<span class="line"><span style="color:#6A737D;">   * })</span></span>
<span class="line"><span style="color:#6A737D;">   */</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">loadFloatingVueStyles</span><span style="color:#F97583;">?:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">boolean</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">   * Determine whether to load default styles.</span></span>
<span class="line"><span style="color:#6A737D;">   * Only works when \`css\` and \`scss\` is \`false\` and \`theme\` is \`legacy\`.</span></span>
<span class="line"><span style="color:#6A737D;">   *</span></span>
<span class="line"><span style="color:#6A737D;">   * </span><span style="color:#F97583;">@default</span><span style="color:#6A737D;"> </span><span style="color:#E1E4E8;">true</span></span>
<span class="line"><span style="color:#6A737D;">   * </span><span style="color:#F97583;">@example</span></span>
<span class="line"><span style="color:#6A737D;">   * // nuxt.config.ts</span></span>
<span class="line"><span style="color:#6A737D;">   * export default defineConfig({</span></span>
<span class="line"><span style="color:#6A737D;">   *  morpheme: {</span></span>
<span class="line"><span style="color:#6A737D;">   *   loadDefaultStyles: false</span></span>
<span class="line"><span style="color:#6A737D;">   * })</span></span>
<span class="line"><span style="color:#6A737D;">   */</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">loadDefaultStyles</span><span style="color:#F97583;">?:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">boolean</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">   * Determine whether to load dark mode styles.</span></span>
<span class="line"><span style="color:#6A737D;">   *</span></span>
<span class="line"><span style="color:#6A737D;">   * </span><span style="color:#F97583;">@default</span><span style="color:#6A737D;"> </span><span style="color:#E1E4E8;">false</span></span>
<span class="line"><span style="color:#6A737D;">   * </span><span style="color:#F97583;">@example</span></span>
<span class="line"><span style="color:#6A737D;">   * // nuxt.config.ts</span></span>
<span class="line"><span style="color:#6A737D;">   * export default defineConfig({</span></span>
<span class="line"><span style="color:#6A737D;">   *  morpheme: {</span></span>
<span class="line"><span style="color:#6A737D;">   *   darkMode: true</span></span>
<span class="line"><span style="color:#6A737D;">   * })</span></span>
<span class="line"><span style="color:#6A737D;">   */</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">darkMode</span><span style="color:#F97583;">?:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">boolean</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">   * Determine whether to optimize default deps.</span></span>
<span class="line"><span style="color:#6A737D;">   *</span></span>
<span class="line"><span style="color:#6A737D;">   * </span><span style="color:#F97583;">@default</span><span style="color:#6A737D;"> </span><span style="color:#E1E4E8;">false</span></span>
<span class="line"><span style="color:#6A737D;">   * </span><span style="color:#F97583;">@example</span></span>
<span class="line"><span style="color:#6A737D;">   * // nuxt.config.ts</span></span>
<span class="line"><span style="color:#6A737D;">   * export default defineConfig({</span></span>
<span class="line"><span style="color:#6A737D;">   *  morpheme: {</span></span>
<span class="line"><span style="color:#6A737D;">   *   optimizeDeps: true</span></span>
<span class="line"><span style="color:#6A737D;">   * })</span></span>
<span class="line"><span style="color:#6A737D;">   */</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">optimizeDeps</span><span style="color:#F97583;">?:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">boolean</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">   * Name of the theme to use. Available options: \`morpheme\`, \`legacy\`.</span></span>
<span class="line"><span style="color:#6A737D;">   *</span></span>
<span class="line"><span style="color:#6A737D;">   * </span><span style="color:#F97583;">@default</span><span style="color:#6A737D;"> </span><span style="color:#9ECBFF;">&#39;</span><span style="color:#E1E4E8;">morpheme</span><span style="color:#9ECBFF;">&#39;</span></span>
<span class="line"><span style="color:#6A737D;">   * </span><span style="color:#F97583;">@example</span></span>
<span class="line"><span style="color:#6A737D;">   * // nuxt.config.ts</span></span>
<span class="line"><span style="color:#6A737D;">   * export default defineConfig({</span></span>
<span class="line"><span style="color:#6A737D;">   *  morpheme: {</span></span>
<span class="line"><span style="color:#6A737D;">   *   theme: &#39;morpheme&#39;</span></span>
<span class="line"><span style="color:#6A737D;">   * })</span></span>
<span class="line"><span style="color:#6A737D;">   */</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">theme</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;morpheme&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;legacy&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">   * Determine whether to use experimental components.</span></span>
<span class="line"><span style="color:#6A737D;">   *</span></span>
<span class="line"><span style="color:#6A737D;">   * </span><span style="color:#F97583;">@default</span><span style="color:#6A737D;"> </span><span style="color:#E1E4E8;">false</span></span>
<span class="line"><span style="color:#6A737D;">   * </span><span style="color:#F97583;">@example</span></span>
<span class="line"><span style="color:#6A737D;">   * // nuxt.config.ts</span></span>
<span class="line"><span style="color:#6A737D;">   * export default defineConfig({</span></span>
<span class="line"><span style="color:#6A737D;">   * morpheme: {</span></span>
<span class="line"><span style="color:#6A737D;">   *  experimentalComponents: true</span></span>
<span class="line"><span style="color:#6A737D;">   * })</span></span>
<span class="line"><span style="color:#6A737D;">   */</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">experimentalComponents</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">boolean</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">   * Component prefix.</span></span>
<span class="line"><span style="color:#6A737D;">   *</span></span>
<span class="line"><span style="color:#6A737D;">   * </span><span style="color:#F97583;">@default</span><span style="color:#6A737D;"> </span><span style="color:#9ECBFF;">&#39;</span><span style="color:#E1E4E8;">V</span><span style="color:#9ECBFF;">&#39;</span></span>
<span class="line"><span style="color:#6A737D;">   * </span><span style="color:#F97583;">@example</span></span>
<span class="line"><span style="color:#6A737D;">   * // nuxt.config.ts</span></span>
<span class="line"><span style="color:#6A737D;">   * export default defineConfig({</span></span>
<span class="line"><span style="color:#6A737D;">   * morpheme: {</span></span>
<span class="line"><span style="color:#6A737D;">   * prefix: &#39;M&#39;</span></span>
<span class="line"><span style="color:#6A737D;">   * })</span></span>
<span class="line"><span style="color:#6A737D;">   */</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">prefix</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">string</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">interface</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ModuleOptions</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">   * Determine whether to load the css bundle.</span></span>
<span class="line"><span style="color:#6A737D;">   *</span></span>
<span class="line"><span style="color:#6A737D;">   * </span><span style="color:#D73A49;">@default</span><span style="color:#6A737D;"> </span><span style="color:#24292E;">false</span></span>
<span class="line"><span style="color:#6A737D;">   * </span><span style="color:#D73A49;">@example</span></span>
<span class="line"><span style="color:#6A737D;">   * // nuxt.config.ts</span></span>
<span class="line"><span style="color:#6A737D;">   * export default defineConfig({</span></span>
<span class="line"><span style="color:#6A737D;">   *  morpheme: {</span></span>
<span class="line"><span style="color:#6A737D;">   *   css: true</span></span>
<span class="line"><span style="color:#6A737D;">   * })</span></span>
<span class="line"><span style="color:#6A737D;">   */</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">css</span><span style="color:#D73A49;">?:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">boolean</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">   * Determine whether to load the sass bundle.</span></span>
<span class="line"><span style="color:#6A737D;">   *</span></span>
<span class="line"><span style="color:#6A737D;">   * </span><span style="color:#D73A49;">@default</span><span style="color:#6A737D;"> </span><span style="color:#24292E;">false</span></span>
<span class="line"><span style="color:#6A737D;">   * </span><span style="color:#D73A49;">@example</span></span>
<span class="line"><span style="color:#6A737D;">   * // nuxt.config.ts</span></span>
<span class="line"><span style="color:#6A737D;">   * export default defineConfig({</span></span>
<span class="line"><span style="color:#6A737D;">   *  morpheme: {</span></span>
<span class="line"><span style="color:#6A737D;">   *   sass: true</span></span>
<span class="line"><span style="color:#6A737D;">   * })</span></span>
<span class="line"><span style="color:#6A737D;">   */</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">sass</span><span style="color:#D73A49;">?:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">boolean</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">   * Determine whether to auto-imports the components.</span></span>
<span class="line"><span style="color:#6A737D;">   *</span></span>
<span class="line"><span style="color:#6A737D;">   * </span><span style="color:#D73A49;">@default</span><span style="color:#6A737D;"> </span><span style="color:#24292E;">true</span></span>
<span class="line"><span style="color:#6A737D;">   * </span><span style="color:#D73A49;">@example</span></span>
<span class="line"><span style="color:#6A737D;">   * // nuxt.config.ts</span></span>
<span class="line"><span style="color:#6A737D;">   * export default defineConfig({</span></span>
<span class="line"><span style="color:#6A737D;">   *  morpheme: {</span></span>
<span class="line"><span style="color:#6A737D;">   *   components: true</span></span>
<span class="line"><span style="color:#6A737D;">   * })</span></span>
<span class="line"><span style="color:#6A737D;">   */</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">components</span><span style="color:#D73A49;">?:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">boolean</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">   * Determine whether to transpile dependencies.</span></span>
<span class="line"><span style="color:#6A737D;">   *</span></span>
<span class="line"><span style="color:#6A737D;">   * </span><span style="color:#D73A49;">@default</span><span style="color:#6A737D;"> </span><span style="color:#24292E;">true</span></span>
<span class="line"><span style="color:#6A737D;">   * </span><span style="color:#D73A49;">@example</span></span>
<span class="line"><span style="color:#6A737D;">   * // nuxt.config.ts</span></span>
<span class="line"><span style="color:#6A737D;">   * export default defineConfig({</span></span>
<span class="line"><span style="color:#6A737D;">   *  morpheme: {</span></span>
<span class="line"><span style="color:#6A737D;">   *   transpileDeps: true</span></span>
<span class="line"><span style="color:#6A737D;">   * })</span></span>
<span class="line"><span style="color:#6A737D;">   */</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">transpileDeps</span><span style="color:#D73A49;">?:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">boolean</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">   * Determine whether to load floating vue styles. Only works when \`theme\` is \`legacy\`.</span></span>
<span class="line"><span style="color:#6A737D;">   *</span></span>
<span class="line"><span style="color:#6A737D;">   * </span><span style="color:#D73A49;">@default</span><span style="color:#6A737D;"> </span><span style="color:#24292E;">true</span></span>
<span class="line"><span style="color:#6A737D;">   * </span><span style="color:#D73A49;">@example</span></span>
<span class="line"><span style="color:#6A737D;">   * // nuxt.config.ts</span></span>
<span class="line"><span style="color:#6A737D;">   * export default defineConfig({</span></span>
<span class="line"><span style="color:#6A737D;">   *  morpheme: {</span></span>
<span class="line"><span style="color:#6A737D;">   *   loadFloatingVueStyles: true</span></span>
<span class="line"><span style="color:#6A737D;">   * })</span></span>
<span class="line"><span style="color:#6A737D;">   */</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">loadFloatingVueStyles</span><span style="color:#D73A49;">?:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">boolean</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">   * Determine whether to load default styles.</span></span>
<span class="line"><span style="color:#6A737D;">   * Only works when \`css\` and \`scss\` is \`false\` and \`theme\` is \`legacy\`.</span></span>
<span class="line"><span style="color:#6A737D;">   *</span></span>
<span class="line"><span style="color:#6A737D;">   * </span><span style="color:#D73A49;">@default</span><span style="color:#6A737D;"> </span><span style="color:#24292E;">true</span></span>
<span class="line"><span style="color:#6A737D;">   * </span><span style="color:#D73A49;">@example</span></span>
<span class="line"><span style="color:#6A737D;">   * // nuxt.config.ts</span></span>
<span class="line"><span style="color:#6A737D;">   * export default defineConfig({</span></span>
<span class="line"><span style="color:#6A737D;">   *  morpheme: {</span></span>
<span class="line"><span style="color:#6A737D;">   *   loadDefaultStyles: false</span></span>
<span class="line"><span style="color:#6A737D;">   * })</span></span>
<span class="line"><span style="color:#6A737D;">   */</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">loadDefaultStyles</span><span style="color:#D73A49;">?:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">boolean</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">   * Determine whether to load dark mode styles.</span></span>
<span class="line"><span style="color:#6A737D;">   *</span></span>
<span class="line"><span style="color:#6A737D;">   * </span><span style="color:#D73A49;">@default</span><span style="color:#6A737D;"> </span><span style="color:#24292E;">false</span></span>
<span class="line"><span style="color:#6A737D;">   * </span><span style="color:#D73A49;">@example</span></span>
<span class="line"><span style="color:#6A737D;">   * // nuxt.config.ts</span></span>
<span class="line"><span style="color:#6A737D;">   * export default defineConfig({</span></span>
<span class="line"><span style="color:#6A737D;">   *  morpheme: {</span></span>
<span class="line"><span style="color:#6A737D;">   *   darkMode: true</span></span>
<span class="line"><span style="color:#6A737D;">   * })</span></span>
<span class="line"><span style="color:#6A737D;">   */</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">darkMode</span><span style="color:#D73A49;">?:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">boolean</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">   * Determine whether to optimize default deps.</span></span>
<span class="line"><span style="color:#6A737D;">   *</span></span>
<span class="line"><span style="color:#6A737D;">   * </span><span style="color:#D73A49;">@default</span><span style="color:#6A737D;"> </span><span style="color:#24292E;">false</span></span>
<span class="line"><span style="color:#6A737D;">   * </span><span style="color:#D73A49;">@example</span></span>
<span class="line"><span style="color:#6A737D;">   * // nuxt.config.ts</span></span>
<span class="line"><span style="color:#6A737D;">   * export default defineConfig({</span></span>
<span class="line"><span style="color:#6A737D;">   *  morpheme: {</span></span>
<span class="line"><span style="color:#6A737D;">   *   optimizeDeps: true</span></span>
<span class="line"><span style="color:#6A737D;">   * })</span></span>
<span class="line"><span style="color:#6A737D;">   */</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">optimizeDeps</span><span style="color:#D73A49;">?:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">boolean</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">   * Name of the theme to use. Available options: \`morpheme\`, \`legacy\`.</span></span>
<span class="line"><span style="color:#6A737D;">   *</span></span>
<span class="line"><span style="color:#6A737D;">   * </span><span style="color:#D73A49;">@default</span><span style="color:#6A737D;"> </span><span style="color:#032F62;">&#39;</span><span style="color:#24292E;">morpheme</span><span style="color:#032F62;">&#39;</span></span>
<span class="line"><span style="color:#6A737D;">   * </span><span style="color:#D73A49;">@example</span></span>
<span class="line"><span style="color:#6A737D;">   * // nuxt.config.ts</span></span>
<span class="line"><span style="color:#6A737D;">   * export default defineConfig({</span></span>
<span class="line"><span style="color:#6A737D;">   *  morpheme: {</span></span>
<span class="line"><span style="color:#6A737D;">   *   theme: &#39;morpheme&#39;</span></span>
<span class="line"><span style="color:#6A737D;">   * })</span></span>
<span class="line"><span style="color:#6A737D;">   */</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">theme</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;morpheme&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">|</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;legacy&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">   * Determine whether to use experimental components.</span></span>
<span class="line"><span style="color:#6A737D;">   *</span></span>
<span class="line"><span style="color:#6A737D;">   * </span><span style="color:#D73A49;">@default</span><span style="color:#6A737D;"> </span><span style="color:#24292E;">false</span></span>
<span class="line"><span style="color:#6A737D;">   * </span><span style="color:#D73A49;">@example</span></span>
<span class="line"><span style="color:#6A737D;">   * // nuxt.config.ts</span></span>
<span class="line"><span style="color:#6A737D;">   * export default defineConfig({</span></span>
<span class="line"><span style="color:#6A737D;">   * morpheme: {</span></span>
<span class="line"><span style="color:#6A737D;">   *  experimentalComponents: true</span></span>
<span class="line"><span style="color:#6A737D;">   * })</span></span>
<span class="line"><span style="color:#6A737D;">   */</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">experimentalComponents</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">boolean</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">   * Component prefix.</span></span>
<span class="line"><span style="color:#6A737D;">   *</span></span>
<span class="line"><span style="color:#6A737D;">   * </span><span style="color:#D73A49;">@default</span><span style="color:#6A737D;"> </span><span style="color:#032F62;">&#39;</span><span style="color:#24292E;">V</span><span style="color:#032F62;">&#39;</span></span>
<span class="line"><span style="color:#6A737D;">   * </span><span style="color:#D73A49;">@example</span></span>
<span class="line"><span style="color:#6A737D;">   * // nuxt.config.ts</span></span>
<span class="line"><span style="color:#6A737D;">   * export default defineConfig({</span></span>
<span class="line"><span style="color:#6A737D;">   * morpheme: {</span></span>
<span class="line"><span style="color:#6A737D;">   * prefix: &#39;M&#39;</span></span>
<span class="line"><span style="color:#6A737D;">   * })</span></span>
<span class="line"><span style="color:#6A737D;">   */</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">prefix</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>Default Options:</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">css</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">sass</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">components</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">transpileDeps</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">loadFloatingVueStyles</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">loadDefaultStyles</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">darkMode</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">optimizeDeps</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">theme</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;morpheme&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">experimentalComponents</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">prefix</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;V&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">css</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">sass</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">components</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">transpileDeps</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">loadFloatingVueStyles</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">loadDefaultStyles</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">darkMode</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">optimizeDeps</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">theme</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;morpheme&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">experimentalComponents</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">prefix</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;V&#39;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>Config example:</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// https://nuxt.com/docs/api/configuration/nuxt-config</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">defineNuxtConfig</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  modules: [</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&#39;@morpheme/nuxt&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&#39;@nuxtjs/tailwindcss&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">  ],</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// https://gitsindonesia.github.io/ui-component/guide/nuxt.html#options</span></span>
<span class="line"><span style="color:#E1E4E8;">  morpheme: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// use \`morpheme\` theme</span></span>
<span class="line"><span style="color:#E1E4E8;">    theme: </span><span style="color:#9ECBFF;">&#39;morpheme&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// enable dark mode</span></span>
<span class="line"><span style="color:#E1E4E8;">    darkMode: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// load SASS bundle instead of CSS</span></span>
<span class="line"><span style="color:#E1E4E8;">    sass: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// https://nuxt.com/docs/api/configuration/nuxt-config</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">defineNuxtConfig</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">  modules: [</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&#39;@morpheme/nuxt&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&#39;@nuxtjs/tailwindcss&#39;</span></span>
<span class="line"><span style="color:#24292E;">  ],</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// https://gitsindonesia.github.io/ui-component/guide/nuxt.html#options</span></span>
<span class="line"><span style="color:#24292E;">  morpheme: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// use \`morpheme\` theme</span></span>
<span class="line"><span style="color:#24292E;">    theme: </span><span style="color:#032F62;">&#39;morpheme&#39;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// enable dark mode</span></span>
<span class="line"><span style="color:#24292E;">    darkMode: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// load SASS bundle instead of CSS</span></span>
<span class="line"><span style="color:#24292E;">    sass: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">});</span></span></code></pre></div><h2 id="experimental-components" tabindex="-1">Experimental Components <a class="header-anchor" href="#experimental-components" aria-label="Permalink to &quot;Experimental Components&quot;">​</a></h2><p>By default, experimental components are not auto-imported. That&#39;s mean you need to import it manually or you can auto-import it by setting <code>experimentalComponents</code> option to <code>true</code> in your Nuxt config.</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark has-highlighted-lines vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// https://nuxt.com/docs/api/configuration/nuxt-config</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">defineNuxtConfig</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  modules: [</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&#39;@morpheme/nuxt&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&#39;@nuxtjs/tailwindcss&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">  ],</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// https://gitsindonesia.github.io/ui-component/guide/nuxt.html#options</span></span>
<span class="line"><span style="color:#E1E4E8;">  morpheme: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// use \`morpheme\` theme</span></span>
<span class="line"><span style="color:#E1E4E8;">    theme: </span><span style="color:#9ECBFF;">&#39;morpheme&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// enable dark mode</span></span>
<span class="line"><span style="color:#E1E4E8;">    darkMode: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// load SASS bundle instead of CSS</span></span>
<span class="line"><span style="color:#E1E4E8;">    sass: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// auto-import experimental components</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">    experimentalComponents: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span></code></pre><pre class="shiki github-light has-highlighted-lines vp-code-light"><code><span class="line"><span style="color:#6A737D;">// https://nuxt.com/docs/api/configuration/nuxt-config</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">defineNuxtConfig</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">  modules: [</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&#39;@morpheme/nuxt&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&#39;@nuxtjs/tailwindcss&#39;</span></span>
<span class="line"><span style="color:#24292E;">  ],</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// https://gitsindonesia.github.io/ui-component/guide/nuxt.html#options</span></span>
<span class="line"><span style="color:#24292E;">  morpheme: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// use \`morpheme\` theme</span></span>
<span class="line"><span style="color:#24292E;">    theme: </span><span style="color:#032F62;">&#39;morpheme&#39;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// enable dark mode</span></span>
<span class="line"><span style="color:#24292E;">    darkMode: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// load SASS bundle instead of CSS</span></span>
<span class="line"><span style="color:#24292E;">    sass: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// auto-import experimental components</span></span>
<span class="line highlighted"><span style="color:#24292E;">    experimentalComponents: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">});</span></span></code></pre></div><p>When you auto-import the experimental components, you will notice some component name is conflict with the existing one. That&#39;s because some of the experimental components are built to replace the current exisiting components.</p><h3 id="list-of-experimental-components" tabindex="-1">List of experimental components <a class="header-anchor" href="#list-of-experimental-components" aria-label="Permalink to &quot;List of experimental components&quot;">​</a></h3><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">experimentalComponents</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">AddComponentOptions</span><span style="color:#E1E4E8;">[] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    name: </span><span style="color:#9ECBFF;">&#39;Select&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    filePath: </span><span style="color:#9ECBFF;">&#39;@morpheme/select/src/Select.vue&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    name: </span><span style="color:#9ECBFF;">&#39;Autocomplete&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    filePath: </span><span style="color:#9ECBFF;">&#39;@morpheme/autocomplete/src/Autocomplete.vue&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    name: </span><span style="color:#9ECBFF;">&#39;Checkbox&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    filePath: </span><span style="color:#9ECBFF;">&#39;@morpheme/forms/src/checkbox/Checkbox.vue&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    name: </span><span style="color:#9ECBFF;">&#39;CheckboxField&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    filePath: </span><span style="color:#9ECBFF;">&#39;@morpheme/forms/src/checkbox/CheckboxField.vue&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    name: </span><span style="color:#9ECBFF;">&#39;FileInput&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    filePath: </span><span style="color:#9ECBFF;">&#39;@morpheme/forms/src/file-input/FileInput.vue&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    name: </span><span style="color:#9ECBFF;">&#39;FileInputButtonActivator&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    filePath: </span><span style="color:#9ECBFF;">&#39;@morpheme/forms/src/file-input/FileInputButtonActivator.vue&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    name: </span><span style="color:#9ECBFF;">&#39;FileInputDefaultActivator&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    filePath: </span><span style="color:#9ECBFF;">&#39;@morpheme/forms/src/file-input/FileInputDefaultActivator.vue&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    name: </span><span style="color:#9ECBFF;">&#39;FileInputField&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    filePath: </span><span style="color:#9ECBFF;">&#39;@morpheme/forms/src/file-input/FileInputField.vue&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    name: </span><span style="color:#9ECBFF;">&#39;FileInputItem&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    filePath: </span><span style="color:#9ECBFF;">&#39;@morpheme/forms/src/file-input/FileInputItem.vue&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    name: </span><span style="color:#9ECBFF;">&#39;FileInputItems&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    filePath: </span><span style="color:#9ECBFF;">&#39;@morpheme/forms/src/file-input/FileInputItems.vue&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    name: </span><span style="color:#9ECBFF;">&#39;FormSelect&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    filePath: </span><span style="color:#9ECBFF;">&#39;@morpheme/forms/src/form-select/Select.vue&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    name: </span><span style="color:#9ECBFF;">&#39;FormSelectInputField&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    filePath: </span><span style="color:#9ECBFF;">&#39;@morpheme/forms/src/form-select/SelectField.vue&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    name: </span><span style="color:#9ECBFF;">&#39;Input&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    filePath: </span><span style="color:#9ECBFF;">&#39;@morpheme/forms/src/input/Input.vue&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    name: </span><span style="color:#9ECBFF;">&#39;InputField&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    filePath: </span><span style="color:#9ECBFF;">&#39;@morpheme/forms/src/input/InputField.vue&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    name: </span><span style="color:#9ECBFF;">&#39;SelectOptions&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    filePath: </span><span style="color:#9ECBFF;">&#39;@morpheme/forms/src/input/SelectOptions.vue&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    name: </span><span style="color:#9ECBFF;">&#39;Radio&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    filePath: </span><span style="color:#9ECBFF;">&#39;@morpheme/forms/src/radio/Radio.vue&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    name: </span><span style="color:#9ECBFF;">&#39;Textarea&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    filePath: </span><span style="color:#9ECBFF;">&#39;@morpheme/forms/src/textarea/TextareaInput.vue&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    name: </span><span style="color:#9ECBFF;">&#39;TextareaField&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    filePath: </span><span style="color:#9ECBFF;">&#39;@morpheme/forms/src/textarea/TextareaInputField.vue&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">];</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">experimentalComponents</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">AddComponentOptions</span><span style="color:#24292E;">[] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    name: </span><span style="color:#032F62;">&#39;Select&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    filePath: </span><span style="color:#032F62;">&#39;@morpheme/select/src/Select.vue&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    name: </span><span style="color:#032F62;">&#39;Autocomplete&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    filePath: </span><span style="color:#032F62;">&#39;@morpheme/autocomplete/src/Autocomplete.vue&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    name: </span><span style="color:#032F62;">&#39;Checkbox&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    filePath: </span><span style="color:#032F62;">&#39;@morpheme/forms/src/checkbox/Checkbox.vue&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    name: </span><span style="color:#032F62;">&#39;CheckboxField&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    filePath: </span><span style="color:#032F62;">&#39;@morpheme/forms/src/checkbox/CheckboxField.vue&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    name: </span><span style="color:#032F62;">&#39;FileInput&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    filePath: </span><span style="color:#032F62;">&#39;@morpheme/forms/src/file-input/FileInput.vue&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    name: </span><span style="color:#032F62;">&#39;FileInputButtonActivator&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    filePath: </span><span style="color:#032F62;">&#39;@morpheme/forms/src/file-input/FileInputButtonActivator.vue&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    name: </span><span style="color:#032F62;">&#39;FileInputDefaultActivator&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    filePath: </span><span style="color:#032F62;">&#39;@morpheme/forms/src/file-input/FileInputDefaultActivator.vue&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    name: </span><span style="color:#032F62;">&#39;FileInputField&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    filePath: </span><span style="color:#032F62;">&#39;@morpheme/forms/src/file-input/FileInputField.vue&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    name: </span><span style="color:#032F62;">&#39;FileInputItem&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    filePath: </span><span style="color:#032F62;">&#39;@morpheme/forms/src/file-input/FileInputItem.vue&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    name: </span><span style="color:#032F62;">&#39;FileInputItems&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    filePath: </span><span style="color:#032F62;">&#39;@morpheme/forms/src/file-input/FileInputItems.vue&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    name: </span><span style="color:#032F62;">&#39;FormSelect&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    filePath: </span><span style="color:#032F62;">&#39;@morpheme/forms/src/form-select/Select.vue&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    name: </span><span style="color:#032F62;">&#39;FormSelectInputField&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    filePath: </span><span style="color:#032F62;">&#39;@morpheme/forms/src/form-select/SelectField.vue&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    name: </span><span style="color:#032F62;">&#39;Input&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    filePath: </span><span style="color:#032F62;">&#39;@morpheme/forms/src/input/Input.vue&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    name: </span><span style="color:#032F62;">&#39;InputField&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    filePath: </span><span style="color:#032F62;">&#39;@morpheme/forms/src/input/InputField.vue&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    name: </span><span style="color:#032F62;">&#39;SelectOptions&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    filePath: </span><span style="color:#032F62;">&#39;@morpheme/forms/src/input/SelectOptions.vue&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    name: </span><span style="color:#032F62;">&#39;Radio&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    filePath: </span><span style="color:#032F62;">&#39;@morpheme/forms/src/radio/Radio.vue&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    name: </span><span style="color:#032F62;">&#39;Textarea&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    filePath: </span><span style="color:#032F62;">&#39;@morpheme/forms/src/textarea/TextareaInput.vue&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    name: </span><span style="color:#032F62;">&#39;TextareaField&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    filePath: </span><span style="color:#032F62;">&#39;@morpheme/forms/src/textarea/TextareaInputField.vue&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">];</span></span></code></pre></div><p>You can view the latest experimental component list <a href="https://github.com/gitsindonesia/ui-component/blob/main/packages/nuxt/src/module.ts#L554" target="_blank" rel="noreferrer">here</a>.</p>`,31),o=[e];function t(c,r,y,i,E,m){return n(),a("div",null,o)}const h=s(p,[["render",t]]);export{u as __pageData,h as default};
