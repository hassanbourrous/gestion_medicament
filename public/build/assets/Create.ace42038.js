import{J as c}from"./JigLayout.432aeff6.js";import{I as p}from"./InertiaButton.1210d7ec.js";import l from"./CreateForm.5cb3a5aa.js";import{D as d}from"./DisplayMixin.328c366f.js";import{_ as m}from"./plugin-vue_export-helper.5a098b48.js";import{p as f,e as t,o as u,f as _,w as a,g as o,k as r,n as h}from"./vendor.688b8fb8.js";import"./DialogModal.8b7b74e4.js";import"./ApplicationLogo.84caf5de.js";import"./Input.7c4ec79d.js";import"./Label.a372a458.js";import"./InputError.ec1a52bd.js";const x=f({name:"CreateCategories",components:{InertiaButton:p,JigLayout:c,CreateCategoriesForm:l},data(){return{}},mixins:[d],mounted(){},computed:{flash(){return this.$page.props.flash||{}}},methods:{onSuccess(e){this.displayNotification("success",e),this.$inertia.visit(route("admin.categories.index"))},onError(e){this.displayNotification("error",e)}}}),g={class:"flex flex-wrap items-center justify-between w-full px-4"},j=o("i",{class:"fas fa-arrow-left"},null,-1),b=h(" Retour | Nouveau Cat\xE9gorie "),w={class:"flex flex-wrap px-4"},C={class:"z-10 flex-auto max-w-2xl p-4 mx-auto bg-white md:rounded-md md:shadow-md"};function v(e,y,k,N,$,B){const s=t("inertia-link"),i=t("create-categories-form"),n=t("jig-layout");return u(),_(n,null,{header:a(()=>[o("div",g,[r(s,{href:e.route("admin.categories.index"),class:"text-xl font-black text-white"},{default:a(()=>[j,b]),_:1},8,["href"])])]),default:a(()=>[o("div",w,[o("div",C,[r(i,{onSuccess:e.onSuccess,onError:e.onError},null,8,["onSuccess","onError"])])])]),_:1})}var R=m(x,[["render",v]]);export{R as default};