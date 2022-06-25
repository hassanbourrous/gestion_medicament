import{A as h}from"./ApplicationLogo.88559075.js";import{e as u,o as n,i as r,g as e,k as a,q as w,w as l,f as d,j as m,n as o,t as _,z as x,B as g}from"./vendor.7f465e53.js";import{_ as b}from"./plugin-vue_export-helper.5a098b48.js";const v={name:"LandingPage",components:{ApplicationLogo:h},props:{canLogin:Boolean,canRegister:Boolean},data(){return{showMenu:!1}}},y={class:"w-full px-6 pb-12 antialiased bg-white"},k={class:"mx-auto max-w-7xl"},j={class:"relative z-50 h-24 select-none"},M={class:"container relative flex flex-wrap items-center justify-between h-24 mx-auto overflow-hidden font-medium border-b border-gray-200 md:overflow-visible lg:justify-center sm:px-4 md:px-2"},B={class:"flex items-center justify-start w-1/4 h-full pr-4"},C={href:"#_",class:"inline-block py-4 md:py-0"},L={class:"flex-col w-full h-auto overflow-hidden bg-white rounded-lg md:bg-transparent md:overflow-visible md:rounded-none md:relative md:flex md:flex-row"},S=e("a",{href:"#_",class:"inline-flex items-center block w-auto h-16 px-6 text-xl font-black leading-none text-gray-900 md:hidden"},[o("tails"),e("span",{class:"text-indigo-600"},".")],-1),A={class:"flex flex-col items-start justify-center w-full space-x-6 text-center lg:space-x-8 md:w-2/3 md:mt-0 md:flex-row md:items-center"},N=o("Home"),V=e("a",{href:"#features",class:"inline-block w-full py-2 mx-0 font-medium text-left text-gray-700 md:w-auto md:px-0 md:mx-2 hover:text-indigo-600 lg:mx-3 md:text-center"},"Features",-1),z=e("a",{href:"#docs",class:"inline-block w-full py-2 mx-0 font-medium text-left text-gray-700 md:w-auto md:px-0 md:mx-2 hover:text-indigo-600 lg:mx-3 md:text-center"},"Blog",-1),D={class:"flex flex-col items-start justify-end w-full pt-4 md:items-center md:w-1/3 md:flex-row md:py-0"},G=o("Sign In"),I=o("Sign Up"),P=e("i",{class:"fas fa-user-circle text-primary-400 mr-2"},null,-1),R={class:"w-6 h-6 text-gray-700",fill:"none","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",viewBox:"0 0 24 24",stroke:"currentColor"},$=e("path",{d:"M4 6h16M4 12h16M4 18h16"},null,-1),q=[$],E={class:"w-6 h-6 text-gray-700",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},F=e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"},null,-1),H=[F],J={class:"container max-w-lg px-4 py-32 mx-auto text-left md:max-w-none md:text-center"},T=e("h1",{class:"text-5xl font-extrabold leading-10 tracking-tight text-left text-gray-900 md:text-center sm:leading-none md:text-6xl lg:text-7xl"},[e("span",{class:"inline md:block"},"Savannabits"),o(),e("span",{class:"relative mt-2 text-transparent bg-clip-text bg-gradient-to-br from-secondary to-primary-400 md:inline-block"},"J-I-Generator")],-1),U=e("div",{class:"mx-auto mt-5 text-gray-500 md:mt-12 md:max-w-lg md:text-center lg:text-lg"},"Simplifying the creation of your app's admin dashboard in no time!",-1),K={class:"flex flex-col items-center mt-12 text-center"},O={class:"relative inline-flex w-full md:w-auto"},Q=o(" Go to App ");function W(t,c,f,X,s,Y){const p=u("application-logo"),i=u("inertia-link");return n(),r("section",y,[e("div",k,[e("nav",j,[e("div",M,[e("div",B,[e("a",C,[a(p)])]),e("div",{class:w(["top-0 left-0 items-start w-full h-full p-4 text-sm bg-gray-900 bg-opacity-50 md:items-center md:w-3/4 md:absolute lg:text-base md:bg-transparent md:p-0 md:relative md:flex",{"flex fixed":s.showMenu,hidden:!s.showMenu}])},[e("div",L,[S,e("div",A,[a(i,{href:t.$page.props.app.url,class:"inline-block w-full py-2 mx-0 ml-6 font-medium text-left text-indigo-600 md:ml-0 md:w-auto md:px-0 md:mx-2 lg:mx-3 md:text-center"},{default:l(()=>[N]),_:1},8,["href"]),V,z]),e("div",D,[!t.$page.props.user&&f.canLogin?(n(),d(i,{key:0,href:t.route("login"),class:"w-full px-6 py-2 mr-0 text-gray-700 md:px-0 lg:pl-2 md:mr-4 lg:mr-5 md:w-auto"},{default:l(()=>[G]),_:1},8,["href"])):m("",!0),!t.$page.props.user&&f.canRegister?(n(),d(i,{key:1,href:t.route("register"),class:"inline-flex items-center w-full px-6 py-3 text-sm font-medium leading-4 text-white bg-indigo-600 md:px-3 md:w-auto md:rounded-full lg:px-5 hover:bg-indigo-500 focus:outline-none md:focus:ring-2 focus:ring-0 focus:ring-offset-2 focus:ring-indigo-600"},{default:l(()=>[I]),_:1},8,["href"])):m("",!0),t.$page.props.user?(n(),d(i,{key:2,href:t.route("profile.show"),class:"inline-flex items-center w-full px-6 py-3 text-sm font-medium leading-4 text-white bg-indigo-600 md:px-3 md:w-auto md:rounded-full lg:px-5 hover:bg-indigo-500 focus:outline-none md:focus:ring-2 focus:ring-0 focus:ring-offset-2 focus:ring-indigo-600"},{default:l(()=>[P,o(" "+_(t.$page.props.user.email),1)]),_:1},8,["href"])):m("",!0)])])],2),e("div",{onClick:c[0]||(c[0]=Z=>s.showMenu=!s.showMenu),class:"absolute right-0 flex flex-col items-center items-end justify-center w-10 h-10 bg-white rounded-full cursor-pointer md:hidden hover:bg-gray-100"},[x((n(),r("svg",R,q,512)),[[g,!s.showMenu]]),x((n(),r("svg",E,H,512)),[[g,s.showMenu]])])])]),e("div",J,[T,U,e("div",K,[e("span",O,[a(i,{href:t.route("dashboard"),type:"button",class:"inline-flex items-center justify-center w-full px-8 py-4 text-base font-bold leading-6 text-white bg-primary border border-transparent rounded-full md:w-auto hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"},{default:l(()=>[Q]),_:1},8,["href"])])])])])])}var se=b(v,[["render",W]]);export{se as default};