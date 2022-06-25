import{J as d}from"./JigLayout.72cfa05e.js";import{J as c}from"./Label.f2ea9d50.js";import{I as l}from"./InertiaButton.da879e12.js";import{J as m}from"./InputError.ef5e9aea.js";import{J as p}from"./Button.3888e282.js";import f from"./EditForm.97d08893.js";import{D as u}from"./DisplayMixin.328c366f.js";import{_}from"./plugin-vue_export-helper.5a098b48.js";import{p as h,e,o as x,f as j,w as s,g as o,k as a,n as k,t as b}from"./vendor.7f465e53.js";import"./DialogModal.f6fb4b05.js";import"./ApplicationLogo.88559075.js";import"./Input.b4df4bca.js";const g=h({name:"EditStockStatuses",props:{model:Object},components:{InertiaButton:l,JetLabel:c,JetButton:p,JetInputError:m,JigLayout:d,EditStockStatusesForm:f},data(){return{}},mixins:[u],mounted(){},computed:{flash(){return this.$page.props.flash||{}}},methods:{onSuccess(t){this.displayNotification("success",t),this.$inertia.visit(route("admin.stock-statuses.index"))},onError(t){this.displayNotification("error",t)}}}),w={class:"flex flex-wrap items-center justify-between w-full px-4"},E=o("i",{class:"fas fa-arrow-left"},null,-1),S={class:"flex flex-wrap px-4"},y={class:"z-10 flex-auto max-w-2xl p-4 mx-auto bg-white md:rounded-md md:shadow-md"};function J(t,v,B,I,$,D){const r=e("inertia-link"),i=e("edit-stock-statuses-form"),n=e("jig-layout");return x(),j(n,null,{header:s(()=>[o("div",w,[a(r,{href:t.route("admin.stock-statuses.index"),class:"text-xl font-black text-white"},{default:s(()=>[E,k(" Back | Edit Stock Status #"+b(t.model.id),1)]),_:1},8,["href"])])]),default:s(()=>[o("div",S,[o("div",y,[a(i,{model:t.model,onSuccess:t.onSuccess,onError:t.onError},null,8,["model","onSuccess","onError"])])])]),_:1})}var H=_(g,[["render",J]]);export{H as default};
