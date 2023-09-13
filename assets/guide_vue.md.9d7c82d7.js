import{_ as s,o as a,c as n,Q as p}from"./chunks/framework.9d71178d.js";const l="/ui-component/getting-started-1.png",e="/ui-component/getting-started-2.png",g=JSON.parse('{"title":"Vue Setup Guide","description":"","frontmatter":{},"headers":[],"relativePath":"guide/vue.md","filePath":"guide/vue.md"}'),o={name:"guide/vue.md"},t=p(`<h1 id="vue-setup-guide" tabindex="-1">Vue Setup Guide <a class="header-anchor" href="#vue-setup-guide" aria-label="Permalink to &quot;Vue Setup Guide&quot;">​</a></h1><p>This section will help you build a basic Vue app with Morpheme UI from ground up. If you already have an existing project and would like to keep documentation inside the project, start from Step 2.</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>Checkout <a href="/ui-component/tools/cli.html">Morpheme CLI</a> to setup your application quickly.</p></div><div class="info custom-block"><p class="custom-block-title">INFO</p><p>We recommend using <code>yarn</code> or <code>pnpm</code> as the package manager. The default <code>npm</code> should also works fine.</p></div><h2 id="step-1-create-new-project" tabindex="-1">Step 1. Create new project <a class="header-anchor" href="#step-1-create-new-project" aria-label="Permalink to &quot;Step 1. Create new project&quot;">​</a></h2><p>Create your Vue 3 project via <code>create-vue</code> CLI and install the dependencies.</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">npm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">init</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">vue@3</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">my-app</span></span>
<span class="line"><span style="color:#79B8FF;">cd</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">my-app</span></span>
<span class="line"><span style="color:#B392F0;">yarn</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">npm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">init</span><span style="color:#24292E;"> </span><span style="color:#032F62;">vue@3</span><span style="color:#24292E;"> </span><span style="color:#032F62;">my-app</span></span>
<span class="line"><span style="color:#005CC5;">cd</span><span style="color:#24292E;"> </span><span style="color:#032F62;">my-app</span></span>
<span class="line"><span style="color:#6F42C1;">yarn</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span></span></code></pre></div><p><img src="`+l+`" alt="Step 1"></p><h2 id="step-2-install-tailwind-css-and-morpheme-ui" tabindex="-1">Step 2. Install Tailwind CSS and Morpheme UI <a class="header-anchor" href="#step-2-install-tailwind-css-and-morpheme-ui" aria-label="Permalink to &quot;Step 2. Install Tailwind CSS and Morpheme UI&quot;">​</a></h2><p>Install <code>@morpheme/ui</code> and <code>tailwindcss</code> package:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">yarn</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">add</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">@morpheme/ui</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">@morpheme/themes</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">tailwindcss</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">postcss</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">autoprefixer</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">yarn</span><span style="color:#24292E;"> </span><span style="color:#032F62;">add</span><span style="color:#24292E;"> </span><span style="color:#032F62;">@morpheme/ui</span><span style="color:#24292E;"> </span><span style="color:#032F62;">@morpheme/themes</span><span style="color:#24292E;"> </span><span style="color:#032F62;">tailwindcss</span><span style="color:#24292E;"> </span><span style="color:#032F62;">postcss</span><span style="color:#24292E;"> </span><span style="color:#032F62;">autoprefixer</span></span></code></pre></div><div class="info custom-block"><p class="custom-block-title">INFO</p><p>If you want to use the SASS version of styling, you need to install the <code>sass</code> package.</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">yarn</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">add</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-D</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">sass</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">yarn</span><span style="color:#24292E;"> </span><span style="color:#032F62;">add</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-D</span><span style="color:#24292E;"> </span><span style="color:#032F62;">sass</span></span></code></pre></div></div><p>Next, generate the tailwind config files:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">npx</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">tailwindcss</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">init</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-p</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">npx</span><span style="color:#24292E;"> </span><span style="color:#032F62;">tailwindcss</span><span style="color:#24292E;"> </span><span style="color:#032F62;">init</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-p</span></span></code></pre></div><p>Next, register the Morpheme UI preset and add the component folders the <code>content</code> section in the <code>tailwind.config.js</code> file:</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark has-highlighted-lines vp-code-dark"><code><span class="line"><span style="color:#6A737D;">/** </span><span style="color:#F97583;">@type</span><span style="color:#6A737D;"> </span><span style="color:#B392F0;">{import(&#39;tailwindcss&#39;).Config}</span><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#79B8FF;">module</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">exports</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  content: [</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&quot;./index.html&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&quot;./src/**/*.{js,ts,jsx,tsx,vue}&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&quot;./node_modules/@morpheme/**/src/**/*.{vue,js,ts,jsx,tsx}&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  ],</span></span>
<span class="line"><span style="color:#E1E4E8;">  theme: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    extend: {},</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  plugins: [],</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">  presets: [</span><span style="color:#B392F0;">require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;@morpheme/tailwind-config/preset&quot;</span><span style="color:#E1E4E8;">)],</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span></code></pre><pre class="shiki github-light has-highlighted-lines vp-code-light"><code><span class="line"><span style="color:#6A737D;">/** </span><span style="color:#D73A49;">@type</span><span style="color:#6A737D;"> </span><span style="color:#6F42C1;">{import(&#39;tailwindcss&#39;).Config}</span><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#005CC5;">module</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">exports</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  content: [</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&quot;./index.html&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&quot;./src/**/*.{js,ts,jsx,tsx,vue}&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line highlighted"><span style="color:#24292E;">    </span><span style="color:#032F62;">&quot;./node_modules/@morpheme/**/src/**/*.{vue,js,ts,jsx,tsx}&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  ],</span></span>
<span class="line"><span style="color:#24292E;">  theme: {</span></span>
<span class="line"><span style="color:#24292E;">    extend: {},</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  plugins: [],</span></span>
<span class="line highlighted"><span style="color:#24292E;">  presets: [</span><span style="color:#6F42C1;">require</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;@morpheme/tailwind-config/preset&quot;</span><span style="color:#24292E;">)],</span></span>
<span class="line"><span style="color:#24292E;">};</span></span></code></pre></div><p>Next, add the Tailwind directives to <code>src/assets/main.css</code>:</p><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">@tailwind</span><span style="color:#E1E4E8;"> base;</span></span>
<span class="line"><span style="color:#F97583;">@tailwind</span><span style="color:#E1E4E8;"> components;</span></span>
<span class="line"><span style="color:#F97583;">@tailwind</span><span style="color:#E1E4E8;"> utilities;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">@tailwind</span><span style="color:#24292E;"> base;</span></span>
<span class="line"><span style="color:#D73A49;">@tailwind</span><span style="color:#24292E;"> components;</span></span>
<span class="line"><span style="color:#D73A49;">@tailwind</span><span style="color:#24292E;"> utilities;</span></span></code></pre></div><p>Next, open <code>src/main.ts</code>. Import and use the <code>MorphemeUI</code> plugin from <code>@morpheme/ui</code> and also load the styles from <code>@morpheme/ui/styles</code> for CSS bundle or use <code>@morpheme/ui/styles.scss</code> if you want to use the SCSS version instead.</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark has-highlighted-lines vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// main.ts</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { createApp } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;vue&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> App </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;./App.vue&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> router </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;./router&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line highlighted"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> MorphemeUI </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;@morpheme/ui&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// load CSS bundle</span></span>
<span class="line highlighted"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;@morpheme/themes/dist/morpheme/main.css&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// uncomment this line to enable dark mode</span></span>
<span class="line"><span style="color:#6A737D;">// import &#39;@morpheme/themes/dist/morpheme/main.dark.css&#39;;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// or uncomment this line to load SCSS styles</span></span>
<span class="line"><span style="color:#6A737D;">// import &#39;@morpheme/themes/src/morpheme/main.scss&#39;;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// uncomment this line to enable dark mode</span></span>
<span class="line"><span style="color:#6A737D;">// import &#39;@morpheme/themes/src/morpheme/main.dark.scss&#39;;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">app</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">createApp</span><span style="color:#E1E4E8;">(App);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">app.</span><span style="color:#B392F0;">use</span><span style="color:#E1E4E8;">(router);</span></span>
<span class="line"><span style="color:#E1E4E8;">app.</span><span style="color:#B392F0;">use</span><span style="color:#E1E4E8;">(MorphemeUI); </span><span style="color:#6A737D;">// &lt;-- use the plugin</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">app.</span><span style="color:#B392F0;">mount</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;#app&quot;</span><span style="color:#E1E4E8;">);</span></span></code></pre><pre class="shiki github-light has-highlighted-lines vp-code-light"><code><span class="line"><span style="color:#6A737D;">// main.ts</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { createApp } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;vue&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> App </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;./App.vue&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> router </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;./router&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line highlighted"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> MorphemeUI </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;@morpheme/ui&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// load CSS bundle</span></span>
<span class="line highlighted"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;@morpheme/themes/dist/morpheme/main.css&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// uncomment this line to enable dark mode</span></span>
<span class="line"><span style="color:#6A737D;">// import &#39;@morpheme/themes/dist/morpheme/main.dark.css&#39;;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// or uncomment this line to load SCSS styles</span></span>
<span class="line"><span style="color:#6A737D;">// import &#39;@morpheme/themes/src/morpheme/main.scss&#39;;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// uncomment this line to enable dark mode</span></span>
<span class="line"><span style="color:#6A737D;">// import &#39;@morpheme/themes/src/morpheme/main.dark.scss&#39;;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">app</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">createApp</span><span style="color:#24292E;">(App);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">app.</span><span style="color:#6F42C1;">use</span><span style="color:#24292E;">(router);</span></span>
<span class="line"><span style="color:#24292E;">app.</span><span style="color:#6F42C1;">use</span><span style="color:#24292E;">(MorphemeUI); </span><span style="color:#6A737D;">// &lt;-- use the plugin</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">app.</span><span style="color:#6F42C1;">mount</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;#app&quot;</span><span style="color:#24292E;">);</span></span></code></pre></div><h2 id="step-3-use-the-component" tabindex="-1">Step 3. Use the component <a class="header-anchor" href="#step-3-use-the-component" aria-label="Permalink to &quot;Step 3. Use the component&quot;">​</a></h2><p>Open <code>src/views/HomeView.vue</code> and replace the existing content with the code below:</p><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;container mx-auto p-6 space-y-3&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">h1</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;text-3xl font-bold text-gray-800&quot;</span><span style="color:#E1E4E8;">&gt;Morpheme UI&lt;/</span><span style="color:#85E89D;">h1</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#FDAEB7;font-style:italic;">VAlert</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">color</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;error&quot;</span><span style="color:#E1E4E8;">&gt; Alert text &lt;/</span><span style="color:#FDAEB7;font-style:italic;">VAlert</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#FDAEB7;font-style:italic;">VBtn</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">color</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;primary&quot;</span><span style="color:#E1E4E8;">&gt; Click me &lt;/</span><span style="color:#FDAEB7;font-style:italic;">VBtn</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#FDAEB7;font-style:italic;">VInput</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">placeholder</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;Type something...&quot;</span><span style="color:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;container mx-auto p-6 space-y-3&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">h1</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;text-3xl font-bold text-gray-800&quot;</span><span style="color:#24292E;">&gt;Morpheme UI&lt;/</span><span style="color:#22863A;">h1</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#B31D28;font-style:italic;">VAlert</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">color</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;error&quot;</span><span style="color:#24292E;">&gt; Alert text &lt;/</span><span style="color:#B31D28;font-style:italic;">VAlert</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#B31D28;font-style:italic;">VBtn</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">color</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;primary&quot;</span><span style="color:#24292E;">&gt; Click me &lt;/</span><span style="color:#B31D28;font-style:italic;">VBtn</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#B31D28;font-style:italic;">VInput</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">placeholder</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;Type something...&quot;</span><span style="color:#24292E;"> /&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><div class="info custom-block"><p class="custom-block-title">INFO</p><p>The component <code>VAlert</code>, <code>VBtn</code> and <code>VInput</code> are registered globally.</p></div><h2 id="step-4-boot-up-dev-server" tabindex="-1">Step 4. Boot up dev server <a class="header-anchor" href="#step-4-boot-up-dev-server" aria-label="Permalink to &quot;Step 4. Boot up dev server&quot;">​</a></h2><p>Run <code>dev</code> scripts and open <a href="http://localhost:5173" target="_blank" rel="noreferrer">http://localhost:5173</a>.</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">yarn dev</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">yarn dev</span></span></code></pre></div><p>If everything goes well, you should see something like in the browser:</p><p><img src="`+e+'" alt="Getting Started 2"></p><h2 id="what-s-next" tabindex="-1">What&#39;s Next ? <a class="header-anchor" href="#what-s-next" aria-label="Permalink to &quot;What&#39;s Next ?&quot;">​</a></h2><p>Congratulation! You have completed setup your application with Morpheme UI! Now you can start creating your application with ease.</p><p>If you don&#39;t want to repeat this step in the future, you can save and push the project to your GitHub or somewhere else as your personal starter kit and use it when needed. You can also you the official <a href="https://github.com/gitsindonesia/nuxt-starter" target="_blank" rel="noreferrer">Nuxt Starter</a> and Vue Starter <a href="https://github.com/gitsindonesia/ui-component/tree/main/starter/vue" target="_blank" rel="noreferrer">here</a>.</p>',32),c=[t];function r(i,y,E,d,h,u){return a(),n("div",null,c)}const F=s(o,[["render",r]]);export{g as __pageData,F as default};
