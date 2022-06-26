import{J as V}from"./Input.ff5f863b.js";import{I as k}from"./InfiniteSelect.ea8cf2aa.js";import{J as j}from"./Label.b121d9c9.js";import{I as q}from"./InertiaButton.18e5489b.js";import{J as C}from"./InputError.830002e3.js";import{p as S,e as u,o as a,i as l,k as o,q as t,w as p,n as c,t as v,g as b,z as w,a6 as U,j as d,f as y,C as M,s as $}from"./vendor.faa38336.js";import{J as I}from"./JigDatepicker.2761e8a6.js";import{_ as J}from"./plugin-vue_export-helper.5a098b48.js";import"./vue-flatpickr.min.fb0f0e25.js";import"./main.5bc2c5ec.js";const D=S({name:"ManageStockForm",components:{InertiaButton:q,JetInputError:C,JetLabel:j,JetInput:V,InfiniteSelect:k,JigDatepicker:I},props:{form:Object,user_establishment:Array,has_administrator:Boolean},data(){return{validated:!1,classObject:{changed_h:"h-72"}}},mounted(){this.form.estum=this.user_establishment[0]},computed:{flash(){return this.$page.props.flash||{}}},methods:{async storeModel(){this.form.post(this.route("admin.stocks.store"),{onSuccess:e=>{this.flash.success?this.$emit("success",this.flash.success):this.flash.error?this.$emit("error",this.flash.error):this.$emit("error","Unknown server error.")},onError:e=>{this.$emit("error","A server error occurred")}},{remember:!1,preserveState:!0})},onTypeChange(e){e.target.value!=""&&(this.classObject.changed_h="h-96",e.target.value=="consommation"?this.form.code_label="N\xB0 Ordonnance":e.target.value=="achats"?this.form.code_label="Bon d'achat":e.target.value=="detruit"?this.form.code_label="N\xB0 PV":this.form.code_label="N\xB0 Bulletin")},selectedEtabChnaged(){this.form.etab=null,this.form.detaine=null,this.form.medicament=null,this.form.stock=null},selectedMedicamentChnaged(){this.form.stock=null,this.form.quantite=0},selectedStockChnaged(){this.form.quantite=0}}}),P={key:0,class:"mt-2 sm:col-span-4"},B={key:1,class:"mt-3 sm:col-span-4"},N={class:"mt-3 sm:col-span-4"},E=$('<option value="" data-v-d55b64c4>Select Action type ...</option><option value="dr_provenance" data-v-d55b64c4>Provenance de la DR </option><option value="etab_provenance" data-v-d55b64c4>Provenance d&#39;un \xE9tablissement</option><option value="achats" data-v-d55b64c4>Achats</option><option value="etab_transfere" data-v-d55b64c4>Envoy\xE9 \xE0 un \xE9tablissment</option><option value="consommation" data-v-d55b64c4>Consommation</option><option value="detruit" data-v-d55b64c4>D\xE9truit</option>',7),A=[E],O={key:2,class:"mt-3 sm:col-span-4"},T={key:3,class:"mt-3 sm:col-span-4"},Y={key:4,class:"mt-3 sm:col-span-4"},F={key:5,class:"mt-3 sm:col-span-4"},z={key:6,class:"mt-3 sm:col-span-4"},L={key:7,class:"sm:col-span-4"},R={key:8,class:"mt-3 sm:col-span-4"},Q={key:9,class:"mt-3 sm:col-span-4"},G={key:10,class:"mt-3 sm:col-span-4"},H={key:11,class:"mt-3 sm:col-span-4"},K={class:"mt-2 text-right"},W=c("Submit");function X(e,r,Z,_,x,ee){const m=u("jet-label"),i=u("infinite-select"),n=u("jet-input-error"),f=u("jet-input"),g=u("jig-datepicker"),h=u("inertia-button");return a(),l("form",{class:t(["w-99 min-w-full",e.classObject]),onSubmit:r[18]||(r[18]=M((...s)=>e.storeModel&&e.storeModel(...s),["prevent"]))},[e.has_administrator||e.user_establishment.length>1?(a(),l("div",P,[o(m,{for:"estum",value:"\xC9tablissement"}),o(i,{"per-page":15,"api-url":e.route("api.establishments.index"),"onUpdate:modelValue":[r[0]||(r[0]=s=>e.selectedEtabChnaged()),r[1]||(r[1]=s=>e.form.estum=s)],id:"estum",name:"estum",modelValue:e.form.estum,label:"name",class:t({"border-red-500 sm:focus:border-red-300 sm:focus:ring-red-100":e.form.errors.estum})},null,8,["api-url","modelValue","class"]),o(n,{message:e.form.errors.estum,class:"mt-2"},null,8,["message"])])):(a(),l("div",B,[o(m,{for:"estum",value:"\xC9tablissement"}),o(m,{for:"estum",class:"font-bold ml-4"},{default:p(()=>[c(v(e.form.estum?e.form.estum.name:"!"),1)]),_:1}),o(f,{class:t(["w-full",{"border-red-500 sm:focus:border-red-300 sm:focus:ring-red-100":e.form.errors.estum}]),type:"hidden",id:"estum",name:"estum",modelValue:e.form.estum,"onUpdate:modelValue":r[2]||(r[2]=s=>e.form.estum=s)},null,8,["modelValue","class"]),o(n,{message:e.form.errors.estum,class:"mt-2"},null,8,["message"])])),b("div",N,[o(m,{for:"type",value:"Type d'Action"}),w(b("select",{class:t(["w-full cost_select",{"border-red-500 sm:focus:border-red-300 sm:focus:ring-red-100":e.form.errors.type}]),"onUpdate:modelValue":r[3]||(r[3]=s=>e.form.type=s),id:"type",name:"type",onChange:r[4]||(r[4]=s=>e.onTypeChange(s))},A,34),[[U,e.form.type]]),o(n,{message:e.form.errors.type,class:"mt-2"},null,8,["message"])]),e.form.type=="dr_provenance"?(a(),l("div",O,[o(m,{for:"region",value:"Region"}),o(i,{"per-page":15,"api-url":e.route("api.regions.index"),id:"region",name:"region",modelValue:e.form.region,"onUpdate:modelValue":r[5]||(r[5]=s=>e.form.region=s),label:"name",class:t({"border-red-500 sm:focus:border-red-300 sm:focus:ring-red-100":e.form.errors.region})},null,8,["api-url","modelValue","class"]),o(n,{message:e.form.errors.region,class:"mt-2"},null,8,["message"])])):d("",!0),e.form.type=="etab_provenance"||e.form.type=="etab_transfere"?(a(),l("div",T,[o(m,{for:"etab",value:"\xC9tablissement"}),o(i,{"per-page":15,"api-url":e.route("api.establishments.index"),queryParams:{all:!0,deferent_then:e.form.estum?e.form.estum.id:null},id:"etab",name:"etab",reaictivo:!0,modelValue:e.form.etab,"onUpdate:modelValue":r[6]||(r[6]=s=>e.form.etab=s),label:"name",class:t({"border-red-500 sm:focus:border-red-300 sm:focus:ring-red-100":e.form.errors.etab})},null,8,["api-url","queryParams","modelValue","class"]),o(n,{message:e.form.errors.etab,class:"mt-2"},null,8,["message"])])):d("",!0),e.form.type=="consommation"?(a(),l("div",Y,[o(m,{for:"detaine",value:"Detenu"}),o(i,{"per-page":15,"api-url":e.route("api.detainees.index"),queryParams:{selected_etab:e.form.estum?e.form.estum.id:null},id:"detaine",name:"detaine",reaictivo:!0,modelValue:e.form.detaine,"onUpdate:modelValue":r[7]||(r[7]=s=>e.form.detaine=s),label:"title",class:t({"border-red-500 sm:focus:border-red-300 sm:focus:ring-red-100":e.form.errors.detaine})},null,8,["api-url","queryParams","modelValue","class"]),o(n,{message:e.form.errors.detaine,class:"mt-2"},null,8,["message"])])):d("",!0),e.form.type!=""?(a(),l("div",F,[o(m,{for:"ordonnance"},{default:p(()=>[c(v(e.form.code_label),1)]),_:1}),o(f,{class:t(["w-full",{"border-red-500 sm:focus:border-red-300 sm:focus:ring-red-100":e.form.errors.ordonnance}]),type:"text",id:"ordonnance",name:"ordonnance",modelValue:e.form.ordonnance,"onUpdate:modelValue":r[8]||(r[8]=s=>e.form.ordonnance=s)},null,8,["modelValue","class"]),o(n,{message:e.form.errors.ordonnance,class:"mt-2"},null,8,["message"])])):d("",!0),e.form.type!=""?(a(),l("div",z,[o(m,{for:"medicament",value:"Medicament"}),o(i,{"per-page":15,"api-url":e.route("api.medicaments.index"),"onUpdate:modelValue":[r[9]||(r[9]=s=>e.selectedMedicamentChnaged()),r[10]||(r[10]=s=>e.form.medicament=s)],id:"medicament",name:"medicament",modelValue:e.form.medicament,label:"title",class:t({"border-red-500 sm:focus:border-red-300 sm:focus:ring-red-100":e.form.errors.medicament})},null,8,["api-url","modelValue","class"]),o(n,{message:e.form.errors.medicament,class:"mt-2"},null,8,["message"])])):d("",!0),(e.form.type=="consommation"||e.form.type=="etab_transfere"||e.form.type=="detruit")&&e.form.medicament?(a(),l("div",L,[o(m,{for:"stock",value:"Stock"}),o(i,{"per-page":15,"api-url":e.route("api.stocks.index"),id:"stock",name:"stock",reaictivo:!0,"onUpdate:modelValue":[r[11]||(r[11]=s=>e.selectedStockChnaged()),r[12]||(r[12]=s=>e.form.stock=s)],queryParams:{selected_etab:e.form.estum?e.form.estum.id:null,medicaments_id:e.form.medicament?e.form.medicament.id:null},modelValue:e.form.stock,label:"title",class:t({"border-red-500 sm:focus:border-red-300 sm:focus:ring-red-100":e.form.errors.stock})},null,8,["api-url","queryParams","modelValue","class"]),o(n,{message:e.form.errors.stock,class:"mt-2"},null,8,["message"])])):d("",!0),e.form.type=="etab_provenance"||e.form.type=="dr_provenance"||e.form.type=="achats"?(a(),l("div",R,[o(m,{for:"date_production",value:"Date de Production"}),o(g,{class:t(["w-full",{"border-red-500 sm:focus:border-red-300 sm:focus:ring-red-100":e.form.errors.date_production}]),id:"date_production",name:"date_production",modelValue:e.form.date_production,"onUpdate:modelValue":r[13]||(r[13]=s=>e.form.date_production=s),"data-date-format":"Y-m-d","data-alt-input":!0,"data-alt-format":"l M J, Y"},null,8,["modelValue","class"]),o(n,{message:e.form.errors.date_production,class:"mt-2"},null,8,["message"])])):d("",!0),e.form.type=="etab_provenance"||e.form.type=="dr_provenance"||e.form.type=="achats"?(a(),l("div",Q,[o(m,{for:"date_dexpiration",value:"Date D'expiration"}),o(g,{class:t(["w-full",{"border-red-500 sm:focus:border-red-300 sm:focus:ring-red-100":e.form.errors.date_dexpiration}]),id:"date_dexpiration",name:"date_dexpiration",modelValue:e.form.date_dexpiration,"onUpdate:modelValue":r[14]||(r[14]=s=>e.form.date_dexpiration=s),"data-date-format":"Y-m-d","data-alt-input":!0,"data-alt-format":"l M J, Y"},null,8,["modelValue","class"]),o(n,{message:e.form.errors.date_dexpiration,class:"mt-2"},null,8,["message"])])):d("",!0),e.form.type!=""?(a(),l("div",G,[o(m,{for:"quantite",value:"Quantite"}),(e.form.type=="consommation"||e.form.type=="etab_transfere"||e.form.type=="detruit")&&e.form.medicament&&e.form.stock?(a(),y(f,{key:0,class:t(["w-full",{"border-red-500 sm:focus:border-red-300 sm:focus:ring-red-100":e.form.errors.quantite}]),type:"number",min:"1",max:e.form.stock.quantite,step:"1",id:"quantite",name:"quantite",modelValue:e.form.quantite,"onUpdate:modelValue":r[15]||(r[15]=s=>e.form.quantite=s)},null,8,["max","modelValue","class"])):(a(),y(f,{key:1,class:t(["w-full",{"border-red-500 sm:focus:border-red-300 sm:focus:ring-red-100":e.form.errors.quantite}]),type:"number",min:"1",step:"1",id:"quantite",name:"quantite",modelValue:e.form.quantite,"onUpdate:modelValue":r[16]||(r[16]=s=>e.form.quantite=s)},null,8,["modelValue","class"])),o(n,{message:e.form.errors.quantite,class:"mt-2"},null,8,["message"])])):d("",!0),e.form.type!=""?(a(),l("div",H,[o(m,{for:"comment",value:"Comment"}),o(f,{class:t(["w-full",{"border-red-500 sm:focus:border-red-300 sm:focus:ring-red-100":e.form.errors.comment}]),type:"text",id:"comment",name:"comment",modelValue:e.form.comment,"onUpdate:modelValue":r[17]||(r[17]=s=>e.form.comment=s)},null,8,["modelValue","class"]),o(n,{message:e.form.errors.comment,class:"mt-2"},null,8,["message"])])):d("",!0),b("div",K,[o(h,{type:"submit",class:"font-semibold bg-success disabled:opacity-25",disabled:e.form.processing},{default:p(()=>[W]),_:1},8,["disabled"])])],34)}var ue=J(D,[["render",X],["__scopeId","data-v-d55b64c4"]]);export{ue as default};