"use strict";(self.webpackChunk_storepy_clientjs=self.webpackChunk_storepy_clientjs||[]).push([[397],{324:function(n,e,r){r.d(e,{CB:function(){return d},V5:function(){return h},g6:function(){return m}});var t=r(8519),i=r(8312),s=r(3308),l=r(2145),c=(r(2411),r(2898)),u=r(8136),a=["instance","fields"],o=["onSuccess","onError","onWillSubmit"],d=function(n){var e=(0,s.cI)({name:""});return(0,u.jsxs)(m,{context:e,onSubmit:function(r){return r.preventDefault(),(0,c.D)().create(e.values).then((function(e){var r;return null===n||void 0===n||null===(r=n.onSuccess)||void 0===r?void 0:r.call(n,e)})).catch((function(r){var t;e.handleError(r),null===n||void 0===n||null===(t=n.onError)||void 0===t||t.call(n,r)}))},children:[(0,u.jsx)("div",{className:"",children:(0,u.jsx)(m.NameField,{error:e.errors.name})}),(0,u.jsx)("div",{className:"my-3",children:(0,u.jsx)(s.ZP.Submit,{value:"Save category",className:"btn btn-primary"})})]})},h=function(n){var e=n.instance,r=void 0===e?(0,l.q9)("Category instance"):e,s=n.fields,c=(0,i.Z)(n,a),d=c.onSuccess,h=c.onError,f=c.onWillSubmit,v=(0,i.Z)(c,o),p=v.context;return(0,u.jsx)(m,(0,t.Z)((0,t.Z)({},v),{},{onSubmit:function(n){n.preventDefault(),null===f||void 0===f||f();var e={};return s.forEach((function(n){var r=p.values[n];null!=r&&(e[n]=r)})),r.update(e).then((function(n){return null===d||void 0===d?void 0:d(n)})).catch((function(n){var e;return h?h(n):null===p||void 0===p||null===(e=p.handleError)||void 0===e?void 0:e.call(p,n)}))}}))},m=function(n){return(0,u.jsx)(s.ZP,(0,t.Z)({},n))};m.NameField=function(n){return(0,u.jsx)(s.wd,(0,t.Z)((0,t.Z)({placeholder:"Entrez le nom de la cat\xe9gorie ..."},n),{},{required:!0}))},m.DescriptionField=function(n){return(0,u.jsx)(s.F$,(0,t.Z)({},n))}},7397:function(n,e,r){r.r(e),r.d(e,{StaffCategory:function(){return m.D},default:function(){return p}});var t=r(8519),i=r(6009),s=r(2411),l=r(6520),c=r(1408),u=r(3576),a=r(2145),o=r(2134),d=r(2379),h=r(6574),m=r(2898),f=r(324),v=r(8136);function p(){var n=(0,l.s0)(),e=(0,c.lr)(),r=(0,i.Z)(e,1)[0].get("page"),t=(0,o.QT)((function(){return(0,m.D)().list({params:{page:r}})}),{refreshDeps:[r]}).res,d=s.useState(!1),h=(0,i.Z)(d,2),p=h[0],j=h[1],Z=new a.HM(t);return Z.isSuccess?(0,v.jsxs)(u.ZP.View,{title:"Cat\xe9gories",back:"/staff/store/",actions:(0,v.jsx)(u.ZP.Button,{onClick:function(){return j(!p)},className:"btn-primary-3",title:"Add a new category",requiredPerms:["store.add_category"],children:"Ajouter"}),requiredPerms:["store.view_category"],children:[p&&(0,v.jsx)("div",{className:"miq-container center",children:(0,v.jsx)(u.ZP.Section,{title:"Add a category",requiredPerms:["store.add_category"],border:!0,children:(0,v.jsx)(f.CB,{onSuccess:function(e){var r=e.data;return n(r.slug)}})})}),0===Z.items.length&&!p&&(0,v.jsxs)("div",{className:"text-center p-staff-list-empty py-3 my-3",children:[(0,v.jsx)("p",{className:"fw-light text-md",children:"Ajouter une cat\xe9gorie pour commencer"}),(0,v.jsx)("div",{className:"my-4",children:(0,v.jsx)(u.ZP.Button,{onClick:function(){return j(!p)},requiredPerms:["store.add_category"],className:"btn btn-primary btn-md",children:"Add a category"})})]}),(0,v.jsx)(x,{r:Z})]}):null}var x=function(n){var e=n.r;return 0===e.items.length?null:(0,v.jsxs)("div",{className:"",children:[(0,v.jsx)(d.iA,{items:e.items,className:"cat-staff-table w-100",header:(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(d.iA.Th,{}),(0,v.jsx)(d.iA.Th,{children:"Cat\xe9gorie"}),(0,v.jsx)(d.iA.Th,{title:"",children:"Produits"})]}),renderItem:function(n){var e=(0,m.D)(n);return(0,v.jsxs)(d.iA.Tr,{children:[(0,v.jsx)(d.iA.Th,{children:(0,v.jsx)("div",{className:"",style:{maxWidth:48},children:(0,v.jsx)(u.ZP.Img.Thumb,(0,t.Z)((0,t.Z)({},e.cover_data),{},{className:"rounded"}))})}),(0,v.jsx)(d.iA.Td,{children:(0,v.jsx)(u.ZP.Link,{to:"".concat(e.slug,"/"),children:(0,v.jsxs)("div",{className:"text-ellipsis",children:[e.name,(0,v.jsx)(h.TK,{show:e.is_published})]})})}),(0,v.jsx)(d.iA.Td,{children:(0,v.jsxs)("ul",{children:[(0,v.jsxs)("li",{children:["Publi\xe9: ",e.published_count]}),(0,v.jsxs)("li",{children:["Non-publi\xe9: ",e.draft_count]}),(0,v.jsxs)("li",{children:["Total: ",e.products_count]})]})})]},n.slug)}}),(0,v.jsx)(d.tl,(0,t.Z)((0,t.Z)({},e.data),{},{component:u.ZP.Link,to:!0}))]})}},2898:function(n,e,r){r.d(e,{D:function(){return o}});var t=r(8519),i=r(1135),s=r(7411),l=r(2518),c=r(2485),u=r(3576),a=function(n){(0,l.Z)(r,n);var e=(0,c.Z)(r);function r(){return(0,i.Z)(this,r),e.apply(this,arguments)}return(0,s.Z)(r,[{key:"publish",value:function(){return this.update({is_published:!0})}},{key:"unpublish",value:function(){return this.update({is_published:!0})}}]),r}(u.x5),o=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=n.dt_published;return e&&(e=new Date(e)),(0,u.eR)((0,t.Z)((0,t.Z)({},n),{},{dt_published:e}),"categories",a)}},6574:function(n,e,r){r.d(e,{nk:function(){return f},_S:function(){return v},H5:function(){return h},TK:function(){return p},Ko:function(){return m}});var t=r(8519),i=r(8312),s=(r(2411),r(2379)),l=r(2145),c=r(8136),u=["instance","onClick","onSuccess","onError"],a=["instance","onClick","onSuccess","onError"],o=["retail_price_data","is_on_sale","sale_price_data"],d=["show"],h=function(n){var e=n.instance,r=(n.onClick,n.onSuccess),l=n.onError,a=(0,i.Z)(n,u);return(0,c.jsx)(s.zx,(0,t.Z)((0,t.Z)({onClick:function(){return e.is_published?null:e.publish().then((function(n){return null===r||void 0===r?void 0:r(n)})).catch((function(n){return null===l||void 0===l?void 0:l(n)}))},className:"btn-primary btn-md"},a),{},{disabled:e.is_published}))},m=function(n){var e=n.instance,r=(n.onClick,n.onSuccess),l=n.onError,u=(0,i.Z)(n,a);return(0,c.jsx)(s.zx,(0,t.Z)((0,t.Z)({className:"btn-danger btn-md",onClick:function(){return e.is_published?e.unpublish().then((function(n){return null===r||void 0===r?void 0:r(n)})).catch((function(n){return null===l||void 0===l?void 0:l(n)})):null}},u),{},{disabled:!e.is_published}))},f=function(n){var e=n.amountWithSymbol,r=n.className,t=n.sale,i=n.lineThrough;return(0,c.jsx)("div",{className:(0,l.UT)(["miq-price-display",t&&"text-danger",i&&"text-line-through",r]),children:e})},v=function(n){var e=n.retail_price_data,r=n.is_on_sale,s=n.sale_price_data,u=(0,i.Z)(n,o);if(!e)return null;var a=r&&null!=(null===s||void 0===s?void 0:s.amountWithSymbol);return(0,c.jsxs)("div",{className:(0,l.UT)(["miq-product-price-display",u.className]),style:u.style,children:[a&&(0,c.jsx)(f,(0,t.Z)((0,t.Z)({sale:!0},s),{},{className:"miq-sale-price me-1"})),(0,c.jsx)(f,(0,t.Z)((0,t.Z)({},e),{},{lineThrough:a,className:"miq-retail-price"}))]})},p=function(n){var e=n.show,r=(0,i.Z)(n,d);return e?(0,c.jsx)(s.PJ.fU,(0,t.Z)((0,t.Z)({},r),{},{className:"published-icon"})):null};new s.SD}}]);
//# sourceMappingURL=397.01e8273f.chunk.js.map