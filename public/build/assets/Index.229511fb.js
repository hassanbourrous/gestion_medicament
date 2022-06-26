import{J as F}from"./JigLayout.de448839.js";import{J as D}from"./ConfirmationModal.076d1b58.js";import{J as C}from"./DialogModal.12166fb1.js";import{I as x}from"./InertiaButton.18e5489b.js";import{D as P,J as k,a as I}from"./DtComponent.e4173f2a.js";import{D as $}from"./DisplayMixin.328c366f.js";import J from"./ShowForm.4a5e774f.js";import{p as S,K as V,e as n,o as d,f as p,w as s,g as t,k as a,j as f,i as m,C as u,z as N,a6 as B,n as l,t as L}from"./vendor.faa38336.js";import{J as A}from"./Label.b121d9c9.js";import{I as R}from"./InfiniteSelect.ea8cf2aa.js";import{J as U}from"./Input.ff5f863b.js";import{_ as E}from"./plugin-vue_export-helper.5a098b48.js";import"./ApplicationLogo.d162e8a5.js";import"./main.bae80a72.js";import"./JigDd.3af5bc62.js";const q=S({name:"Index",components:{DtComponent:P,JigToggle:k,InertiaButton:x,JetConfirmationModal:D,JetDialogModal:C,JigModal:I,JigLayout:F,ShowMedicamentsForm:J,JetLabel:A,InfiniteSelect:R,JetInput:U},props:{can:Object,columns:Array},inject:["$refreshDt","$dayjs"],data(){return{tableId:"medicaments-dt",tableParams:{category_id:null,ref:null,ref_condition:null},datatable:null,confirmDelete:!1,currentModel:null,withDisabled:!1,showModal:!1,filters_expanded:!1,tableParamsForm:V({category:null,ref:null,ref_condition:"equal"},{remember:!1})}},mixins:[$],mounted(){},computed:{ajaxUrl(){return new URL(this.route("api.medicaments.dt")).href}},methods:{showModel(e){axios.get(route("api.medicaments.show",e)).then(o=>{this.currentModel=o.data.payload,this.showModal=!0})},editModel(e){this.$inertia.visit(this.route("admin.medicaments.edit",e.id))},expandFilters(){this.filters_expanded=!this.filters_expanded},confirmDeletion(e){this.currentModel=e,this.confirmDelete=!0},cancelDelete(){this.currentModel=!1,this.confirmDelete=!1},async deleteModel(){const e=this;this.confirmDelete=!1,this.currentModel&&this.$inertia.delete(route("admin.medicaments.destroy",e.currentModel),{onFinish:o=>{this.displayNotification("success","Item deleted."),e.$refreshDt(e.tableId)},onError:o=>{console.log(o),this.displayNotification("error","There was an error while deleting the item.")}})},async toggleActivation(e,o){axios.put(route("api.medicaments.update",o.id),{enabled:e}).then(h=>{this.displayNotification("success",h.data.message),this.$refreshDt(this.tableId)})},selectedCategoryFilter(){this.tableParams.category_id=this.tableParamsForm.category?this.tableParamsForm.category.id:null,this.$refreshDt(this.tableId)},submmitFilters(){this.tableParams.category_id=this.tableParamsForm.category?this.tableParamsForm.category.id:null,this.tableParams.ref=this.tableParamsForm.ref?this.tableParamsForm.ref:null,this.tableParams.ref_condition=this.tableParamsForm.ref_condition?this.tableParamsForm.ref_condition:null,this.$refreshDt(this.tableId)},ResetFillters(){this.tableParamsForm.category=null,this.tableParamsForm.ref=null,this.tableParamsForm.ref_condition="equal",this.submmitFilters()}}}),z={class:"flex flex-wrap items-center justify-between w-full px-4"},O=t("i",{class:"fas fa-arrow-left"},null,-1),T=l(" Back"),Y={class:"flex gap-x-2"},K=t("i",{class:"fas fa-plus"},null,-1),G=l(" New Medicament"),H=t("i",{class:"fas fa-redo"},null,-1),Q=l(" Refresh"),W={key:0,class:"flex flex-wrap px-4"},X={class:"z-10 flex-auto bg-white md:rounded-md md:shadow-md"},Z={class:"w-full p-4 text-lg font-black sm:rounded-t-lg bg-primary-100"},ee=t("i",{class:"mr-2 fas fa-bars"},null,-1),te=l(" List of All Medicaments "),oe=t("i",{class:"mr-2 fas fa-filter"},null,-1),se=[oe],ae={key:0,class:"p-4 transition-all bg-indigo-50"},ie={class:"flex"},le={class:"flex-1 mr-2"},ne={class:"w-full max-w-md"},re={class:"flex-1 mr-2"},de={class:"flex"},me={class:"flex-1 mr-2"},ce={class:"w-full max-w-md"},fe=l(" Ref "),ue={class:"flex-1 mr-8"},he={class:"w-full max-w-xs"},pe=t("option",{value:"equal"},"\xC9gale =",-1),_e=t("option",{value:"contain"},"Contenir *",-1),be=[pe,_e],ge={class:"flex-none"},ye=l("Reset"),we=l("Submit"),ve={class:"p-4"},Me=t("div",null,"Are you sure you want to delete this record?",-1),je={class:"flex justify-end gap-x-2"},Fe=l("Cancel"),De=l("Yes, Delete"),Ce={key:1},xe=l("Close"),Pe={key:1,class:"p-4 font-bold text-red-500 bg-red-100 rounded-md shadow-md"};function ke(e,o,h,Ie,$e,Je){const _=n("inertia-link"),r=n("inertia-button"),c=n("jet-label"),b=n("infinite-select"),g=n("jet-input"),y=n("dt-component"),w=n("jet-confirmation-modal"),v=n("show-medicaments-form"),M=n("jig-modal"),j=n("jig-layout");return d(),p(j,null,{header:s(()=>[t("div",z,[a(_,{href:e.route("admin.dashboard"),class:"text-xl font-black text-white"},{default:s(()=>[O,T]),_:1},8,["href"]),t("div",Y,[e.can.create?(d(),p(r,{key:0,href:e.route("admin.medicaments.create"),classes:"bg-green-100 hover:bg-green-200 text-primary"},{default:s(()=>[K,G]),_:1},8,["href"])):f("",!0),a(r,{onClick:o[0]||(o[0]=i=>e.$refreshDt(e.tableId)),classes:"bg-indigo-100 hover:bg-green-200 text-indigo"},{default:s(()=>[H,Q]),_:1})])])]),default:s(()=>[e.can.viewAny?(d(),m("div",W,[t("div",X,[t("h3",Z,[ee,te,t("button",{style:{"margin-top":"-5px"},type:"button",onClick:o[1]||(o[1]=i=>e.expandFilters()),class:"float-right pl-2 pt-1 pb-1 pr-1 bg-primary text-white rounded hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg active:bg-primary-800 active:shadow-lg transition duration-150 ease-in-out"},se)]),e.filters_expanded?(d(),m("div",ae,[t("form",{onSubmit:o[6]||(o[6]=u((...i)=>e.submmitFilters&&e.submmitFilters(...i),["prevent"]))},[t("div",ie,[t("div",le,[t("div",ne,[a(c,{for:"category",value:"Category"}),a(b,{"per-page":15,"api-url":e.route("api.categories.index"),"onOption:selected":e.selectedCategoryFilter,id:"category",name:"category",modelValue:e.tableParamsForm.category,"onUpdate:modelValue":o[2]||(o[2]=i=>e.tableParamsForm.category=i),label:"name"},null,8,["api-url","onOption:selected","modelValue"])])]),t("div",re,[t("div",de,[t("div",me,[t("div",ce,[a(c,{for:"ref"},{default:s(()=>[fe]),_:1}),a(g,{class:"w-full",type:"text",id:"ref",name:"ref",modelValue:e.tableParamsForm.ref,"onUpdate:modelValue":o[3]||(o[3]=i=>e.tableParamsForm.ref=i)},null,8,["modelValue"])])]),t("div",ue,[t("div",he,[a(c,{for:"ref_condition",value:"Condition"}),N(t("select",{class:"w-full cost_select","onUpdate:modelValue":o[4]||(o[4]=i=>e.tableParamsForm.ref_condition=i),id:"ref_condition",name:"ref_condition"},be,512),[[B,e.tableParamsForm.ref_condition]])])])])]),t("div",ge,[a(r,{type:"button",class:"mt-4 mr-4 text-white font-semibold bg-success disabled:opacity-25",onClick:o[5]||(o[5]=i=>e.ResetFillters())},{default:s(()=>[ye]),_:1}),a(r,{type:"submit",class:"mt-4 mr-14 text-white font-semibold bg-primary disabled:opacity-25"},{default:s(()=>[we]),_:1})])])],32)])):f("",!0),t("div",ve,[a(y,{"table-id":e.tableId,"ajax-url":e.ajaxUrl,columns:e.columns,"ajax-params":e.tableParams,onShowModel:e.showModel,onEditModel:e.editModel,onDeleteModel:e.confirmDeletion},null,8,["table-id","ajax-url","columns","ajax-params","onShowModel","onEditModel","onDeleteModel"])]),a(w,{title:"Confirm Deletion",show:e.confirmDelete},{content:s(()=>[Me]),footer:s(()=>[t("div",je,[a(r,{as:"button",type:"button",onClick:u(e.cancelDelete,["stop"]),class:"bg-red-500"},{default:s(()=>[Fe]),_:1},8,["onClick"]),a(r,{as:"button",type:"button",onClick:u(e.deleteModel,["prevent"]),class:"bg-green-500"},{default:s(()=>[De]),_:1},8,["onClick"])])]),_:1},8,["show"]),e.showModal&&e.currentModel?(d(),m("div",Ce,[a(M,{show:e.showModal,"corner-class":"rounded-lg","position-class":"align-middle",onClose:o[8]||(o[8]=i=>{e.currentModel=null,e.showModal=!1})},{title:s(()=>[l("Show Medicament #"+L(e.currentModel.id),1)]),footer:s(()=>[a(r,{class:"px-4 text-white bg-primary",onClick:o[7]||(o[7]=i=>{e.showModal=!1,e.currentModel=null})},{default:s(()=>[xe]),_:1})]),default:s(()=>[a(v,{model:e.currentModel},null,8,["model"])]),_:1},8,["show"])])):f("",!0)])])):(d(),m("div",Pe," You are not authorized to view a list of Medicaments "))]),_:1})}var Ge=E(q,[["render",ke]]);export{Ge as default};