import{Q as S,S as B,ab as g,T as c,Z as m,g as w,W as h,I as p,x as o,B as b,v as l,D as d,X as s,A as D,_ as I,G as v,E as u,J as E,y as k,L as y,z as K,Y as R}from"./BU5rSPkP.js";import{s as A}from"./FO_fjVnU.js";import{s as O}from"./DRacbIuW.js";import{s as V}from"./BYJyjcy7.js";import"./CoYBglIq.js";var Z={mask:function(t){var i=t.position;return{position:"fixed",height:"100%",width:"100%",left:0,top:0,display:"flex",justifyContent:i==="left"?"flex-start":i==="right"?"flex-end":"center",alignItems:i==="top"?"flex-start":i==="bottom"?"flex-end":"center"}}},T={mask:function(t){var i=t.instance,r=t.props,a=["left","right","top","bottom"],n=a.find(function(f){return f===r.position});return["p-sidebar-mask",{"p-component-overlay p-component-overlay-enter":r.modal,"p-sidebar-mask-scrollblocker":r.blockScroll,"p-sidebar-visible":i.containerVisible,"p-sidebar-full":i.fullScreen},n?"p-sidebar-".concat(n):""]},root:function(t){var i=t.instance;return["p-sidebar p-component",{"p-ripple-disabled":i.$primevue.config.ripple===!1,"p-sidebar-full":i.fullScreen}]},header:"p-sidebar-header",title:"p-sidebar-header-content",closeButton:"p-sidebar-close p-sidebar-icon p-link",closeIcon:"p-sidebar-close-icon",content:"p-sidebar-content"},M=S.extend({name:"sidebar",classes:T,inlineStyles:Z}),F={name:"BaseSidebar",extends:V,props:{visible:{type:Boolean,default:!1},position:{type:String,default:"left"},header:{type:null,default:null},baseZIndex:{type:Number,default:0},autoZIndex:{type:Boolean,default:!0},dismissable:{type:Boolean,default:!0},showCloseIcon:{type:Boolean,default:!0},closeIcon:{type:String,default:void 0},modal:{type:Boolean,default:!0},blockScroll:{type:Boolean,default:!1}},style:M,provide:function(){return{$parentInstance:this}},watch:{dismissable:function(t){t?this.bindOutsideClickListener():this.unbindOutsideClickListener()}}},N={name:"Sidebar",extends:F,inheritAttrs:!1,emits:["update:visible","show","hide","after-hide"],data:function(){return{containerVisible:this.visible}},container:null,mask:null,content:null,headerContainer:null,closeButton:null,outsideClickListener:null,documentKeydownListener:null,updated:function(){this.visible&&(this.containerVisible=this.visible)},beforeUnmount:function(){this.disableDocumentSettings(),this.mask&&this.autoZIndex&&m.clear(this.mask),this.container=null,this.mask=null},methods:{hide:function(){this.$emit("update:visible",!1)},onEnter:function(){this.$emit("show"),this.focus(),this.bindDocumentKeyDownListener(),this.autoZIndex&&m.set("modal",this.mask,this.baseZIndex||this.$primevue.config.zIndex.modal)},onAfterEnter:function(){this.enableDocumentSettings()},onBeforeLeave:function(){this.modal&&!this.isUnstyled&&c.addClass(this.mask,"p-component-overlay-leave")},onLeave:function(){this.$emit("hide")},onAfterLeave:function(){this.autoZIndex&&m.clear(this.mask),this.unbindDocumentKeyDownListener(),this.containerVisible=!1,this.disableDocumentSettings(),this.$emit("after-hide")},onMaskClick:function(t){this.dismissable&&this.modal&&this.mask===t.target&&this.hide()},focus:function(){var t=function(a){return a&&a.querySelector("[autofocus]")},i=this.$slots.header&&t(this.headerContainer);i||(i=this.$slots.default&&t(this.container),i||(i=this.closeButton)),i&&c.focus(i)},enableDocumentSettings:function(){this.dismissable&&!this.modal&&this.bindOutsideClickListener(),this.blockScroll&&c.blockBodyScroll()},disableDocumentSettings:function(){this.unbindOutsideClickListener(),this.blockScroll&&c.unblockBodyScroll()},onKeydown:function(t){t.code==="Escape"&&this.hide()},containerRef:function(t){this.container=t},maskRef:function(t){this.mask=t},contentRef:function(t){this.content=t},headerContainerRef:function(t){this.headerContainer=t},closeButtonRef:function(t){this.closeButton=t},bindDocumentKeyDownListener:function(){this.documentKeydownListener||(this.documentKeydownListener=this.onKeydown,document.addEventListener("keydown",this.documentKeydownListener))},unbindDocumentKeyDownListener:function(){this.documentKeydownListener&&(document.removeEventListener("keydown",this.documentKeydownListener),this.documentKeydownListener=null)},bindOutsideClickListener:function(){var t=this;this.outsideClickListener||(this.outsideClickListener=function(i){t.isOutsideClicked(i)&&t.hide()},document.addEventListener("click",this.outsideClickListener))},unbindOutsideClickListener:function(){this.outsideClickListener&&(document.removeEventListener("click",this.outsideClickListener),this.outsideClickListener=null)},isOutsideClicked:function(t){return this.container&&!this.container.contains(t.target)}},computed:{fullScreen:function(){return this.position==="full"},closeAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.close:void 0}},directives:{focustrap:g,ripple:B},components:{Portal:O,TimesIcon:A}},P=["aria-modal"],U=["aria-label"];function $(e,t,i,r,a,n){var f=w("Portal"),L=h("ripple"),C=h("focustrap");return o(),p(f,null,{default:b(function(){return[a.containerVisible?(o(),l("div",s({key:0,ref:n.maskRef,onMousedown:t[1]||(t[1]=function(){return n.onMaskClick&&n.onMaskClick.apply(n,arguments)}),class:e.cx("mask"),style:e.sx("mask",!0,{position:e.position})},e.ptm("mask")),[D(I,s({name:"p-sidebar",onEnter:n.onEnter,onAfterEnter:n.onAfterEnter,onBeforeLeave:n.onBeforeLeave,onLeave:n.onLeave,onAfterLeave:n.onAfterLeave,appear:""},e.ptm("transition")),{default:b(function(){return[e.visible?v((o(),l("div",s({key:0,ref:n.containerRef,class:e.cx("root"),role:"complementary","aria-modal":e.modal},e.ptmi("root")),[e.$slots.container?u(e.$slots,"container",{key:0,onClose:n.hide,closeCallback:n.hide}):(o(),l(E,{key:1},[k("div",s({ref:n.headerContainerRef,class:e.cx("header")},e.ptm("header")),[u(e.$slots,"header",{class:y(e.cx("title"))},function(){return[e.header?(o(),l("div",s({key:0,class:e.cx("title")},e.ptm("title")),K(e.header),17)):d("",!0)]}),e.showCloseIcon?v((o(),l("button",s({key:0,ref:n.closeButtonRef,type:"button",class:e.cx("closeButton"),"aria-label":n.closeAriaLabel,onClick:t[0]||(t[0]=function(){return n.hide&&n.hide.apply(n,arguments)})},e.ptm("closeButton"),{"data-pc-group-section":"iconcontainer"}),[u(e.$slots,"closeicon",{class:y(e.cx("closeIcon"))},function(){return[(o(),p(R(e.closeIcon?"span":"TimesIcon"),s({class:[e.cx("closeIcon"),e.closeIcon]},e.ptm("closeIcon")),null,16,["class"]))]})],16,U)),[[L]]):d("",!0)],16),k("div",s({ref:n.contentRef,class:e.cx("content")},e.ptm("content")),[u(e.$slots,"default")],16)],64))],16,P)),[[C]]):d("",!0)]}),_:3},16,["onEnter","onAfterEnter","onBeforeLeave","onLeave","onAfterLeave"])],16)):d("",!0)]}),_:3})}N.render=$;export{N as default};
