import{J as m}from"./JigLayout.72cfa05e.js";import{I as c}from"./InertiaButton.da879e12.js";import p from"./ShowForm.6d77f582.js";import{_ as f}from"./plugin-vue_export-helper.5a098b48.js";import{p as h,e as t,o,f as u,w as s,g as a,k as n,n as _,t as w,i}from"./vendor.7f465e53.js";import"./DialogModal.f6fb4b05.js";import"./DisplayMixin.328c366f.js";import"./ApplicationLogo.88559075.js";import"./JigDd.fb015ea6.js";const x=h({name:"ShowEstablishment",components:{InertiaButton:c,JigLayout:m,ShowEstablishmentsForm:p},props:{model:Object},data(){return{}},mounted(){},methods:{}}),b={class:"flex flex-wrap items-center justify-between w-full px-4"},g=a("i",{class:"fas fa-arrow-left"},null,-1),j={key:0,class:"flex flex-wrap px-4"},v={class:"z-10 flex-auto max-w-5xl p-4 mx-auto bg-white md:rounded-md md:shadow-md"},k={key:1,class:"px-4 text-lg font-bold text-center text-red-500 bg-white rounded-md shadow-md space-4"};function y(e,B,D,S,E,J){const r=t("inertia-link"),l=t("show-establishments-form"),d=t("jig-layout");return o(),u(d,null,{header:s(()=>[a("div",b,[n(r,{href:e.route("admin.establishments.index"),class:"text-2xl font-black text-white"},{default:s(()=>[g,_(" Back | Details of Establishment #"+w(e.model.id),1)]),_:1},8,["href"])])]),default:s(()=>[e.model.can.view?(o(),i("div",j,[a("div",v,[n(l,{model:e.model},null,8,["model"])])])):(o(),i("div",k," You don't have permission to view this resource. "))]),_:1})}var A=f(x,[["render",y]]);export{A as default};
