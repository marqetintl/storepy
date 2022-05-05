"use strict";(self.webpackChunk_storepy_clientjs=self.webpackChunk_storepy_clientjs||[]).push([[85,825],{3085:function(e,r,t){t.d(r,{Eh:function(){return q},HG:function(){return A},Kl:function(){return C},iB:function(){return T},ir:function(){return E}});var n=t(6009),i=t(8519),l=t(8312),a=t(2411),s=t(3308),c=t(2145),o=t(3992),u=t(3793),d=t(1408),x=t(2379),p=t(7825),m=t(8136),h=["instance","categories","orderSlug"],v=["children"],f=["instance","fields","onSuccess","onError"],j=["label","text","error","categories"],b=["label","text","error"],Z=["label","text","error"],g=["label","text","error"],_=["label","text","error"],P=["label","text","error"],y=["label","text","error","stages"],S=["children"],F=["categories"],k=["categories"],N=["children"],T=function(e){var r=e.instance,t=e.categories,n=e.orderSlug,a=(0,l.Z)(e,h),c=(0,s.cI)({name:r.name||"",category:r.category||"",description:r.description||"",retail_price:(null===r||void 0===r?void 0:r.retail_price)||0,is_pre_sale:r.is_pre_sale||!1,is_pre_sale_text:r.is_pre_sale_text||""}),o=c.errors,u=e.fields,d=void 0===u?["name","category","description","retail_price","is_pre_sale","is_pre_sale_text"]:u;return(0,m.jsxs)(q,(0,i.Z)((0,i.Z)({},a),{},{context:c,instance:r,fields:d,children:[(0,m.jsx)(A.NameField,{error:o.name}),(0,m.jsx)(A.DescriptionField,{error:o.description}),(0,m.jsxs)("div",{className:"d-grid grid-md-3 gap-2",children:[t&&(0,m.jsx)(A.CategoryField,{categories:t,error:o.category}),(0,m.jsx)(A.RetailPriceField,{error:o.retail_price})]}),(0,m.jsx)(A.PresaleCheckboxField,{label:"En pr\xe9-vente",error:o.is_pre_sale}),c.values.is_pre_sale&&(0,m.jsx)(A.PresaleTextField,{label:"Pre-sale text",placeholder:"Explain ...",error:o.is_pre_sale_text}),(0,m.jsxs)("div",{className:"d-flex align-items-center justify-content-between",children:[(0,m.jsx)("div",{children:n&&(null===r||void 0===r?void 0:r.slug)&&(0,m.jsx)(x.zx,{onClick:function(){(0,p.SupplierOrder)({slug:n}).destroyItem(r.slug)},children:"Remove from order"})}),(0,m.jsx)(s.ZP.Submit,{value:"Sauvegarder",className:"btn-primary-3 btn-md"})]})]}))};function q(e){var r=e.children,t=(0,l.Z)(e,v),n=t.instance,a=void 0===n?(0,c.q9)("StaffProduct instance"):n,s=t.fields,u=void 0===s?(0,c.q9)("fields instance"):s,d=t.onSuccess,x=t.onError,p=(0,l.Z)(t,f),h=p.context;return(0,m.jsx)(A,(0,i.Z)((0,i.Z)({},p),{},{onSubmit:function(e){var r;e.preventDefault(),null===t||void 0===t||null===(r=t.onWillSubmit)||void 0===r||r.call(t);var n={};return u.forEach((function(e){var r=h.values[e];null!=r&&("is_pre_sale_dt"!=e||r)&&(n[e]=r)})),a.update(n).then((function(e){var r=e.data;null===d||void 0===d||d(r),o.u.update(r)})).catch((function(e){return x?x(e):h.handleError(e)}))},children:r}))}var C=function(e){var r=(0,s.cI)({name:"",retail_price:"",description:""}),t=r.errors;return(0,m.jsxs)(A,{context:r,onSubmit:function(t){t.preventDefault(),(0,u.Z)().create(r.values).then((function(r){var t;return null===e||void 0===e||null===(t=e.onSuccess)||void 0===t?void 0:t.call(e,r)})).catch((function(e){return r.handleError(e)}))},children:[(0,m.jsx)(A.NameField,{label:"Nom du produit",error:t.name}),(0,m.jsx)(A.RetailPriceField,{required:!1,label:"Prix du produit",error:t.retail_price}),(0,m.jsx)(A.DescriptionField,{label:"Description du produit",error:t.description}),(0,m.jsx)(s.ZP.Submit,{value:"Sauvegarder",className:"btn-primary-3"})]})},A=function(e){return(0,m.jsx)(s.ZP,(0,i.Z)({},e))};A.NameField=function(e){return(0,m.jsx)(s.wd,(0,i.Z)({placeholder:"Entrez un titre clair et concis ..."},e))},A.DescriptionField=function(e){return(0,m.jsx)(s.F$,(0,i.Z)({placeholder:"D\xe9crivez les caract\xe9ristiques et les avantages ..."},e))},A.CategoryField=function(e){var r,t=e.label,n=e.text,c=e.error,o=e.categories,u=(0,l.Z)(e,j);return(0,m.jsx)(s.ZP.Field,{label:t,text:n,error:c,children:(0,m.jsx)(s.ZP.Select,(0,i.Z)((0,i.Z)({},u),{},{required:!0,name:"category",nullValue:{label:"S\xe9lectionnez une cat\xe9gorie ..."},children:null===o||void 0===o||null===(r=o.items)||void 0===r?void 0:r.map((function(e){return(0,a.createElement)(s.ZP.Option,(0,i.Z)((0,i.Z)({},e),{},{key:e.value}))}))}))})},A.SalePriceField=function(e){var r=e.label,t=e.text,n=e.error,a=(0,l.Z)(e,b);return(0,m.jsx)(s.ZP.Field,{label:r,text:t,error:n,children:(0,m.jsx)(s.ZP.Text,(0,i.Z)((0,i.Z)({"aria-describedby":"sale_price_label",min:"0",step:"0.01",required:!0,placeholder:"Prix r\xe9duit"},a),{},{type:"number",name:"sale_price"}))})},A.OnSaleCheckboxField=function(e){var r=e.label,t=e.text,n=e.error,a=(0,l.Z)(e,Z);return(0,m.jsx)(s.ZP.Field,{label:r,text:t,error:n,checkbox:!0,children:(0,m.jsx)(s.ZP.Checkbox,(0,i.Z)((0,i.Z)({},a),{},{name:"is_on_sale"}))})},A.PresaleCheckboxField=function(e){var r=e.label,t=e.text,n=e.error,a=(0,l.Z)(e,g);return(0,m.jsx)(s.ZP.Field,{label:r,text:t,error:n,checkbox:!0,children:(0,m.jsx)(s.ZP.Checkbox,(0,i.Z)((0,i.Z)({},a),{},{name:"is_pre_sale"}))})},A.PresaleTextField=function(e){var r=e.label,t=e.text,n=e.error,a=(0,l.Z)(e,_);return(0,m.jsx)(s.ZP.Field,{label:r,text:t,error:n,children:(0,m.jsx)(s.ZP.TextAreaX,(0,i.Z)((0,i.Z)({placeholder:""},a),{},{name:"is_pre_sale_text","aria-describedby":"is_pre_sale_text_label"}))})},A.RetailPriceField=function(e){var r=e.label,t=e.text,n=e.error,a=(0,l.Z)(e,P);return(0,m.jsx)(s.ZP.Field,{label:r,text:t,error:n,children:(0,m.jsx)(s.ZP.Text,(0,i.Z)((0,i.Z)({required:!0,placeholder:"Prix","aria-describedby":"retail_price_label",min:"0",step:"0.01"},a),{},{type:"number",name:"retail_price"}))})},A.StageSelectField=function(e){var r,t=e.label,n=e.text,c=e.error,o=e.stages,u=(0,l.Z)(e,y);return(0,m.jsx)(s.ZP.Field,{label:t,text:n,error:c,children:(0,m.jsx)(s.ZP.Select,(0,i.Z)((0,i.Z)({required:!0,name:"stage",nullValue:{label:"Select stage"}},u),{},{children:null===o||void 0===o||null===(r=o.map)||void 0===r?void 0:r.call(o,(function(e){return(0,a.createElement)(s.ZP.Option,(0,i.Z)((0,i.Z)({},e),{},{key:e.value}))}))}))})};var E=function e(r){var t=r.children,c=(0,l.Z)(r,S),o=(0,d.lr)(),u=(0,n.Z)(o,2),x=u[0],p=u[1],h=a.useState(x.get("q")||""),v=(0,n.Z)(h,2),f=v[0],j=v[1],b=c.categories,Z=(0,l.Z)(c,F);return(0,m.jsx)("form",(0,i.Z)((0,i.Z)({},Z),{},{action:".",method:"GET",onSubmit:function(e){e.preventDefault(),f?x.set("q",f):x.delete("q"),x.delete("page"),p(x)},children:t||(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)("div",{className:"mb-1 d-flex ",children:[(0,m.jsx)("input",{type:"text",name:"q",value:f,onChange:function(e){var r=e.target.value;j(r),!r&&x.get("q")&&x.delete("q")},className:"miq-form-input flex-1",placeholder:"Cherchez un produit par nom, categorie ou numero de serie ..."}),(0,m.jsx)(s.ZP.Submit,{value:"Search",className:"btn-primary-3 ms-1"})]}),b&&(0,m.jsx)(e.Category,{params:x,setParams:p,categories:b}),(0,m.jsx)(e.Published,{params:x,setParams:p}),(0,m.jsx)(e.Sale,{params:x,setParams:p}),(0,m.jsx)(e.PreSale,{params:x,setParams:p})]})}))};E.Category=function(e){var r=e.categories,t=(0,l.Z)(e,k);return(0,m.jsx)(w,(0,i.Z)((0,i.Z)({emptyLabel:"Categorie ..."},t),{},{name:"cat",children:r.items.map((function(e){return(0,m.jsx)("option",{value:e.value,children:e.label},e.slug)}))}))},E.Published=function(e){return(0,m.jsxs)(w,(0,i.Z)((0,i.Z)({emptyLabel:"Tous les produits ..."},e),{},{name:"published",children:[(0,m.jsx)("option",{value:"include",children:"Produits publi\xe9s"}),(0,m.jsx)("option",{value:"exclude",children:"Produits non publi\xe9s"})]}))};var w=function(e){var r=e.children,t=(0,l.Z)(e,N),n=t.name,i=t.params,a=t.setParams,s=t.emptyLabel;return(0,m.jsxs)("select",{className:"miq-select",name:n,value:i.get(n)||"",onChange:function(e){var r=e.target.value;r?i.set(n,r):i.delete(n),i.delete("page"),a(i)},children:[s&&(0,m.jsx)("option",{value:"",children:s}),r]})};E.PreSale=function(e){return(0,m.jsx)(D,(0,i.Z)((0,i.Z)({},e),{},{name:"presale",label:"En pr\xe9-vente"}))},E.Sale=function(e){return(0,m.jsx)(D,(0,i.Z)((0,i.Z)({},e),{},{name:"sale",label:"En promo"}))};var D=function(e){var r=e.label,t=e.name,n=e.params,i=e.setParams,l=e.inputId;return(0,m.jsxs)("div",{className:(0,c.UT)(["miq-query-filter-toggle d-flex align-items-center"]),children:[(0,m.jsx)("input",{type:"checkbox",className:"miq-checkbox me-1",id:l,onChange:function(e){var r=e.target.checked;r?n.set(t,"".concat(r)):n.delete(t),n.delete("page"),i(n)},checked:Boolean(n.get(t))||!1}),(0,m.jsx)("label",{htmlFor:l,children:r})]})}},7825:function(e,r,t){t.r(r),t.d(r,{SupplierOrder:function(){return u.e},default:function(){return m}});var n=t(8519),i=t(6009),l=(t(2411),t(2134)),a=t(2782),s=t(2145),c=t(1408),o=t(6520),u=t(3432),d=t(2379),x=t(8136),p=function(e){var r=e.instance,t=e.onSuccess,n=e.onError,i=e.label;return(0,x.jsxs)(d.pu,{renderHeader:function(){return(0,x.jsxs)("div",{children:["Supprimer '",r.name,"'"]})},renderFooter:function(e){var i=e.setOpen;return(0,x.jsxs)("div",{className:"d-flex justify-content-between align-items-center",children:[(0,x.jsx)(d.zx,{onClick:function(){return i(!1)},children:"Annuler"}),(0,x.jsx)(d.zx,{onClick:function(){return function(e){r.destroy().then((function(r){null===e||void 0===e||e(!1),null===t||void 0===t||t(r)})).catch((function(e){return null===n||void 0===n?void 0:n(e)}))}(i)},className:"btn-danger",children:"Supprimer"})]})},render:function(){return(0,x.jsx)("div",{className:"p-3",children:"Are you sure you want to delete this"})},className:(0,s.UT)(["s-order-delete-button btn-danger-3",e.className]),children:[(0,x.jsx)(d.PJ.rF,{}),i&&(0,x.jsx)("span",{className:"label",children:i})]})};function m(){var e=(0,o.s0)(),r=(0,c.lr)(),t=(0,i.Z)(r,1)[0].get("page"),m=(0,l.QT)((function(){return(0,u.e)().list({params:{page:t}})}),{refreshDeps:[t]}),v=m.res,f=m.removeItem,j=new s.HM(v);return j.isSuccess?(0,x.jsx)(a.ZP.View,{title:"Orders",back:"/staff/store/",actions:(0,x.jsx)(a.ZP.Button,{onClick:function(){(0,u.e)().create({}).then((function(r){var t=r.data;return e("".concat(t.slug,"/"))})).catch((function(e){}))},className:"btn-primary-3",requiredPerms:["store.add_supplierorder"],title:"Add a new order",children:"Add order"}),requiredPerms:["store.view_supplierorder"],children:(0,x.jsx)(a.ZP.Section,{footer:(0,x.jsx)(d.tl,(0,n.Z)((0,n.Z)({},j.data),{},{component:a.ZP.Link,to:!0})),children:(0,x.jsx)(d.iA,{border:!0,items:j.items,header:(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(d.iA.Th,{}),(0,x.jsx)(d.iA.Th,{children:"Items"}),(0,x.jsx)(d.iA.Th,{children:"Total Cost"}),(0,x.jsx)(d.iA.Th,{children:"Est. Revenue"}),(0,x.jsx)(d.iA.Th,{})]}),renderItem:function(e){var r=e.name,t=void 0===r?"New order":r,i=e.slug,l=e.is_paid,c=e.items,o=e.items_revenue;return(0,x.jsxs)(d.iA.Tr,{children:[(0,x.jsxs)(d.iA.Td,{children:[(0,x.jsx)(a.ZP.Link,{to:"".concat(i,"/"),className:"",children:(0,x.jsx)("div",{className:(0,s.UT)(["fw-bold text-ellipsis",l&&"text-line-through"]),children:t})}),(0,x.jsx)("span",{className:"text-sm",children:e.avg_cost})]}),(0,x.jsx)(d.iA.Td,{children:null===c||void 0===c?void 0:c.length}),(0,x.jsx)(d.iA.Td,{children:(0,x.jsx)(h,(0,n.Z)({},e.total_cost_data))}),(0,x.jsx)(d.iA.Td,{children:(0,x.jsx)(h,(0,n.Z)({},o))}),(0,x.jsx)(d.iA.Td,{children:(0,x.jsx)(p,{instance:(0,u.e)(e),onSuccess:function(){return null===f||void 0===f?void 0:f({slug:i})}})})]},i)},className:"w-100"})})}):null}var h=function(e){var r=e.amountWithSymbol;return(0,x.jsx)("div",{className:"miq-price",children:r})}},3432:function(e,r,t){t.d(r,{e:function(){return d}});var n=t(8519),i=t(1135),l=t(7411),a=t(2518),s=t(2485),c=t(2782),o=1e4,u=function(e){(0,a.Z)(t,e);var r=(0,s.Z)(t);function t(){return(0,i.Z)(this,t),r.apply(this,arguments)}return(0,l.Z)(t,[{key:"postFnova",value:function(e){return this.post("".concat(this._path,"fnova/"),{url:e},{timeout:o})}},{key:"postPlt",value:function(e){return this.post("".concat(this._path,"plt/"),{url:e},{timeout:o})}},{key:"postShein",value:function(e){return this.post("".concat(this._path,"shein/"),{url:e},{timeout:o})}},{key:"destroyItem",value:function(e){return this.delete("".concat(this._path,"item/").concat(e,"/"),{timeout:o})}},{key:"updateItem",value:function(e,r){return this.post("".concat(this._path,"item/").concat(e,"/"),(0,n.Z)({},r),{timeout:o})}}]),t}(c.x5),d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,c.eR)(e,"supplierorders",u)}}}]);
//# sourceMappingURL=85.a5ef8e0d.chunk.js.map