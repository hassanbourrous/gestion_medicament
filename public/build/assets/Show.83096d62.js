import{J as l}from"./JigLayout.de448839.js";import{I as c}from"./InertiaButton.18e5489b.js";import p from"./ShowForm.4a5e774f.js";import{_ as f}from"./plugin-vue_export-helper.5a098b48.js";import{p as u,e as o,o as t,f as _,w as a,g as s,k as n,n as h,t as w,i}from"./vendor.faa38336.js";import"./DialogModal.12166fb1.js";import"./DisplayMixin.328c366f.js";import"./ApplicationLogo.d162e8a5.js";import"./JigDd.3af5bc62.js";const x=u({name:"ShowMedicament",components:{InertiaButton:c,JigLayout:l,ShowMedicamentsForm:p},props:{model:Object},data(){return{}},mounted(){},methods:{}}),g={class:"flex flex-wrap items-center justify-between w-full px-4"},j=s("i",{class:"fas fa-arrow-left"},null,-1),v={key:0,class:"flex flex-wrap px-4"},b={class:"z-10 flex-auto max-w-5xl p-4 mx-auto bg-white md:rounded-md md:shadow-md"},k={key:1,class:"px-4 text-lg font-bold text-center text-red-500 bg-white rounded-md shadow-md space-4"};function y(e,B,D,M,S,J){const r=o("inertia-link"),d=o("show-medicaments-form"),m=o("jig-layout");return t(),_(m,null,{header:a(()=>[s("div",g,[n(r,{href:e.route("admin.medicaments.index"),class:"text-2xl font-black text-white"},{default:a(()=>[j,h(" Back | Details of Medicament #"+w(e.model.id),1)]),_:1},8,["href"])])]),default:a(()=>[e.model.can.view?(t(),i("div",v,[s("div",b,[n(d,{model:e.model},null,8,["model"])])])):(t(),i("div",k," You don't have permission to view this resource. "))]),_:1})}var E=f(x,[["render",y]]);export{E as default};
