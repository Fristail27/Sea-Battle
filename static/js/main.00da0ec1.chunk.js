(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{17:function(e,t,n){e.exports={main:"Paginator_main__14XI_",num:"Paginator_num__KQWJf",currentNum:"Paginator_currentNum__2GKq0",nums:"Paginator_nums__3Md42",btns:"Paginator_btns__2WIA-",startButtons:"Paginator_startButtons__1t93U",endButtons:"Paginator_endButtons__3yIvY"}},18:function(e,t,n){e.exports={registrationModule:"Registration_registrationModule__4C-LG",registrationForm:"Registration_registrationForm__3SkJI"}},22:function(e,t,n){e.exports={inputErr:"Input_inputErr__1IYV2",error:"Input_error__a3_--"}},28:function(e,t,n){e.exports={superInput:"SuperInputText_superInput__2wa_a",errorInput:"SuperInputText_errorInput__3_ZWZ",error:"SuperInputText_error__3jAp4"}},29:function(e,t,n){e.exports={default:"SuperButton_default__2jDA_",red:"SuperButton_red__O0154"}},30:function(e,t,n){e.exports={lab:"SuperCheckbox_lab__2Y2Hn",checkbox:"SuperCheckbox_checkbox__3z_aH",spanClassName:"SuperCheckbox_spanClassName__2WNVv"}},31:function(e,t,n){e.exports={container:"Navigation_container__gi6HA",wrapper:"Navigation_wrapper__2jaX7",navigation:"Navigation_navigation___o7mt"}},32:function(e,t,n){e.exports={packsHeader:"Packs_packsHeader__3NTIe",packs:"Packs_packs__3TOhW",buttons:"Packs_buttons__1IYBs"}},33:function(e,t,n){e.exports={panel:"PanelForPacks_panel__Ev1FB",search:"PanelForPacks_search__2bCiB",paginator:"PanelForPacks_paginator__2R2zq"}},34:function(e,t,n){e.exports={cardsHeader:"Cards_cardsHeader__2mjGm",cards:"Cards_cards__1p4x7",buttons:"Cards_buttons__3fCey"}},51:function(e,t,n){e.exports={formLogin:"Login_formLogin__1-aqV",elementInput:"Login_elementInput__1IqxW"}},52:function(e,t,n){e.exports={linePreloader:"PreloaderForNav_linePreloader__2K5f7",scroll:"PreloaderForNav_scroll__15MHC"}},59:function(e,t,n){},60:function(e,t,n){},86:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(25),s=n.n(c),i=(n(59),n(60),n(8)),o=n(5),u=n(6),d=n(18),l=n.n(d),j=n(2),p=n(7),b=n.n(p),O=n(11),f=n(3),h=n(16),x=n.n(h),v=x.a.create({baseURL:"https://neko-back.herokuapp.com/2.0/"}),g=function(e){return v.post("auth/register",e)},_="App/ON_CHANGE_APP_STATUS",m={appStatus:"loading"},k=function(e){return{type:_,status:e}};function C(e,t,n,a){e(n("failed")),a&&(t.response?e(a(t.response.data.error)):e(a(t.message)))}var P={succeedRegister:!1,error:void 0},w=function(e){return{type:"reg/SET-ERROR",error:e}},y=n(9),S=n.n(y),N=n(0),T=function(){return Object(N.jsxs)("div",{id:S.a.fountainG,children:[Object(N.jsx)("div",{id:S.a.fountainG_1,className:S.a.fountainG}),Object(N.jsx)("div",{id:S.a.fountainG_2,className:S.a.fountainG}),Object(N.jsx)("div",{id:S.a.fountainG_3,className:S.a.fountainG}),Object(N.jsx)("div",{id:S.a.fountainG_4,className:S.a.fountainG}),Object(N.jsx)("div",{id:S.a.fountainG_5,className:S.a.fountainG}),Object(N.jsx)("div",{id:S.a.fountainG_6,className:S.a.fountainG}),Object(N.jsx)("div",{id:S.a.fountainG_7,className:S.a.fountainG}),Object(N.jsx)("div",{id:S.a.fountainG_8,className:S.a.fountainG})]})},G=n(22),R=n.n(G),E=function(e){return!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e)},I=function(e){return e.length<8},A=function(e){var t=e.email,n=e.onChange,r=Object(a.useState)(""),c=Object(o.a)(r,2),s=c[0],i=c[1];return Object(N.jsxs)("div",{children:[Object(N.jsx)("input",{className:s&&R.a.error,onFocus:function(){return i("")},value:t,onBlur:function(){""===t.trim()&&(i("Email Required"),n("")),t&&(E(t)?i("Invalid email address"):i(""))},onChange:function(e){n(e.currentTarget.value)},placeholder:"Email",type:"email"}),s&&Object(N.jsx)("div",{className:R.a.inputErr,style:{marginTop:"-3px"},children:s})]})},F=function(e){var t=e.password,n=e.onChange,r=Object(a.useState)(""),c=Object(o.a)(r,2),s=c[0],i=c[1];return Object(N.jsxs)("div",{children:[Object(N.jsx)("input",{className:s&&R.a.error,onFocus:function(){return i("")},value:t,onBlur:function(){""===t.trim()&&i("Password Required"),t&&(I(t)?i("Password must be more than 7 characters"):i(""))},onChange:function(e){n(e.currentTarget.value.trim())},placeholder:"Password",type:"password"}),s&&Object(N.jsx)("div",{className:R.a.inputErr,style:{marginTop:"-3px"},children:s})]})},H=function(e){var t=e.name,n=e.onClick,a=e.status;return Object(N.jsx)("div",{children:Object(N.jsx)("button",{disabled:"loading"===a,style:{cursor:"pointer"},onClick:n,children:t})})},U=function(){var e=Object(j.b)(),t=Object(j.c)((function(e){return e.reg.succeedRegister})),n=Object(j.c)((function(e){return e.app.appStatus})),r=Object(j.c)((function(e){return e.reg.error})),c=Object(a.useState)(""),s=Object(o.a)(c,2),d=s[0],p=s[1],f=Object(a.useState)(""),h=Object(o.a)(f,2),x=h[0],v=h[1],_=Object(a.useState)(""),m=Object(o.a)(_,2),P=m[0],y=m[1],S=Object(a.useState)(""),G=Object(o.a)(S,2),R=G[0],I=G[1];return t?Object(N.jsx)(i.a,{to:"/login"}):Object(N.jsxs)("div",{className:l.a.registrationModule,children:[Object(N.jsx)("h1",{children:"Registration"}),Object(N.jsxs)("form",{className:l.a.registrationForm,onSubmit:function(e){return e.preventDefault()},children:[Object(N.jsx)(A,{email:d,onChange:p}),Object(N.jsx)(F,{password:x,onChange:v}),Object(N.jsx)("input",{value:P,onChange:function(t){y(t.currentTarget.value),"idle"!==n&&e(k("idle"))},placeholder:"Repeat password",type:"password"}),x!==P?Object(N.jsx)("div",{style:{color:"red"},children:"Different Password"}):"",Object(N.jsx)(H,{name:"Register",onClick:function(){var t;d&&x?x!==P||E(d)?I("incorrect email or password"):e((t={email:d,password:x},function(){var e=Object(O.a)(b.a.mark((function e(n){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n(k("loading")),e.next=4,g(t);case 4:n({type:"reg/SET-REGISTER",succeedRegister:!0}),n(k("succeeded")),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),C(n,e.t0,k,w);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}())):I("required email and password")},status:n}),R&&Object(N.jsx)("div",{style:{color:"red"},children:R}),r&&Object(N.jsx)("div",{style:{color:"red"},children:r}),"loading"===n&&Object(N.jsx)(T,{}),Object(N.jsx)(u.c,{to:"/login",children:"Sign in"})]})]})},D=function(){var e=Object(j.c)((function(e){return e.auth.userData&&e.auth.userData.name}));return Object(j.c)((function(e){return e.auth.isAuth}))?Object(N.jsxs)("h1",{children:["profile ",e]}):Object(N.jsx)(i.a,{to:"/"})},L=x.a.create({withCredentials:!0,baseURL:"https://neko-back.herokuapp.com/2.0/"}),B=function(e){return L.post("auth/forgot",{email:e,from:"Fristail27  <Fristail27@gmail.com>",message:"<div style=\"background-color: lime; padding: 15px\">\n                            password recovery link: <a href='http://localhost:3000/Progect#/new-password-page/$token$'>link</a>\n                      </div>"})},M=function(e,t){return L.post("auth/set-new-password",{password:e,resetPasswordToken:t})},q={valueOfInputEmail:"",errorStatusForPassRec:null,errorStatusForNewPass:null,valueInputPass:"",valueInputPassRec:""},K="passwordRecovery/ON_CHANGE_INPUT_EMAIL",V="passwordRecovery/SET_ERROR_STATUS_FOR_PASS_REC",z="passwordRecovery/SET_ERROR_STATUS_FOR_NEW_PASS",W="passwordRecovery/ON_CHANGE_INPUT_PASS",Z="passwordRecovery/ON_CHANGE_INPUT_PASS_REC",Y=function(e){return{type:K,value:e}},J=function(e){return{type:V,error:e}},X=function(e){return{type:z,error:e}},$=function(e){return{type:W,value:e}},Q=function(e){return{type:Z,value:e}},ee=function(){var e=Object(j.b)(),t=r.a.useState(!1),n=Object(o.a)(t,2),a=n[0],c=n[1],s=r.a.useState(!1),u=Object(o.a)(s,2),d=u[0],l=u[1],p=r.a.useState(!1),f=Object(o.a)(p,2),h=f[0],x=f[1],v=Object(j.c)((function(e){return e.pass.errorStatusForNewPass})),g=Object(j.c)((function(e){return e.pass.valueInputPass})),_=I(g),m=Object(j.c)((function(e){return e.pass.valueInputPassRec})),P=I(m),w=Object(j.c)((function(e){return e.app.appStatus})),y=Object(i.g)().token,S=_&&d?{border:"2px solid red"}:{},G=P&&h?{border:"2px solid red"}:{};return Object(N.jsxs)("div",{children:[a&&Object(N.jsx)(i.a,{to:"/login"}),Object(N.jsx)("h1",{children:"New Password Page"}),Object(N.jsxs)("label",{style:{display:"block"},children:[Object(N.jsx)("input",{onBlur:function(){_?(e(X("\u041d\u0435\u043a\u043e\u0440\u0435\u043a\u0442\u043d\u044b\u0439 \u043f\u0430\u0440\u043e\u043b\u044c")),l(!0),x(!0)):e(X(null))},onFocus:function(){return l(!0)},style:S,value:g,onChange:function(t){v&&e(X(null)),(d||h)&&(l(!1),x(!1)),e($(t.currentTarget.value))},type:"text"}),"Password"]}),Object(N.jsxs)("label",{style:{display:"block"},children:[Object(N.jsx)("input",{onBlur:function(){P?(e(X("\u041d\u0435\u043a\u043e\u0440\u0435\u043a\u0442\u043d\u044b\u0439 \u043f\u0430\u0440\u043e\u043b\u044c")),l(!0),x(!0)):e(X(null))},onFocus:function(){return x(!0)},style:G,value:m,onChange:function(t){v&&e(X(null)),"idle"!==w&&e(k("idle")),(d||h)&&(l(!1),x(!1)),e(Q(t.currentTarget.value))},type:"text"}),"repeat Password"]}),v&&Object(N.jsx)("span",{style:{color:"red"},children:v}),Object(N.jsx)("button",{disabled:"loading"===w,onClick:function(){g!==m?e(X("\u041f\u0430\u0440\u043e\u043b\u0438 \u043d\u0435 \u0441\u043e\u0432\u043f\u0430\u0434\u0430\u044e\u0442")):I(g)?e(X("\u0414\u043b\u0438\u043d\u0430 \u043f\u0430\u0440\u043e\u043b\u044f \u0434\u043e\u043b\u0436\u043d\u0430 \u0431\u044b\u0442\u044c \u0431\u043e\u043b\u044c\u0448\u0435 7 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432")):(y&&e(function(e,t){return function(){var n=Object(O.a)(b.a.mark((function n(a){return b.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,a(k("loading")),n.next=4,M(e,t);case 4:a($("")),a(Q("")),a(k("succeeded")),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),C(a,n.t0,k,X);case 12:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(e){return n.apply(this,arguments)}}()}(g,y)),"succeeded"===w&&(c(!0),e(k("idle"))))},children:"Change Pass"}),"loading"===w&&Object(N.jsx)(T,{}),"succeeded"===w&&Object(N.jsx)("span",{style:{color:"green"},children:w})]})},te=function(){var e=Object(j.b)(),t=Object(j.c)((function(e){return e.pass.valueOfInputEmail})),n=E(t),a=Object(j.c)((function(e){return e.pass.errorStatusForPassRec})),r=Object(j.c)((function(e){return e.app.appStatus}));return Object(N.jsxs)("div",{children:[Object(N.jsx)("h1",{children:"Password Recovery Page"}),Object(N.jsxs)("form",{className:l.a.registrationForm,onSubmit:function(e){return e.preventDefault()},children:[Object(N.jsx)(A,{email:t,onChange:function(t){e(Y(t))}}),Object(N.jsx)(H,{name:"Send email",onClick:function(){var a;e(n?J("\u041d\u0435\u043a\u043e\u0440\u0435\u043a\u0442\u043d\u044b\u0439 Email"):(a=t,function(){var e=Object(O.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t(k("loading")),e.next=4,B(a);case 4:t(Y("")),t(k("succeeded")),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),C(t,e.t0,k,J);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()))},status:r}),a&&Object(N.jsx)("p",{style:{color:"red"},children:a})]}),"loading"===r&&Object(N.jsx)(T,{}),"succeeded"===r&&Object(N.jsx)("span",{style:{color:"green"},children:r})]})},ne=n(20),ae=n(28),re=n.n(ae),ce=function(e){e.type;var t=e.onChange,n=e.onChangeText,a=e.onKeyPress,r=e.onEnter,c=e.error,s=(e.className,e.spanClassName),i=Object(ne.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),o="".concat(re.a.error," ").concat(s||""),u="".concat(re.a.superInput," ").concat(c?re.a.errorInput:""," ");return Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)("input",Object(f.a)({type:"text",onChange:function(e){t&&t(e),n&&n(e.currentTarget.value)},onKeyPress:function(e){a&&a(e),"Enter"===e.key&&r&&r()},className:u},i)),c&&Object(N.jsx)("span",{className:o,children:c})]})},se=n(29),ie=n.n(se),oe=function(e){var t=e.red,n=e.className,a=Object(ne.a)(e,["red","className"]),r=" ".concat(ie.a.default," ").concat(t?ie.a.red:ie.a.default," ").concat(n);return Object(N.jsx)("button",Object(f.a)({className:r},a))},ue=n(30),de=n.n(ue),le=function(e){e.type;var t=e.onChange,n=e.onChangeChecked,a=e.className,r=(e.spanClassName,e.children),c=Object(ne.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),s="".concat(de.a.checkbox," ").concat(a||"");return Object(N.jsxs)("label",{className:de.a.lab,children:[Object(N.jsx)("input",Object(f.a)({type:"checkbox",onChange:function(e){t&&t(e),n&&n(e.currentTarget.checked)},className:s},c)),r&&Object(N.jsx)("div",{className:de.a.spanClassName,children:r})]})},je=function(){return Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)(ce,{}),Object(N.jsx)(oe,{children:"TEST"}),Object(N.jsx)(le,{children:"TEST"}),Object(N.jsx)(T,{})]})},pe=function(){return Object(N.jsx)("h1",{children:"Error404: Page not found"})},be=function(){return Object(N.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:[Object(N.jsx)(u.c,{to:"/login",children:"Login"}),Object(N.jsx)(u.c,{to:"/registration",children:"registration"}),Object(N.jsx)(u.c,{to:"/new-password-page",children:"new-password-page"}),Object(N.jsx)(u.c,{to:"/password-recovery-page",children:"password-recovery-page"}),Object(N.jsx)(u.c,{to:"/test-page",children:"test-page"}),Object(N.jsx)(u.c,{to:"/error404",children:"error404"}),Object(N.jsx)(u.c,{to:"/packs",children:"Packs"}),Object(N.jsx)(u.c,{to:"/cards",children:"Cards"})]})},Oe=n(51),fe=n.n(Oe),he=function(e){var t=Object(j.c)((function(e){return e.app.appStatus}));return Object(N.jsxs)("div",{children:[Object(N.jsx)("h1",{children:"Authentication"}),Object(N.jsxs)("form",{className:l.a.registrationForm,onSubmit:function(e){return e.preventDefault()},children:[Object(N.jsx)(A,{email:e.email,onChange:e.emailHandler}),Object(N.jsx)(F,{password:e.password,onChange:e.passwordHandler}),Object(N.jsxs)("div",{className:fe.a.elementInput,children:[Object(N.jsx)("span",{children:"Remember me"}),Object(N.jsx)("input",{onChange:e.checkHandler,type:"checkbox",checked:e.check})]}),Object(N.jsx)(H,{name:"Login",onClick:e.onSubmit,status:t}),e.error&&Object(N.jsx)("div",{style:{color:"red"},children:e.error}),"loading"===t&&Object(N.jsx)(T,{})]})]})},xe=x.a.create(Object(f.a)({baseURL:"https://neko-back.herokuapp.com/2.0/"},{withCredentials:!0})),ve=function(e){return xe.post("auth/login",e)},ge=function(){return xe.post("auth/me",{})},_e=function(){return xe.delete("auth/me",{})},me={userData:null,isAuth:!1,loginSuccess:!1},ke="auth/AUTH_TRY",Ce="auth/LOGOUT",Pe=function(e,t){return{type:ke,userData:e,isAuth:t}},we=function(){var e=Object(j.b)(),t=Object(j.c)((function(e){return e.app.appStatus})),n=Object(j.c)((function(e){return e.reg.error})),r=Object(j.c)((function(e){return e.auth.isAuth})),c=Object(a.useState)(""),s=Object(o.a)(c,2),u=s[0],d=s[1],l=Object(a.useState)(""),p=Object(o.a)(l,2),f=p[0],h=p[1],x=Object(a.useState)(!1),v=Object(o.a)(x,2),g=v[0],_=v[1];return r?Object(N.jsx)(i.a,{to:"./profile"}):Object(N.jsx)(he,{emailHandler:function(n){d(n),"idle"!==t&&e(k("idle"))},checkHandler:function(n){_(n.currentTarget.checked),"idle"!==t&&e(k("idle"))},passwordHandler:function(n){h(n),"idle"!==t&&e(k("idle"))},email:u,password:f,check:g,onSubmit:function(){var t;e((t={email:u,password:f,rememberMe:g},function(){var e=Object(O.a)(b.a.mark((function e(n){var a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n(k("loading")),e.next=4,ve(t);case 4:(a=e.sent).data&&!a.data.error?(n(Pe(a.data,!0)),n(k("succeeded"))):(n(Pe(me.userData,!1)),n(k("failed"))),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),C(n,e.t0,k,w);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()))},error:n})},ye=n(31),Se=n.n(ye),Ne=n(52),Te=n.n(Ne),Ge=function(){return Object(N.jsx)("div",{className:Te.a.linePreloader})},Re=function(){var e=Object(j.b)(),t=Object(j.c)((function(e){return e.auth.isAuth})),n=Object(j.c)((function(e){return e.app.appStatus})),a=t?"/":"/login";return Object(N.jsxs)("div",{className:Se.a.container,children:[Object(N.jsxs)("div",{className:Se.a.wrapper,children:[Object(N.jsxs)("nav",{className:Se.a.navigation,children:[Object(N.jsx)(u.b,{to:"/",children:"Home"}),Object(N.jsx)(u.b,{to:"/profile",children:"Profile"})]}),Object(N.jsx)(u.c,{to:a,children:Object(N.jsx)("button",{onClick:function(){t&&(e(function(){var e=Object(O.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t(k("loading")),e.next=4,_e();case 4:t({type:Ce}),t(k("succeeded")),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),C(t,e.t0,k);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()),e(k("idle")))},children:t?Object(N.jsx)("span",{children:"Logout"}):Object(N.jsx)("span",{children:"Login"})})})]}),"loading"===n&&Object(N.jsx)(Ge,{})]})},Ee=n(32),Ie=n.n(Ee),Ae=n(54),Fe=x.a.create({baseURL:"https://neko-back.herokuapp.com/2.0/",withCredentials:!0}),He=function(e){return Fe.get("cards/pack",{params:e})},Ue=function(e){return Fe.post("cards/pack",{cardsPack:e})},De=function(e){return Fe.delete("cards/pack?id=".concat(e))},Le=function(e){return Fe.put("cards/pack",{cardsPack:e})},Be="packs/GET-CARDS-PACKS",Me="packs/SET_SEARCH_VALUE",qe="packs/SET_SORT_TYPE",Ke="packs/SET_SORT_PACKS_ON_PAGE",Ve={cardPacks:[],cardPacksTotalCount:0,maxCardsCount:1e3,minCardsCount:0,page:1,pageCount:10,searchValue:"",sortPacks:"0updated"},ze=function(e){return{type:Be,data:e}},We=function(e){return{type:qe,value:e}},Ze=function(e){return{type:Ke,sortType:e}},Ye=function(e){return function(){var t=Object(O.a)(b.a.mark((function t(n,a){var r,c;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=a().packs,n(k("loading")),t.next=4,He(Object(f.a)(Object(f.a)({},e),{},{sortPacks:r.sortPacks,pageCount:r.pageCount}));case 4:c=t.sent,n(ze(c.data)),n(k("idle"));case 7:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()},Je=n(33),Xe=n.n(Je),$e=n(17),Qe=n.n($e),et=function(e){var t=Math.ceil(e.pagesCount/e.paginatorSize),n=Object(a.useState)(0),r=Object(o.a)(n,2),c=r[0],s=r[1],i=function(){for(var t=[],n=1;n<=e.pagesCount;n++)t.push(n);return Object(N.jsx)("div",{className:Qe.a.nums,children:t.map((function(t,n){return t>=c*e.paginatorSize&&t<c*e.paginatorSize+e.paginatorSize?t===e.currentPage?Object(N.jsx)("span",{className:Qe.a.currentNum,children:t},n):Object(N.jsx)("span",{onClick:function(){return e.clickHandler(t)},className:Qe.a.num,children:t},n):null}))})};return Object(N.jsxs)("div",{className:Qe.a.main,children:[Object(N.jsx)(i,{}),Object(N.jsxs)("div",{className:Qe.a.btns,children:[Object(N.jsxs)("div",{className:Qe.a.startButtons,children:[0!==c&&Object(N.jsx)("button",{onClick:function(){return s(0)},children:"to start"}),0!==c&&Object(N.jsx)("button",{onClick:function(){return s(c-1)},children:"back"})]}),Object(N.jsxs)("div",{className:Qe.a.endButtons,children:[c!==t-1&&Object(N.jsx)("button",{onClick:function(){return s(c+1)},children:"next"}),c!==t-1&&Object(N.jsx)("button",{onClick:function(){return s(t-1)},children:"to end"})]})]})]})},tt=function(){var e=Object(j.b)(),t=Object(j.c)((function(e){return e.packs})),n=Object(j.c)((function(e){return e.packs.searchValue})),r=Math.ceil(t.cardPacksTotalCount/t.pageCount),c=Object(a.useState)("updated"),s=Object(o.a)(c,2),i=s[0],u=s[1],d=Object(a.useState)("0"),l=Object(o.a)(d,2),p=l[0],b=l[1];return Object(a.useEffect)((function(){t.sortPacks!=="".concat(p).concat(i)&&e(We("".concat(p).concat(i)))}),[i,p]),Object(N.jsxs)("div",{className:Xe.a.panel,children:[Object(N.jsxs)("div",{className:Xe.a.search,children:[Object(N.jsx)("input",{value:n,onChange:function(t){return e((n=t.currentTarget.value,{type:Me,value:n}));var n}}),Object(N.jsx)("button",{onClick:function(){return e(Ye({page:1,packName:n}))},children:"find"})]}),Object(N.jsxs)("div",{children:["\u0421\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c:",Object(N.jsxs)("select",{onChange:function(t){u(t.currentTarget.value),e(We("".concat(p).concat(i)))},value:i,name:"",id:"",children:[Object(N.jsx)("option",{value:"updated",children:" \u041f\u043e \u0434\u0430\u0442\u0435 \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u044f"}),Object(N.jsx)("option",{value:"name",children:"\u041f\u043e \u0438\u043c\u0435\u043d\u0438"}),Object(N.jsx)("option",{value:"cardsCount",children:"\u041f\u043e \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u0443 \u043a\u0430\u0440\u0442"})]}),Object(N.jsxs)("select",{onChange:function(t){b(t.currentTarget.value),e(We("".concat(p).concat(i)))},value:p,name:"",id:"",children:[Object(N.jsx)("option",{value:"0",children:"\u041f\u043e \u0443\u0431\u044b\u0432\u0430\u043d\u0438\u044e"}),Object(N.jsx)("option",{value:"1",children:"\u041f\u043e \u0432\u043e\u0437\u0440\u0430\u0441\u0442\u0430\u043d\u0438\u044e"})]}),Object(N.jsx)("button",{onClick:function(){e(Ye({sortPacks:"".concat(p).concat(i)}))},children:"Sort"})]}),Object(N.jsx)("div",{className:Xe.a.paginator,children:Object(N.jsx)(et,{clickHandler:function(t){return e(Ye({page:t,packName:n}))},paginatorSize:10,currentPage:t.page,pagesCount:r})})]})},nt=function(){var e=Object(j.b)(),t=Object(j.c)((function(e){return e.app.appStatus})),n=Object(j.c)((function(e){var t;return null===(t=e.auth.userData)||void 0===t?void 0:t._id})),r=Object(j.c)((function(e){return e.packs.cardPacks})),c=Object(a.useState)(0),s=Object(o.a)(c,2),i=s[0],d=s[1],l=function(t){e(function(e){return function(){var t=Object(O.a)(b.a.mark((function t(n,a){var r;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=a().packs,t.next=3,De(e);case 3:n(Ye({page:r.page,pageCount:r.pageCount,max:r.maxCardsCount,min:r.minCardsCount}));case 4:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()}(t))},p=function(t){e(function(e){return function(){var t=Object(O.a)(b.a.mark((function t(n,a){var r;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=a().packs,t.next=3,Le(e);case 3:n(Ye({page:r.page,pageCount:r.pageCount,max:r.maxCardsCount,min:r.minCardsCount}));case 4:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()}(t))};return"loading"!==t&&1!==i&&d(1),Object(a.useEffect)((function(){"loading"!==t&&e(Ye())}),[i]),Object(N.jsxs)("div",{children:[Object(N.jsx)(tt,{}),Object(N.jsxs)("div",{className:Ie.a.packsHeader,children:[Object(N.jsx)("div",{children:"Name"}),Object(N.jsxs)("div",{children:["cardsCount",Object(N.jsx)("button",{onClick:function(){return e(Ze("UP"))},children:"Up"}),Object(N.jsx)("button",{onClick:function(){return e(Ze("DOWN"))},children:"Down"})]}),Object(N.jsx)("div",{children:"Created"}),Object(N.jsx)("div",{children:"Updated"}),Object(N.jsx)("div",{children:Object(N.jsx)("button",{style:{margin:"10px"},onClick:function(){var t;e((t={name:"New Pack"},function(){var e=Object(O.a)(b.a.mark((function e(n,a){var r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=a().packs,e.next=3,Ue(t);case 3:n(Ye({page:r.page,pageCount:r.pageCount,max:r.maxCardsCount,min:r.minCardsCount}));case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()))},children:"add"})})]}),r.map((function(e){return Object(N.jsxs)("div",{className:Ie.a.packs,children:[Object(N.jsx)("div",{style:{width:"300px"},children:e.name}),Object(N.jsx)("div",{style:{width:"300px"},children:e.cardsCount}),Object(N.jsx)("div",{style:{width:"300px"},children:e.created}),Object(N.jsx)("div",{style:{width:"300px"},children:e.updated}),Object(N.jsxs)("div",{className:Ie.a.buttons,children:[Object(N.jsx)("button",{disabled:n!==e.user_id,style:{margin:"10px"},onClick:function(){return l(e._id)},children:"delete"}),Object(N.jsx)("button",{disabled:n!==e.user_id,style:{margin:"10px"},onClick:function(){return p({_id:e._id,name:"Extra new"})},children:"update"}),Object(N.jsx)(u.c,{to:"/cards/".concat(e._id),style:{margin:"10px"},children:"cards"})]})]},e._id)}))]})},at=n(34),rt=n.n(at),ct=x.a.create({baseURL:"https://neko-back.herokuapp.com/2.0/",withCredentials:!0}),st=function(e){return ct.get("cards/card",{params:e})},it=function(e){return ct.post("cards/card",{card:e})},ot=function(e){return ct.delete("cards/card?id=".concat(e))},ut=function(e){return ct.put("cards/card",{card:e})},dt={cards:[],cardsTotalCount:0,maxGrade:10,minGrade:0,page:1,pageCount:15,packUserId:""},lt=function(e){return function(t,n){var a=n().cards;st(e).then((function(e){t(function(e){return{type:"cards/GET-CARDS",data:e}}(Object(f.a)(Object(f.a)({},e.data),{},{pageCount:a.pageCount})))}))}},jt=function(){var e=Object(j.b)(),t=Object(j.c)((function(e){return e.cards.cards})),n=Object(j.c)((function(e){var t;return null===(t=e.auth.userData)||void 0===t?void 0:t._id})),r=Object(j.c)((function(e){return e.cards})),c=Object(j.c)((function(e){return e.app.appStatus})),s=Object(i.g)().id,u=Object(a.useState)(0),d=Object(o.a)(u,2),l=d[0],p=d[1],b=function(t,n){e(function(e,t){return function(n,a){var r=a().cards;ot(e).then((function(){n(lt({cardsPack_id:t,max:r.maxGrade,min:r.minGrade,page:r.page,pageCount:r.pageCount}))}))}}(t,n))},O=function(t){var n,a;s&&e((n=s,a={_id:t,comments:"new ans",question:"new que"},function(e,t){var r=t().cards;ut(a).then((function(){e(lt({cardsPack_id:n,max:r.maxGrade,min:r.minGrade,page:r.page,pageCount:r.pageCount}))}))}))};return"loading"!==c&&1!==l&&p(1),Object(a.useEffect)((function(){s&&"loading"!==c&&e(lt({cardsPack_id:s,pageCount:r.pageCount}))}),[l]),Object(N.jsxs)("div",{children:[Object(N.jsx)(et,{clickHandler:function(t){return e(lt({page:t,cardsPack_id:s,pageCount:r.pageCount}))},paginatorSize:10,pagesCount:Math.ceil(r.cardsTotalCount/r.pageCount),currentPage:r.page}),Object(N.jsxs)("div",{className:rt.a.cardsHeader,children:[Object(N.jsx)("div",{children:"Question"}),Object(N.jsx)("div",{children:"Answer"}),Object(N.jsx)("div",{children:"Grade"}),Object(N.jsx)("div",{children:"Created"}),Object(N.jsx)("div",{children:"Updated"}),Object(N.jsx)("div",{children:Object(N.jsx)("button",{disabled:n!==r.packUserId,style:{margin:"10px"},onClick:function(){var t;s&&e((t={cardsPack_id:s,answer:"ans",question:"que"},function(e,n){var a=n().cards;it(t).then((function(){e(lt({cardsPack_id:t.cardsPack_id,max:a.maxGrade,min:a.minGrade,page:a.page,pageCount:a.pageCount}))}))}))},children:"Add"})})]}),t.map((function(e){return Object(N.jsxs)("div",{className:rt.a.cards,children:[Object(N.jsx)("div",{style:{width:"250px"},children:e.question}),Object(N.jsx)("div",{style:{width:"250px"},children:e.answer}),Object(N.jsx)("div",{style:{width:"250px"},children:e.grade}),Object(N.jsx)("div",{style:{width:"250px"},children:e.created}),Object(N.jsx)("div",{style:{width:"250px"},children:e.updated}),Object(N.jsxs)("div",{className:rt.a.buttons,children:[Object(N.jsx)("button",{disabled:n!==r.packUserId,style:{margin:"10px"},onClick:function(){return b(e._id,e.cardsPack_id)},children:"Delete"}),Object(N.jsx)("button",{disabled:n!==r.packUserId,style:{margin:"10px"},onClick:function(){return O(e._id)},children:"Update"})]})]},e._id)}))]})};var pt=function(){var e=Object(j.b)();return Object(a.useEffect)((function(){e(function(){var e=Object(O.a)(b.a.mark((function e(t){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t(k("loading")),e.next=4,ge();case 4:n=e.sent,t(Pe(n.data,!0)),t(k("idle")),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),C(t,e.t0,k);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}())}),[e]),Object(N.jsxs)("div",{className:"App",children:[Object(N.jsx)(Re,{}),Object(N.jsxs)(i.d,{children:[Object(N.jsx)(i.b,{exact:!0,path:"/",render:function(){return Object(N.jsx)(be,{})}}),Object(N.jsx)(i.b,{path:"/login",render:function(){return Object(N.jsx)(we,{})}}),Object(N.jsx)(i.b,{path:"/registration",render:function(){return Object(N.jsx)(U,{})}}),Object(N.jsx)(i.b,{path:"/profile",render:function(){return Object(N.jsx)(D,{})}}),Object(N.jsx)(i.b,{path:"/new-password-page/:token",render:function(){return Object(N.jsx)(ee,{})}}),Object(N.jsx)(i.b,{path:"/password-recovery-page",render:function(){return Object(N.jsx)(te,{})}}),Object(N.jsx)(i.b,{path:"/test-page",render:function(){return Object(N.jsx)(je,{})}}),Object(N.jsx)(i.b,{path:"/error404",render:function(){return Object(N.jsx)(pe,{})}}),Object(N.jsx)(i.b,{path:"/packs",render:function(){return Object(N.jsx)(nt,{})}}),Object(N.jsx)(i.b,{path:"/cards/:id?",render:function(){return Object(N.jsx)(jt,{})}}),Object(N.jsx)(i.a,{from:"*",to:"/error404"})]})]})},bt=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,87)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),a(e),r(e),c(e),s(e)}))},Ot=n(21),ft=n(53),ht=Object(Ot.c)({app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case _:return Object(f.a)(Object(f.a)({},e),{},{appStatus:t.status});default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:me,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ke:return Object(f.a)(Object(f.a)({},e),{},{userData:t.userData,isAuth:t.isAuth});case Ce:return Object(f.a)(Object(f.a)({},e),{},{userData:null,isAuth:!1});default:return e}},pass:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case K:return Object(f.a)(Object(f.a)({},e),{},{valueOfInputEmail:t.value});case V:return Object(f.a)(Object(f.a)({},e),{},{errorStatusForPassRec:t.error});case z:return Object(f.a)(Object(f.a)({},e),{},{errorStatusForNewPass:t.error});case W:return Object(f.a)(Object(f.a)({},e),{},{valueInputPass:t.value});case Z:return Object(f.a)(Object(f.a)({},e),{},{valueInputPassRec:t.value});default:return e}},reg:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"reg/SET-REGISTER":return Object(f.a)(Object(f.a)({},e),{},{succeedRegister:t.succeedRegister});case"reg/SET-ERROR":return Object(f.a)(Object(f.a)({},e),{},{error:t.error});default:return e}},packs:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ve,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Be:return Object(f.a)(Object(f.a)({},e),t.data);case Me:return Object(f.a)(Object(f.a)({},e),{},{searchValue:t.value});case qe:return Object(f.a)(Object(f.a)({},e),{},{sortPacks:t.value});case Ke:var n=Object(Ae.a)(e.cardPacks),a=function(e,t){return e.cardsCount>t.cardsCount?-1:1},r=function(e,t){return e.cardsCount<t.cardsCount?-1:1},c=n.sort("UP"===t.sortType?a:r);return Object(f.a)(Object(f.a)({},e),{},{cardPacks:c});default:return e}},cards:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:dt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"cards/GET-CARDS":return Object(f.a)(Object(f.a)({},e),t.data);default:return e}}}),xt=Object(Ot.d)(ht,Object(Ot.a)(ft.a));window.store=xt,s.a.render(Object(N.jsx)(r.a.StrictMode,{children:Object(N.jsx)(j.a,{store:xt,children:Object(N.jsx)(u.a,{children:Object(N.jsx)(pt,{})})})}),document.getElementById("root")),bt()},9:function(e,t,n){e.exports={fountainG:"Preloader_fountainG__bCKyL",bounce_fountainG:"Preloader_bounce_fountainG__2KlRb",fountainG_1:"Preloader_fountainG_1__1hpN_",fountainG_2:"Preloader_fountainG_2__hEvEe",fountainG_3:"Preloader_fountainG_3__v02_w",fountainG_4:"Preloader_fountainG_4__3aewM",fountainG_5:"Preloader_fountainG_5__2kMZ5",fountainG_6:"Preloader_fountainG_6__1VZ9R",fountainG_7:"Preloader_fountainG_7__2eerP",fountainG_8:"Preloader_fountainG_8__XeV9g"}}},[[86,1,2]]]);
//# sourceMappingURL=main.00da0ec1.chunk.js.map