import{J as d}from"./JigDd.fb015ea6.js";import{I as r}from"./InertiaButton.da879e12.js";import{_ as i}from"./plugin-vue_export-helper.5a098b48.js";import{p as l,e as m,o as p,i as u,k as a,w as e,n as t,t as s}from"./vendor.7f465e53.js";const c=l({name:"ShowStocksForm",props:{model:Object},components:{InertiaButton:r,JigDd:d},data(){return{}},mounted(){},computed:{flash(){return this.$page.props.flash||{}}},methods:{}}),_={class:"gap-4"},f=t("\xC9tablissement:"),h=t("Medicament:"),g=t("Date Production:"),j=t("Date D'expiration:"),D=t("Quantite:");function k(o,S,$,b,v,w){const n=m("jig-dd");return p(),u("dl",_,[a(n,null,{dt:e(()=>[f]),default:e(()=>[t(" "+s(o.model.estum?o.model.estum.name:"-"),1)]),_:1}),a(n,null,{dt:e(()=>[h]),default:e(()=>[t(" "+s(o.model.medicament?o.model.medicament.title:"-"),1)]),_:1}),a(n,null,{dt:e(()=>[g]),default:e(()=>[t(" "+s(o.model.date_production),1)]),_:1}),a(n,null,{dt:e(()=>[j]),default:e(()=>[t(" "+s(o.model.date_dexpiration),1)]),_:1}),a(n,null,{dt:e(()=>[D]),default:e(()=>[t(" "+s(o.model.quantite),1)]),_:1})])}var F=i(c,[["render",k]]);export{F as default};
