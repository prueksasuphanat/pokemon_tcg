import { s as script$2 } from './basecomponent.esm-CS-JuWTB.mjs';
import './server.mjs';
import 'vue';
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

var ColumnGroupStyle = {};
var script$1 = {
  name: "BaseColumnGroup",
  "extends": script$2,
  props: {
    type: {
      type: String,
      "default": null
    }
  },
  style: ColumnGroupStyle,
  provide: function provide() {
    return {
      $parentInstance: this
    };
  }
};
var script = {
  name: "ColumnGroup",
  "extends": script$1,
  inheritAttrs: false,
  inject: ["$columnGroups"],
  mounted: function mounted() {
    var _this$$columnGroups;
    (_this$$columnGroups = this.$columnGroups) === null || _this$$columnGroups === void 0 || _this$$columnGroups.add(this.$);
  },
  unmounted: function unmounted() {
    var _this$$columnGroups2;
    (_this$$columnGroups2 = this.$columnGroups) === null || _this$$columnGroups2 === void 0 || _this$$columnGroups2["delete"](this.$);
  },
  render: function render() {
    return null;
  }
};

export { script as default };
//# sourceMappingURL=columngroup.esm-CrIzNvWX.mjs.map
