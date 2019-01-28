(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{145:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return p}),a.d(t,"StaticQueryContext",function(){return u}),a.d(t,"StaticQuery",function(){return f});var n=a(0),r=a.n(n),c=a(4),l=a.n(c),i=a(144),o=a.n(i);a.d(t,"Link",function(){return o.a}),a.d(t,"withPrefix",function(){return i.withPrefix}),a.d(t,"navigate",function(){return i.navigate}),a.d(t,"push",function(){return i.push}),a.d(t,"replace",function(){return i.replace}),a.d(t,"navigateTo",function(){return i.navigateTo});var s=a(152),d=a.n(s);a.d(t,"PageRenderer",function(){return d.a});var m=a(48);a.d(t,"parsePath",function(){return m.a});var u=r.a.createContext({}),f=function(e){return r.a.createElement(u.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function p(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:l.a.object,query:l.a.string.isRequired,render:l.a.func,children:l.a.func}},152:function(e,t,a){var n;e.exports=(n=a(168))&&n.default||n},156:function(e,t,a){"use strict";var n=a(7),r=a.n(n),c=a(157),l=a(0),i=a.n(l),o=a(4),s=a.n(o),d=a(158),m=a.n(d),u=a(145),f=a(147),p=a(170),h=(a(171),a(146)),v=function(){return i.a.createElement("footer",{id:"footer",className:"footer"},i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"footer__contact row d-flex justify-content-between align-items-center"},i.a.createElement("div",{className:"footer__logo"},i.a.createElement("img",{src:Object(u.withPrefix)("images/logo.png"),alt:"Squaredev"})),i.a.createElement("div",{className:"footer__address col-sm-12 col-md-6"},i.a.createElement("h5",{className:"pb-15"},"Get in touch with us"),i.a.createElement("div",{className:"d-flex pt-15 justify-content-center justify-content-md-end"},i.a.createElement("div",{className:"footer__address__icon"},i.a.createElement(f.a,{icon:h.b})),i.a.createElement("div",{className:"pl-md-3"},i.a.createElement("div",{className:"pb-1"},"Rue Chair et Pain 3"),i.a.createElement("div",{className:"pb-1"},"1000 Bruselles"),i.a.createElement("div",{className:"pb-1"},"Belgium"))),i.a.createElement("div",{className:"d-flex pt-15 justify-content-center justify-content-md-end"},i.a.createElement("div",{className:"footer__address__icon"},i.a.createElement(f.a,{icon:h.a})),i.a.createElement("div",{className:"pl-md-3"},"hello@thesquaredev.com")))),i.a.createElement("div",{className:"row d-flex justify-content-between align-items-center"},i.a.createElement("div",{className:"footer__text col-md-9 col-sm-12 footer-text order-1 order-md-0"},i.a.createElement("span",null,"Copyright © ",(new Date).getFullYear()," Squaredev, All rights reserved | Cookies | Policy"),i.a.createElement("span",null,"Illustrations by"," ",i.a.createElement("a",{href:"https://undraw.co/",target:"_blank"},"unDraw")," | Icons by ",i.a.createElement("a",{href:"https://www.freepik.com/",target:"_blank"},"Freepik"))),i.a.createElement("div",{className:"col-md-3 col-sm-12 footer__social"},i.a.createElement("a",{href:"https://twitter.com/thesquaredev",target:"_blank"},i.a.createElement(f.a,{icon:p.c})),i.a.createElement("a",{href:"https://www.linkedin.com/company/thesquaredev/",target:"_blank"},i.a.createElement(f.a,{icon:p.b})),i.a.createElement("a",{href:"https://github.com/thesquaredev",target:"_blank"},i.a.createElement(f.a,{icon:p.a}))))))},E=(a(172),a(153)),g=a.n(E),y=function(e){var t=e.isScrolled;return i.a.createElement("header",{className:t?"header header-scrolled":"header"},i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"row align-items-center justify-content-between d-flex"},i.a.createElement("div",{className:"header__logo"},i.a.createElement(g.a,{href:"#banner1"},i.a.createElement("img",{src:Object(u.withPrefix)("images/logo.png"),alt:"Squaredev"}))),i.a.createElement("nav",{id:"nav-menu-container"},i.a.createElement("ul",{className:"nav-menu sf-arrows"},i.a.createElement("li",{className:"menu-active"},i.a.createElement(g.a,{href:"#banner1"},"Home")),i.a.createElement("li",null,i.a.createElement(g.a,{href:"#grid2"},"What we do")),i.a.createElement("li",null,i.a.createElement(g.a,{href:"#imageText3"},"Our Vision")),i.a.createElement("li",null,i.a.createElement(g.a,{href:"#imageText4"},"Open Source")))))))},w=(a(173),function(e){function t(t){var a;return(a=e.call(this,t)||this).state={isScrolled:!1},a}r()(t,e);var a=t.prototype;return a.componentDidMount=function(){var e=this;document.addEventListener("scroll",function(){var t=window.scrollY>10;t!==e.state.isScrolled&&e.setState({isScrolled:t})})},a.render=function(){var e=this;return i.a.createElement(u.StaticQuery,{query:"1044757290",render:function(t){return i.a.createElement(i.a.Fragment,null,i.a.createElement(m.a,{title:t.site.siteMetadata.title,meta:[{name:"description",content:"Squaredev website"},{name:"keywords",content:"Squaredev, Software Development, Data Analytics, Data Visualisations"}]},i.a.createElement("html",{lang:"en"}),i.a.createElement("script",{async:!0,src:"https://cdn.polyfill.io/v2/polyfill.js?features=IntersectionObserver"})),i.a.createElement(y,{isScrolled:e.state.isScrolled}),e.props.children,i.a.createElement(v,null),i.a.createElement("div",{id:"mobile-body-overly",style:{display:"none"}}))},data:c})},t}(i.a.Component));w.propTypes={children:s.a.node.isRequired};t.a=w},157:function(e){e.exports={data:{site:{siteMetadata:{title:"Squaredev"}}}}},168:function(e,t,a){"use strict";a.r(t);a(32);var n=a(0),r=a.n(n),c=a(4),l=a.n(c),i=a(69),o=a(2),s=function(e){var t=e.location,a=o.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(i.a,Object.assign({location:t,pageResources:a},a.json))};s.propTypes={location:l.a.shape({pathname:l.a.string.isRequired}).isRequired},t.default=s},171:function(e,t,a){},172:function(e,t,a){},173:function(e,t,a){}}]);
//# sourceMappingURL=1-a7a8b8cbc51d8a04a825.js.map