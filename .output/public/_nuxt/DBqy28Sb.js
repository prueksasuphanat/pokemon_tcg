import{s}from"./BYJyjcy7.js";import{Q as n,v as r,x as o,X as u}from"./BU5rSPkP.js";var d={root:function(t){var l=t.instance,a=t.props;return["p-inputtextarea p-inputtext p-component",{"p-filled":l.filled,"p-inputtextarea-resizable ":a.autoResize,"p-invalid":a.invalid,"p-variant-filled":a.variant?a.variant==="filled":l.$primevue.config.inputStyle==="filled"}]}},p=n.extend({name:"textarea",classes:d}),h={name:"BaseTextarea",extends:s,props:{modelValue:null,autoResize:Boolean,invalid:{type:Boolean,default:!1},variant:{type:String,default:null}},style:p,provide:function(){return{$parentInstance:this}}},f={name:"Textarea",extends:h,inheritAttrs:!1,emits:["update:modelValue"],mounted:function(){this.$el.offsetParent&&this.autoResize&&this.resize()},updated:function(){this.$el.offsetParent&&this.autoResize&&this.resize()},methods:{resize:function(){this.$el.style.height="auto",this.$el.style.height=this.$el.scrollHeight+"px",parseFloat(this.$el.style.height)>=parseFloat(this.$el.style.maxHeight)?(this.$el.style.overflowY="scroll",this.$el.style.height=this.$el.style.maxHeight):this.$el.style.overflow="hidden"},onInput:function(t){this.autoResize&&this.resize(),this.$emit("update:modelValue",t.target.value)}},computed:{filled:function(){return this.modelValue!=null&&this.modelValue.toString().length>0},ptmParams:function(){return{context:{disabled:this.$attrs.disabled||this.$attrs.disabled===""}}}}},m=["value","aria-invalid"];function v(e,t,l,a,c,i){return o(),r("textarea",u({class:e.cx("root"),value:e.modelValue,"aria-invalid":e.invalid||void 0,onInput:t[0]||(t[0]=function(){return i.onInput&&i.onInput.apply(i,arguments)})},e.ptmi("root",i.ptmParams)),null,16,m)}f.render=v;export{f as default};
