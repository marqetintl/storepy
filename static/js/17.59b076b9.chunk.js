(this["webpackJsonp@store/client"]=this["webpackJsonp@store/client"]||[]).push([[17],{356:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return x}));var n=a(1),c=a(4),s=a(10),i=a(2),l=a(13),o=a(8),r=a(5),d=a(32),b=a(31),u=a(49),m=a(0),j=["isUpdated"],g=["isUpdated"];function x(e){var t=Object(i.useContext)(r.v),a=Object(i.useContext)(l.a),x=Object(i.useState)({}),p=Object(s.a)(x,2),O=p[0],h=p[1],f=a.site,v=void 0===f?{}:f,S=Object(o.c)({name:v.name,domain:v.domain,contact_email:O.contact_email||"",ga_tracking:O.ga_tracking||"",fb_pixel:O.fb_pixel||""}),_=v.settings,N=null===v||void 0===v?void 0:v.name,k=null===v||void 0===v?void 0:v.domain,y=S.setValues;if(Object(i.useEffect)((function(){b.a.detail(_).then((function(e){e.slug&&(h(e),y({name:N||"",domain:k||"",contact_email:e.contact_email||"",ga_tracking:e.ga_tracking||"",fb_pixel:e.fb_pixel||""}))})).catch((function(e){}))}),[_,y,N,k]),!O.slug)return null;return Object(m.jsxs)(d.a,{title:"Site General Settings",children:[Object(m.jsxs)("div",{className:"d-grid grid-md-4 gap-2",children:[Object(m.jsx)(o.b,{context:S,onSubmit:function(e){return e.preventDefault(),b.a.patchSite(_,{name:S.values.name,domain:S.values.domain},{name:v.name,domain:v.domain}).then((function(e){var n=e.isUpdated,s=Object(c.a)(e,j);n&&(a.updateSite(s.site),t.success({message:"Site updated."}))})).catch((function(e){return S.handleError(e)}))},className:"span-md-3",children:Object(m.jsxs)(d.a.Section,{title:"Site Details",children:[Object(m.jsxs)("div",{className:"mb-1",children:[Object(m.jsx)(o.b.Label,{value:"Site name"}),Object(m.jsx)(o.b.TextInput,{required:!0,name:"name",error:S.errors.name,disabled:!Boolean(v.settings)})]}),Object(m.jsxs)("div",{className:"mb-1",children:[Object(m.jsx)(o.b.Label,{value:"Site domain"}),Object(m.jsx)(o.b.TextInput,{required:!0,name:"domain",error:S.errors.domain,disabled:!Boolean(v.settings)})]}),Object(m.jsx)("div",{className:"",children:Object(m.jsx)(o.b.Submit,{value:"Save",className:"btn btn-primary-2"})})]})}),Object(m.jsx)(d.a.Section,{title:"Site logo",className:"span-md-1",children:Object(m.jsx)(r.k,{slug:O&&O.logo_data?O.logo_data.slug:null,onCreate:function(e){return b.a.patch(O.slug,{logo:e.slug}).then((function(e){h(e),t.success({message:"Logo added."})})).catch((function(e){}))},onUpdate:function(e){h(Object(n.a)(Object(n.a)({},O),{},{logo_data:e})),t.success({message:"Logo updated."})},className:"site-logo-upload-button",children:Object(m.jsx)(r.h,Object(n.a)(Object(n.a)({},O.logo_data),{},{className:"site-logo"}))})})]}),Object(m.jsx)(u.b,{ctx:a,setting:O,setSetting:h,toast:t}),Object(m.jsxs)(o.b,{context:S,onSubmit:function(e){e.preventDefault();var a={};return Object.keys(S.values).forEach((function(e){a[e]=O[e]})),b.a.patch(O.slug,S.values,a).then((function(e){var a=e.isUpdated,n=Object(c.a)(e,g);a&&(h&&h(n),t&&t.success({message:"Site updated."}))})).catch((function(e){return S.handleError(e)}))},className:"d-grid grid-md-2 gap-2",children:[Object(m.jsx)(d.a.Section,{title:"Contact",text:"What's the best way to contact you?",children:Object(m.jsx)(o.b.TextInput,{name:"contact_email",type:"email",error:S.errors.contact_email,placeholder:"Write your contact email ..."})}),Object(m.jsx)(d.a.Section,{title:"Social",text:"Display Your social media accounts.",className:"span-md-1"}),Object(m.jsxs)(d.a.Section,{title:"Analytics",text:"Set up third-party analytics.",className:"span-md-2",children:[Object(m.jsx)(o.b.Field,{label:"Google Analytics Tracking Number",children:Object(m.jsx)(o.b.TextInput,{name:"ga_tracking",error:S.errors.ga_tracking})}),Object(m.jsx)(o.b.Field,{label:"Facebook Pixel",children:Object(m.jsx)(o.b.TextInput,{name:"fb_pixel",error:S.errors.fb_pixel})}),Object(m.jsx)("div",{className:"",children:Object(m.jsx)(o.b.Submit,{value:"Save",className:"btn btn-primary-2"})})]})]})]})}}}]);
//# sourceMappingURL=17.59b076b9.chunk.js.map