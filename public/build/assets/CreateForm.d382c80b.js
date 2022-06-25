import{J as j}from"./JigDatepicker.6ad0a203.js";import{J as k}from"./Input.b4df4bca.js";import{J as V}from"./JigTextarea.fc585187.js";import{J as S}from"./Label.f2ea9d50.js";import{I as J}from"./InertiaButton.da879e12.js";import{J as C}from"./InputError.ef5e9aea.js";import{K as I,e as i,o as d,i as f,g as t,k as r,q as m,z as _,a6 as x,F as B,l as F,t as U,B as g,Y as N,w as h,C as v,f as D,j as E,n as b}from"./vendor.7f465e53.js";import{J as M}from"./SecondaryButton.bbf9bfb6.js";import{I as R}from"./InfiniteSelect.549fb5b3.js";import{_ as z}from"./plugin-vue_export-helper.5a098b48.js";import"./vue-flatpickr.min.4171e8ec.js";import"./main.d4931533.js";const A={name:"CreateUsersForm",props:{roles:Array},components:{InertiaButton:J,JetInputError:C,JetLabel:S,JigDatepicker:j,JetInput:k,JigTextarea:V,JetSecondaryButton:M,InfiniteSelect:R},data(){return{form:I({name:null,last_name:null,email:null,phone:null,password:null,password_confirmation:null,profile_photo_path:null,two_factor_secret:null,two_factor_recovery_codes:null,email_verified_at:null,current_team_id:null,photo:null,role:null},{remember:!1}),photoPreview:null}},mounted(){},computed:{flash(){return this.$page.props.flash||{}}},methods:{async storeModel(){this.$refs.photo&&(this.form.photo=this.$refs.photo.files[0]),this.form.post(this.route("admin.users.store"),{onSuccess:l=>{this.flash.success?this.$emit("success",this.flash.success):this.flash.error?this.$emit("error",this.flash.error):this.$emit("error","Unknown server error.")},onError:l=>{this.$emit("error","A server error occurred")}},{remember:!1,preserveState:!0})},selectNewPhoto(){this.$refs.photo.click()},updatePhotoPreview(){const l=this.$refs.photo.files[0];if(!l)return;const o=new FileReader;o.onload=p=>{this.photoPreview=p.target.result},o.readAsDataURL(l)},deletePhoto(){this.$inertia.delete(route("current-user-photo.destroy"),{preserveScroll:!0,onSuccess:()=>{this.photoPreview=null,this.clearPhotoFileInput()}})},clearPhotoFileInput(){var l;((l=this.$refs.photo)==null?void 0:l.value)&&(this.$refs.photo.value=null)}}},L={class:"sm:col-span-4"},T={class:"sm:col-span-4"},q={class:"sm:col-span-4"},K={class:"sm:col-span-4"},Y={class:"sm:col-span-4"},G=["value"],H={class:"sm:col-span-4"},O={class:"mt-2"},Q=["src","alt"],W={class:"mt-2"},X=b(" Select A New Photo "),Z=b(" Remove Photo "),$={class:"mt-2 text-right"},ee=b("Submit");function oe(l,o,p,se,e,n){const a=i("jet-label"),u=i("jet-input"),c=i("jet-input-error"),w=i("jet-secondary-button"),y=i("inertia-button");return d(),f("form",{class:"w-full",onSubmit:o[6]||(o[6]=v((...s)=>n.storeModel&&n.storeModel(...s),["prevent"]))},[t("div",L,[r(a,{for:"name",value:"Name"}),r(u,{class:m(["w-full",{"border-red-500 sm:focus:border-red-300 sm:focus:ring-red-100":e.form.errors.name}]),type:"text",id:"name",name:"name",modelValue:e.form.name,"onUpdate:modelValue":o[0]||(o[0]=s=>e.form.name=s)},null,8,["modelValue","class"]),r(c,{message:e.form.errors.name,class:"mt-2"},null,8,["message"])]),t("div",T,[r(a,{for:"email",value:"Email"}),r(u,{class:m(["w-full",{"border-red-500 sm:focus:border-red-300 sm:focus:ring-red-100":e.form.errors.email}]),type:"text",id:"email",name:"email",modelValue:e.form.email,"onUpdate:modelValue":o[1]||(o[1]=s=>e.form.email=s)},null,8,["modelValue","class"]),r(c,{message:e.form.errors.email,class:"mt-2"},null,8,["message"])]),t("div",q,[r(a,{for:"password",value:"Password"}),r(u,{type:"password",id:"password",name:"password",modelValue:e.form.password,"onUpdate:modelValue":o[2]||(o[2]=s=>e.form.password=s),class:m({"border-red-500 sm:focus:border-red-300 sm:focus:ring-red-100":e.form.errors.password})},null,8,["modelValue","class"]),r(c,{message:e.form.errors.password,class:"mt-2"},null,8,["message"])]),t("div",K,[r(a,{for:"password_confirmation",value:"Repeat Password"}),r(u,{type:"password",id:"password_confirmation",name:"password_confirmation",modelValue:e.form.password_confirmation,"onUpdate:modelValue":o[3]||(o[3]=s=>e.form.password_confirmation=s),class:m({"border-red-500 sm:focus:border-red-300 sm:focus:ring-red-100":e.form.errors.password_confirmation})},null,8,["modelValue","class"])]),t("div",Y,[r(a,{for:"roles",value:"Role"}),_(t("select",{class:m(["w-full cost_select",{"border-red-500 sm:focus:border-red-300 sm:focus:ring-red-100":e.form.errors.role}]),"onUpdate:modelValue":o[4]||(o[4]=s=>e.form.role=s),id:"type",name:"type"},[(d(!0),f(B,null,F(p.roles,(s,P)=>(d(),f("option",{key:P,value:s.id},U(s.name),9,G))),128))],2),[[x,e.form.role]])]),t("div",H,[t("input",{type:"file",class:"hidden",ref:"photo",onChange:o[5]||(o[5]=(...s)=>n.updatePhotoPreview&&n.updatePhotoPreview(...s))},null,544),r(a,{for:"photo",value:"Photo"}),_(t("div",O,[t("img",{src:e.form.profile_photo_path,alt:e.form.name,class:"rounded-full h-20 w-20 object-cover"},null,8,Q)],512),[[g,!e.photoPreview]]),_(t("div",W,[t("span",{class:"block rounded-full w-20 h-20",style:N("background-size: cover; background-repeat: no-repeat; background-position: center center; background-image: url('"+e.photoPreview+"');")},null,4)],512),[[g,e.photoPreview]]),r(w,{class:"mt-2 mr-2",type:"button",onClick:v(n.selectNewPhoto,["prevent"])},{default:h(()=>[X]),_:1},8,["onClick"]),e.form.profile_photo_path?(d(),D(w,{key:0,type:"button",class:"mt-2",onClick:v(n.deletePhoto,["prevent"])},{default:h(()=>[Z]),_:1},8,["onClick"])):E("",!0),r(c,{message:e.form.errors.photo,class:"mt-2"},null,8,["message"])]),t("div",$,[r(y,{type:"submit",class:"font-semibold bg-success disabled:opacity-25",disabled:e.form.processing},{default:h(()=>[ee]),_:1},8,["disabled"])])],32)}var _e=z(A,[["render",oe],["__scopeId","data-v-6d58e5ba"]]);export{_e as default};
