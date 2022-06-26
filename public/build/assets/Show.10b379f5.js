import{A as j}from"./AppLayout.a97da264.js";import g from"./DeleteUserForm.c1a6014d.js";import{J as h}from"./SectionBorder.ed225cea.js";import w from"./LogoutOtherBrowserSessionsForm.6f45c532.js";import F from"./TwoFactorAuthenticationForm.8e78d4dc.js";import b from"./UpdatePasswordForm.f3e3556a.js";import y from"./UpdateProfileInformationForm.f3acfb03.js";import{_ as B}from"./plugin-vue_export-helper.5a098b48.js";import{e as t,o as s,f as A,w as m,g as i,i as a,k as o,j as n,F as v}from"./vendor.faa38336.js";import"./JigLayout.de448839.js";import"./InertiaButton.18e5489b.js";import"./DialogModal.12166fb1.js";import"./DisplayMixin.328c366f.js";import"./ApplicationLogo.d162e8a5.js";import"./ActionSection.7584d3d7.js";import"./SectionTitle.d8a2827d.js";import"./DangerButton.d3ca8c87.js";import"./Input.ff5f863b.js";import"./InputError.830002e3.js";import"./SecondaryButton.d07816ca.js";import"./ActionMessage.e35aad2c.js";import"./Button.4c5f648b.js";import"./FormSection.45291ea1.js";import"./Label.b121d9c9.js";const x={props:["sessions"],components:{AppLayout:j,DeleteUserForm:g,JetSectionBorder:h,LogoutOtherBrowserSessionsForm:w,TwoFactorAuthenticationForm:F,UpdatePasswordForm:b,UpdateProfileInformationForm:y}},S=i("h2",{class:"font-semibold text-xl text-gray-100 leading-tight"}," Profile ",-1),k={class:"max-w-7xl mx-auto bg-gray-300 rounded py-10 sm:px-6 lg:px-8"},P={key:0},U={key:1},$={key:2};function L(e,D,p,I,M,T){const c=t("update-profile-information-form"),r=t("jet-section-border"),d=t("update-password-form"),f=t("two-factor-authentication-form"),l=t("logout-other-browser-sessions-form"),u=t("delete-user-form"),_=t("app-layout");return s(),A(_,{title:"Profile"},{header:m(()=>[S]),default:m(()=>[i("div",null,[i("div",k,[e.$page.props.jetstream.canUpdateProfileInformation?(s(),a("div",P,[o(c,{user:e.$page.props.user},null,8,["user"]),o(r)])):n("",!0),e.$page.props.jetstream.canUpdatePassword?(s(),a("div",U,[o(d,{class:"mt-10 sm:mt-0"}),o(r)])):n("",!0),e.$page.props.jetstream.canManageTwoFactorAuthentication?(s(),a("div",$,[o(f,{class:"mt-10 sm:mt-0"}),o(r)])):n("",!0),o(l,{sessions:p.sessions,class:"mt-10 sm:mt-0"},null,8,["sessions"]),e.$page.props.jetstream.hasAccountDeletionFeatures?(s(),a(v,{key:3},[o(r),o(u,{class:"mt-10 sm:mt-0"})],64)):n("",!0)])])]),_:1})}var io=B(x,[["render",L]]);export{io as default};