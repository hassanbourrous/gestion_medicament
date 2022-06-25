var c=Object.defineProperty;var n=Object.getOwnPropertySymbols;var h=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable;var m=(e,r,s)=>r in e?c(e,r,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[r]=s,i=(e,r)=>{for(var s in r||(r={}))h.call(r,s)&&m(e,s,r[s]);if(n)for(var s of n(r))b.call(r,s)&&m(e,s,r[s]);return e};import{J as _}from"./Label.f2ea9d50.js";import{I as j}from"./InertiaButton.da879e12.js";import{J as g}from"./InputError.ef5e9aea.js";import{p as v,K as $,e as t,o as C,i as I,g as l,k as o,q as w,w as E,C as J,n as V}from"./vendor.7f465e53.js";import{J as y}from"./Input.b4df4bca.js";import{_ as B}from"./plugin-vue_export-helper.5a098b48.js";const k=v({name:"EditCategoryForm",props:{model:Object},components:{InertiaButton:j,JetLabel:_,JetInputError:g,JetInput:y},data(){return{form:$(i({},this.model),{remember:!1})}},mounted(){},computed:{flash(){return this.$page.props.flash||{}}},methods:{async updateModel(){this.form.put(this.route("admin.categories.update",this.form.id),{onSuccess:e=>{this.flash.success?this.$emit("success",this.flash.success):this.flash.error?this.$emit("error",this.flash.error):this.$emit("error","Unknown server error.")},onError:e=>{this.$emit("error","A server error occurred")}},{remember:!1,preserveState:!0})}}}),M={class:"sm:col-span-4"},N={class:"mt-2 text-right"},S=V("Submit");function F(e,r,s,x,L,U){const d=t("jet-label"),p=t("jet-input"),u=t("jet-input-error"),f=t("inertia-button");return C(),I("form",{onSubmit:r[1]||(r[1]=J((...a)=>e.updateModel&&e.updateModel(...a),["prevent"]))},[l("div",M,[o(d,{for:"name",value:"Name"}),o(p,{class:w(["w-full",{"border-red-500 sm:focus:border-red-300 sm:focus:ring-red-100":e.form.errors.name}]),type:"text",id:"name",name:"name",modelValue:e.form.name,"onUpdate:modelValue":r[0]||(r[0]=a=>e.form.name=a)},null,8,["modelValue","class"]),o(u,{message:e.form.errors.name,class:"mt-2"},null,8,["message"])]),l("div",N,[o(f,{type:"submit",class:"font-semibold text-white bg-primary",disabled:e.form.processing},{default:E(()=>[S]),_:1},8,["disabled"])])],32)}var G=B(k,[["render",F]]);export{G as default};
