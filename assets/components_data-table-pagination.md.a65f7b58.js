import{_ as n,H as p,o as c,c as r,J as t,E as l,V as e,C as a,a as s}from"./chunks/framework.d5bcf101.js";const _=JSON.parse('{"title":"Data Table Pagination","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"components/data-table-pagination.md","filePath":"components/data-table-pagination.md"}'),i={name:"components/data-table-pagination.md"},D=e('<h1 id="data-table-pagination" tabindex="-1">Data Table Pagination <a class="header-anchor" href="#data-table-pagination" aria-label="Permalink to &quot;Data Table Pagination&quot;">​</a></h1><p>The <code>VDataTablePagination</code> component is a pagination component for use with data table. It allows you to easily paginate through large data sets and customize the number of items displayed per page.</p><h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h2><h3 id="basic-usage" tabindex="-1">Basic Usage <a class="header-anchor" href="#basic-usage" aria-label="Permalink to &quot;Basic Usage&quot;">​</a></h3><p>To use the <code>VDataTablePagination</code> component in its most basic form, you can include it in your template and bind it to a page number variable using the <code>v-model</code> directive. You also need to specify the <code>total-items</code> prop, which is the total number of items in your data set, and the <code>items-per-page</code> prop, which is the number of items to display per page.</p>',5),d=a("div",{class:"language-vue"},[a("button",{title:"Copy Code",class:"copy"}),a("span",{class:"lang"},"vue"),a("pre",{class:"shiki material-theme-palenight"},[a("code",null,[a("span",{class:"line"},[a("span",{style:{color:"#89DDFF"}},"<"),a("span",{style:{color:"#F07178"}},"script"),a("span",{style:{color:"#A6ACCD"}}," "),a("span",{style:{color:"#C792EA"}},"setup"),a("span",{style:{color:"#A6ACCD"}}," "),a("span",{style:{color:"#C792EA"}},"lang"),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#C3E88D"}},"ts"),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#89DDFF"}},">")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#89DDFF","font-style":"italic"}},"import"),a("span",{style:{color:"#A6ACCD"}}," "),a("span",{style:{color:"#89DDFF"}},"{"),a("span",{style:{color:"#A6ACCD"}},"isOpen"),a("span",{style:{color:"#89DDFF"}},"}"),a("span",{style:{color:"#A6ACCD"}}," "),a("span",{style:{color:"#89DDFF","font-style":"italic"}},"from"),a("span",{style:{color:"#A6ACCD"}}," "),a("span",{style:{color:"#89DDFF"}},"'"),a("span",{style:{color:"#C3E88D"}},"vue"),a("span",{style:{color:"#89DDFF"}},"'"),a("span",{style:{color:"#89DDFF"}},";")]),s(`
`),a("span",{class:"line"}),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#C792EA"}},"const"),a("span",{style:{color:"#A6ACCD"}}," page "),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#A6ACCD"}}," "),a("span",{style:{color:"#82AAFF"}},"ref"),a("span",{style:{color:"#A6ACCD"}},"("),a("span",{style:{color:"#F78C6C"}},"1"),a("span",{style:{color:"#A6ACCD"}},")"),a("span",{style:{color:"#89DDFF"}},";")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#89DDFF"}},"</"),a("span",{style:{color:"#F07178"}},"script"),a("span",{style:{color:"#89DDFF"}},">")]),s(`
`),a("span",{class:"line"}),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#89DDFF"}},"<"),a("span",{style:{color:"#F07178"}},"template"),a("span",{style:{color:"#89DDFF"}},">")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#A6ACCD"}},"  "),a("span",{style:{color:"#89DDFF"}},"<"),a("span",{style:{color:"#F07178"}},"VDataTablePagination"),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},"v-model"),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#C3E88D"}},"page"),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},":total-items"),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#C3E88D"}},"30"),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},":items-per-page"),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#C3E88D"}},"10"),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#89DDFF"}}," />")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#89DDFF"}},"</"),a("span",{style:{color:"#F07178"}},"template"),a("span",{style:{color:"#89DDFF"}},">")])])])],-1),F=e('<div class="info custom-block"><p class="custom-block-title">INFO</p><p>The <code>VDataTablePagination</code> component is registered globally when you install with <code>@morpheme/ui</code>. So you don&#39;t need to import it manually.</p></div><h3 id="rows-per-page-slot" tabindex="-1">Rows per page slot <a class="header-anchor" href="#rows-per-page-slot" aria-label="Permalink to &quot;Rows per page slot&quot;">​</a></h3><p>You can customize the rows per page dropdown by using the rowsPerPage slot. The slot provides the <code>value</code> and <code>items</code> data properties, which correspond to the currently selected rows per page value and the available rows per page options, respectively.</p>',3),y=a("div",{class:"language-vue"},[a("button",{title:"Copy Code",class:"copy"}),a("span",{class:"lang"},"vue"),a("pre",{class:"shiki material-theme-palenight"},[a("code",null,[a("span",{class:"line"},[a("span",{style:{color:"#89DDFF"}},"<"),a("span",{style:{color:"#F07178"}},"template"),a("span",{style:{color:"#89DDFF"}},">")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#A6ACCD"}},"  "),a("span",{style:{color:"#89DDFF"}},"<"),a("span",{style:{color:"#F07178"}},"v-data-table-pagination"),a("span",{style:{color:"#89DDFF"}},">")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#A6ACCD"}},"    "),a("span",{style:{color:"#89DDFF"}},"<"),a("span",{style:{color:"#F07178"}},"template"),a("span",{style:{color:"#A6ACCD"}}," "),a("span",{style:{color:"#89DDFF"}},"#"),a("span",{style:{color:"#C792EA"}},"rowsPerPage"),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#89DDFF"}},"{"),a("span",{style:{color:"#A6ACCD"}},"value"),a("span",{style:{color:"#89DDFF"}},","),a("span",{style:{color:"#F07178"}}," "),a("span",{style:{color:"#A6ACCD"}},"items"),a("span",{style:{color:"#89DDFF"}},"}"),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#89DDFF"}},">")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#A6ACCD"}},"      "),a("span",{style:{color:"#89DDFF"}},"<"),a("span",{style:{color:"#F07178"}},"select"),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},":value"),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#C3E88D"}},"value"),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#89DDFF"}},">")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#A6ACCD"}},"        "),a("span",{style:{color:"#89DDFF"}},"<"),a("span",{style:{color:"#F07178"}},"option"),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},"v-for"),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#C3E88D"}},"item in items"),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},":value"),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#C3E88D"}},"item.value"),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#89DDFF"}},">")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#A6ACCD"}},"          {{ item.text }}")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#A6ACCD"}},"        "),a("span",{style:{color:"#89DDFF"}},"</"),a("span",{style:{color:"#F07178"}},"option"),a("span",{style:{color:"#89DDFF"}},">")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#A6ACCD"}},"      "),a("span",{style:{color:"#89DDFF"}},"</"),a("span",{style:{color:"#F07178"}},"select"),a("span",{style:{color:"#89DDFF"}},">")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#A6ACCD"}},"    "),a("span",{style:{color:"#89DDFF"}},"</"),a("span",{style:{color:"#F07178"}},"template"),a("span",{style:{color:"#89DDFF"}},">")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#A6ACCD"}},"  "),a("span",{style:{color:"#89DDFF"}},"</"),a("span",{style:{color:"#F07178"}},"v-data-table-pagination"),a("span",{style:{color:"#89DDFF"}},">")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#89DDFF"}},"</"),a("span",{style:{color:"#F07178"}},"template"),a("span",{style:{color:"#89DDFF"}},">")])])])],-1),h=e('<h3 id="meta-slot" tabindex="-1">Meta slot <a class="header-anchor" href="#meta-slot" aria-label="Permalink to &quot;Meta slot&quot;">​</a></h3><p>The meta slot allows you to customize the text displayed above the pagination controls. It provides several data properties including <code>showingText</code>, <code>start</code>, <code>end</code>, <code>fromText</code>, <code>totalItems</code>, and <code>dataText</code>.</p>',2),u=a("div",{class:"language-vue"},[a("button",{title:"Copy Code",class:"copy"}),a("span",{class:"lang"},"vue"),a("pre",{class:"shiki material-theme-palenight"},[a("code",null,[a("span",{class:"line"},[a("span",{style:{color:"#89DDFF"}},"<"),a("span",{style:{color:"#F07178"}},"template"),a("span",{style:{color:"#89DDFF"}},">")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#A6ACCD"}},"  "),a("span",{style:{color:"#89DDFF"}},"<"),a("span",{style:{color:"#F07178"}},"v-data-table-pagination"),a("span",{style:{color:"#89DDFF"}},">")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#A6ACCD"}},"    "),a("span",{style:{color:"#89DDFF"}},"<"),a("span",{style:{color:"#F07178"}},"template"),a("span",{style:{color:"#A6ACCD"}}," "),a("span",{style:{color:"#89DDFF"}},"#"),a("span",{style:{color:"#C792EA"}},"meta"),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#89DDFF"}},"{"),a("span",{style:{color:"#A6ACCD"}},"showingText"),a("span",{style:{color:"#89DDFF"}},","),a("span",{style:{color:"#F07178"}}," "),a("span",{style:{color:"#A6ACCD"}},"start"),a("span",{style:{color:"#89DDFF"}},","),a("span",{style:{color:"#F07178"}}," "),a("span",{style:{color:"#A6ACCD"}},"end"),a("span",{style:{color:"#89DDFF"}},","),a("span",{style:{color:"#F07178"}}," "),a("span",{style:{color:"#A6ACCD"}},"fromText"),a("span",{style:{color:"#89DDFF"}},","),a("span",{style:{color:"#F07178"}}," "),a("span",{style:{color:"#A6ACCD"}},"totalItems"),a("span",{style:{color:"#89DDFF"}},","),a("span",{style:{color:"#F07178"}}," "),a("span",{style:{color:"#A6ACCD"}},"dataText"),a("span",{style:{color:"#89DDFF"}},"}"),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#89DDFF"}},">")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#A6ACCD"}},"      {{ showingText }} {{ start }} to {{ end }} of {{ totalItems }}")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#A6ACCD"}},"      {{ dataText }}")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#A6ACCD"}},"    "),a("span",{style:{color:"#89DDFF"}},"</"),a("span",{style:{color:"#F07178"}},"template"),a("span",{style:{color:"#89DDFF"}},">")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#A6ACCD"}},"  "),a("span",{style:{color:"#89DDFF"}},"</"),a("span",{style:{color:"#F07178"}},"v-data-table-pagination"),a("span",{style:{color:"#89DDFF"}},">")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#89DDFF"}},"</"),a("span",{style:{color:"#F07178"}},"template"),a("span",{style:{color:"#89DDFF"}},">")])])])],-1),m=e(`<h2 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-label="Permalink to &quot;Props&quot;">​</a></h2><table><thead><tr><th>Name</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><a href="#modelValue"><code>modelValue</code></a></td><td><code>Number</code></td><td><code>1</code></td></tr><tr><td><a href="#totalItems"><code>totalItems</code></a></td><td><code>Number</code></td><td><code>0</code></td></tr><tr><td><a href="#itemsPerPage"><code>itemsPerPage</code></a></td><td><code>Number</code></td><td><code>10</code></td></tr><tr><td><a href="#itemsPerPageOptions"><code>itemsPerPageOptions</code></a></td><td><code>Array as PropType&lt;number[]&gt;</code></td><td><code>[25, 50, 100]</code></td></tr><tr><td><a href="#showingText"><code>showingText</code></a></td><td><code>String</code></td><td><code>&#39;Showing&#39;</code></td></tr><tr><td><a href="#backgroundColor"><code>backgroundColor</code></a></td><td><code>String</code></td><td><code>&#39;&#39;</code></td></tr><tr><td><a href="#dataText"><code>dataText</code></a></td><td><code>String</code></td><td><code>&#39;data&#39;</code></td></tr><tr><td><a href="#fromText"><code>fromText</code></a></td><td><code>String</code></td><td><code>&#39;from&#39;</code></td></tr><tr><td><a href="#pagination"><code>pagination</code></a></td><td><code>Object as PropType&lt;VPagination&gt;</code></td><td><code>{}</code></td></tr><tr><td><a href="#itemsPerPageProps"><code>itemsPerPageProps</code></a></td><td><code>Object</code></td><td><code>{}</code></td></tr></tbody></table><h2 id="events" tabindex="-1">Events <a class="header-anchor" href="#events" aria-label="Permalink to &quot;Events&quot;">​</a></h2><h3 id="update-modelvalue" tabindex="-1"><code>update:modelValue</code> <a class="header-anchor" href="#update-modelvalue" aria-label="Permalink to &quot;\`update:modelValue\`&quot;">​</a></h3><p>The <code>update:modelValue</code> event is emitted by the <code>VDataTablePagination</code> component when the current page number is updated. This can occur when the user clicks on a page number in the pagination control or when the modelValue prop is changed programmatically.</p><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">VDataTablePagination</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">@update:modelValue</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">handle</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><h3 id="update-itemsperpage" tabindex="-1"><code>update:itemsPerPage</code> <a class="header-anchor" href="#update-itemsperpage" aria-label="Permalink to &quot;\`update:itemsPerPage\`&quot;">​</a></h3><p>The <code>update:itemsPerPage</code> event is emitted by the <code>VDataTablePagination</code> component when the number of items per page is updated. This can occur when the user selects a different value from the items per page dropdown or when the itemsPerPage prop is changed programmatically.</p><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">VDataTablePagination</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">@update:itemsPerPage</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">handle</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><h2 id="update-itemsperpageoptions" tabindex="-1"><code>update:itemsPerPageOptions</code> <a class="header-anchor" href="#update-itemsperpageoptions" aria-label="Permalink to &quot;\`update:itemsPerPageOptions\`&quot;">​</a></h2><p>The <code>update:itemsPerPageOptions</code> event is emitted by the <code>VDataTablePagination</code> component when the <code>itemsPerPageOptions</code> prop is changed. This prop determines the options that are displayed in the items per page dropdown.</p><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">VDataTablePagination</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">@update:itemsPerPageOptions</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">handle</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><h2 id="slots" tabindex="-1">Slots <a class="header-anchor" href="#slots" aria-label="Permalink to &quot;Slots&quot;">​</a></h2><h3 id="rowsperpage" tabindex="-1"><code>rowsPerPage</code> <a class="header-anchor" href="#rowsperpage" aria-label="Permalink to &quot;\`rowsPerPage\`&quot;">​</a></h3><p>The <code>rowsPerPage</code> slot is a scoped slot provided by the <code>VDataTablePagination</code> component that allows you to customize the rows per page dropdown. The <code>value</code> prop contains the current value of the rows per page and the <code>items</code> prop contains the available options for the rows per page dropdown. You can use this slot to customize the display or behavior of the rows per page dropdown.</p><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">VDataTablePagination</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">#</span><span style="color:#C792EA;">rowsPerPage</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;">value</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">items</span><span style="color:#89DDFF;">}</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> ... </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">VDataTablePagination</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><h3 id="meta" tabindex="-1"><code>meta</code> <a class="header-anchor" href="#meta" aria-label="Permalink to &quot;\`meta\`&quot;">​</a></h3><p>The <code>meta</code> slot is also a scoped slot provided by the <code>VDataTablePagination</code> component that allows you to customize the display of the pagination meta information. The <code>showingText</code> prop contains the text to display before the range of items being shown (e.g. &quot;Showing&quot;). The <code>start</code> prop contains the index of the first item being shown. The <code>end</code> prop contains the index of the last item being shown. The <code>fromText</code> prop contains the text to display between the range of items being shown and the total number of items (e.g. &quot;of&quot;). The <code>totalItems</code> prop contains the total number of items. The <code>dataText</code> prop contains the text to display after the total number of items (e.g. &quot;items&quot;). You can use this slot to customize the display of the pagination meta information.</p><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">VDataTablePagination</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">#</span><span style="color:#C792EA;">meta</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;">showingText</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">start</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">end</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">fromText</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">totalItems</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">dataText</span><span style="color:#89DDFF;">}</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      ...</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">VDataTablePagination</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><h3 id="default" tabindex="-1"><code>default</code> <a class="header-anchor" href="#default" aria-label="Permalink to &quot;\`default\`&quot;">​</a></h3><p>The <code>default</code> slot allows you to customize the default content of the <code>VDataTablePagination</code> component. This can be used to add additional pagination controls or to override the default pagination controls provided by the component.</p><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">VDataTablePagination</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> ... </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">VDataTablePagination</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><h2 id="css-variables" tabindex="-1">CSS Variables <a class="header-anchor" href="#css-variables" aria-label="Permalink to &quot;CSS Variables&quot;">​</a></h2><div class="language-scss"><button title="Copy Code" class="copy"></button><span class="lang">scss</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">:</span><span style="color:#C792EA;">root</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  --v-data-table-pagination-bg-color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">var</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">--color-white</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">  --v-data-table-pagination-border-color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">var</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">--color-gray-200</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">  --v-data-table-pagination-text-color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">var</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">--color-gray-700</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><h2 id="storybook" tabindex="-1">Storybook <a class="header-anchor" href="#storybook" aria-label="Permalink to &quot;Storybook&quot;">​</a></h2><p>View Storybook documentation <a href="https://gits-ui.web.app/?path=/story/components-datatablepagination--default" target="_blank" rel="noreferrer">here</a>.</p>`,26);function g(C,A,b,P,v,T){const o=p("LivePreview");return c(),r("div",null,[D,t(o,{src:"components-datatablepagination--default"},{default:l(()=>[d]),_:1}),F,t(o,{src:"components-datatablepagination--rows-per-page-slot"},{default:l(()=>[y]),_:1}),h,t(o,{src:"components-datatablepagination--meta-slot"},{default:l(()=>[u]),_:1}),m])}const w=n(i,[["render",g]]);export{_ as __pageData,w as default};
