(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{430:function(t,e,n){},437:function(t,e,n){"use strict";var s=n(430);n.n(s).a},440:function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"login"},[n("div",{staticClass:"login__content"},[n("form",{staticClass:"login__form",on:{submit:function(e){return e.preventDefault(),t.login(e)}}},[n("div",{staticClass:"login__form-title"},[t._v("Авторизация")]),n("div",{staticClass:"login__row"},[n("app-input",{attrs:{title:"Логин",icon:"user"},model:{value:t.user.name,callback:function(e){t.$set(t.user,"name",e)},expression:"user.name"}})],1),n("div",{staticClass:"login__row"},[n("app-input",{attrs:{title:"Пароль",icon:"key",type:"password"},model:{value:t.user.password,callback:function(e){t.$set(t.user,"password",e)},expression:"user.password"}})],1),t._m(0)])])])};s._withStripped=!0;var r=n(360);function a(t,e,n,s,r,a,i){try{var o=t[a](i),u=o.value}catch(t){return void n(t)}o.done?e(u):Promise.resolve(u).then(s,r)}var i,o,u={components:{appInput:function(){return n.e(4).then(n.bind(null,442))}},data:function(){return{user:{name:"",password:""}}},methods:{login:(i=regeneratorRuntime.mark((function t(){var e,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,r.a.post("/login",this.user);case 3:e=t.sent,n=e.data.token,localStorage.setItem("token",n),r.a.defaults.headers.Authorization="Bearer ".concat(n),this.$router.replace("/"),t.next=12;break;case 10:t.prev=10,t.t0=t.catch(0);case 12:case"end":return t.stop()}}),t,this,[[0,10]])})),o=function(){var t=this,e=arguments;return new Promise((function(n,s){var r=i.apply(t,e);function o(t){a(r,n,s,o,u,"next",t)}function u(t){a(r,n,s,o,u,"throw",t)}o(void 0)}))},function(){return o.apply(this,arguments)})}},c=(n(437),n(50)),l=Object(c.a)(u,s,[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"login__btn"},[e("button",{staticClass:"login__send-data",attrs:{type:"submit"}},[this._v("Отправить")])])}],!1,null,null,null);l.options.__file="src/admin/components/pages/login.vue";e.default=l.exports}}]);