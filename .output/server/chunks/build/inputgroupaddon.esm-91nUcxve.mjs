import { s as script$2 } from './basecomponent.esm-CS-JuWTB.mjs';
import { B as BaseStyle } from './server.mjs';
import { createElementBlock, openBlock, mergeProps, renderSlot } from 'vue';
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
  root: "p-inputgroup-addon"
};
var InputGroupAddonStyle = BaseStyle.extend({
  name: "inputgroupaddon",
  classes
});
var script$1 = {
  name: "BaseInputGroupAddon",
  "extends": script$2,
  style: InputGroupAddonStyle,
  provide: function provide() {
    return {
      $parentInstance: this
    };
  }
};
var script = {
  name: "InputGroupAddon",
  "extends": script$1,
  inheritAttrs: false
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", mergeProps({
    "class": _ctx.cx("root")
  }, _ctx.ptmi("root")), [renderSlot(_ctx.$slots, "default")], 16);
}
script.render = render;

export { script as default };
//# sourceMappingURL=inputgroupaddon.esm-91nUcxve.mjs.map
