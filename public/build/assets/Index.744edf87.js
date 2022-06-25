import{J as y}from"./JigLayout.72cfa05e.js";import{J as j}from"./ConfirmationModal.72ac5f25.js";import{J as D}from"./DialogModal.f6fb4b05.js";import{I as v}from"./InertiaButton.da879e12.js";import{D as C,J as k,a as x}from"./DtComponent.cdfa3848.js";import{D as $}from"./DisplayMixin.328c366f.js";import I from"./ShowForm.2d0542ba.js";import{p as J,e as n,o as r,f,w as t,g as s,k as a,j as u,i as d,C as h,n as i,t as N}from"./vendor.7f465e53.js";import{_ as B}from"./plugin-vue_export-helper.5a098b48.js";import"./ApplicationLogo.88559075.js";import"./main.d4931533.js";import"./JigDd.fb015ea6.js";const A=J({name:"Index",components:{DtComponent:C,JigToggle:k,InertiaButton:v,JetConfirmationModal:j,JetDialogModal:D,JigModal:x,JigLayout:y,ShowCategoriesForm:I},props:{can:Object,columns:Array},inject:["$refreshDt","$dayjs"],data(){return{tableId:"categories-dt",tableParams:{},datatable:null,confirmDelete:!1,currentModel:null,withDisabled:!1,showModal:!1}},mixins:[$],mounted(){},computed:{ajaxUrl(){return new URL(this.route("api.categories.dt")).href}},methods:{showModel(e){axios.get(route("api.categories.show",e)).then(o=>{this.currentModel=o.data.payload,this.showModal=!0})},editModel(e){this.$inertia.visit(this.route("admin.categories.edit",e.id))},confirmDeletion(e){this.currentModel=e,this.confirmDelete=!0},cancelDelete(){this.currentModel=!1,this.confirmDelete=!1},async deleteModel(){const e=this;this.confirmDelete=!1,this.currentModel&&this.$inertia.delete(route("admin.categories.destroy",e.currentModel),{onFinish:o=>{this.displayNotification("success","Item deleted."),e.$refreshDt(e.tableId)},onError:o=>{console.log(o),this.displayNotification("error","There was an error while deleting the item.")}})},async toggleActivation(e,o){console.log(e),axios.put(route("api.categories.update",o.id),{enabled:e}).then(c=>{this.displayNotification("success",c.data.message),this.$refreshDt(this.tableId)})}}}),S={class:"flex flex-wrap items-center justify-between w-full px-4"},L=s("i",{class:"fas fa-arrow-left"},null,-1),E=i(" Back"),V={class:"flex gap-x-2"},F=s("i",{class:"fas fa-plus"},null,-1),T=i(" New Category"),U=s("i",{class:"fas fa-redo"},null,-1),z=i(" Refresh"),P={key:0,class:"flex flex-wrap px-4"},R={class:"z-10 flex-auto bg-white md:rounded-md md:shadow-md"},Y=s("h3",{class:"w-full p-4 mb-2 text-lg font-black sm:rounded-t-lg bg-primary-100"},[s("i",{class:"mr-2 fas fa-bars"}),i(" List of All Categories")],-1),O={class:"p-4"},q=s("div",null,"Are you sure you want to delete this record?",-1),G={class:"flex justify-end gap-x-2"},H=i("Cancel"),K=i("Yes, Delete"),Q={key:0},W=i("Close"),X={key:1,class:"p-4 font-bold text-red-500 bg-red-100 rounded-md shadow-md"};function Z(e,o,c,ee,oe,te){const p=n("inertia-link"),l=n("inertia-button"),g=n("dt-component"),_=n("jet-confirmation-modal"),w=n("show-categories-form"),b=n("jig-modal"),M=n("jig-layout");return r(),f(M,null,{header:t(()=>[s("div",S,[a(p,{href:e.route("admin.dashboard"),class:"text-xl font-black text-white"},{default:t(()=>[L,E]),_:1},8,["href"]),s("div",V,[e.can.create?(r(),f(l,{key:0,href:e.route("admin.categories.create"),classes:"bg-green-100 hover:bg-green-200 text-primary"},{default:t(()=>[F,T]),_:1},8,["href"])):u("",!0),a(l,{onClick:o[0]||(o[0]=m=>e.$refreshDt(e.tableId)),classes:"bg-indigo-100 hover:bg-green-200 text-indigo"},{default:t(()=>[U,z]),_:1})])])]),default:t(()=>[e.can.viewAny?(r(),d("div",P,[s("div",R,[Y,s("div",O,[a(g,{"table-id":e.tableId,"ajax-url":e.ajaxUrl,columns:e.columns,"ajax-params":e.tableParams,onShowModel:e.showModel,onEditModel:e.editModel,onDeleteModel:e.confirmDeletion},null,8,["table-id","ajax-url","columns","ajax-params","onShowModel","onEditModel","onDeleteModel"])]),a(_,{title:"Confirm Deletion",show:e.confirmDelete},{content:t(()=>[q]),footer:t(()=>[s("div",G,[a(l,{as:"button",type:"button",onClick:h(e.cancelDelete,["stop"]),class:"bg-red-500"},{default:t(()=>[H]),_:1},8,["onClick"]),a(l,{as:"button",type:"button",onClick:h(e.deleteModel,["prevent"]),class:"bg-green-500"},{default:t(()=>[K]),_:1},8,["onClick"])])]),_:1},8,["show"]),e.showModal&&e.currentModel?(r(),d("div",Q,[a(b,{show:e.showModal,"corner-class":"rounded-lg","position-class":"align-middle",onClose:o[2]||(o[2]=m=>{e.currentModel=null,e.showModal=!1})},{title:t(()=>[i("Show Category #"+N(e.currentModel.id),1)]),footer:t(()=>[a(l,{class:"px-4 text-white bg-primary",onClick:o[1]||(o[1]=m=>{e.showModal=!1,e.currentModel=null})},{default:t(()=>[W]),_:1})]),default:t(()=>[a(w,{model:e.currentModel},null,8,["model"])]),_:1},8,["show"])])):u("",!0)])])):(r(),d("div",X," You are not authorized to view a list of Categories "))]),_:1})}var pe=B(A,[["render",Z]]);export{pe as default};
