import{J as m}from"./JigLayout.72cfa05e.js";import{I as p}from"./InertiaButton.da879e12.js";import l from"./CreateForm.ef78cb2e.js";import{D as f}from"./DisplayMixin.328c366f.js";import{_ as d}from"./plugin-vue_export-helper.5a098b48.js";import{e as s,o as u,f as _,w as t,g as o,k as i,n as x}from"./vendor.7f465e53.js";import"./DialogModal.f6fb4b05.js";import"./ApplicationLogo.88559075.js";import"./Input.b4df4bca.js";import"./Label.f2ea9d50.js";import"./InputError.ef5e9aea.js";const h={name:"CreatePermissions",components:{InertiaButton:p,JigLayout:m,CreatePermissionsForm:l},data(){return{}},mixins:[f],mounted(){},computed:{flash(){return this.$page.props.flash||{}}},methods:{onSuccess(e){this.displayNotification("success",e),this.$inertia.visit(route("admin.permissions.index"))},onError(e){this.displayNotification("error",e)}}},j={class:"flex flex-wrap items-center justify-between w-full px-4"},w=o("i",{class:"fas fa-arrow-left"},null,-1),b=x(" Back | New Permission "),g={class:"flex flex-wrap px-4"},y={class:"z-10 flex-auto max-w-2xl p-4 mx-auto bg-white md:rounded-md md:shadow-md"};function v(e,k,B,C,N,r){const a=s("inertia-link"),n=s("create-permissions-form"),c=s("jig-layout");return u(),_(c,null,{header:t(()=>[o("div",j,[i(a,{href:e.route("admin.permissions.index"),class:"text-xl font-black text-white"},{default:t(()=>[w,b]),_:1},8,["href"])])]),default:t(()=>[o("div",g,[o("div",y,[i(n,{onSuccess:r.onSuccess,onError:r.onError},null,8,["onSuccess","onError"])])])]),_:1})}var z=d(h,[["render",v]]);export{z as default};
