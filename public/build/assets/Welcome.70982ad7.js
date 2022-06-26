var y=Object.defineProperty,C=Object.defineProperties;var A=Object.getOwnPropertyDescriptors;var p=Object.getOwnPropertySymbols;var B=Object.prototype.hasOwnProperty,q=Object.prototype.propertyIsEnumerable;var f=(t,e,o)=>e in t?y(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o,_=(t,e)=>{for(var o in e||(e={}))B.call(e,o)&&f(t,o,e[o]);if(p)for(var o of p(e))q.call(e,o)&&f(t,o,e[o]);return t},b=(t,e)=>C(t,A(e));import{J as E}from"./AuthenticationCard.8cc611e7.js";import{J as F}from"./AuthenticationCardLogo.c116f16e.js";import{A as H}from"./ApplicationLogo.84caf5de.js";import{J as N}from"./Button.c45bf68e.js";import{J as P}from"./Input.7c4ec79d.js";import{J as R}from"./Checkbox.16504143.js";import{J as S}from"./Label.a372a458.js";import{J as U}from"./ValidationErrors.f4020406.js";import{H as I,L as z,e as r,o as l,i as h,k as s,w as m,t as D,j,g as i,f as M,q as T,C as W,F as G,n as g}from"./vendor.688b8fb8.js";import{_ as K}from"./plugin-vue_export-helper.5a098b48.js";const O={components:{Head:I,JetAuthenticationCard:E,JetAuthenticationCardLogo:F,ApplicationLogo:H,JetButton:N,JetInput:P,JetCheckbox:R,JetLabel:S,JetValidationErrors:U,Link:z},props:{canResetPassword:Boolean,status:String},data(){return{form:this.$inertia.form({email:"",password:"",remember:!1})}},methods:{submit(){this.form.transform(t=>b(_({},t),{remember:this.form.remember?"on":""})).post(this.route("login"),{onFinish:()=>this.form.reset("password")})}}},Q={key:0,class:"mb-4 font-medium text-sm text-green-600"},X={class:"mt-4"},Y={class:"block mt-4"},Z={class:"flex items-center"},$=i("span",{class:"ml-2 text-sm text-gray-600"},"Remember me",-1),ee={class:"flex items-center justify-end mt-4"},oe=g(" Forgot your password? "),te=g(" Log in ");function se(t,e,o,re,a,c){const k=r("Head"),w=r("application-logo"),x=r("jet-validation-errors"),d=r("jet-label"),u=r("jet-input"),v=r("jet-checkbox"),J=r("Link"),L=r("jet-button"),V=r("jet-authentication-card");return l(),h(G,null,[s(k,{title:"Log in"}),s(V,null,{logo:m(()=>[s(w)]),default:m(()=>[s(x,{class:"mb-4"}),o.status?(l(),h("div",Q,D(o.status),1)):j("",!0),i("form",{onSubmit:e[3]||(e[3]=W((...n)=>c.submit&&c.submit(...n),["prevent"]))},[i("div",null,[s(d,{for:"email",value:"Email"}),s(u,{id:"email",type:"email",class:"mt-1 block w-full",modelValue:a.form.email,"onUpdate:modelValue":e[0]||(e[0]=n=>a.form.email=n),required:"",autofocus:""},null,8,["modelValue"])]),i("div",X,[s(d,{for:"password",value:"Password"}),s(u,{id:"password",type:"password",class:"mt-1 block w-full",modelValue:a.form.password,"onUpdate:modelValue":e[1]||(e[1]=n=>a.form.password=n),required:"",autocomplete:"current-password"},null,8,["modelValue"])]),i("div",Y,[i("label",Z,[s(v,{name:"remember",checked:a.form.remember,"onUpdate:checked":e[2]||(e[2]=n=>a.form.remember=n)},null,8,["checked"]),$])]),i("div",ee,[o.canResetPassword?(l(),M(J,{key:0,href:t.route("password.request"),class:"underline text-sm text-gray-600 hover:text-gray-900"},{default:m(()=>[oe]),_:1},8,["href"])):j("",!0),s(L,{class:T(["ml-4",{"opacity-25":a.form.processing}]),disabled:a.form.processing},{default:m(()=>[te]),_:1},8,["class","disabled"])])],32)]),_:1})],64)}var be=K(O,[["render",se]]);export{be as default};