(this["webpackJsonpcrwn-clothing"]=this["webpackJsonpcrwn-clothing"]||[]).push([[0],{46:function(e,t,a){e.exports=a(85)},55:function(e,t,a){},59:function(e,t,a){},60:function(e,t,a){},61:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){},67:function(e,t,a){},74:function(e,t,a){},75:function(e,t,a){},76:function(e,t,a){},77:function(e,t,a){},78:function(e,t,a){},79:function(e,t,a){},80:function(e,t,a){},81:function(e,t,a){},82:function(e,t,a){},83:function(e,t,a){},84:function(e,t,a){},85:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(22),i=a.n(c),l=a(10),s=a(4),o=a(35),m=(a(55),a(11)),u=a(36),p=a.n(u),d=a(25),b=a(5),g="SET_CURRENT_USER",h={currentUser:null},f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g:return Object(b.a)({},e,{currentUser:t.payload});default:return e}},E={TOGGLE_CART_HIDDEN:"TOGGLE_CART_HIDDEN",ADD_ITEM:"ADD_ITEM",CLEAR_ITEM:"CLEAR_ITEM",REMOVE_ITEM:"REMOVE_ITEM"},v=a(43),y=function(e,t){return e.find((function(e){return t.id===e.id}))?e.map((function(e){return e.id===t.id?Object(b.a)({},e,{quantity:e.quantity+1}):e})):[].concat(Object(v.a)(e),[Object(b.a)({},t,{quantity:1})])},O=function(e,t){return 1===e.find((function(e){return t.id===e.id})).quantity?e.filter((function(e){return e.id!==t.id})):e.map((function(e){return e.id===t.id?Object(b.a)({},e,{quantity:e.quantity-1}):e}))},k={hidden:!0,cartItems:[]},w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case E.TOGGLE_CART_HIDDEN:return Object(b.a)({},e,{hidden:!e.hidden});case E.ADD_ITEM:return Object(b.a)({},e,{cartItems:y(e.cartItems,t.payload)});case E.CLEAR_ITEM:return Object(b.a)({},e,{cartItems:e.cartItems.filter((function(e){return e.id!==t.payload.id}))});case E.REMOVE_ITEM:return Object(b.a)({},e,{cartItems:O(e.cartItems,t.payload)});default:return e}},N=a(37),j={sections:[{title:"hats",imageUrl:"https://i.ibb.co/cvpntL1/hats.png",id:1,linkUrl:"hats"},{title:"jackets",imageUrl:"https://i.ibb.co/px2tCc3/jackets.png",id:2,linkUrl:""},{title:"sneakers",imageUrl:"https://i.ibb.co/0jqHpnp/sneakers.png",id:3,linkUrl:""},{title:"womens",imageUrl:"https://i.ibb.co/GCCdy8t/womens.png",size:"large",id:4,linkUrl:""},{title:"mens",imageUrl:"https://i.ibb.co/R70vBrQ/men.png",size:"large",id:5,linkUrl:""}]},U=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;return t.type,e},C={collections:{hats:{id:1,title:"Hats",routeName:"hats",items:[{id:10,name:"Brown Brim",imageUrl:"https://i.ibb.co/ZYW3VTp/brown-brim.png",price:25},{id:20,name:"Blue Beanie",imageUrl:"https://i.ibb.co/ypkgK0X/blue-beanie.png",price:18},{id:30,name:"Brown Cowboy",imageUrl:"https://i.ibb.co/QdJwgmp/brown-cowboy.png",price:35},{id:40,name:"Grey Brim",imageUrl:"https://i.ibb.co/RjBLWxB/grey-brim.png",price:25},{id:50,name:"Green Beanie",imageUrl:"https://i.ibb.co/YTjW3vF/green-beanie.png",price:18},{id:60,name:"Palm Tree Cap",imageUrl:"https://i.ibb.co/rKBDvJX/palm-tree-cap.png",price:14},{id:70,name:"Red Beanie",imageUrl:"https://i.ibb.co/bLB646Z/red-beanie.png",price:18},{id:80,name:"Wolf Cap",imageUrl:"https://i.ibb.co/1f2nWMM/wolf-cap.png",price:14},{id:90,name:"Blue Snapback",imageUrl:"https://i.ibb.co/X2VJP2W/blue-snapback.png",price:16}]},sneakers:{id:2,title:"Sneakers",routeName:"sneakers",items:[{id:11,name:"Adidas NMD",imageUrl:"https://i.ibb.co/0s3pdnc/adidas-nmd.png",price:220},{id:21,name:"Adidas Yeezy",imageUrl:"https://i.ibb.co/dJbG1cT/yeezy.png",price:280},{id:31,name:"Black Converse",imageUrl:"https://i.ibb.co/bPmVXyP/black-converse.png",price:110},{id:41,name:"Nike White AirForce",imageUrl:"https://i.ibb.co/1RcFPk0/white-nike-high-tops.png",price:160},{id:51,name:"Nike Red High Tops",imageUrl:"https://i.ibb.co/QcvzydB/nikes-red.png",price:160},{id:61,name:"Nike Brown High Tops",imageUrl:"https://i.ibb.co/fMTV342/nike-brown.png",price:160},{id:71,name:"Air Jordan Limited",imageUrl:"https://i.ibb.co/w4k6Ws9/nike-funky.png",price:190},{id:81,name:"Timberlands",imageUrl:"https://i.ibb.co/Mhh6wBg/timberlands.png",price:200}]},jackets:{id:3,title:"Jackets",routeName:"jackets",items:[{id:12,name:"Black Jean Shearling",imageUrl:"https://i.ibb.co/XzcwL5s/black-shearling.png",price:125},{id:22,name:"Blue Jean Jacket",imageUrl:"https://i.ibb.co/mJS6vz0/blue-jean-jacket.png",price:90},{id:32,name:"Grey Jean Jacket",imageUrl:"https://i.ibb.co/N71k1ML/grey-jean-jacket.png",price:90},{id:42,name:"Brown Shearling",imageUrl:"https://i.ibb.co/s96FpdP/brown-shearling.png",price:165},{id:52,name:"Tan Trench",imageUrl:"https://i.ibb.co/M6hHc3F/brown-trench.png",price:185}]},womens:{id:4,title:"Womens",routeName:"womens",items:[{id:13,name:"Blue Tanktop",imageUrl:"https://i.ibb.co/7CQVJNm/blue-tank.png",price:25},{id:23,name:"Floral Blouse",imageUrl:"https://i.ibb.co/4W2DGKm/floral-blouse.png",price:20},{id:33,name:"Floral Dress",imageUrl:"https://i.ibb.co/KV18Ysr/floral-skirt.png",price:80},{id:43,name:"Red Dots Dress",imageUrl:"https://i.ibb.co/N3BN1bh/red-polka-dot-dress.png",price:80},{id:53,name:"Striped Sweater",imageUrl:"https://i.ibb.co/KmSkMbH/striped-sweater.png",price:45},{id:63,name:"Yellow Track Suit",imageUrl:"https://i.ibb.co/v1cvwNf/yellow-track-suit.png",price:135},{id:73,name:"White Blouse",imageUrl:"https://i.ibb.co/qBcrsJg/white-vest.png",price:20}]},mens:{id:5,title:"Mens",routeName:"mens",items:[{id:14,name:"Camo Down Vest",imageUrl:"https://i.ibb.co/xJS0T3Y/camo-vest.png",price:325},{id:24,name:"Floral T-shirt",imageUrl:"https://i.ibb.co/qMQ75QZ/floral-shirt.png",price:20},{id:34,name:"Black & White Longsleeve",imageUrl:"https://i.ibb.co/55z32tw/long-sleeve.png",price:25},{id:44,name:"Pink T-shirt",imageUrl:"https://i.ibb.co/RvwnBL8/pink-shirt.png",price:25},{id:54,name:"Jean Long Sleeve",imageUrl:"https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png",price:40},{id:64,name:"Burgundy T-shirt",imageUrl:"https://i.ibb.co/mh3VM1f/polka-dot-shirt.png",price:25}]}}},I=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0;return t.type,e},S={key:"root",storage:a.n(N).a,whitelist:["cart"]},x=Object(m.c)({user:f,cart:w,directory:U,shop:I}),T=Object(d.a)(S,x),R=[p.a],B=Object(m.d)(T,m.a.apply(void 0,R)),M=Object(d.b)(B),A=a(8),P=a.n(A),D=a(13),_=a(15),H=(a(59),a(14)),G=(a(60),a(61),Object(_.g)((function(e){var t=e.title,a=e.imageUrl,n=e.size,c=e.history,i=e.linkUrl,l=e.match;return r.a.createElement("div",{className:"".concat(n," menu-item"),onClick:function(){return c.push("".concat(l.url).concat(i))}},r.a.createElement("div",{className:"background-image",style:{backgroundImage:"url(".concat(a,")")}}),r.a.createElement("div",{className:"content"},r.a.createElement("h1",{className:"title"},t),r.a.createElement("span",{className:"subtitle"},"SHOP NOW")))}))),L=a(3),q=Object(L.a)([function(e){return e.directory}],(function(e){return e.sections})),W=Object(L.b)({sections:q}),V=Object(s.b)(W)((function(e){var t=e.sections;return r.a.createElement("div",{className:"directory-menu"},t.map((function(e){var t=e.id,a=Object(H.a)(e,["id"]);return r.a.createElement(G,Object.assign({key:t},a))})))})),J=function(e){return r.a.createElement("div",{className:"homepage"},r.a.createElement(V,null))},z=(a(63),a(64),a(65),a(66),function(e){var t=e.children,a=e.isGoogleSignIn,n=e.inverted,c=Object(H.a)(e,["children","isGoogleSignIn","inverted"]);return r.a.createElement("button",Object.assign({className:"\n        ".concat(n?"inverted":"","\n        ").concat(a?"google-sign-in":""," custom-button")},c),t)}),Y=function(){return{type:E.TOGGLE_CART_HIDDEN}},F=function(e){return{type:E.ADD_ITEM,payload:e}};var K=Object(s.b)(null,(function(e){return{addItem:function(t){return e(F(t))}}}))((function(e){var t=e.item,a=e.addItem,n=t.name,c=t.price,i=t.imageUrl;return r.a.createElement("div",{className:"collection-item"},r.a.createElement("div",{className:"image",style:{backgroundImage:"url(".concat(i,")")}}),r.a.createElement("div",{className:"collection-footer"},r.a.createElement("span",{className:"name"},n),r.a.createElement("span",{className:"price"},c)),r.a.createElement(z,{inverted:!0,onClick:function(){return a(t)}}," Add to cart"))}));var Q=function(e){var t=e.title,a=e.items;return r.a.createElement("div",{className:"collection-preview"},r.a.createElement("h1",{className:"title"},t.toUpperCase()),r.a.createElement("div",{className:"preview"},a.filter((function(e,t){return t<4})).map((function(e){return r.a.createElement(K,{key:e.id,item:e})}))))},X=Object(L.a)([function(e){return e.shop}],(function(e){return e.collections})),Z=Object(L.a)([X],(function(e){return Object.keys(e).map((function(t){return e[t]}))})),$=Object(L.b)({collections:Z}),ee=Object(s.b)($)((function(e){var t=e.collections;return r.a.createElement("div",{className:"collections-overview"},t.map((function(e){var t=e.id,a=Object(H.a)(e,["id"]);return r.a.createElement(Q,Object.assign({key:t},a))})))})),te=(a(67),Object(s.b)((function(e,t){return{collection:(a=t.match.params.collectionId,Object(L.a)([X],(function(e){return e[a]})))(e)};var a}))((function(e){var t=e.collection;if(t){var a=t.title,n=t.items;return r.a.createElement("div",{className:"collection-page"},r.a.createElement("h2",{className:"title"},a),r.a.createElement("div",{className:"items"},n.map((function(e){return r.a.createElement(K,{key:e.id,item:e})}))))}return r.a.createElement("h2",{className:"title",style:{textAlign:"center"}},"404 Collection Doesn't Exist")}))),ae=function(e){var t=e.match;return r.a.createElement("div",{className:"shop-page"},r.a.createElement(_.b,{exact:!0,path:"".concat(t.path),component:ee}),r.a.createElement(_.b,{path:"".concat(t.path,"/:collectionId"),component:te}))},ne=a(17),re=a.n(ne),ce=(a(68),a(72),{apiKey:"AIzaSyBPBM6oAnwrYxLtwbs3jHbopV5HrGtkCH0",authDomain:"crwn-clothing-6452c.firebaseapp.com",databaseURL:"https://crwn-clothing-6452c.firebaseio.com",projectId:"crwn-clothing-6452c",storageBucket:"crwn-clothing-6452c.appspot.com",messagingSenderId:"591637881998",appId:"1:591637881998:web:7ebbba574174c3dfe455df"}),ie=function(){var e=Object(D.a)(P.a.mark((function e(t,a){var n,r,c,i,l;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=re.a.firestore(),t){e.next=3;break}return e.abrupt("return");case 3:return r=n.doc("/users/".concat(t.uid)),e.next=6,r.get();case 6:if(e.sent.exists){e.next=18;break}return c=t.displayName,i=t.email,l=new Date,e.prev=10,e.next=13,r.set(Object(b.a)({displayName:c,email:i,createdAt:l},a));case 13:e.next=18;break;case 15:e.prev=15,e.t0=e.catch(10),console.log("error creating user",e.t0.message);case 18:return e.abrupt("return",r);case 19:case"end":return e.stop()}}),e,null,[[10,15]])})));return function(t,a){return e.apply(this,arguments)}}();re.a.initializeApp(ce);var le=re.a.auth(),se=(re.a.firestore(),new re.a.auth.GoogleAuthProvider);se.setCustomParameters({prompt:"select_account"});var oe=function(){return le.signInWithPopup(se)};re.a;function me(){return(me=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function ue(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var pe=r.a.createElement("title",null,"Group"),de=r.a.createElement("desc",null,"Created with Sketch."),be=r.a.createElement("g",{id:"WiP",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},r.a.createElement("g",{id:"Artboard",transform:"translate(-90.000000, -38.000000)"},r.a.createElement("g",{id:"Group",transform:"translate(90.000000, 38.000000)"},r.a.createElement("polygon",{id:"Rectangle",fill:"#808282",points:"3 14 25 26.5 47 14 40.855176 39 9.08421785 39"}),r.a.createElement("polygon",{id:"Triangle",fillOpacity:.262838724,fill:"#101A1A",points:"25 8 40 39 10 39"}),r.a.createElement("circle",{id:"Oval",fill:"#5E6363",cx:2,cy:9,r:2}),r.a.createElement("circle",{id:"Oval",fill:"#5E6363",cx:25,cy:2,r:2}),r.a.createElement("circle",{id:"Oval",fill:"#5E6363",cx:48,cy:9,r:2})))),ge=function(e){var t=e.svgRef,a=e.title,n=ue(e,["svgRef","title"]);return r.a.createElement("svg",me({width:"50px",height:"39px",viewBox:"0 0 50 39",ref:t},n),void 0===a?pe:a?r.a.createElement("title",null,a):null,de,be)},he=r.a.forwardRef((function(e,t){return r.a.createElement(ge,me({svgRef:t},e))}));a.p,a(74);function fe(){return(fe=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function Ee(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var ve=r.a.createElement("g",null),ye=r.a.createElement("g",null),Oe=r.a.createElement("g",null),ke=r.a.createElement("g",null),we=r.a.createElement("g",null),Ne=r.a.createElement("g",null),je=r.a.createElement("g",null),Ue=r.a.createElement("g",null),Ce=r.a.createElement("g",null),Ie=r.a.createElement("g",null),Se=r.a.createElement("g",null),xe=r.a.createElement("g",null),Te=r.a.createElement("g",null),Re=r.a.createElement("g",null),Be=r.a.createElement("g",null),Me=function(e){var t=e.svgRef,a=e.title,n=Ee(e,["svgRef","title"]);return r.a.createElement("svg",fe({id:"Capa_1",x:"0px",y:"0px",viewBox:"0 0 407.453 407.453",style:{enableBackground:"new 0 0 407.453 407.453"},xmlSpace:"preserve",ref:t},n),a?r.a.createElement("title",null,a):null,r.a.createElement("g",null,r.a.createElement("path",{style:{fill:"#010002"},d:"M255.099,116.515c4.487,0,8.129-3.633,8.129-8.129c0-4.495-3.642-8.129-8.129-8.129H143.486 c-4.487,0-8.129,3.633-8.129,8.129c0,4.495,3.642,8.129,8.129,8.129H255.099z"}),r.a.createElement("path",{style:{fill:"#010002"},d:"M367.062,100.258H311.69c-4.487,0-8.129,3.633-8.129,8.129c0,4.495,3.642,8.129,8.129,8.129h47.243 v274.681H48.519V116.515h44.536c4.487,0,8.129-3.633,8.129-8.129c0-4.495-3.642-8.129-8.129-8.129H40.391 c-4.487,0-8.129,3.633-8.129,8.129v290.938c0,4.495,3.642,8.129,8.129,8.129h326.671c4.487,0,8.129-3.633,8.129-8.129V108.386 C375.191,103.891,371.557,100.258,367.062,100.258z"}),r.a.createElement("path",{style:{fill:"#010002"},d:"M282.59,134.796c4.487,0,8.129-3.633,8.129-8.129V67.394C290.718,30.238,250.604,0,201.101,0 c-49.308,0-89.414,30.238-89.414,67.394v59.274c0,4.495,3.642,8.129,8.129,8.129s8.129-3.633,8.129-8.129V67.394 c0-28.198,32.823-51.137,73.36-51.137c40.334,0,73.157,22.939,73.157,51.137v59.274 C274.461,131.163,278.095,134.796,282.59,134.796z"}),r.a.createElement("path",{style:{fill:"#010002"},d:"M98.892,147.566c0,11.526,9.389,20.907,20.923,20.907c11.534,0,20.923-9.38,20.923-20.907 c0-4.495-3.642-8.129-8.129-8.129s-8.129,3.633-8.129,8.129c0,2.561-2.089,4.65-4.666,4.65c-2.569,0-4.666-2.089-4.666-4.65 c0-4.495-3.642-8.129-8.129-8.129S98.892,143.071,98.892,147.566z"}),r.a.createElement("path",{style:{fill:"#010002"},d:"M282.59,168.473c11.534,0,20.923-9.38,20.923-20.907c0-4.495-3.642-8.129-8.129-8.129 c-4.487,0-8.129,3.633-8.129,8.129c0,2.561-2.089,4.65-4.666,4.65c-2.577,0-4.666-2.089-4.666-4.65 c0-4.495-3.642-8.129-8.129-8.129c-4.487,0-8.129,3.633-8.129,8.129C261.667,159.092,271.055,168.473,282.59,168.473z"})),ve,ye,Oe,ke,we,Ne,je,Ue,Ce,Ie,Se,xe,Te,Re,Be)},Ae=r.a.forwardRef((function(e,t){return r.a.createElement(Me,fe({svgRef:t},e))})),Pe=(a.p,a(75),function(e){return e.cart}),De=Object(L.a)([Pe],(function(e){return e.cartItems})),_e=Object(L.a)([De],(function(e){return e.reduce((function(e,t){return e+t.quantity}),0)})),He=Object(L.a)([Pe],(function(e){return e.hidden})),Ge=Object(L.a)([De],(function(e){return e.reduce((function(e,t){return e+t.quantity*t.price}),0)})),Le=Object(L.b)({itemCount:_e}),qe=Object(s.b)(Le,(function(e){return{toggleCartHidden:function(){return e(Y())}}}))((function(e){var t=e.toggleCartHidden,a=e.itemCount;return r.a.createElement("div",{className:"cart-icon",onClick:t},r.a.createElement(Ae,{className:"shopping-icon"}),r.a.createElement("span",{className:"item-count"},a))})),We=(a(76),a(77),function(e){var t=e.item,a=t.imageUrl,n=t.price,c=t.name,i=t.quantity;return r.a.createElement("div",{className:"cart-item"},r.a.createElement("img",{src:a,alt:c}),r.a.createElement("div",{className:"item-details"},r.a.createElement("span",{className:"name"},c),r.a.createElement("span",{className:"price"}," ",i," X $",n)))}),Ve=Object(L.b)({cartItems:De}),Je=Object(_.g)(Object(s.b)(Ve)((function(e){var t=e.cartItems,a=e.history,n=e.dispatch;return r.a.createElement("div",{className:"cart-dropdown"},r.a.createElement("div",{className:"cart-items"},t.length?t.map((function(e){return r.a.createElement(We,{key:e.id,item:e})})):r.a.createElement("span",{className:"empty-message"},"You cart is empty")),r.a.createElement(z,{onClick:function(){a.push("/checkout"),n(Y())}},"GO TO CHECKOUT"))}))),ze=Object(L.a)([function(e){return e.user}],(function(e){return e.currentUser})),Ye=Object(L.b)({currentUser:ze,hidden:He}),Fe=Object(s.b)(Ye)((function(e){var t=e.currentUser,a=e.hidden;return r.a.createElement("div",{className:"header"},r.a.createElement(l.b,{className:"logo-container",to:"/"},r.a.createElement(he,{className:"logo"})),r.a.createElement("div",{className:"options"},r.a.createElement(l.b,{className:"option",to:"/shop"},"Shop"),r.a.createElement(l.b,{className:"option",to:"/contact"},"Contact"),t?r.a.createElement("div",{className:"option",onClick:function(){return le.signOut()}},"Sign Out"):r.a.createElement(l.b,{className:"option",to:"/signin"},"Sign In"),r.a.createElement(qe,null)),!a&&r.a.createElement(Je,null))})),Ke=a(24),Qe=a(39),Xe=a(40),Ze=a(44),$e=a(41),et=a(45),tt=(a(78),function(e){var t=e.handleChange,a=e.label,n=Object(H.a)(e,["handleChange","label"]);return r.a.createElement("div",{className:"group"},r.a.createElement("input",Object.assign({className:"form-input",onChange:t},n)),a&&r.a.createElement("label",{className:"".concat(n.value.length?"shrink":""," form-input-label")},a))}),at=(a(79),function(e){function t(e){var a;return Object(Qe.a)(this,t),(a=Object(Ze.a)(this,Object($e.a)(t).call(this,e))).handleChange=function(){var e=Object(D.a)(P.a.mark((function e(t){var n,r,c;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=t.target,r=n.value,c=n.name,a.setState(Object(Ke.a)({},c,r));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.handleSubmit=function(e){e.preventDefault();var t=a.state,n=t.email,r=t.password;try{le.signInWithEmailAndPassword(n,r),a.setState({email:"",password:""})}catch(c){console.error("An error occured while trying to sign in:"+c)}},a.state={email:"",password:""},a}return Object(et.a)(t,e),Object(Xe.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"sign-in"},r.a.createElement("h2",null,"I already have an account"),r.a.createElement("span",null,"Sign in with your email and password"),r.a.createElement("form",{onSubmit:function(t){return e.handleSubmit(t)}},r.a.createElement(tt,{name:"email",type:"email",value:this.state.email,handleChange:this.handleChange.bind(this),label:"Email",required:!0}),r.a.createElement(tt,{name:"password",type:"password",value:this.state.password,handleChange:this.handleChange.bind(this),label:"Password",required:!0}),r.a.createElement("div",{className:"buttons"},r.a.createElement(z,{type:"submit"},"Sign In"),r.a.createElement(z,{onClick:oe,isGoogleSignIn:!0},"Sign In With Google"))))}}]),t}(n.Component)),nt=a(20),rt=(a(80),function(e){var t=r.a.useState(""),a=Object(nt.a)(t,2),n=a[0],c=a[1],i=r.a.useState(""),l=Object(nt.a)(i,2),s=l[0],o=l[1],m=r.a.useState(""),u=Object(nt.a)(m,2),p=u[0],d=u[1],b=r.a.useState(""),g=Object(nt.a)(b,2),h=g[0],f=g[1],E=function(e){var t=e.target;switch(t.name){case"displayName":return c(t.value);case"password":return d(t.value);case"confirmPassword":return f(t.value);case"email":return o(t.value);default:return}},v=function(){var e=Object(D.a)(P.a.mark((function e(t){var a,r;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),p===h){e.next=4;break}return alert("passwords don't match"),e.abrupt("return");case 4:return e.prev=4,e.next=7,le.createUserWithEmailAndPassword(s,p);case 7:return a=e.sent,r=a.user,e.next=11,ie(r,{displayName:n});case 11:c(""),o(""),d(""),f(""),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(4),console.error("An error occured while trying to create the user: ".concat(e.t0));case 17:case"end":return e.stop()}}),e,null,[[4,14]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"sign-up"},r.a.createElement("h2",{className:"title"},"I do not have an account"),r.a.createElement("span",null,"Sign up with your email and password"),r.a.createElement("form",{className:"sign-up-form",onSubmit:v},r.a.createElement(tt,{type:"text",name:"displayName",value:n,onChange:E,label:"Display Name",required:!0}),r.a.createElement(tt,{type:"email",name:"email",value:s,onChange:E,label:"Email",required:!0}),r.a.createElement(tt,{type:"password",name:"password",value:p,onChange:E,label:"Password",required:!0}),r.a.createElement(tt,{type:"password",name:"confirmPassword",value:h,onChange:E,label:"Confirm Password",required:!0}),r.a.createElement(z,{type:"submit"},"Sign Up")))});a(81);function ct(){return r.a.createElement("div",{className:"sign-in-and-sign-up"},r.a.createElement(at,null),r.a.createElement("div",{style:{border:".5px solid lightgray"}}),r.a.createElement(rt,null))}a(82),a(83);var it=Object(s.b)(null,(function(e){return{clearItem:function(t){return e(function(e){return{type:E.CLEAR_ITEM,payload:e}}(t))},addItem:function(t){return e(F(t))},removeItem:function(t){return e(function(e){return{type:E.REMOVE_ITEM,payload:e}}(t))}}}))((function(e){var t=e.item,a=e.clearItem,n=e.addItem,c=e.removeItem,i=t.name,l=t.quantity,s=t.price,o=t.imageUrl;return r.a.createElement("div",{className:"checkout-item"},r.a.createElement("div",{className:"image-container"},r.a.createElement("img",{src:o,alt:"item"})),r.a.createElement("span",{className:"name"},i),r.a.createElement("span",{className:"quantity"},r.a.createElement("div",{className:"arrow",onClick:function(){return c(t)}},"\u276e"),r.a.createElement("span",{className:"value"},l),r.a.createElement("div",{className:"arrow",onClick:function(){return n(t)}},"\u276f")),r.a.createElement("span",{className:"price"},s),r.a.createElement("div",{className:"remove-button",onClick:function(){return a(t)}},"\u2715"))})),lt=a(42),st=a.n(lt),ot=function(e){var t=e.price,a=100*t;return r.a.createElement(st.a,{allowRememberMe:!0,label:"Pay Now",name:"CRWN Clothing Ltd.",shippingAddress:!0,image:"https://svgshare.com/i/CUz.svg",description:"Your total is $".concat(t),amount:a,panelLabel:"Pay Now",token:function(e){console.log(e),alert("Payment Successfull ".concat(e))},stripeKey:"pk_test_BYrdQRLSSTLdH8R5Z8cgZE4g00paXJqXuH"})},mt=Object(L.b)({cartItems:De,total:Ge}),ut=Object(s.b)(mt)((function(e){var t=e.cartItems,a=e.total;return r.a.createElement("div",{className:"checkout-page"},r.a.createElement("div",{className:"checkout-header"},r.a.createElement("div",{className:"header-block"},r.a.createElement("span",null,"Product")),r.a.createElement("div",{className:"header-block"},r.a.createElement("span",null,"Description")),r.a.createElement("div",{className:"header-block"},r.a.createElement("span",null,"Quantity")),r.a.createElement("div",{className:"header-block"},r.a.createElement("span",null,"Price")),r.a.createElement("div",{className:"header-block"},r.a.createElement("span",null,"Remove"))),t.map((function(e){return r.a.createElement(it,{key:e.id,item:e})})),r.a.createElement("div",{className:"total"},r.a.createElement("span",null,"Total: $",a)),r.a.createElement("div",{className:"test-warning"},"* Please use the following test credit card for payment * 424242424242 - Exp 01/21 - CVV 123"),r.a.createElement(ot,{price:a}))}));a(84);var pt=Object(L.b)({currentUser:ze}),dt=Object(s.b)(pt,(function(e){return{setCurrentUser:function(t){return e(function(e){return{type:g,payload:e}}(t))}}}))((function(e){var t=e.setCurrentUser;return r.a.useEffect((function(){var e=le.onAuthStateChanged(function(){var e=Object(D.a)(P.a.mark((function e(a){return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!a){e.next=5;break}return e.next=3,ie(a);case 3:e.sent.onSnapshot((function(e){t(Object(b.a)({id:e.id},e.data()))}));case 5:t(a);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());return function(){return e()}}),[t]),r.a.createElement("div",{className:"App"},r.a.createElement(Fe,null),r.a.createElement(_.d,null,r.a.createElement(_.b,{path:"/",exact:!0,component:J}),r.a.createElement(_.b,{path:"/shop",component:ae}),r.a.createElement(_.b,{path:"/signin",component:function(){return e.currentUser?r.a.createElement(_.a,{to:"/"}):r.a.createElement(ct,null)}}),r.a.createElement(_.b,{exact:!0,path:"/checkout",component:ut})))}));i.a.render(r.a.createElement(s.a,{store:B},r.a.createElement(l.a,null,r.a.createElement(o.a,{persistor:M},r.a.createElement(dt,null)))),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.0266803d.chunk.js.map