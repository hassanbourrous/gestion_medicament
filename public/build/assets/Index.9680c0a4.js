import{J as Rt}from"./JigLayout.72cfa05e.js";import{J as Ut}from"./Input.b4df4bca.js";import{J as qt}from"./ConfirmationModal.72ac5f25.js";import{J as Jt}from"./DialogModal.f6fb4b05.js";import{I as Ht}from"./InertiaButton.da879e12.js";import{D as Kt,J as Yt,a as Gt}from"./DtComponent.cdfa3848.js";import{D as Wt}from"./DisplayMixin.328c366f.js";import Xt from"./ShowForm.158ec968.js";import{D as it,E as rt,z as Oe,B as st,o as h,f as S,k as d,j as N,a3 as de,T as lt,C as ee,u as Qt,F as ut,l as Fe,a7 as Zt,a9 as en,aa as dt,a4 as ct,a2 as tn,w as v,ab as mt,v as y,R as nn,U as G,X as R,x as on,ac as an,W as ce,p as rn,K as ft,e as M,g as l,i as me,a6 as sn,n as E,t as ln}from"./vendor.7f465e53.js";import{J as un}from"./Label.f2ea9d50.js";import dn from"./ManageStockForm.12421f5b.js";import{I as cn}from"./InfiniteSelect.549fb5b3.js";import{f as mn}from"./vue-flatpickr.min.4171e8ec.js";import"./main.d4931533.js";import{_ as fn}from"./plugin-vue_export-helper.5a098b48.js";import"./ApplicationLogo.88559075.js";import"./JigDd.fb015ea6.js";import"./InputError.ef5e9aea.js";import"./JigDatepicker.6ad0a203.js";function Te(e){return(Te=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function pt(e,t,o,n,a,i,s){try{var m=e[i](s),u=m.value}catch(b){return void o(b)}m.done?t(u):Promise.resolve(u).then(n,a)}function pn(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function W(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function vt(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),o.push.apply(o,n)}return o}function w(e){for(var t=1;t<arguments.length;t++){var o=arguments[t]!=null?arguments[t]:{};t%2?vt(Object(o),!0).forEach(function(n){W(e,n,o[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):vt(Object(o)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(o,n))})}return e}function K(e){return function(t){if(Array.isArray(t))return ze(t)}(e)||function(t){if(typeof Symbol!="undefined"&&Symbol.iterator in Object(t))return Array.from(t)}(e)||function(t,o){if(!!t){if(typeof t=="string")return ze(t,o);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ze(t,o)}}(e)||function(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function ze(e,t){(t==null||t>e.length)&&(t=e.length);for(var o=0,n=new Array(t);o<t;o++)n[o]=e[o];return n}var vn=function(e){return function(t,o){return K(t.querySelectorAll(o)||[])}(e,'button:not([disabled]), select:not([disabled]), a[href]:not([disabled]), area[href]:not([disabled]), [contentEditable=""]:not([disabled]), [contentEditable="true"]:not([disabled]), [contentEditable="TRUE"]:not([disabled]), textarea:not([disabled]), iframe:not([disabled]), input:not([disabled]), summary:not([disabled]), [tabindex]:not([tabindex="-1"])')},ht=function(e){return e==document.activeElement},hn=function(){function e(){(function(n,a){if(!(n instanceof a))throw new TypeError("Cannot call a class as a function")})(this,e),this.root=null,this.elements=[],this.onKeyDown=this.onKeyDown.bind(this),this.enable=this.enable.bind(this),this.disable=this.disable.bind(this),this.firstElement=this.firstElement.bind(this),this.lastElement=this.lastElement.bind(this)}var t,o;return t=e,(o=[{key:"lastElement",value:function(){return this.elements[this.elements.length-1]||null}},{key:"firstElement",value:function(){return this.elements[0]||null}},{key:"onKeyDown",value:function(n){if(function(a){return a.key==="Tab"||a.keyCode===9}(n)){if(!n.shiftKey)return!document.activeElement||ht(this.lastElement())?(this.firstElement().focus(),void n.preventDefault()):void 0;ht(this.firstElement())&&(this.lastElement().focus(),n.preventDefault())}}},{key:"enabled",value:function(){return!!this.root}},{key:"enable",value:function(n){n&&(this.root=n,this.elements=vn(this.root),this.root.addEventListener("keydown",this.onKeyDown))}},{key:"disable",value:function(){this.root.removeEventListener("keydown",this.onKeyDown),this.root=null}}])&&pn(t.prototype,o),e}(),bt=function(e){var t=e.targetTouches?e.targetTouches[0]:e;return{x:t.clientX,y:t.clientY}},fe=function(e,t,o){return typeof e!="number"&&(e=Math.min(t,o)||t),typeof o!="number"&&(o=Math.max(t,e)),Math.min(Math.max(t,e),o)},yt=function(e){return e&&Number(e.replace(/px$/,""))||0},pe={down:{pc:"mousedown",m:"touchstart"},move:{pc:"mousemove",m:"touchmove"},up:{pc:"mouseup",m:"touchend"}},ve=function(e,t,o){t&&t.addEventListener(pe[e].pc,o),t&&t.addEventListener(pe[e].m,o,{passive:!1})},he=function(e,t,o){t&&t.removeEventListener(pe[e].pc,o),t&&t.removeEventListener(pe[e].m,o)},De=!1;if(typeof window!="undefined"){var gt={get passive(){De=!0}};window.addEventListener("testPassive",null,gt),window.removeEventListener("testPassive",null,gt)}var te,ne,wt=typeof window!="undefined"&&window.navigator&&window.navigator.platform&&(/iP(ad|hone|od)/.test(window.navigator.platform)||window.navigator.platform==="MacIntel"&&window.navigator.maxTouchPoints>1),U=[],be=!1,ye=0,_t=-1,bn=function(e,t){var o=!1;return function(n){for(var a=[];n;){if(a.push(n),n.classList.contains("vfm"))return a;n=n.parentElement}return a}(e).forEach(function(n){(function(a){if(!a||a.nodeType!==Node.ELEMENT_NODE)return!1;var i=window.getComputedStyle(a);return["auto","scroll"].includes(i.overflowY)&&a.scrollHeight>a.clientHeight})(n)&&function(a,i){return!(a.scrollTop===0&&i<0||a.scrollTop+a.clientHeight+i>=a.scrollHeight&&i>0)}(n,t)&&(o=!0)}),o},kt=function(e){return U.some(function(){return bn(e,-ye)})},Ae=function(e){var t=e||window.event;return!!kt(t.target)||t.touches.length>1||(t.preventDefault&&t.preventDefault(),!1)},yn=function(e,t){if(e){if(!U.some(function(n){return n.targetElement===e})){var o={targetElement:e,options:t||{}};U=[].concat(K(U),[o]),wt?(e.ontouchstart=function(n){n.targetTouches.length===1&&(_t=n.targetTouches[0].clientY)},e.ontouchmove=function(n){n.targetTouches.length===1&&function(a,i){ye=a.targetTouches[0].clientY-_t,!kt(a.target)&&(i&&i.scrollTop===0&&ye>0||function(s){return!!s&&s.scrollHeight-s.scrollTop<=s.clientHeight}(i)&&ye<0?Ae(a):a.stopPropagation())}(n,e)},be||(document.addEventListener("touchmove",Ae,De?{passive:!1}:void 0),be=!0)):function(n){if(ne===void 0){var a=!!n&&n.reserveScrollBarGap===!0,i=window.innerWidth-document.documentElement.clientWidth;if(a&&i>0){var s=parseInt(getComputedStyle(document.body).getPropertyValue("padding-right"),10);ne=document.body.style.paddingRight,document.body.style.paddingRight="".concat(s+i,"px")}}te===void 0&&(te=document.body.style.overflow,document.body.style.overflow="hidden")}(t)}}else console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.")},Le=function(e){e?(U=U.filter(function(t){return t.targetElement!==e}),wt?(e.ontouchstart=null,e.ontouchmove=null,be&&U.length===0&&(document.removeEventListener("touchmove",Ae,De?{passive:!1}:void 0),be=!1)):U.length||(ne!==void 0&&(document.body.style.paddingRight=ne,ne=void 0),te!==void 0&&(document.body.style.overflow=te,te=void 0))):console.error("enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.")},ge=function(){},xt="enter",St="entering",we="leave",Mt="leavng",gn={t:"ns-resize",tr:"nesw-resize",r:"ew-resize",br:"nwse-resize",b:"ns-resize",bl:"nesw-resize",l:"ew-resize",tl:"nwse-resize"},_e={props:{name:{type:String,default:null},modelValue:{type:Boolean,default:!1},ssr:{type:Boolean,default:!0},classes:{type:[String,Object,Array],default:""},overlayClass:{type:[String,Object,Array],default:""},contentClass:{type:[String,Object,Array],default:""},styles:{type:[Object,Array],default:function(){return{}}},overlayStyle:{type:[Object,Array],default:function(){return{}}},contentStyle:{type:[Object,Array],default:function(){return{}}},lockScroll:{type:Boolean,default:!0},hideOverlay:{type:Boolean,default:!1},clickToClose:{type:Boolean,default:!0},escToClose:{type:Boolean,default:!1},preventClick:{type:Boolean,default:!1},attach:{type:null,default:!1,validator:function(e){var t=Te(e);return t==="boolean"||t==="string"||e.nodeType===Node.ELEMENT_NODE}},transition:{type:[String,Object],default:"vfm"},overlayTransition:{type:[String,Object],default:"vfm"},keepOverlay:{type:Boolean,default:!1},zIndexAuto:{type:Boolean,default:!0},zIndexBase:{type:[String,Number],default:1e3},zIndex:{type:[Boolean,String,Number],default:!1},focusRetain:{type:Boolean,default:!0},focusTrap:{type:Boolean,default:!1},fitParent:{type:Boolean,default:!0},drag:{type:Boolean,default:!1},dragSelector:{type:String,default:""},keepChangedStyle:{type:Boolean,default:!1},resize:{type:Boolean,default:!1},resizeDirections:{type:Array,default:function(){return["t","tr","r","br","b","bl","l","tl"]},validator:function(e){return["t","tr","r","br","b","bl","l","tl"].filter(function(t){return e.indexOf(t)!==-1}).length===e.length}},minWidth:{type:Number,default:0},minHeight:{type:Number,default:0},maxWidth:{type:Number,default:1/0},maxHeight:{type:Number,default:1/0}},emits:["update:modelValue","click-outside","before-open","opened","before-close","closed","_before-open","_opened","_closed","drag:start","drag:move","drag:end","resize:start","resize:move","resize:end"],setup:function(e,t){var o=t.emit,n=Symbol("vfm"),a=y(null),i=y(null),s=y(null),m=y(null),u=y(null),b=y(null),k=y(null),D=new hn,x=y(!1),P=nn({modal:!1,overlay:!1,resize:!1}),q=y(null),J=y(null),X=y(!1),Y=y({}),O=y({}),c=y(null),$e=y(null),oe=ge,ae=ge,Pt=G(function(){return typeof e.overlayTransition=="string"?{name:e.overlayTransition}:w({},e.overlayTransition)}),Ct=G(function(){return typeof e.transition=="string"?{name:e.transition}:w({},e.transition)}),jt=G(function(){return(e.hideOverlay||q.value===we)&&J.value===we}),ke=G(function(){return e.zIndex===!1?!!e.zIndexAuto&&+e.zIndexBase+2*(k.value||0):e.zIndex}),Ot=G(function(){return w({},ke.value!==!1&&{zIndex:ke.value})}),Ft=G(function(){var r=[O.value];return Array.isArray(e.contentStyle)?r.push.apply(r,K(e.contentStyle)):r.push(e.contentStyle),r});function xe(){return{uid:n,props:e,emit:o,vfmContainer:i,vfmContent:s,vfmResize:m,vfmOverlayTransition:u,vfmTransition:b,getAttachElement:Re,modalStackIndex:k,visibility:P,handleLockScroll:Se,$focusTrap:D,toggle:Tt,params:Y}}function ie(){if(e.modelValue){if(o("_before-open",Q({type:"_before-open"})),Ue("before-open",!1))return void ae("show");var r=Re();if(r||e.attach===!1){if(e.attach!==!1){if(!a.value)return x.value=!0,void ce(function(){ie()});r.appendChild(a.value)}var f=e.api.openedModals.findIndex(function(p){return p.uid===n});f!==-1&&e.api.openedModals.splice(f,1),e.api.openedModals.push(xe()),k.value=e.api.openedModals.length-1,Se(),e.api.openedModals.filter(function(p){return p.uid!==n}).forEach(function(p,L){p.getAttachElement()===r&&(p.modalStackIndex.value=L,!p.props.keepOverlay&&(p.visibility.overlay=!1))}),x.value=!0,P.overlay=!0,P.modal=!0}else r!==!1&&console.warn("Unable to locate target ".concat(e.attach))}}function Ne(){var r=e.api.openedModals.findIndex(function(p){return p.uid===n});if(r!==-1&&e.api.openedModals.splice(r,1),e.api.openedModals.length>0){var f=e.api.openedModals[e.api.openedModals.length-1];f.props.focusTrap&&f.$focusTrap.firstElement().focus(),(f.props.focusRetain||f.props.focusTrap)&&f.vfmContainer.value.focus(),!f.props.hideOverlay&&(f.visibility.overlay=!0)}e.drag&&Je(),e.resize&&Ke(),c.value=null,P.overlay=!1,P.modal=!1}function Se(){e.modelValue&&ce(function(){e.lockScroll?yn(i.value,{reserveScrollBarGap:!0}):Le(i.value)})}function Re(){return e.attach!==!1&&(typeof e.attach=="string"?!!window&&window.document.querySelector(e.attach):e.attach)}function Q(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return w({ref:xe()},r)}function Ue(r,f){var p=!1,L=Q({type:r,stop:function(){p=!0}});return o(r,L),!!p&&(X.value=!0,ce(function(){o("update:modelValue",f)}),!0)}function Me(r,f,p){c.value="".concat(f,":").concat(p),o(c.value,r)}function Tt(r,f){var p=arguments;return new Promise(function(L,Z){oe=function(B){L(B),oe=ge},ae=function(B){Z(B),ae=ge};var H=typeof r=="boolean"?r:!e.modelValue;H&&p.length===2&&(Y.value=f),o("update:modelValue",H)})}function re(r){r.stopPropagation();var f,p="resize",L="drag",Z=r.target.getAttribute("direction");if(Z)f=p;else{if(!function(F,T,I){return I===""||K(T.querySelectorAll(I)).includes(F.target)}(r,s.value,e.dragSelector))return;f=L}Me(r,f,"start");var H,B,Ye,Ge,We=bt(r),A=i.value.getBoundingClientRect(),C=s.value.getBoundingClientRect(),se=window.getComputedStyle(s.value).position==="absolute",Ee=yt(O.value.top),Pe=yt(O.value.left),le=function(){if(e.fitParent){var F={absolute:function(){return{minTop:0,minLeft:0,maxTop:A.height-C.height,maxLeft:A.width-C.width}},relative:function(){return{minTop:Ee+A.top-C.top,minLeft:Pe+A.left-C.left,maxTop:Ee+A.bottom-C.bottom,maxLeft:Pe+A.right-C.right}}};return se?F.absolute():F.relative()}return{}}(),Xe=f===p&&(H=document.body,B="cursor",Ye=gn[Z],Ge=H.style[B],H.style[B]=Ye,function(){H.style[B]=Ge}),Qe=function(F){F.stopPropagation(),Me(F,f,"move");var T,I,Ze=bt(F),z={x:Ze.x-We.x,y:Ze.y-We.y};f===p&&(z=function(Dt,At,Lt,ue,Bt){var It=function(g){var j,V=At[g.axis];V=e.fitParent?fe(g.min,V,g.max):V;var $=fe(g.minEdge,g.getEdge(V),g.maxEdge);return V=g.getOffsetAxis($,Bt),W(j={},g.edgeName,$),W(j,g.axis,V),j},Vt=function(g,j,V,$){var et,tt=ue[j],nt=Lt[g]-ue[g],ot=(et=j).charAt(0).toUpperCase()+et.slice(1);return{axis:V,edgeName:j,min:$?nt:-tt,max:$?tt:nt,minEdge:e["min".concat(ot)],maxEdge:e["max".concat(ot)],getEdge:function(je){return ue[j]-je*($?1:-1)},getOffsetAxis:function(je,Nt){var at=ue[j]-je;return Nt?$?at:0:($?1:-1)*at/2}}},$t={t:["top","height","y",!0],b:["bottom","height","y",!1],l:["left","width","x",!0],r:["right","width","x",!1]},Ce={x:0,y:0};return Dt.split("").forEach(function(g){var j=Vt.apply(void 0,K($t[g]));Ce=w(w({},Ce),It(j))}),Ce}(Z,z,A,C,se)),se?(T=C.top-A.top+z.y,I=C.left-A.left+z.x):(T=Ee+z.y,I=Pe+z.x),f===L&&e.fitParent&&(T=fe(le.minTop,T,le.maxTop),I=fe(le.minLeft,I,le.maxLeft));var zt=w(w(w({position:"relative",top:T+"px",left:I+"px",margin:"unset",touchAction:"none"},se&&{position:"absolute",transform:"unset",width:C.width+"px",height:C.height+"px"}),z.width&&{width:z.width+"px"}),z.height&&{height:z.height+"px"});O.value=w(w({},O.value),zt)};ve("move",document,Qe),ve("up",document,function F(T){T.stopPropagation(),f===p&&Xe&&Xe(),setTimeout(function(){Me(T,f,"end")}),he("move",document,Qe),he("up",document,F)})}function qe(){ve("down",s.value,re),O.value.touchAction="none"}function Je(){he("down",s.value,re)}function He(){P.resize=!0,ce(function(){ve("down",m.value,re)})}function Ke(){he("down",m.value,re),P.resize=!1}return R(function(){return e.modelValue},function(r){if(X.value)X.value=!1;else if(ie(),!r){if(Ue("before-close",!0))return void ae("hide");Ne()}}),R(function(){return e.lockScroll},Se),R(function(){return e.hideOverlay},function(r){e.modelValue&&!r&&(P.overlay=!0)}),R(function(){return e.attach},ie),R(jt,function(r){r&&(x.value=!1,i.value.style.display="none")},{flush:"post"}),R(function(){return e.drag},function(r){x.value&&(r?qe():Je())}),R(function(){return e.resize},function(r){x.value&&(r?He():Ke())}),R(function(){return e.keepChangedStyle},function(r){r||(O.value={})}),e.api.modals.push(xe()),on(function(){ie()}),an(function(){var r;Ne(),e.lockScroll&&i.value&&Le(i.value),a==null||(r=a.value)===null||r===void 0||r.remove();var f=e.api.modals.findIndex(function(p){return p.uid===n});e.api.modals.splice(f,1)}),{root:a,vfmContainer:i,vfmContent:s,vfmResize:m,vfmOverlayTransition:u,vfmTransition:b,computedOverlayTransition:Pt,computedTransition:Ct,visible:x,visibility:P,params:Y,calculateZIndex:ke,bindStyle:Ot,bindContentStyle:Ft,beforeOverlayEnter:function(){q.value=St},afterOverlayEnter:function(){q.value=xt},beforeOverlayLeave:function(){q.value=Mt},afterOverlayLeave:function(){q.value=we},beforeModalEnter:function(){J.value=St},afterModalEnter:function(){J.value=xt,(e.focusRetain||e.focusTrap)&&i.value.focus(),e.focusTrap&&D.enable(i.value),e.drag&&qe(),e.resize&&He(),o("_opened"),o("opened",Q({type:"opened"})),oe("show")},beforeModalLeave:function(){J.value=Mt,D.enabled()&&D.disable()},afterModalLeave:function(){J.value=we,k.value=null,e.lockScroll&&Le(i.value),e.keepChangedStyle||(O.value={});var r=!1,f=Q({type:"closed",stop:function(){r=!0}});o("_closed"),o("closed",f),oe("hide"),r||(Y.value={})},onMousedown:function(r){$e.value=r==null?void 0:r.target},onMouseupContainer:function(){$e.value===i.value&&c.value!=="resize:move"&&(o("click-outside",Q({type:"click-outside"})),e.clickToClose&&o("update:modelValue",!1))},onEsc:function(){x.value&&e.escToClose&&o("update:modelValue",!1)}}}},Be=en();it("data-v-2836fdb5");var wn={key:0,ref:"vfmResize",class:"vfm__resize vfm--absolute vfm--inset vfm--prevent-none vfm--select-none vfm--touch-none"};rt();var _n=Be(function(e,t,o,n,a,i){return o.ssr||n.visible?Oe((h(),S("div",{key:0,ref:"root",style:n.bindStyle,class:["vfm vfm--inset",[o.attach===!1?"vfm--fixed":"vfm--absolute",{"vfm--prevent-none":o.preventClick}]],onKeydown:t[4]||(t[4]=Zt(function(){return n.onEsc&&n.onEsc.apply(n,arguments)},["esc"]))},[d(lt,de(n.computedOverlayTransition,{onBeforeEnter:n.beforeOverlayEnter,onAfterEnter:n.afterOverlayEnter,onBeforeLeave:n.beforeOverlayLeave,onAfterLeave:n.afterOverlayLeave}),{default:Be(function(){return[!o.hideOverlay&&n.visibility.overlay?(h(),S("div",{key:0,class:["vfm__overlay vfm--overlay vfm--absolute vfm--inset",o.overlayClass],style:o.overlayStyle},null,6)):N("v-if",!0)]}),_:1},16,["onBeforeEnter","onAfterEnter","onBeforeLeave","onAfterLeave"]),d(lt,de(n.computedTransition,{onBeforeEnter:n.beforeModalEnter,onAfterEnter:n.afterModalEnter,onBeforeLeave:n.beforeModalLeave,onAfterLeave:n.afterModalLeave}),{default:Be(function(){return[Oe(d("div",{ref:"vfmContainer",class:["vfm__container vfm--absolute vfm--inset vfm--outline-none",o.classes],style:o.styles,"aria-expanded":n.visibility.modal.toString(),role:"dialog","aria-modal":"true",tabindex:"-1",onMouseup:t[2]||(t[2]=ee(function(){return n.onMouseupContainer&&n.onMouseupContainer.apply(n,arguments)},["self"])),onMousedown:t[3]||(t[3]=ee(function(){return n.onMousedown&&n.onMousedown.apply(n,arguments)},["self"]))},[d("div",{ref:"vfmContent",class:["vfm__content",[o.contentClass,{"vfm--prevent-auto":o.preventClick}]],style:n.bindContentStyle,onMousedown:t[1]||(t[1]=function(s){return n.onMousedown(null)})},[Qt(e.$slots,"default",{params:n.params,close:function(){return e.$emit("update:modelValue",!1)}}),n.visibility.resize&&n.visibility.modal?(h(),S("div",wn,[(h(!0),S(ut,null,Fe(o.resizeDirections,function(s){return h(),S("div",{key:s,direction:s,class:["vfm--resize-".concat(s),"vfm--absolute vfm--prevent-auto"]},null,10,["direction"])}),128))],512)):N("v-if",!0)],38)],46,["aria-expanded"]),[[st,n.visibility.modal]])]}),_:3},16,["onBeforeEnter","onAfterEnter","onBeforeLeave","onAfterLeave"])],38)),[[st,!o.ssr||n.visible]]):N("v-if",!0)});(function(e,t){t===void 0&&(t={});var o=t.insertAt;if(e&&typeof document!="undefined"){var n=document.head||document.getElementsByTagName("head")[0],a=document.createElement("style");a.type="text/css",o==="top"&&n.firstChild?n.insertBefore(a,n.firstChild):n.appendChild(a),a.styleSheet?a.styleSheet.cssText=e:a.appendChild(document.createTextNode(e))}})(`
.vfm--fixed[data-v-2836fdb5] {
  position: fixed;
}
.vfm--absolute[data-v-2836fdb5] {
  position: absolute;
}
.vfm--inset[data-v-2836fdb5] {
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
.vfm--overlay[data-v-2836fdb5] {
  background-color: rgba(0, 0, 0, 0.5);
}
.vfm--prevent-none[data-v-2836fdb5] {
  pointer-events: none;
}
.vfm--prevent-auto[data-v-2836fdb5] {
  pointer-events: auto;
}
.vfm--outline-none[data-v-2836fdb5]:focus {
  outline: none;
}
.vfm-enter-active[data-v-2836fdb5],
.vfm-leave-active[data-v-2836fdb5] {
  transition: opacity 0.2s;
}
.vfm-enter-from[data-v-2836fdb5],
.vfm-leave-to[data-v-2836fdb5] {
  opacity: 0;
}
.vfm--touch-none[data-v-2836fdb5] {
  touch-action: none;
}
.vfm--select-none[data-v-2836fdb5] {
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
}
.vfm--resize-tr[data-v-2836fdb5],
.vfm--resize-br[data-v-2836fdb5],
.vfm--resize-bl[data-v-2836fdb5],
.vfm--resize-tl[data-v-2836fdb5] {
  width: 12px;
  height: 12px;
  z-index: 10;
}
.vfm--resize-t[data-v-2836fdb5] {
  top: -6px;
  left: 0;
  width: 100%;
  height: 12px;
  cursor: ns-resize;
}
.vfm--resize-tr[data-v-2836fdb5] {
  top: -6px;
  right: -6px;
  cursor: nesw-resize;
}
.vfm--resize-r[data-v-2836fdb5] {
  top: 0;
  right: -6px;
  width: 12px;
  height: 100%;
  cursor: ew-resize;
}
.vfm--resize-br[data-v-2836fdb5] {
  bottom: -6px;
  right: -6px;
  cursor: nwse-resize;
}
.vfm--resize-b[data-v-2836fdb5] {
  bottom: -6px;
  left: 0;
  width: 100%;
  height: 12px;
  cursor: ns-resize;
}
.vfm--resize-bl[data-v-2836fdb5] {
  bottom: -6px;
  left: -6px;
  cursor: nesw-resize;
}
.vfm--resize-l[data-v-2836fdb5] {
  top: 0;
  left: -6px;
  width: 12px;
  height: 100%;
  cursor: ew-resize;
}
.vfm--resize-tl[data-v-2836fdb5] {
  top: -6px;
  left: -6px;
  cursor: nwse-resize;
}
`),_e.render=_n,_e.__scopeId="data-v-2836fdb5",_e.__file="lib/VueFinalModal.vue";var Ie={props:{},methods:{slice:function(e){this.api.dynamicModals.splice(e,1)},beforeOpen:function(e,t,o){var n,a=this;return(n=function*(){e.ref.params.value=t.params,yield a.$nextTick(),yield a.$nextTick(),t.value||(a.slice(o),t.reject("show"))},function(){var i=this,s=arguments;return new Promise(function(m,u){var b=n.apply(i,s);function k(x){pt(b,m,u,k,D,"next",x)}function D(x){pt(b,m,u,k,D,"throw",x)}k(void 0)})})()},isString:function(e){return typeof e=="string"}}},kn={class:"modals-container"};function Et(e,t){var o=w(w({},e),{},{props:w({},e.props)});return Object.assign(o.props,{api:{type:Object,default:function(){return t}}}),o}Ie.render=function(e,t,o,n,a,i){return h(),S("div",kn,[(h(!0),S(ut,null,Fe(e.api.dynamicModals,function(s,m){return h(),S(dt(s.component),de({key:s.id},s.bind,{modelValue:s.value,"onUpdate:modelValue":function(u){return s.value=u}},ct(s.on),{on_closed:function(u){return i.slice(m)},on_beforeOpen:function(u){return i.beforeOpen(u,s)},on_opened:s.opened}),tn({_:2},[Fe(s.slots,function(u,b){return{name:b,fn:v(function(){return[N(" eslint-disable vue/no-v-html "),i.isString(u)?(h(),S("div",{key:0,innerHTML:u},null,8,["innerHTML"])):(h(),S(dt(u.component),de({key:1},u.bind,ct(u.on||{})),null,16))]})}})]),1040,["modelValue","onUpdate:modelValue","on_closed","on_beforeOpen","on_opened"])}),128))])},Ie.__file="lib/ModalsContainer.vue";var xn=function(){var e,t,o=(t=null,{show:function(n){for(var a=this,i=arguments.length,s=new Array(i>1?i-1:0),m=1;m<i;m++)s[m-1]=arguments[m];switch(Te(n)){case"string":return this.toggle.apply(this,[n,!0].concat(s));case"object":return Promise.allSettled([new Promise(function(u,b){var k={value:!0,id:Symbol("dynamicModal"),component:t,bind:{},slots:{},on:{},params:s[0],reject:b,opened:function(){u("show")}};a.dynamicModals.push(mt(Object.assign(k,n)))})])}},hide:function(){for(var n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return this.toggle(a,!1)},hideAll:function(){return this.hide.apply(this,K(this.openedModals.map(function(n){return n.props.name})))},toggle:function(n){for(var a=arguments.length,i=new Array(a>1?a-1:0),s=1;s<a;s++)i[s-1]=arguments[s];var m=Array.isArray(n)?this.get.apply(this,K(n)):this.get(n);return Promise.allSettled(m.map(function(u){return u.toggle.apply(u,i)}))},get:function(){for(var n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return this.modals.filter(function(s){return a.includes(s.props.name)})},dynamicModals:mt([]),openedModals:[],modals:[],_setDefaultModal:function(n){t=n}});return W(e={},"$vfm",o),W(e,"VueFinalModal",function(n){var a=Et(_e,n);return n._setDefaultModal(a),a}(o)),W(e,"ModalsContainer",function(n){return Et(Ie,n)}(o)),e},Ve=xn();Ve.$vfm;var Sn=Ve.VueFinalModal,Mn=Ve.ModalsContainer;const En=rn({name:"Index",components:{DtComponent:Kt,JigToggle:Yt,InertiaButton:Ht,JetConfirmationModal:qt,JetDialogModal:Jt,JigModal:Gt,JigLayout:Rt,ShowStocksForm:Xt,VueFinalModal:Sn,ModalsContainer:Mn,ManageStockForm:dn,JetLabel:un,InfiniteSelect:cn,JetInput:Ut,flatPickr:mn},props:{can:Object,columns:Array,user_establishment:Array,has_administrator:Boolean},inject:["$refreshDt","$dayjs"],data(){return{tableId:"stocks-dt",tableParams:{estum_id:null,medicament_id:null,status_period:null,date_dexpiration_from:null,date_dexpiration_to:null,quantite:null,condition:"equal"},tableParamsForm:ft({estum:null,medicament:null,status:null,date_dexpiration_from:null,date_dexpiration_to:null,quantite:null,condition:"equal"},{remember:!1}),datatable:null,confirmDelete:!1,currentModel:null,withDisabled:!1,showModal:!1,manageStockModal:!1,filters_expanded:!1,stockForm:ft({type:"",quantite:null,date_dexpiration:null,date_production:null,estum:null,medicament:null,region:null,comment:null,ordonnance:null,detaine:null,etab:null,stock:null,user:null,code_label:"N\xB0 Bulletin"},{remember:!1})}},mixins:[Wt],mounted(){},computed:{ajaxUrl(){return new URL(this.route("api.stocks.dt")).href}},methods:{manageAllStocks(){this.manageStockModal=!0},showModel(e){axios.get(route("api.stocks.show",e)).then(t=>{this.currentModel=t.data.payload,this.showModal=!0})},manageStock(e){axios.get(route("api.stocks.show",e)).then(t=>{this.currentModel=t.data.payload,this.stockForm.estum=this.currentModel.estum,this.stockForm.type="consommation",this.stockForm.code_label="N\xB0 Ordonnance",this.stockForm.detaine=null,this.stockForm.ordonnance="",this.stockForm.medicament=this.currentModel.medicament,this.stockForm.stock=this.currentModel,this.stockForm.quantite=0,this.stockForm.comment="",this.manageStockModal=!0})},showHistory(e){this.$inertia.visit(this.route("admin.stock-histories.index",{stock_id:e?e.id:null}))},editModel(e){this.$inertia.visit(this.route("admin.stocks.edit",e.id))},confirmDeletion(e){this.currentModel=e,this.confirmDelete=!0},cancelDelete(){this.currentModel=!1,this.confirmDelete=!1},async deleteModel(){const e=this;this.confirmDelete=!1,this.currentModel&&this.$inertia.delete(route("admin.stocks.destroy",e.currentModel),{onFinish:t=>{this.displayNotification("success","Item deleted."),e.$refreshDt(e.tableId)},onError:t=>{console.log(t),this.displayNotification("error","There was an error while deleting the item.")}})},async toggleActivation(e,t){console.log(e),axios.put(route("api.stocks.update",t.id),{enabled:e}).then(o=>{this.displayNotification("success",o.data.message),this.$refreshDt(this.tableId)})},onManageStockSuccess(e){this.displayNotification("success",e),this.stockForm.quantite=null,this.manageStockModal=!1,this.$refreshDt(this.tableId)},onManageStockError(e){this.displayNotification("error",e)},expandFilters(){this.filters_expanded=!this.filters_expanded},submmitFilters(){this.tableParams.estum_id=this.tableParamsForm.estum?this.tableParamsForm.estum.id:null,this.tableParams.medicament_id=this.tableParamsForm.medicament?this.tableParamsForm.medicament.id:null,this.tableParams.status_period=this.tableParamsForm.status?this.tableParamsForm.status.period:null,this.tableParams.date_dexpiration_from=this.tableParamsForm.date_dexpiration_from?this.tableParamsForm.date_dexpiration_from:null,this.tableParams.date_dexpiration_to=this.tableParamsForm.date_dexpiration_to?this.tableParamsForm.date_dexpiration_to:null,this.tableParams.quantite=this.tableParamsForm.quantite?this.tableParamsForm.quantite:null,this.tableParams.condition=this.tableParamsForm.condition?this.tableParamsForm.condition:null,this.$refreshDt(this.tableId)},ResetFillters(){this.tableParamsForm.estum=null,this.tableParamsForm.medicament=null,this.tableParamsForm.status=null,this.tableParamsForm.date_dexpiration_from=null,this.tableParamsForm.date_dexpiration_to=null,this.tableParamsForm.quantite=null,this.tableParamsForm.condition=null,this.submmitFilters()},async print(){await axios.get(this.route("api.stocks.print",this.tableParams),{responseType:"blob"}).then(e=>{this.displayNotification("success","Stock Printed");const t=new Blob([e.data],{type:"application/pdf"}),o=document.createElement("a");o.href=URL.createObjectURL(t),o.download="stock.pdf",o.click(),URL.revokeObjectURL(o.href)}).catch(e=>{var t,o;this.displayNotification("error",((o=(t=e.response)==null?void 0:t.data)==null?void 0:o.message)||e.message||e)}).finally(e=>{})},async _export(){await axios.get(this.route("api.stocks.export",this.tableParams),{responseType:"blob"}).then(e=>{this.displayNotification("success","Stock Exported");const t=new Blob([e.data],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"}),o=document.createElement("a");o.href=URL.createObjectURL(t),o.download="stock.xlsx",o.click(),URL.revokeObjectURL(o.href)}).catch(e=>{var t,o;this.displayNotification("error",((o=(t=e.response)==null?void 0:t.data)==null?void 0:o.message)||e.message||e)}).finally(e=>{})}}}),_=e=>(it("data-v-774d3314"),e=e(),rt(),e),Pn={class:"flex flex-wrap items-center justify-between w-full px-4"},Cn=_(()=>l("i",{class:"fas fa-arrow-left"},null,-1)),jn=E(" Back"),On={class:"flex gap-x-2"},Fn=_(()=>l("i",{class:"fas fa-boxs"},null,-1)),Tn=E(" G\xE9rer les stocks"),zn=_(()=>l("i",{class:"fas fa-share-square"},null,-1)),Dn=_(()=>l("i",{class:"fas fa-redo"},null,-1)),An=E(" Refresh"),Ln=_(()=>l("i",{class:"fas fa-print"},null,-1)),Bn=E(" Print"),In=_(()=>l("i",{class:"far fa-file-excel"},null,-1)),Vn=E(" Export"),$n={key:0,class:"flex flex-wrap px-4"},Nn={class:"w-full z-10 flex-auto bg-white md:rounded-md md:shadow-md"},Rn={class:"w-full p-4 text-lg font-black sm:rounded-t-lg bg-primary-100"},Un=_(()=>l("i",{class:"mr-2 fas fa-bars"},null,-1)),qn=E(" List of All Stocks "),Jn=_(()=>l("i",{class:"mr-2 fas fa-filter"},null,-1)),Hn=[Jn],Kn={key:0,class:"p-4 transition-all bg-indigo-50"},Yn={class:"flex"},Gn={class:"flex-1 mr-2"},Wn={class:"w-full max-w-md"},Xn={class:"flex-1"},Qn={class:"w-full max-w-md"},Zn={class:"flex-1"},eo={class:"w-full max-w-md"},to={class:"flex mt-2"},no={class:"flex-initial mr-6"},oo={class:"flex-initial mr-2"},ao={class:"flex-1 ml-14"},io={class:"flex"},ro={class:"flex-initial mr-10"},so={class:"w-full max-w-xs"},lo={class:"flex-initial ml-12"},uo={class:"w-full max-w-xs"},co=_(()=>l("option",{value:"equal"},"\xC9gale =",-1)),mo=_(()=>l("option",{value:"higher"},"Sup\xE9rieure >",-1)),fo=_(()=>l("option",{value:"less"},"Inf\xE9rieur <",-1)),po=[co,mo,fo],vo={class:"flex-none"},ho=E("Reset"),bo=E("Submit"),yo={class:"p-4"},go=_(()=>l("div",null,"Are you sure you want to delete this record?",-1)),wo={class:"flex justify-end gap-x-2"},_o=E("Cancel"),ko=E("Yes, Delete"),xo={key:1},So=E("Close"),Mo={key:1,class:"p-4 font-bold text-red-500 bg-red-100 rounded-md shadow-md"},Eo=_(()=>l("span",null,"X",-1)),Po=[Eo],Co=_(()=>l("span",{class:"modal__title"},"G\xE9rer les stocks",-1)),jo={class:"modal__content w-auto"};function Oo(e,t,o,n,a,i){const s=M("inertia-link"),m=M("inertia-button"),u=M("jet-label"),b=M("infinite-select"),k=M("flat-pickr"),D=M("jet-input"),x=M("dt-component"),P=M("jet-confirmation-modal"),q=M("show-stocks-form"),J=M("jig-modal"),X=M("manage-stock-form"),Y=M("vue-final-modal"),O=M("jig-layout");return h(),S(O,null,{header:v(()=>[l("div",Pn,[d(s,{href:e.route("admin.dashboard"),class:"text-xl font-black text-white"},{default:v(()=>[Cn,jn]),_:1},8,["href"]),l("div",On,[e.can.create?(h(),S(m,{key:0,onClick:t[0]||(t[0]=c=>e.manageAllStocks(null)),classes:"bg-pink-500 hover:bg-pink-200 text-white my-2 mr-0"},{default:v(()=>[Fn,Tn]),_:1})):N("",!0),e.can.create?(h(),S(m,{key:1,href:e.route("admin.stocks.create"),classes:"bg-pink-500 hover:bg-pink-200 text-white my-2 ml-0 rounded-r-lg",style:{"margin-left":"-15px","border-radius":"0 0.5rem 0.5rem 0 !important"}},{default:v(()=>[zn]),_:1},8,["href"])):N("",!0),d(m,{onClick:t[1]||(t[1]=c=>e.$refreshDt(e.tableId)),classes:"bg-indigo-100 hover:bg-green-200 text-indigo my-2"},{default:v(()=>[Dn,An]),_:1}),d(m,{disabled:!1,onClick:t[2]||(t[2]=c=>e.print()),classes:"bg-purple-500 hover:bg-purple-300 text-white my-2"},{default:v(()=>[Ln,Bn]),_:1}),d(m,{disabled:!1,onClick:t[3]||(t[3]=c=>e._export()),classes:"bg-green-500 hover:bg-green-300 text-white my-2"},{default:v(()=>[In,Vn]),_:1})])])]),default:v(()=>[e.can.viewAny?(h(),me("div",$n,[l("div",Nn,[l("h3",Rn,[Un,qn,l("button",{style:{"margin-top":"-5px"},class:"float-right pl-2 pt-1 pb-1 pr-1 bg-primary 0 text-white rounded hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg active:bg-primary-800 active:shadow-lg transition duration-150 ease-in-out",type:"button",onClick:t[4]||(t[4]=c=>e.expandFilters())},Hn)]),e.filters_expanded?(h(),me("div",Kn,[l("form",{onSubmit:t[13]||(t[13]=ee((...c)=>e.submmitFilters&&e.submmitFilters(...c),["prevent"]))},[l("div",Yn,[l("div",Gn,[l("div",Wn,[d(u,{for:"estum",value:"\xC9tablissement"}),d(b,{"per-page":15,"api-url":e.route("api.establishments.index"),onClose:e.submmitFilters,id:"estum",name:"estum",modelValue:e.tableParamsForm.estum,"onUpdate:modelValue":t[5]||(t[5]=c=>e.tableParamsForm.estum=c),label:"name"},null,8,["api-url","onClose","modelValue"])])]),l("div",Xn,[l("div",Qn,[d(u,{for:"medicament",value:"Medicament"}),d(b,{"per-page":15,"api-url":e.route("api.medicaments.index"),onClose:e.submmitFilters,id:"medicament",name:"medicament",modelValue:e.tableParamsForm.medicament,"onUpdate:modelValue":t[6]||(t[6]=c=>e.tableParamsForm.medicament=c),label:"title"},null,8,["api-url","onClose","modelValue"])])]),l("div",Zn,[l("div",eo,[d(u,{for:"status",value:"Status"}),d(b,{"per-page":15,"api-url":e.route("api.stock-statuses.index"),onClose:e.submmitFilters,id:"status",name:"status",modelValue:e.tableParamsForm.status,"onUpdate:modelValue":t[7]||(t[7]=c=>e.tableParamsForm.status=c),label:"name"},null,8,["api-url","onClose","modelValue"])])])]),l("div",to,[l("div",no,[d(u,{for:"date_dexpiration_from",value:"Date D'expiration : Du"}),d(k,{class:"cost_select",modelValue:e.tableParamsForm.date_dexpiration_from,"onUpdate:modelValue":t[8]||(t[8]=c=>e.tableParamsForm.date_dexpiration_from=c)},null,8,["modelValue"])]),l("div",oo,[d(u,{for:"date_dexpiration_to",value:"Jusqu'\xE0"}),d(k,{class:"cost_select",modelValue:e.tableParamsForm.date_dexpiration_to,"onUpdate:modelValue":t[9]||(t[9]=c=>e.tableParamsForm.date_dexpiration_to=c)},null,8,["modelValue"])]),l("div",ao,[l("div",io,[l("div",ro,[l("div",so,[d(u,{for:"quantite",value:"Quantite"}),d(D,{class:"w-full",type:"number",min:"0",step:"1",id:"quantite",name:"quantite",modelValue:e.tableParamsForm.quantite,"onUpdate:modelValue":t[10]||(t[10]=c=>e.tableParamsForm.quantite=c)},null,8,["modelValue"])])]),l("div",lo,[l("div",uo,[d(u,{for:"condition",value:"Condition"}),Oe(l("select",{class:"w-full cost_select","onUpdate:modelValue":t[11]||(t[11]=c=>e.tableParamsForm.condition=c),id:"condition",name:"condition"},po,512),[[sn,e.tableParamsForm.condition]])])])])]),l("div",vo,[d(m,{type:"button",class:"mt-4 mr-4 text-white font-semibold bg-success disabled:opacity-25",onClick:t[12]||(t[12]=c=>e.ResetFillters())},{default:v(()=>[ho]),_:1}),d(m,{type:"submit",class:"mt-4 mr-14 text-white font-semibold bg-primary disabled:opacity-25"},{default:v(()=>[bo]),_:1})])])],32)])):N("",!0),l("div",yo,[d(x,{"table-id":e.tableId,"ajax-url":e.ajaxUrl,columns:e.columns,"ajax-params":e.tableParams,onShowModel:e.showModel,onEditModel:e.editModel,onShowHistory:e.showHistory,onDeleteModel:e.confirmDeletion,onManageStock:e.manageStock,defaultOrderColumn:e.id,defaultOrderDirection:e.desc},null,8,["table-id","ajax-url","columns","ajax-params","onShowModel","onEditModel","onShowHistory","onDeleteModel","onManageStock","defaultOrderColumn","defaultOrderDirection"])]),d(P,{title:"Confirm Deletion",show:e.confirmDelete},{content:v(()=>[go]),footer:v(()=>[l("div",wo,[d(m,{as:"button",type:"button",onClick:ee(e.cancelDelete,["stop"]),class:"bg-red-500"},{default:v(()=>[_o]),_:1},8,["onClick"]),d(m,{as:"button",type:"button",onClick:ee(e.deleteModel,["prevent"]),class:"bg-green-500"},{default:v(()=>[ko]),_:1},8,["onClick"])])]),_:1},8,["show"]),e.showModal&&e.currentModel?(h(),me("div",xo,[d(J,{show:e.showModal,"corner-class":"rounded-lg","position-class":"align-middle",onClose:t[15]||(t[15]=c=>{e.currentModel=null,e.showModal=!1})},{title:v(()=>[E("Show Stock #"+ln(e.currentModel.id),1)]),footer:v(()=>[d(m,{class:"px-4 text-white bg-primary",onClick:t[14]||(t[14]=c=>{e.showModal=!1,e.currentModel=null})},{default:v(()=>[So]),_:1})]),default:v(()=>[d(q,{model:e.currentModel},null,8,["model"])]),_:1},8,["show"])])):N("",!0)])])):(h(),me("div",Mo," You are not authorized to view a list of Stocks ")),d(Y,{modelValue:e.manageStockModal,"onUpdate:modelValue":t[17]||(t[17]=c=>e.manageStockModal=c),drag:!0,resize:!0,"resize-directions":["t","tr","r","br","b","bl","l","tl"],classes:"modal-container","content-class":"modal-content"},{default:v(()=>[l("button",{class:"modal__close",onClick:t[16]||(t[16]=c=>e.manageStockModal=!1)},Po),Co,l("div",jo,[d(X,{form:e.stockForm,user_establishment:e.user_establishment,has_administrator:e.has_administrator,onSuccess:e.onManageStockSuccess,onError:e.onManageStockError},null,8,["form","user_establishment","has_administrator","onSuccess","onError"])])]),_:1},8,["modelValue"])]),_:1})}var Wo=fn(En,[["render",Oo],["__scopeId","data-v-774d3314"]]);export{Wo as default};