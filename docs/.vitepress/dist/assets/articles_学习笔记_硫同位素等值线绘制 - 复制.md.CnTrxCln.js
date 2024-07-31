import{_ as e,c as t,o as p,a5 as n,j as a,a as s}from"./chunks/framework.pqW-H4BI.js";const q=JSON.parse('{"title":"热液系统硫同位素等值线计算过程","description":"","frontmatter":{},"headers":[],"relativePath":"articles/学习笔记/硫同位素等值线绘制 - 复制.md","filePath":"articles/学习笔记/硫同位素等值线绘制 - 复制.md"}'),l={name:"articles/学习笔记/硫同位素等值线绘制 - 复制.md"},i=n('<h1 id="热液系统硫同位素等值线计算过程" tabindex="-1">热液系统硫同位素等值线计算过程 <a class="header-anchor" href="#热液系统硫同位素等值线计算过程" aria-label="Permalink to &quot;热液系统硫同位素等值线计算过程&quot;">​</a></h1><p><strong>注：由于网页对Latex公式支持不完整，部分公式无法正常显示。要查看正确内容请点击&quot;README.pdf&quot;文件下载。</strong></p><p>author:郭荣强</p><p>date:2023.06.26</p><p><a href="mailto:email:guorq22@mails.jlu.edu.cn" target="_blank" rel="noreferrer">email:guorq22@mails.jlu.edu.cn</a></p><h3 id="_1-硫同位素分馏" tabindex="-1">1.硫同位素分馏 <a class="header-anchor" href="#_1-硫同位素分馏" aria-label="Permalink to &quot;1.硫同位素分馏&quot;">​</a></h3><p><s>个人理解</s>：在化学反应中，同种元素不同同位素会表现出不同性质。性质的差异对轻、重同位素进入各种物质中的比例产生影响，称为<strong>同位素分馏</strong>。</p><p>更为官方的解释：某元素的同位素在物理、化学、生物等反应过程中以不同比例分配于不同物质之中的现象称为<strong>同位素分馏</strong>。</p>',8),o=a("h3",{id:"_2-同位素分馏系数",tabindex:"-1"},[s("2. 同位素分馏系数("),a("span",{class:"katex"},[a("span",{class:"katex-mathml"},[a("math",null,[a("semantics",null,[a("mrow",null,[a("mi",null,"α")]),a("annotation",{encoding:"application/x-tex"},"\\alpha")])])]),a("span",{class:"katex-html","aria-hidden":"true"},[a("span",{class:"strut",style:{height:"0.43056em"}}),a("span",{class:"strut bottom",style:{height:"0.43056em","vertical-align":"0em"}}),a("span",{class:"base textstyle uncramped"},[a("span",{class:"mord mathit",style:{"margin-right":"0.0037em"}},"α")])])]),s(") "),a("a",{class:"header-anchor",href:"#_2-同位素分馏系数","aria-label":'Permalink to "2. 同位素分馏系数($\\alpha$)"'},"​")],-1),c=a("p",null,[s("两种物质之间同位素分馏程度用"),a("span",{class:"katex"},[a("span",{class:"katex-mathml"},[a("math",null,[a("semantics",null,[a("mrow",null,[a("mi",null,"α")]),a("annotation",{encoding:"application/x-tex"},"\\alpha")])])]),a("span",{class:"katex-html","aria-hidden":"true"},[a("span",{class:"strut",style:{height:"0.43056em"}}),a("span",{class:"strut bottom",style:{height:"0.43056em","vertical-align":"0em"}}),a("span",{class:"base textstyle uncramped"},[a("span",{class:"mord mathit",style:{"margin-right":"0.0037em"}},"α")])])]),s("表示，如氧同位素在A、B的分馏系数：")],-1),r=n(`<h3 id="等值线绘制" tabindex="-1">等值线绘制 <a class="header-anchor" href="#等值线绘制" aria-label="Permalink to &quot;等值线绘制&quot;">​</a></h3><p><strong>安装依赖</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>    pip install -r requirements.txt</span></span></code></pre></div><p><strong>运行</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>    import CalcDeltaS as cds</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    T_c = 250</span></span>
<span class="line"><span>    delta_totalS = 5.0</span></span>
<span class="line"><span>    plot_species = &quot;FeS2&quot;</span></span>
<span class="line"><span>    delta_list = [-5, 1.8, 2.9, 3.6, 3.9, 6.0]</span></span>
<span class="line"><span>    ranges = {</span></span>
<span class="line"><span>        &quot;pH&quot;: {</span></span>
<span class="line"><span>                350: (5.085, 6.400),</span></span>
<span class="line"><span>                300: (5.113, 6.517),</span></span>
<span class="line"><span>                250: (5.751, 6.621),</span></span>
<span class="line"><span>                0: (2, 12)</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>        &quot;log_fo2&quot; : {</span></span>
<span class="line"><span>            350: (-36, -18),</span></span>
<span class="line"><span>            300: (-40, -22),</span></span>
<span class="line"><span>            250: (-46, -28)</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    # default_ph_range的取值范围和底图一致即可</span></span>
<span class="line"><span>    default_ph_range = (2, 12)</span></span>
<span class="line"><span>    # use_default_ph_range为True时，将会取default_ph_range的ph范围，适合用来画图；</span></span>
<span class="line"><span>    # 该值为False时，ph范围会随着ranges里的ph改变，适合用来计算精确log_fO2值。</span></span>
<span class="line"><span>    use_default_ph_range = True</span></span>
<span class="line"><span>    print(f&quot;{T_c} degree&quot;)</span></span>
<span class="line"><span>    cds.main(T_c, delta_totalS, plot_species, delta_list, ranges[&quot;log_fo2&quot;][T_c], ranges[&quot;pH&quot;][T_c], default_ph_range=default_ph_range, use_default_ph_range=use_default_ph_range)</span></span></code></pre></div><p><strong>注：</strong> 部分认识尚未完善，待续。</p>`,6),_=[i,o,c,r];function h(d,u,g,m,f,x){return p(),t("div",null,_)}const T=e(l,[["render",h]]);export{q as __pageData,T as default};
