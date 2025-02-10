import { s as script$4 } from './index.esm-D0Ox4mP0.mjs';
import { s as script$1$1, a as script$5 } from './index.esm-Cf7oyrs6.mjs';
import { s as script$3 } from './index.esm-BrBL04-x.mjs';
import { s as script$2 } from './basecomponent.esm-CS-JuWTB.mjs';
import { B as BaseStyle } from './server.mjs';
import { createElementBlock, openBlock, mergeProps, renderSlot, createElementVNode, createBlock, resolveDynamicComponent, createTextVNode } from 'vue';
import './baseicon.esm-BMJ3qsuR.mjs';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:url';
import 'node:path';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import 'vue/server-renderer';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';

var classes = {
  root: function root(_ref) {
    var props = _ref.props, instance = _ref.instance;
    return ["p-inline-message p-component p-inline-message-" + props.severity, {
      "p-inline-message-icon-only": !instance.$slots["default"]
    }];
  },
  icon: function icon(_ref2) {
    var props = _ref2.props;
    return ["p-inline-message-icon", props.icon];
  },
  text: "p-inline-message-text"
};
var InlineMessageStyle = BaseStyle.extend({
  name: "inlinemessage",
  classes
});
var script$1 = {
  name: "BaseInlineMessage",
  "extends": script$2,
  props: {
    severity: {
      type: String,
      "default": "error"
    },
    icon: {
      type: String,
      "default": void 0
    }
  },
  style: InlineMessageStyle,
  provide: function provide() {
    return {
      $parentInstance: this
    };
  }
};
var script = {
  name: "InlineMessage",
  "extends": script$1,
  inheritAttrs: false,
  timeout: null,
  data: function data() {
    return {
      visible: true
    };
  },
  mounted: function mounted() {
    var _this = this;
    if (!this.sticky) {
      setTimeout(function() {
        _this.visible = false;
      }, this.life);
    }
  },
  computed: {
    iconComponent: function iconComponent() {
      return {
        info: script$5,
        success: script$4,
        warn: script$1$1,
        error: script$3
      }[this.severity];
    }
  }
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", mergeProps({
    role: "alert",
    "aria-live": "assertive",
    "aria-atomic": "true",
    "class": _ctx.cx("root")
  }, _ctx.ptmi("root")), [renderSlot(_ctx.$slots, "icon", {}, function() {
    return [(openBlock(), createBlock(resolveDynamicComponent(_ctx.icon ? "span" : $options.iconComponent), mergeProps({
      "class": _ctx.cx("icon")
    }, _ctx.ptm("icon")), null, 16, ["class"]))];
  }), createElementVNode("span", mergeProps({
    "class": _ctx.cx("text")
  }, _ctx.ptm("text")), [renderSlot(_ctx.$slots, "default", {}, function() {
    return [createTextVNode("\xA0")];
  })], 16)], 16);
}
script.render = render;

export { script as default };
//# sourceMappingURL=inlinemessage.esm-BlNynkff.mjs.map
