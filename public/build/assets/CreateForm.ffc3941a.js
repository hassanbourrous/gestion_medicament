import{J as u}from"./Input.ff5f863b.js";import{J as p}from"./Label.b121d9c9.js";import{I as d}from"./InertiaButton.18e5489b.js";import{J as f}from"./InputError.830002e3.js";import{p as c,K as b,e as s,o as h,i as _,g as a,k as o,q as g,w as j,C as v,n as C}from"./vendor.faa38336.js";import{_ as $}from"./plugin-vue_export-helper.5a098b48.js";const I=c({name:"CreateCategoriesForm",components:{InertiaButton:d,JetInputError:f,JetLabel:p,JetInput:u},data(){return{form:b({name:null},{remember:!1})}},mounted(){},computed:{flash(){return this.$page.props.flash||{}}},methods:{async storeModel(){this.form.post(this.route("admin.categories.store"),{onSuccess:e=>{this.flash.success?this.$emit("success",this.flash.success):this.flash.error?this.$emit("error",this.flash.error):this.$emit("error","Unknown server error.")},onError:e=>{this.$emit("error","A server error occurred")}},{remember:!1,preserveState:!0})}}}),w={class:"sm:col-span-4"},J={class:"mt-2 text-right"},V=C("Submit");function B(e,r,k,y,E,M){const n=s("jet-label"),m=s("jet-input"),i=s("jet-input-error"),l=s("inertia-button");return h(),_("form",{class:"w-full",onSubmit:r[1]||(r[1]=v((...t)=>e.storeModel&&e.storeModel(...t),["prevent"]))},[a("div",w,[o(n,{for:"name",value:"Name"}),o(m,{class:g(["w-full",{"border-red-500 sm:focus:border-red-300 sm:focus:ring-red-100":e.form.errors.name}]),type:"text",id:"name",name:"name",modelValue:e.form.name,"onUpdate:modelValue":r[0]||(r[0]=t=>e.form.name=t)},null,8,["modelValue","class"]),o(i,{message:e.form.errors.name,class:"mt-2"},null,8,["message"])]),a("div",J,[o(l,{type:"submit",class:"font-semibold bg-success disabled:opacity-25",disabled:e.form.processing},{default:j(()=>[V]),_:1},8,["disabled"])])],32)}var x=$(I,[["render",B]]);export{x as default};