import{J as u}from"./Input.b4df4bca.js";import{I as c}from"./InfiniteSelect.549fb5b3.js";import{J as p}from"./Label.f2ea9d50.js";import{I as g}from"./InertiaButton.da879e12.js";import{J as b}from"./InputError.ef5e9aea.js";import{p as v,K as h,e as m,o as V,i as y,g as a,k as r,q as n,w as j,C as _,n as I}from"./vendor.7f465e53.js";import{_ as w}from"./plugin-vue_export-helper.5a098b48.js";const C=v({name:"CreateMedicamentsForm",components:{InertiaButton:g,JetInputError:b,JetLabel:p,JetInput:u,InfiniteSelect:c},data(){return{form:h({dosage:null,nom_commercial:null,presentation:null,ref:null,category:null},{remember:!1})}},mounted(){},computed:{flash(){return this.$page.props.flash||{}}},methods:{async storeModel(){this.form.post(this.route("admin.medicaments.store"),{onSuccess:e=>{this.flash.success?this.$emit("success",this.flash.success):this.flash.error?this.$emit("error",this.flash.error):this.$emit("error","Unknown server error.")},onError:e=>{this.$emit("error","A server error occurred")}},{remember:!1,preserveState:!0})}}}),$={class:"sm:col-span-4"},J={class:"sm:col-span-4"},M={class:"sm:col-span-4"},S={class:"sm:col-span-4"},U={class:"sm:col-span-4"},B={class:"mt-2 text-right"},k=I("Submit");function E(e,s,N,F,L,q){const t=m("jet-label"),d=m("infinite-select"),l=m("jet-input-error"),i=m("jet-input"),f=m("inertia-button");return V(),y("form",{class:"w-full",onSubmit:s[5]||(s[5]=_((...o)=>e.storeModel&&e.storeModel(...o),["prevent"]))},[a("div",$,[r(t,{for:"category",value:"Category"}),r(d,{"per-page":15,"api-url":e.route("api.categories.index"),id:"category",name:"category",modelValue:e.form.category,"onUpdate:modelValue":s[0]||(s[0]=o=>e.form.category=o),label:"name",class:n({"border-red-500 sm:focus:border-red-300 sm:focus:ring-red-100":e.form.errors.category})},null,8,["api-url","modelValue","class"]),r(l,{message:e.form.errors.category,class:"mt-2"},null,8,["message"])]),a("div",J,[r(t,{for:"nom_commercial",value:"Nom Commercial"}),r(i,{class:n(["w-full",{"border-red-500 sm:focus:border-red-300 sm:focus:ring-red-100":e.form.errors.nom_commercial}]),type:"text",id:"nom_commercial",name:"nom_commercial",modelValue:e.form.nom_commercial,"onUpdate:modelValue":s[1]||(s[1]=o=>e.form.nom_commercial=o)},null,8,["modelValue","class"]),r(l,{message:e.form.errors.nom_commercial,class:"mt-2"},null,8,["message"])]),a("div",M,[r(t,{for:"dosage",value:"Dosage"}),r(i,{class:n(["w-full",{"border-red-500 sm:focus:border-red-300 sm:focus:ring-red-100":e.form.errors.dosage}]),type:"text",id:"dosage",name:"dosage",modelValue:e.form.dosage,"onUpdate:modelValue":s[2]||(s[2]=o=>e.form.dosage=o)},null,8,["modelValue","class"]),r(l,{message:e.form.errors.dosage,class:"mt-2"},null,8,["message"])]),a("div",S,[r(t,{for:"presentation",value:"Presentation"}),r(i,{class:n(["w-full",{"border-red-500 sm:focus:border-red-300 sm:focus:ring-red-100":e.form.errors.presentation}]),type:"text",id:"presentation",name:"presentation",modelValue:e.form.presentation,"onUpdate:modelValue":s[3]||(s[3]=o=>e.form.presentation=o)},null,8,["modelValue","class"]),r(l,{message:e.form.errors.presentation,class:"mt-2"},null,8,["message"])]),a("div",U,[r(t,{for:"ref",value:"Ref"}),r(i,{class:n(["w-full",{"border-red-500 sm:focus:border-red-300 sm:focus:ring-red-100":e.form.errors.ref}]),type:"text",id:"ref",name:"ref",modelValue:e.form.ref,"onUpdate:modelValue":s[4]||(s[4]=o=>e.form.ref=o)},null,8,["modelValue","class"]),r(l,{message:e.form.errors.ref,class:"mt-2"},null,8,["message"])]),a("div",B,[r(f,{type:"submit",class:"font-semibold bg-success disabled:opacity-25",disabled:e.form.processing},{default:j(()=>[k]),_:1},8,["disabled"])])],32)}var G=w(C,[["render",E]]);export{G as default};
