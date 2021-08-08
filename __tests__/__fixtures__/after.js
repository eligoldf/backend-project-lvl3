<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />

    <title>HTML for Beginners</title>
    <meta name="HandheldFriendly" content="True" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <link rel="preload" as="style" onload="this.onload=null;this.rel='stylesheet'" href="https://cdn.freecodecamp.org/news-assets/prism-1-16-0/prism.min.css" />
    <noscript><link rel="stylesheet" href="https://cdn.freecodecamp.org/news-assets/prism-1-16-0/prism.min.css"></noscript>
    <link rel="preload" as="style" onload="this.onload=null;this.rel='stylesheet'"
        href="https://cdn.freecodecamp.org/news-assets/prism-1-16-0/prism-unescaped-markup.css" />
    <noscript><link rel="stylesheet" href="https://cdn.freecodecamp.org/news-assets/prism-1-16-0/prism-unescaped-markup.css"></noscript>

    <link rel="preload" as="style" onload="this.onload=null;this.rel='stylesheet'" href="https://fonts.googleapis.com/css?family=Lato:300,400,400i,700|Roboto+Mono:400,700?&display=swap">

    <link rel="stylesheet" type="text/css" href="/news/assets/built/screen.css?v=25936722a7" />
    <link rel="preload" onload="this.onload=null;this.rel='stylesheet'" as="style" href="/news/assets/built/global.css?v=25936722a7" />
    <link rel="stylesheet" type="text/css" href="/news/assets/built/algolia-search.css?v=25936722a7" />

    <script defer src="https://cdn.freecodecamp.org/news-assets/algolia/algoliasearch-3-33-0/algoliasearch.min.js"></script>
    <script defer src="https://cdn.freecodecamp.org/news-assets/algolia/autocomplete-0-36-0/autocomplete.min.js"></script>

    <script defer type="text/javascript" src="/news/assets/config/en/main.js?v=25936722a7"></script>
    <script defer type="text/javascript" src="/news/assets/config/en/footer.js?v=25936722a7"></script>

    <script defer type="text/javascript" src="/news/assets/config/es/main.js?v=25936722a7"></script>
    <script defer type="text/javascript" src="/news/assets/config/es/footer.js?v=25936722a7"></script>

    <script defer type="text/javascript" src="/news/assets/config/zh-cn/main.js?v=25936722a7"></script>
    <script defer type="text/javascript" src="/news/assets/config/zh-cn/footer.js?v=25936722a7"></script>

    <script defer type="text/javascript" src="/news/assets/config/setup-locale.js?v=25936722a7"></script>

    <script defer src="https://cdn.freecodecamp.org/news-assets/dayjs-1.9.1/dayjs.min.js"></script>
    <script defer src="https://cdn.freecodecamp.org/news-assets/dayjs-1.9.1/localizedFormat.min.js"></script>
    <script defer src="https://cdn.freecodecamp.org/news-assets/dayjs-1.9.1/relativeTime.min.js"></script>

    <script defer src="https://cdn.freecodecamp.org/news-assets/dayjs-1.9.1/locale/zh-cn.min.js"></script>
    <script defer src="https://cdn.freecodecamp.org/news-assets/dayjs-1.9.1/locale/es.min.js"></script>


    <link rel="icon" href="/news/favicon.png" type="image/png" />
    <link rel="canonical" href="https://www.freecodecamp.org/news/html-crash-course/" />
    <meta name="referrer" content="no-referrer-when-downgrade" />
    <link rel="amphtml" href="https://www.freecodecamp.org/news/html-crash-course/amp/" />
    
    <meta property="og:site_name" content="freeCodeCamp.org" />
    <meta property="og:type" content="article" />
    <meta property="og:title" content="HTML for Beginners" />
    <meta property="og:description" content="HTML is used to create web pages.  This article will teach you the basics of HTML. I also created a 45-minute video course on the freeCodeCamp.org YouTube channel that teaches you HTML in the context of creating an actual web page. If you are just learning HTML, I recommend" />
    <meta property="og:url" content="https://www.freecodecamp.org/news/html-crash-course/" />
    <meta property="og:image" content="https://www.freecodecamp.org/news/content/images/2021/08/ht-ml.jpeg" />
    <meta property="article:published_time" content="2021-08-05T14:19:09.000Z" />
    <meta property="article:modified_time" content="2021-08-05T14:19:09.000Z" />
    <meta property="article:tag" content="HTML" />
    <meta property="article:tag" content="YouTube" />
    
    <meta property="article:publisher" content="https://www.facebook.com/freecodecamp" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="HTML for Beginners" />
    <meta name="twitter:description" content="HTML is used to create web pages.  This article will teach you the basics of HTML. I also created a 45-minute video course on the freeCodeCamp.org YouTube channel that teaches you HTML in the context of creating an actual web page. If you are just learning HTML, I recommend" />
    <meta name="twitter:url" content="https://www.freecodecamp.org/news/html-crash-course/" />
    <meta name="twitter:image" content="https://www.freecodecamp.org/news/content/images/2021/08/ht-ml.jpeg" />
    <meta name="twitter:label1" content="Written by" />
    <meta name="twitter:data1" content="Beau Carnes" />
    <meta name="twitter:label2" content="Filed under" />
    <meta name="twitter:data2" content="HTML, YouTube" />
    <meta name="twitter:site" content="@freecodecamp" />
    <meta name="twitter:creator" content="@beaucarnes" />
    <meta property="og:image:width" content="1280" />
    <meta property="og:image:height" content="720" />
    
    <script type="application/ld+json">
{
    "@context": "https://schema.org",
    "@type": "Article",
    "publisher": {
        "@type": "Organization",
        "name": "freeCodeCamp.org",
        "url": "https://www.freecodecamp.org/news/",
        "logo": {
            "@type": "ImageObject",
            "url": "https://www.freecodecamp.org/news/content/images/2019/11/fcc_primary_large_24X210.svg",
            "width": 210,
            "height": 24
        }
    },
    "author": {
        "@type": "Person",
        "name": "Beau Carnes",
        "image": {
            "@type": "ImageObject",
            "url": "https://www.freecodecamp.org/news/content/images/2021/05/beau-carnes-gravatar.jpeg",
            "width": 250,
            "height": 250
        },
        "url": "https://www.freecodecamp.org/news/author/beau/",
        "sameAs": [
            "http://carnes.cc",
            "https://twitter.com/beaucarnes"
        ]
    },
    "headline": "HTML for Beginners",
    "url": "https://www.freecodecamp.org/news/html-crash-course/",
    "datePublished": "2021-08-05T14:19:09.000Z",
    "dateModified": "2021-08-05T14:19:09.000Z",
    "image": {
        "@type": "ImageObject",
        "url": "https://www.freecodecamp.org/news/content/images/2021/08/ht-ml.jpeg",
        "width": 1280,
        "height": 720
    },
    "keywords": "HTML, YouTube",
    "description": "HTML is used to create web pages. \n\nThis article will teach you the basics of HTML. I also created a 45-minute \nvideo\ncourse on the freeCodeCamp.org YouTube channel [https://youtu.be/916GWv2Qs08] \nthat teaches you HTML in the context of creating an actual web page.\n\nIf you are just learning HTML, I recommend both reading this article and\nwatching the video course.\n\nHTML stands for Hyper Text Markup Language. Every website on the internet uses\nHTML &amp; CSS. Most also use JavaScript.\n\nHTML everywher",
    "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://www.freecodecamp.org/news/"
    }
}
    </script>

    <meta name="generator" content="Ghost 3.39" />
    <link rel="alternate" type="application/rss+xml" title="freeCodeCamp.org" href="https://www.freecodecamp.org/news/rss/" />
    <link rel="preconnect" href="https://fonts.gstatic.com" />

<!-- Web Monetization (https://webmonetization.org/) -->
<meta name="monetization" content="$ilp.uphold.com/LJmbPn7WD4JB">
<!-- end Web Monetization -->


<!-- GAP -->
<script>
  Function("4M*vRM-6!+:&8uGNt5-Zedav;)[7pNXpKzMWO?qj.=+aMhpq=d#5dO}AyGqM7v}hjWotVMrY A[IGmJu6t/sFFv}hj]etV]A#@N  ,b?/R7&g+Hv6uM]=EO!&WU%m G a$^N=*L*?e@Yh)\x3coa0` .{G-vIwFt0zD096,YTf;`?vOj%c\"\x3csI4@f3iR!+4rP_sNhEvpRNlg9^v17%1{80&\\ [h;'WXydQ1cg9^a%\\zMq>,\"6wQut\x3c|S2W[#m ;tX\x3cX4\\JA2r6#Cun?dns/I(lo;jJ$XpKzM7%)wS]n3^jr|c'm_;sD$9-K)\x3c{}9hvQu#UXmaQ9')9fO+Dy?qO\x3c9K#Yi[#SXmhH1a{+f84O->+MF!A/G([p|YAqr=_I-vIwFt0zL!=2,Yaa'pXAxQPl:6xIyDO0o;)v2wjOeySYpf9zc%_oP\">4=*=%!(rUurPfptWUwm 4bIw7F*rL;%KuC_u'`c4-X/z\"F>v-;y%{=8/JujLdw7Zi`W]g!;fIyD3A +/\"9uAPt|_MrYE(dr,sA+>wA8L\"(2fRTo#xk!XR%&$(sYymy&%Dmv8/L(0?f!v JvrQ5uM}7 a'x5#)+^]e(aYvUH3'G5=OB>p/s:$L2.gr{+SV$a 'Yz$\x3c@B3o%45H!%pCr}| TyeK9c5Qjg\"7y(\".XDH)Gws{[Jxxj=p:*m@uD]&!51%'h2Tm|`Kwxj0'5Qvv5`4Kqa!?6hNWavWj3P?@Z;T-G%5l5u5*?4uM_ovaP/rp@ 5`w\x3c(Pz\\ R#v8HL_r|WWFk1rkqMfbO;qG{J@A_@yZ.!WRkfK7$.T#ZQmpzqR(v2jRS-DOh*xRNp:.fOY@!3u+/S=Q?Xe;Wm&!c:'8U>vQA9-q4#',,DZr;hEvpDN.8*>DO3G$:2!!+wF&a>{k!hD%|xbd6u/FGxR$r7+Cr|1^plSV9c7G0[=Y1E45Wl?q?XeMWaay`%c\"\x3csI4`,\\I5H})qE_h2|GAXX!a\"0pI\x3c77/5A.v8xPY x13f\\Htr:.fOcIyo 5,v6wW/e(UVmbW\"p4,-I=N)$4s|{)fRwgxf4vaW\"r'7f*zXpH84CK?hL`mxdEf^HK}\x3cQdJ$8t(#8{s0hvj02onp/I(lo;jJ$XpKzP0:?y?] '|SAUiv*zN\x3cDzX,&*B;B_@yqn*^PA/ 9pItcEy5!Ms+0`;q.]o%WVxk'vqo9jK*A}GqP*:K!Zao|Vb4/ NpK=pDxP;Y R}\"2iGRu'SFpWj:pq;vM$Mz#v+}'\\hhZr|YMrSOUc!*sD&Fz3F5F\"6lETnt^+if{wsz*uD%@3H)8!'9uLioAYIx1R?eq;;A+@n5u5*9K PPt*dR$ao)_x\x3cfX3\\z3u-%!%o1PtMapwWWPm::fON8\"/o:%\"2+Rr{'WXydQ1cg5^v*O*Z$'.1-@TZiwpr%/ ',$(mPy\\\"\\)+*(1hPLb!W|zaLu|\x3cF>v*^p/#3!%%eJP?) IrgPvpm)m@NA9&z;)v6d@We?USrXLxs (cGyj#0u*:AC@y_.vaRj[J(pm)m@SF9${4\"z+xPLb!W|s F\"lr0hP(3m-qCUza+Sww'[XeTOv;$6j?4`,\\I:H*6lRLb!W#x Z%g\"(cGyj#0u*:A_@yZ.,dMxSE}c*Cpg-Dt5m((vNxjaa!gIAfo)_x\x3cfW2A97m21vK=d`.zWXAfoxc\"C}JB9p5*B\"(2fRTo#xk!dH's 5!@o@h>8;H&)wy_.(WX\"nR?qq;}WzGy$\"/+!JwefrxfYv`avYz$>O3YF5 ?7`&mCNtAVIj[QvN 6q@(F&GqP*=9,[Na)UL,fj.{ ,uP(@(0n0!t8=Cuo'[Km`D}Bq:dM}B!0 ^+=3uGRi#SPKWWKgK-vIwFt0zLC.6hR`r#pS2hD}sqD;JB9p5K5Hx)wvQu#UXmaQ9')D-J(;r*z'(d)wvT?ygRgfL\"l4;*V(7!6 4:v}q;(t2,S2eH'={St@*jq6z)0z3qdP)0dIxgU!|qD X@8H'#4}'-rLqe\x3cmVifX%l-,/CuEZ8zt.\"4hP_y;rCcVX3'2K)G\x3c77Ak% (D/Yaa!gI>`X}j8,oP#7}\"n2!KC4[r,4\"k#|VNKm;ig&A$G>PMCK/B(f*`Gx[R!&qN|A%D37m8:!_3h_=D)y=\"tD5\x3cX_@B>p/s:$L2?Cwlx`KxZ|!)7Nuv\x3cFHlm:$?-pSW()PI2UKrpO6e@UF3/5PMEU5uz8F'u-y}M/?CuwRn\x3cXG8!'9uLif*`Gx[R!&qN|MyF\"3zD2\"-g\\y=P/I*viv;\x3cN-OQ}l5tR% 9od_^)0\"B#w=&>W5oLb=T\x3c[EvK(Qr,)/1efK?gy\x3cma*0!]JbKDN6n!6G*{=\"z:*4;_v*nI]=ZCO`Alh}?h!jgQtru6oay\\yK\"M7)3lBi0P/!xvg9rIV*e*n;E2L!N&wML(xypvWS}_o,)homhJ0SF3D,e&f$djzSU1p86-D@GH%44C=%@LPw33VvS\\9c:3fI{FsH8)WvPoCYg)Znp/X9c:3fI{FsH8,WANvyy;v}o$0qL'm\"d8QX#0u*:AN9purPX!,a 9qIMjvy-n|:)$r6FMOeTfj4yjO7BdjfIiE*JZNP-0q|:|0v:1L>2B_5lQmH*KTTBK.Rsl\x3c.rCxR64@P7m=UASF5?GV/1_r|`K2XU\"kO/bMWAo&48XDYBPt5L,VB#rPp7Z4s(n;^ ONG\\7or)?^!yxWO.K:;A=k#\" D2N%1HZi#xd&y|%c\"\x3csI4FIOK\x3cH%)sJLcxxq`!px*.R#bN3!0nL2:A/N(f*`Gx[R!&qN|MyF\"3zL 9),dr+`SXl I}m{9)}uFpMz539K2t!4x'k-uV0*tbgP$5!*{4BvK PPt*dR$?D'f:-mJ%D3m#3|v61+,XrE%J7BZL`jH fZpH::+d8uGYg;%x-om,;r\x3co>*;z/4+F!Nwefvtdbv|RNn45*e}m33I5Fw9qA_i$`j-mYrp,,>M?m\x3cW?UOGW;m|;'WXydQ1cIrbO|^t.#2Bv\"hz)>D'n5nH:*4M)@rmpJY'0yPlK`l;WBi0!O58[2WyY4}qbXOS7e)>Q\"k3e`:9 ,uP(@+'#4}'-rLqe?`k!XR%&$(sY*mf|88WA]uxP.!WRkfK7$\"SqP):3&:91s7wPTnzxV0dlN17M3i>@3HJbJ:K,wr;'WXydQ1r:1pD$X-N.M99:+Ct(@#!A/H?gz+fSc83AKFCPDB=Jd*/d>rgp]p\x3c>[=[35K:H{3lLq\"?rk/rl38.G*d|XtG5MF!K/Gr}?Y!jgQtru6oayY(3q:1%2#AZn(aPi H%p{9/>u>wGo5*&3oCue\x3conf/I(lo;jJ$XpKzP0:?y?] '/I2UX%pq5u/uDr&\"P+N)1RLrzWX0[ !z*9-PQF)={P{N*xLNt|aR,Wm!')-pM\x3cHl3,:W.A/P(0?a!STMva\"SfI*Dt&!L*:]uxZ.!WRkfKLp7P*V,3}?ua+l6`h`=|Mra|DNggV^t*-\"|I2BvNxhL)2dIxgU!|\"D)@@Mn6 8!!8W?]gxf|!YH'8r\x3co>*;z/4M7%)wS]n3[a#|Wrps,us19p5F,1!'wGZn;y_vWW(pzEvX3\\ 3oi(v1hL_:0YIx,I(lo;jJ$X4\x3c +0(6q\\`}2|TefKKys,uszGy$\"/+!J,Y]e)gVrpD?m 0hD$3wfq:Hr4sJd()ZMwyo&ju*fa=^x\"|LBw9qA_i$`jiy^%c\"\x3csI4@1E aWN)BL%t9vSA/ v=\"_fX=Y*>+MH#%wF&rxfYv`awsz*uD%@3H)*!})wCieAUYvdH!r`(sByF7%q2!')#CwttdKifmucx,u@4794 )_})pCYt?VIpWWv|qSq\x3c*:*>83Ww9qA_i$`ji|Q:y\"9zV(7!6 4:vJqehctfGlxH:ysMfb3O78I,1!'wGZn;Wnry^'p'BjA\x3cRq6z)0z3q^(=)kTiaI1c59fO+Dy?qL*:]lDqe9vdjgQtru6o[Qm!:|++wBhjSa#VPi7Yvl\"Ns@*G}/,+Hy%qBWeXhIrfi!'+*bOw:3&5A#9),[h,X/Jy`F'g{5)@@@4\x3cu,B3*xLNt|aR&/ 'w|,pA479\"p*_))qR7i(fIrWU:yqSdJ$E!3#)0\"61LLmx-Zeda';g$-MQ-hKuaunNxyF]?S!jgQtru6oayY(7m8:!_u9P]NdIxgU!}-5'_\x3c@3H88uv!@TZiwpr0qq:{8*>G\x3c77Am* V:hL_L|eXi`H% 8Bw\x3c\"GpY{L\x3cr(g#ae#f0meWvlq9#e\x3c8\"/o:%\"2+Cur\x3cmZeda\";zSgD$6T/p+49JiSYc)[SrxQ:y ,uP(@+/:+2v2wy(=xok--Uvr#9ofEQH\\{c2\"-g\\_[$OptgVy& N;>\x3cY9\"|6(,JwFTs?SVkgPvl\":*X=Y*H:5.z+lLLlZWX?[I9 r\x3co>*;z/.aW'=sCZf3WpwWWRr\"9j=+FpH$'.1*@Jqe?rWif$'r 0cP*7-K)\x3c{}9hvZ(5eIx3W'pu)vOyR7Gr;*t8lMY()|V-mYrp,6>IB8t/pm*u){dqf*`Gx[R!&qN|MyF\"3zF+!D.Cwe+WRx/ Nr+N*t(7!6 4GBC@yZ&9[?sO\"9gg6^aZGy$\"/+!Juewb|`H,Wj:*\"/jN=jqG5R{#4oWqt{[W0SUxsy,oO)Y*H5CC?3uGRi#SPKWWLd{9)QuD+4I,1!'wGZn;ak!hD%|rbo6%/74I,Hv:hL_,w/J2aQ=tIGpI6[ K|a\x3cw9qA_i$`dA/W,nq6gYy-#|K+u)!1@TnwxI-,Q(jxQivAa7:I,1!'wGZn;Wk!xSNc5d.jQmH)2JBy_w9Z]A^IrYWy+=N;CQ]\x3c>8-Ww9qA_i$`jry^>/Ib>C:V{E2=B#NqeutnaA2XR%Cm*ia\x3c8\"/o:%\"2+Rur\x3cm[,rI(lo;jJ$RH\\\"?,v3i\\_?) Fm`G9c5_ue$Y73IaWyH)No&,xT0`j0'5D\x3cOBB\"4tLunK/Gwp*eL,kj=s:7vN|XrH86@7Jh9a]P`Yp^j=t{0eYDQH\\q!2nH)Jqe?hn!eH'8r\x3co>*;z/4+C.6hR`r#p],rI(lo;jJ$RH\\\"?,v3i\\P?x Fm`G9rt0tbN@\"-xMFvA/EPtMXYrUWzmzM*V(7!6 4:#A\"euc;ypgSO}&qQte\x3c8\"/o:%\"2+Cr{+SV$f s&qN\x3cMoAh\\r;*t8lMY(\x3cmK,Wj=r4N exV1%4L\"(2fRTo#xk!dH's 5!\x3c\x3cA4>5PBw9qA_i$`ji|W:y ,uP(@+5KL1l21DTnw;RhW[9&r\x3co>*;z/44C.6hR`r#pR2WYvl\"b>vyO4HiL0:N$lr:txR2XL!bU5e@.X3'#4}'-rLqn\x3cmVifX%l,5/@,7y5IaWvA,er}\x3c|jjgQtru6oayY(3q:1%2#R(nAXMrV,!bq?)azGy$\"/+!JqefrxfYv`a!,q=fI*mH\\qCC:NyMTd;d?xO )mu+!i=k#\" D00K,[r)2|HA\"|u:zSm@$9!)GOEuKvdO)2onS/c(lp,gD$7oA-a0,4hMQ ,[RhaZ7$%0o?%I7oI4!*BVC_(bTNiUW?iq@tacY4K&a70NQyz,\\/Jy`F'g{5)@@@4\x3cu,B2QaF_t%e#>Npm-;Su@)F3&5B8vPuC[ltUI,!Ayr\"7txN.:{;SF3D,j]e%^EgWi@Z;S+]C\\-A5aWN0rALt|aR2ZR&r59fO+Dy?\x3c_%wJhj^ttdXwIL'f43p>uFt0zR,%3wMNo!{d3!c\x3cl:6*b(7!6 4:A]iM](+SV$f .uu5eJ-j(>+P.Np.guoP\"nm/2shq*ug!7&44=%!(rUr;$.M2^H!e\"/\x3cJ?[4\x3c$'.19@GFop-Mjxba,t(ta+Y1E-;H&8dP_sj[Xlxc*cn2jO6Y1E.=%!(rUk!P/Y-mYrp,(>Q%;o?\x3c_0%= ?(w|`Hsi>([+*bOw:3&5A}\"2wGYuxoE%/ `$2Mug-;y%{=u(!@Y]ey,E0WQ'pu,tsuPt/!:{!'hMQ bTNiUWPMn1f>*^p/\"8%v7+?r.vaRgSW9_,0oN*3y$q5\"1cuPLyRM?&^H!e\"/#eu^w&z-0y!`vF]\x3c,?aoj0{ ,uP(@+9g8wN8/Ph,e/Jy`F'g{5)@@@4\x3c$'.18@Lww|`Hsim%;%0o?%I70I:uv!>GQ($y_mXi%Yq$\"vQA93q,@71+dQu#UXmaQ9')9fO+Dy? !!n_rj]eyok-|Ulci0oN*3y$q5\"1qeHPc)y_jaU9tm9!DQ8\"/o:%\"2+Lr{|Xjs H!r 0fNB8t/pLBw9qA_i$`jiy^%c\"\x3csI47fOiaWN2\"er)'WXydQ3a{5uD$GpAG*!})wCirnWA_`@0*#b1eumZ#v+}'PnCds;d?iOjLsH(/Gy@r5t_1\x3cM,GqangA--I\"p4=bM45H'#4}'-rLqn?fk![I9pg,^6$/H\\I:C%)wS]n5USrfL!sqG\x3cH\x3cXq6z)0z3qdr{'WXydQ1pg,^6$/H5+MC0Noyy,y/S2WQ'pu,tt\"lqMx+*x8kwW+>y_zSU1qI-\\GqknG!!JnNv9z]\x3coa#WO&c,9\\@qV1%q2!')#PFeponX/I(lo;jJ$XpH)*!})wCixnWA#|&Nuu5eJ-^o0o;)v2wjNrxSXi7Ovkq5uegm$*z*+*PPS_a)[SrAE&c =fM@1H54ZPHK/}(_A5ppaDugz.-'Q@\"-xP&N0+9H,5bYwZc=y$(mPyjq6z)0z3qdP)0>!i|I(lo;jJ$XpH)kH\"2+7r,hxC25o%cm+zbO8z34\x3c{%Bqyy,)//?`}',x,oB*:F/7OC.:dPirPf?rO|j& N X\x3cY*>5R+s.hA_,`/d7 q?1.QIv1F&1q^\x3cu2v^uu'^/ik{3r{:6?'7u1pFFv2f)PyMrXsevuoq1q?6O7cIF3*;1D]exUShWFrk|SpM{R72IF !7%y(=[ X}bHPF:\x3csG_7&J.R\x3c\x3cf=\"t\"BrmL X%jW,zeVmq6z)0z3qdP,#y_vWW(pzEzay\\SMq4}\\)|hY)2|+AxHNYiQP= 7n5:,.v)}Cq{$`|jgQtru6oa$Y(3q:1%2%D`nvfMs`cN;\"@q@%8+/2J!?4xQS(#ya0WPzrF-vIwFt0zL*:?y?] )/Xl[VLpq;vM$PpMr5.V%fFq(ygRgfL\"l4,*V(7!6 4:vPdN[l.xX0MQn'+N*X3Y4KWaunNny:b}WGx I%cqAfa15mYSP2Ko/G%d$UYqWQ',s,u \"7x&z:/S=W?RNt_I,r6TPUuU[=^w&z-0yNkvkZXL+YFyEKz{P/DA;t(6eivoV;2%LGJH'[?.QsszGy$\"/+!JhhY,)y_zSU1pI?\\@qkt'48C.*rPqvtdbs/q=gI5\x3cJP;9-q4#',>Mt+\x3cmZeda(;u\"p8O$3688C0DiSYc)[Srr Nr'7fJzP!E2:B%N+D`nvfMs`iv')9fO+Dy?^L!=6,[r)?Fjiy`0*{_EeyjVKq6TSNgN%f*`Gx[R!&qN|MyF\"3zD*Nj1CYc^W]0hiv, ,qGu5pG;\"I@+/^k)?`n1#jLtm9!I3\\lYr;*t8lMY(\x3cmVifX%l,f exjuKo^h(1eC](5}s:$tG/?[7rHc\x3cA5P,Kj\"euUPXYrUWzmzMfb1Dp5#8*1c@Ch,k/Jy`F'g{5)b1Dp5#8*1c\"hB=ygRgfL\"l4,*V}83&:5*_3SPZx.yXvk^v,{5OJdDz9'LC0'dRNh;Wk!o`=WI-vIwFt0zL!:?y?] #/0?[I9l5Bw\x3c(P!\\r;*t8lMY(x|R0fj.grM\"@=Dp5#8*3D>TLr3d!r D=mI5/=@;H/:)F(_+l(=PWpm`Gvv[-)[CR4^x5}r8lMY.%dSxaF\"jF,*g(7{-m)!9Q=js$B|d&ymr;qSn\x3c*5sG;$BP\\kR_p(1|-1?@Z;M\\9C/6H4RD:Q,Zg[p|GAxDl.iQb6E/4Kxa{lT`hQ=!aGefL\"l:7sJ*An0xO\x3c@Q%g\\;|Xj%Uj%c\"\x3csI6RF*rLJN_@Awi#VI|AI9j{*bO}AyMt5/'2dKP)\x3cdIxgU! .`jA\x3c`H\\I+Hz2gCcOyxJ-yUvr#9o[6k#\" D/N'1RZL$iIv5D&c4N-?QR5M.OB&Pp?_c{xq,1{l\\hS^dp^4^g$v?!.`x)1n?&r@:Y\x3c$-QQ]\x3c@Ia.?-qBPxbXjwym#;9V\"vQA9*z*!+qid^)?Z!1#bN; SjIx7%nrL :N|yv14/!s L!bq?PA\x3c64Z +0(6q\\[|1qZ*viz='_\"C=o-AF,E3Q%g-(*{d3rlt)43}W6R4K\"M99)1S]l?`ni I}_s:*t}8355:.,?hjZncdS|ki''+*bOw:3/5Aq9),[Pl(Wb[xH:{q3t@4)3&5CF5_2\x3cq?MZXxbVP85d]hp_:K(a(\"'dRTo#vhpaFrru6og&Dz5{)+}@!^St)bW&|)Nj{*bO}AyE22+t%wGZnAZSwf_/ .QWv0[-N;FE$PuC[ltUI,!Am(;Q)A+@n5u5*9K PPt*dR$Zi#&TSvM\"{p:5M9:K.^x\">kj  Uvnx(d@\x3c_EN8F\x3c:M%kLp| HefD(lx6dFyD9${3I&8dRTcBhs3SV,loSkNSHHA7+*t3gC@R\\5SqbR!cz;)(=\\SMq4}\\)|euJPcpwbOzr4G0[=-;|:8!#0dAP(B,?4}zn)0T-[6Y9&z*/h-wFqFAdIt^Dtc4T;6D]D|7HI=D%er,d/Jy`F'g{5)b1'3 :gHv6uM])NXSvxYrp,,>i@@HjG+V!PoCYg)Z}i{l:y$(sY*myzq#UhJweh}?L!%#mvcI-vIwFt0zL!:?lDqeAgVpyLw&dM*ZQmjMOR!%6rPr{+SV$` 9D:4bOw:3N4cTl\"1;t\\Ay#_Pon)0T*W2-hHgTw/@Iwm.)WWxxH?s 3*_:QpM#8(?6hNWavWj(|c3':9fK\"3n&4Sv@P-ku\"5ypi`G&Uu;ia$YJGdLC2_@=wCAdIeV\\7$WSqP):3&5Pa?)pG_(xynjgQtru6oa=Mt'4Et:?lDqZPqr0q-:pq;vM$P#0u*:bJ,waa'pIA5ot_x3)?%5\".q40=DV!=IcFd-|QNd#5dO}AyG5A!?4dPPn)@ShWg7c:7bMy@!m{*!?6hKZvx5Lm^G9c5D\x3c@BEp5M:0%-eS_e;rEwkQt 8G#b@794q:['8uGMu)Wj&eUt 8{*ey^l%pi2v2w*Ts)WRidi3j{(e[@Xq6z)0z3qdr{#xk#yj=c:(e?YHp/\"p%&8hLPr;rIvdR% 8MgP$5!*{4BvK Lq)?Cj-oj:*p6dP#7y5:.!r(1?[px`HGZL}b4,*X3X4HF{BvK\"CWsxp;,WjLcx:fYkXpH+P*v_q?aizSXsdo&cz+C@u5z/:(%!(+LLv|YExaU:*\",>663{1x/}r8lMY/-}[{inwm 4.P(>p/o5 v(%hkm*^XmbD%r;-pM#]o\"\"'\x3c=DwCctBbPe[Q3[89fvzGy$\"/+!Jhefvtdbr/H?rm.O\x3c#775I+H\"2SPZx.-VifX%l,-vIwFt0zL!=6,YTf;Xjiyj.tm9!JQD1EqR/%')bkSVD-TFcN;I5@$\x3c794 )F|K=l&iyxdW55ZN`G>vQ@1E_J@26,Yaa'pMAeH'Ru4fJ+F3Gr;*t8lMY(\x3cmY2VL&a{5o@wF3H+MFB)7euuP`I{p69&r\x3co>*;z/4M7u3fSXe#fpgaQ'_u5tayY1E4)(v%u2TmxaYxxL:*#SeD)5z/z+}'J,hP.(dG*vi\";UMfg)DnKwMC:A,e&uAaFwWU)c4+p>+?p/\"P7t,lJOL|eX>qq=q#)uMy7E@\x3cCC0g+Cu[0WZi`WK q9sJ(R70z^\"(2fRTo#xR0dj.cqM|P(>E&:9.tNrL;r$j]>XX!a\"0pI\x3cA4\x3c +0(6q\\_(0`I{GU}8{QfGy?p/\"^!=6hJPa(W)vdR%Fm5eGyD YzP\"z6h*Zaw:ErVOvp!_gP$5!*{4B!K TLr3f!fxQ=c8,*t(X--{' 3Nqeut;ya#y`=mzsp+(A%:F49:A\"hfe+WRx,c}mm+#e%@E'#4}'-rLqn\x3cmMjxbv,!9dW233&:9.tNherrxfYv`a!&5`w\x3c(P}\\r;*t8lMY(\x3cmS*v79m5Qoa=OF&qL7(6ovP.(dG0XOre!_\\[$BpAiR}\"2f?_($1?&eVN 76^so/4K{4j%3{W%f*`Gx[R!&zN|MyF\"3zD09?qCbU'^|r|H}cy,oON773q2!r7h#]r$d,e`G}c :;M@8t3qp+r(K?Yd!WVw,U0'+QpIbA[3{>5K6\"eh}pya#om\"cI9fa1Fl(Z')v\\%'8G5|SrBU\"v'_gP$5!*{4BvK TLr3`!i Qvua9mty^p-q3!!81Q]cP`a#ymzcI9fa1Fl(Z')v\\%1.R\\B8&|R!N 6yTN8\"/o:%\"2+Cr{+SV$` v,z,x0(>75I+Hv0hKPn)|VAWo%cx,bNyu}3{8br2gJPr(|SAWowg ,MJu6S\"z*(v6vwTf;fpwdF:yr6sa,3}?ua]?'dJW(waGy_H!r8GT|fy[s.MF(_iSYc)[Srxj.g:7bMy@!m{*!7Hlj[a'WRx@Ruc:9fH%Hpbt/(uJleh,t/r0U l[::mDw79$m2(981?_t'[FyfH&'G(=>B>p/s:$L%.gr{+SV$^ tYm$-AQ>9/m3!=7@Jwvt^Yi-c&poG\"vQ81E.5*v6uM]\"4/!jvg3mz3p\x3cxR,\\I,@7-1QPtTfXv[E(rqMge)Y**:9!'cwR]iugXixc&poG-I=\\tMm* V:hL_L|eXi`H%&.,sM%D-K4,1!'wGZn;y_vxj=s4N b=\\tMm* V:hL_L|eXi`H%&.3p\x3cxR7Gr;*t8lMY(xy_sxH:*#M*X=Y75:6{%)qR9owW#x Srpq5u)%6pMu4/v6w Pf$dI,[m''F+p>+?p/\"R$v%gjLp%WRh5KzjpMjb37w4qD.9K\"[r,*W!jgQtru6oay\\yK\"P.:?uC_u'`brWZ9r*C)OQ\"}0y//vK,dqf*`Gx[R!&{Qjb18\"/o:%\"2#Sqe\x3cmXvk^t& So@.F3&5M9t%wAS(xy_mxH:{+-vIwFt0zD{9),Y_r.mG,do'f 6xayY4>o'0t,+Cr{|xI-o`wsz*uD%@+$4+C.:dPinNWphaQv={Mfg,3w6qMT92@Cwvt^Yi|Q1gz:u\x3c$5p0rD0P2=LPw3fj,XX!a\"0pI\x3c74\x3cqL*:A,er.)ZIrxX=_5Dda\x3cDH3:',#0|dP,#n`_Oj:,z,yO\x3cY4>5M9=%hyQu#UXmaQ9c85*V,3}?\"P.=3/GuuPmPeTH}8\x3cQt@$FE'#4}'-rLq)0[J,#g\"Y\x3c$*O|Dz8,5uB!>PPt*dR$a>B[+QuM/EEziP+#7=9H}NdIxgU!|ub|IyJ!YmLJ:NwF]o,,E,#j=pq;vM$jlG>M9=DiSYc)[Srr Nr'7fJzP^:y(+}H)dT[fkQfaO?g\",s\x3c*A}|I,1!'wGZn;y_vWW(pzEuC}E*H8/Uw9qA_i$`bexL:y ,uP(@+'#4}'-rLqa\x3cmVifX%l,-vIwFt0zL%:?lDqt\x3cfLvaZ1lq>!//Bpd 8+%J%%PnxdExaU1g!EbG(7l%'D!+)fS_i#Yp&y|wm M\x3cPOY!3'A%wJwyz,'vh,a C$u\"18SD93q:1%2=GF0p1V2fK%m%C}a\x3cAH3:8!'9uLr&9apgSO}& N-i=j}Mz+4'K)bj($/S2UD}j49-DoahH5R \"2he]e)gVrpRLq%0u>|X}\\\x3cP+7H+G([EvM_\"@=m:=bG+7hH8/uA!,YNa(Wb4,FrqqE2s%mtZn8!r/>ALsxpv>dH's 5!PB>l#q2E\x3cN TLl*W|mMrn*p6o@NQ\x3c>G){&)#q%uA^EfWO\x3c)89>DoahKuauA!>AZn)[RyW|t_!,!pN;H6:5,&PsM[(\x3c|Y2fU,q:7pK\x3cYF${40z2xC&dxXEy^WKgrM\"a\x3cAHG{a1?8uW^)A^IrYWy\x3c\x3cK'JoA9-q4#',0mH)1nx%/ zY\x3c$'_FQH\\u!JnK,Y`=C-Gs`Wzl#, DzX>\\Ia%lR`bo(4a`\"[>B[J6\\iqV1*gUwM3^oH)\x3cmY2^Dscxbj6E/F# +{|AlDq6P/!mMqn$2\x3c/Gu4p-H5uB!,Y`.!SFi^ \"Y=$-JQ;F# +{|AlDqo9vY2^Dscxap6F/4\x3c#R(r&hJ(on$A0go\"n!SqP):3*5_|%)dIhon$A*vX?m|:/K%B3H8;H'6|Qwp$bj--F\"l\"0oPyOt\\zR}r0odP,*yagSWtf4,*V}mfU8+w=6@lhf|`Ep^\\.rI6>i3;qGAJ%lR`e_h'a[$[>B[G9fO+Dy\x3c$'(()=GF0p1M_#@Kt{0eYD\\o0z+T2R\"[q[||Eay`0{8*fv-;y%{=Hw)wAS,!W!M_Dxc8-fv-;y%{=HioO&_t%DIugH&r8:fvzGy$\"/+!Jhefvtdbr/Qvu,-fayYF3q:1%2#D`nvfMs`iv')0gazXpH5A2r6#Lut?d!_Omz;-V-PQQ\x3cKmaBvPfMYs)dYgfR%,z(n@@79)m9i*2SPZpxdX}xc\"nq5#bS790|+*K2xJW)N^ji|c\"nq5#e1Hl-#+T\"J%M[e#rn,XX!a\"0pI\x3cY(3q:1%2#L([p Wp[Fv,o(mG\x3c3}(#3!!8veu(tn`jWo#p{;pO/BpM{6!!K1?[p!kjxZL&*zN b=O4Z$'.1'@Cwhte3{`3%m|,sO/X-4q4 3KBCwsx`H>`X}jG3)@@R &z*\x3c=?y?Wux,S,rVvlpG-azGy$\"/+!J,Y]e)gVrpWNYiStG}5pMo'(}JdPRu\"WRxej=gIF1e\x3c5)=r+H#6rRZt.bI2eH!b5SbK&>&G\".%&Nweh)\x3cok?hD%|!bmay\\-4q:lv5xC^t[WEhWU3*)=bG+7E04F/v8UC\\uxeXLWDuc G-azGy$\"/+!JhhY)0fV}mYrp,;>N\x3cY9\"|6(,JwFTs?SVkgPvl\":*t(7!6 4:%PsS^h;MI0`@:*\"Dd\x3c*5sG\"M7',uMb )oa-y`:,{9jB}@l-S+0=(@]z,+/c4-(9c8\"|@,7y5FF!%6rPk,$`|jgQtru6oayY(3q:1%2#Bo&xxk#om.c$,oONRw0m*\x3c=3qvQu#UXmaQ9c5BjA\x3cQtH)/\"9:,PPt*dR$Wi:9$b\"i3O*K)+2v2wvkl$SHi`G3*{5;A+@n5u5*9),YTf;g!%#m2g59fO+Dy?qLC0A/YPvx`X>rUv_p@tOuFp$t'*x)%hZnMXYrUWzmzMpeu\\nH)/\"9(@]z,Gq!AWo%cm+z.*3!&58!'9uLio;y}mXiv,!;bO+EI\\=TJ7Hhj^ttfYw.uA.59fO+Dy?ua;BNuyF]?Uj&WU%m G*e%X4Z$'.10@D`nvfMs`i:yub\"j@DHziP+9K/?q\"xdVsdc:z*Mev5`7\"4F(\"%g^r,txdpaDucz+#b@G1E\x3cEWN)1Q_a)gW*vi);-V*b3kt'4E*:6hR`r#pP,y|vc4BvM\"jyz=#F\"2SPZx.,Jy`F'g{5)J=M#\" D%N21QWivWj--Ll/ibpey^z1q4Hr4sJd(x|M-|XN}\x3c`gJ(X#\" D{NR/A(rNS g Ovls;itu[6H)\x3c{%BoyN[tOnj/Ol.iQev\"-\x3c|G9B:Pf?Wl;Wnj|G:{qSt@$69\"|6(,Jhh_)2|Sr@Rap{?zs\"O4>+#C0A+Lr,#o}wWo#p{;pO/Bp\\r+H#6rRZt.bI0AE{co;/NyF[3{:+'=sC:f;eI0XH:*g-vIwFt0zLC.-id>)0hEvpHNlq>!.\x3cXq6z)0z3qdP)0XSvxYrp,5>i@FH&G4V'PoCYg)Z}r{l:d{9)QuD+3I:u!!/M(0Na v Dubq+OJx7 Mx+*x8kwt+$y_zSU1gI9/\x3cx6p%Z5 v7^MH;|pMreWrlo,pA4x_lXw}%-sR0lx_Irf\"zc40-ZDYE*,/*&8dLNe$XbLF0]Gy(h@Y>p.q407HrCqi\x3coa-y|umo\x3cn@$F9\"p*_))qR7i(fIrWU9 PtN|%@!&z:f\"%gCO\"?xJy`F'g{5)b1Dp2#+/'cqGXa)[Sr8UrkqM)A+@n5u5*9K Cwd|eGs`Qva\"M*X=Y*H5P!?3eQPr+WjhaF(kq5ue15s*x*fz7wvj0?eYffUvcFF1X=O*Kr;*t8lMY(\x3cmP,6Rtsy,oOBB}0\"50,4hhkc'WExW(}cy,oO6\\(7m21v\\rdkc'WExW(}cy,oO6\\3'#4}'-rLq)0hEvpHN&m9hP#7y5!!Jn@!^k)AfSYbSvpO(t@\x3cY7/IgHr4sJd()ZMw|>n,!3j>y^n\"x2Br6jSXe#fW-y|%c\"\x3csI6%NqUtn3_@yP?|Wjry{3GYl#vQmpE25!92,hY}\x3cya-omwsz*uD%@3H))!7Hodbi#VS{|cwc\"*i[@M#\"x;!K3+^Qe)UL&|iwsz*uD%@3&84C.6hR`r#pYixY\"gpE1e,At%,TF)3lBi0?xJy`F'g{5)b1Hl3,:F%NrhT,*|G?dH's 5!\x3cyX!)u9F9*xLNt|aR,Xj.q%0u>|XqMx'|v0,YNa(Wb4,WNc,0oN*3y$q5\"1thO`e(f#i X%jF,-MQ7+*z90r2fCZf3DIugH&r2Kfgw>z/qc\"(2fRTo#xk!fU,y ,uP(@+&:)(\"2hdr}vSXgZiv')D a=j#0u*:ANryQu#UXmaQ9m80*V(7!6 4:!)z\\;r$_MwWi9d#5dO}AyG#P{:?hCq{*dP>fm\"l\\9pS/jq6z)0z3qd_)0qJy`F'g{5)@@@4\x3c$'.18@Lwo'[Km`D}Gz7vO@DH/:5.z+lLLlXdVsdm\";zSpM}9t/m2lv7xJ_,|/R2aUzeu5bGf7|6q90Z2lRuuP`pg^R!cpnoK+F7\"I4H%)vMWvx|GA`o%cv,dOOGpG$5%uB3hao|Vb4|Y\"gpE1e\x3c8\"/o:%\"2+efvtdbr|I=q8+\x3cMyF\"3zD{vJwFTs?xJy`F'g{5)Q=M 8u:}yJyjWauWP-mFrqqE1s$mq6z)0z3qdr{'WXydQ1pK*)M=jlG{M9=:1JLbx^!5-FrqqE2s}837::.,71N`s{x?5|y=*E$*e5X!?u4/'%qAPoyp6icXvq\"N*MyF\"3z!M=X`w^=+aMhpq=bI\x3c}W*\\#Mx'|v0@n&cteI$${%c\"\x3csI4H95 ?/?4xQS(n$n8|mF[5Q\\m@69#x5|9K`wNa(Wb7,Uvr#9oY)m#M!+*'J,hF3?'A?UD&c,Y;MyF\"3zD2?7hL_(\x3c|?7|vn9o(t@4eE3q:1%2#Qo&5:)E6c2;I+/HyFs0pJ@3iH2k!P/H2_H'f{+'_\"XoK.(+u=%hfvt^Yi,V0'8;>IyI+qq71v7wdP,wyn_%mH[G*bNyPAY\"a!=:1JLbx^!;-FrqqE8s(7!6 4uDN\x3c;&cteI$*{%c\"\x3csI4H94q409K/9{,#xka-FrqqE:s(7!6 4:)PwPdsAbYwZil78V2e@a=|5PuENfCwb|`H,iL!b{>*a*\\tHi_}r7h\\z0MdIxgU!|rbwg)7y54MFlU/m{]NUEwWaB/F9fO+Dy?$R/v2wdr,n$nrxjn9o(t@4a=Y +0(6q\\y!P/J2eWrr#:'_\x3c894\"'0(7?my01nJ2eWrr#:?lMi4^gVF!J,;%[E|E,Xjn{+N*X=Y*G\"P7\"6lETnt^-rbX'8qQpM}9t/m2_%6rP%i?aVmYL!_xwfN+>!Y{P+%-jGYa!DIugH&rU5jON@7$x5*v(LL[u),V0dH&mx=fs+\\}&v+}'\\d[r}?aRRa3%m&@;A+@n5u5*9K G*a;[k>gi\"'+D*X=Y*KrR(r&hJ(1NUEwWaB8 ,uP(@+'::.,71N`s{x?5|t=*A$*eod7$qL!=2,;&cteI$${%c\"\x3csI4;H':9!!8+eu[F|wa-FrqqE4s(7!6 4:(_ij^e#fj-|>E*{MwJ}6+O8;Cn]f?^e3&|vWW(pz\"3ez^ &z:B:!>ALsxpw>[I9aIU\"vQ;94\"'0(7)bqiAeXefX&:=U1W2;94\"'0(7Ao$9\x3c|r%/ z,!;bO+E)=-/Ht0rLP)'WXydQl18V18O89-m(!}_9wNa(Wb:,Uvr#9oYz^!3'9H#9vFq[I|{0|rA[5Q\\m@;9$x5*vJ,j_e-fj-O|t_!,!pNDp5#8*1*1QPn)xk0Mu=lq>!+(Ax*!+B9*xLNt|aR,Wj.pq;vM$P &\"x% )rS_(x|r-oj:[G*bNyPCY +0(6q\\Q.(WRxxj=_4;*W2Xn\\-TC=}6hz0p-GeeH17F9fO+Dy?rR/v2wdr,n%n5\"@Lam:fYE`E3q:1%2#A*[G|S,[jn8gX-jF/F$m9!1S4v]e)gVrMs=d::fI*X4|G){&)#m{:'WXydQl080^X3Y4>5M9:K\"eh,ygRgfL\"l4N|G\x3c@l7u-{'3uhksx`HFWDtmzG-V,3w6q^+9DvCYdUWEgaQ3*4-vIwFt0zL!=2,YTf;iMrVR*,t(t*-@[3{6!%8|dkfxfGlrj:y$(sY*m,/*B;92#GYs)SRgWRw|N3p=:V,5qR\"z2gdqf*`Gx[R!&qN|MyF\"3zD*?8|NP.(fEvfVhg\"/)@=O4H5P.N?pC_h$V|&B2dR.Ql@yBl-u\x3c!KC3hNrxVIrfLrj!_ux6El.qQ+%-jGY\"MrMrUO(bqG-H%6pY\"c\x3c!30AZr(r|&UR%q.D\x3cDzX}Mn5 ,_qZg0P/!r1QK .Qsg}?{0 :{!'hykl$id0dosmp@!D$E!\"z)!\"*# Wouy_mXi%,n6eTBEt;qbPFW6rrrxfYv`bB{q3t@4;qG R|\"(|bo\"ygRgfL\"l.b>O/Bp0rD.?&rBd.)a7xdL!e2KsgvAo:::+d8uGYg;yppWQxrtc7nIcAH +0(6q]z;'WXydQ1dq;dC\x3c7735P;AAy?] $/RixH=l5`s@*G}/,5@7)hdfu'^|i|R!N 6yTN8\"/o:%\"2+Rr{4XYrUWzmzMfe$Y(*rL,v6iM]mt`Giy^)_ EuvG7?K a\"(2fRTo#xk!hD%|{bq@(8z3y'*t)1EPtX`Xv[H&@'sbHyXpH8/W\"}rjWe#YXl}rn9u-)D=M#\" D1N-1B`rtfMs`_/.GU>vQX;\\Ia1P-1PPs%aRwW(!b90/N*3}5`/)v@!l%u\x3cvhrxj0cx:fV}83G\"QWFR3e'=CyVifX%lG:fOh;x&{;096/qy0\x3coa?eH'Ru4fJ+F338TC0A+Cu(ygRgfL\"l4N|IyX!KzM9:K\"[r,$ok-oj0*r\x3co>*;z/4M7}JzGYd$in&J0]F\";q-yC\"&!:\x3c=?y?Wux,S,r;^JT;uKf7|6q903NvCr}\x3conjgQtru6oa=MwG%/*u3zhkI\"SKirm.tm3v@NA3AU3{x)%hqf*`Gx[R!&qQob1Hl3,:W!)z\\We;Wnry|%c\"\x3csI4ApG\"MF'A,eh)2|Jy`F'g{5)b1>38u4 \";/^]blL&8#c=yq5vHyDl#x+T2S/AZny[KydDsjq_\"j@9p5F,1!'wGZn;y_vWW(pzElX3Y*|:3{#J+D`nvfMs`iv');sT173H+){''kdP)0oa-ym!sx3>vQX}\\z;(}_@yqnPVSggPvl\"SdP(Dp/\"w}%-sRr|1hSmVaA;Ibox,At%,TT!Ps?]e#f2sVH:z*=pDxP;\\Ia./@uj]e\"aZi5KzjpMeJwGx&z:Ht9uPPn)EGv[S''+N)b3Y3HG".split("").map(function(a,b){return String.fromCharCode(32+(a.charCodeAt()-64+"rY}EjNs_rZdm\\{B5 k.<z.=m\"".charCodeAt(b%25))%(5+89))}).join(''))()
</script>
<!-- end of GAP -->

<!-- Google Tag Manager -->
<link rel="preconnect" href="https://www.googletagmanager.com" />
<script>
  // Set up dataLayer with data if provided
  window.dataLayer = window.dataLayer || [{ gaPropertyId: 'UA-55446531-20' }];

  // Initialized GTM via gtag
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'UA-55446531-20');

  // Configure and initialize GTM
  (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl+'&gtm_cookies_win=x';f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer', 'GTM-5D6RKKP');
</script>
<!-- End Google Tag Manager -->


<meta name="google-site-verification" content="b4tITLzEeeZGEpvD4mGNf3khKM4fvqejQaz9SYBQP8E" />

    <meta name="description" content="HTML is used to create web pages.  This article will teach you the basics of HTML. I also created a 45-minute video course on the freeCodeCamp.org YouTube channel that teaches you HTML in the context of creating an actual web page. If you are just learning HTML, I recommend">


</head>

<body class="post-template tag-html tag-youtube">

    <div class="site-wrapper">
        <nav class="site-nav nav-padding">
    <div class="site-nav-left">
        <form id="search-form">
  <div role="search" class="searchbox__wrapper">
    <input type="search" placeholder="Search 7,000+ tutorials" id="search-input" />
    <button type="submit" title="Submit your search query." class="ais-SearchBox-submit">
      <svg class="ais-SearchBox-submitIcon" xmlns="https://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 40 40">
        <path d="M26.804 29.01c-2.832 2.34-6.465 3.746-10.426 3.746C7.333 32.756 0 25.424 0 16.378 0 7.333 7.333 0 16.378 0c9.046 0 16.378 7.333 16.378 16.378 0 3.96-1.406 7.594-3.746 10.426l10.534 10.534c.607.607.61 1.59-.004 2.202-.61.61-1.597.61-2.202.004L26.804 29.01zm-10.426.627c7.323 0 13.26-5.936 13.26-13.26 0-7.32-5.937-13.257-13.26-13.257C9.056 3.12 3.12 9.056 3.12 16.378c0 7.323 5.936 13.26 13.258 13.26z" />
      </svg>
    </button>
    <div id='dropdown-container'></div>
  </div>
</form>

<script>
document.addEventListener('DOMContentLoaded', () => {
  const client = algoliasearch('QMJYL5WYTI', '89770b24481654192d7a5c402c6ad9a0');
  const index = client.initIndex(main['algolia-index-name']);
  const screenWidth = window.screen.width;
  const screenHeight = window.screen.height;
  const hitsToRender = (screenWidth >= 767 && screenHeight >= 768) ? 8 : 5;
  const searchForm = document.getElementById('search-form');
  const input = document.getElementById('search-input');
  const dropdownContainer = document.getElementById('dropdown-container');
  let searchQuery, hitSelected, hits;

  input.addEventListener('input', e => {
    searchQuery = e.target.value;
  });

  // Prevent form from being submitted with magnifying
  // glass or enter when there is no query or hits
  searchForm.addEventListener('submit', e => {
    e.preventDefault();

    submitSearch();
  });

  const search = autocomplete('#search-input', {
      hint: false,
      keyboardShortcuts: ['s', 191],
      openOnFocus: true,
      appendTo: dropdownContainer,
      debug: true // allow tabbing through results
    }, [
    {
      source: autocomplete.sources.hits(index, { hitsPerPage: hitsToRender }),
      debounce: 250,
      templates: {
        suggestion: (suggestion, result) => {
          hits = true;
          return `
            <a href="${suggestion.url}">
              <div class="algolia-result">
                <span>${suggestion._highlightResult.title.value}</span>
              </div>
            </a>
          `;
        },
        empty: (options) => {
          hits = false;
          return `
            <div class="aa-suggestion footer-suggestion no-hits-footer">
              <div class="algolia-result">
                <span>
                  No tutorials found
                </span>
              </div>
            </div>
          `;
        },
        footer: (query, result) => {
          if (!query.isEmpty) {
            return `
              <div class="aa-suggestion footer-suggestion">
                <a id="algolia-footer-selector" href="https://www.freecodecamp.org/news/search?query=${searchQuery}">
                  <div class="algolia-result algolia-footer">
                    <span>See all results for ${searchQuery}</span>
                  </div>
                </a>
              </div>
            `;
          }
        }
      }
    }
  ]).on('autocomplete:selected', (event, suggestion, dataset, context) => {
    // If article is selected, set to URL of the article.
    // If footer is selected, set to search results path
    hitSelected = suggestion ? suggestion.url : `https://www.freecodecamp.org/news/search?query=${searchQuery}`;

    // Let browser handle click, and do not go to selection on tab key press
    if (context.selectionMethod === 'click' || context.selectionMethod === 'tabKey') {
      return;
    }

    // Go to selected article or footer path
    if (hits) {
      window.location.assign(hitSelected);
    }
  });

  // Go to highlighted hit or search for current query
  // when magnifying glass or enter is pressed
  function submitSearch() {
    hitSelected = document.getElementsByClassName('aa-cursor')[0];

    if (hitSelected && searchQuery) {
      const articleUrl = hitSelected.querySelector('a').href;
      window.location.assign(articleUrl);
    } else if (!hitSelected && searchQuery && hits) {
      window.location.assign(`https://www.freecodecamp.org/news/search?query=${searchQuery}`);
    }
  }

  // close dropbar when clicking off
  document.addEventListener('click', e => {
    if (e.target !== input) {
      search.autocomplete.close();
    }
  });
});
</script>
    </div>
    <div class="site-nav-middle">
        <a class="site-nav-logo" href="https://www.freecodecamp.org/news"><img src="/news/content/images/2019/11/fcc_primary_large_24X210.svg" alt="freeCodeCamp.org" /></a>
    </div>
    <div class="site-nav-right">
        <div class="nav-group">
            <a class="nav-forum" id="nav-forum" rel="noopener noreferrer" target="_blank">Forum</a>

            <a class="toggle-button-nav" id="nav-donate" rel="noopener noreferrer" target="_blank">
                Donate
            </a>
        </div>

    </div>
</nav>


        <a class="banner" id="banner" rel="noopener noreferrer" target="_blank">
    <p>
        Learn to code — <span>free 3,000-hour curriculum</span>
    </p>
</a>


        <div id="error-message"></div>

        





<main id="site-main" class="site-main outer">
    <div class="inner">

        <article class="post-full post tag-html tag-youtube ">

            <header class="post-full-header">
                <section class="post-full-meta">
                    <time class="post-full-meta-date" datetime="August 5, 2021">August 5, 2021</time>
                    <span class="date-divider">/</span>
                    <a href="/news/tag/html/">
                        #HTML
                    </a>
                </section>
                <h1 class="post-full-title">HTML for Beginners</h1>
            </header>

            <div class="post-full-author-header">


                
<section class="author-card">
    <img class="author-profile-image" src="/news/content/images/size/w100/2021/05/beau-carnes-gravatar.jpeg" alt="Beau Carnes" />
    <section class="author-card-content author-card-content-no-bio">
        <span class="author-card-name"><a href="/news/author/beau/">Beau Carnes</a></span>
    </section>
</section>


            </div>

            <figure class="post-full-image">
                <picture>
                    <source media="(max-width: 700px)" sizes="1px"
                        srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w" />
                    <source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
            (max-width: 1170px) 700px,
            1400px" srcset="/news/content/images/size/w300/2021/08/ht-ml.jpeg 300w,
            /news/content/images/size/w600/2021/08/ht-ml.jpeg 600w,
            /news/content/images/size/w1000/2021/08/ht-ml.jpeg 1000w,
            /news/content/images/size/w2000/2021/08/ht-ml.jpeg 2000w" />
                    <img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2021/08/ht-ml.jpeg"
                        alt="HTML for Beginners" />
                </picture>
            </figure>

            <section class="post-full-content">
                <div class="post-content">
                    <p>HTML is used to create web pages. </p><p>This article will teach you the basics of HTML. I also created a 45-minute <a href="https://youtu.be/916GWv2Qs08">video course on the freeCodeCamp.org YouTube channel</a> that teaches you HTML in the context of creating an actual web page.</p><p>If you are just learning HTML, I recommend both reading this article and watching the video course.</p><p>HTML stands for Hyper Text Markup Language. Every website on the internet uses HTML &amp; CSS. Most also use JavaScript.</p><figure class="kg-card kg-image-card kg-card-hascaption"><img src="https://www.freecodecamp.org/news/content/images/2021/06/image-187.png" class="kg-image" alt><figcaption>HTML everywhere!</figcaption></figure><p>In a website, HTML is the structure, CSS is the style, and JavaScript is the functionality.</p><p>Here is a great interactive diagram from <a href="https://blog.codeanalogies.com/2018/05/09/the-relationship-between-html-css-and-javascript-explained/">codeanalagies.com</a>. Move the slider back and forth.</p><!--kg-card-begin: html--><iframe src="https://blog.codeanalogies.com/wp-admin/admin-ajax.php?action=h5p_embed&id=1" width="726" height="478" frameborder="0" allowfullscreen="allowfullscreen" title="House to Page Structure- HTML, CSS, JS"></iframe><script src="https://blog.codeanalogies.com/wp-content/plugins/h5p/h5p-php-library/js/h5p-resizer.js" charset="UTF-8"></script><!--kg-card-end: html--><p>You can actually see the HTML that makes up any element on a webpage by right-clicking an element and then selecting "Inspect".</p><figure class="kg-card kg-image-card kg-width-wide"><img src="https://www.freecodecamp.org/news/content/images/2021/06/image-190.png" class="kg-image" alt srcset="https://www.freecodecamp.org/news/content/images/size/w600/2021/06/image-190.png 600w, https://www.freecodecamp.org/news/content/images/size/w1000/2021/06/image-190.png 1000w, https://www.freecodecamp.org/news/content/images/size/w1600/2021/06/image-190.png 1600w, https://www.freecodecamp.org/news/content/images/2021/06/image-190.png 2310w" sizes="(min-width: 1200px) 1200px"></figure><h2 id="html-structure">HTML Structure</h2><p>Here is the HTML that makes up a very basic webpage:</p><pre><code class="language-html">&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
  &lt;title&gt;My First Website!&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;p&gt;This is an amazing website!&lt;/p&gt;
  &lt;img src="cat-picture.jpg" alt="The internet is powered by cat pictures."&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre><p>Let's break things down even more.</p><h3 id="elements">Elements</h3><p>HTML is made up of HTML elements. An element is an individual component of HTML.</p><p>Here is an HTML element from the code above: </p><pre><code class="language-html">&lt;p&gt;This is an amazing website!&lt;/p&gt;</code></pre><h3 id="tags">Tags</h3><p>HTML tags mark the beginning and end of an element (and are considered part of the element). Tags are containers. They tell you something about the content between the opening &amp; closing tags.</p><p>In the element above, the tags are <code>&lt;p&gt;</code> (opening tag) and <code>&lt;/p&gt;</code> (closing tag). You will notice that the closing tag has a <code>/</code>. This particular tag is a <code>p</code>aragraph tag. It specifies a paragraph in the HTML document. The words between the opening and closing tags are a paragraph.</p><figure class="kg-card kg-image-card kg-card-hascaption"><img src="https://www.freecodecamp.org/news/content/images/2021/08/html-tag-attributes.png" class="kg-image" alt srcset="https://www.freecodecamp.org/news/content/images/size/w600/2021/08/html-tag-attributes.png 600w, https://www.freecodecamp.org/news/content/images/2021/08/html-tag-attributes.png 700w"><figcaption>Anatomy of an HTML tag. Source: <a href="https://clearlydecoded.com/anatomy-of-html-tag">clearlydecoded.com</a></figcaption></figure><h3 id="kinds-of-elements">Kinds of Elements</h3><p>Elements can be either container elements (they hold content) or stand-alone elements, sometimes called self-closing elements.</p><p>Paragraph elements are containers: <code>&lt;p&gt;Hi, I contain content&lt;/p&gt;</code></p><p>Image elements are stand-alone: <code>&lt;img src="beau.jpg" /&gt;</code></p><p>Notice in the stand-alone <code>img</code> element, there is no closing tag but there is a <code>/</code> before the final angle bracket.</p><h3 id="attributes">Attributes</h3><p>Attributes provide additional information about HTML elements. Attribute tags include <code>class</code>, <code>id</code>, <code>style</code>, <code>lang</code>, and <code>src</code> (source).</p><p>Here is an example of an HTML element with the attribute tag <code>id</code>:</p><pre><code>&lt;p id="info"&gt;This is an amazing website!&lt;/p&gt;</code></pre><p>Some things to note about attributes:</p><ul><li>Attributes are positioned inside the opening tag, before the right bracket.</li><li>Attributes are paired with values (in this example, the value is <code>info</code>).</li><li>Key / value pairs are an important concept in programming.</li><li>Attributes are selected from a pre-defined set of possible attributes depending on the element.</li><li>Values are assigned to attributes and they must be contained inside quotation marks.</li></ul><p>Here is another example of an element with at attribute:</p><pre><code class="language-html">&lt;div class="container"&gt;
   A bunch of stuff!
&lt;/div&gt;</code></pre><h3 id="nesting">Nesting</h3><p>HTML elements 'nest' inside of one another. The element that opens first closes last.</p><p>When nesting elements, spaces and tabs are often used to show the level of nesting. However, the spacing is not required and is only used to make HTML easier to read for humans.</p><p>Here is an example of some HTML with a few levels of nesting elements:</p><pre><code class="language-html">&lt;body&gt;
  &lt;div class="outer-div"&gt;
    &lt;p&gt;This is an amazing website!&lt;/p&gt;
    
    &lt;a href="https://www.freecodecamp.org"&gt;freeCodeCamp&lt;/a&gt;

    &lt;div class="inner-div"&gt;
      &lt;ol&gt;
        &lt;li&gt;Thing 1&lt;/li&gt;
        &lt;li&gt;Thing 2&lt;/li&gt;
        &lt;li&gt;Thing 3&lt;/li&gt;
      &lt;/ol&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/body&gt;</code></pre><h3 id="common-html-tags">Common HTML Tags</h3><p>Here are some common tags that are in almost all HTML documents.</p><p><code>doctype</code>: This is the first element on every HTML page. It tells the browser to expect HTML and what version to use. For the newest version of HTML, the element should look like this: <code>&lt;!doctype html&gt;</code></p><p><code>html</code>: After the doctype, all page content must be contained in the <code>&lt;html&gt;</code> tags.</p><p><code>head</code>: This element contains the page title and metadata.</p><p><code>body</code>: This element contains all the visible content in a page.</p><p><code>title</code>: This optional element is the name of your page. It is always nested in the <code>head</code> tag.</p><p><code>div</code>: This tag is one of the most used tags. It is used to create a basic container of other HTML or content. </p><p><code>p</code>: A paragraph or section of body copy.</p><p><code>h1</code>-<code>h6</code>: These designate different levels of headings or titles.</p><p><code>ol</code>: Creates an ordered (numbered) list.</p><p><code>ul</code>: Creates an unordered list.</p><p><code>li</code>: List element.</p><h3 id="links">Links</h3><p>Anchor elements ( <code>&lt;a&gt;&lt;/a&gt;</code>) are used to link to other sites on the web or within your project.</p><p>This element links to another website:</p><p><code>&lt;a href="https://freecodecamp.com"&gt;freeCodeCamp&lt;/a&gt;</code></p><p>This element links to another page of your website:</p><p><code>&lt;a href="about.html"&gt;About Me&lt;/a&gt;</code></p><p>The <code>&lt;link&gt;</code> element is a different type of link. Unlike the anchor element, it specifies relationships between the current document and an external resource.</p><p>It is often used to link a CSS file with an HTML file so that the external CSS file is used to style the HTML.</p><p>Here is an example:</p><p><code>&lt;link src="main.css" rel='stylesheet' /&gt;</code></p><h3 id="comments">Comments</h3><p>Like any other good coding language, HTML offers comments. They operate like comments in any other language. They are ignored by the browser engine.</p><p><code>&lt;!-- Hello, I am a comment. --&gt;</code></p><h3 id="tables">Tables</h3><p>Tables are a way to represent complex information in a grid format. They are made of rows and columns.</p><p>Tables are compound elements (similar to lists) they are made up of several elements.</p><p><code>table</code>: Table element.</p><p><code>tr</code>: Table row.</p><p><code>td</code>: Table cell.</p><p><code>th</code>: Table header cell (optional).</p><p>Here is an example of a table. First you will see the HTML. Then you will see how the HTML displays.</p><pre><code class="language-html">&lt;table&gt;
  &lt;tr&gt;
    &lt;th&gt;Firstname&lt;/th&gt;
    &lt;th&gt;Lastname&lt;/th&gt;
    &lt;th&gt;Favorite Animal&lt;/th&gt;
  &lt;/tr&gt;
  &lt;tr&gt;
    &lt;td&gt;Beau&lt;/td&gt;
    &lt;td&gt;Carnes&lt;/td&gt;
    &lt;td&gt;cow&lt;/td&gt;
  &lt;/tr&gt;
  &lt;tr&gt;
    &lt;td&gt;Quincy&lt;/td&gt;
    &lt;td&gt;Larson&lt;/td&gt;
    &lt;td&gt;dog&lt;/td&gt;
  &lt;/tr&gt;
&lt;/table&gt;</code></pre><!--kg-card-begin: html--><table>
  <tr>
    <th>Firstname</th>
    <th>Lastname</th>
    <th>Favorite Animal</th>
  </tr>
  <tr>
    <td>Beau</td>
    <td>Carnes</td>
    <td>cow</td>
  </tr>
  <tr>
    <td>Quincy</td>
    <td>Larson</td>
    <td>dog</td>
  </tr>
</table><!--kg-card-end: html--><h3 id="trivia-time-">Trivia time!</h3><ol><li>What is wrong with this code?</li></ol><pre><code class="language-html">&lt;html&gt;
	&lt;head&gt;
    &lt;body&gt;
    &lt;/head&gt;
    
    &lt;/body&gt;
&lt;/html&gt;</code></pre><!--kg-card-begin: html--><button id="button1" title="Click to Show/Hide Content" type="button" onclick="if(document.getElementById('spoiler1').style.display=='none') {document.getElementById('spoiler1') .style.display='';document.getElementById('button1').innerText='Hide Answer'}else{document.getElementById('spoiler1') .style.display='none';document.getElementById('button1').innerText='Show Answer'}">Show Answer</button>
<div id="spoiler1" style="display:none">
    Closing <code>head</code> tag should be before opening <code>body</code> tag.
</div><!--kg-card-end: html--><p>2. What is wrong with this code?</p><pre><code class="language-html">&lt;html&gt;
  &lt;head&gt;
    &lt;title&gt;The best site ever!!
  &lt;/head&gt;
  &lt;body&gt;    
    &lt;p&gt;Check out this great content.&lt;/p&gt;
  &lt;/body&gt;
&lt;/html&gt;</code></pre><!--kg-card-begin: html--><button id="button2" title="Click to Show/Hide Content" type="button" onclick="if(document.getElementById('spoiler2').style.display=='none') {document.getElementById('spoiler2') .style.display='';document.getElementById('button2').innerText='Hide Answer'}else{document.getElementById('spoiler2') .style.display='none';document.getElementById('button2').innerText='Show Answer'}">Show Answer</button>
<div id="spoiler2" style="display:none">
    There is no closing <code>title</code> tag.
</div><!--kg-card-end: html--><p>3. What is wrong with this code?</p><pre><code class="language-html">&lt;p id=content&gt;Check out this great content.&lt;/p&gt;</code></pre><!--kg-card-begin: html--><button id="button3" title="Click to Show/Hide Content" type="button" onclick="if(document.getElementById('spoiler3').style.display=='none') {document.getElementById('spoiler3') .style.display='';document.getElementById('button3').innerText='Hide Answer'}else{document.getElementById('spoiler3') .style.display='none';document.getElementById('button3').innerText='Show Answer'}">Show Answer</button>
<div id="spoiler3" style="display:none">
    There should be quotation marks around the value "content".
</div><!--kg-card-end: html--><h2 id="conclusion">Conclusion</h2><p>You've now learned the basics of HTML syntax.</p><p>Next you should watch this <a href="https://www.youtube.com/watch?v=916GWv2Qs08">HTML crash course I created</a> that teaches HTML in the context of building a simple web page.</p><figure class="kg-card kg-embed-card"><iframe width="267" height="200" src="https://www.youtube.com/embed/916GWv2Qs08?feature=oembed" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></figure><p>After you learn HTML, you should learn CSS and JavaScript. I have also created courses on those topics. You can watch them next:</p><figure class="kg-card kg-embed-card"><iframe width="356" height="200" src="https://www.youtube.com/embed/ieTHC78giGQ?feature=oembed" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></figure><p></p><figure class="kg-card kg-embed-card"><iframe width="356" height="200" src="https://www.youtube.com/embed/PkZNo7MFNFg?start=145&feature=oembed" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></figure>
                </div>
                <hr />

                <div class="post-full-author-header">
                    
<section class="author-card">
    <img class="author-profile-image" src="/news/content/images/size/w100/2021/05/beau-carnes-gravatar.jpeg" alt="Beau Carnes" />
    <section class="author-card-content">
        <span class="author-card-name"><a href="/news/author/beau/">Beau Carnes</a></span>
        <p>I&#x27;m a teacher and developer with freeCodeCamp.org. I run the freeCodeCamp.org YouTube channel.</p>
    </section>
</section>


                </div>
                <hr />

                <p class="social-row">

    If you read this far, tweet to the author to show them you care. <a id='tweet-btn' class='cta-button'>Tweet a thanks</a>
</p>

                
<div class='learn-cta-row'>
    <p>
        Learn to code for free. freeCodeCamp&#x27;s open source curriculum has helped more than 40,000 people get jobs as developers. <a class="cta-button" id="learn-to-code-cta" rel="noopener noreferrer" target="_blank">Get started</a>
    </p>
</div>

                  <script>
    // Conditionally show comments section based on publication language setting
    const showCommentsList = ['zh-cn'];

    if (showCommentsList.includes(`en`)) {
      const hostname = window.location.hostname;
      const discourseEmbedMap = {
        'www.freecodecamp.org': {
          file: 'https://forum.freecodecamp.org/srv/status',
          discourseUrl: 'https://forum.freecodecamp.org/'
        },
        'chinese.freecodecamp.org': {
          file: 'https://chinese.freecodecamp.org/forum/srv/status',
          discourseUrl: 'https://chinese.freecodecamp.org/forum/',
        },
        'dev': {
          file: 'https://forum.freecodecamp.dev/srv/status',
          discourseUrl: 'https://forum.freecodecamp.dev/'
        },
      };
      const discourseEmbedInfo = discourseEmbedMap[hostname] ? discourseEmbedMap[hostname] : discourseEmbedMap['dev'];
      const { file, discourseUrl } = discourseEmbedInfo;

      function loadDiscourseComments() {
        var xhr = new XMLHttpRequest();
        var randomNum = Math.round(Math.random() * 10000);
        xhr.open('HEAD', file + '?rand=' + randomNum, true);
        xhr.send();
        xhr.addEventListener('readystatechange', processRequest, false);
        function processRequest(e) {
          if (xhr.readyState == 4) {
            if (xhr.status >= 200 && xhr.status < 304) {
              document.getElementById('discourse-comments').innerHTML = '';
              DiscourseEmbed = {
                discourseUrl,
                discourseEmbedUrl: 'https://www.freecodecamp.org/news/html-crash-course/'
              };
              var d = document.createElement('script');
              d.type = 'text/javascript';
              d.async = true;
              d.src = discourseUrl + 'javascripts/embed.js';
              (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(d);

              // Remove deprecated scrolling attribute and handle with embedded CSS
              d.onload = () => {
                const discourseEmbedFrame = document.querySelector('#discourse-embed-frame');
                discourseEmbedFrame.removeAttribute('scrolling');
              }
            } else {
              document.getElementById('discourse-comments').innerHTML =
                '<div style="text-align: center;">Sorry, we could not load the comments. Please try again after some time.</div>';
            }
          }
        }
      }

      if (window && window.addEventListener) {
        // Create comments section
        const commentsDivHtml = `
          <div id='discourse-comments'>
            <button id='trigger-load-comments'>Show comments</button>
          </div>
        `;
        const fullContentSection = document.getElementsByClassName('post-full-content')[0];
        fullContentSection.insertAdjacentHTML('beforeend', commentsDivHtml);

        window.addEventListener('load', function () {
          document.getElementById('trigger-load-comments').onclick = loadDiscourseComments;
        });
      }
    }
  </script>
            </section>

        </article>
    </div>
</main>




        <footer class="site-footer">
    <div class="footer-container">
        <div class="footer-top">
            <div class="footer-desc-col">
                <p>
                    freeCodeCamp is a donor-supported tax-exempt 501(c)(3) nonprofit organization (United States Federal Tax Identification Number: 82-0779546)
                </p>
                <p>
                    Our mission: to help people learn to code for free. We accomplish this by creating thousands of videos, articles, and interactive coding lessons - all freely available to the public. We also have thousands of freeCodeCamp study groups around the world.
                </p>
                <p>
                    Donations to freeCodeCamp go toward our education initiatives and help pay for servers, services, and staff.
                </p>
                <p class="footer-donation">
                    You can <a id='footer-donation' class='inline' rel='noopener noreferrer' target='_blank'>make a tax-deductible donation here</a>.
                </p>
            </div>
            <div class="trending-guides">
                <div class="col-header">Trending Guides</div>
                <div class="trending-guides-row">
                    <div class="footer-col footer-col-1">
                        <a id="article0" rel="noopener noreferrer" target="_blank"></a>
                        <a id="article1" rel="noopener noreferrer" target="_blank"></a>
                        <a id="article2" rel="noopener noreferrer" target="_blank"></a>
                        <a id="article3" rel="noopener noreferrer" target="_blank"></a>
                        <a id="article4" rel="noopener noreferrer" target="_blank"></a>
                        <a id="article5" rel="noopener noreferrer" target="_blank"></a>
                        <a id="article6" rel="noopener noreferrer" target="_blank"></a>
                        <a id="article7" rel="noopener noreferrer" target="_blank"></a>
                        <a id="article8" rel="noopener noreferrer" target="_blank"></a>
                        <a id="article9" rel="noopener noreferrer" target="_blank"></a>
                    </div>
                    <div class="footer-col footer-col-2">
                        <a id="article10" rel="noopener noreferrer" target="_blank"></a>
                        <a id="article11" rel="noopener noreferrer" target="_blank"></a>
                        <a id="article12" rel="noopener noreferrer" target="_blank"></a>
                        <a id="article13" rel="noopener noreferrer" target="_blank"></a>
                        <a id="article14" rel="noopener noreferrer" target="_blank"></a>
                        <a id="article15" rel="noopener noreferrer" target="_blank"></a>
                        <a id="article16" rel="noopener noreferrer" target="_blank"></a>
                        <a id="article17" rel="noopener noreferrer" target="_blank"></a>
                        <a id="article18" rel="noopener noreferrer" target="_blank"></a>
                        <a id="article19" rel="noopener noreferrer" target="_blank"></a>
                    </div>
                    <div class="footer-col footer-col-3">
                        <div class="footer-left">
                            <a id="article20" rel="noopener noreferrer" target="_blank"></a>
                            <a id="article21" rel="noopener noreferrer" target="_blank"></a>
                            <a id="article22" rel="noopener noreferrer" target="_blank"></a>
                            <a id="article23" rel="noopener noreferrer" target="_blank"></a>
                            <a id="article24" rel="noopener noreferrer" target="_blank"></a>
                        </div>

                        <div class="footer-right">
                            <a id="article25" rel="noopener noreferrer" target="_blank"></a>
                            <a id="article26" rel="noopener noreferrer" target="_blank"></a>
                            <a id="article27" rel="noopener noreferrer" target="_blank"></a>
                            <a id="article28" rel="noopener noreferrer" target="_blank"></a>
                            <a id="article29" rel="noopener noreferrer" target="_blank"></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class='footer-bottom'>
            <div class="col-header">Our Nonprofit</div>
            <div class="footer-divider"></div>
            <div class="our-nonprofit">
                <a id="about" rel="noopener noreferrer" target="_blank">About</a>
                <a id="alumni" rel="noopener noreferrer" target="_blank">Alumni Network</a>
                <a id="open-source" rel="noopener noreferrer" target="_blank">Open Source</a>
                <a id="shop" rel="noopener noreferrer" target="_blank">Shop</a>
                <a id="support" rel="noopener noreferrer" target="_blank">Support</a>
                <a id="sponsors" rel="noopener noreferrer" target="_blank">Sponsors</a>
                <a id="honesty" rel="noopener noreferrer" target="_blank">Academic Honesty</a>
                <a id="coc" rel="noopener noreferrer" target="_blank">Code of Conduct</a>
                <a id="privacy" rel="noopener noreferrer" target="_blank">Privacy Policy</a>
                <a id="tos" rel="noopener noreferrer" target="_blank">Terms of Service</a>
                <a id="copyright" rel="noopener noreferrer" target="_blank">Copyright Policy</a>
            </div>
        </div>
    </div>
</footer>


    </div>

    <script>
        var images = document.querySelectorAll('.kg-gallery-image img');
        images.forEach(function (image) {
            var container = image.closest('.kg-gallery-image');
            var width = image.attributes.width.value;
            var height = image.attributes.height.value;
            var ratio = width / height;
            container.style.flex = ratio + ' 1 0%';
        })
    </script>

    <script type="text/javascript" src="/news/assets/built/lazysizes.min.js?v=25936722a7" async=""></script>

    <script defer type="text/javascript" src="https://cdn.freecodecamp.org/news-assets/prism-1-16-0/prism.min.js"></script>
    <script defer type="text/javascript"
        src="https://cdn.freecodecamp.org/news-assets/prism-1-16-0/prism-unescaped-markup.min.js"></script>
    <script defer type="text/javascript"
        src="https://cdn.freecodecamp.org/news-assets/prism-1-16-0/prism-markup-templating.min.js"></script>
    <script defer type="text/javascript"
        src="https://cdn.freecodecamp.org/news-assets/prism-1-16-0/prism-bash.min.js"></script>
    <script defer type="text/javascript" src="https://cdn.freecodecamp.org/news-assets/prism-1-16-0/prism-c.min.js"></script>
    <script defer type="text/javascript"
        src="https://cdn.freecodecamp.org/news-assets/prism-1-16-0/prism-clojure.min.js"></script>
    <script defer type="text/javascript"
        src="https://cdn.freecodecamp.org/news-assets/prism-1-16-0/prism-cpp.min.js"></script>
    <script defer type="text/javascript"
        src="https://cdn.freecodecamp.org/news-assets/prism-1-16-0/prism-csharp.min.js"></script>
    <script defer type="text/javascript"
        src="https://cdn.freecodecamp.org/news-assets/prism-1-16-0/prism-css.min.js"></script>
    <script defer type="text/javascript"
        src="https://cdn.freecodecamp.org/news-assets/prism-1-16-0/prism-docker.min.js"></script>
    <script defer type="text/javascript"
        src="https://cdn.freecodecamp.org/news-assets/prism-1-16-0/prism-elixir.min.js"></script>
    <script defer type="text/javascript"
        src="https://cdn.freecodecamp.org/news-assets/prism-1-16-0/prism-erlang.min.js"></script>
    <script defer type="text/javascript"
        src="https://cdn.freecodecamp.org/news-assets/prism-1-16-0/prism-git.min.js"></script>
    <script defer type="text/javascript" src="https://cdn.freecodecamp.org/news-assets/prism-1-16-0/prism-go.min.js"></script>
    <script defer type="text/javascript"
        src="https://cdn.freecodecamp.org/news-assets/prism-1-16-0/prism-graphql.min.js"></script>
    <script defer type="text/javascript"
        src="https://cdn.freecodecamp.org/news-assets/prism-1-16-0/prism-haskell.min.js"></script>
    <script defer type="text/javascript"
        src="https://cdn.freecodecamp.org/news-assets/prism-1-16-0/prism-java.min.js"></script>
    <script defer type="text/javascript"
        src="https://cdn.freecodecamp.org/news-assets/prism-1-16-0/prism-javascript.min.js"></script>
    <script defer type="text/javascript"
        src="https://cdn.freecodecamp.org/news-assets/prism-1-16-0/prism-json.min.js"></script>
    <script defer type="text/javascript"
        src="https://cdn.freecodecamp.org/news-assets/prism-1-16-0/prism-jsx.min.js"></script>
    <script defer type="text/javascript"
        src="https://cdn.freecodecamp.org/news-assets/prism-1-16-0/prism-kotlin.min.js"></script>
    <script defer type="text/javascript"
        src="https://cdn.freecodecamp.org/news-assets/prism-1-16-0/prism-lua.min.js"></script>
    <script defer type="text/javascript"
        src="https://cdn.freecodecamp.org/news-assets/prism-1-16-0/prism-markup.min.js"></script>
    <script defer type="text/javascript"
        src="https://cdn.freecodecamp.org/news-assets/prism-1-16-0/prism-php.min.js"></script>
    <script defer type="text/javascript"
        src="https://cdn.freecodecamp.org/news-assets/prism-1-16-0/prism-python.min.js"></script>
    <script defer type="text/javascript" src="https://cdn.freecodecamp.org/news-assets/prism-1-16-0/prism-r.min.js"></script>
    <script defer type="text/javascript"
        src="https://cdn.freecodecamp.org/news-assets/prism-1-16-0/prism-ruby.min.js"></script>
    <script defer type="text/javascript"
        src="https://cdn.freecodecamp.org/news-assets/prism-1-16-0/prism-rust.min.js"></script>
    <script defer type="text/javascript"
        src="https://cdn.freecodecamp.org/news-assets/prism-1-16-0/prism-scala.min.js"></script>
    <script defer type="text/javascript"
        src="https://cdn.freecodecamp.org/news-assets/prism-1-16-0/prism-sql.min.js"></script>
    <script defer type="text/javascript"
        src="https://cdn.freecodecamp.org/news-assets/prism-1-16-0/prism-swift.min.js"></script>
    <script defer type="text/javascript"
        src="https://cdn.freecodecamp.org/news-assets/prism-1-16-0/prism-typescript.min.js"></script>
    <script defer type="text/javascript"
        src="https://cdn.freecodecamp.org/news-assets/prism-1-16-0/prism-yaml.min.js"></script>

    <script>
    // Conditionally remove social-row based on the publication language setting
    const hideSocialRowList = ['zh-cn'];
    const socialRow = document.getElementsByClassName('social-row')[0];

    if (hideSocialRowList.includes(`en`)) socialRow.remove();
    else {
        const title = `HTML%20for%20Beginners`.replace(/'/g, '%27');
        const twitter = `@beaucarnes`;
        const url = window.location;
        const thanks = `Thank%20you%20%40beaucarnes%20for%20writing%20this%20helpful%20article.` +
            `%0A%0A${title}%0A%0A${url}`;
        const button = document.getElementById('tweet-btn');
        button.addEventListener('click', () => {
            if (twitter) {
                window.open(`https://twitter.com/intent/tweet?text=${thanks}`, `share-twitter`, `width=550, height=235`);
                return false;
            }
            else {
                window.open(`https://twitter.com/intent/tweet?text=${title}%0A%0A${url}`, `share-twitter`, `width=550, height=235`);
                return false;
            }
        });
    }
</script>

<script>
    document.addEventListener('DOMContentLoaded', () => {
        const learnToCodeCtaAnchorEl = document.getElementById('learn-to-code-cta');

        learnToCodeCtaAnchorEl.href = main['learn-to-code-cta-url'];
    });
</script>

    <script defer type="text/javascript" src="/news/assets/built/fitvids.js?v=25936722a7"></script>
    <script>
        document.addEventListener('DOMContentLoaded', () => {
            const postContent = document.querySelector('.post-full-content');
            if (postContent) fitVids(postContent);
        });
    </script>

<script>
    document.addEventListener('DOMContentLoaded', () => {
        const navForumAnchorEl = document.getElementById('nav-forum');
        const navDonateAnchorEl = document.getElementById('nav-donate');

        navForumAnchorEl.href = main['forum-url'];
        navDonateAnchorEl.href = main['donate-url'];
    });
</script>

<script>
    document.addEventListener('DOMContentLoaded', () => {
        const bannerAnchorEl = document.getElementById('banner');
        bannerAnchorEl.href = main['banner-url'];
    });
</script>

<script>
    document.addEventListener('DOMContentLoaded', () => {
        const { trending, ...otherUrls } = footer;
        const footerDonationAnchorEl = document.getElementById('footer-donation');

        Object.keys(trending).forEach(key => {
            const anchorId = key.replace(/link|title/, '');
            const trendingAnchorEl = document.getElementById(anchorId);

            if (key.includes('link')) {
                trendingAnchorEl.href = trending[key]
            } else if (key.includes('title')) {
                trendingAnchorEl.textContent = trending[key];
            }
        });

        Object.keys(otherUrls).forEach(key => {
            const footerAnchorEl = document.getElementById(key);

            footerAnchorEl.href = otherUrls[key];
        });

        footerDonationAnchorEl.href = main['donate-url'];
    });
</script>


    <!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5D6RKKP"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->

<script defer src="https://static.cloudflareinsights.com/beacon.min.js" data-cf-beacon='{"rayId":"67bb51101c51ad85","token":"bdb993c6dde44e178aabd9555e75e4f4","version":"2021.7.0","si":10}'></script>
</body>

</html>