var b=Object.defineProperty;var f=Object.getOwnPropertySymbols;var h=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable;var u=(e,r,s)=>r in e?b(e,r,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[r]=s,p=(e,r)=>{for(var s in r||(r={}))h.call(r,s)&&u(e,s,r[s]);if(f)for(var s of f(r))v.call(r,s)&&u(e,s,r[s]);return e};import{J as V}from"./Label.f2ea9d50.js";import{I as y}from"./InertiaButton.da879e12.js";import{J as j}from"./InputError.ef5e9aea.js";import{p as _,K as w,e as n,o as I,i as $,g as a,k as o,q as i,w as C,C as E,n as J}from"./vendor.7f465e53.js";import{J as M}from"./Input.b4df4bca.js";import{I as S}from"./InfiniteSelect.549fb5b3.js";import{_ as U}from"./plugin-vue_export-helper.5a098b48.js";const B=_({name:"EditMedicamentForm",props:{model:Object},components:{InertiaButton:y,JetLabel:V,JetInputError:j,JetInput:M,InfiniteSelect:S},data(){return{form:w(p({},this.model),{remember:!1})}},mounted(){},computed:{flash(){return this.$page.props.flash||{}}},methods:{async updateModel(){this.form.put(this.route("admin.medicaments.update",this.form.id),{onSuccess:e=>{this.flash.success?this.$emit("success",this.flash.success):this.flash.error?this.$emit("error",this.flash.error):this.$emit("error","Unknown server error.")},onError:e=>{this.$emit("error","A server error occurred")}},{remember:!1,preserveState:!0})}}}),k={class:"sm:col-span-4"},N={class:"sm:col-span-4"},F={class:"sm:col-span-4"},L={class:"sm:col-span-4"},q={class:"sm:col-span-4"},z={class:"mt-2 text-right"},A=J("Submit");function D(e,r,s,K,O,P){const m=n("jet-label"),c=n("infinite-select"),l=n("jet-input-error"),d=n("jet-input"),g=n("inertia-button");return I(),$("form",{onSubmit:r[5]||(r[5]=E((...t)=>e.updateModel&&e.updateModel(...t),["prevent"]))},[a("div",k,[o(m,{for:"category",value:"Category"}),o(c,{class:i(["w-full",{"border-red-500 sm:focus:border-red-300 sm:focus:ring-red-100":e.form.errors.category}]),"per-page":15,"api-url":e.route("api.categories.index"),id:"category",name:"category",modelValue:e.form.category,"onUpdate:modelValue":r[0]||(r[0]=t=>e.form.category=t),label:"name"},null,8,["api-url","modelValue","class"]),o(l,{message:e.form.errors.category,class:"mt-2"},null,8,["message"])]),a("div",N,[o(m,{for:"nom_commercial",value:"Nom Commercial"}),o(d,{class:i(["w-full",{"border-red-500 sm:focus:border-red-300 sm:focus:ring-red-100":e.form.errors.nom_commercial}]),type:"text",id:"nom_commercial",name:"nom_commercial",modelValue:e.form.nom_commercial,"onUpdate:modelValue":r[1]||(r[1]=t=>e.form.nom_commercial=t)},null,8,["modelValue","class"]),o(l,{message:e.form.errors.nom_commercial,class:"mt-2"},null,8,["message"])]),a("div",F,[o(m,{for:"dosage",value:"Dosage"}),o(d,{class:i(["w-full",{"border-red-500 sm:focus:border-red-300 sm:focus:ring-red-100":e.form.errors.dosage}]),type:"text",id:"dosage",name:"dosage",modelValue:e.form.dosage,"onUpdate:modelValue":r[2]||(r[2]=t=>e.form.dosage=t)},null,8,["modelValue","class"]),o(l,{message:e.form.errors.dosage,class:"mt-2"},null,8,["message"])]),a("div",L,[o(m,{for:"presentation",value:"Presentation"}),o(d,{class:i(["w-full",{"border-red-500 sm:focus:border-red-300 sm:focus:ring-red-100":e.form.errors.presentation}]),type:"text",id:"presentation",name:"presentation",modelValue:e.form.presentation,"onUpdate:modelValue":r[3]||(r[3]=t=>e.form.presentation=t)},null,8,["modelValue","class"]),o(l,{message:e.form.errors.presentation,class:"mt-2"},null,8,["message"])]),a("div",q,[o(m,{for:"ref",value:"Ref"}),o(d,{class:i(["w-full",{"border-red-500 sm:focus:border-red-300 sm:focus:ring-red-100":e.form.errors.ref}]),type:"text",id:"ref",name:"ref",modelValue:e.form.ref,"onUpdate:modelValue":r[4]||(r[4]=t=>e.form.ref=t)},null,8,["modelValue","class"]),o(l,{message:e.form.errors.ref,class:"mt-2"},null,8,["message"])]),a("div",z,[o(g,{type:"submit",class:"font-semibold text-white bg-primary",disabled:e.form.processing},{default:C(()=>[A]),_:1},8,["disabled"])])],32)}var Z=U(B,[["render",D]]);export{Z as default};
