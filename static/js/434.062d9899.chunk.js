"use strict";(self.webpackChunk_storepy_clientjs=self.webpackChunk_storepy_clientjs||[]).push([[434],{911:function(n,e,t){t.d(e,{K1:function(){return Z},n9:function(){return x},sq:function(){return _},wP:function(){return b}});var i=t(6009),r=t(8519),s=t(9062),a=t(8312),c=t(1408),u=t(3576),l=t(3030),o=t(2379),d=t(5394),h=t(6772),p=t(4093),f=t(8136),v=["productInstance","onSuccess","onError"],m=["data"],x=function(n){var e=n.productInstance,t=n.onSuccess,i=n.onError,c=(0,a.Z)(n,v);return(0,f.jsx)(u.CD,(0,r.Z)((0,r.Z)({className:"btn-primary-3"},c),{},{multiple:!0,onSuccessMulti:function(n){var r=n.map((function(n){var e=n.data;return null===e||void 0===e?void 0:e.slug})).filter((function(n){var t;return!(null!==(t=e.images)&&void 0!==t&&t.includes(n))}));return e.update({images:[].concat((0,s.Z)(e.images),(0,s.Z)(r))}).then((function(n){return null===t||void 0===t?void 0:t(n)})).catch((function(n){return null===i||void 0===i?void 0:i(n)}))}}))},_=function(n){var e=n.instance,t=n.onSuccess,i=n.onError,r=n.label;return(0,f.jsxs)(o.pu,{renderHeader:function(){return(0,f.jsxs)("div",{children:["Supprimer '",e.name,"'"]})},renderFooter:function(n){var r=n.setOpen;return(0,f.jsxs)("div",{className:"d-flex justify-content-between align-items-center",children:[(0,f.jsx)(o.zx,{onClick:function(){return r(!1)},children:"Annuler"}),(0,f.jsx)(o.zx,{onClick:function(){return function(n){e.destroy().then((function(i){null===n||void 0===n||n(!1),null===t||void 0===t||t(i),d.u.destroy({slug:e.slug})})).catch((function(n){return null===i||void 0===i?void 0:i(n)}))}(r)},className:"btn-danger",children:"Supprimer"})]})},render:function(){return(0,f.jsx)("div",{className:"p-3",children:"Are you sure you want to delete this"})},className:(0,l.gj)(["product-delete-button btn-danger-3",n.className]),children:[(0,f.jsx)(o.PJ.rF,{}),r&&(0,f.jsx)("span",{className:"label",children:r})]})},b=function(n){var e,t=n.data,i=((0,a.Z)(n,m),(0,p.Z)(t));return(0,f.jsxs)("div",{className:"p-card-list-item p-1 mb-1",children:[(0,f.jsxs)("div",{className:"d-flex align-items-center",children:[(0,f.jsx)("div",{className:"p-name text-ellipsis",children:i.name_truncated}),(0,f.jsx)("div",{className:"ms-1",children:(0,f.jsx)(h.TK,{show:i.is_published})})]}),(0,f.jsxs)("div",{className:"d-flex",children:[(0,f.jsx)(u.pB.Square,(0,r.Z)({},null===i||void 0===i?void 0:i.cover_data)),(0,f.jsxs)("div",{className:"p-info ps-1",children:[(0,f.jsx)(h._S,(0,r.Z)((0,r.Z)({},i.export()),{},{className:"d-flex flex-wrap"})),(0,f.jsx)("div",{className:"p-category",children:null===(e=i.category_data)||void 0===e?void 0:e.name})]})]})]})},Z=function(n){var e=n.items,t=n.itempath,r=(0,c.lr)(),s=(0,i.Z)(r,1)[0];return(0,f.jsx)("div",{className:"p-card-list-items",children:e.map((function(n){var e="".concat(t).concat(n.slug,"/?").concat(s);return(0,f.jsx)(c.OL,{to:e,children:(0,f.jsx)(b,{data:n})},n.slug)}))})}},2264:function(n,e,t){t.d(e,{Z:function(){return i.Z},_:function(){return r._}});var i=t(4093),r=t(327)},4093:function(n,e,t){t.d(e,{Z:function(){return o}});var i=t(8519),r=t(1135),s=t(7411),a=t(2518),c=t(2485),u=t(3576),l=function(n){(0,a.Z)(t,n);var e=(0,c.Z)(t);function t(){return(0,r.Z)(this,t),e.apply(this,arguments)}return(0,s.Z)(t,[{key:"publish",value:function(){return this.patch("".concat(this._path,"publish/"),{is_published:!0})}},{key:"unpublish",value:function(){return this.patch("".concat(this._path,"publish/"),{is_published:!1})}},{key:"postSize",value:function(n){return this.post("".concat(this._path,"size/new/"),n)}},{key:"patchSize",value:function(n,e){return this.patch("".concat(this._path,"size/").concat(n,"/"),e)}},{key:"deleteSize",value:function(n){return this.delete("".concat(this._path,"size/").concat(n,"/"))}},{key:"postAttribute",value:function(n){return this.post("".concat(this._path,"attribute/new/"),n)}},{key:"patchAttribute",value:function(n,e){return this.patch("".concat(this._path,"attribute/").concat(n,"/"),e)}},{key:"deleteAttribute",value:function(n){return this.delete("".concat(this._path,"attribute/").concat(n,"/"))}},{key:"swapCover",value:function(n){return this.patch("".concat(this._path,"swap-cover/"),{slug:n})}}]),t}(u.x5),o=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=n.dt_published;return e&&(e=new Date(e)),(0,u.eR)((0,i.Z)((0,i.Z)({},n),{},{dt_published:e}),"products",l)}},327:function(n,e,t){t.d(e,{_:function(){return c}});var i=t(6009),r=t(1408),s=t(2134),a=t(4093),c=function(n){var e=(0,r.lr)(),t=(0,i.Z)(e,1)[0],c=t.get("cat"),u=t.get("page"),l=t.get("published"),o=t.get("presale"),d=t.get("sale"),h={page:u,cat:c,published:l,presale:o,sale:d};return n&&(h.supplier_order_slug=n),(0,s.QT)((function(){return(0,a.Z)().list({params:h})}),{refreshDeps:[u,c,l,o,d,n]})}},9434:function(n,e,t){t.r(e),t.d(e,{default:function(){return f}});var i=t(8312),r=t(2411),s=t(6520),a=t(3576),c=t(2379),u=t(5394),l=t(911),o=t(2264),d=t(8136),h=["res"],p=r.lazy((function(){return Promise.all([t.e(866),t.e(908)]).then(t.bind(t,9695))}));function f(){var n,e=(0,s.UO)().ordSlug,t=(0,o._)(e),r=t.res,f=void 0===r?{data:{results:[]}}:r,v=(0,i.Z)(t,h);(0,u.U)({onUpdate:v.updateItem,onDestroy:v.removeItem});var m="/staff/shop/orders/".concat(e,"/");return(0,d.jsx)(a.ZP.View,{children:(0,d.jsxs)("div",{className:"d-flex flex-column flex-xl-row",children:[(0,d.jsx)(c.LY.x9,{children:(0,d.jsx)("div",{className:"w-35 ",children:(0,d.jsx)(l.K1,{items:(null===f||void 0===f||null===(n=f.data)||void 0===n?void 0:n.results)||[],itempath:m})})}),(0,d.jsx)("div",{className:"flex-1",children:(0,d.jsx)(p,{back:m})})]})})}},6772:function(n,e,t){t.d(e,{_S:function(){return v},H5:function(){return h},TK:function(){return m},Ko:function(){return p}});var i=t(8519),r=t(8312),s=(t(2411),t(2379)),a=t(3030),c=t(8136),u=["instance","onClick","onSuccess","onError"],l=["instance","onClick","onSuccess","onError"],o=["retail_price_data","is_on_sale","sale_price_data"],d=["show"],h=function(n){var e=n.instance,t=(n.onClick,n.onSuccess),a=n.onError,l=(0,r.Z)(n,u);return(0,c.jsx)(s.zx,(0,i.Z)((0,i.Z)({onClick:function(){return e.is_published?null:e.publish().then((function(n){return null===t||void 0===t?void 0:t(n)})).catch((function(n){return null===a||void 0===a?void 0:a(n)}))},className:"btn-primary btn-md"},l),{},{disabled:e.is_published}))},p=function(n){var e=n.instance,t=(n.onClick,n.onSuccess),a=n.onError,u=(0,r.Z)(n,l);return(0,c.jsx)(s.zx,(0,i.Z)((0,i.Z)({className:"btn-danger btn-md",onClick:function(){return e.is_published?e.unpublish().then((function(n){return null===t||void 0===t?void 0:t(n)})).catch((function(n){return null===a||void 0===a?void 0:a(n)})):null}},u),{},{disabled:!e.is_published}))},f=function(n){var e=n.amountWithSymbol,t=n.className,i=n.sale,r=n.lineThrough;return(0,c.jsx)("div",{className:(0,a.gj)(["miq-price-display",i&&"text-danger",r&&"text-line-through",t]),children:e})},v=function(n){var e=n.retail_price_data,t=n.is_on_sale,s=n.sale_price_data,u=(0,r.Z)(n,o);if(!e)return null;var l=t&&null!=(null===s||void 0===s?void 0:s.amountWithSymbol);return(0,c.jsxs)("div",{className:(0,a.gj)(["miq-product-price-display",u.className]),style:u.style,children:[l&&(0,c.jsx)(f,(0,i.Z)((0,i.Z)({sale:!0},s),{},{className:"miq-sale-price me-1"})),(0,c.jsx)(f,(0,i.Z)((0,i.Z)({},e),{},{lineThrough:l,className:"miq-retail-price"}))]})},m=function(n){var e=n.show,t=(0,r.Z)(n,d);return e?(0,c.jsx)(s.PJ.fU,(0,i.Z)((0,i.Z)({},t),{},{className:"published-icon"})):null};new s.SD},5394:function(n,e,t){t.d(e,{U:function(){return p},u:function(){return h}});var i=t(8312),r=t(1135),s=t(7411),a=t(2518),c=t(2485),u=t(2411),l=t(2578),o=["prefix"],d=function(n){(0,a.Z)(t,n);var e=(0,c.Z)(t);function t(){var n;(0,r.Z)(this,t);for(var s=arguments.length,a=new Array(s),c=0;c<s;c++)a[c]=arguments[c];var u=a.prefix,l=void 0===u?"":u,d=(0,i.Z)(a,o);return(n=e.call(this,d)).prefix=void 0,n.prefix=l,n}return(0,s.Z)(t,[{key:"create",value:function(n){this.emit("".concat(this.prefix,"-create"),n)}},{key:"retrieve",value:function(n){this.emit("".concat(this.prefix,"-retrieve"),n)}},{key:"list",value:function(n){this.emit("".concat(this.prefix,"-list"),n)}},{key:"update",value:function(n){this.emit("".concat(this.prefix,"-update"),n)}},{key:"destroy",value:function(n){this.emit("".concat(this.prefix,"-destroy"),n)}}]),t}(t.n(l)()),h=new d;function p(n,e){u.useEffect((function(){h.on("-create",(function(t){var i;e&&!e(t)||null===(i=n.onCreate)||void 0===i||i.call(n,t)})),h.on("-update",(function(t){var i;e&&!e(t)||null===(i=n.onUpdate)||void 0===i||i.call(n,t)})),h.on("-destroy",(function(t){var i;e&&!e(t)||null===(i=n.onDestroy)||void 0===i||i.call(n,t)}))}),[])}}}]);
//# sourceMappingURL=434.062d9899.chunk.js.map