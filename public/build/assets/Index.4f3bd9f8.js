import{J as k}from"./JigLayout.de448839.js";import{J as j}from"./ConfirmationModal.076d1b58.js";import{J as y}from"./DialogModal.12166fb1.js";import{I as D}from"./InertiaButton.18e5489b.js";import{D as v,J as C,a as S}from"./DtComponent.7eb991fb.js";import{D as x}from"./DisplayMixin.328c366f.js";import $ from"./ShowForm.07f2156b.js";import{p as I,e as i,o as r,f as m,w as o,g as s,k as a,j as f,i as d,C as h,n,t as J}from"./vendor.faa38336.js";import{_ as N}from"./plugin-vue_export-helper.5a098b48.js";import"./ApplicationLogo.d162e8a5.js";import"./main.879f37ea.js";import"./JigDd.3af5bc62.js";const B=I({name:"Index",components:{DtComponent:v,JigToggle:C,InertiaButton:D,JetConfirmationModal:j,JetDialogModal:y,JigModal:S,JigLayout:k,ShowStockStatusesForm:$},props:{can:Object,columns:Array},inject:["$refreshDt","$dayjs"],data(){return{tableId:"stock-statuses-dt",tableParams:{},datatable:null,confirmDelete:!1,currentModel:null,withDisabled:!1,showModal:!1}},mixins:[x],mounted(){},computed:{ajaxUrl(){return new URL(this.route("api.stock-statuses.dt")).href}},methods:{showModel(e){axios.get(route("api.stock-statuses.show",e)).then(t=>{this.currentModel=t.data.payload,this.showModal=!0})},editModel(e){this.$inertia.visit(this.route("admin.stock-statuses.edit",e.id))},confirmDeletion(e){this.currentModel=e,this.confirmDelete=!0},cancelDelete(){this.currentModel=!1,this.confirmDelete=!1},async deleteModel(){const e=this;this.confirmDelete=!1,this.currentModel&&this.$inertia.delete(route("admin.stock-statuses.destroy",e.currentModel),{onFinish:t=>{this.displayNotification("success","Item deleted."),e.$refreshDt(e.tableId)},onError:t=>{console.log(t),this.displayNotification("error","There was an error while deleting the item.")}})},async toggleActivation(e,t){console.log(e),axios.put(route("api.stock-statuses.update",t.id),{enabled:e}).then(c=>{this.displayNotification("success",c.data.message),this.$refreshDt(this.tableId)})}}}),A={class:"flex flex-wrap items-center justify-between w-full px-4"},L=s("i",{class:"fas fa-arrow-left"},null,-1),E=n(" Retour"),V={class:"flex gap-x-2"},F=s("i",{class:"fas fa-plus"},null,-1),R=n(" Nouveau Stock Status"),T=s("i",{class:"fas fa-redo"},null,-1),U=n(" Refresh"),z={key:0,class:"flex flex-wrap px-4"},P={class:"z-10 flex-auto bg-white md:rounded-md md:shadow-md"},Y=s("h3",{class:"w-full p-4 mb-2 text-lg font-black sm:rounded-t-lg bg-primary-100"},[s("i",{class:"mr-2 fas fa-bars"}),n(" List des Statuses de Stock")],-1),O={class:"p-4"},q=s("div",null,"Are you sure you want to delete this record?",-1),G={class:"flex justify-end gap-x-2"},H=n("Cancel"),K=n("Yes, Delete"),Q={key:0},W=n("Close"),X={key:1,class:"p-4 font-bold text-red-500 bg-red-100 rounded-md shadow-md"};function Z(e,t,c,ee,te,oe){const p=i("inertia-link"),l=i("inertia-button"),_=i("dt-component"),g=i("jet-confirmation-modal"),b=i("show-stock-statuses-form"),w=i("jig-modal"),M=i("jig-layout");return r(),m(M,null,{header:o(()=>[s("div",A,[a(p,{href:e.route("admin.dashboard"),class:"text-xl font-black text-white"},{default:o(()=>[L,E]),_:1},8,["href"]),s("div",V,[e.can.create?(r(),m(l,{key:0,href:e.route("admin.stock-statuses.create"),classes:"bg-green-100 hover:bg-green-200 text-primary"},{default:o(()=>[F,R]),_:1},8,["href"])):f("",!0),a(l,{onClick:t[0]||(t[0]=u=>e.$refreshDt(e.tableId)),classes:"bg-indigo-100 hover:bg-green-200 text-indigo"},{default:o(()=>[T,U]),_:1})])])]),default:o(()=>[e.can.viewAny?(r(),d("div",z,[s("div",P,[Y,s("div",O,[a(_,{"table-id":e.tableId,"ajax-url":e.ajaxUrl,columns:e.columns,"ajax-params":e.tableParams,onShowModel:e.showModel,onEditModel:e.editModel,onDeleteModel:e.confirmDeletion},null,8,["table-id","ajax-url","columns","ajax-params","onShowModel","onEditModel","onDeleteModel"])]),a(g,{title:"Confirm Deletion",show:e.confirmDelete},{content:o(()=>[q]),footer:o(()=>[s("div",G,[a(l,{as:"button",type:"button",onClick:h(e.cancelDelete,["stop"]),class:"bg-red-500"},{default:o(()=>[H]),_:1},8,["onClick"]),a(l,{as:"button",type:"button",onClick:h(e.deleteModel,["prevent"]),class:"bg-green-500"},{default:o(()=>[K]),_:1},8,["onClick"])])]),_:1},8,["show"]),e.showModal&&e.currentModel?(r(),d("div",Q,[a(w,{show:e.showModal,"corner-class":"rounded-lg","position-class":"align-middle",onClose:t[2]||(t[2]=u=>{e.currentModel=null,e.showModal=!1})},{title:o(()=>[n("Show Stock Status #"+J(e.currentModel.id),1)]),footer:o(()=>[a(l,{class:"px-4 text-white bg-primary",onClick:t[1]||(t[1]=u=>{e.showModal=!1,e.currentModel=null})},{default:o(()=>[W]),_:1})]),default:o(()=>[a(b,{model:e.currentModel},null,8,["model"])]),_:1},8,["show"])])):f("",!0)])])):(r(),d("div",X," You are not authorized to view a list of Stock Status "))]),_:1})}var pe=N(B,[["render",Z]]);export{pe as default};
