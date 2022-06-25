import{J as l}from"./JigLayout.72cfa05e.js";import{J as c}from"./Label.f2ea9d50.js";import{I as p}from"./InertiaButton.da879e12.js";import{J as f}from"./InputError.ef5e9aea.js";import{J as u}from"./Button.3888e282.js";import _ from"./EditForm.bb7290b7.js";import{D as x}from"./DisplayMixin.328c366f.js";import{_ as h}from"./plugin-vue_export-helper.5a098b48.js";import{e as t,o as j,f as b,w as s,g as e,k as a,n as g,t as w}from"./vendor.7f465e53.js";import"./DialogModal.f6fb4b05.js";import"./ApplicationLogo.88559075.js";import"./Input.b4df4bca.js";const E={name:"EditPermissions",props:{model:Object},components:{InertiaButton:p,JetLabel:c,JetButton:u,JetInputError:f,JigLayout:l,EditPermissionsForm:_},data(){return{}},mixins:[x],mounted(){},computed:{flash(){return this.$page.props.flash||{}}},methods:{onSuccess(o){this.displayNotification("success",o),this.$inertia.visit(route("admin.permissions.index"))},onError(o){this.displayNotification("error",o)}}},y={class:"flex flex-wrap items-center justify-between w-full px-4"},J=e("i",{class:"fas fa-arrow-left"},null,-1),v={class:"flex flex-wrap px-4"},B={class:"z-10 flex-auto max-w-2xl p-4 mx-auto bg-white md:rounded-md md:shadow-md"};function k(o,I,i,D,L,r){const n=t("inertia-link"),m=t("edit-permissions-form"),d=t("jig-layout");return j(),b(d,null,{header:s(()=>[e("div",y,[a(n,{href:o.route("admin.permissions.index"),class:"text-xl font-black text-white"},{default:s(()=>[J,g(" Back | Edit Permission #"+w(i.model.id),1)]),_:1},8,["href"])])]),default:s(()=>[e("div",v,[e("div",B,[a(m,{model:i.model,onSuccess:r.onSuccess,onError:r.onError},null,8,["model","onSuccess","onError"])])])]),_:1})}var q=h(E,[["render",k]]);export{q as default};
