import{J as r}from"./JigDd.ac5c5f22.js";import{I as d}from"./InertiaButton.1210d7ec.js";import{_ as p}from"./plugin-vue_export-helper.5a098b48.js";import{p as l,e as c,o as i,i as m,k as a,w as o,n as e,t as n}from"./vendor.688b8fb8.js";const _=l({name:"ShowStockStatusesForm",props:{model:Object},components:{InertiaButton:d,JigDd:r},data(){return{}},mounted(){},computed:{flash(){return this.$page.props.flash||{}}},methods:{}}),u={class:"gap-4"},f=e("Name:"),h=e("Color:"),g=e("Period:");function j(t,S,k,$,b,v){const s=c("jig-dd");return i(),m("dl",u,[a(s,null,{dt:o(()=>[f]),default:o(()=>[e(" "+n(t.model.name),1)]),_:1}),a(s,null,{dt:o(()=>[h]),default:o(()=>[e(" "+n(t.model.color),1)]),_:1}),a(s,null,{dt:o(()=>[g]),default:o(()=>[e(" "+n(t.model.period),1)]),_:1})])}var D=p(_,[["render",j]]);export{D as default};