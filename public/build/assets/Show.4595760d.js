import{J as c}from"./JigLayout.432aeff6.js";import{I as m}from"./InertiaButton.1210d7ec.js";import p from"./ShowForm.213ce6b6.js";import{_ as f}from"./plugin-vue_export-helper.5a098b48.js";import{p as u,e as o,o as t,f as h,w as s,g as i,k as a,n as _,t as w,i as r}from"./vendor.688b8fb8.js";import"./DialogModal.8b7b74e4.js";import"./DisplayMixin.328c366f.js";import"./ApplicationLogo.84caf5de.js";import"./JigDd.ac5c5f22.js";const x=u({name:"ShowStockHistory",components:{InertiaButton:m,JigLayout:c,ShowStockHistoriesForm:p},props:{model:Object},data(){return{}},mounted(){},methods:{}}),k={class:"flex flex-wrap items-center justify-between w-full px-4"},g=i("i",{class:"fas fa-arrow-left"},null,-1),j={key:0,class:"flex flex-wrap px-4"},b={class:"z-10 flex-auto max-w-5xl p-4 mx-auto bg-white md:rounded-md md:shadow-md"},v={key:1,class:"px-4 text-lg font-bold text-center text-red-500 bg-white rounded-md shadow-md space-4"};function y(e,S,B,D,J,$){const n=o("inertia-link"),d=o("show-stock-histories-form"),l=o("jig-layout");return t(),h(l,null,{header:s(()=>[i("div",k,[a(n,{href:e.route("admin.stock-histories.index"),class:"text-2xl font-black text-white"},{default:s(()=>[g,_(" Retour | D\xE9tails de l'historique de stock #"+w(e.model.id),1)]),_:1},8,["href"])])]),default:s(()=>[e.model.can.view?(t(),r("div",j,[i("div",b,[a(d,{model:e.model},null,8,["model"])])])):(t(),r("div",v," You don't have permission to view this resource. "))]),_:1})}var z=f(x,[["render",y]]);export{z as default};