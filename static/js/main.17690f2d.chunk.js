(this["webpackJsonpsalad-orders"]=this["webpackJsonpsalad-orders"]||[]).push([[0],{24:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),i=n(7),a=n.n(i),s=(n(24),n(6)),o=n(2),d=n(1);var l=function(){var e="/"===Object(o.e)().pathname;return Object(d.jsxs)("section",{children:[Object(d.jsx)("h1",{children:"The salad boutique"}),e&&Object(d.jsxs)("div",{className:"welcome",children:[Object(d.jsx)("h2",{children:"Welcome to the salad boutique!"}),Object(d.jsx)("p",{children:"If you're interested in a delicious and nutritious salad - you've come to the right place!"}),Object(d.jsx)("p",{children:"Click on the 'order salad' link to choose some of the most breathtaking ingredients for the salad of your dreams"}),Object(d.jsx)(s.b,{className:"link-button",to:"/ingredients",children:"Order Salad"})]})]})},u=n(3),j=n(9),h=n.n(j),b=n(13),O=n(11);function m(){return x.apply(this,arguments)}function x(){return(x=Object(b.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("salad.json");case 2:return t=e.sent,e.next=5,t.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var f=Object(O.b)("order/getIngredients",Object(b.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m();case 2:return t=e.sent,e.abrupt("return",t.items);case 4:case"end":return e.stop()}}),e)})))),v=Object(O.c)({name:"order",initialState:{ingredients:[],status:"idle",user:[],showModal:!1},reducers:{updateQuantity:function(e,t){var n=t.payload.ingredient,r=t.payload.quantity;if(void 0!==n&&void 0!==r){var c=e.ingredients.findIndex((function(e){return e.name===n}));e.ingredients[c].quantity=r}},resetOrder:function(e){e.ingredients=e.ingredients.map((function(e){return delete e.quantity,e})),e.user=[],e.showModal=!1},setUserDetails:function(e,t){e.user={name:t.payload.name,email:t.payload.email,note:t.payload.note}},toggleModal:function(e){e.showModal=!e.showModal}},extraReducers:function(e){e.addCase(f.pending,(function(e){e.status="loading"})).addCase(f.fulfilled,(function(e,t){e.status="idle",e.ingredients=t.payload}))}}),p=v.actions,g=p.updateQuantity,y=p.resetOrder,N=p.setUserDetails,k=p.toggleModal,w=function(e){return e.order.ingredients},C=function(e){return e.order.user},q=function(e){return e.order.status},S=function(e){return e.order.showModal},M=v.reducer;function E(){var e=Object(u.c)(w),t=Object(u.c)(q),n=Object(u.b)();return Object(r.useEffect)((function(){e.length>0||n(f())}),[n,e]),Object(d.jsx)("div",{children:"loading"===t?Object(d.jsx)("div",{className:"loading",children:"Loading..."}):Object(d.jsx)("ul",{className:"order-list",children:(null===e||void 0===e?void 0:e.length)>0&&e.map((function(e){var t=e.name;return Object(d.jsxs)("li",{className:"order-item",children:[Object(d.jsx)("span",{children:t}),Object(d.jsx)("input",{type:"number",min:"0",onChange:function(e){return n(g({ingredient:t,quantity:Number(e.target.value)}))}})]},t)}))})})}var I=function(){var e=Object(u.c)(w);return Object(d.jsxs)("section",{children:[Object(d.jsx)("h2",{children:"Ingredients"}),Object(d.jsx)("p",{children:"Please enter how many of each ingredient you would like for your delicious salad"}),Object(d.jsx)(E,{}),e.some((function(e){return e.quantity}))&&Object(d.jsx)(s.b,{className:"link-button",to:"/checkout",children:"Proceed to Checkout"})]})};var F=function(){var e,t=Object(u.c)(w),n=0;return Object(d.jsxs)("table",{children:[Object(d.jsx)("thead",{children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:"Ingredient"}),Object(d.jsx)("th",{children:"Quantity"}),Object(d.jsx)("th",{children:"Price"})]})}),Object(d.jsx)("tbody",{children:(null===t||void 0===t?void 0:t.length)>0&&t.filter((function(e){return e.quantity>0})).map((function(t){var r=t.name,c=t.price,i=t.quantity;return Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{className:"ingredient",children:r}),Object(d.jsx)("td",{className:"quantity",children:i}),Object(d.jsx)("td",{className:"price",children:(e=c*i,n+=e,e.toFixed(2))})]},r)}))}),Object(d.jsx)("tfoot",{children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:"Total Price:"}),Object(d.jsx)("td",{children:n.toFixed(2)})]})})]})},P=n(19);var R=function(){var e=Object(r.useState)(!1),t=Object(P.a)(e,2),n=t[0],c=t[1],i=Object(r.useRef)(),a=Object(r.useRef)(),s=Object(r.useRef)(),o=Object(u.b)();function l(){""!==i.current.value&&/^\S+@\S+\.\S+$/.test(a.current.value)?c(!0):c(!1)}return Object(d.jsxs)("form",{className:"checkout-form",onSubmit:function(e){e.preventDefault(),o(N({name:i.current.value,email:a.current.value,note:s.current.value})),o(k())},children:[Object(d.jsxs)("div",{className:"form-field",children:[Object(d.jsx)("label",{htmlFor:"name",children:"Name:"}),Object(d.jsx)("input",{type:"text",id:"name",ref:i,onChange:l})]}),Object(d.jsxs)("div",{className:"form-field",children:[Object(d.jsx)("label",{htmlFor:"email",children:"Email:"}),Object(d.jsx)("input",{type:"email",id:"email",ref:a,onChange:l})]}),Object(d.jsxs)("div",{className:"form-field text-area",children:[Object(d.jsx)("label",{htmlFor:"note",children:"Additional Notes:"}),Object(d.jsx)("textarea",{placeholder:"What's on your mind?",id:"note",ref:s,onChange:l})]}),Object(d.jsx)("button",{className:"btn-primary",disabled:!n,children:"Order"})]})};var W=function(e){var t=document.createElement("div");return t.classList.add("modal"),Object(r.useEffect)((function(){var e=document.getElementById("modal-root");return e.appendChild(t),function(){e.removeChild(t)}}),[t]),a.a.createPortal(e.children,t)};var B=function(){var e,t=Object(u.c)(C),n=Object(u.c)(S),r=Object(u.b)();return Object(d.jsxs)("div",{children:[Object(d.jsx)("h2",{children:"Checkout"}),Object(d.jsxs)("div",{className:"checkout",children:[Object(d.jsx)(F,{}),Object(d.jsx)(R,{})]}),n&&Object(d.jsx)(W,{children:Object(d.jsxs)("section",{className:"modal-content",children:[Object(d.jsx)("header",{children:Object(d.jsx)("h2",{children:"Order Summary"})}),Object(d.jsxs)("div",{children:["Name: ",t.name]}),Object(d.jsxs)("div",{children:["Email: ",t.email]}),(null===(e=t.note)||void 0===e?void 0:e.length)>0&&Object(d.jsxs)("div",{children:["Note: ",t.note]}),Object(d.jsx)(F,{}),Object(d.jsx)("div",{children:"Thanks for shopping at the salad boutique!"}),Object(d.jsx)("div",{children:"Your delivery is on the way!"}),Object(d.jsx)(s.b,{className:"link-button",onClick:function(){return r(y())},to:"/",children:"Close"})]})})]})};n(32);var D=function(){return Object(d.jsx)(s.a,{children:Object(d.jsxs)("div",{className:"app",children:[Object(d.jsx)(o.a,{path:"/",children:Object(d.jsx)(l,{})}),Object(d.jsx)(o.a,{path:"/ingredients",children:Object(d.jsx)(I,{})}),Object(d.jsx)(o.a,{path:"/checkout",children:Object(d.jsx)(B,{})})]})})},Q=Object(O.a)({reducer:{order:M}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(u.a,{store:Q,children:Object(d.jsx)(D,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[33,1,2]]]);
//# sourceMappingURL=main.17690f2d.chunk.js.map