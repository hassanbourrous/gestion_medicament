import{J as d}from"./JigDd.3af5bc62.js";import{I as r}from"./InertiaButton.18e5489b.js";import{_ as l}from"./plugin-vue_export-helper.5a098b48.js";import{p as m,e as i,o as p,i as c,k as s,w as e,n as o,t as n}from"./vendor.faa38336.js";const _=m({name:"ShowMedicamentsForm",props:{model:Object},components:{InertiaButton:r,JigDd:d},data(){return{}},mounted(){},computed:{flash(){return this.$page.props.flash||{}}},methods:{}}),u={class:"gap-4"},f=o("Category:"),h=o("Nom Commercial:"),g=o("Dosage:"),j=o("Presentation:"),C=o("Ref:");function $(t,b,v,w,y,B){const a=i("jig-dd");return p(),c("dl",u,[s(a,null,{dt:e(()=>[f]),default:e(()=>[o(" "+n(t.model.category?t.model.category.name:"-"),1)]),_:1}),s(a,null,{dt:e(()=>[h]),default:e(()=>[o(" "+n(t.model.nom_commercial),1)]),_:1}),s(a,null,{dt:e(()=>[g]),default:e(()=>[o(" "+n(t.model.dosage),1)]),_:1}),s(a,null,{dt:e(()=>[j]),default:e(()=>[o(" "+n(t.model.presentation),1)]),_:1}),s(a,null,{dt:e(()=>[C]),default:e(()=>[o(" "+n(t.model.ref),1)]),_:1})])}var N=l(_,[["render",$]]);export{N as default};