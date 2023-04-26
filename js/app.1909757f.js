(function(){"use strict";var e={6327:function(e,a,t){var l=t(9242),n=t(3396),o=t(7139),r=t(4870);function i(){let e;const a=localStorage.getItem("preferredTheme");return e=a||(window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"),e}function c(e){localStorage.setItem("preferredTheme",e)}function u(e){document.body.setAttribute("data-theme",e)}const s=e=>((0,n.dD)("data-v-18d47392"),e=e(),(0,n.Cn)(),e),d={class:"Toggle",for:"toggle"},v=s((()=>(0,n._)("span",{class:"Toggle__display",hidden:""},[(0,n._)("svg",{"aria-hidden":"true",focusable:"false",class:"Toggle__icon Toggle__icon--checkmark",width:"18",height:"14",viewBox:"0 0 122.88 122.88",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[(0,n._)("path",{d:"M30,13.21A3.93,3.93,0,1,1,36.8,9.27L41.86,18A3.94,3.94,0,1,1,35.05,22L30,13.21Zm31.45,13A35.23,35.23,0,1,1,36.52,36.52,35.13,35.13,0,0,1,61.44,26.2ZM58.31,4A3.95,3.95,0,1,1,66.2,4V14.06a3.95,3.95,0,1,1-7.89,0V4ZM87.49,10.1A3.93,3.93,0,1,1,94.3,14l-5.06,8.76a3.93,3.93,0,1,1-6.81-3.92l5.06-8.75ZM109.67,30a3.93,3.93,0,1,1,3.94,6.81l-8.75,5.06a3.94,3.94,0,1,1-4-6.81L109.67,30Zm9.26,28.32a3.95,3.95,0,1,1,0,7.89H108.82a3.95,3.95,0,1,1,0-7.89Zm-6.15,29.18a3.93,3.93,0,1,1-3.91,6.81l-8.76-5.06A3.93,3.93,0,1,1,104,82.43l8.75,5.06ZM92.89,109.67a3.93,3.93,0,1,1-6.81,3.94L81,104.86a3.94,3.94,0,0,1,6.81-4l5.06,8.76Zm-28.32,9.26a3.95,3.95,0,1,1-7.89,0V108.82a3.95,3.95,0,1,1,7.89,0v10.11Zm-29.18-6.15a3.93,3.93,0,0,1-6.81-3.91l5.06-8.76A3.93,3.93,0,1,1,40.45,104l-5.06,8.75ZM13.21,92.89a3.93,3.93,0,1,1-3.94-6.81L18,81A3.94,3.94,0,1,1,22,87.83l-8.76,5.06ZM4,64.57a3.95,3.95,0,1,1,0-7.89H14.06a3.95,3.95,0,1,1,0,7.89ZM10.1,35.39A3.93,3.93,0,1,1,14,28.58l8.76,5.06a3.93,3.93,0,1,1-3.92,6.81L10.1,35.39Z",fill:"currentcolor",stroke:"currentcolor"})]),(0,n._)("svg",{"aria-hidden":"true",focusable:"false",class:"Toggle__icon Toggle__icon--cross",width:"13",height:"13",viewBox:"0 0 122.88 122.89",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[(0,n._)("path",{d:"M49.06,1.27c2.17-0.45,4.34-0.77,6.48-0.98c2.2-0.21,4.38-0.31,6.53-0.29c1.21,0.01,2.18,1,2.17,2.21 c-0.01,0.93-0.6,1.72-1.42,2.03c-9.15,3.6-16.47,10.31-20.96,18.62c-4.42,8.17-6.1,17.88-4.09,27.68l0.01,0.07 c2.29,11.06,8.83,20.15,17.58,25.91c8.74,5.76,19.67,8.18,30.73,5.92l0.07-0.01c7.96-1.65,14.89-5.49,20.3-10.78 c5.6-5.47,9.56-12.48,11.33-20.16c0.27-1.18,1.45-1.91,2.62-1.64c0.89,0.21,1.53,0.93,1.67,1.78c2.64,16.2-1.35,32.07-10.06,44.71 c-8.67,12.58-22.03,21.97-38.18,25.29c-16.62,3.42-33.05-0.22-46.18-8.86C14.52,104.1,4.69,90.45,1.27,73.83 C-2.07,57.6,1.32,41.55,9.53,28.58C17.78,15.57,30.88,5.64,46.91,1.75c0.31-0.08,0.67-0.16,1.06-0.25l0.01,0l0,0L49.06,1.27 L49.06,1.27z",fill:"currentcolor"})])],-1)));var f=(0,n.aZ)({__name:"ThemePicker",setup(e){const a=(0,r.iH)("false"),t=(0,r.iH)(i());function o(e){const a=e.target,t=a.checked;t?(c("dark"),u("dark")):(c("light"),u("light"))}return(0,n.bv)((()=>{const e=("dark"===t.value).toString();u(t.value),a.value=e})),(e,t)=>((0,n.wg)(),(0,n.iD)("label",d,[(0,n.Uk)(" Theme "),(0,n.wy)((0,n._)("input",{type:"checkbox",name:"toggle",id:"toggle",class:"Toggle__input","onUpdate:modelValue":t[0]||(t[0]=e=>a.value=e),onChange:o},null,544),[[l.e8,a.value]]),v]))}}),h=t(89);const p=(0,h.Z)(f,[["__scopeId","data-v-18d47392"]]);var m=p;const g=["for"],y={class:"input-relative-container"},_=["type","id","name","autocomplete","pattern","required","placeholder"],b=["id"];var w=(0,n.aZ)({__name:"BasicInput",props:{controlName:String,errorMessage:{type:String,default:"Please fill out this field."},autoComplete:{type:String,default:void 0},typeValue:String,patternValue:String,friendlyName:String,isRequired:{type:Boolean,default:!1},placeHolder:{type:String,default:void 0},validateOnBlur:{type:Boolean,default:!1}},emits:["keyEvent"],setup(e,{expose:a,emit:t}){const l=e,i=(0,r.iH)(!1),c=(0,r.iH)(!1),u=(0,r.iH)(""),s=(0,r.iH)(!0);u.value="";const d=(0,r.iH)();function v(e){const a=d.value;if(a){a.setCustomValidity("");let t=(()=>e?a.checkValidity()&&e():a.checkValidity())();return s.value=!t,u.value=t?"":l.errorMessage,i.value=!t,t||a.setCustomValidity(l.errorMessage),t}return!1}function f(e){c.value=e}function h(){l.validateOnBlur&&v(d.value)}function p(e){const a=e.target,n=a.value,o=n.replace(/\D/g,"");a.value=o,t("keyEvent",{name:l.controlName,value:a.value})}return a({handleInvalid:v,controlName:l.controlName}),(a,t)=>((0,n.wg)(),(0,n.iD)("div",null,[(0,n._)("label",{class:(0,o.C_)({invalid:i.value}),for:e.controlName},(0,o.zw)(e.friendlyName),11,g),(0,n._)("div",y,[(0,n._)("div",{class:(0,o.C_)(["focus-wrap",{invalidInput:i.value,inputFocused:c.value}])},null,2),(0,n._)("input",{onFocusin:t[0]||(t[0]=e=>f(!0)),onFocusout:t[1]||(t[1]=e=>f(!1)),onBlur:h,onKeyup:p,ref_key:"inputElement",ref:d,type:e.typeValue,id:e.controlName,name:e.controlName,autocomplete:e.autoComplete?e.autoComplete:"off",pattern:e.patternValue?e.patternValue:void 0,required:!!e.isRequired,placeholder:e.placeHolder?e.placeHolder:void 0},null,40,_)]),(0,n._)("span",{id:e.controlName+"-validation",class:(0,o.C_)([{invalidText:i.value},"error-message"]),"aria-live":"assertive","aria-hidden":"false"},(0,o.zw)(u.value),11,b)]))}});const M=(0,h.Z)(w,[["__scopeId","data-v-18d9a1e1"]]);var k=M;const N={class:"age-calc-main-container","aria-label":"A calculator that converts your birthdate to years, months, and days."},D=(0,n._)("h1",null,"Birthday Calculator",-1),H={class:"theme-picker-container"},C={class:"calculator","aria-label":"The age calculator application."},T=["onSubmit"],V={class:"age-calc-grid-container"},Z={class:"form-divider"},I=(0,n._)("hr",{class:"dividing-line"},null,-1),S={class:"calculations","aria-label":"The result of the calculation."},A={class:"calculation","aria-label":"The years calculation"},O={class:"calculation","aria-label":"The months calculation"},x={class:"calculation","aria-label":"The days calculation"},E={class:"calculation",style:{display:"none"},"aria-label":"The complete calculation","aria-live":"assertive","aria-hidden":"false"};var Y=(0,n.aZ)({__name:"App",setup(e){const a=(0,r.iH)("--"),t=(0,r.iH)("--"),i=(0,r.iH)("--"),c=(0,r.iH)(""),u=(0,r.iH)(!1),s=(0,r.iH)(),d=(0,r.iH)(),v=(0,r.iH)(),f=[s,d,v];let h=NaN,p=NaN,g=NaN;function y(e,a,t){const l=new Date,n=new Date(t,e-1,a),o=l-n,r=o/1e3/60/60/24/365.25,i=12*(r-Math.floor(r)),c=Math.floor(30.44*(i-Math.floor(i)));return{years:Math.floor(r),months:Math.floor(i),days:c}}function _(e){u.value=e}function b(e){const a=e.name,t=parseInt(e.value);"birthDateDays"==a?h=t:"birthDateMonth"==a?p=t:"birthDateYear"==a&&(g=t)}function w(){let e=!1;if(isNaN(g)&&(d.value.handleInvalid((()=>!1)),e=!0),isNaN(p)&&(v.value.handleInvalid((()=>!1)),e=!0),isNaN(h)&&(s.value.handleInvalid((()=>!1)),e=!0),e)return;let l=M(g,p,h),n=y(p,h,g),o=f.map((e=>e.value.handleInvalid((()=>l[e.value.controlName]))));o.every((e=>e))&&(a.value=n.years.toString(),t.value=n.days.toString(),i.value=n.months.toString(),c.value=`\n      You have been alive for ${n.years} years,\n      ${n.months} months,\n      and ${n.days}`)}function M(e,a,t){let l=new Date(e,a-1,t),n=new Date(e,a,0).getDate(),o=()=>l.getDate()==t,r=()=>l.getMonth()==a-1,i=()=>l.getFullYear()==e;return h>n&&(l=new Date(e,a-1,n-5)),{birthDateYear:i(),birthDateMonth:r(),birthDateDays:o()}}return(e,r)=>((0,n.wg)(),(0,n.iD)("main",N,[(0,n._)("header",null,[D,(0,n._)("div",H,[(0,n.Wm)(m)])]),(0,n._)("div",null,[(0,n._)("section",C,[(0,n._)("form",{class:"age-calc-section","aria-label":"The birthday entry form.",novalidate:"",onSubmit:(0,l.iM)(w,["prevent"])},[(0,n._)("div",V,[(0,n.Wm)(k,{controlName:"birthDateDays",errorMessage:"Invalid day",autoComplete:"bday-day",friendlyName:"DAY",typeValue:"tel",patternValue:"^[0-9]*$",isRequired:"",placeHolder:"DD",ref_key:"dateEntry",ref:s,onKeyEvent:b},null,512),(0,n.Wm)(k,{controlName:"birthDateMonth",errorMessage:"Invalid month",autoComplete:"bday-month",typeValue:"tel",friendlyName:"MONTH",patternValue:"(?:0[1-9]|1[012])",isRequired:"",placeHolder:"MM",ref_key:"monthsEntry",ref:v,onKeyEvent:b},null,512),(0,n.Wm)(k,{controlName:"birthDateYear",errorMessage:"Invalid year",autoComplete:"bday-year",friendlyName:"YEAR",typeValue:"tel",patternValue:"(?:19|20)\\d\\d",isRequired:"",placeHolder:"YYYY",ref_key:"yearsEntry",ref:d,onKeyEvent:b},null,512)]),(0,n._)("div",Z,[I,(0,n._)("div",{class:(0,o.C_)(["button-focus-wrap",{buttonFocused:u.value}])},null,2),(0,n._)("button",{onFocusin:r[0]||(r[0]=e=>_(!0)),onFocusout:r[1]||(r[1]=e=>_(!1)),onClick:w,title:"Press to calculate your age."},[(0,n._)("div",{class:(0,o.C_)(["calculate-icon",{focused:u.value}])},null,2)],32)])],40,T),(0,n._)("section",S,[(0,n._)("section",A,[(0,n._)("h2",null,[(0,n._)("span",null,(0,o.zw)(a.value),1),(0,n.Uk)(" years")])]),(0,n._)("section",O,[(0,n._)("h2",null,[(0,n._)("span",null,(0,o.zw)(i.value),1),(0,n.Uk)(" months")])]),(0,n._)("section",x,[(0,n._)("h2",null,[(0,n._)("span",null,(0,o.zw)(t.value),1),(0,n.Uk)(" days")])]),(0,n._)("section",E,(0,o.zw)(c.value),1)])])])]))}});const B=Y;var F=B;(0,l.ri)(F).mount("#app")}},a={};function t(l){var n=a[l];if(void 0!==n)return n.exports;var o=a[l]={exports:{}};return e[l](o,o.exports,t),o.exports}t.m=e,function(){var e=[];t.O=function(a,l,n,o){if(!l){var r=1/0;for(s=0;s<e.length;s++){l=e[s][0],n=e[s][1],o=e[s][2];for(var i=!0,c=0;c<l.length;c++)(!1&o||r>=o)&&Object.keys(t.O).every((function(e){return t.O[e](l[c])}))?l.splice(c--,1):(i=!1,o<r&&(r=o));if(i){e.splice(s--,1);var u=n();void 0!==u&&(a=u)}}return a}o=o||0;for(var s=e.length;s>0&&e[s-1][2]>o;s--)e[s]=e[s-1];e[s]=[l,n,o]}}(),function(){t.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(a,{a:a}),a}}(),function(){t.d=function(e,a){for(var l in a)t.o(a,l)&&!t.o(e,l)&&Object.defineProperty(e,l,{enumerable:!0,get:a[l]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)}}(),function(){var e={143:0};t.O.j=function(a){return 0===e[a]};var a=function(a,l){var n,o,r=l[0],i=l[1],c=l[2],u=0;if(r.some((function(a){return 0!==e[a]}))){for(n in i)t.o(i,n)&&(t.m[n]=i[n]);if(c)var s=c(t)}for(a&&a(l);u<r.length;u++)o=r[u],t.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return t.O(s)},l=self["webpackChunkage_calculator"]=self["webpackChunkage_calculator"]||[];l.forEach(a.bind(null,0)),l.push=a.bind(null,l.push.bind(l))}();var l=t.O(void 0,[998],(function(){return t(6327)}));l=t.O(l)})();
//# sourceMappingURL=app.1909757f.js.map