(window.webpackJsonp=window.webpackJsonp||[]).push([[32,53,62,64],{"7NNv":function(t,e,s){"use strict";s.r(e);var a=s("KHd+"),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("nav",[s("inertia-link",{staticClass:"flex items-center px-4 py-2 rounded-lg text-sm mb-1 hover:bg-white font-semibold transition duration-150",class:{"bg-white":t.route().current("app:users.index")},attrs:{href:t.route("app:users.index")}},[t._v("\n        "+t._s(t.$trans("labels.team-members"))+"\n    ")]),t._v(" "),s("inertia-link",{staticClass:"flex items-center px-4 py-2 rounded-lg text-sm mb-1 hover:bg-white font-semibold transition duration-150",class:{"bg-white":t.route().current("app:subscription")},attrs:{href:t.route("app:subscription")}},[t._v("\n        "+t._s(t.$trans("labels.subscription"))+"\n    ")]),t._v(" "),s("inertia-link",{staticClass:"flex items-center px-4 py-2 rounded-lg text-sm mb-1 hover:bg-white font-semibold transition duration-150",class:{"bg-white":t.route().current("app:billing-information.edit")},attrs:{href:t.route("app:billing-information.edit")}},[t._v("\n        "+t._s(t.$trans("labels.billing-information"))+"\n    ")])],1)}),[],!1,null,null,null);e.default=n.exports},VVrn:function(t,e,s){"use strict";var a=s("yOFB");s.d(e,"a",(function(){return a.a}))},gyR3:function(t,e,s){"use strict";s.r(e);var a=s("rpDG"),n=s("7NNv"),r=s("VVrn"),i=s("QZnT"),l={metaInfo:function(){return{title:this.$trans("headings.billing-information")}},components:{VAppDefaultLayout:a.default,VNavMenu:n.default,VAlert:r.a},data:function(){return{form:new i.b({name:this.$page.tenant.name,phone:this.$page.tenant.phone,address_line1:this.$page.tenant.address_line1,address_line2:this.$page.tenant.address_line2,city:this.$page.tenant.city,country:this.$page.tenant.country,state:this.$page.tenant.state,postal_code:this.$page.tenant.postal_code})}},methods:{submit:function(){var t=this;this.form.processing=!0,this.$inertia.put(route("app:billing-information.update"),this.form.data()).then((function(){return t.form.processing=!1}))}}},o=s("KHd+"),u=Object(o.a)(l,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-app-default-layout",{scopedSlots:t._u([{key:"header",fn:function(){return[s("h1",{staticClass:"text-2xl font-semibold text-gray-900"},[t._v(t._s(t.$trans("headings.billing-information")))])]},proxy:!0}])},[t._v(" "),[s("div",{staticClass:"container mx-auto px-4 sm:px-6 md:px-8 py-4"},[s("div",{staticClass:"md:grid md:gap-6 md:grid-cols-8"},[s("div",{staticClass:"mb-6 sm:col-span-2"},[s("v-nav-menu")],1),t._v(" "),s("div",{staticClass:"md:col-span-6"},[t.$page.flash?s("v-alert",{attrs:{dismissible:""}},[t._v("\n                        "+t._s(t.$page.flash)+"\n                    ")]):t._e(),t._v(" "),t.$page.errors.has("demo.restrict")?s("v-alert",{attrs:{variant:"failure",dismissible:""}},[t._v("\n                        "+t._s(t.$page.errors.first("demo.restrict"))+"\n                    ")]):t._e(),t._v(" "),s("div",{staticClass:"flex flex-col bg-white rounded-lg shadow mb-6"},[s("div",{staticClass:"px-4 py-5 sm:p-6"},[s("h3",{staticClass:"text-lg leading-6 font-medium text-gray-900"},[t._v("\n                                "+t._s(t.$trans("headings.billing-information"))+"\n                            ")])]),t._v(" "),s("div",{staticClass:"px-4 py-5 sm:p-6"},[s("div",{staticClass:"mb-0 grid gap-6 sm:grid-cols-2 sm:mb-6"},[s("div",{staticClass:"form-group"},[s("label",{staticClass:"form-label"},[t._v(t._s(t.$trans("labels.name")))]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.name,expression:"form.name"}],staticClass:"form-input",domProps:{value:t.form.name},on:{input:function(e){e.target.composing||t.$set(t.form,"name",e.target.value)}}})]),t._v(" "),s("div",{staticClass:"form-group"},[s("label",{staticClass:"form-label"},[t._v(t._s(t.$trans("labels.phone")))]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.phone,expression:"form.phone"}],staticClass:"form-input",domProps:{value:t.form.phone},on:{input:function(e){e.target.composing||t.$set(t.form,"phone",e.target.value)}}})])]),t._v(" "),s("div",{staticClass:"form-group mb-6"},[s("label",{staticClass:"form-label"},[t._v(t._s(t.$trans("labels.address-line1")))]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.address_line1,expression:"form.address_line1"}],staticClass:"form-input",domProps:{value:t.form.address_line1},on:{input:function(e){e.target.composing||t.$set(t.form,"address_line1",e.target.value)}}})]),t._v(" "),s("div",{staticClass:"form-group mb-6"},[s("label",{staticClass:"form-label"},[t._v(t._s(t.$trans("labels.address-line2")))]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.address_line2,expression:"form.address_line2"}],staticClass:"form-input",domProps:{value:t.form.address_line2},on:{input:function(e){e.target.composing||t.$set(t.form,"address_line2",e.target.value)}}})]),t._v(" "),s("div",{staticClass:"mb-0 grid gap-6 sm:grid-cols-2 sm:mb-6"},[s("div",{staticClass:"form-group"},[s("label",{staticClass:"form-label"},[t._v(t._s(t.$trans("labels.city")))]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.city,expression:"form.city"}],staticClass:"form-input",domProps:{value:t.form.city},on:{input:function(e){e.target.composing||t.$set(t.form,"city",e.target.value)}}})]),t._v(" "),s("div",{staticClass:"form-group"},[s("label",{staticClass:"form-label"},[t._v(t._s(t.$trans("labels.country")))]),t._v(" "),s("select",{directives:[{name:"model",rawName:"v-model",value:t.form.country,expression:"form.country"}],staticClass:"form-select",on:{change:function(e){var s=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.form,"country",e.target.multiple?s:s[0])}}},[s("option",{attrs:{selected:"",disabled:""},domProps:{value:null}},[t._v(t._s(t.$trans("labels.select-country")))]),t._v(" "),t._l(t.$page.countries,(function(e){return s("option",{domProps:{value:e.alpha2}},[t._v("\n                                            "+t._s(e.name)+"\n                                        ")])}))],2)])]),t._v(" "),s("div",{staticClass:"mb-0 grid gap-6 sm:grid-cols-2 sm:mb-6"},[s("div",{staticClass:"form-group"},[s("label",{staticClass:"form-label"},[t._v(t._s(t.$trans("labels.state")))]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.state,expression:"form.state"}],staticClass:"form-input",domProps:{value:t.form.state},on:{input:function(e){e.target.composing||t.$set(t.form,"state",e.target.value)}}})]),t._v(" "),s("div",{staticClass:"form-group"},[s("label",{staticClass:"form-label"},[t._v(t._s(t.$trans("labels.postal-code")))]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.postal_code,expression:"form.postal_code"}],staticClass:"form-input",domProps:{value:t.form.postal_code},on:{input:function(e){e.target.composing||t.$set(t.form,"postal_code",e.target.value)}}})])])]),t._v(" "),s("div",{staticClass:"bg-gray-50 text-right rounded-b-lg px-4 py-5 sm:p-6"},[s("button",{staticClass:"btn btn-indigo",attrs:{type:"button",disabled:t.form.processing},on:{click:function(e){return t.submit()}}},[t._v("\n                                "+t._s(t.$trans("labels.save-changes"))+"\n                            ")])])])],1)])])]],2)}),[],!1,null,null,null);e.default=u.exports},rpDG:function(t,e,s){"use strict";s.r(e);var a={components:{VNavMenu:s("sHez").default},data:function(){return{sidebarOpen:!1}}},n=s("KHd+"),r=Object(n.a)(a,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"h-screen flex overflow-hidden bg-gray-100",attrs:{id:"app"}},[s("div",{staticClass:"md:hidden"},[s("div",{staticClass:"fixed inset-0 z-30 bg-gray-600 opacity-0 pointer-events-none transition-opacity ease-linear duration-300",class:{"opacity-75 pointer-events-auto":t.sidebarOpen,"opacity-0 pointer-events-none":!t.sidebarOpen},on:{click:function(e){t.sidebarOpen=!1}}}),t._v(" "),s("div",{staticClass:"fixed inset-y-0 left-0 flex flex-col z-40 max-w-xs w-full bg-gray-800 transform ease-in-out duration-300 ",class:{"translate-x-0":t.sidebarOpen,"-translate-x-full":!t.sidebarOpen}},[s("div",{staticClass:"absolute top-0 right-0 -mr-14 p-1"},[t.sidebarOpen?s("button",{staticClass:"flex items-center justify-center h-12 w-12 rounded-full focus:outline-none focus:bg-gray-600",on:{click:function(e){t.sidebarOpen=!1}}},[s("svg",{staticClass:"h-6 w-6 text-white",attrs:{stroke:"currentColor",fill:"none",viewBox:"0 0 24 24"}},[s("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"}})])]):t._e()]),t._v(" "),s("v-nav-menu")],1)]),t._v(" "),s("div",{staticClass:"hidden md:flex md:flex-shrink-0"},[s("div",{staticClass:"flex flex-col w-64 bg-gray-800"},[s("v-nav-menu")],1)]),t._v(" "),s("div",{staticClass:"flex flex-col w-0 flex-1 overflow-hidden"},[s("div",{staticClass:"md:hidden pl-1 pt-1 sm:pl-3 sm:pt-3"},[s("button",{staticClass:"-ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:bg-gray-200 transition ease-in-out duration-150",on:{click:function(e){e.stopPropagation(),t.sidebarOpen=!0}}},[s("svg",{staticClass:"h-6 w-6",attrs:{stroke:"currentColor",fill:"none",viewBox:"0 0 24 24"}},[s("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16M4 18h16"}})])])]),t._v(" "),s("main",{staticClass:"flex flex-col flex-1 relative z-0 overflow-y-auto pt-6 focus:outline-none",attrs:{tabindex:"0"}},[s("div",{staticClass:"flex items-center px-4 mb-4 sm:px-6 lg:px-8"},[t._t("header")],2),t._v(" "),t._t("default")],2)])])}),[],!1,null,null,null);e.default=r.exports},sHez:function(t,e,s){"use strict";s.r(e);var a=s("KHd+"),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"h-0 flex-1 flex flex-col pb-4 overflow-y-auto"},[s("div",{staticClass:"flex items-center flex-shrink-0 bg-gray-900 py-4 px-4 mb-4"},[s("inertia-link",{attrs:{href:t.route("app:dashboard")}},[s("img",{staticClass:"h-8 w-auto select-none",attrs:{src:t.$page.logo_dark,alt:"logo"}})])],1),t._v(" "),s("div",{staticClass:"flex-shrink-0 flex px-6 pt-1"},[s("inertia-link",{staticClass:"flex-shrink-0 group block focus:outline-none",attrs:{href:t.route("app:profile.edit")}},[s("div",{staticClass:"flex items-center"},[s("div",[s("img",{staticClass:"inline-block h-9 w-9 rounded-full",attrs:{src:t.$page.user.avatar_url,alt:t.$page.user.name}})]),t._v(" "),s("div",{staticClass:"ml-3"},[s("p",{staticClass:"text-sm leading-5 font-medium text-white"},[t._v("\n                        "+t._s(t.$page.user.name)+"\n                    ")]),t._v(" "),s("p",{staticClass:"text-xs leading-4 font-medium text-gray-400 group-hover:text-gray-300 group-focus:underline transition ease-in-out duration-150"},[t._v("\n                        "+t._s(t.$trans("labels.profile-settings"))+"\n                    ")])])])])],1),t._v(" "),s("nav",{staticClass:"mt-5 bg-gray-800"},[s("inertia-link",{staticClass:"group mb-1 flex items-center px-6 py-2 text-sm leading-6 focus:outline-none focus:bg-gray-700 hover:text-white hover:bg-gray-700 transition ease-in-out duration-150",class:[t.route().current("app:dashboard")?"text-white bg-gray-900":"text-gray-300"],attrs:{href:t.route("app:dashboard")}},[s("svg",{staticClass:"w-4 h-4 fill-current mr-3",attrs:{viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"}},[s("path",{attrs:{d:"M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm-5.6-4.29a9.95 9.95 0 0 1 11.2 0 8 8 0 1 0-11.2 0zm6.12-7.64l3.02-3.02 1.41 1.41-3.02 3.02a2 2 0 1 1-1.41-1.41z"}})]),t._v("\n\n            "+t._s(t.$trans("labels.dashboard"))+"\n        ")]),t._v(" "),s("inertia-link",{staticClass:"group mb-1 flex items-center px-6 py-2 text-sm leading-6 focus:outline-none focus:bg-gray-700 hover:text-white hover:bg-gray-700 transition ease-in-out duration-150",class:[t.route().current("app:projects.index")?"text-white bg-gray-900":"text-gray-300"],attrs:{href:t.route("app:projects.index")}},[s("svg",{staticClass:"w-4 h-4 fill-current mr-3",attrs:{viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"}},[s("path",{attrs:{d:"M10 1l10 6-10 6L0 7l10-6zm6.67 10L20 13l-10 6-10-6 3.33-2L10 15l6.67-4z"}})]),t._v("\n\n            "+t._s(t.$trans("labels.projects"))+"\n        ")]),t._v(" "),s("inertia-link",{staticClass:"group mb-1 flex items-center px-6 py-2 text-sm leading-6 focus:outline-none focus:bg-gray-700 hover:text-white hover:bg-gray-700 transition ease-in-out duration-150",class:[t.route().current("app:tasks.index")?"text-white bg-gray-900":"text-gray-300"],attrs:{href:t.route("app:tasks.index")}},[s("svg",{staticClass:"w-4 h-4 fill-current mr-3",attrs:{viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"}},[s("path",{attrs:{d:"M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM6.7 9.29L9 11.6l4.3-4.3 1.4 1.42L9 14.4l-3.7-3.7 1.4-1.42z"}})]),t._v("\n\n            "+t._s(t.$trans("labels.my-tasks"))+"\n        ")]),t._v(" "),s("inertia-link",{staticClass:"group mb-1 flex items-center px-6 py-2 text-sm leading-6 focus:outline-none focus:bg-gray-700 hover:text-white hover:bg-gray-700 transition ease-in-out duration-150",class:[t.route().current("app:calendar.index")?"text-white bg-gray-900":"text-gray-300"],attrs:{href:t.route("app:calendar.index")}},[s("svg",{staticClass:"w-4 h-4 fill-current mr-3",attrs:{viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"}},[s("path",{attrs:{d:"M1 4c0-1.1.9-2 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4zm2 2v12h14V6H3zm2-6h2v2H5V0zm8 0h2v2h-2V0zM5 9h2v2H5V9zm0 4h2v2H5v-2zm4-4h2v2H9V9zm0 4h2v2H9v-2zm4-4h2v2h-2V9zm0 4h2v2h-2v-2z"}})]),t._v("\n\n            "+t._s(t.$trans("labels.calendar"))+"\n        ")])],1),t._v(" "),s("nav",{staticClass:"flex flex-col flex-1 mt-3 bg-gray-800"},[s("div",{staticClass:"px-6 mb-2"},[s("span",{staticClass:"text-sm text-gray-500 font-semibold"},[t._v("\n                "+t._s(t.$trans("labels.favorites"))+"\n            ")])]),t._v(" "),t._l(t.$page.favorite_projects,(function(e){return s("inertia-link",{key:e.uuid,staticClass:"group mb-1 flex items-center px-6 py-2 text-sm leading-6 text-gray-300 focus:outline-none focus:bg-gray-700 hover:text-white hover:bg-gray-700 transition ease-in-out duration-150",attrs:{href:t.route("app:projects.show",{project:e.uuid})}},[s("div",{staticClass:"w-3 h-3 overflow-hidden rounded-full mr-3"},[s("div",{staticClass:"w-full h-full",class:["bg-"+e.color+"-400"]})]),t._v("\n            "+t._s(e.name)+"\n        ")])}))],2),t._v(" "),s("nav",[s("inertia-link",{staticClass:"group flex items-center px-6 py-2 text-sm leading-6 text-gray-300 focus:outline-none focus:bg-gray-700 hover:text-white hover:bg-gray-700 transition ease-in-out duration-150",attrs:{href:t.route("app:users.index")}},[s("svg",{staticClass:"w-4 h-4 fill-current mr-3",attrs:{viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"}},[s("path",{attrs:{d:"M3.94 6.5L2.22 3.64l1.42-1.42L6.5 3.94c.52-.3 1.1-.54 1.7-.7L9 0h2l.8 3.24c.6.16 1.18.4 1.7.7l2.86-1.72 1.42 1.42-1.72 2.86c.3.52.54 1.1.7 1.7L20 9v2l-3.24.8c-.16.6-.4 1.18-.7 1.7l1.72 2.86-1.42 1.42-2.86-1.72c-.52.3-1.1.54-1.7.7L11 20H9l-.8-3.24c-.6-.16-1.18-.4-1.7-.7l-2.86 1.72-1.42-1.42 1.72-2.86c-.3-.52-.54-1.1-.7-1.7L0 11V9l3.24-.8c.16-.6.4-1.18.7-1.7zM10 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"}})]),t._v("\n\n            "+t._s(t.$trans("labels.settings"))+"\n        ")]),t._v(" "),s("a",{staticClass:"group flex items-center px-6 py-2 text-sm leading-6 text-gray-300 focus:outline-none focus:bg-gray-700 hover:text-white hover:bg-gray-700 transition ease-in-out duration-150",attrs:{href:t.route("logout")}},[s("svg",{staticClass:"w-4 h-4 fill-current mr-3",attrs:{viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"}},[s("path",{attrs:{d:"M0 10a10 10 0 1 1 20 0 10 10 0 0 1-20 0zm2 0a8 8 0 1 0 16 0 8 8 0 0 0-16 0zm8-2h5v4h-5v3l-5-5 5-5v3z"}})]),t._v("\n\n            "+t._s(t.$trans("labels.logout"))+"\n        ")])],1)])}),[],!1,null,null,null);e.default=n.exports},yOFB:function(t,e,s){"use strict";var a={props:{variant:{type:String,default:"success",validator:function(t){return["success","warning","failure"].includes(t)}},dismissible:{type:Boolean,default:!1}},data:function(){return{visible:!0}},computed:{alertClass:function(){return["alert","alert-"+this.variant]}},watch:{"$page.flash":{deep:!0,handler:function(){this.visible=!0}}}},n=s("KHd+"),r=Object(n.a)(a,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.visible?s("div",{class:t.alertClass},[s("p",[t._t("default")],2),t._v(" "),t.dismissible?s("button",{staticClass:"flex items-center p-1 focus:outline-none ml-auto",on:{click:function(e){t.visible=!1}}},[s("svg",{staticClass:"w-3 h-3 fill-current",attrs:{viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"}},[s("path",{attrs:{d:"M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z"}})])]):t._e()]):t._e()}),[],!1,null,null,null);e.a=r.exports}}]);
//# sourceMappingURL=32.js.map?id=9babe8fcd669bc02bea7