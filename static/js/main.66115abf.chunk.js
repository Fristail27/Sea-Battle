(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{10:function(e,t,n){e.exports={fountainG:"Preloader_fountainG__bCKyL",bounce_fountainG:"Preloader_bounce_fountainG__2KlRb",fountainG_1:"Preloader_fountainG_1__1hpN_",fountainG_2:"Preloader_fountainG_2__hEvEe",fountainG_3:"Preloader_fountainG_3__v02_w",fountainG_4:"Preloader_fountainG_4__3aewM",fountainG_5:"Preloader_fountainG_5__2kMZ5",fountainG_6:"Preloader_fountainG_6__1VZ9R",fountainG_7:"Preloader_fountainG_7__2eerP",fountainG_8:"Preloader_fountainG_8__XeV9g"}},16:function(e,t,n){e.exports={registrationModule:"Registration_registrationModule__4C-LG",registrationForm:"Registration_registrationForm__3SkJI",error:"Registration_error__3Nknh"}},17:function(e,t,n){e.exports={main:"Paginator_main__14XI_",num:"Paginator_num__KQWJf",currentNum:"Paginator_currentNum__2GKq0",nums:"Paginator_nums__3Md42",btns:"Paginator_btns__2WIA-",startButtons:"Paginator_startButtons__1t93U",endButtons:"Paginator_endButtons__3yIvY"}},18:function(e,t,n){e.exports={pack:"Pack_pack__2mE3E",text:"Pack_text__1_AAQ",name:"Pack_name__x63N2",shadow:"Pack_shadow__3rPmp",modal:"Pack_modal__3Ie44"}},19:function(e,t,n){e.exports={card:"Card_card__3jZm8",text:"Card_text__Y_PlN",buttons:"Card_buttons__j94qb"}},23:function(e,t,n){e.exports={inputErr:"Input_inputErr__1IYV2",error:"Input_error__a3_--"}},24:function(e,t,n){e.exports={learnCards:"LearnCards_learnCards__2AmgU",container:"LearnCards_container__18MM1",cards:"LearnCards_cards__3QJtj",some:"LearnCards_some__3iVH0"}},30:function(e,t,n){e.exports={superInput:"SuperInputText_superInput__2wa_a",errorInput:"SuperInputText_errorInput__3_ZWZ",error:"SuperInputText_error__3jAp4"}},31:function(e,t,n){e.exports={default:"SuperButton_default__2jDA_",red:"SuperButton_red__O0154"}},32:function(e,t,n){e.exports={lab:"SuperCheckbox_lab__2Y2Hn",checkbox:"SuperCheckbox_checkbox__3z_aH",spanClassName:"SuperCheckbox_spanClassName__2WNVv"}},33:function(e,t,n){e.exports={container:"Navigation_container__gi6HA",wrapper:"Navigation_wrapper__2jaX7",navigation:"Navigation_navigation___o7mt"}},34:function(e,t,n){e.exports={panel:"PanelForPacks_panel__Ev1FB",search:"PanelForPacks_search__2bCiB",paginator:"PanelForPacks_paginator__2R2zq"}},51:function(e,t,n){e.exports={modalWindow:"modalError_modalWindow__3EGR4"}},53:function(e,t,n){e.exports={formLogin:"Login_formLogin__1-aqV",elementInput:"Login_elementInput__1IqxW"}},54:function(e,t,n){e.exports={linePreloader:"PreloaderForNav_linePreloader__2K5f7",scroll:"PreloaderForNav_scroll__15MHC"}},55:function(e,t,n){e.exports={packsHeader:"Packs_packsHeader__3NTIe",packs:"Packs_packs__3TOhW",buttons:"Packs_buttons__1IYBs"}},56:function(e,t,n){e.exports={cardsHeader:"Cards_cardsHeader__2mjGm",cards:"Cards_cards__1p4x7",buttons:"Cards_buttons__3fCey"}},63:function(e,t,n){},64:function(e,t,n){},90:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(27),s=n.n(c),i=(n(63),n(64),n(8)),u=n(4),o=n(7),d=n(16),l=n.n(d),j=n(2),p=n(5),b=n.n(p),f=n(9),O=n(3),h=n(50),x=n.n(h).a.create({baseURL:"https://neko-back.herokuapp.com/2.0/",withCredentials:!0}),_=function(e){return x.post("auth/login",e)},m=function(){return x.post("auth/me",{})},g=function(){return x.delete("auth/me",{})},v=function(e){return x.post("auth/register",e)},C="App/ON_CHANGE_APP_STATUS",k={appStatus:"loading",error:void 0},P=function(e){return{type:C,status:e}},w=function(e){return{type:"reg/SET-ERROR",error:e}};function N(e,t,n,a){e(n("failed")),a&&(t.response?e(a(t.response.data.error)):e(a(t.message)))}var S={succeedRegister:!1,error:void 0},y=function(e){return{type:"reg/SET-REGISTER",succeedRegister:e}},T=n(23),G=n.n(T),E=function(e){return!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e)},R=function(e){return e.length<8},A=n(0),I=function(e){var t=e.email,n=e.onChange,r=Object(a.useState)(""),c=Object(u.a)(r,2),s=c[0],i=c[1];return Object(A.jsxs)("div",{children:[Object(A.jsx)("div",{children:Object(A.jsx)("input",{className:s&&G.a.error,onFocus:function(){return i("")},value:t,onBlur:function(){""===t.trim()&&(i("Email Required"),n("")),t&&(E(t)?i("Invalid email address"):i(""))},onChange:function(e){n(e.currentTarget.value)},placeholder:"Email",type:"email"})}),s&&Object(A.jsx)("div",{className:G.a.inputErr,style:{marginTop:"-3px"},children:s})]})},F=function(e){var t=e.password,n=e.onChange,r=Object(a.useState)(""),c=Object(u.a)(r,2),s=c[0],i=c[1];return Object(A.jsxs)("div",{children:[Object(A.jsx)("div",{children:Object(A.jsx)("input",{className:s&&G.a.error,onFocus:function(){return i("")},value:t,onBlur:function(){""===t.trim()&&i("Password Required"),t&&(R(t)?i("Password must be more than 7 characters"):i(""))},onChange:function(e){n(e.currentTarget.value.trim())},placeholder:"Password",type:"password"})}),s&&Object(A.jsx)("div",{className:G.a.inputErr,style:{marginTop:"-3px"},children:s})]})},D=function(e){var t=e.name,n=e.onClick,a=e.status;return Object(A.jsx)("div",{children:Object(A.jsx)("button",{disabled:"loading"===a,style:{cursor:"pointer"},onClick:n,children:t})})},H=n(51),L=n.n(H),U=function(){var e=Object(j.c)((function(e){return e.app.error})),t=Object(j.b)();return Object(a.useEffect)((function(){e&&setTimeout((function(){return t(w(""))}),3e3)}),[e,t]),Object(A.jsx)("div",{children:e&&Object(A.jsx)("div",{className:L.a.modalWindow,children:e})})},q=function(){var e=Object(j.b)(),t=Object(j.c)((function(e){return e.reg.succeedRegister})),n=Object(j.c)((function(e){return e.app.appStatus})),r=Object(a.useState)(""),c=Object(u.a)(r,2),s=c[0],d=c[1],p=Object(a.useState)(""),O=Object(u.a)(p,2),h=O[0],x=O[1],_=Object(a.useState)(""),m=Object(u.a)(_,2),g=m[0],C=m[1],k=Object(a.useState)(""),S=Object(u.a)(k,2),T=S[0],G=S[1];Object(a.useEffect)((function(){t&&setTimeout((function(){return e(y(!1))}),1e3),T&&setTimeout((function(){return G("")}),3e3)}),[t,T,e]);return t?Object(A.jsx)(i.a,{to:"/login"}):Object(A.jsxs)("div",{className:l.a.registrationModule,children:[Object(A.jsx)("h1",{children:"Registration"}),Object(A.jsxs)("form",{className:l.a.registrationForm,onSubmit:function(e){return e.preventDefault()},children:[Object(A.jsx)(I,{email:s,onChange:d}),Object(A.jsx)(F,{password:h,onChange:x}),Object(A.jsxs)("div",{children:[Object(A.jsx)("input",{value:g,onChange:function(t){C(t.currentTarget.value),"idle"!==n&&e(P("idle"))},placeholder:"Repeat password",type:"password"}),h!==g?Object(A.jsx)("div",{className:l.a.error,children:"Different Password"}):""]}),Object(A.jsx)(D,{name:"Register",onClick:function(){var t;s&&h?h!==g||E(s)?G("incorrect email or password"):e((t={email:s,password:h},function(){var e=Object(f.a)(b.a.mark((function e(n){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n(P("loading")),e.next=4,v(t);case 4:n(y(!0)),n(P("succeeded")),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),N(n,e.t0,P,w);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}())):G("required email and password")},status:n}),T&&Object(A.jsx)("div",{style:{marginTop:"165px"},className:l.a.error,children:T}),Object(A.jsx)(o.c,{to:"/login",children:"Sign in"})]}),Object(A.jsx)(U,{})]})},B=function(){var e=Object(j.c)((function(e){return e.auth.userData&&e.auth.userData.name}));return Object(j.c)((function(e){return e.auth.isAuth}))?Object(A.jsxs)("h1",{children:["profile ",e]}):Object(A.jsx)(i.a,{to:"/login"})},M=function(e){return x.post("auth/forgot",{email:e,from:"Fristail27  <Fristail27@gmail.com>",message:"<div style=\"background-color: lime; padding: 15px\">\n                            password recovery link: <a href='http://localhost:3000/Progect#/new-password-page/$token$'>link</a>\n                      </div>"})},W=function(e,t){return x.post("auth/set-new-password",{password:e,resetPasswordToken:t})},K={errorStatusForNewPass:null,valueInputPass:"",valueInputPassRec:""},V="passwordRecovery/SET_ERROR_STATUS_FOR_NEW_PASS",z="passwordRecovery/ON_CHANGE_INPUT_PASS",Z="passwordRecovery/ON_CHANGE_INPUT_PASS_REC",Y=function(e){return{type:V,error:e}},J=function(e){return{type:z,value:e}},Q=function(e){return{type:Z,value:e}},X=n(10),$=n.n(X),ee=function(){return Object(A.jsxs)("div",{id:$.a.fountainG,children:[Object(A.jsx)("div",{id:$.a.fountainG_1,className:$.a.fountainG}),Object(A.jsx)("div",{id:$.a.fountainG_2,className:$.a.fountainG}),Object(A.jsx)("div",{id:$.a.fountainG_3,className:$.a.fountainG}),Object(A.jsx)("div",{id:$.a.fountainG_4,className:$.a.fountainG}),Object(A.jsx)("div",{id:$.a.fountainG_5,className:$.a.fountainG}),Object(A.jsx)("div",{id:$.a.fountainG_6,className:$.a.fountainG}),Object(A.jsx)("div",{id:$.a.fountainG_7,className:$.a.fountainG}),Object(A.jsx)("div",{id:$.a.fountainG_8,className:$.a.fountainG})]})},te=function(){var e=Object(j.b)(),t=r.a.useState(!1),n=Object(u.a)(t,2),a=n[0],c=n[1],s=r.a.useState(!1),o=Object(u.a)(s,2),d=o[0],l=o[1],p=r.a.useState(!1),O=Object(u.a)(p,2),h=O[0],x=O[1],_=Object(j.c)((function(e){return e.pass.errorStatusForNewPass})),m=Object(j.c)((function(e){return e.pass.valueInputPass})),g=R(m),v=Object(j.c)((function(e){return e.pass.valueInputPassRec})),C=R(v),k=Object(j.c)((function(e){return e.app.appStatus})),w=Object(i.g)().token,S=g&&d?{border:"2px solid red"}:{},y=C&&h?{border:"2px solid red"}:{};return Object(A.jsxs)("div",{children:[a&&Object(A.jsx)(i.a,{to:"/login"}),Object(A.jsx)("h1",{children:"New Password Page"}),Object(A.jsxs)("label",{style:{display:"block"},children:[Object(A.jsx)("input",{onBlur:function(){g?(e(Y("\u041d\u0435\u043a\u043e\u0440\u0435\u043a\u0442\u043d\u044b\u0439 \u043f\u0430\u0440\u043e\u043b\u044c")),l(!0),x(!0)):e(Y(null))},onFocus:function(){return l(!0)},style:S,value:m,onChange:function(t){_&&e(Y(null)),(d||h)&&(l(!1),x(!1)),e(J(t.currentTarget.value))},type:"text"}),"Password"]}),Object(A.jsxs)("label",{style:{display:"block"},children:[Object(A.jsx)("input",{onBlur:function(){C?(e(Y("\u041d\u0435\u043a\u043e\u0440\u0435\u043a\u0442\u043d\u044b\u0439 \u043f\u0430\u0440\u043e\u043b\u044c")),l(!0),x(!0)):e(Y(null))},onFocus:function(){return x(!0)},style:y,value:v,onChange:function(t){_&&e(Y(null)),"idle"!==k&&e(P("idle")),(d||h)&&(l(!1),x(!1)),e(Q(t.currentTarget.value))},type:"text"}),"repeat Password"]}),_&&Object(A.jsx)("span",{style:{color:"red"},children:_}),Object(A.jsx)("button",{disabled:"loading"===k,onClick:function(){m!==v?e(Y("\u041f\u0430\u0440\u043e\u043b\u0438 \u043d\u0435 \u0441\u043e\u0432\u043f\u0430\u0434\u0430\u044e\u0442")):R(m)?e(Y("\u0414\u043b\u0438\u043d\u0430 \u043f\u0430\u0440\u043e\u043b\u044f \u0434\u043e\u043b\u0436\u043d\u0430 \u0431\u044b\u0442\u044c \u0431\u043e\u043b\u044c\u0448\u0435 7 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432")):(w&&e(function(e,t){return function(){var n=Object(f.a)(b.a.mark((function n(a){return b.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,a(P("loading")),n.next=4,W(e,t);case 4:a(J("")),a(Q("")),a(P("succeeded")),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),N(a,n.t0,P,Y);case 12:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(e){return n.apply(this,arguments)}}()}(m,w)),"succeeded"===k&&(c(!0),e(P("idle"))))},children:"Change Pass"}),"loading"===k&&Object(A.jsx)(ee,{}),"succeeded"===k&&Object(A.jsx)("span",{style:{color:"green"},children:k})]})},ne=function(){var e=Object(j.b)(),t=Object(a.useState)(""),n=Object(u.a)(t,2),r=n[0],c=n[1],s=Object(j.c)((function(e){return e.app.appStatus})),i=Object(a.useState)(""),o=Object(u.a)(i,2),d=o[0],p=o[1];return Object(A.jsxs)("div",{children:[Object(A.jsx)("h1",{children:"Password Recovery Page"}),Object(A.jsxs)("form",{className:l.a.registrationForm,onSubmit:function(e){return e.preventDefault()},children:[Object(A.jsx)(I,{email:r,onChange:c}),Object(A.jsx)(D,{name:"Send email",onClick:function(){var t;r?E(r)?p("incorrect email"):e((t=r,function(){var e=Object(f.a)(b.a.mark((function e(n){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n(P("loading")),e.next=4,M(t);case 4:n(P("succeeded")),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),N(n,e.t0,P);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}())):p("required email")},status:s}),d&&Object(A.jsx)("p",{style:{color:"red"},children:d})]})]})},ae=n(21),re=n(30),ce=n.n(re),se=function(e){e.type;var t=e.onChange,n=e.onChangeText,a=e.onKeyPress,r=e.onEnter,c=e.error,s=(e.className,e.spanClassName),i=Object(ae.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),u="".concat(ce.a.error," ").concat(s||""),o="".concat(ce.a.superInput," ").concat(c?ce.a.errorInput:""," ");return Object(A.jsxs)(A.Fragment,{children:[Object(A.jsx)("input",Object(O.a)({type:"text",onChange:function(e){t&&t(e),n&&n(e.currentTarget.value)},onKeyPress:function(e){a&&a(e),"Enter"===e.key&&r&&r()},className:o},i)),c&&Object(A.jsx)("span",{className:u,children:c})]})},ie=n(31),ue=n.n(ie),oe=function(e){var t=e.red,n=e.className,a=Object(ae.a)(e,["red","className"]),r=" ".concat(ue.a.default," ").concat(t?ue.a.red:ue.a.default," ").concat(n);return Object(A.jsx)("button",Object(O.a)({className:r},a))},de=n(32),le=n.n(de),je=function(e){e.type;var t=e.onChange,n=e.onChangeChecked,a=e.className,r=(e.spanClassName,e.children),c=Object(ae.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),s="".concat(le.a.checkbox," ").concat(a||"");return Object(A.jsxs)("label",{className:le.a.lab,children:[Object(A.jsx)("input",Object(O.a)({type:"checkbox",onChange:function(e){t&&t(e),n&&n(e.currentTarget.checked)},className:s},c)),r&&Object(A.jsx)("div",{className:le.a.spanClassName,children:r})]})},pe=function(){return Object(A.jsxs)(A.Fragment,{children:[Object(A.jsx)(se,{}),Object(A.jsx)(oe,{children:"TEST"}),Object(A.jsx)(je,{children:"TEST"}),Object(A.jsx)(ee,{}),Object(A.jsx)(U,{})]})},be=function(){return Object(A.jsx)("h1",{children:"Error404: Page not found"})},fe=n(53),Oe=n.n(fe),he=function(e){var t=Object(j.c)((function(e){return e.app.appStatus}));return Object(A.jsxs)("div",{children:[Object(A.jsx)("h1",{children:"Authentication"}),Object(A.jsxs)("form",{className:l.a.registrationForm,onSubmit:function(e){return e.preventDefault()},children:[Object(A.jsx)(I,{email:e.email,onChange:e.emailHandler}),Object(A.jsx)(F,{password:e.password,onChange:e.passwordHandler}),Object(A.jsxs)("div",{className:Oe.a.elementInput,children:[Object(A.jsx)("span",{children:"Remember me"}),Object(A.jsx)("input",{onChange:e.checkHandler,type:"checkbox",checked:e.check})]}),Object(A.jsx)(D,{name:"Login",onClick:e.onSubmit,status:t}),e.error&&Object(A.jsx)("div",{style:{marginTop:"170px"},className:l.a.error,children:e.error})]}),Object(A.jsx)(U,{})]})},xe={userData:null,isAuth:!1,loginSuccess:!1},_e="auth/AUTH_TRY",me="auth/LOGOUT",ge=function(e,t){return{type:_e,userData:e,isAuth:t}},ve=function(){var e=Object(j.b)(),t=Object(j.c)((function(e){return e.app.appStatus})),n=Object(j.c)((function(e){return e.auth.isAuth})),r=Object(a.useState)(""),c=Object(u.a)(r,2),s=c[0],o=c[1],d=Object(a.useState)(""),l=Object(u.a)(d,2),p=l[0],O=l[1],h=Object(a.useState)(!1),x=Object(u.a)(h,2),m=x[0],g=x[1],v=Object(a.useState)(""),C=Object(u.a)(v,2),k=C[0],S=C[1];return n?Object(A.jsx)(i.a,{to:"./profile"}):Object(A.jsx)(he,{emailHandler:function(n){o(n),"idle"!==t&&e(P("idle"))},checkHandler:function(n){g(n.currentTarget.checked),"idle"!==t&&e(P("idle"))},passwordHandler:function(n){O(n),"idle"!==t&&e(P("idle"))},email:s,password:p,check:m,onSubmit:function(){var t;s&&p?E(s)?S("incorrect email or password"):e((t={email:s,password:p,rememberMe:m},function(){var e=Object(f.a)(b.a.mark((function e(n){var a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n(P("loading")),e.next=4,_(t);case 4:(a=e.sent).data&&!a.data.error?(n(ge(a.data,!0)),n(P("succeeded"))):(n(ge(xe.userData,!1)),n(P("failed"))),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),N(n,e.t0,P,w);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}())):S("required email and password")},error:k})},Ce=n(33),ke=n.n(Ce),Pe=n(54),we=n.n(Pe),Ne=function(){return Object(A.jsx)("div",{className:we.a.linePreloader})},Se=function(){var e=Object(j.b)(),t=Object(j.c)((function(e){return e.auth.isAuth})),n=Object(j.c)((function(e){return e.app.appStatus})),a=t?"/profile":"/login";return Object(A.jsxs)("div",{className:ke.a.container,children:[Object(A.jsxs)("div",{className:ke.a.wrapper,children:[Object(A.jsxs)("nav",{className:ke.a.navigation,children:[Object(A.jsx)(o.b,{to:"/",children:"Profile"}),Object(A.jsx)(o.b,{to:"/login",children:"Login"}),Object(A.jsx)(o.b,{to:"/registration",children:"Registration"}),Object(A.jsx)(o.b,{to:"/password-recovery-page",children:"Password recovery"}),Object(A.jsx)(o.b,{to:"/test-page",children:"Test page"}),Object(A.jsx)(o.b,{to:"/packs",children:"Packs"}),Object(A.jsx)(o.b,{to:"/cards",children:"Cards"})]}),Object(A.jsx)(o.c,{to:a,children:Object(A.jsx)("button",{onClick:function(){t&&(e(function(){var e=Object(f.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t(P("loading")),e.next=4,g();case 4:t({type:me}),t(P("succeeded")),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),N(t,e.t0,P);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()),e(P("idle")))},children:t?"Logout":"Login"})})]}),"loading"===n&&Object(A.jsx)(Ne,{})]})},ye=n(55),Te=n.n(ye),Ge=n(58),Ee=function(e){return x.get("cards/pack",{params:e})},Re=function(e){return x.post("cards/pack",{cardsPack:e})},Ae=function(e){return x.delete("cards/pack?id=".concat(e))},Ie=function(e){return x.put("cards/pack",{cardsPack:e})},Fe="packs/GET-CARDS-PACKS",De="packs/SET_SEARCH_VALUE",He="packs/SET_SORT_TYPE",Le="packs/SET_SORT_PACKS_ON_PAGE",Ue={cardPacks:[],cardPacksTotalCount:0,maxCardsCount:1e3,minCardsCount:0,page:1,pageCount:15,searchValue:"",sortPacks:"0updated"},qe=function(e){return{type:Fe,data:e}},Be=function(e){return{type:He,value:e}},Me=function(e){return{type:Le,sortType:e}},We=function(e){return function(){var t=Object(f.a)(b.a.mark((function t(n,a){var r,c;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=a().packs,n(P("loading")),t.next=4,Ee(Object(O.a)(Object(O.a)({},e),{},{sortPacks:r.sortPacks,pageCount:r.pageCount}));case 4:c=t.sent,n(qe(c.data)),n(P("idle"));case 7:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()},Ke=n(34),Ve=n.n(Ke),ze=n(17),Ze=n.n(ze),Ye=function(e){var t=Math.ceil(e.pagesCount/e.paginatorSize),n=Object(a.useState)(0),r=Object(u.a)(n,2),c=r[0],s=r[1],i=function(){for(var t=[],n=1;n<=e.pagesCount;n++)t.push(n);return Object(A.jsx)("div",{className:Ze.a.nums,children:t.map((function(t,n){return t>=c*e.paginatorSize&&t<c*e.paginatorSize+e.paginatorSize?t===e.currentPage?Object(A.jsx)("span",{className:Ze.a.currentNum,children:t},n):Object(A.jsx)("span",{onClick:function(){return e.clickHandler(t)},className:Ze.a.num,children:t},n):null}))})};return Object(A.jsxs)("div",{className:Ze.a.main,children:[Object(A.jsx)(i,{}),Object(A.jsxs)("div",{className:Ze.a.btns,children:[Object(A.jsxs)("div",{className:Ze.a.startButtons,children:[0!==c&&Object(A.jsx)("button",{onClick:function(){return s(0)},children:"to start"}),0!==c&&Object(A.jsx)("button",{onClick:function(){return s(c-1)},children:"back"})]}),Object(A.jsxs)("div",{className:Ze.a.endButtons,children:[c!==t-1&&Object(A.jsx)("button",{onClick:function(){return s(c+1)},children:"next"}),c!==t-1&&Object(A.jsx)("button",{onClick:function(){return s(t-1)},children:"to end"})]})]})]})},Je=function(){var e=Object(j.b)(),t=Object(j.c)((function(e){return e.packs})),n=Object(j.c)((function(e){return e.packs.searchValue})),r=Math.ceil(t.cardPacksTotalCount/t.pageCount),c=Object(a.useState)("updated"),s=Object(u.a)(c,2),i=s[0],o=s[1],d=Object(a.useState)("0"),l=Object(u.a)(d,2),p=l[0],b=l[1];return Object(a.useEffect)((function(){t.sortPacks!=="".concat(p).concat(i)&&e(Be("".concat(p).concat(i)))}),[i,p]),Object(A.jsxs)("div",{className:Ve.a.panel,children:[Object(A.jsxs)("div",{className:Ve.a.search,children:[Object(A.jsx)("input",{value:n,onChange:function(t){return e((n=t.currentTarget.value,{type:De,value:n}));var n}}),Object(A.jsx)("button",{onClick:function(){return e(We({page:1,packName:n}))},children:"find"})]}),Object(A.jsxs)("div",{children:["\u0421\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c:",Object(A.jsxs)("select",{onChange:function(t){o(t.currentTarget.value),e(Be("".concat(p).concat(i)))},value:i,name:"",id:"",children:[Object(A.jsx)("option",{value:"updated",children:" \u041f\u043e \u0434\u0430\u0442\u0435 \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u044f"}),Object(A.jsx)("option",{value:"name",children:"\u041f\u043e \u0438\u043c\u0435\u043d\u0438"}),Object(A.jsx)("option",{value:"cardsCount",children:"\u041f\u043e \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u0443 \u043a\u0430\u0440\u0442"})]}),Object(A.jsxs)("select",{onChange:function(t){b(t.currentTarget.value),e(Be("".concat(p).concat(i)))},value:p,name:"",id:"",children:[Object(A.jsx)("option",{value:"0",children:"\u041f\u043e \u0443\u0431\u044b\u0432\u0430\u043d\u0438\u044e"}),Object(A.jsx)("option",{value:"1",children:"\u041f\u043e \u0432\u043e\u0437\u0440\u0430\u0441\u0442\u0430\u043d\u0438\u044e"})]}),Object(A.jsx)("button",{onClick:function(){e(We({sortPacks:"".concat(p).concat(i)}))},children:"Sort"})]}),Object(A.jsx)("div",{className:Ve.a.paginator,children:Object(A.jsx)(Ye,{clickHandler:function(t){return e(We({page:t,packName:n}))},paginatorSize:10,currentPage:t.page,pagesCount:r})})]})},Qe=n(18),Xe=n.n(Qe),$e=function(e){var t=e.disabled,n=e.cp,r=e.updatePack,c=e.delPack,s=Object(a.useState)(!1),i=Object(u.a)(s,2),d=i[0],l=i[1];return Object(A.jsxs)("div",{className:Xe.a.pack,children:[Object(A.jsx)("div",{className:Xe.a.name,children:n.name}),Object(A.jsx)("div",{className:Xe.a.text,children:n.cardsCount}),Object(A.jsx)("div",{className:Xe.a.text,children:function(e){return e.updated.split(".")[0].replace("T"," ")}(n)}),Object(A.jsxs)("div",{className:Xe.a.buttons,children:[Object(A.jsx)("button",{disabled:t,style:{margin:"10px"},onClick:function(){return c(n._id)},children:"delete"}),Object(A.jsx)("button",{disabled:t,style:{margin:"10px"},onClick:function(){return r({_id:n._id,name:"Extra new"})},children:"update"}),Object(A.jsx)("button",{onClick:function(){return l(!0)},children:"Cards"}),d&&Object(A.jsx)("div",{className:Xe.a.shadow,onClick:function(){return l(!1)},children:Object(A.jsxs)("div",{className:Xe.a.modal,children:[Object(A.jsx)(o.c,{to:"/cards/".concat(n._id),style:{margin:"10px"},children:"Show Cards"}),Object(A.jsx)(o.c,{to:"/learn-cards/".concat(n._id),style:{margin:"10px"},children:"Learn Cards"})]})})]})]})},et=function(){var e=Object(j.b)(),t=Object(j.c)((function(e){return e.app.appStatus})),n=Object(j.c)((function(e){return e.auth.isAuth})),r=Object(j.c)((function(e){var t;return null===(t=e.auth.userData)||void 0===t?void 0:t._id})),c=Object(j.c)((function(e){return e.packs.cardPacks})),s=Object(a.useState)(0),i=Object(u.a)(s,2),o=i[0],d=i[1],l=function(t){e(function(e){return function(){var t=Object(f.a)(b.a.mark((function t(n,a){var r;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=a().packs,t.next=3,Ae(e);case 3:n(We({page:r.page,pageCount:r.pageCount,max:r.maxCardsCount,min:r.minCardsCount}));case 4:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()}(t))},p=function(t){e(function(e){return function(){var t=Object(f.a)(b.a.mark((function t(n,a){var r;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=a().packs,t.next=3,Ie(e);case 3:n(We({page:r.page,pageCount:r.pageCount,max:r.maxCardsCount,min:r.minCardsCount}));case 4:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()}(t))};return"loading"!==t&&1!==o&&d(1),Object(a.useEffect)((function(){"loading"!==t&&n&&e(We())}),[o,e,n]),Object(A.jsxs)("div",{children:[Object(A.jsx)(Je,{}),Object(A.jsxs)("div",{className:Te.a.packsHeader,children:[Object(A.jsx)("div",{children:"Name"}),Object(A.jsxs)("div",{children:["cardsCount",Object(A.jsx)("button",{onClick:function(){return e(Me("UP"))},children:"Up"}),Object(A.jsx)("button",{onClick:function(){return e(Me("DOWN"))},children:"Down"})]}),Object(A.jsx)("div",{children:"Updated"}),Object(A.jsx)("div",{children:Object(A.jsx)("button",{style:{margin:"10px"},onClick:function(){var t;e((t={name:"New Pack"},function(){var e=Object(f.a)(b.a.mark((function e(n,a){var r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=a().packs,e.next=3,Re(t);case 3:n(We({page:r.page,pageCount:r.pageCount,max:r.maxCardsCount,min:r.minCardsCount}));case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()))},children:"add"})})]}),c.map((function(e){return Object(A.jsx)($e,{disabled:r!==e.user_id,cp:e,delPack:l,updatePack:p},e._id)}))]})},tt=n(56),nt=n.n(tt),at=function(e){return x.get("cards/card",{params:e})},rt=function(e){return x.post("cards/card",{card:e})},ct=function(e){return x.delete("cards/card?id=".concat(e))},st=function(e){return x.put("cards/card",{card:e})},it=function(e,t){return x.put("cards/grade",{grade:e,card_id:t})},ut={cards:[],cardsTotalCount:0,maxGrade:10,minGrade:0,page:1,pageCount:1e3,packUserId:""},ot=function(e){return{type:"cards/GET-CARDS",data:e}},dt=function(e,t,n){return{type:"cards/SET-CARD-GRADE",id:e,grade:t,shots:n}},lt=function(e){return function(){var t=Object(f.a)(b.a.mark((function t(n,a){var r,c;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(P("loading")),r=a().cards,t.next=4,at(e);case 4:c=t.sent,n(ot(Object(O.a)(Object(O.a)({},c.data),{},{pageCount:r.pageCount}))),n(P("succeeded"));case 7:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()},jt=n(19),pt=n.n(jt),bt=function(e){var t;return Object(A.jsxs)("div",{className:pt.a.card,children:[Object(A.jsx)("div",{className:pt.a.text,children:e.question}),Object(A.jsx)("div",{className:pt.a.text,children:e.answer}),Object(A.jsx)("div",{className:pt.a.text,children:e.grade}),Object(A.jsx)("div",{className:pt.a.text,children:(t=e.updated,t.split(".")[0].replace("T"," "))}),Object(A.jsxs)("div",{className:pt.a.buttons,children:[Object(A.jsx)("button",{disabled:e.userId!==e.cardsState.packUserId,style:{margin:"10px"},onClick:function(){return e.deleteCard(e._id,e.cardsPack_id)},children:"Delete"}),Object(A.jsx)("button",{disabled:e.userId!==e.cardsState.packUserId,style:{margin:"10px"},onClick:function(){return e.updateCard(e._id)},children:"Update"})]})]})},ft=function(){var e=Object(j.b)(),t=Object(j.c)((function(e){return e.cards.cards})),n=Object(j.c)((function(e){var t;return null===(t=e.auth.userData)||void 0===t?void 0:t._id})),r=Object(j.c)((function(e){return e.cards})),c=Object(j.c)((function(e){return e.app.appStatus})),s=Object(j.c)((function(e){return e.auth.isAuth})),o=Object(i.g)().id,d=Object(a.useState)(0),l=Object(u.a)(d,2),p=l[0],O=l[1],h=function(t,n){e(function(e,t){return function(){var n=Object(f.a)(b.a.mark((function n(a,r){var c;return b.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a(P("loading")),c=r().cards,n.next=4,ct(e);case 4:a(lt({cardsPack_id:t,max:c.maxGrade,min:c.minGrade,page:c.page,pageCount:c.pageCount})),a(P("succeeded"));case 6:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}()}(t,n))},x=function(t){var n,a;o&&e((n=o,a={_id:t,comments:"new comment",question:"new que"},function(){var e=Object(f.a)(b.a.mark((function e(t,r){var c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(P("loading")),c=r().cards,e.next=4,st(a);case 4:t(lt({cardsPack_id:n,max:c.maxGrade,min:c.minGrade,page:c.page,pageCount:c.pageCount})),t(P("succeeded"));case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()))};return"loading"!==c&&1!==p&&O(1),Object(a.useEffect)((function(){o&&"loading"!==c&&s&&e(lt({cardsPack_id:o,pageCount:r.pageCount}))}),[p,s,e,o,r.pageCount]),s?Object(A.jsxs)("div",{children:[Object(A.jsx)(Ye,{clickHandler:function(t){return e(lt({page:t,cardsPack_id:o,pageCount:r.pageCount}))},paginatorSize:10,pagesCount:Math.ceil(r.cardsTotalCount/r.pageCount),currentPage:r.page}),Object(A.jsxs)("div",{className:nt.a.cardsHeader,children:[Object(A.jsx)("div",{children:"Question"}),Object(A.jsx)("div",{children:"Answer"}),Object(A.jsx)("div",{children:"Grade"}),Object(A.jsx)("div",{children:"Updated"}),Object(A.jsx)("div",{children:Object(A.jsx)("button",{disabled:n!==r.packUserId,style:{margin:"10px"},onClick:function(){var t;o&&e((t={cardsPack_id:o,answer:"ans",question:"que"},function(){var e=Object(f.a)(b.a.mark((function e(n,a){var r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(P("loading")),r=a().cards,e.next=4,rt(t);case 4:n(lt({cardsPack_id:t.cardsPack_id,max:r.maxGrade,min:r.minGrade,page:r.page,pageCount:r.pageCount})),n(P("succeeded"));case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()))},children:"Add"})})]}),t.map((function(e){return Object(A.jsx)(bt,{_id:e._id,answer:e.answer,cardsPack_id:e.cardsPack_id,grade:e.grade,question:e.question,updated:e.updated,userId:n,updateCard:x,deleteCard:h,cardsState:r},e._id)}))]}):Object(A.jsx)(i.a,{to:"/login"})},Ot=n(24),ht=n.n(Ot),xt=function(){var e=Object(j.c)((function(e){return e.cards.cards})),t=Object(j.c)((function(e){return e.app.appStatus})),n=Object(i.g)().id,r=Object(a.useState)(!0),c=Object(u.a)(r,2),s=c[0],o=c[1],d=Object(a.useState)(!1),l=Object(u.a)(d,2),p=l[0],O=l[1],h=Object(a.useState)({answer:"",question:"",cardsPack_id:"",grade:0,shots:0,user_id:"",created:"",updated:"",_id:""}),x=Object(u.a)(h,2),_=x[0],m=x[1],g=Object(j.b)();Object(a.useEffect)((function(){s&&(g(lt({cardsPack_id:n})),o(!1)),e.length>0&&m(function(e){var t=e.reduce((function(e,t){return e+(6-t.grade)*(6-t.grade)}),0),n=Math.random()*t,a=e.reduce((function(e,t,a){var r=e.sum+(6-t.grade)*(6-t.grade);return{sum:r,id:r<n?a:e.id}}),{sum:0,id:-1});return console.log("test: ",t,n,a),e[a.id+1]}(e))}),[n,s,e]);var v=function(e){g(function(e,t){return function(){var n=Object(f.a)(b.a.mark((function n(a){var r;return b.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a(P("loading")),n.next=3,it(e,t);case 3:r=n.sent,a(dt(t,r.data.updatedGrade.grade,r.data.updatedGrade.shots)),a(P("succeeded"));case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}(e,_._id)),O(!1)};return Object(A.jsx)("div",{className:ht.a.learnCards,children:Object(A.jsxs)("div",{className:ht.a.container,children:[Object(A.jsxs)("div",{className:ht.a.cards,children:[Object(A.jsxs)("div",{children:["Question: ",_.question]}),Object(A.jsxs)("div",{children:["Answer: ",p?_.answer:Object(A.jsx)("button",{onClick:function(){return O(!0)},children:"Show Answer"})]})]}),Object(A.jsx)("div",{className:ht.a.some,children:[1,2,3,4,5].map((function(e){return Object(A.jsx)("button",{disabled:"loading"===t,onClick:function(){return v(e)},children:e})}))}),Object(A.jsxs)("div",{className:ht.a.some,children:["Shots: ",_.shots]})]})})};var _t=function(){var e=Object(j.b)();return Object(a.useEffect)((function(){e(function(){var e=Object(f.a)(b.a.mark((function e(t){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t(P("loading")),e.next=4,m();case 4:n=e.sent,t(ge(n.data,!0)),t(P("idle")),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),N(t,e.t0,P);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}())}),[]),Object(A.jsxs)("div",{className:"App",children:[Object(A.jsx)(Se,{}),Object(A.jsxs)(i.d,{children:[Object(A.jsx)(i.b,{path:"/profile",render:function(){return Object(A.jsx)(B,{})}}),Object(A.jsx)(i.b,{path:"/login",render:function(){return Object(A.jsx)(ve,{})}}),Object(A.jsx)(i.b,{path:"/registration",render:function(){return Object(A.jsx)(q,{})}}),Object(A.jsx)(i.b,{path:"/new-password-page/:token",render:function(){return Object(A.jsx)(te,{})}}),Object(A.jsx)(i.b,{path:"/password-recovery-page",render:function(){return Object(A.jsx)(ne,{})}}),Object(A.jsx)(i.b,{path:"/test-page",render:function(){return Object(A.jsx)(pe,{})}}),Object(A.jsx)(i.b,{path:"/error404",render:function(){return Object(A.jsx)(be,{})}}),Object(A.jsx)(i.b,{path:"/packs",render:function(){return Object(A.jsx)(et,{})}}),Object(A.jsx)(i.b,{path:"/cards/:id?",render:function(){return Object(A.jsx)(ft,{})}}),Object(A.jsx)(i.b,{path:"/learn-cards/:id",render:function(){return Object(A.jsx)(xt,{})}}),Object(A.jsx)(i.a,{exact:!0,from:"/",to:"/profile"}),Object(A.jsx)(i.a,{from:"*",to:"/error404"})]})]})},mt=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,91)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),a(e),r(e),c(e),s(e)}))},gt=n(22),vt=n(57),Ct=Object(gt.c)({app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case C:return Object(O.a)(Object(O.a)({},e),{},{appStatus:t.status});case"reg/SET-ERROR":return Object(O.a)(Object(O.a)({},e),{},{error:t.error});default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:xe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case _e:return Object(O.a)(Object(O.a)({},e),{},{userData:t.userData,isAuth:t.isAuth});case me:return Object(O.a)(Object(O.a)({},e),{},{userData:null,isAuth:!1});default:return e}},pass:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case V:return Object(O.a)(Object(O.a)({},e),{},{errorStatusForNewPass:t.error});case z:return Object(O.a)(Object(O.a)({},e),{},{valueInputPass:t.value});case Z:return Object(O.a)(Object(O.a)({},e),{},{valueInputPassRec:t.value});default:return e}},reg:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"reg/SET-REGISTER":return Object(O.a)(Object(O.a)({},e),{},{succeedRegister:t.succeedRegister});default:return e}},packs:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ue,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Fe:return Object(O.a)(Object(O.a)({},e),t.data);case De:return Object(O.a)(Object(O.a)({},e),{},{searchValue:t.value});case He:return Object(O.a)(Object(O.a)({},e),{},{sortPacks:t.value});case Le:var n=Object(Ge.a)(e.cardPacks),a=function(e,t){return e.cardsCount>t.cardsCount?-1:1},r=function(e,t){return e.cardsCount<t.cardsCount?-1:1},c=n.sort("UP"===t.sortType?a:r);return Object(O.a)(Object(O.a)({},e),{},{cardPacks:c});default:return e}},cards:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ut,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"cards/GET-CARDS":return Object(O.a)(Object(O.a)({},e),t.data);case"cards/SET-CARD-GRADE":return Object(O.a)(Object(O.a)({},e),{},{cards:e.cards.map((function(e){return e._id===t.id?Object(O.a)(Object(O.a)({},e),{},{grade:t.grade,shots:t.shots}):e}))});default:return e}}}),kt=Object(gt.d)(Ct,Object(gt.a)(vt.a));window.store=kt,s.a.render(Object(A.jsx)(r.a.StrictMode,{children:Object(A.jsx)(j.a,{store:kt,children:Object(A.jsx)(o.a,{children:Object(A.jsx)(_t,{})})})}),document.getElementById("root")),mt()}},[[90,1,2]]]);
//# sourceMappingURL=main.66115abf.chunk.js.map