import{J as j}from"./JigLayout.432aeff6.js";import{J as y}from"./ConfirmationModal.d155459a.js";import{J as D}from"./DialogModal.8b7b74e4.js";import{I as v}from"./InertiaButton.1210d7ec.js";import{D as C,J as k,a as x}from"./DtComponent.a0609c05.js";import{D as $}from"./DisplayMixin.328c366f.js";import I from"./ShowForm.b5252626.js";import{p as J,e as a,o as r,f,w as t,g as s,k as n,j as u,i as d,C as h,n as i,t as N}from"./vendor.688b8fb8.js";import{_ as R}from"./plugin-vue_export-helper.5a098b48.js";import"./ApplicationLogo.84caf5de.js";import"./main.da06542b.js";import"./JigDd.ac5c5f22.js";const B=J({name:"Index",components:{DtComponent:C,JigToggle:k,InertiaButton:v,JetConfirmationModal:y,JetDialogModal:D,JigModal:x,JigLayout:j,ShowRegionsForm:I},props:{can:Object,columns:Array},inject:["$refreshDt","$dayjs"],data(){return{tableId:"regions-dt",tableParams:{},datatable:null,confirmDelete:!1,currentModel:null,withDisabled:!1,showModal:!1}},mixins:[$],mounted(){},computed:{ajaxUrl(){return new URL(this.route("api.regions.dt")).href}},methods:{showModel(e){axios.get(route("api.regions.show",e)).then(o=>{this.currentModel=o.data.payload,this.showModal=!0})},editModel(e){this.$inertia.visit(this.route("admin.regions.edit",e.id))},confirmDeletion(e){this.currentModel=e,this.confirmDelete=!0},cancelDelete(){this.currentModel=!1,this.confirmDelete=!1},async deleteModel(){const e=this;this.confirmDelete=!1,this.currentModel&&this.$inertia.delete(route("admin.regions.destroy",e.currentModel),{onFinish:o=>{this.displayNotification("success","Item deleted."),e.$refreshDt(e.tableId)},onError:o=>{console.log(o),this.displayNotification("error","There was an error while deleting the item.")}})},async toggleActivation(e,o){console.log(e),axios.put(route("api.regions.update",o.id),{enabled:e}).then(c=>{this.displayNotification("success",c.data.message),this.$refreshDt(this.tableId)})}}}),S={class:"flex flex-wrap items-center justify-between w-full px-4"},A=s("i",{class:"fas fa-arrow-left"},null,-1),L=i(" Retour"),E={class:"flex gap-x-2"},V=s("i",{class:"fas fa-plus"},null,-1),F=i(" Nouveau R\xE9gion"),T=s("i",{class:"fas fa-redo"},null,-1),U=i(" Refresh"),z={key:0,class:"flex flex-wrap px-4"},P={class:"z-10 flex-auto bg-white md:rounded-md md:shadow-md"},Y=s("h3",{class:"w-full p-4 mb-2 text-lg font-black sm:rounded-t-lg bg-primary-100"},[s("i",{class:"mr-2 fas fa-bars"}),i(" List des R\xE9gions")],-1),O={class:"p-4"},q=s("div",null,"Are you sure you want to delete this record?",-1),G={class:"flex justify-end gap-x-2"},H=i("Cancel"),K=i("Yes, Delete"),Q={key:0},W=i("Close"),X={key:1,class:"p-4 font-bold text-red-500 bg-red-100 rounded-md shadow-md"};function Z(e,o,c,ee,oe,te){const p=a("inertia-link"),l=a("inertia-button"),g=a("dt-component"),_=a("jet-confirmation-modal"),b=a("show-regions-form"),w=a("jig-modal"),M=a("jig-layout");return r(),f(M,null,{header:t(()=>[s("div",S,[n(p,{href:e.route("admin.dashboard"),class:"text-xl font-black text-white"},{default:t(()=>[A,L]),_:1},8,["href"]),s("div",E,[e.can.create?(r(),f(l,{key:0,href:e.route("admin.regions.create"),classes:"bg-green-100 hover:bg-green-200 text-primary"},{default:t(()=>[V,F]),_:1},8,["href"])):u("",!0),n(l,{onClick:o[0]||(o[0]=m=>e.$refreshDt(e.tableId)),classes:"bg-indigo-100 hover:bg-green-200 text-indigo"},{default:t(()=>[T,U]),_:1})])])]),default:t(()=>[e.can.viewAny?(r(),d("div",z,[s("div",P,[Y,s("div",O,[n(g,{"table-id":e.tableId,"ajax-url":e.ajaxUrl,columns:e.columns,"ajax-params":e.tableParams,onShowModel:e.showModel,onEditModel:e.editModel,onDeleteModel:e.confirmDeletion},null,8,["table-id","ajax-url","columns","ajax-params","onShowModel","onEditModel","onDeleteModel"])]),n(_,{title:"Confirm Deletion",show:e.confirmDelete},{content:t(()=>[q]),footer:t(()=>[s("div",G,[n(l,{as:"button",type:"button",onClick:h(e.cancelDelete,["stop"]),class:"bg-red-500"},{default:t(()=>[H]),_:1},8,["onClick"]),n(l,{as:"button",type:"button",onClick:h(e.deleteModel,["prevent"]),class:"bg-green-500"},{default:t(()=>[K]),_:1},8,["onClick"])])]),_:1},8,["show"]),e.showModal&&e.currentModel?(r(),d("div",Q,[n(w,{show:e.showModal,"corner-class":"rounded-lg","position-class":"align-middle",onClose:o[2]||(o[2]=m=>{e.currentModel=null,e.showModal=!1})},{title:t(()=>[i("Show Region #"+N(e.currentModel.id),1)]),footer:t(()=>[n(l,{class:"px-4 text-white bg-primary",onClick:o[1]||(o[1]=m=>{e.showModal=!1,e.currentModel=null})},{default:t(()=>[W]),_:1})]),default:t(()=>[n(b,{model:e.currentModel},null,8,["model"])]),_:1},8,["show"])])):u("",!0)])])):(r(),d("div",X," You are not authorized to view a list of Regions "))]),_:1})}var pe=R(B,[["render",Z]]);export{pe as default};