import{_ as e,o as s,c as a,b as l}from"./app.cff13ece.js";const m=JSON.parse('{"title":"Default Theme","description":"","frontmatter":{},"headers":[{"level":2,"title":"Colors","slug":"colors","link":"#colors","children":[]},{"level":2,"title":"Sizes","slug":"sizes","link":"#sizes","children":[]},{"level":2,"title":"Examples","slug":"examples","link":"#examples","children":[]}],"relativePath":"guide/theme.md"}'),o={name:"guide/theme.md"},n=l(`<h1 id="default-theme" tabindex="-1">Default Theme <a class="header-anchor" href="#default-theme" aria-hidden="true">#</a></h1><p>The default theme in GITS UI provides a set of default values for various elements of the user interface. This includes colors and sizes for various components.</p><h2 id="colors" tabindex="-1">Colors <a class="header-anchor" href="#colors" aria-hidden="true">#</a></h2><p>The default theme includes the following colors that can be used throughout the UI:</p><ul><li><code>primary</code>: The primary color is used for the main action or emphasis in the UI.</li><li><code>secondary</code>: The secondary color is used for secondary actions and additional information.</li><li><code>info</code>: The info color is used to convey information or neutral messages.</li><li><code>warning</code>: The warning color is used to highlight potential issues or warnings.</li><li><code>success</code>: The success color is used to indicate successful actions or positive results.</li><li><code>error</code>: The error color is used to indicate failed actions or negative results.</li></ul><h2 id="sizes" tabindex="-1">Sizes <a class="header-anchor" href="#sizes" aria-hidden="true">#</a></h2><p>The default theme includes the following sizes that can be used for various UI elements:</p><ul><li><code>xxs</code>: The smallest size.</li><li><code>xs</code>: Extra small size.</li><li><code>sm</code>: Small size.</li><li><code>md</code>: Medium size.</li><li><code>lg</code>: Large size.</li><li><code>xl</code>: Extra large size.</li></ul><h2 id="examples" tabindex="-1">Examples <a class="header-anchor" href="#examples" aria-hidden="true">#</a></h2><p>Here are some examples of how these colors and sizes can be used in the UI:</p><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">VAlert</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">color</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">error</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> Failed to create new account </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">VAlert</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">VBtn</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">size</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">sm</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> Retry last action </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">VBtn</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><p>Keep in mind that these are just default values and can be customized as needed.</p>`,12),t=[n];function i(r,c,p,d,h,u){return s(),a("div",null,t)}const F=e(o,[["render",i]]);export{m as __pageData,F as default};