(window.webpackJsonp=window.webpackJsonp||[]).push([[3,2],{165:function(t,e,n){"use strict";var r=/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;t.exports=function(t){return!(t.length>320)&&r.test(t)}},166:function(t,e,n){var content=n(169);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(67).default)("ae00db98",content,!0,{sourceMap:!1})},167:function(t,e,n){"use strict";n.r(e);n(118),n(85),n(117),n(29);var r=n(165),o=n.n(r);function c(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return"string"==typeof t&&(t.endsWith(",")&&(t=t.substring(0,t.length-1)),t.startsWith(",")&&(t=t.substring(1)),t=t.split(",")),t=t.map((function(t){return t.trim()})),e?t:n?t.join(", "):t.join(",")}function l(t){var e=!0;return(t=c(t,!0,!1)).forEach((function(t){o()(t)||(e=!1)})),e}var d={props:{mail:{type:[String,Array],required:!0,validator:function(t){return l(t)}},cc:{type:[String,Array],default:void 0,validator:function(t){return l(t)}},bcc:{type:[String,Array],default:void 0,validator:function(t){return l(t)}},subject:{type:String,default:void 0},body:{type:String,default:void 0},target:{type:[String],default:void 0}},computed:{encoded:function(){for(var t=c(this.mail),e=[],i=t.length-1;i>=0;i--)e.unshift(["&#",t.charCodeAt(i),";"].join(""));return e.join("")}},methods:{mailtoHandler:function(t){t.preventDefault();var e,body,n,r,o,l=["mailto:",c(this.mail),(e=this.subject,body=this.body,n=this.cc,r=this.bcc,o=[],n=void 0!==n?"CC=".concat(c(n)):null,r=void 0!==r?"BCC=".concat(c(r)):null,e=void 0!==e?"subject=".concat(encodeURIComponent(e)):null,body=void 0!==body?"body=".concat(encodeURIComponent(body)):null,n&&o.push(n),r&&o.push(r),e&&o.push(e),body&&o.push(body),o.length>0?"?".concat(o.join("&")):"")];"_blank"===this.target?window.open(l.join(""),"_blank"):window.location.href=l.join("")}}},v=n(34),component=Object(v.a)(d,(function(){var t=this,e=t._self._c;return e("a",{attrs:{href:"#"},on:{click:t.mailtoHandler}},[t._t("default",(function(){return[e("span",{domProps:{innerHTML:t._s(t.encoded)}})]}))],2)}),[],!1,null,null,null);e.default=component.exports},168:function(t,e,n){"use strict";n(166)},169:function(t,e,n){var r=n(66)((function(i){return i[1]}));r.push([t.i,".button{border-radius:0.25rem;padding-left:1rem;padding-right:1rem;padding-top:0.5rem;padding-bottom:0.5rem}.button.primary{border-radius:0.25rem;--tw-bg-opacity:1;background-color:rgb(15 118 110 / var(--tw-bg-opacity));padding-left:1rem;padding-right:1rem;padding-top:0.5rem;padding-bottom:0.5rem;--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity))}.text-primary{color:#008b8b}",""]),r.locals={},t.exports=r},170:function(t,e,n){"use strict";n.r(e);n(168);var r=n(34),component=Object(r.a)({},(function(){var t=this,e=t._self._c;return e("div",[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),e("div",{attrs:{id:"contact"}},[e("div",{staticClass:"container mx-auto grid items-center py-16 gap-8"},[e("div",{staticClass:"text-4xl text-light mx-auto w-auto"},[t._v("\n        Contact Us\n      ")]),t._v(" "),e("div",{staticClass:"mx-auto w-auto"},[e("Mailto",{attrs:{mail:"contact@applicaset.com",subject:"Consultant"}},[t._v("\n          contact@applicaset.com\n        ")])],1)])]),t._v(" "),t._m(3),t._v(" "),t._m(4)])}),[function(){var t=this,e=t._self._c;return e("header",{staticClass:"border-b border-teal-700/20"},[e("nav",{staticClass:"container mx-auto p-2 flex justify-between items-center"},[e("a",{staticClass:"flex items-center",attrs:{href:"#"}},[e("img",{attrs:{src:"images/logo.svg",alt:"ApplicaSet",width:"48",height:"48"}}),t._v(" "),e("span",{staticClass:"mx-2"},[t._v("ApplicaSet")])]),t._v(" "),e("div",[e("ul",{staticClass:"flex flex-row gap-4"},[e("li",[e("a",{staticClass:"p-2",attrs:{href:"#services"}},[t._v("Services")])]),t._v(" "),e("li",[e("a",{staticClass:"p-2",attrs:{href:"#contact"}},[t._v("Contact")])]),t._v(" "),e("li",[e("a",{staticClass:"p-2",attrs:{href:"#about"}},[t._v("About")])])])])])])},function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"container mx-auto grid items-center py-16 grid-cols-2"},[e("div",{staticClass:"grid gap-4"},[e("div",{staticClass:"text-4xl font-semibold"},[t._v("\n          Migrate to "),e("span",{staticClass:"text-primary"},[t._v("any")]),t._v(" cloud easily\n        ")]),t._v(" "),e("div",[t._v("\n          We are here as your tech partner helping you create, migrate & optimize your software products in any cloud.\n        ")]),t._v(" "),e("div",{staticClass:"flex gap-4"},[e("a",{staticClass:"button primary",attrs:{href:"#contact"}},[t._v("\n            Contact Us\n          ")])]),t._v(" "),e("div",{staticClass:"text-primary text-sm"},[t._v("\n          Contact us now for a free consultation meeting.\n        ")])]),t._v(" "),e("div",[e("img",{attrs:{src:"images/cloud.svg",alt:"Cloud",width:"512",height:"512"}})])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"bg-gray-100",attrs:{id:"services"}},[e("div",{staticClass:"container mx-auto grid items-center py-16 gap-8"},[e("div",{staticClass:"text-4xl text-light mx-auto w-auto"},[t._v("\n        Our Services\n      ")]),t._v(" "),e("div",{staticClass:"mx-auto w-auto"},[t._v("\n        Custom software services and "),e("span",{staticClass:"text-primary"},[t._v("cloud")]),t._v(" solutions\n      ")]),t._v(" "),e("div",{staticClass:"grid grid-cols-3 gap-8"},[e("div",{staticClass:"bg-white rounded p-4 shadow flex flex-col gap-4 items-center"},[e("img",{attrs:{src:"images/technical-consultation.svg",alt:"Consulting",width:"64",height:"64"}}),t._v(" "),e("div",{staticClass:"text-xl"},[t._v("\n            Consulting\n          ")]),t._v(" "),e("div",{staticClass:"text-center"},[t._v("\n            Advice and solutions for modernizing your infrastructure\n          ")])]),t._v(" "),e("div",{staticClass:"bg-white rounded p-4 shadow flex flex-col gap-4 items-center"},[e("img",{attrs:{src:"images/migration.svg",alt:"Migration",width:"64",height:"64"}}),t._v(" "),e("div",{staticClass:"text-xl"},[t._v("\n            Migration\n          ")]),t._v(" "),e("div",{staticClass:"text-center"},[t._v("\n            Transform your business by migrating to the cloud\n          ")])]),t._v(" "),e("div",{staticClass:"bg-white rounded p-4 shadow flex flex-col gap-4 items-center"},[e("img",{attrs:{src:"images/accelerate-innovation.svg",alt:"Development",width:"64",height:"64"}}),t._v(" "),e("div",{staticClass:"text-xl"},[t._v("\n            Development\n          ")]),t._v(" "),e("div",{staticClass:"text-center"},[t._v("\n            Accelerating innovation by using great tools\n          ")])]),t._v(" "),e("div",{staticClass:"bg-white rounded p-4 shadow flex flex-col gap-4 items-center"},[e("img",{attrs:{src:"images/security.svg",alt:"Security",width:"64",height:"64"}}),t._v(" "),e("div",{staticClass:"text-xl"},[t._v("\n            Security\n          ")]),t._v(" "),e("div",{staticClass:"text-center"},[t._v("\n            The right team for the right project, No concern, just grow\n          ")])]),t._v(" "),e("div",{staticClass:"bg-white rounded p-4 shadow flex flex-col gap-4 items-center"},[e("img",{attrs:{src:"images/devops.svg",alt:"DevOps",width:"64",height:"64"}}),t._v(" "),e("div",{staticClass:"text-xl"},[t._v("\n            DevOps\n          ")]),t._v(" "),e("div",{staticClass:"text-center"},[t._v("\n            Our DevOps engineers will work with your team on defining a workflow and tool chain\n          ")])]),t._v(" "),e("div",{staticClass:"bg-white rounded p-4 shadow flex flex-col gap-4 items-center"},[e("img",{attrs:{src:"images/scale.svg",alt:"Scale",width:"64",height:"64"}}),t._v(" "),e("div",{staticClass:"text-xl"},[t._v("\n            Scale\n          ")]),t._v(" "),e("div",{staticClass:"text-center"},[t._v("\n            Do not struggle when success forces you to scale rapidly\n          ")])])])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"bg-gray-100",attrs:{id:"about"}},[e("div",{staticClass:"container mx-auto grid items-center py-16 gap-8"},[e("div",{staticClass:"text-4xl text-light mx-auto w-auto"},[t._v("\n        About Us\n      ")]),t._v(" "),e("div",{staticClass:"mx-auto w-auto"},[t._v("\n        We are a group engineers and entrepreneurs who are interested in cloud technologies and upgrading infrastructures.\n      ")])])])},function(){var t=this._self._c;return t("div",[t("div",{staticClass:"container mx-auto grid items-center p-4"},[t("div",{staticClass:"mx-auto w-auto"},[this._v("\n        © 2022 ApplicaSet\n      ")])])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{Mailto:n(167).default})}}]);