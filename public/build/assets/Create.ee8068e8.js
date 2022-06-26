import{J as c}from"./JigLayout.432aeff6.js";import{I as p}from"./InertiaButton.1210d7ec.js";import l from"./CreateForm.89911af7.js";import{D as f}from"./DisplayMixin.328c366f.js";import{_ as d}from"./plugin-vue_export-helper.5a098b48.js";import{p as m,e as t,o as u,f as _,w as s,g as o,k as r,n as h}from"./vendor.688b8fb8.js";import"./DialogModal.8b7b74e4.js";import"./ApplicationLogo.84caf5de.js";import"./Input.7c4ec79d.js";import"./InfiniteSelect.c9ff1f6a.js";import"./Label.a372a458.js";import"./InputError.ec1a52bd.js";const x=m({name:"CreateStockHistories",components:{InertiaButton:p,JigLayout:c,CreateStockHistoriesForm:l},data(){return{}},mixins:[f],mounted(){},computed:{flash(){return this.$page.props.flash||{}}},methods:{onSuccess(e){this.displayNotification("success",e),this.$inertia.visit(route("admin.stock-histories.index"))},onError(e){this.displayNotification("error",e)}}}),j={class:"flex flex-wrap items-center justify-between w-full px-4"},k=o("i",{class:"fas fa-arrow-left"},null,-1),w=h(" Retour | Nouveau Historique de stock "),b={class:"flex flex-wrap px-4"},g={class:"z-10 flex-auto max-w-2xl p-4 mx-auto bg-white md:rounded-md md:shadow-md"};function v(e,y,C,S,I,N){const i=t("inertia-link"),a=t("create-stock-histories-form"),n=t("jig-layout");return u(),_(n,null,{header:s(()=>[o("div",j,[r(i,{href:e.route("admin.stock-histories.index"),class:"text-xl font-black text-white"},{default:s(()=>[k,w]),_:1},8,["href"])])]),default:s(()=>[o("div",b,[o("div",g,[r(a,{onSuccess:e.onSuccess,onError:e.onError},null,8,["onSuccess","onError"])])])]),_:1})}var A=d(x,[["render",v]]);export{A as default};
