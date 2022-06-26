import{J as d}from"./JigLayout.de448839.js";import{J as c}from"./Label.b121d9c9.js";import{I as l}from"./InertiaButton.18e5489b.js";import{J as m}from"./InputError.830002e3.js";import{J as p}from"./Button.4c5f648b.js";import f from"./EditForm.ee24caea.js";import{D as u}from"./DisplayMixin.328c366f.js";import{_}from"./plugin-vue_export-helper.5a098b48.js";import{p as h,e as t,o as x,f as g,w as s,g as e,k as r,n as j,t as b}from"./vendor.faa38336.js";import"./DialogModal.12166fb1.js";import"./ApplicationLogo.d162e8a5.js";import"./Input.ff5f863b.js";const w=h({name:"EditCategories",props:{model:Object},components:{InertiaButton:l,JetLabel:c,JetButton:p,JetInputError:m,JigLayout:d,EditCategoriesForm:f},data(){return{}},mixins:[u],mounted(){},computed:{flash(){return this.$page.props.flash||{}}},methods:{onSuccess(o){this.displayNotification("success",o),this.$inertia.visit(route("admin.categories.index"))},onError(o){this.displayNotification("error",o)}}}),y={class:"flex flex-wrap items-center justify-between w-full px-4"},E=e("i",{class:"fas fa-arrow-left"},null,-1),J={class:"flex flex-wrap px-4"},v={class:"z-10 flex-auto max-w-2xl p-4 mx-auto bg-white md:rounded-md md:shadow-md"};function B(o,k,C,I,$,D){const a=t("inertia-link"),i=t("edit-categories-form"),n=t("jig-layout");return x(),g(n,null,{header:s(()=>[e("div",y,[r(a,{href:o.route("admin.categories.index"),class:"text-xl font-black text-white"},{default:s(()=>[E,j(" Back | Edit Category #"+b(o.model.id),1)]),_:1},8,["href"])])]),default:s(()=>[e("div",J,[e("div",v,[r(i,{model:o.model,onSuccess:o.onSuccess,onError:o.onError},null,8,["model","onSuccess","onError"])])])]),_:1})}var H=_(w,[["render",B]]);export{H as default};