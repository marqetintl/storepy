(this["webpackJsonp@store/clientjs"]=this["webpackJsonp@store/clientjs"]||[]).push([[15],{342:function(e,t,a){"use strict";a.d(t,"d",(function(){return o})),a.d(t,"c",(function(){return u})),a.d(t,"b",(function(){return m})),a.d(t,"e",(function(){return j})),a.d(t,"a",(function(){return b}));a(8),a(4);var c=a(1),s=(a(29),a(2)),r=a(13),i=a(5),n=(a(3),a(51)),l=a.n(n),d=a(0),o=function(e){var t=e.product;return t&&t.retail_price?t.is_on_sale?Object(d.jsxs)("div",{className:"product-price-display d-flex align-items-center",children:[Object(d.jsx)("div",{className:"text-danger fw-bold me-2",children:t.sale_price.amountWithSymbol}),Object(d.jsx)("div",{className:"text-line-through",children:t.retail_price.amountWithSymbol})]}):Object(d.jsx)("div",{className:"product-price-display d-flex align-items-center",children:Object(d.jsx)("div",{className:"fw-bold",children:t.retail_price.amountWithSymbol})}):null},u=function(e){var t=(e.product||{}).attributes,a=void 0===t?[]:t;return a?Object(d.jsx)("ul",{className:"product-attr-list",children:null===a||void 0===a?void 0:a.map((function(e){return Object(d.jsxs)("li",{className:"attr",children:[Object(d.jsxs)("span",{className:"attr-label",children:[e.name," : "]}),Object(d.jsx)("span",{className:"attr-value",children:e.value})]},e.name)}))}):null},m=function(e){var t,a=Object(s.useContext)(r.a);return a.isLoaded&&a.categories?Object(d.jsx)("div",{className:"category-links pb-2",children:null===(t=a.categories)||void 0===t?void 0:t.map((function(t){var a,s;return Object(d.jsx)("div",{className:"item w-25 w-md-15",children:Object(d.jsxs)("a",{href:t.url,className:"",title:t.name,children:[e.showCover&&(null===t||void 0===t?void 0:t.cover)&&Object(d.jsx)(i.r,Object(c.a)(Object(c.a)({},t.cover),{},{src_mobile:(null===t||void 0===t||null===(a=t.cover)||void 0===a?void 0:a.thumb_sq)||(null===t||void 0===t||null===(s=t.cover)||void 0===s?void 0:s.src_mobile)})),Object(d.jsx)("div",{className:"info",children:t.name_truncated})]})},t.slug)}))}):null};function j(e){var t=e.location.search,a=Object(s.useRef)(l()((function(t){var a;return null===e||void 0===e||null===(a=e.history)||void 0===a?void 0:a.push(t)}),300)),c=new URLSearchParams(t);return Object(d.jsx)("form",{action:"/shop/",className:"product-search-form",children:Object(d.jsx)(i.s,{required:!0,initialValue:c.get("q"),onChange:function(e){var t=e.e,s=t.target.value;if(!s||s.length<3?c.delete("q"):c.set("q",t.target.value),a.current){var r=new URL(window.location.href);a.current("".concat(r.pathname,"?").concat(c))}},className:"search-input",placeholder:"Cherchez un produit ...",minLength:3,maxLength:99})})}var b=function(e){var t=Object(s.useContext)(r.a),a=t.isLoaded,c=t.breadcrumbs;return a&&c?Object(d.jsx)("section",{className:"miq-breadcrumbs",role:"navigation","aria-label":"breadcrumbs",children:c.map((function(e){return Object(d.jsx)("a",{href:e.path,className:"item",title:e.title,"aria-label":e.title,children:e.label},e.label)}))}):null}},378:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return d}));var c=a(1),s=a(2),r=a(13),i=a(5),n=a(342),l=a(0);function d(e){var t,a=Object(s.useContext)(r.a);if(!a.isLoaded)return null;var d=a.cart;return console.log(d),Object(l.jsxs)("div",{className:"cart-view d-grid grid-md-3 gap-3 p-1 p-md-3",children:[Object(l.jsx)("div",{className:"cart-items span-md-2",children:null===d||void 0===d||null===(t=d.items)||void 0===t?void 0:t.map((function(e){return Object(l.jsxs)("div",{className:"cart-item d-grid grid-4 gap-2",children:[Object(l.jsx)("a",{href:e.url,className:"d-block",children:Object(l.jsx)(i.r,Object(c.a)({},e.cover))}),Object(l.jsxs)("div",{className:"span-3",children:[Object(l.jsx)("a",{href:e.url,className:"item-title d-block fw-bold",children:e.name}),e.size&&Object(l.jsx)("div",{className:"size",children:e.size}),Object(l.jsx)(n.d,{product:e})]})]},e.slug)}))}),Object(l.jsx)("div",{className:"cart-summary",children:Object(l.jsxs)("div",{className:"sticky",style:{top:0,position:"sticky"},children:[Object(l.jsx)("div",{className:"text-md",children:"R\xe9sum\xe9 de votre panier"}),Object(l.jsxs)("div",{className:"d-flex align-items-center justify-content-between",children:[Object(l.jsx)("span",{className:"subtotal-label",children:"Sous-total:"}),Object(l.jsx)("span",{className:"subtotal-amount",children:d.subtotal.amountWithSymbol})]})]})})]})}}}]);
//# sourceMappingURL=15.c0bd3577.chunk.js.map