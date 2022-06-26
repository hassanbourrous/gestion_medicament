var y=Object.defineProperty;var g=Object.getOwnPropertySymbols;var V=Object.prototype.hasOwnProperty,A=Object.prototype.propertyIsEnumerable;var v=(o,e,t)=>e in o?y(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t,h=(o,e)=>{for(var t in e||(e={}))V.call(e,t)&&v(o,t,e[t]);if(g)for(var t of g(e))A.call(e,t)&&v(o,t,e[t]);return o};import{J}from"./Label.b121d9c9.js";import{I as k}from"./InertiaButton.18e5489b.js";import{J as w}from"./InputError.830002e3.js";import{K as C,e as a,o as I,f as B,w as i,k as r,g as l,q as c,C as E,n as f}from"./vendor.faa38336.js";import{J as M}from"./Input.ff5f863b.js";import{J as N,a as S,b as U}from"./JigTab.eecb99d8.js";import F from"./AssignPerms.33597f6c.js";import{_ as L}from"./plugin-vue_export-helper.5a098b48.js";import"./Checkbox.c30c8286.js";import"./DisplayMixin.328c366f.js";const P={name:"EditRolesForm",props:{model:Object,permissions:Object},components:{AssignPerms:F,JigTab:N,JigTabLink:S,JigTabs:U,InertiaButton:k,JetLabel:J,JetInputError:w,JetInput:M},data(){return{form:C(h({},this.model),{remember:!1}),activeTab:"basic-info",tabActiveClasses:"bg-primary font-bold text-secondary rounded-t-lg hover:bg-primary-200 hover:text-gray-800"}},mounted(){},computed:{flash(){return this.$page.props.flash||{}}},methods:{async updateModel(){this.form.put(this.route("admin.roles.update",this.form.id),{onSuccess:o=>{this.flash.success?this.$emit("success",this.flash.success):this.flash.error?this.$emit("error",this.flash.error):this.$emit("error","Unknown server error.")},onError:o=>{this.$emit("error","A server error occurred")}},{remember:!1,preserveState:!0})},setTab(o){this.activeTab=o}}},O=f("Basic Info "),R=f("Assign Permissions "),q={class:"sm:col-span-4"},z={class:"sm:col-span-4"},D={class:"sm:col-span-4"},G={class:"mt-2 text-right"},K=f("Submit");function H(o,e,t,Q,s,m){const p=a("jig-tab-link"),u=a("jet-label"),d=a("jet-input"),b=a("jet-input-error"),j=a("inertia-button"),_=a("jig-tab"),x=a("assign-perms"),T=a("jig-tabs");return I(),B(T,{class:c("border-none"),"nav-classes":"bg-secondary-300 rounded-t-lg border-b-4 border-primary"},{nav:i(()=>[r(p,{onActivate:m.setTab,"active-classes":s.tabActiveClasses,"tab-controller":s.activeTab,tab:"basic-info"},{default:i(()=>[O]),_:1},8,["onActivate","active-classes","tab-controller"]),r(p,{onActivate:m.setTab,"active-classes":s.tabActiveClasses,"tab-controller":s.activeTab,tab:"assign-permissions"},{default:i(()=>[R]),_:1},8,["onActivate","active-classes","tab-controller"])]),content:i(()=>[r(_,{name:"basic-info","tab-controller":s.activeTab},{default:i(()=>[l("form",{onSubmit:e[3]||(e[3]=E((...n)=>m.updateModel&&m.updateModel(...n),["prevent"]))},[l("div",q,[r(u,{for:"name",value:"Name"}),r(d,{class:c(["w-full",{"border-red-500 sm:focus:border-red-300 sm:focus:ring-red-100":s.form.errors.name}]),type:"text",id:"name",name:"name",modelValue:s.form.name,"onUpdate:modelValue":e[0]||(e[0]=n=>s.form.name=n)},null,8,["modelValue","class"]),r(b,{message:s.form.errors.name,class:"mt-2"},null,8,["message"])]),l("div",z,[r(u,{for:"title",value:"Title"}),r(d,{class:c(["w-full",{"border-red-500 sm:focus:border-red-300 sm:focus:ring-red-100":s.form.errors.title}]),type:"text",id:"title",name:"title",modelValue:s.form.title,"onUpdate:modelValue":e[1]||(e[1]=n=>s.form.title=n)},null,8,["modelValue","class"]),r(b,{message:s.form.errors.title,class:"mt-2"},null,8,["message"])]),l("div",D,[r(u,{for:"guard_name",value:"Guard Name"}),r(d,{class:c(["w-full",{"border-red-500 sm:focus:border-red-300 sm:focus:ring-red-100":s.form.errors.guard_name}]),type:"text",id:"guard_name",name:"guard_name",modelValue:s.form.guard_name,"onUpdate:modelValue":e[2]||(e[2]=n=>s.form.guard_name=n)},null,8,["modelValue","class"]),r(b,{message:s.form.errors.guard_name,class:"mt-2"},null,8,["message"])]),l("div",G,[r(j,{type:"submit",class:"bg-primary font-semibold text-white",disabled:s.form.processing},{default:i(()=>[K]),_:1},8,["disabled"])])],32)]),_:1},8,["tab-controller"]),r(_,{name:"assign-permissions","tab-controller":s.activeTab},{default:i(()=>[r(x,{role:t.model,permissions:t.permissions},null,8,["role","permissions"])]),_:1},8,["tab-controller"])]),_:1})}var ne=L(P,[["render",H]]);export{ne as default};
