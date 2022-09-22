import{_ as s,c as n,o as a,a as e}from"./app.45e83902.js";const p="/ui-component/getting-started-1.png",l="/ui-component/getting-started-2.png",A=JSON.parse(`{"title":"Getting Started","description":"","frontmatter":{},"headers":[{"level":2,"title":"Step 1. Create new project","slug":"step-1-create-new-project","link":"#step-1-create-new-project","children":[]},{"level":2,"title":"Step 2. Install Tailwind CSS and GITS UI","slug":"step-2-install-tailwind-css-and-gits-ui","link":"#step-2-install-tailwind-css-and-gits-ui","children":[]},{"level":2,"title":"Step 3. Use the component","slug":"step-3-use-the-component","link":"#step-3-use-the-component","children":[]},{"level":2,"title":"Step 4. Boot up dev server","slug":"step-4-boot-up-dev-server","link":"#step-4-boot-up-dev-server","children":[]},{"level":2,"title":"What's Next ?","slug":"what-s-next","link":"#what-s-next","children":[]}],"relativePath":"guide/getting-started.md"}`),o={name:"guide/getting-started.md"},t=e(`<h1 id="getting-started" tabindex="-1">Getting Started <a class="header-anchor" href="#getting-started" aria-hidden="true">#</a></h1><p>This section will help you build a basic Vue app with GITS UI from ground up. If you already have an existing project and would like to keep documentation inside the project, start from Step 2.</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>Checkout <a href="https://github.com/gitsindonesia/ui-component/tree/main/examples/vue" target="_blank" rel="noreferrer">examples</a> to help you get started faster.</p></div><div class="info custom-block"><p class="custom-block-title">INFO</p><p>We recommend using <code>yarn</code> or <code>pnpm</code> as the package manager. The default <code>npm</code> should also works fine.</p></div><h2 id="step-1-create-new-project" tabindex="-1">Step 1. Create new project <a class="header-anchor" href="#step-1-create-new-project" aria-hidden="true">#</a></h2><p>Create your Vue 3 project via <code>create-vue</code> CLI and install the dependencies.</p><div class="language-bash"><button class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#A6ACCD;">npm init vue@3 my-app</span></span>
<span class="line"><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> my-app</span></span>
<span class="line"><span style="color:#A6ACCD;">yarn install</span></span>
<span class="line"></span></code></pre></div><p><img src="`+p+`" alt="Step 1"></p><h2 id="step-2-install-tailwind-css-and-gits-ui" tabindex="-1">Step 2. Install Tailwind CSS and GITS UI <a class="header-anchor" href="#step-2-install-tailwind-css-and-gits-ui" aria-hidden="true">#</a></h2><p>Install <code>@gits-id/ui</code> and <code>tailwindcss</code> package:</p><div class="language-bash"><button class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#A6ACCD;">yarn add @gits-id/ui tailwindcss postcss autoprefixer</span></span>
<span class="line"></span></code></pre></div><p>Next, generate the tailwind config files:</p><div class="language-bash"><button class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#A6ACCD;">npx tailwindcss init -p</span></span>
<span class="line"></span></code></pre></div><p>Next, register the GITS UI preset and add the component folders the <code>content</code> section in the <code>tailwind.config.cjs</code> file:</p><div class="language-js"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#676E95;">/** </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">type</span><span style="color:#676E95;"> </span><span style="color:#89DDFF;">{</span><span style="color:#FFCB6B;">import(&#39;tailwindcss&#39;).Config</span><span style="color:#89DDFF;">}</span><span style="color:#676E95;"> */</span></span>
<span class="line"><span style="color:#89DDFF;">module.exports</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">content</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">./index.html</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">./src/**/*.{js,ts,jsx,tsx,vue}</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">./node_modules/@gits-id/**/src/**/*.{vue,js,ts,jsx,tsx}</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  ]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">theme</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">extend</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{},</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">plugins</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> []</span><span style="color:#89DDFF;">,</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">presets</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span><span style="color:#82AAFF;">require</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">@gits-id/tailwind-config/preset</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"></span></code></pre></div><p>Next, add the Tailwind directives to <code>src/assets/main.css</code>:</p><div class="language-css"><button class="copy"></button><span class="lang">css</span><pre><code><span class="line"><span style="color:#89DDFF;">@tailwind</span><span style="color:#A6ACCD;"> base</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">@tailwind</span><span style="color:#A6ACCD;"> components</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">@tailwind</span><span style="color:#A6ACCD;"> utilities</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><p>Next, open <code>src/main.ts</code> and import <code>GitsUi</code> plugin from <code>@gits-id/ui</code> and use it as the Vue plugin.</p><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#676E95;">// main.ts</span></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">createApp</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">vue</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> App </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">./App.vue</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> router </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">./router</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line highlighted"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> GitsUi </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">@gits-id/ui</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line highlighted"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> app </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">createApp</span><span style="color:#A6ACCD;">(App)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">app</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">use</span><span style="color:#A6ACCD;">(router)</span><span style="color:#89DDFF;">;</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">app</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">use</span><span style="color:#A6ACCD;">(GitsUi)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">app</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">mount</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">#app</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><h2 id="step-3-use-the-component" tabindex="-1">Step 3. Use the component <a class="header-anchor" href="#step-3-use-the-component" aria-hidden="true">#</a></h2><p>Open <code>src/views/HomeView.vue</code> and replace the existing content with the code below:</p><div class="language-vue"><button class="copy"></button><span class="lang">vue</span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">container mx-auto p-6 space-y-3</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">h1</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">text-3xl font-bold text-gray-800</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">GITS UI</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">h1</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">VAlert</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">color</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">error</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> Alert text </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#FFCB6B;">VAlert</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">VBtn</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">color</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">primary</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> Click me </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#FFCB6B;">VBtn</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">VInput</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">placeholder</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Type something...</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><div class="info custom-block"><p class="custom-block-title">INFO</p><p>The component <code>VAlert</code>, <code>VBtn</code> and <code>VInput</code> are registered globally.</p></div><h2 id="step-4-boot-up-dev-server" tabindex="-1">Step 4. Boot up dev server <a class="header-anchor" href="#step-4-boot-up-dev-server" aria-hidden="true">#</a></h2><p>Run <code>dev</code> scripts and open <a href="http://localhost:5173" target="_blank" rel="noreferrer">http://localhost:5173</a>.</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">yarn dev</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>If everything goes well, you should see something like in the browser:</p><p><img src="`+l+'" alt="Getting Started 2"></p><h2 id="what-s-next" tabindex="-1">What&#39;s Next ? <a class="header-anchor" href="#what-s-next" aria-hidden="true">#</a></h2><p>Congratulation! You have completed setup your application with GITS UI! Now you can start creating your application with ease.</p><p>If you don&#39;t want to repeat this step in the future, you can save and push the project to your GitHub or somewhere elese as your personal starter kit and use it when needed. You can also you the official <a href="https://github.com/gitsindonesia/nuxt-starter" target="_blank" rel="noreferrer">Nuxt Starter</a> and Vue Starter <a href="https://github.com/gitsindonesia/ui-component/tree/main/examples/vue" target="_blank" rel="noreferrer">here</a>.</p>',31),c=[t];function r(i,D,F,y,d,u){return a(),n("div",null,c)}const h=s(o,[["render",r]]);export{A as __pageData,h as default};
