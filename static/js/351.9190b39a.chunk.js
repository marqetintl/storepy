"use strict";(self.webpackChunk_storepy_clientjs=self.webpackChunk_storepy_clientjs||[]).push([[351],{3351:function(e,t,r){r.r(t),r.d(t,{default:function(){return y}});var s=r(8312),n=r(6009),a=r(8519),i=(r(2411),r(1408)),c=r(6520),u=r(2782),l=r(5603),o=r(2134),d=r(2379),p=r(2145),_=r(3793),v=r(6574),m=r(1823),f=r(421),g=r(3992),b=r(8136),h=["res","setRes","loading"],x=[].concat(["name","category","description","retail_price","is_pre_sale","is_pre_sale_text","is_pre_sale_dt","is_oos","is_on_sale","sale_price"],["cost","color_group_pk","stage"],["supplier_name","supplier_item_id","supplier_item_sn","supplier_item_category","supplier_item_url","supplier_item_cost","supplier_item_cost_currency","supplier_order_id"],["meta_title","meta_description","meta_slug"]),j={retail_price:0,is_pre_sale:!1,sale_price:0,is_on_sale:!1,is_published:!1},Z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t={};return x.forEach((function(r){var s,n=null===e||void 0===e?void 0:e[r];null!=n?t[r]=n:t[r]=null!==(s=j[r])&&void 0!==s?s:""})),(0,a.Z)((0,a.Z)({},j),t)};function y(e){var t,r=e.back,x=(0,c.UO)().prodSlug,j=(0,i.lr)(),y=(0,n.Z)(j,1)[0],w=(0,c.s0)(),N=(0,l.cI)(Z()),S=(0,o.QT)((function(){return(0,_.Z)({slug:x}).retrieve()}),{refreshDeps:[x],onSuccess:function(e){var t=e.data;return N.setValues(Z(t))},onError:function(e){var t=e.response;if(404===(null===t||void 0===t?void 0:t.status))return w("../")}}),Q=S.res,E=S.setRes,P=S.loading,$=(0,s.Z)(S,h),C=new p.HM(Q);if(!C.isSuccess)return null;if(P)return(0,b.jsx)(d.gb,{});var D=(0,_.Z)(C.data),I=function(e){$.updateData(e),g.u.update(e)},R=y.get("tab"),q={instance:D,form:N,setRes:E,onUpdate:I,navigate:w,back:r,params:y,tab:R,categories:null===C||void 0===C||null===(t=C.data)||void 0===t?void 0:t.categories};return(0,b.jsx)(u.ZP.View,{back:"".concat((0,p.Xs)(r)).concat("".concat(y)?"?".concat(y):""),title:(0,b.jsx)(f.wP,{data:(0,a.Z)({},D.export())}),requiredPerms:["store.change_product"],className:"product-staff-update-view",children:(0,b.jsx)(u.ZP.Section,{title:(0,b.jsx)("div",{className:"mb-1",children:k}),actions:D.is_published?(0,b.jsx)(v.Ko,{instance:D,onSuccess:function(e){var t=e.data;return I(t)},children:"D\xe9publier ce produit"}):(0,b.jsx)(v.H5,{instance:D,onSuccess:function(e){var t=e.data;return I(t)},onError:function(e){return N.handleError(e)},children:"Publier ce produit"}),children:function(){switch(R){case"inventory":return(0,b.jsx)(m.W2,(0,a.Z)({},q));case"settings":return(0,b.jsx)(m.CW,(0,a.Z)({},q));case"media":return(0,b.jsx)(m.EJ,(0,a.Z)({},q));default:return(0,b.jsx)(m.wQ,(0,a.Z)({},q))}}()})})}var k=(0,b.jsxs)("div",{className:"query-buttons",children:[(0,b.jsx)(d.$Q,{index:!0,target:"tab",className:"btn-md",children:"Info"}),(0,b.jsx)(d.$Q,{target:"tab",value:"media",className:"btn-md",children:"Media"}),(0,b.jsx)(d.$Q,{target:"tab",value:"inventory",className:"btn-md",children:"Inventory"}),(0,b.jsx)(d.$Q,{target:"tab",value:"settings",className:"btn-md",children:"Settings"})]})}}]);
//# sourceMappingURL=351.9190b39a.chunk.js.map