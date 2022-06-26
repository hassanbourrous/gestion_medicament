import{J as _}from"./ActionMessage.d141fbf7.js";import{J as w}from"./Button.c45bf68e.js";import{J as j}from"./FormSection.8a2d6a93.js";import{J as b}from"./Input.7c4ec79d.js";import{J as g}from"./InputError.ec1a52bd.js";import{J as h}from"./Label.a372a458.js";import{_ as v}from"./plugin-vue_export-helper.5a098b48.js";import{e,o as J,f as V,w as t,g as d,k as o,q as S,n}from"./vendor.688b8fb8.js";import"./SectionTitle.57d96ffa.js";const P={components:{JetActionMessage:_,JetButton:w,JetFormSection:j,JetInput:b,JetInputError:g,JetLabel:h},data(){return{form:this.$inertia.form({current_password:"",password:"",password_confirmation:""})}},methods:{updatePassword(){this.form.put(route("user-password.update"),{errorBag:"updatePassword",preserveScroll:!0,onSuccess:()=>this.form.reset(),onError:()=>{this.form.errors.password&&(this.form.reset("password","password_confirmation"),this.$refs.password.focus()),this.form.errors.current_password&&(this.form.reset("current_password"),this.$refs.current_password.focus())}})}}},y=n(" Update Password "),k=n(" Ensure your account is using a long, random password to stay secure. "),x={class:"col-span-6 sm:col-span-4"},B={class:"col-span-6 sm:col-span-4"},C={class:"col-span-6 sm:col-span-4"},U=n(" Saved. "),E=n(" Save ");function I(N,r,F,A,s,l){const p=e("jet-label"),m=e("jet-input"),c=e("jet-input-error"),i=e("jet-action-message"),u=e("jet-button"),f=e("jet-form-section");return J(),V(f,{onSubmitted:l.updatePassword},{title:t(()=>[y]),description:t(()=>[k]),form:t(()=>[d("div",x,[o(p,{for:"current_password",value:"Current Password"}),o(m,{id:"current_password",type:"password",class:"mt-1 block w-full",modelValue:s.form.current_password,"onUpdate:modelValue":r[0]||(r[0]=a=>s.form.current_password=a),ref:"current_password",autocomplete:"current-password"},null,8,["modelValue"]),o(c,{message:s.form.errors.current_password,class:"mt-2"},null,8,["message"])]),d("div",B,[o(p,{for:"password",value:"New Password"}),o(m,{id:"password",type:"password",class:"mt-1 block w-full",modelValue:s.form.password,"onUpdate:modelValue":r[1]||(r[1]=a=>s.form.password=a),ref:"password",autocomplete:"new-password"},null,8,["modelValue"]),o(c,{message:s.form.errors.password,class:"mt-2"},null,8,["message"])]),d("div",C,[o(p,{for:"password_confirmation",value:"Confirm Password"}),o(m,{id:"password_confirmation",type:"password",class:"mt-1 block w-full",modelValue:s.form.password_confirmation,"onUpdate:modelValue":r[2]||(r[2]=a=>s.form.password_confirmation=a),autocomplete:"new-password"},null,8,["modelValue"]),o(c,{message:s.form.errors.password_confirmation,class:"mt-2"},null,8,["message"])])]),actions:t(()=>[o(i,{on:s.form.recentlySuccessful,class:"mr-3"},{default:t(()=>[U]),_:1},8,["on"]),o(u,{class:S({"opacity-25":s.form.processing}),disabled:s.form.processing},{default:t(()=>[E]),_:1},8,["class","disabled"])]),_:1},8,["onSubmitted"])}var O=v(P,[["render",I]]);export{O as default};