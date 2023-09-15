import{_ as l,C as p,o,c as e,H as n,Q as s}from"./chunks/framework.76d560bd.js";const b=JSON.parse('{"title":"Navigation Drawer","description":"","frontmatter":{},"headers":[],"relativePath":"components/nav-drawer.md","filePath":"components/nav-drawer.md"}'),t={name:"components/nav-drawer.md"},c=s(`<h1 id="navigation-drawer" tabindex="-1">Navigation Drawer <a class="header-anchor" href="#navigation-drawer" aria-label="Permalink to &quot;Navigation Drawer&quot;">​</a></h1><p>NavDrawer / Navigation Drawer / Sidebar.</p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>This component is <strong>deprecated</strong> and will be replaced by <a href="/components/navigation-drawer.html">Navigation Drawer</a> component in the next major version.</p></div><h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h2><h2 id="basic-usage" tabindex="-1">Basic Usage <a class="header-anchor" href="#basic-usage" aria-label="Permalink to &quot;Basic Usage&quot;">​</a></h2><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">setup</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">lang</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;ts&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">menus</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    text: </span><span style="color:#9ECBFF;">&#39;Dasbor&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    to: </span><span style="color:#9ECBFF;">&#39;/&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    icon: </span><span style="color:#9ECBFF;">&#39;ri:database-2-line&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    text: </span><span style="color:#9ECBFF;">&#39;Administrator&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    icon: </span><span style="color:#9ECBFF;">&#39;ri:database-2-line&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    children: [</span></span>
<span class="line"><span style="color:#E1E4E8;">      {</span></span>
<span class="line"><span style="color:#E1E4E8;">        text: </span><span style="color:#9ECBFF;">&#39;Manajemen Pengguna&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        to: </span><span style="color:#9ECBFF;">&#39;/cms/manajemen-pengguna&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">      {</span></span>
<span class="line"><span style="color:#E1E4E8;">        text: </span><span style="color:#9ECBFF;">&#39;Manajemen Peran&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        to: </span><span style="color:#9ECBFF;">&#39;/cms/manajemen-peran&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">    ],</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">];</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#FDAEB7;font-style:italic;">VNavDrawer</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">:menus</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;menus&quot;</span><span style="color:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">setup</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">lang</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;ts&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">menus</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    text: </span><span style="color:#032F62;">&#39;Dasbor&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    to: </span><span style="color:#032F62;">&#39;/&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    icon: </span><span style="color:#032F62;">&#39;ri:database-2-line&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    text: </span><span style="color:#032F62;">&#39;Administrator&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    icon: </span><span style="color:#032F62;">&#39;ri:database-2-line&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    children: [</span></span>
<span class="line"><span style="color:#24292E;">      {</span></span>
<span class="line"><span style="color:#24292E;">        text: </span><span style="color:#032F62;">&#39;Manajemen Pengguna&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        to: </span><span style="color:#032F62;">&#39;/cms/manajemen-pengguna&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">      {</span></span>
<span class="line"><span style="color:#24292E;">        text: </span><span style="color:#032F62;">&#39;Manajemen Peran&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        to: </span><span style="color:#032F62;">&#39;/cms/manajemen-peran&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">    ],</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">];</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#B31D28;font-style:italic;">VNavDrawer</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">:menus</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;menus&quot;</span><span style="color:#24292E;"> /&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span></code></pre></div>`,6),r=s(`<div class="info custom-block"><p class="custom-block-title">INFO</p><p>The <code>VNavDrawer</code> component is registered globally when you install with <code>@morpheme/ui</code>. So you don&#39;t need to import it manually.</p></div><h2 id="expand-on-hover" tabindex="-1">Expand on hover <a class="header-anchor" href="#expand-on-hover" aria-label="Permalink to &quot;Expand on hover&quot;">​</a></h2><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">setup</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">lang</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;ts&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">menus</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    text: </span><span style="color:#9ECBFF;">&#39;Dasbor&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    to: </span><span style="color:#9ECBFF;">&#39;/&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    icon: </span><span style="color:#9ECBFF;">&#39;ri:database-2-line&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    text: </span><span style="color:#9ECBFF;">&#39;Administrator&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    icon: </span><span style="color:#9ECBFF;">&#39;ri:database-2-line&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    children: [</span></span>
<span class="line"><span style="color:#E1E4E8;">      {</span></span>
<span class="line"><span style="color:#E1E4E8;">        text: </span><span style="color:#9ECBFF;">&#39;Manajemen Pengguna&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        to: </span><span style="color:#9ECBFF;">&#39;/cms/manajemen-pengguna&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">      {</span></span>
<span class="line"><span style="color:#E1E4E8;">        text: </span><span style="color:#9ECBFF;">&#39;Manajemen Peran&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        to: </span><span style="color:#9ECBFF;">&#39;/cms/manajemen-peran&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">    ],</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">];</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#FDAEB7;font-style:italic;">VNavDrawer</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">:menus</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;menus&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">expand-on-hover</span><span style="color:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">setup</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">lang</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;ts&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">menus</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    text: </span><span style="color:#032F62;">&#39;Dasbor&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    to: </span><span style="color:#032F62;">&#39;/&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    icon: </span><span style="color:#032F62;">&#39;ri:database-2-line&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    text: </span><span style="color:#032F62;">&#39;Administrator&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    icon: </span><span style="color:#032F62;">&#39;ri:database-2-line&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    children: [</span></span>
<span class="line"><span style="color:#24292E;">      {</span></span>
<span class="line"><span style="color:#24292E;">        text: </span><span style="color:#032F62;">&#39;Manajemen Pengguna&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        to: </span><span style="color:#032F62;">&#39;/cms/manajemen-pengguna&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">      {</span></span>
<span class="line"><span style="color:#24292E;">        text: </span><span style="color:#032F62;">&#39;Manajemen Peran&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        to: </span><span style="color:#032F62;">&#39;/cms/manajemen-peran&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">    ],</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">];</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#B31D28;font-style:italic;">VNavDrawer</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">:menus</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;menus&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">expand-on-hover</span><span style="color:#24292E;"> /&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span></code></pre></div>`,3),E=s(`<h2 id="custom-class" tabindex="-1">Custom Class <a class="header-anchor" href="#custom-class" aria-label="Permalink to &quot;Custom Class&quot;">​</a></h2><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">setup</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">lang</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;ts&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">menus</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    text: </span><span style="color:#9ECBFF;">&#39;Dasbor&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    to: </span><span style="color:#9ECBFF;">&#39;/&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    icon: </span><span style="color:#9ECBFF;">&#39;ri:database-2-line&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    text: </span><span style="color:#9ECBFF;">&#39;Administrator&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    icon: </span><span style="color:#9ECBFF;">&#39;ri:database-2-line&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    children: [</span></span>
<span class="line"><span style="color:#E1E4E8;">      {</span></span>
<span class="line"><span style="color:#E1E4E8;">        text: </span><span style="color:#9ECBFF;">&#39;Manajemen Pengguna&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        to: </span><span style="color:#9ECBFF;">&#39;/cms/manajemen-pengguna&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">      {</span></span>
<span class="line"><span style="color:#E1E4E8;">        text: </span><span style="color:#9ECBFF;">&#39;Manajemen Peran&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        to: </span><span style="color:#9ECBFF;">&#39;/cms/manajemen-peran&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">    ],</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">];</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#FDAEB7;font-style:italic;">VNavDrawer</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">:menus</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;menus&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;bg-blue-800&quot;</span><span style="color:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">setup</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">lang</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;ts&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">menus</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    text: </span><span style="color:#032F62;">&#39;Dasbor&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    to: </span><span style="color:#032F62;">&#39;/&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    icon: </span><span style="color:#032F62;">&#39;ri:database-2-line&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    text: </span><span style="color:#032F62;">&#39;Administrator&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    icon: </span><span style="color:#032F62;">&#39;ri:database-2-line&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    children: [</span></span>
<span class="line"><span style="color:#24292E;">      {</span></span>
<span class="line"><span style="color:#24292E;">        text: </span><span style="color:#032F62;">&#39;Manajemen Pengguna&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        to: </span><span style="color:#032F62;">&#39;/cms/manajemen-pengguna&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">      {</span></span>
<span class="line"><span style="color:#24292E;">        text: </span><span style="color:#032F62;">&#39;Manajemen Peran&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        to: </span><span style="color:#032F62;">&#39;/cms/manajemen-peran&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">    ],</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">];</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#B31D28;font-style:italic;">VNavDrawer</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">:menus</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;menus&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;bg-blue-800&quot;</span><span style="color:#24292E;"> /&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span></code></pre></div>`,2),y=s(`<h2 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-label="Permalink to &quot;Props&quot;">​</a></h2><table><thead><tr><th>Name</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><a href="#modelValue"><code>modelValue</code></a></td><td><code>Boolean</code></td><td><code>false</code></td></tr><tr><td><a href="#small"><code>small</code></a></td><td><code>Boolean</code></td><td><code>false</code></td></tr><tr><td><a href="#menus"><code>menus</code></a></td><td><code>Array as PropType&lt;Menu[]&gt;</code></td><td><code>[]</code></td></tr><tr><td><a href="#mini"><code>mini</code></a></td><td><code>Boolean</code></td><td><code>false</code></td></tr><tr><td><a href="#logoProps"><code>logoProps</code></a></td><td><code>Object</code></td><td><code>{}</code></td></tr><tr><td><a href="#dark"><code>dark</code></a></td><td><code>Boolean</code></td><td><code>false</code></td></tr><tr><td><a href="#color"><code>color</code></a></td><td><code>String</code></td><td><code>&#39;&#39;</code></td></tr><tr><td><a href="#hideToggle"><code>hideToggle</code></a></td><td><code>Boolean</code></td><td><code>false</code></td></tr><tr><td><a href="#btnToggleClass"><code>btnToggleClass</code></a></td><td><code>String</code></td><td><code>&#39;&#39;</code></td></tr><tr><td><a href="#classMenuParent"><code>classMenuParent</code></a></td><td><code>String</code></td><td><code>&#39;&#39;</code></td></tr><tr><td><a href="#toggleColor"><code>toggleColor</code></a></td><td><code>String</code></td><td><code>&#39;primary&#39;</code></td></tr><tr><td><a href="#expandColor"><code>expandColor</code></a></td><td><code>String</code></td><td><code>&#39;&#39;</code></td></tr><tr><td><a href="#expandHover"><code>expandHover</code></a></td><td><code>Boolean</code></td><td><code>false</code></td></tr><tr><td><a href="#isExpandHover"><code>isExpandHover</code></a></td><td><code>Boolean</code></td><td><code>false</code></td></tr><tr><td><a href="#drawerClass"><code>drawerClass</code></a></td><td><code>String</code></td><td></td></tr></tbody></table><h2 id="methods" tabindex="-1">Methods <a class="header-anchor" href="#methods" aria-label="Permalink to &quot;Methods&quot;">​</a></h2><p>None</p><h2 id="events" tabindex="-1">Events <a class="header-anchor" href="#events" aria-label="Permalink to &quot;Events&quot;">​</a></h2><p>None</p><h2 id="slots" tabindex="-1">Slots <a class="header-anchor" href="#slots" aria-label="Permalink to &quot;Slots&quot;">​</a></h2><p>None</p><h2 id="css-variables" tabindex="-1">CSS Variables <a class="header-anchor" href="#css-variables" aria-label="Permalink to &quot;CSS Variables&quot;">​</a></h2><p>None</p><h2 id="standalone-installation" tabindex="-1">Standalone Installation <a class="header-anchor" href="#standalone-installation" aria-label="Permalink to &quot;Standalone Installation&quot;">​</a></h2><p>You can also install the <code>NavDrawer</code> component individually via <code>@morpheme/nav-drawer</code> package:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">yarn</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">@morpheme/nav-drawer</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">yarn</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span><span style="color:#24292E;"> </span><span style="color:#032F62;">@morpheme/nav-drawer</span></span></code></pre></div><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">setup</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">lang</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;ts&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> VNavDrawer </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;@morpheme/nav-drawer&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#FDAEB7;font-style:italic;">VNavDrawer</span><span style="color:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">setup</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">lang</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;ts&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> VNavDrawer </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;@morpheme/nav-drawer&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#B31D28;font-style:italic;">VNavDrawer</span><span style="color:#24292E;"> /&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><h2 id="storybook" tabindex="-1">Storybook <a class="header-anchor" href="#storybook" aria-label="Permalink to &quot;Storybook&quot;">​</a></h2><p>View Storybook documentation <a href="https://gits-ui.web.app/?path=/story/components-nav-drawer--default" target="_blank" rel="noreferrer">here</a>.</p>`,16);function i(d,m,h,u,F,g){const a=p("LivePreview");return o(),e("div",null,[c,n(a,{src:"components-navdrawer--nav-drawer"}),r,n(a,{src:"components-navdrawer--expand-hover"}),E,n(a,{src:"components-navdrawer--custom-attributes"}),y])}const C=l(t,[["render",i]]);export{b as __pageData,C as default};
