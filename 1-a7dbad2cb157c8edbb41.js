(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{143:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return p}),a.d(t,"StaticQueryContext",function(){return m}),a.d(t,"StaticQuery",function(){return f});var n=a(0),r=a.n(n),i=a(4),c=a.n(i),l=a(142),o=a.n(l);a.d(t,"Link",function(){return o.a}),a.d(t,"withPrefix",function(){return l.withPrefix}),a.d(t,"navigate",function(){return l.navigate}),a.d(t,"push",function(){return l.push}),a.d(t,"replace",function(){return l.replace}),a.d(t,"navigateTo",function(){return l.navigateTo});var s=a(145),u=a.n(s);a.d(t,"PageRenderer",function(){return u.a});var d=a(48);a.d(t,"parsePath",function(){return d.a});var m=r.a.createContext({}),f=function(e){return r.a.createElement(m.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function p(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:c.a.object,query:c.a.string.isRequired,render:c.a.func,children:c.a.func}},145:function(e,t,a){var n;e.exports=(n=a(159))&&n.default||n},146:function(e,t,a){"use strict";var n=a(7),r=a.n(n),i=a(148),c=a(0),l=a.n(c),o=a(4),s=a.n(o),u=a(149),d=a.n(u),m=a(143),f=(a(160),function(){return l.a.createElement("footer",{className:"footer"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-12"},l.a.createElement("div",{className:"footer-content"})))))}),p=(a(161),a(162)),E=a(164),h=function(e){var t=e.isScrolled;return l.a.createElement("header",{className:t?"header header-scrolled":"header"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row align-items-center justify-content-between d-flex"},l.a.createElement("div",{className:"header__logo"},l.a.createElement(m.Link,{to:"/"},l.a.createElement("img",{src:Object(m.withPrefix)("images/logo.png"),alt:"Squaredev"}))),l.a.createElement("nav",{id:"nav-menu-container"},l.a.createElement("ul",{className:"nav-menu sf-arrows"},l.a.createElement("li",{className:"menu-active"},l.a.createElement(m.Link,{to:"/"},"Home")),l.a.createElement("li",null,l.a.createElement(m.Link,{to:"#technology"},"Technology")),l.a.createElement("li",null,l.a.createElement(m.Link,{to:"#vision"},"Vision")),l.a.createElement("li",{className:"menu-has-children"},l.a.createElement(m.Link,{to:""},l.a.createElement("span",null,"Open Source"),l.a.createElement(p.a,{icon:E.a})),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(m.Link,{to:"/generic"},"Generic Page")))),l.a.createElement("li",null,l.a.createElement(m.Link,{to:"#contact"},"Contact")))))))},v=(a(165),function(e){function t(t){var a;return(a=e.call(this,t)||this).state={isScrolled:!1},a}r()(t,e);var a=t.prototype;return a.componentDidMount=function(){var e=this;document.addEventListener("scroll",function(){var t=window.scrollY>200;t!==e.state.isScrolled&&e.setState({isScrolled:t})})},a.render=function(){var e=this;return l.a.createElement(m.StaticQuery,{query:"1044757290",render:function(t){return l.a.createElement(l.a.Fragment,null,l.a.createElement(d.a,{title:t.site.siteMetadata.title,meta:[{name:"description",content:"Squaredev website"},{name:"keywords",content:"Squaredev, Software Development, Data Analytics, Data Visualisations"}]},l.a.createElement("html",{lang:"en"})),l.a.createElement(h,{isScrolled:e.state.isScrolled}),e.props.children,l.a.createElement(f,null))},data:i})},t}(l.a.Component));v.propTypes={children:s.a.node.isRequired};t.a=v},148:function(e){e.exports={data:{site:{siteMetadata:{title:"Squaredev"}}}}},159:function(e,t,a){"use strict";a.r(t);a(32);var n=a(0),r=a.n(n),i=a(4),c=a.n(i),l=a(68),o=a(2),s=function(e){var t=e.location,a=o.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json))};s.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},t.default=s},160:function(e,t,a){},161:function(e,t,a){},165:function(e,t,a){}}]);
//# sourceMappingURL=1-a7dbad2cb157c8edbb41.js.map