(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{"9RUh":function(s,t,a){"use strict";a.r(t);var e=a("QZnT"),o={metaInfo:function(){return{title:this.$trans("headings.change-password")}},data:function(){return{form:new e.b({token:this.$page.token,email:this.$page.email,password:"",password_confirmation:""})}},methods:{submit:function(){var s=this;this.form.processing=!0,this.$inertia.post(route("password.reset.post"),this.form.data()).then((function(){return s.form.processing=!1}))}}},r=a("KHd+"),i=Object(r.a)(o,(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"min-h-screen bg-gray-50 flex flex-col justify-center py-12 px-6 lg:px-8"},[a("div",{staticClass:"sm:mx-auto sm:w-full sm:max-w-md"},[a("img",{staticClass:"mx-auto h-12 w-auto select-none",attrs:{src:s.$page.logo_light,alt:"logo"}}),s._v(" "),a("h2",{staticClass:"mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900"},[s._v(s._s(s.$trans("headings.change-password")))])]),s._v(" "),a("div",{staticClass:"mt-8 sm:mx-auto sm:w-full sm:max-w-md"},[a("div",{staticClass:"bg-white py-8 px-4 shadow rounded-lg sm:px-10"},[a("form",{attrs:{action:"#",method:"POST"},on:{submit:function(t){return t.preventDefault(),s.submit()}}},[a("input",{attrs:{name:"token",type:"hidden"},domProps:{value:s.form.token}}),s._v(" "),a("div",{staticClass:"form-group mb-6"},[a("span",{staticClass:"form-label"},[s._v(s._s(s.$trans("labels.email")))]),s._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:s.form.email,expression:"form.email"}],staticClass:"form-input",attrs:{type:"email"},domProps:{value:s.form.email},on:{input:function(t){t.target.composing||s.$set(s.form,"email",t.target.value)}}}),s._v(" "),s.$page.errors.has("email")?a("p",{staticClass:"invalid-feedback"},[s._v(s._s(s.$page.errors.first("email")))]):s._e()]),s._v(" "),a("div",{staticClass:"form-group mb-6"},[a("span",{staticClass:"form-label"},[s._v(s._s(s.$trans("labels.password")))]),s._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:s.form.password,expression:"form.password"}],staticClass:"form-input",attrs:{type:"password"},domProps:{value:s.form.password},on:{input:function(t){t.target.composing||s.$set(s.form,"password",t.target.value)}}}),s._v(" "),s.$page.errors.has("password")?a("p",{staticClass:"invalid-feedback"},[s._v(s._s(s.$page.errors.first("password")))]):s._e()]),s._v(" "),a("div",{staticClass:"form-group mb-6"},[a("span",{staticClass:"form-label"},[s._v(s._s(s.$trans("labels.password-confirmation")))]),s._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:s.form.password_confirmation,expression:"form.password_confirmation"}],staticClass:"form-input",attrs:{type:"password"},domProps:{value:s.form.password_confirmation},on:{input:function(t){t.target.composing||s.$set(s.form,"password_confirmation",t.target.value)}}})]),s._v(" "),a("div",{staticClass:"mt-6"},[a("button",{staticClass:"btn btn-block btn-indigo",attrs:{type:"submit",disabled:s.form.processing}},[s._v("\n                        "+s._s(s.$trans("labels.change-password"))+"\n                    ")])])])])])])}),[],!1,null,null,null);t.default=i.exports}}]);
//# sourceMappingURL=70.js.map?id=33bec718400de3fc8a90