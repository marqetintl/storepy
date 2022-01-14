(this["webpackJsonp@store/clientjs"]=this["webpackJsonp@store/clientjs"]||[]).push([[14],{342:function(e,t,r){"use strict";r.d(t,"b",(function(){return c})),r.d(t,"a",(function(){return o}));var c={base:"/staff/shop/",orderUpdate:function(e){return this.update(this.orderList(),e)},orderList:function(){return this.list("orders/")},productUpdate:function(e){return this.update(this.productList(),e)},productList:function(){return this.list("products/")},categoryList:function(){return this.list("categories/")},categoryUpdate:function(e){return this.update(this.categoryList(),e)},update:function(e,t){return"".concat(e).concat(t,"/")},list:function(e){return"".concat(this.base).concat(e)}},o={order:{update_success:"Order updated.",update_error:"Could not update order."},product:{create_success:"Product created.",create_error:"Could not create product.",update_success:"Product updated.",update_error:"Could not update product.",publish_success:"Product published.",unpublish_success:"Product unpublished.",publish_error:"Could not publish product.",publish_error_retail_price:"You can not publish a product without price.",publish_error_category:"You can not publish a product without category.",publish_error_page:"You can not publish a product without page",delete_success:"Product deleted",delete_error:"Could not delete product.",cover_create_success:"Product cover added.",cover_update_success:"Product cover updated.",cover_update_error:"Could not upload cover image.",cover_delete_success:"Product cover deleted.",page_update_success:"Product page updated.",page_update_error:"Could not update page."},wrong:"Something went wrong.",default:"Something went awfully wrong!"}},377:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return j}));var c=r(1),o=r(2),s=r(10),u=r(9),n=r(3),i=r(5),a=r(342),d=r(0),p=Object(o.lazy)((function(){return r.e(8).then(r.bind(null,358))})),l=Object(o.lazy)((function(){return r.e(11).then(r.bind(null,360))})),b=Object(o.lazy)((function(){return r.e(7).then(r.bind(null,361))}));function j(e){var t=Object(i.x)(),r=e.match,j=r.path,h=r.url;return Object(d.jsx)(i.w,{context:t,children:Object(d.jsx)(o.Suspense,{fallback:Object(d.jsx)(i.p,{}),children:Object(d.jsxs)(s.c,{children:[Object(d.jsx)(u.e,{path:"".concat(a.b.orderList()),render:function(e){return Object(d.jsx)(b,Object(c.a)({back:Object(n.g)(h)},e))},requiredPerms:["shop.view_supplierorder"]}),Object(d.jsx)(u.e,{path:"".concat(a.b.categoryList()),render:function(e){return Object(d.jsx)(l,Object(c.a)({back:Object(n.g)(h)},e))},requiredPerms:["shop.view_category"]}),Object(d.jsx)(u.e,{path:"".concat(a.b.productList()),render:function(e){return Object(d.jsx)(p,Object(c.a)({back:Object(n.g)(h)},e))},requiredPerms:["shop.view_product"]}),Object(d.jsx)(u.e,{path:j,requiredPerms:["shop.view_product"],children:Object(d.jsxs)(u.g,{title:"Store",back:"/staff/",className:"miq-container-fluid",children:[Object(d.jsx)(u.g.Section,{title:"Carts",actions:Object(d.jsx)(u.d,{to:Object(n.g)("".concat(j,"carts")),label:"View carts",requiredPerms:["shop.view_cart"],className:"btn-primary-3"})}),Object(d.jsx)(u.g.Section,{title:"Supplier Orders",actions:Object(d.jsx)(u.d,{to:Object(n.g)("".concat(j,"orders")),label:"View orders",requiredPerms:["shop.view_supplierorder"],className:"btn-primary-3"})}),Object(d.jsx)(u.g.Section,{title:"Products",actions:Object(d.jsx)(u.d,{to:Object(n.g)("".concat(j,"products")),label:"View products",requiredPerms:["shop.view_product"],className:"btn-primary-3"})}),Object(d.jsx)(u.g.Section,{title:"Categories",actions:Object(d.jsx)(u.d,{to:Object(n.g)("".concat(j,"categories")),label:"View categories",requiredPerms:["shop.view_category"],className:"btn-primary-3"})})]})})]})})})}}}]);
//# sourceMappingURL=14.5dd4b440.chunk.js.map