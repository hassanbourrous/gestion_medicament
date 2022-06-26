import{J as j}from"./JigLayout.de448839.js";import{J as y}from"./ConfirmationModal.076d1b58.js";import{J as D}from"./DialogModal.12166fb1.js";import{I as v}from"./InertiaButton.18e5489b.js";import{D as C,J as k,a as x}from"./DtComponent.7eb991fb.js";import{D as $}from"./DisplayMixin.328c366f.js";import I from"./ShowForm.359763ae.js";import{p as J,e as i,o as r,f as h,w as o,g as s,k as a,j as f,i as d,C as u,n,t as N}from"./vendor.faa38336.js";import{_ as E}from"./plugin-vue_export-helper.5a098b48.js";import"./ApplicationLogo.d162e8a5.js";import"./main.879f37ea.js";import"./JigDd.3af5bc62.js";const B=J({name:"Index",components:{DtComponent:C,JigToggle:k,InertiaButton:v,JetConfirmationModal:y,JetDialogModal:D,JigModal:x,JigLayout:j,ShowEstablishmentsForm:I},props:{can:Object,columns:Array},inject:["$refreshDt","$dayjs"],data(){return{tableId:"establishments-dt",tableParams:{},datatable:null,confirmDelete:!1,currentModel:null,withDisabled:!1,showModal:!1}},mixins:[$],mounted(){},computed:{ajaxUrl(){return new URL(this.route("api.establishments.dt")).href}},methods:{showModel(e){axios.get(route("api.establishments.show",e)).then(t=>{this.currentModel=t.data.payload,this.showModal=!0})},editModel(e){this.$inertia.visit(this.route("admin.establishments.edit",e.id))},confirmDeletion(e){this.currentModel=e,this.confirmDelete=!0},cancelDelete(){this.currentModel=!1,this.confirmDelete=!1},async deleteModel(){const e=this;this.confirmDelete=!1,this.currentModel&&this.$inertia.delete(route("admin.establishments.destroy",e.currentModel),{onFinish:t=>{this.displayNotification("success","Item deleted."),e.$refreshDt(e.tableId)},onError:t=>{console.log(t),this.displayNotification("error","There was an error while deleting the item.")}})},async toggleActivation(e,t){console.log(e),axios.put(route("api.establishments.update",t.id),{enabled:e}).then(m=>{this.displayNotification("success",m.data.message),this.$refreshDt(this.tableId)})}}}),S={class:"flex flex-wrap items-center justify-between w-full px-4"},A=s("i",{class:"fas fa-arrow-left"},null,-1),L=n(" Retour"),V={class:"flex gap-x-2"},F=s("i",{class:"fas fa-plus"},null,-1),R=n(" Nouveau \xC9tablissement"),T=s("i",{class:"fas fa-redo"},null,-1),U=n(" Refresh"),z={key:0,class:"flex flex-wrap px-4"},P={class:"z-10 flex-auto bg-white md:rounded-md md:shadow-md"},Y=s("h3",{class:"w-full p-4 mb-2 text-lg font-black sm:rounded-t-lg bg-primary-100"},[s("i",{class:"mr-2 fas fa-bars"}),n(" List des \xC9tablissements")],-1),O={class:"p-4"},q=s("div",null,"Are you sure you want to delete this record?",-1),G={class:"flex justify-end gap-x-2"},H=n("Cancel"),K=n("Yes, Delete"),Q={key:0},W=n("Close"),X={key:1,class:"p-4 font-bold text-red-500 bg-red-100 rounded-md shadow-md"};function Z(e,t,m,ee,te,oe){const p=i("inertia-link"),l=i("inertia-button"),b=i("dt-component"),_=i("jet-confirmation-modal"),g=i("show-establishments-form"),w=i("jig-modal"),M=i("jig-layout");return r(),h(M,null,{header:o(()=>[s("div",S,[a(p,{href:e.route("admin.dashboard"),class:"text-xl font-black text-white"},{default:o(()=>[A,L]),_:1},8,["href"]),s("div",V,[e.can.create?(r(),h(l,{key:0,href:e.route("admin.establishments.create"),classes:"bg-green-100 hover:bg-green-200 text-primary"},{default:o(()=>[F,R]),_:1},8,["href"])):f("",!0),a(l,{onClick:t[0]||(t[0]=c=>e.$refreshDt(e.tableId)),classes:"bg-indigo-100 hover:bg-green-200 text-indigo"},{default:o(()=>[T,U]),_:1})])])]),default:o(()=>[e.can.viewAny?(r(),d("div",z,[s("div",P,[Y,s("div",O,[a(b,{"table-id":e.tableId,"ajax-url":e.ajaxUrl,columns:e.columns,"ajax-params":e.tableParams,onShowModel:e.showModel,onEditModel:e.editModel,onDeleteModel:e.confirmDeletion},null,8,["table-id","ajax-url","columns","ajax-params","onShowModel","onEditModel","onDeleteModel"])]),a(_,{title:"Confirm Deletion",show:e.confirmDelete},{content:o(()=>[q]),footer:o(()=>[s("div",G,[a(l,{as:"button",type:"button",onClick:u(e.cancelDelete,["stop"]),class:"bg-red-500"},{default:o(()=>[H]),_:1},8,["onClick"]),a(l,{as:"button",type:"button",onClick:u(e.deleteModel,["prevent"]),class:"bg-green-500"},{default:o(()=>[K]),_:1},8,["onClick"])])]),_:1},8,["show"]),e.showModal&&e.currentModel?(r(),d("div",Q,[a(w,{show:e.showModal,"corner-class":"rounded-lg","position-class":"align-middle",onClose:t[2]||(t[2]=c=>{e.currentModel=null,e.showModal=!1})},{title:o(()=>[n("Show Establishment #"+N(e.currentModel.id),1)]),footer:o(()=>[a(l,{class:"px-4 text-white bg-primary",onClick:t[1]||(t[1]=c=>{e.showModal=!1,e.currentModel=null})},{default:o(()=>[W]),_:1})]),default:o(()=>[a(g,{model:e.currentModel},null,8,["model"])]),_:1},8,["show"])])):f("",!0)])])):(r(),d("div",X," You are not authorized to view a list of Establishments "))]),_:1})}var pe=E(B,[["render",Z]]);export{pe as default};
