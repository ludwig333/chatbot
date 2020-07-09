(window.webpackJsonp=window.webpackJsonp||[]).push([[40,53,62],{"+oUc":function(t,s,a){"use strict";a.d(s,"a",(function(){return n}));var e={extends:a("H8ri").a,props:{data:{type:Object,default:null},options:{type:Object,default:null}},mounted:function(){this.renderChart(this.data,this.options)}},i=a("KHd+"),n=Object(i.a)(e,void 0,void 0,!1,null,null,null).exports},aiUu:function(t,s,a){"use strict";a.r(s);var e=a("rpDG"),i=a("+oUc"),n={metaInfo:function(){return{title:this.$trans("headings.dashboard")}},components:{VAppDefaultLayout:e.default,VChartLine:i.a},mounted:function(){},data:function(){return{productiveMonthChart:{data:{labels:[this.$trans("labels.jan"),this.$trans("labels.feb"),this.$trans("labels.mar"),this.$trans("labels.apr"),this.$trans("labels.may"),this.$trans("labels.jun"),this.$trans("labels.jul"),this.$trans("labels.aug"),this.$trans("labels.sep"),this.$trans("labels.oct"),this.$trans("labels.nov"),this.$trans("labels.dec")],datasets:[{backgroundColor:"#b4c6fc",borderColor:"#b4c6fc",pointBackgroundColor:"#fff",data:this.$page.tasks_by_month}]},options:{responsive:!0,maintainAspectRatio:!1,legend:{display:!1},scales:{xAxes:[{gridLines:{display:!1}}],yAxes:[{ticks:{beginAtZero:!0},gridLines:{display:!1}}]}}},productiveDayChart:{data:{labels:[this.$trans("labels.sun"),this.$trans("labels.mon"),this.$trans("labels.tue"),this.$trans("labels.wed"),this.$trans("labels.thu"),this.$trans("labels.fri"),this.$trans("labels.sat")],datasets:[{backgroundColor:"#b4c6fc",borderColor:"#b4c6fc",pointBackgroundColor:"#fff",data:this.$page.tasks_by_day}]},options:{responsive:!0,maintainAspectRatio:!1,legend:{display:!1},scales:{xAxes:[{gridLines:{display:!1}}],yAxes:[{ticks:{beginAtZero:!0},gridLines:{display:!1}}]}}}}}},l=a("KHd+"),r=Object(l.a)(n,(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("v-app-default-layout",{scopedSlots:t._u([{key:"header",fn:function(){return[a("h1",{staticClass:"text-2xl font-semibold text-gray-900"},[t._v(t._s(t.$trans("headings.dashboard")))])]},proxy:!0}])},[t._v(" "),[a("div",{staticClass:"container mx-auto px-4 sm:px-6 md:px-8 py-4"},[a("div",{staticClass:"mt-5 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-6"},[a("div",{staticClass:"bg-white overflow-hidden shadow rounded-lg"},[a("div",{staticClass:"px-4 py-5 sm:p-6"},[a("div",{staticClass:"flex items-center"},[a("div",{staticClass:"flex-shrink-0 bg-indigo-500 rounded-md text-white p-3"},[a("svg",{staticClass:"h-6 w-6 fill-current",attrs:{viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"}},[a("path",{attrs:{d:"M10 1l10 6-10 6L0 7l10-6zm6.67 10L20 13l-10 6-10-6 3.33-2L10 15l6.67-4z"}})])]),t._v(" "),a("div",{staticClass:"ml-5 w-0 flex-1"},[a("dl",[a("dt",{staticClass:"text-sm leading-5 font-medium text-gray-500 truncate"},[t._v("\n                                        "+t._s(t.$trans("headings.total-projects"))+"\n                                    ")]),t._v(" "),a("dd",{staticClass:"flex items-baseline"},[a("div",{staticClass:"text-2xl leading-8 font-semibold text-gray-900"},[t._v("\n                                            "+t._s(t.$page.stats.projects)+"\n                                        ")])])])])])]),t._v(" "),a("div",{staticClass:"bg-gray-50 px-4 py-4 sm:px-6"},[a("div",{staticClass:"text-sm leading-5"},[a("inertia-link",{staticClass:"font-medium text-indigo-600 hover:text-indigo-500 transition ease-in-out duration-150",attrs:{href:t.route("app:projects.index")}},[t._v("\n                                "+t._s(t.$trans("labels.view-all"))+"\n                            ")])],1)])]),t._v(" "),a("div",{staticClass:"bg-white overflow-hidden shadow rounded-lg"},[a("div",{staticClass:"px-4 py-5 sm:p-6"},[a("div",{staticClass:"flex items-center"},[a("div",{staticClass:"flex-shrink-0 bg-indigo-500 text-white rounded-md p-3"},[a("svg",{staticClass:"h-6 w-6 fill-current",attrs:{role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"}},[a("path",{attrs:{fill:"currentColor",d:"M48 48a48 48 0 1 0 48 48 48 48 0 0 0-48-48zm0 160a48 48 0 1 0 48 48 48 48 0 0 0-48-48zm0 160a48 48 0 1 0 48 48 48 48 0 0 0-48-48zm448 16H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0-320H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16zm0 160H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16z"}})])]),t._v(" "),a("div",{staticClass:"ml-5 w-0 flex-1"},[a("dl",[a("dt",{staticClass:"text-sm leading-5 font-medium text-gray-500 truncate"},[t._v("\n                                        "+t._s(t.$trans("headings.total-tasks"))+"\n                                    ")]),t._v(" "),a("dd",{staticClass:"flex items-baseline"},[a("div",{staticClass:"text-2xl leading-8 font-semibold text-gray-900"},[t._v("\n                                            "+t._s(t.$page.stats.total_tasks)+"\n                                        ")])])])])])]),t._v(" "),a("div",{staticClass:"bg-gray-50 px-4 py-4 sm:px-6"},[a("div",{staticClass:"text-sm leading-5"},[a("inertia-link",{staticClass:"font-medium text-indigo-600 hover:text-indigo-500 transition ease-in-out duration-150",attrs:{href:t.route("app:tasks.index")}},[t._v("\n                                "+t._s(t.$trans("labels.view-all"))+"\n                            ")])],1)])]),t._v(" "),a("div",{staticClass:"bg-white overflow-hidden shadow rounded-lg"},[a("div",{staticClass:"px-4 py-5 sm:p-6"},[a("div",{staticClass:"flex items-center"},[a("div",{staticClass:"flex-shrink-0 bg-indigo-500 text-white rounded-md p-3"},[a("svg",{staticClass:"h-6 w-6 fill-current",attrs:{role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"}},[a("path",{attrs:{fill:"currentColor",d:"M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z"}})])]),t._v(" "),a("div",{staticClass:"ml-5 w-0 flex-1"},[a("dl",[a("dt",{staticClass:"text-sm leading-5 font-medium text-gray-500 truncate"},[t._v("\n                                        "+t._s(t.$trans("headings.open-tasks"))+"\n                                    ")]),t._v(" "),a("dd",{staticClass:"flex items-baseline"},[a("div",{staticClass:"text-2xl leading-8 font-semibold text-gray-900"},[t._v("\n                                            "+t._s(t.$page.stats.open_tasks)+"\n                                        ")])])])])])]),t._v(" "),a("div",{staticClass:"bg-gray-50 px-4 py-4 sm:px-6"},[a("div",{staticClass:"text-sm leading-5"},[a("inertia-link",{staticClass:"font-medium text-indigo-600 hover:text-indigo-500 transition ease-in-out duration-150",attrs:{href:t.route("app:tasks.index")}},[t._v("\n                                "+t._s(t.$trans("labels.view-all"))+"\n                            ")])],1)])]),t._v(" "),a("div",{staticClass:"bg-white overflow-hidden shadow rounded-lg"},[a("div",{staticClass:"px-4 py-5 sm:p-6"},[a("div",{staticClass:"flex items-center"},[a("div",{staticClass:"flex-shrink-0 bg-indigo-500 text-white rounded-md p-3"},[a("svg",{staticClass:"h-6 w-6 text-white",attrs:{role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"}},[a("path",{attrs:{fill:"currentColor",d:"M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 48c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m140.204 130.267l-22.536-22.718c-4.667-4.705-12.265-4.736-16.97-.068L215.346 303.697l-59.792-60.277c-4.667-4.705-12.265-4.736-16.97-.069l-22.719 22.536c-4.705 4.667-4.736 12.265-.068 16.971l90.781 91.516c4.667 4.705 12.265 4.736 16.97.068l172.589-171.204c4.704-4.668 4.734-12.266.067-16.971z"}})])]),t._v(" "),a("div",{staticClass:"ml-5 w-0 flex-1"},[a("dl",[a("dt",{staticClass:"text-sm leading-5 font-medium text-gray-500 truncate"},[t._v("\n                                        "+t._s(t.$trans("headings.completed-tasks"))+"\n                                    ")]),t._v(" "),a("dd",{staticClass:"flex items-baseline"},[a("div",{staticClass:"text-2xl leading-8 font-semibold text-gray-900"},[t._v("\n                                            "+t._s(t.$page.stats.completed_tasks)+"\n                                        ")])])])])])]),t._v(" "),a("div",{staticClass:"bg-gray-50 px-4 py-4 sm:px-6"},[a("div",{staticClass:"text-sm leading-5"},[a("inertia-link",{staticClass:"font-medium text-indigo-600 hover:text-indigo-500 transition ease-in-out duration-150",attrs:{href:t.route("app:tasks.index",{filter:"completed"})}},[t._v("\n                                "+t._s(t.$trans("labels.view-all"))+"\n                            ")])],1)])])]),t._v(" "),a("div",{staticClass:"grid grid-cols-1 sm:grid-cols-2 gap-6"},[a("div",{staticClass:"flex flex-col bg-white rounded-lg shadow"},[a("div",{staticClass:"p-4"},[a("div",{staticClass:"font-semibold"},[t._v("\n                            "+t._s(t.$trans("headings.most-productive-month-was"))+"\n                            "),t.$page.tasks_by_month_count>0?a("span",{staticClass:"border-b-2 border-indigo-300"},[t._v(t._s(t.$page.most_productive_month))]):a("span",[t._v("-")])])]),t._v(" "),a("div",{staticClass:"p-4"},[a("v-chart-line",{attrs:{data:t.productiveMonthChart.data,height:400,options:t.productiveMonthChart.options}})],1)]),t._v(" "),a("div",{staticClass:"flex flex-col bg-white rounded-lg shadow"},[a("div",{staticClass:"p-4"},[a("span",{staticClass:"font-semibold"},[t._v("\n                            "+t._s(t.$trans("headings.you-accomplished-the-most-on"))+"\n                            "),t.$page.tasks_by_day_count>0?a("span",{staticClass:"border-b-2 border-indigo-300"},[t._v(t._s(t.$page.most_productive_day))]):a("span",[t._v("-")])])]),t._v(" "),a("div",{staticClass:"p-4"},[a("v-chart-line",{attrs:{data:t.productiveDayChart.data,height:400,options:t.productiveDayChart.options}})],1)])])])]],2)}),[],!1,null,null,null);s.default=r.exports},rpDG:function(t,s,a){"use strict";a.r(s);var e={components:{VNavMenu:a("sHez").default},data:function(){return{sidebarOpen:!1}}},i=a("KHd+"),n=Object(i.a)(e,(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"h-screen flex overflow-hidden bg-gray-100",attrs:{id:"app"}},[a("div",{staticClass:"md:hidden"},[a("div",{staticClass:"fixed inset-0 z-30 bg-gray-600 opacity-0 pointer-events-none transition-opacity ease-linear duration-300",class:{"opacity-75 pointer-events-auto":t.sidebarOpen,"opacity-0 pointer-events-none":!t.sidebarOpen},on:{click:function(s){t.sidebarOpen=!1}}}),t._v(" "),a("div",{staticClass:"fixed inset-y-0 left-0 flex flex-col z-40 max-w-xs w-full bg-gray-800 transform ease-in-out duration-300 ",class:{"translate-x-0":t.sidebarOpen,"-translate-x-full":!t.sidebarOpen}},[a("div",{staticClass:"absolute top-0 right-0 -mr-14 p-1"},[t.sidebarOpen?a("button",{staticClass:"flex items-center justify-center h-12 w-12 rounded-full focus:outline-none focus:bg-gray-600",on:{click:function(s){t.sidebarOpen=!1}}},[a("svg",{staticClass:"h-6 w-6 text-white",attrs:{stroke:"currentColor",fill:"none",viewBox:"0 0 24 24"}},[a("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"}})])]):t._e()]),t._v(" "),a("v-nav-menu")],1)]),t._v(" "),a("div",{staticClass:"hidden md:flex md:flex-shrink-0"},[a("div",{staticClass:"flex flex-col w-64 bg-gray-800"},[a("v-nav-menu")],1)]),t._v(" "),a("div",{staticClass:"flex flex-col w-0 flex-1 overflow-hidden"},[a("div",{staticClass:"md:hidden pl-1 pt-1 sm:pl-3 sm:pt-3"},[a("button",{staticClass:"-ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:bg-gray-200 transition ease-in-out duration-150",on:{click:function(s){s.stopPropagation(),t.sidebarOpen=!0}}},[a("svg",{staticClass:"h-6 w-6",attrs:{stroke:"currentColor",fill:"none",viewBox:"0 0 24 24"}},[a("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16M4 18h16"}})])])]),t._v(" "),a("main",{staticClass:"flex flex-col flex-1 relative z-0 overflow-y-auto pt-6 focus:outline-none",attrs:{tabindex:"0"}},[a("div",{staticClass:"flex items-center px-4 mb-4 sm:px-6 lg:px-8"},[t._t("header")],2),t._v(" "),t._t("default")],2)])])}),[],!1,null,null,null);s.default=n.exports},sHez:function(t,s,a){"use strict";a.r(s);var e=a("KHd+"),i=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"h-0 flex-1 flex flex-col pb-4 overflow-y-auto"},[a("div",{staticClass:"flex items-center flex-shrink-0 bg-gray-900 py-4 px-4 mb-4"},[a("inertia-link",{attrs:{href:t.route("app:dashboard")}},[a("img",{staticClass:"h-8 w-auto select-none",attrs:{src:t.$page.logo_dark,alt:"logo"}})])],1),t._v(" "),a("div",{staticClass:"flex-shrink-0 flex px-6 pt-1"},[a("inertia-link",{staticClass:"flex-shrink-0 group block focus:outline-none",attrs:{href:t.route("app:profile.edit")}},[a("div",{staticClass:"flex items-center"},[a("div",[a("img",{staticClass:"inline-block h-9 w-9 rounded-full",attrs:{src:t.$page.user.avatar_url,alt:t.$page.user.name}})]),t._v(" "),a("div",{staticClass:"ml-3"},[a("p",{staticClass:"text-sm leading-5 font-medium text-white"},[t._v("\n                        "+t._s(t.$page.user.name)+"\n                    ")]),t._v(" "),a("p",{staticClass:"text-xs leading-4 font-medium text-gray-400 group-hover:text-gray-300 group-focus:underline transition ease-in-out duration-150"},[t._v("\n                        "+t._s(t.$trans("labels.profile-settings"))+"\n                    ")])])])])],1),t._v(" "),a("nav",{staticClass:"mt-5 bg-gray-800"},[a("inertia-link",{staticClass:"group mb-1 flex items-center px-6 py-2 text-sm leading-6 focus:outline-none focus:bg-gray-700 hover:text-white hover:bg-gray-700 transition ease-in-out duration-150",class:[t.route().current("app:dashboard")?"text-white bg-gray-900":"text-gray-300"],attrs:{href:t.route("app:dashboard")}},[a("svg",{staticClass:"w-4 h-4 fill-current mr-3",attrs:{viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"}},[a("path",{attrs:{d:"M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm-5.6-4.29a9.95 9.95 0 0 1 11.2 0 8 8 0 1 0-11.2 0zm6.12-7.64l3.02-3.02 1.41 1.41-3.02 3.02a2 2 0 1 1-1.41-1.41z"}})]),t._v("\n\n            "+t._s(t.$trans("labels.dashboard"))+"\n        ")]),t._v(" "),a("inertia-link",{staticClass:"group mb-1 flex items-center px-6 py-2 text-sm leading-6 focus:outline-none focus:bg-gray-700 hover:text-white hover:bg-gray-700 transition ease-in-out duration-150",class:[t.route().current("app:projects.index")?"text-white bg-gray-900":"text-gray-300"],attrs:{href:t.route("app:projects.index")}},[a("svg",{staticClass:"w-4 h-4 fill-current mr-3",attrs:{viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"}},[a("path",{attrs:{d:"M10 1l10 6-10 6L0 7l10-6zm6.67 10L20 13l-10 6-10-6 3.33-2L10 15l6.67-4z"}})]),t._v("\n\n            "+t._s(t.$trans("labels.projects"))+"\n        ")]),t._v(" "),a("inertia-link",{staticClass:"group mb-1 flex items-center px-6 py-2 text-sm leading-6 focus:outline-none focus:bg-gray-700 hover:text-white hover:bg-gray-700 transition ease-in-out duration-150",class:[t.route().current("app:tasks.index")?"text-white bg-gray-900":"text-gray-300"],attrs:{href:t.route("app:tasks.index")}},[a("svg",{staticClass:"w-4 h-4 fill-current mr-3",attrs:{viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"}},[a("path",{attrs:{d:"M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM6.7 9.29L9 11.6l4.3-4.3 1.4 1.42L9 14.4l-3.7-3.7 1.4-1.42z"}})]),t._v("\n\n            "+t._s(t.$trans("labels.my-tasks"))+"\n        ")]),t._v(" "),a("inertia-link",{staticClass:"group mb-1 flex items-center px-6 py-2 text-sm leading-6 focus:outline-none focus:bg-gray-700 hover:text-white hover:bg-gray-700 transition ease-in-out duration-150",class:[t.route().current("app:calendar.index")?"text-white bg-gray-900":"text-gray-300"],attrs:{href:t.route("app:calendar.index")}},[a("svg",{staticClass:"w-4 h-4 fill-current mr-3",attrs:{viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"}},[a("path",{attrs:{d:"M1 4c0-1.1.9-2 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4zm2 2v12h14V6H3zm2-6h2v2H5V0zm8 0h2v2h-2V0zM5 9h2v2H5V9zm0 4h2v2H5v-2zm4-4h2v2H9V9zm0 4h2v2H9v-2zm4-4h2v2h-2V9zm0 4h2v2h-2v-2z"}})]),t._v("\n\n            "+t._s(t.$trans("labels.calendar"))+"\n        ")])],1),t._v(" "),a("nav",{staticClass:"flex flex-col flex-1 mt-3 bg-gray-800"},[a("div",{staticClass:"px-6 mb-2"},[a("span",{staticClass:"text-sm text-gray-500 font-semibold"},[t._v("\n                "+t._s(t.$trans("labels.favorites"))+"\n            ")])]),t._v(" "),t._l(t.$page.favorite_projects,(function(s){return a("inertia-link",{key:s.uuid,staticClass:"group mb-1 flex items-center px-6 py-2 text-sm leading-6 text-gray-300 focus:outline-none focus:bg-gray-700 hover:text-white hover:bg-gray-700 transition ease-in-out duration-150",attrs:{href:t.route("app:projects.show",{project:s.uuid})}},[a("div",{staticClass:"w-3 h-3 overflow-hidden rounded-full mr-3"},[a("div",{staticClass:"w-full h-full",class:["bg-"+s.color+"-400"]})]),t._v("\n            "+t._s(s.name)+"\n        ")])}))],2),t._v(" "),a("nav",[a("inertia-link",{staticClass:"group flex items-center px-6 py-2 text-sm leading-6 text-gray-300 focus:outline-none focus:bg-gray-700 hover:text-white hover:bg-gray-700 transition ease-in-out duration-150",attrs:{href:t.route("app:users.index")}},[a("svg",{staticClass:"w-4 h-4 fill-current mr-3",attrs:{viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"}},[a("path",{attrs:{d:"M3.94 6.5L2.22 3.64l1.42-1.42L6.5 3.94c.52-.3 1.1-.54 1.7-.7L9 0h2l.8 3.24c.6.16 1.18.4 1.7.7l2.86-1.72 1.42 1.42-1.72 2.86c.3.52.54 1.1.7 1.7L20 9v2l-3.24.8c-.16.6-.4 1.18-.7 1.7l1.72 2.86-1.42 1.42-2.86-1.72c-.52.3-1.1.54-1.7.7L11 20H9l-.8-3.24c-.6-.16-1.18-.4-1.7-.7l-2.86 1.72-1.42-1.42 1.72-2.86c-.3-.52-.54-1.1-.7-1.7L0 11V9l3.24-.8c.16-.6.4-1.18.7-1.7zM10 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"}})]),t._v("\n\n            "+t._s(t.$trans("labels.settings"))+"\n        ")]),t._v(" "),a("a",{staticClass:"group flex items-center px-6 py-2 text-sm leading-6 text-gray-300 focus:outline-none focus:bg-gray-700 hover:text-white hover:bg-gray-700 transition ease-in-out duration-150",attrs:{href:t.route("logout")}},[a("svg",{staticClass:"w-4 h-4 fill-current mr-3",attrs:{viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"}},[a("path",{attrs:{d:"M0 10a10 10 0 1 1 20 0 10 10 0 0 1-20 0zm2 0a8 8 0 1 0 16 0 8 8 0 0 0-16 0zm8-2h5v4h-5v3l-5-5 5-5v3z"}})]),t._v("\n\n            "+t._s(t.$trans("labels.logout"))+"\n        ")])],1)])}),[],!1,null,null,null);s.default=i.exports}}]);
//# sourceMappingURL=40.js.map?id=635cca78a85fcbce2140