"use strict";(self.webpackChunk_storepy_clientjs=self.webpackChunk_storepy_clientjs||[]).push([[362],{3362:function(e,t,n){n.r(t),n.d(t,{default:function(){return b}});var r=n(8519),i=n(8312),a=n(6009),s=n(2379),c=n(9002),u=n(5603),l=n(2134),o=n(2411),d=n(1408),h=n(2782),v=n(7089),f=n(8136),p=["children"],x=["instance","fields","preview"];function b(e){var t=(0,d.lr)(),n=(0,a.Z)(t,1)[0],r=o.useState(!0),i=(0,a.Z)(r,2),u=i[0],p=i[1],x=o.useContext(c.h2).site.settings,b=(0,l.QT)((function(){return(0,v.pE)({slug:x}).retrieve()}),{refreshDeps:[x]}),Z=b.res;b.updateData;if(!Z||!Z.data)return null;var g=(0,v.pE)(Z.data),P=n.get("tab"),y=(0,f.jsx)(s.zx,{onClick:function(){return p(!u)},children:"Preview"});switch(P){case"privacy":return(0,f.jsx)(j,{back:"../",children:(0,f.jsx)(h.ZP.Section,{title:"Privacy policy"})});case"terms":return(0,f.jsx)(j,{back:"../",children:(0,f.jsx)(h.ZP.Section,{title:"Terms and conditions"})});default:return(0,f.jsx)(j,{back:"../",children:(0,f.jsx)(h.ZP.Section,{title:"About",actions:y,children:(0,f.jsx)(m,{instance:g,preview:u,fields:["about"]})})})}}var j=function(e){var t=e.children,n=(0,i.Z)(e,p);return(0,f.jsx)(h.ZP.View,(0,r.Z)((0,r.Z)({title:"Pages"},n),{},{children:(0,f.jsx)(h.ZP.Section,{children:t,header:(0,f.jsxs)("div",{className:"d-flex align-items-center border-bottom pb-2 mb-2",children:[(0,f.jsx)(s.$Q,{index:!0,target:"tab",className:"me-1",children:"About"}),(0,f.jsx)(s.$Q,{target:"tab",value:"privacy",className:"me-1",children:"Privacy"}),(0,f.jsx)(s.$Q,{target:"tab",value:"terms",className:"me-1",children:"Terms"}),(0,f.jsx)(s.$Q,{target:"tab",value:"faq",children:"Faq"})]})})}))},m=function(e){var t=e.instance,n=e.fields,r=e.preview,a=((0,i.Z)(e,x),(0,u.cI)({about:(null===t||void 0===t?void 0:t.about)||""}));if(r)return(0,f.jsx)("div",{dangerouslySetInnerHTML:{__html:a.values.about||"Nothing to preview ..."}});var s;return(0,f.jsxs)(u.ZP,{context:a,onSubmit:function(e){return e.preventDefault(),t.updatePages(a.values).then((function(e){})).catch((function(e){}))},children:[(s="about",n.includes("".concat(s))&&(0,f.jsx)(u.ZP.Field,{children:(0,f.jsx)(u.ZP.TextAreaX,{name:"about",mirror:a.values.about})})),(0,f.jsx)("div",{className:"my-3",children:(0,f.jsx)(u.ZP.Submit,{value:"Update"})})]})}},7089:function(e,t,n){n.d(t,{gm:function(){return o},pE:function(){return l}});var r=n(1135),i=n(7411),a=n(2518),s=n(2485),c=n(4636),u=function(e){(0,a.Z)(n,e);var t=(0,s.Z)(n);function n(){return(0,r.Z)(this,n),t.apply(this,arguments)}return(0,i.Z)(n,[{key:"updatePages",value:function(e){return this.patch("".concat(this._path,"pages/"),e)}},{key:"updateSite",value:function(e){return this.patch("".concat(this._path,"site/"),e)}}]),n}(c.x5);function l(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,c.eR)(e,"settings/",u)}function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,c.eR)(e,"index/")}}}]);
//# sourceMappingURL=362.1794d585.chunk.js.map