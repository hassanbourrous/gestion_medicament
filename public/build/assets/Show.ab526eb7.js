import{J as c}from"./JigLayout.de448839.js";import{I as f}from"./InertiaButton.18e5489b.js";import p from"./ShowForm.763656e1.js";import{_ as u}from"./plugin-vue_export-helper.5a098b48.js";import{e as o,o as t,f as _,w as s,g as a,k as r,n as h,t as x,i}from"./vendor.faa38336.js";import"./DialogModal.12166fb1.js";import"./DisplayMixin.328c366f.js";import"./ApplicationLogo.d162e8a5.js";import"./JigDd.3af5bc62.js";const w={name:"ShowUsers",components:{InertiaButton:f,JigLayout:c,ShowUsersForm:p},props:{model:Object},data(){return{}},mounted(){},methods:{}},g={class:"flex flex-wrap items-center justify-between w-full px-4"},j=a("i",{class:"fas fa-arrow-left"},null,-1),v={key:0,class:"flex flex-wrap px-4"},b={class:"z-10 flex-auto max-w-5xl p-4 mx-auto bg-white md:rounded-md md:shadow-md"},k={key:1,class:"text-center space-4 px-4 bg-white rounded-md shadow-md text-red-500 font-bold text-lg"};function y(n,B,e,D,S,J){const d=o("inertia-link"),l=o("show-users-form"),m=o("jig-layout");return t(),_(m,null,{header:s(()=>[a("div",g,[r(d,{href:n.route("admin.users.index"),class:"text-2xl font-black text-white"},{default:s(()=>[j,h(" Back | Details of User #"+x(e.model.id),1)]),_:1},8,["href"])])]),default:s(()=>[e.model.can.view?(t(),i("div",v,[a("div",b,[r(l,{model:e.model},null,8,["model"])])])):(t(),i("div",k," You don't have permission to view this resource. "))]),_:1})}var A=u(w,[["render",y]]);export{A as default};