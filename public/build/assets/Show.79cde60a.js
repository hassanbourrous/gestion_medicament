import{J as c}from"./JigLayout.72cfa05e.js";import{I as f}from"./InertiaButton.da879e12.js";import p from"./ShowForm.08592454.js";import{_}from"./plugin-vue_export-helper.5a098b48.js";import{e as o,o as t,f as u,w as s,g as a,k as r,n as h,t as x,i}from"./vendor.7f465e53.js";import"./DialogModal.f6fb4b05.js";import"./DisplayMixin.328c366f.js";import"./ApplicationLogo.88559075.js";import"./JigDd.fb015ea6.js";const w={name:"ShowRoles",components:{InertiaButton:f,JigLayout:c,ShowRolesForm:p},props:{model:Object},data(){return{}},mounted(){},methods:{}},g={class:"flex flex-wrap items-center justify-between w-full px-4"},j=a("i",{class:"fas fa-arrow-left"},null,-1),v={key:0,class:"flex flex-wrap px-4"},b={class:"z-10 flex-auto max-w-5xl p-4 mx-auto bg-white md:rounded-md md:shadow-md"},k={key:1,class:"text-center space-4 px-4 bg-white rounded-md shadow-md text-red-500 font-bold text-lg"};function y(n,B,e,D,S,J){const l=o("inertia-link"),d=o("show-roles-form"),m=o("jig-layout");return t(),u(m,null,{header:s(()=>[a("div",g,[r(l,{href:n.route("admin.roles.index"),class:"text-2xl font-black text-white"},{default:s(()=>[j,h(" Back | Details of Role #"+x(e.model.id),1)]),_:1},8,["href"])])]),default:s(()=>[e.model.can.view?(t(),i("div",v,[a("div",b,[r(d,{model:e.model},null,8,["model"])])])):(t(),i("div",k," You don't have permission to view this resource. "))]),_:1})}var A=_(w,[["render",y]]);export{A as default};
