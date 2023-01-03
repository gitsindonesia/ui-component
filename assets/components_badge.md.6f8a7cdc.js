import{_ as t,o as p,c,a as e,w as n,b as o,r,d as s,e as l}from"./app.4b04441c.js";const w=JSON.parse('{"title":"Badge","description":"","frontmatter":{},"headers":[{"level":2,"title":"Usage","slug":"usage","link":"#usage","children":[{"level":3,"title":"Basic Usage","slug":"basic-usage","link":"#basic-usage","children":[]},{"level":3,"title":"Colors","slug":"colors","link":"#colors","children":[]},{"level":3,"title":"Outlined","slug":"outlined","link":"#outlined","children":[]},{"level":3,"title":"Rounded","slug":"rounded","link":"#rounded","children":[]},{"level":3,"title":"Sizes","slug":"sizes","link":"#sizes","children":[]},{"level":3,"title":"Dismissable","slug":"dismissable","link":"#dismissable","children":[]}]},{"level":2,"title":"Props","slug":"props","link":"#props","children":[]},{"level":2,"title":"Events","slug":"events","link":"#events","children":[{"level":3,"title":"dismiss","slug":"dismiss","link":"#dismiss","children":[]}]},{"level":2,"title":"Slots","slug":"slots","link":"#slots","children":[]},{"level":2,"title":"CSS Variables","slug":"css-variables","link":"#css-variables","children":[]},{"level":2,"title":"Customization","slug":"customization","link":"#customization","children":[]},{"level":2,"title":"Manual Installation","slug":"manual-installation","link":"#manual-installation","children":[]},{"level":2,"title":"Tailwind Plugin","slug":"tailwind-plugin","link":"#tailwind-plugin","children":[]},{"level":2,"title":"Storybook","slug":"storybook","link":"#storybook","children":[]}],"relativePath":"components/badge.md"}'),D={name:"components/badge.md"},F=o(`<h1 id="badge" tabindex="-1">Badge <a class="header-anchor" href="#badge" aria-hidden="true">#</a></h1><p>The <code>VBadge</code> component is a small component that is used to display a small piece of information, such as a notification, status, or count. It can be used in a variety of contexts, such as to display a notification count on a user profile or to highlight new or unread content.</p><h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-hidden="true">#</a></h2><h3 id="basic-usage" tabindex="-1">Basic Usage <a class="header-anchor" href="#basic-usage" aria-hidden="true">#</a></h3><p>To use the <code>VBadge</code> component, you can simply include it in your template like this:</p><div class="language-vue"><button class="copy"></button><span class="lang">vue</span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#676E95;">&lt;!-- VBadge is registered globally --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">VBadge</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> Hello World </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#FFCB6B;">VBadge</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><div class="info custom-block"><p class="custom-block-title">INFO</p><p>Note that the <code>VBadge</code> component is registered globally when you install <code>@gits-id/ui</code>, so you don&#39;t need to import it manually.</p></div><h3 id="colors" tabindex="-1">Colors <a class="header-anchor" href="#colors" aria-hidden="true">#</a></h3><ul><li><strong>prop</strong>: <code>color</code></li><li><strong>type</strong>: <code>string</code></li><li><strong>default</strong>: <code>default</code></li><li><strong>required</strong>: <code>false</code></li></ul><p>You can use the <code>color</code> prop to apply different color styles to the badge:</p><p>The available color options are <code>default</code>, <code>primary</code>, <code>secondary</code>, <code>info</code>, <code>warning</code>, <code>success</code>, and <code>error</code>.</p>`,11),d=s("div",{class:"language-vue"},[s("button",{class:"copy"}),s("span",{class:"lang"},"vue"),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"template"),s("span",{style:{color:"#89DDFF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#FFCB6B"}},"VBadge"),s("span",{style:{color:"#89DDFF"}},">"),s("span",{style:{color:"#A6ACCD"}}," Hello World "),s("span",{style:{color:"#89DDFF"}},"</"),s("span",{style:{color:"#FFCB6B"}},"VBadge"),s("span",{style:{color:"#89DDFF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#FFCB6B"}},"VBadge"),s("span",{style:{color:"#89DDFF"}}," "),s("span",{style:{color:"#C792EA"}},"color"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"primary"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},">"),s("span",{style:{color:"#A6ACCD"}}," Hello World "),s("span",{style:{color:"#89DDFF"}},"</"),s("span",{style:{color:"#FFCB6B"}},"VBadge"),s("span",{style:{color:"#89DDFF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#FFCB6B"}},"VBadge"),s("span",{style:{color:"#89DDFF"}}," "),s("span",{style:{color:"#C792EA"}},"color"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"secondary"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},">"),s("span",{style:{color:"#A6ACCD"}}," Hello World "),s("span",{style:{color:"#89DDFF"}},"</"),s("span",{style:{color:"#FFCB6B"}},"VBadge"),s("span",{style:{color:"#89DDFF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#FFCB6B"}},"VBadge"),s("span",{style:{color:"#89DDFF"}}," "),s("span",{style:{color:"#C792EA"}},"color"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"info"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},">"),s("span",{style:{color:"#A6ACCD"}}," Hello World "),s("span",{style:{color:"#89DDFF"}},"</"),s("span",{style:{color:"#FFCB6B"}},"VBadge"),s("span",{style:{color:"#89DDFF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#FFCB6B"}},"VBadge"),s("span",{style:{color:"#89DDFF"}}," "),s("span",{style:{color:"#C792EA"}},"color"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"warning"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},">"),s("span",{style:{color:"#A6ACCD"}}," Hello World "),s("span",{style:{color:"#89DDFF"}},"</"),s("span",{style:{color:"#FFCB6B"}},"VBadge"),s("span",{style:{color:"#89DDFF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#FFCB6B"}},"VBadge"),s("span",{style:{color:"#89DDFF"}}," "),s("span",{style:{color:"#C792EA"}},"color"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"success"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},">"),s("span",{style:{color:"#A6ACCD"}}," Hello World "),s("span",{style:{color:"#89DDFF"}},"</"),s("span",{style:{color:"#FFCB6B"}},"VBadge"),s("span",{style:{color:"#89DDFF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#FFCB6B"}},"VBadge"),s("span",{style:{color:"#89DDFF"}}," "),s("span",{style:{color:"#C792EA"}},"color"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"error"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},">"),s("span",{style:{color:"#A6ACCD"}}," Hello World "),s("span",{style:{color:"#89DDFF"}},"</"),s("span",{style:{color:"#FFCB6B"}},"VBadge"),s("span",{style:{color:"#89DDFF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"</"),s("span",{style:{color:"#F07178"}},"template"),s("span",{style:{color:"#89DDFF"}},">")]),l(`
`),s("span",{class:"line"})])])],-1),i=o('<h3 id="outlined" tabindex="-1">Outlined <a class="header-anchor" href="#outlined" aria-hidden="true">#</a></h3><ul><li><strong>prop</strong>: <code>outlined</code></li><li><strong>type</strong>: <code>boolean</code></li><li><strong>default</strong>: <code>false</code></li><li><strong>required</strong>: <code>false</code></li></ul><p>You can use the <code>outlined</code> prop to apply a bordered style to the badge:</p>',3),y=s("div",{class:"language-vue"},[s("button",{class:"copy"}),s("span",{class:"lang"},"vue"),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"template"),s("span",{style:{color:"#89DDFF"}},">")]),l(`
`),s("span",{class:"line highlighted"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#FFCB6B"}},"VBadge"),s("span",{style:{color:"#89DDFF"}}," "),s("span",{style:{color:"#C792EA"}},"outlined"),s("span",{style:{color:"#89DDFF"}},">"),s("span",{style:{color:"#A6ACCD"}}," Hello World "),s("span",{style:{color:"#89DDFF"}},"</"),s("span",{style:{color:"#FFCB6B"}},"VBadge"),s("span",{style:{color:"#89DDFF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"</"),s("span",{style:{color:"#F07178"}},"template"),s("span",{style:{color:"#89DDFF"}},">")]),l(`
`),s("span",{class:"line"})])])],-1),C=o('<h3 id="rounded" tabindex="-1">Rounded <a class="header-anchor" href="#rounded" aria-hidden="true">#</a></h3><ul><li><strong>prop</strong>: <code>rounded</code></li><li><strong>type</strong>: <code>boolean | &#39;sm&#39; | &#39;md&#39; | &#39;lg&#39; | &#39;xl&#39; | &#39;2xl&#39; | &#39;3xl&#39; | &#39;none&#39;</code></li><li><strong>default</strong>: <code>none</code></li><li><strong>required</strong>: <code>false</code></li></ul><p>You can use the <code>rounded</code> prop to apply a rounded style to the badge:</p>',3),g=s("div",{class:"language-vue"},[s("button",{class:"copy"}),s("span",{class:"lang"},"vue"),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"script"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C792EA"}},"setup"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C792EA"}},"lang"),s("span",{style:{color:"#A6ACCD"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"ts"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"import"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"{"),s("span",{style:{color:"#A6ACCD"}},"ref"),s("span",{style:{color:"#89DDFF"}},"}"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"from"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},"vue"),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#89DDFF"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"</"),s("span",{style:{color:"#F07178"}},"script"),s("span",{style:{color:"#89DDFF"}},">")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"template"),s("span",{style:{color:"#89DDFF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#FFCB6B"}},"VBadge"),s("span",{style:{color:"#89DDFF"}}," "),s("span",{style:{color:"#C792EA"}},"rounded"),s("span",{style:{color:"#89DDFF"}},">"),s("span",{style:{color:"#A6ACCD"}}," Hello World "),s("span",{style:{color:"#89DDFF"}},"</"),s("span",{style:{color:"#FFCB6B"}},"VBadge"),s("span",{style:{color:"#89DDFF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#FFCB6B"}},"VBadge"),s("span",{style:{color:"#89DDFF"}}," "),s("span",{style:{color:"#C792EA"}},"rounded"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"sm"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},">"),s("span",{style:{color:"#A6ACCD"}}," Hello World "),s("span",{style:{color:"#89DDFF"}},"</"),s("span",{style:{color:"#FFCB6B"}},"VBadge"),s("span",{style:{color:"#89DDFF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#FFCB6B"}},"VBadge"),s("span",{style:{color:"#89DDFF"}}," "),s("span",{style:{color:"#C792EA"}},"rounded"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"md"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},">"),s("span",{style:{color:"#A6ACCD"}}," Hello World "),s("span",{style:{color:"#89DDFF"}},"</"),s("span",{style:{color:"#FFCB6B"}},"VBadge"),s("span",{style:{color:"#89DDFF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#FFCB6B"}},"VBadge"),s("span",{style:{color:"#89DDFF"}}," "),s("span",{style:{color:"#C792EA"}},"rounded"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"lg"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},">"),s("span",{style:{color:"#A6ACCD"}}," Hello World "),s("span",{style:{color:"#89DDFF"}},"</"),s("span",{style:{color:"#FFCB6B"}},"VBadge"),s("span",{style:{color:"#89DDFF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#FFCB6B"}},"VBadge"),s("span",{style:{color:"#89DDFF"}}," "),s("span",{style:{color:"#C792EA"}},"rounded"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"xl"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},">"),s("span",{style:{color:"#A6ACCD"}}," Hello World "),s("span",{style:{color:"#89DDFF"}},"</"),s("span",{style:{color:"#FFCB6B"}},"VBadge"),s("span",{style:{color:"#89DDFF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#FFCB6B"}},"VBadge"),s("span",{style:{color:"#89DDFF"}}," "),s("span",{style:{color:"#C792EA"}},"rounded"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"2xl"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},">"),s("span",{style:{color:"#A6ACCD"}}," Hello World "),s("span",{style:{color:"#89DDFF"}},"</"),s("span",{style:{color:"#FFCB6B"}},"VBadge"),s("span",{style:{color:"#89DDFF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#FFCB6B"}},"VBadge"),s("span",{style:{color:"#89DDFF"}}," "),s("span",{style:{color:"#C792EA"}},"rounded"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"3xl"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},">"),s("span",{style:{color:"#A6ACCD"}}," Hello World "),s("span",{style:{color:"#89DDFF"}},"</"),s("span",{style:{color:"#FFCB6B"}},"VBadge"),s("span",{style:{color:"#89DDFF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#FFCB6B"}},"VBadge"),s("span",{style:{color:"#89DDFF"}}," "),s("span",{style:{color:"#C792EA"}},"rounded"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"none"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},">"),s("span",{style:{color:"#A6ACCD"}}," Hello World "),s("span",{style:{color:"#89DDFF"}},"</"),s("span",{style:{color:"#FFCB6B"}},"VBadge"),s("span",{style:{color:"#89DDFF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"</"),s("span",{style:{color:"#F07178"}},"template"),s("span",{style:{color:"#89DDFF"}},">")]),l(`
`),s("span",{class:"line"})])])],-1),u=o('<h3 id="sizes" tabindex="-1">Sizes <a class="header-anchor" href="#sizes" aria-hidden="true">#</a></h3><ul><li><strong>prop</strong>: <code>small</code> or <code>large</code></li><li><strong>type</strong>: <code>boolean</code></li><li><strong>default</strong>: <code>false</code></li><li><strong>required</strong>: <code>false</code></li></ul><p>You can use the <code>small</code> or <code>large</code> prop to change the size of the badge:</p>',3),h=s("div",{class:"language-vue"},[s("button",{class:"copy"}),s("span",{class:"lang"},"vue"),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"template"),s("span",{style:{color:"#89DDFF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#FFCB6B"}},"VBadge"),s("span",{style:{color:"#89DDFF"}}," "),s("span",{style:{color:"#C792EA"}},"small"),s("span",{style:{color:"#89DDFF"}},">"),s("span",{style:{color:"#A6ACCD"}}," small "),s("span",{style:{color:"#89DDFF"}},"</"),s("span",{style:{color:"#FFCB6B"}},"VBadge"),s("span",{style:{color:"#89DDFF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#FFCB6B"}},"VBadge"),s("span",{style:{color:"#89DDFF"}},">"),s("span",{style:{color:"#A6ACCD"}}," default "),s("span",{style:{color:"#89DDFF"}},"</"),s("span",{style:{color:"#FFCB6B"}},"VBadge"),s("span",{style:{color:"#89DDFF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#FFCB6B"}},"VBadge"),s("span",{style:{color:"#89DDFF"}}," "),s("span",{style:{color:"#C792EA"}},"large"),s("span",{style:{color:"#89DDFF"}},">"),s("span",{style:{color:"#A6ACCD"}}," large "),s("span",{style:{color:"#89DDFF"}},"</"),s("span",{style:{color:"#FFCB6B"}},"VBadge"),s("span",{style:{color:"#89DDFF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"</"),s("span",{style:{color:"#F07178"}},"template"),s("span",{style:{color:"#89DDFF"}},">")]),l(`
`),s("span",{class:"line"})])])],-1),A=o('<h3 id="dismissable" tabindex="-1">Dismissable <a class="header-anchor" href="#dismissable" aria-hidden="true">#</a></h3><ul><li><strong>prop</strong>: <code>dismissable</code></li><li><strong>type</strong>: <code>boolean</code></li><li><strong>default</strong>: <code>false</code></li><li><strong>required</strong>: <code>false</code></li></ul><p>You can use the <code>dismissable</code> prop to show an X button in the badge, which allows the user to dismiss the badge:</p>',3),b=s("div",{class:"language-vue"},[s("button",{class:"copy"}),s("span",{class:"lang"},"vue"),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"template"),s("span",{style:{color:"#89DDFF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#FFCB6B"}},"VBadge"),s("span",{style:{color:"#89DDFF"}}," "),s("span",{style:{color:"#C792EA"}},"dismissable"),s("span",{style:{color:"#89DDFF"}},">"),s("span",{style:{color:"#A6ACCD"}}," Badge "),s("span",{style:{color:"#89DDFF"}},"</"),s("span",{style:{color:"#FFCB6B"}},"VBadge"),s("span",{style:{color:"#89DDFF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"</"),s("span",{style:{color:"#F07178"}},"template"),s("span",{style:{color:"#89DDFF"}},">")]),l(`
`),s("span",{class:"line"})])])],-1),B=o(`<h2 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-hidden="true">#</a></h2><table><thead><tr><th>Name</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><a href="#color">color</a></td><td><code>string</code> , <a href="/ui-component/guide/theme.html#colors">available colors</a></td><td><code>default</code></td></tr><tr><td><a href="#rounded">rounded</a></td><td><code>boolean</code>, <code>string</code>, <a href="/ui-component/guide/theme.html#rounded">available rounded</a></td><td><code>true</code></td></tr><tr><td><a href="#small">small</a></td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td><a href="#large">large</a></td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td><a href="#dismissable">dismissable</a></td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td><a href="#outlined">outlined</a></td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td><a href="#closeIcon">closeIcon</a></td><td><code>string</code></td><td><code>ri:close-line</code></td></tr><tr><td><a href="#iconSize">iconSize</a></td><td><code>string</code></td><td><code>xs</code></td></tr></tbody></table><h2 id="events" tabindex="-1">Events <a class="header-anchor" href="#events" aria-hidden="true">#</a></h2><h3 id="dismiss" tabindex="-1"><code>dismiss</code> <a class="header-anchor" href="#dismiss" aria-hidden="true">#</a></h3><p>The <code>VBadge</code> component provides a <code>dismiss</code> event, which is fired when the dismissable button is clicked. This can be useful if you want to perform an action, such as hiding or removing the badge, when it is dismissed by the user.</p><p>To listen for the <code>dismiss</code> event, you can use the @dismiss event binding in your template like this:</p><div class="language-vue"><button class="copy"></button><span class="lang">vue</span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">setup</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">lang</span><span style="color:#A6ACCD;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">ts</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> onDismiss </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">alert</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Dismiss!</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">VBadge</span><span style="color:#89DDFF;"> @</span><span style="color:#C792EA;">dismiss</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">onDismiss</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> Badge </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#FFCB6B;">VBadge</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><p>Note that the <code>dismiss</code> event is only available when the <code>dismissable</code> prop is set to <code>true</code>.</p><h2 id="slots" tabindex="-1">Slots <a class="header-anchor" href="#slots" aria-hidden="true">#</a></h2><table><thead><tr><th>Name</th><th>Props</th><th>Description</th></tr></thead><tbody><tr><td><a href="#default">default</a></td><td>None</td><td>The default Vue slot</td></tr><tr><td><a href="#dismissable">dismissable</a></td><td><code>{dismiss: () =&gt; void}</code></td><td>Slot for dismissable button</td></tr></tbody></table><h2 id="css-variables" tabindex="-1">CSS Variables <a class="header-anchor" href="#css-variables" aria-hidden="true">#</a></h2><div class="language-css"><button class="copy"></button><span class="lang">css</span><pre><code><span class="line"><span style="color:#89DDFF;">:</span><span style="color:#C792EA;">root</span><span style="color:#A6ACCD;">: </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  --badge-bg-color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> theme(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">colors.gray.100</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  --badge-color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> theme(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">colors.gray.800</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  --badge-border-style</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">solid</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  --badge-border-width</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> theme(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">borderWidth.DEFAULT</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  --badge-border-color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> theme(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">borderColor.transparent</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  --badge-border-radius</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> theme(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">borderRadius.DEFAULT</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  --badge-padding-x</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> theme(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">padding.2</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  --badge-padding-y</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> theme(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">padding.1</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  --badge-font-size</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> theme(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">fontSize.xs</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  --badge-font-weight</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> theme(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">fontWeight.semibold</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  --badge-icon-size</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> theme(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">width.4</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="customization" tabindex="-1">Customization <a class="header-anchor" href="#customization" aria-hidden="true">#</a></h2><p>The <code>VBadge</code> component can be customized using CSS variables and the <code>theme</code> function provided by Tailwind CSS. This allows you to create your own custom badge styles that match your project&#39;s design aesthetic.</p><p>To customize the <code>VBadge</code> component, you can define your own CSS classes that set the desired CSS variables. For example, to create an &quot;indigo&quot; colored badge, you can define a <code>.badge-indigo</code> class like this:</p><div class="language-vue"><button class="copy"></button><span class="lang">vue</span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">VBadge</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">color</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">indigo</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> Indigo Colored Badge </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#FFCB6B;">VBadge</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">style</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">badge-indigo</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">  --badge-bg-color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> theme(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">colors.indigo.500</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">  --badge-color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> theme(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">colors.white</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">style</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><p>This allows you to easily create custom color styles for the <code>VBadge</code> component, simply by defining a new class or color attribute and setting the appropriate CSS variables.</p><p>Note that you can also customize the other visual aspects of the <code>VBadge</code> component, such as the border style, padding, font size, and more, by defining the appropriate CSS variables in your custom class.</p><h2 id="manual-installation" tabindex="-1">Manual Installation <a class="header-anchor" href="#manual-installation" aria-hidden="true">#</a></h2><p>In addition to installing the <code>VBadge</code> component as part of the <code>@gits-id/ui</code> package, you can also install it individually using the <code>@gits-id/badge</code> package.</p><p>To install the <code>@gits-id/badge</code> package, run the following command:</p><div class="language-bash"><button class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#A6ACCD;">npm i @gits-id/badge</span></span>
<span class="line"></span></code></pre></div><p>Then, you can import and use the <code>VBadge</code> component in your application like this:</p><div class="language-vue"><button class="copy"></button><span class="lang">vue</span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">setup</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">lang</span><span style="color:#A6ACCD;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">ts</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> VBadge </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@gits-id/badge</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">VBadge</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> Hello World </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#FFCB6B;">VBadge</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><h2 id="tailwind-plugin" tabindex="-1">Tailwind Plugin <a class="header-anchor" href="#tailwind-plugin" aria-hidden="true">#</a></h2><p>The <code>@gits-id/badge</code> package comes with a custom Tailwind CSS plugin that provides various utility classes for styling the <code>VBadge</code> component. If you are installing the <code>@gits-id/badge</code> package separately from the <code>@gits-id/ui</code> package, you will need to include this plugin in the <code>plugins</code> section of your Tailwind CSS configuration file.</p><p>Here&#39;s an example of how to include the <code>@gits-id/badge</code> plugin in your Tailwind CSS configuration file:</p><div class="language-js"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#676E95;">// tailwind.config.js</span></span>
<span class="line"><span style="color:#89DDFF;">module.exports</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">content</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> []</span><span style="color:#89DDFF;">,</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">plugins</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span><span style="color:#82AAFF;">require</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@gits-id/tailwind-components/badge</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"></span></code></pre></div><h2 id="storybook" tabindex="-1">Storybook <a class="header-anchor" href="#storybook" aria-hidden="true">#</a></h2><p>View Storybook documentation <a href="https://gits-ui.web.app/?path=/story/components-badge--variants" target="_blank" rel="noreferrer">here</a>.</p>`,30);function m(f,_,v,V,E,T){const a=r("LivePreview");return p(),c("div",null,[F,e(a,{src:"components-badge--variants",height:"70"},{default:n(()=>[d]),_:1}),i,e(a,{src:"components-badge--outlined",height:"70"},{default:n(()=>[y]),_:1}),C,e(a,{src:"components-badge--rounded",height:"70"},{default:n(()=>[g]),_:1}),u,e(a,{src:"components-badge--sizes",height:"70"},{default:n(()=>[h]),_:1}),A,e(a,{src:"components-badge--dismissable",height:"70"},{default:n(()=>[b]),_:1}),B])}const k=t(D,[["render",m]]);export{w as __pageData,k as default};
