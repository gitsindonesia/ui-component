import{_ as s,o as a,c as n,Q as l}from"./chunks/framework.9d71178d.js";const u=JSON.parse('{"title":"Customization","description":"","frontmatter":{},"headers":[],"relativePath":"guide/customization.md","filePath":"guide/customization.md"}'),o={name:"guide/customization.md"},p=l(`<h1 id="customization" tabindex="-1">Customization <a class="header-anchor" href="#customization" aria-label="Permalink to &quot;Customization&quot;">​</a></h1><h2 id="brand-colors" tabindex="-1">Brand Colors <a class="header-anchor" href="#brand-colors" aria-label="Permalink to &quot;Brand Colors&quot;">​</a></h2><p>Morpheme UI includes 6 named colors with shades ranging from 50 to 900, similar to Tailwind CSS. These colors are:</p><ul><li>primary</li><li>secondary</li><li>info</li><li>warning</li><li>success</li><li>error</li></ul><p>You can view the full set of colors <a href="https://gits-ui.web.app/?path=/story/foundation-colors--colors" target="_blank" rel="noreferrer">here</a>.</p><h2 id="tailwind-preset" tabindex="-1">Tailwind Preset <a class="header-anchor" href="#tailwind-preset" aria-label="Permalink to &quot;Tailwind Preset&quot;">​</a></h2><p>Morpheme UI comes with a default Morpheme Design as a Tailwind Preset via <code>@morpheme/tailwind-config/preset</code>.</p><h2 id="creating-your-own-preset" tabindex="-1">Creating Your Own Preset <a class="header-anchor" href="#creating-your-own-preset" aria-label="Permalink to &quot;Creating Your Own Preset&quot;">​</a></h2><p>To create your own preset, you can copy the default preset to your project with the following command:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">cp</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">./node_modules/@morpheme/tailwind-config/preset.js</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">./src/preset.js</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">cp</span><span style="color:#24292E;"> </span><span style="color:#032F62;">./node_modules/@morpheme/tailwind-config/preset.js</span><span style="color:#24292E;"> </span><span style="color:#032F62;">./src/preset.js</span></span></code></pre></div><p>This will create a <code>preset.js</code> file in the <code>src</code> directory that you can then modify to fit your needs. For example, you can customize the colors as follows:</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">colors</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;tailwindcss/colors&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">module</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">exports</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  theme: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    extend: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      colors: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        primary: colors.indigo,</span></span>
<span class="line"><span style="color:#E1E4E8;">        secondary: colors.gray,</span></span>
<span class="line"><span style="color:#E1E4E8;">        info: colors.sky,</span></span>
<span class="line"><span style="color:#E1E4E8;">        success: colors.emerald,</span></span>
<span class="line"><span style="color:#E1E4E8;">        warning: colors.yellow,</span></span>
<span class="line"><span style="color:#E1E4E8;">        error: colors.rose,</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  presets: [</span><span style="color:#B392F0;">require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;@morpheme/tailwind-config/preset&#39;</span><span style="color:#E1E4E8;">)],</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">colors</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">require</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;tailwindcss/colors&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;">module</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">exports</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  theme: {</span></span>
<span class="line"><span style="color:#24292E;">    extend: {</span></span>
<span class="line"><span style="color:#24292E;">      colors: {</span></span>
<span class="line"><span style="color:#24292E;">        primary: colors.indigo,</span></span>
<span class="line"><span style="color:#24292E;">        secondary: colors.gray,</span></span>
<span class="line"><span style="color:#24292E;">        info: colors.sky,</span></span>
<span class="line"><span style="color:#24292E;">        success: colors.emerald,</span></span>
<span class="line"><span style="color:#24292E;">        warning: colors.yellow,</span></span>
<span class="line"><span style="color:#24292E;">        error: colors.rose,</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  presets: [</span><span style="color:#6F42C1;">require</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;@morpheme/tailwind-config/preset&#39;</span><span style="color:#24292E;">)],</span></span>
<span class="line"><span style="color:#24292E;">};</span></span></code></pre></div><p>Once you have customized your preset, you can use it in your project by changing the path to your local preset file in the Tailwind configuration:</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark has-highlighted-lines vp-code-dark"><code><span class="line"><span style="color:#6A737D;">/** </span><span style="color:#F97583;">@type</span><span style="color:#6A737D;"> </span><span style="color:#B392F0;">{import(&#39;tailwindcss&#39;).Config}</span><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#79B8FF;">module</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">exports</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  content: [</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&#39;./index.html&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&#39;./src/**/*.{js,ts,jsx,tsx,vue}&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&#39;./node_modules/@morpheme/**/src/**/*.{vue,js,ts,jsx,tsx}&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  ],</span></span>
<span class="line"><span style="color:#E1E4E8;">  theme: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    extend: {},</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  plugins: [],</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">  presets: [</span><span style="color:#B392F0;">require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;./src/preset&#39;</span><span style="color:#E1E4E8;">)],</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span></code></pre><pre class="shiki github-light has-highlighted-lines vp-code-light"><code><span class="line"><span style="color:#6A737D;">/** </span><span style="color:#D73A49;">@type</span><span style="color:#6A737D;"> </span><span style="color:#6F42C1;">{import(&#39;tailwindcss&#39;).Config}</span><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#005CC5;">module</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">exports</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  content: [</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&#39;./index.html&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&#39;./src/**/*.{js,ts,jsx,tsx,vue}&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&#39;./node_modules/@morpheme/**/src/**/*.{vue,js,ts,jsx,tsx}&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  ],</span></span>
<span class="line"><span style="color:#24292E;">  theme: {</span></span>
<span class="line"><span style="color:#24292E;">    extend: {},</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  plugins: [],</span></span>
<span class="line highlighted"><span style="color:#24292E;">  presets: [</span><span style="color:#6F42C1;">require</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;./src/preset&#39;</span><span style="color:#24292E;">)],</span></span>
<span class="line"><span style="color:#24292E;">};</span></span></code></pre></div><h2 id="customize-component-with-tailwind-arbitrary-values-and-css-properties" tabindex="-1">Customize Component with Tailwind Arbitrary Values and CSS Properties <a class="header-anchor" href="#customize-component-with-tailwind-arbitrary-values-and-css-properties" aria-label="Permalink to &quot;Customize Component with Tailwind Arbitrary Values and CSS Properties&quot;">​</a></h2><p>You&#39;ll be delighted to discover that you can use Tailwind arbitrary values and CSS properties to customize the appearance of not only your modal component but also other components within your Vue applications. Tailwind CSS makes it a breeze to create stylish and unique designs for various components. Let&#39;s see how it&#39;s done:</p><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#FDAEB7;font-style:italic;">VModal</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">model-value</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">title</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;Modal Title&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;</span></span>
<span class="line"><span style="color:#9ECBFF;">      [--v-modal-bg-color:var(--color-primary-600)]</span></span>
<span class="line"><span style="color:#9ECBFF;">      [--v-modal-title-color:var(--color-yellow-300)]</span></span>
<span class="line"><span style="color:#9ECBFF;">      [--v-modal-text-color:var(--color-white)]</span></span>
<span class="line"><span style="color:#9ECBFF;">      [--btn-text-color:var(--color-white)]</span></span>
<span class="line"><span style="color:#9ECBFF;">    &quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    Hello Tailwind!</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;/</span><span style="color:#FDAEB7;font-style:italic;">VModal</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#FDAEB7;font-style:italic;">VCard</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;</span></span>
<span class="line"><span style="color:#9ECBFF;">      [--card-bg-color:var(--color-gray-200)]</span></span>
<span class="line"><span style="color:#9ECBFF;">      [--card-color:var(--color-gray-800)]</span></span>
<span class="line"><span style="color:#9ECBFF;">    &quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">h2</span><span style="color:#E1E4E8;">&gt;Card Content&lt;/</span><span style="color:#85E89D;">h2</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">p</span><span style="color:#E1E4E8;">&gt;Some text in the card.&lt;/</span><span style="color:#85E89D;">p</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;/</span><span style="color:#FDAEB7;font-style:italic;">VCard</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#B31D28;font-style:italic;">VModal</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">model-value</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">title</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;Modal Title&quot;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;</span></span>
<span class="line"><span style="color:#032F62;">      [--v-modal-bg-color:var(--color-primary-600)]</span></span>
<span class="line"><span style="color:#032F62;">      [--v-modal-title-color:var(--color-yellow-300)]</span></span>
<span class="line"><span style="color:#032F62;">      [--v-modal-text-color:var(--color-white)]</span></span>
<span class="line"><span style="color:#032F62;">      [--btn-text-color:var(--color-white)]</span></span>
<span class="line"><span style="color:#032F62;">    &quot;</span></span>
<span class="line"><span style="color:#24292E;">  &gt;</span></span>
<span class="line"><span style="color:#24292E;">    Hello Tailwind!</span></span>
<span class="line"><span style="color:#24292E;">  &lt;/</span><span style="color:#B31D28;font-style:italic;">VModal</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#B31D28;font-style:italic;">VCard</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;</span></span>
<span class="line"><span style="color:#032F62;">      [--card-bg-color:var(--color-gray-200)]</span></span>
<span class="line"><span style="color:#032F62;">      [--card-color:var(--color-gray-800)]</span></span>
<span class="line"><span style="color:#032F62;">    &quot;</span></span>
<span class="line"><span style="color:#24292E;">  &gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">h2</span><span style="color:#24292E;">&gt;Card Content&lt;/</span><span style="color:#22863A;">h2</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">p</span><span style="color:#24292E;">&gt;Some text in the card.&lt;/</span><span style="color:#22863A;">p</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;/</span><span style="color:#B31D28;font-style:italic;">VCard</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><p>In the code above, we have a Vue component that includes a <code>&lt;VModal&gt;</code> component and another component called <code>&lt;VCard&gt;</code>. Both components can be customized using Tailwind arbitrary values and CSS properties applied directly to their respective class attributes.</p><p>Custom CSS properties are defined using double hyphens (e.g., <code>--v-modal-bg-color</code>, <code>--v-modal-title-color</code>, etc.). The values of these custom CSS properties are set to Tailwind CSS color variables (e.g., <code>--color-primary-600</code>, <code>--color-yellow-300</code>, etc.).</p><p>With this setup, you have the flexibility to modify the appearance of various components within your Vue application, creating a consistent and harmonious design across all elements.</p>`,20),e=[p];function t(c,r,i,y,E,d){return a(),n("div",null,e)}const m=s(o,[["render",t]]);export{u as __pageData,m as default};
