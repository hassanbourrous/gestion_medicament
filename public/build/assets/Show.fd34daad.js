import{J as c}from"./JigLayout.72cfa05e.js";import{I as m}from"./InertiaButton.da879e12.js";import p from"./ShowForm.dcc39d73.js";import{_ as f}from"./plugin-vue_export-helper.5a098b48.js";import{p as u,e as t,o,f as _,w as s,g as a,k as n,n as h,t as w,i}from"./vendor.7f465e53.js";import"./DialogModal.f6fb4b05.js";import"./DisplayMixin.328c366f.js";import"./ApplicationLogo.88559075.js";import"./JigDd.fb015ea6.js";const x=u({name:"ShowStockStatus",components:{InertiaButton:m,JigLayout:c,ShowStockStatusesForm:p},props:{model:Object},data(){return{}},mounted(){},methods:{}}),k={class:"flex flex-wrap items-center justify-between w-full px-4"},g=a("i",{class:"fas fa-arrow-left"},null,-1),j={key:0,class:"flex flex-wrap px-4"},v={class:"z-10 flex-auto max-w-5xl p-4 mx-auto bg-white md:rounded-md md:shadow-md"},S={key:1,class:"px-4 text-lg font-bold text-center text-red-500 bg-white rounded-md shadow-md space-4"};function b(e,y,B,D,J,$){const r=t("inertia-link"),d=t("show-stock-statuses-form"),l=t("jig-layout");return o(),_(l,null,{header:s(()=>[a("div",k,[n(r,{href:e.route("admin.stock-statuses.index"),class:"text-2xl font-black text-white"},{default:s(()=>[g,h(" Back | Details of Stock Status #"+w(e.model.id),1)]),_:1},8,["href"])])]),default:s(()=>[e.model.can.view?(o(),i("div",j,[a("div",v,[n(d,{model:e.model},null,8,["model"])])])):(o(),i("div",S," You don't have permission to view this resource. "))]),_:1})}var E=f(x,[["render",b]]);export{E as default};