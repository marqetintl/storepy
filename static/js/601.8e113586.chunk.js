"use strict";(self.webpackChunk_storepy_clientjs=self.webpackChunk_storepy_clientjs||[]).push([[601],{421:function(e,r,n){n.d(r,{K1:function(){return b},n9:function(){return f},sq:function(){return j},wP:function(){return Z}});var t=n(6009),i=n(8519),s=n(9062),l=n(8312),c=n(1408),a=n(3576),u=n(2145),o=n(2379),d=n(3992),h=n(6574),p=n(3793),v=n(8136),m=["productInstance","onSuccess","onError"],x=["data"],f=function(e){var r=e.productInstance,n=e.onSuccess,t=e.onError,c=(0,l.Z)(e,m);return(0,v.jsx)(a.CD,(0,i.Z)((0,i.Z)({className:"btn-primary-3"},c),{},{multiple:!0,onSuccessMulti:function(e){var i=e.map((function(e){var r=e.data;return null===r||void 0===r?void 0:r.slug})).filter((function(e){var n;return!(null!==(n=r.images)&&void 0!==n&&n.includes(e))}));return r.update({images:[].concat((0,s.Z)(r.images),(0,s.Z)(i))}).then((function(e){return null===n||void 0===n?void 0:n(e)})).catch((function(e){return null===t||void 0===t?void 0:t(e)}))}}))},j=function(e){var r=e.instance,n=e.onSuccess,t=e.onError,i=e.label;return(0,v.jsxs)(o.pu,{renderHeader:function(){return(0,v.jsxs)("div",{children:["Supprimer '",r.name,"'"]})},renderFooter:function(e){var i=e.setOpen;return(0,v.jsxs)("div",{className:"d-flex justify-content-between align-items-center",children:[(0,v.jsx)(o.zx,{onClick:function(){return i(!1)},children:"Annuler"}),(0,v.jsx)(o.zx,{onClick:function(){return function(e){r.destroy().then((function(t){null===e||void 0===e||e(!1),null===n||void 0===n||n(t),d.u.destroy({slug:r.slug})})).catch((function(e){return null===t||void 0===t?void 0:t(e)}))}(i)},className:"btn-danger",children:"Supprimer"})]})},render:function(){return(0,v.jsx)("div",{className:"p-3",children:"Are you sure you want to delete this"})},className:(0,u.UT)(["product-delete-button btn-danger-3",e.className]),children:[(0,v.jsx)(o.PJ.rF,{}),i&&(0,v.jsx)("span",{className:"label",children:i})]})},Z=function(e){var r,n=e.data,t=((0,l.Z)(e,x),(0,p.Z)(n));return(0,v.jsxs)("div",{className:"p-card-list-item p-1 mb-1",children:[(0,v.jsxs)("div",{className:"d-flex align-items-center",children:[(0,v.jsx)("div",{className:"p-name text-ellipsis",children:t.name_truncated}),(0,v.jsx)("div",{className:"ms-1",children:(0,v.jsx)(h.TK,{show:t.is_published})})]}),(0,v.jsxs)("div",{className:"d-flex",children:[(0,v.jsx)(a.pB.Square,(0,i.Z)({},null===t||void 0===t?void 0:t.cover_data)),(0,v.jsxs)("div",{className:"p-info ps-1",children:[(0,v.jsx)(h._S,(0,i.Z)((0,i.Z)({},t.export()),{},{className:"d-flex flex-wrap"})),(0,v.jsx)("div",{className:"p-category",children:null===(r=t.category_data)||void 0===r?void 0:r.name})]})]})]})},b=function(e){var r=e.items,n=e.itempath,i=(0,c.lr)(),s=(0,t.Z)(i,1)[0];return(0,v.jsx)("div",{className:"p-card-list-items",children:r.map((function(e){var r="".concat(n).concat(e.slug,"/?").concat(s);return(0,v.jsx)(c.OL,{to:r,children:(0,v.jsx)(Z,{data:e})},e.slug)}))})}},9953:function(e,r,n){n.d(r,{Z:function(){return t.Z},_:function(){return i._}});var t=n(3793),i=n(5566)},3793:function(e,r,n){n.d(r,{Z:function(){return o}});var t=n(8519),i=n(1135),s=n(7411),l=n(2518),c=n(2485),a=n(3576),u=function(e){(0,l.Z)(n,e);var r=(0,c.Z)(n);function n(){return(0,i.Z)(this,n),r.apply(this,arguments)}return(0,s.Z)(n,[{key:"publish",value:function(){return this.patch("".concat(this._path,"publish/"),{is_published:!0})}},{key:"unpublish",value:function(){return this.patch("".concat(this._path,"publish/"),{is_published:!1})}},{key:"postSize",value:function(e){return this.post("".concat(this._path,"size/new/"),e)}},{key:"patchSize",value:function(e,r){return this.patch("".concat(this._path,"size/").concat(e,"/"),r)}},{key:"deleteSize",value:function(e){return this.delete("".concat(this._path,"size/").concat(e,"/"))}},{key:"postAttribute",value:function(e){return this.post("".concat(this._path,"attribute/new/"),e)}},{key:"patchAttribute",value:function(e,r){return this.patch("".concat(this._path,"attribute/").concat(e,"/"),r)}},{key:"deleteAttribute",value:function(e){return this.delete("".concat(this._path,"attribute/").concat(e,"/"))}},{key:"swapCover",value:function(e){return this.patch("".concat(this._path,"swap-cover/"),{slug:e})}}]),n}(a.x5),o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=e.dt_published;return r&&(r=new Date(r)),(0,a.eR)((0,t.Z)((0,t.Z)({},e),{},{dt_published:r}),"products",u)}},5566:function(e,r,n){n.d(r,{_:function(){return c}});var t=n(6009),i=n(1408),s=n(2134),l=n(3793),c=function(e){var r=(0,i.lr)(),n=(0,t.Z)(r,1)[0],c=n.get("cat"),a=n.get("page"),u=n.get("published"),o=n.get("presale"),d=n.get("sale"),h={page:a,cat:c,published:u,presale:o,sale:d};return e&&(h.supplier_order_slug=e),(0,s.QT)((function(){return(0,l.Z)().list({params:h})}),{refreshDeps:[a,c,u,o,d,e]})}},4627:function(e,r,n){n.r(r),n.d(r,{default:function(){return D}});var t=n(2411),i=n(3308),s=n(2134),l=n(3576),c=n(2145),a=n(6520),u=n(3432),o=n(2379),d=n(6009),h=n(8519),p=n(8312),v=n(8136),m=["instance","fields"],x=["onSuccess","onError"],f=["label","text","error"],j=["label","text","error"],Z=["label","text","error"],b=["label","text","error"],g=["label","text","error","currencies"],y=["label","text","error","suppliers"],N=["children"],_=function(e){var r=e.instance,n=e.fields,t=(0,p.Z)(e,m),i=t.onSuccess,s=t.onError,l=(0,p.Z)(t,x),c=l.context;return(0,v.jsx)(S,(0,h.Z)((0,h.Z)({},l),{},{onSubmit:function(e){e.preventDefault();var t={};return n.forEach((function(e){var r=c.values[e];null!=r&&(t[e]=r)})),r.update(t).then((function(e){return null===i||void 0===i?void 0:i(e)})).catch((function(e){var r;return s?s(e):null===c||void 0===c||null===(r=c.handleError)||void 0===r?void 0:r.call(c,e)}))}}))},S=function(e){return(0,v.jsx)(i.ZP,(0,h.Z)({},e))};S.NameField=function(e){var r=e.label,n=void 0===r?"Name":r,t=e.text,s=void 0===t?"Write a name to help remember your order.":t,l=e.error,c=(0,p.Z)(e,f);return(0,v.jsx)(i.ZP.Field,{label:n,text:s,error:l,children:(0,v.jsx)(i.ZP.Text,(0,h.Z)((0,h.Z)({placeholder:"Nom",maxLength:99},c),{},{name:"name"}))})},S.OrderIDField=function(e){var r=e.label,n=void 0===r?"Order ID":r,t=e.text,s=e.error,l=(0,p.Z)(e,j);return(0,v.jsx)(i.ZP.Field,{label:n,text:t,error:s,children:(0,v.jsx)(i.ZP.Text,(0,h.Z)((0,h.Z)({placeholder:"Order ID",maxLength:99},l),{},{name:"order_id"}))})},S.IsPaidField=function(e){var r=e.label,n=void 0===r?"Pay\xe9":r,t=e.text,s=e.error,l=(0,p.Z)(e,Z);return(0,v.jsx)(i.ZP.Field,{label:n,text:t,error:s,checkbox:!0,children:(0,v.jsx)(i.ZP.Checkbox,(0,h.Z)((0,h.Z)({},l),{},{name:"is_paid"}))})},S.TotalCostField=function(e){var r=e.label,n=void 0===r?"Co\xfbt total":r,t=e.text,s=e.error,l=(0,p.Z)(e,b);return(0,v.jsx)(i.ZP.Field,{label:n,text:t,error:s,children:(0,v.jsx)(i.ZP.Text,(0,h.Z)((0,h.Z)({min:"0",step:"0.01"},l),{},{required:!0,type:"number",name:"total_cost"}))})},S.CurrencyField=function(e){var r=e.label,n=e.text,s=void 0===n?"Select the supplier currency.":n,l=e.error,c=e.currencies,a=(0,p.Z)(e,g);return(0,v.jsx)(i.ZP.Field,{label:r,text:s,error:l,children:(0,v.jsx)(i.ZP.Select,(0,h.Z)((0,h.Z)({},a),{},{required:!0,name:"currency",nullValue:{label:"S\xe9lectionnez une monnaie ..."},children:null===c||void 0===c?void 0:c.map((function(e){return(0,t.createElement)(i.ZP.Option,(0,h.Z)((0,h.Z)({},e),{},{key:e.value}))}))}))})},S.SupplierField=function(e){var r=e.label,n=e.text,s=void 0===n?"Select the supplier.":n,l=e.error,c=e.suppliers,a=(0,p.Z)(e,y);return(0,v.jsx)(i.ZP.Field,{label:r,text:s,error:l,children:(0,v.jsx)(i.ZP.Select,(0,h.Z)((0,h.Z)({},a),{},{required:!0,name:"supplier",nullValue:{label:"S\xe9lectionnez le supplier ..."},children:null===c||void 0===c?void 0:c.map((function(e){return(0,t.createElement)(i.ZP.Option,(0,h.Z)((0,h.Z)({},e),{},{key:e.value}))}))}))})};var k=function(e){e.children;var r,n=(0,p.Z)(e,N),s=n.orderInstance,l=n.onSuccess,c=n.onError,a=null===s||void 0===s||null===(r=s.supplier)||void 0===r?void 0:r.toLowerCase(),u=(0,i.cI)({supplier_name:a,url:""}),o=t.useState(!1),m=(0,d.Z)(o,2),x=m[0],f=m[1];return(0,v.jsxs)(i.ZP,{context:u,onSubmit:function(e){e.preventDefault();var r=u.values.url,n=function(e){return f(!1),u.setValue("url",""),null===l||void 0===l?void 0:l(e)},t=function(e){return u.setErrors((0,h.Z)((0,h.Z)({},u.errors),{},{url:"Something went wrong."})),f(!1),null===c||void 0===c?void 0:c(e)},i="Invalid Url: does not match supplier ".concat(s.supplier);switch(a){case"fnova":return r.includes("fashionnova")?(f(!0),s.postFnova(r).then(n).catch(t)):u.setErrors({url:i});case"plt":return r.includes("prettylittlething")?(f(!0),s.postPlt(r).then(n).catch(t)):u.setErrors({url:i});default:return r.includes(a)?(f(!0),s.postShein(r).then(n).catch(t)):u.setErrors({url:i})}},className:"supplier-product-add-form",children:[(0,v.jsx)(i.ZP.Field,{error:u.errors.url,children:(0,v.jsxs)("div",{className:"d-flex flex-column flex-md-row align-items-center",children:[(0,v.jsx)(i.ZP.Text,{required:!0,autoFocus:!0,name:"url",type:"url",placeholder:"Add ".concat(a," product source url ..."),className:"me-1",disabled:x}),(0,v.jsx)("div",{className:"mt-1 mt-md-0",children:(0,v.jsx)(i.ZP.Submit,{value:"Add product",className:"btn btn-primary-3",disabled:x})})]})}),x&&(0,v.jsx)("div",{className:"my-3",children:"Getting product data. Please wait ..."})]})},P=n(9062),w=n(9953),C=n(3085),F=n(421);function E(e){var r,n=e.orderInstance,i=e.refreshOrder,s=e.categories,c=(0,a.UO)().ordSlug,u=(0,w._)(c).res,p=void 0===u?{data:{results:[]}}:u,m=t.useState([]),x=(0,d.Z)(m,2),f=x[0],j=x[1];return(0,v.jsx)(l.ZP.Section,{header:(0,v.jsx)(C.ir,{categories:s}),footer:(0,v.jsx)(o.tl,(0,h.Z)((0,h.Z)({},p.data),{},{component:l.ZP.NavLink,to:!0})),className:"supplier-p-list",children:null!==(r=p.data)&&void 0!==r&&r.results.length?(0,v.jsxs)(v.Fragment,{children:[0!==f.length&&(0,v.jsx)("div",{className:"bg-white",style:{position:"sticky",top:0,zIndex:1e3},children:(0,v.jsx)(o.zx,{children:"Group together"})}),p.data.results.map((function(e){return(0,t.createElement)(I,{orderInstance:n,categories:s,selected:f,setSelected:j,refreshOrder:i,instance:(0,w.Z)(e),key:e.slug})}))]}):null})}var I=function(e){var r=t.useState(!1),n=(0,d.Z)(r,2),i=n[0],s=n[1],c=e.instance,a=e.categories;if(i)return null;var u=c.supplier_item,p=e.orderInstance;return(0,v.jsx)(o.vz,{border:!0,title:(0,v.jsxs)("div",{className:"d-flex align-items-center",children:[(0,v.jsx)(q,(0,h.Z)({},e)),(0,v.jsx)("div",{style:{width:48,height:48},children:(0,v.jsx)(l.ZP.Img.Square,(0,h.Z)((0,h.Z)({slug:"slug",src:"src"},c.cover_data),{},{className:"rounded"}))})]}),actions:(0,v.jsxs)("div",{className:"d-flex",children:[(0,v.jsx)(F.sq,{instance:c,onSuccess:function(){var r;s(!0),null===e||void 0===e||null===(r=e.refreshOrder)||void 0===r||r.call(e)},className:"me-2"}),(0,v.jsx)(l.ZP.Link,{to:"./".concat(c.slug,"/"),className:"btn btn-primary-3",children:(0,v.jsx)(o.PJ.ws,{})})]}),className:"suppier-p-list-item bg-white",children:(0,v.jsxs)(o.j6,{className:"form-tab no-scroll-bar gap-2",children:[(0,v.jsx)(C.iB,{instance:c,categories:a,orderSlug:null===p||void 0===p?void 0:p.slug}),(0,v.jsxs)("div",{className:"",children:[(0,v.jsx)("div",{className:"mb-1",children:"".concat(u.item_id?(0,v.jsxs)("span",{className:"",children:["Item ID: ",u.item_id]}):"")}),(0,v.jsxs)("ul",{children:[u.category&&(0,v.jsxs)("li",{className:"mb-1",children:[(0,v.jsx)("div",{className:"text-sm",children:"Supplier Category"}),(0,v.jsx)("div",{className:"text-muted",children:u.category})]}),(0,v.jsxs)("li",{className:"mb-1",children:[(0,v.jsxs)("div",{className:"text-sm",children:["FOB Cost(",p.currency,")"]}),(0,v.jsx)("div",{className:"text-muted",children:u.cost})]}),u.url&&(0,v.jsx)("li",{className:"",children:(0,v.jsx)("a",{href:u.url,target:"_blank",className:"text-underline",rel:"noopener noreferrer",children:"View supplier product page"})})]})]})]})})},q=function(e){var r=e.instance,n=e.selected,t=e.setSelected;return(0,v.jsx)("input",{type:"checkbox",name:"selected",className:"me-2",onChange:function(e){var i=e.target.checked;t(i?[].concat((0,P.Z)(n),[r.slug]):function(e){return e.filter((function(e){return e!==r.slug}))})}})},O=n(9002),z={name:"",order_id:"",items_stage:"",currency:"USD",supplier:"",is_paid:!1,total_cost:""},T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r={};return Object.keys(z).forEach((function(n){r[n]=e["".concat(n)]||z["".concat(n)]})),r};function D(){var e,r,n=(0,a.UO)().ordSlug,d=(0,i.cI)(T()),h=t.useContext(O.h2),p=h.suppliers,m=h.currencies,x=d.setValues,f=(0,s.QT)((function(){return(0,u.e)({slug:n}).retrieve()}),{refreshDeps:[n],onSuccess:function(e){return x(T(e.data))}}),j=f.res,Z=f.loading,b=f.setLoading,g=f.setRes,y=f.refresh,N=new c.HM(j);if(!N.isSuccess)return null;var P=(0,u.e)(N.data);return P.supplier&&P.currency?(0,v.jsx)(l.ZP.View,{title:d.values.name,back:"/staff/store/orders/",children:(0,v.jsxs)("div",{className:"d-flex flex-column flex-xl-row",children:[(0,v.jsx)("div",{className:"min-w-35",children:(0,v.jsx)(l.ZP.Section,{border:!0,className:"bg-white mb-1",title:"Order Details".concat(!Z&&" (".concat(null===(e=P.products)||void 0===e?void 0:e.length,")")),text:"Supplier: ".concat(P.supplier," | Currency: ").concat(P.currency),children:(0,v.jsxs)("div",{className:"d-grid grid-md-5 gap-2",children:[(0,v.jsx)("div",{className:"span-md-3",children:(0,v.jsx)(_,{instance:P,context:d,fields:["is_paid","order_id","total_cost"],onSuccess:function(e){return g(e)},children:(0,v.jsxs)(o.vz,{border:!0,footer:(0,v.jsx)(i.ZP.Submit,{value:"Sauvegarder",className:"btn-primary-3"}),children:[(0,v.jsx)(S.IsPaidField,{error:d.errors.is_paid}),d.values.is_paid&&(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(S.OrderIDField,{required:d.values.is_paid,error:d.errors.order_id}),(0,v.jsx)(S.TotalCostField,{required:d.values.is_paid,error:d.errors.total_cost})]})]})})}),(0,v.jsx)("div",{className:"span-md-2",children:(0,v.jsxs)("ul",{className:"mb-3",children:[(0,v.jsxs)("li",{children:["Total cost: ",P.items_cost.amountWithSymbol]}),(0,v.jsxs)("li",{children:["Est. revenue: ",P.items_revenue.amountWithSymbol]})]})})]})})}),(0,v.jsx)("div",{className:"miq-container-1024 ms-xl-1",children:(0,v.jsx)(l.ZP.Section,{header:(0,v.jsx)("div",{className:"miq-container-md center bg-white",children:(0,v.jsx)(k,{orderInstance:P,onSuccess:function(e){b(),g(e)}})}),children:Z?(0,v.jsx)(o.gb,{icon:!0}):(0,v.jsx)(E,{orderInstance:P,categories:null===N||void 0===N||null===(r=N.data)||void 0===r?void 0:r.categories,refreshOrder:y})})})]})}):(0,v.jsx)(l.ZP.View,{title:"Modifier une commande",back:"/staff/store/orders/",children:(0,v.jsx)(l.ZP.Section,{className:"d-flex justify-content-center mt-4",children:(0,v.jsxs)(_,{context:d,instance:P,fields:["name","currency","supplier"],onSuccess:function(e){return g(e)},children:[(0,v.jsx)(S.NameField,{required:!0,label:"Nom",error:d.errors.currency}),(0,v.jsx)(S.SupplierField,{required:!0,label:"Supplier",suppliers:p,error:d.errors.supplier}),(0,v.jsx)(S.CurrencyField,{required:!0,label:"Supplier Currency",currencies:m,error:d.errors.currency}),(0,v.jsx)(i.ZP.Submit,{value:"Sauvegarder",className:"btn-primary-3"})]})})})}},6574:function(e,r,n){n.d(r,{nk:function(){return v},_S:function(){return m},H5:function(){return h},TK:function(){return x},Ko:function(){return p}});var t=n(8519),i=n(8312),s=(n(2411),n(2379)),l=n(2145),c=n(8136),a=["instance","onClick","onSuccess","onError"],u=["instance","onClick","onSuccess","onError"],o=["retail_price_data","is_on_sale","sale_price_data"],d=["show"],h=function(e){var r=e.instance,n=(e.onClick,e.onSuccess),l=e.onError,u=(0,i.Z)(e,a);return(0,c.jsx)(s.zx,(0,t.Z)((0,t.Z)({onClick:function(){return r.is_published?null:r.publish().then((function(e){return null===n||void 0===n?void 0:n(e)})).catch((function(e){return null===l||void 0===l?void 0:l(e)}))},className:"btn-primary btn-md"},u),{},{disabled:r.is_published}))},p=function(e){var r=e.instance,n=(e.onClick,e.onSuccess),l=e.onError,a=(0,i.Z)(e,u);return(0,c.jsx)(s.zx,(0,t.Z)((0,t.Z)({className:"btn-danger btn-md",onClick:function(){return r.is_published?r.unpublish().then((function(e){return null===n||void 0===n?void 0:n(e)})).catch((function(e){return null===l||void 0===l?void 0:l(e)})):null}},a),{},{disabled:!r.is_published}))},v=function(e){var r=e.amountWithSymbol,n=e.className,t=e.sale,i=e.lineThrough;return(0,c.jsx)("div",{className:(0,l.UT)(["miq-price-display",t&&"text-danger",i&&"text-line-through",n]),children:r})},m=function(e){var r=e.retail_price_data,n=e.is_on_sale,s=e.sale_price_data,a=(0,i.Z)(e,o);if(!r)return null;var u=n&&null!=(null===s||void 0===s?void 0:s.amountWithSymbol);return(0,c.jsxs)("div",{className:(0,l.UT)(["miq-product-price-display",a.className]),style:a.style,children:[u&&(0,c.jsx)(v,(0,t.Z)((0,t.Z)({sale:!0},s),{},{className:"miq-sale-price me-1"})),(0,c.jsx)(v,(0,t.Z)((0,t.Z)({},r),{},{lineThrough:u,className:"miq-retail-price"}))]})},x=function(e){var r=e.show,n=(0,i.Z)(e,d);return r?(0,c.jsx)(s.PJ.fU,(0,t.Z)((0,t.Z)({},n),{},{className:"published-icon"})):null};new s.SD},3992:function(e,r,n){n.d(r,{U:function(){return p},u:function(){return h}});var t=n(8312),i=n(1135),s=n(7411),l=n(2518),c=n(2485),a=n(2411),u=n(2578),o=["prefix"],d=function(e){(0,l.Z)(n,e);var r=(0,c.Z)(n);function n(){var e;(0,i.Z)(this,n);for(var s=arguments.length,l=new Array(s),c=0;c<s;c++)l[c]=arguments[c];var a=l.prefix,u=void 0===a?"":a,d=(0,t.Z)(l,o);return(e=r.call(this,d)).prefix=void 0,e.prefix=u,e}return(0,s.Z)(n,[{key:"create",value:function(e){this.emit("".concat(this.prefix,"-create"),e)}},{key:"retrieve",value:function(e){this.emit("".concat(this.prefix,"-retrieve"),e)}},{key:"list",value:function(e){this.emit("".concat(this.prefix,"-list"),e)}},{key:"update",value:function(e){this.emit("".concat(this.prefix,"-update"),e)}},{key:"destroy",value:function(e){this.emit("".concat(this.prefix,"-destroy"),e)}}]),n}(n.n(u)()),h=new d;function p(e,r){a.useEffect((function(){h.on("-create",(function(n){var t;r&&!r(n)||null===(t=e.onCreate)||void 0===t||t.call(e,n)})),h.on("-update",(function(n){var t;r&&!r(n)||null===(t=e.onUpdate)||void 0===t||t.call(e,n)})),h.on("-destroy",(function(n){var t;r&&!r(n)||null===(t=e.onDestroy)||void 0===t||t.call(e,n)}))}),[])}}}]);
//# sourceMappingURL=601.8e113586.chunk.js.map