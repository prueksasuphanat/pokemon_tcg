import { useSSRContext, ref, computed, unref, isRef, withCtx, createVNode, createBlock, openBlock, Fragment, renderList, toDisplayString, mergeProps, watch } from 'vue';
import { ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrRenderClass, ssrRenderAttrs, ssrRenderSlot, ssrIncludeBooleanAttr } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import script from './dropdown.esm-C6Oqqjv1.mjs';
import axios from 'axios';
import { e as defineStore } from './server.mjs';
import './baseicon.esm-BMJ3qsuR.mjs';
import './basecomponent.esm-CS-JuWTB.mjs';
import './index.esm-D0Ox4mP0.mjs';
import './index.esm-B0qW7iMh.mjs';
import './index.esm-BRfPGdKI.mjs';
import './index.esm-SNkr7bwr.mjs';
import './index.esm-qmrngb_C.mjs';
import './overlayeventbus.esm-CAhQZh07.mjs';
import './portal.esm-ChLaJXJk.mjs';
import './virtualscroller.esm-DSkqnrVH.mjs';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:url';
import 'node:path';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';

const _imports_0$1 = "data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M5.14288%205.14282L18.8572%2018.8571'%20stroke='white'%20stroke-linecap='round'/%3e%3cpath%20d='M18.8571%205.14282L5.14283%2018.8571'%20stroke='white'%20stroke-linecap='round'/%3e%3c/svg%3e";
const _sfc_main$4 = {
  __name: "ModalCart",
  __ssrInlineRender: true,
  props: {
    title: {
      type: String,
      required: true
    },
    visible: {
      type: Boolean,
      default: false
    },
    data: {
      type: Array,
      default: []
    }
  },
  emits: ["update:visible", "confirm"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      if (props.visible) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "fixed inset-0 bg-cart flex justify-end items-start z-50" }, _attrs))} data-v-b40b2ce6><div class="bg-[#1F1D2B] w-full h-full sm:w-1/3 pl-[24px] pt-[24px] pr-[29px] shadow-lg" data-v-b40b2ce6><div class="flex justify-between items-center" data-v-b40b2ce6><div class="" data-v-b40b2ce6><h3 class="text-[26px] font-[600] leading-[36.4px] mb-[4px]" data-v-b40b2ce6>${ssrInterpolate(props.title)}</h3>`);
        ssrRenderSlot(_ctx.$slots, "title", {}, null, _push, _parent);
        _push(`</div><button class="bg-[#EA7C69] cursor-pointer shadow-[0px_8px_24px_rgba(234,124,105,0.3)] rounded-[8px]" data-v-b40b2ce6><img class="p-[12px]"${ssrRenderAttr("src", _imports_0$1)} data-v-b40b2ce6></button></div><div class="h-full" data-v-b40b2ce6>`);
        ssrRenderSlot(_ctx.$slots, "content", {}, null, _push, _parent);
        _push(`</div></div></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ModalCart.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-b40b2ce6"]]);
const _sfc_main$3 = {
  __name: "SearchInput",
  __ssrInlineRender: true,
  props: {
    placeholder: {
      type: String,
      default: "Search"
    }
  },
  emits: ["update:searchText"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const searchText = ref("");
    watch(searchText, (newValue) => {
      emit("update:searchText", newValue);
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative flex items-center" }, _attrs))} data-v-0e1574ca><span class="absolute left-3 text-white" data-v-0e1574ca><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-v-0e1574ca><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-4.35-4.35m2.15-6.15a8 8 0 11-16 0 8 8 0 0116 0z" data-v-0e1574ca></path></svg></span><input type="text" class="text-white h-[40px] w-full rounded-lg border border-gray-400 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-500"${ssrRenderAttr("placeholder", props.placeholder)}${ssrRenderAttr("value", searchText.value)} data-v-0e1574ca></div>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Custom/SearchInput.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-0e1574ca"]]);
const _sfc_main$2 = {
  __name: "Dropdown",
  __ssrInlineRender: true,
  props: {
    placeholder: {
      type: String,
      default: "type something"
    },
    options: {
      type: Array,
      default: []
    }
  },
  emits: ["update:value"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const value = ref();
    watch(value, (newValue) => {
      emit("update:value", newValue);
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Dropdown = script;
      _push(ssrRenderComponent(_component_Dropdown, mergeProps({
        modelValue: value.value,
        "onUpdate:modelValue": ($event) => value.value = $event,
        options: props.options,
        optionLabel: "name",
        placeholder: props.placeholder,
        class: "border border-[#393C49] border-[1px] bg-[#1F1D2B] text-[#ffffff] pl-[16px] py-[8px] w-auto rounded-[8px] leading-[19.6px] font-[400] focus:outline-none"
      }, _attrs), null, _parent));
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Primevue/Dropdown.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-3214e51b"]]);
const _sfc_main$1 = {
  __name: "Paginator",
  __ssrInlineRender: true,
  props: {
    currentPage: {
      type: Number,
      default: 1
    },
    totalPages: {
      type: Number,
      default: 0
    }
  },
  emits: ["update:currentPage"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const currentPage = ref(1);
    const totalPages = ref(1);
    watch(
      () => props.totalPages,
      (newValue) => {
        totalPages.value = newValue;
        if (totalPages.value === 0) {
          totalPages.value = 1;
        }
      }
    );
    watch(
      () => props.currentPage,
      (newValue) => {
        currentPage.value = newValue;
      }
    );
    watch(currentPage, (newValue) => {
      emit("update:currentPage", newValue);
    });
    const delta = ref(6);
    const startPage = computed(
      () => Math.floor((currentPage.value - 1) / delta.value) * delta.value + 1
    );
    const endPage = computed(
      () => Math.min(startPage.value + delta.value - 1, totalPages.value)
    );
    const showPages = computed(() => {
      const pages = [];
      for (let i = startPage.value; i <= endPage.value; i++) {
        pages.push(i);
      }
      return pages;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex items-center gap-1 text-[14px]" }, _attrs))} data-v-b2bf904f><button${ssrIncludeBooleanAttr(currentPage.value === 1) ? " disabled" : ""} class="transition px-2 py-1 rounded-full hover:bg-gray-700 disabled:opacity-50" data-v-b2bf904f> &lt;&lt; </button><button${ssrIncludeBooleanAttr(currentPage.value === 1) ? " disabled" : ""} class="transition px-2 py-1 rounded-full hover:bg-gray-700 disabled:opacity-50" data-v-b2bf904f> &lt; </button>`);
      if (startPage.value > 1) {
        _push(`<button class="transition px-2 py-1 rounded-full hover:bg-gray-700" data-v-b2bf904f> 1 </button>`);
      } else {
        _push(`<!---->`);
      }
      if (startPage.value > 2) {
        _push(`<button class="transition px-2 py-1 rounded-full hover:bg-gray-700" data-v-b2bf904f> ... </button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--[-->`);
      ssrRenderList(showPages.value, (page) => {
        _push(`<button class="${ssrRenderClass([
          "transition px-2 py-1 rounded-full",
          {
            "bg-[#1F1D2B] text-white": currentPage.value === page,
            "hover:bg-gray-700": currentPage.value !== page,
            "w-8 h-8 flex items-center justify-center": true
            // ทำให้ปุ่มเป็นวงกลม
          }
        ])}" data-v-b2bf904f>${ssrInterpolate(page)}</button>`);
      });
      _push(`<!--]-->`);
      if (endPage.value < totalPages.value) {
        _push(`<button class="transition px-2 py-1 rounded-full hover:bg-gray-700" data-v-b2bf904f> ... </button>`);
      } else {
        _push(`<!---->`);
      }
      if (endPage.value < totalPages.value) {
        _push(`<button class="transition px-2 py-1 rounded-full hover:bg-gray-700" data-v-b2bf904f>${ssrInterpolate(totalPages.value)}</button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<button${ssrIncludeBooleanAttr(currentPage.value === totalPages.value) ? " disabled" : ""} class="transition px-2 py-1 rounded-full hover:bg-gray-700 disabled:opacity-50" data-v-b2bf904f> &gt; </button><button${ssrIncludeBooleanAttr(currentPage.value === totalPages.value) ? " disabled" : ""} class="transition px-2 py-1 rounded-full hover:bg-gray-700 disabled:opacity-50" data-v-b2bf904f> &gt;&gt; </button></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Custom/Paginator.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-b2bf904f"]]);
const _imports_0 = "data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%20%3e%3cpath%20d='M6%202L3%206V20C3%2020.5304%203.21071%2021.0391%203.58579%2021.4142C3.96086%2021.7893%204.46957%2022%205%2022H19C19.5304%2022%2020.0391%2021.7893%2020.4142%2021.4142C20.7893%2021.0391%2021%2020.5304%2021%2020V6L18%202H6Z'%20stroke='white'%20stroke-linecap='round'%20stroke-linejoin='round'%20/%3e%3cpath%20d='M3%206H21'%20stroke='white'%20stroke-linecap='round'%20stroke-linejoin='round'%20/%3e%3cpath%20d='M16%2010C16%2011.0609%2015.5786%2012.0783%2014.8284%2012.8284C14.0783%2013.5786%2013.0609%2014%2012%2014C10.9391%2014%209.92172%2013.5786%209.17157%2012.8284C8.42143%2012.0783%208%2011.0609%208%2010'%20stroke='white'%20stroke-linecap='round'%20stroke-linejoin='round'%20/%3e%3c/svg%3e";
const useCardStore = defineStore({
  id: "useCardStore",
  state: () => ({
    cards: [],
    key: "c3ee7894-5ccd-4a9b-aa1f-946b53379cb2",
    isLoading: false,
    name: "",
    set: "",
    rarity: "",
    type: ""
  }),
  actions: {
    // name, set, rarity, type
    async select(page = 0, pageSize = 0, name = "", set = "", rarity = "", type = "") {
      this.isLoading = true;
      let path = `https://api.pokemontcg.io/v2/cards?page=${page}&pageSize=${pageSize}&`;
      let pathQuery = [];
      if (name) {
        pathQuery.push(`name:${name.replaceAll(" ", "*")}*`);
        this.name = name;
      }
      if (set) {
        pathQuery.push(`set.name:${set.replaceAll(" ", "*")}*`);
        this.set = set;
      }
      if (rarity) {
        pathQuery.push(`rarity:${rarity.replaceAll(" ", "*")}*`);
        this.rarity = rarity;
      }
      if (type) {
        pathQuery.push(`types:${type.replaceAll(" ", "*")}`);
        this.type = type;
      }
      if (pathQuery.length > 0) {
        path += `q=${pathQuery.join(" AND ")}`;
      }
      try {
        const response = await axios.get(path, {
          headers: {
            "X-Api-Key": this.key
          }
        });
        return response.data;
      } catch (error) {
        console.error(error);
      } finally {
        this.isLoading = false;
      }
    },
    async getSet() {
      this.isLoading = true;
      try {
        const response = await axios.get("https://api.pokemontcg.io/v2/sets", {
          headers: {
            "X-Api-Key": this.key
          }
        });
        return response.data;
      } catch (error) {
        console.error(error);
      } finally {
        this.isLoading = false;
      }
    },
    async getRarity() {
      this.isLoading = true;
      try {
        const response = await axios.get(
          "https://api.pokemontcg.io/v2/rarities",
          {
            headers: {
              "X-Api-Key": this.key
            }
          }
        );
        return response.data;
      } catch (error) {
        console.error(error);
      } finally {
        this.isLoading = false;
      }
    },
    async getType() {
      this.isLoading = true;
      try {
        const response = await axios.get("https://api.pokemontcg.io/v2/types", {
          headers: {
            "X-Api-Key": this.key
          }
        });
        return response.data;
      } catch (error) {
        console.error(error);
      } finally {
        this.isLoading = false;
      }
    }
  }
});
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const cardStore = useCardStore();
    const cards = ref();
    const setOptions = ref([]);
    const rarityOptions = ref([]);
    const typeOptions = ref([]);
    const currentPage = ref(1);
    const totalPage = ref(0);
    const countData = ref(0);
    const nameValue = ref("");
    const setValue = ref("");
    const rarityValue = ref("");
    const typeValue = ref("");
    const selectedCards = ref([]);
    const totalCard = computed(() => {
      let total = 0;
      selectedCards.value.forEach((card) => {
        total += card.qty;
      });
      return total;
    });
    const totalPrice = computed(() => {
      let total = 0;
      selectedCards.value.forEach((card) => {
        total += card.totalPrice;
      });
      return total;
    });
    const isLoading = ref(false);
    const select = async () => {
      isLoading.value = true;
      cards.value = [];
      if (setValue.value == "All") setValue.value = "";
      if (rarityValue.value == "All") rarityValue.value = "";
      if (typeValue.value == "All") typeValue.value = "";
      if (cardStore.type !== typeValue.value || cardStore.rarity !== rarityValue.value || cardStore.set !== setValue.value || cardStore.name !== nameValue.value) {
        currentPage.value = 1;
      }
      const response = await cardStore.select(
        currentPage.value,
        20,
        nameValue.value.trim(),
        setValue.value,
        rarityValue.value,
        typeValue.value
      );
      cards.value = response.data;
      totalPage.value = Math.floor(response.totalCount / 20);
      countData.value = response.count;
      cards.value.forEach((card) => {
        card.stock = 20;
      });
      isLoading.value = false;
    };
    const showModal = ref(false);
    const plusQty = (id) => {
      const card = selectedCards.value.find((card2) => card2.id === id);
      if (card) {
        card.qty += 1;
        card.totalPrice += card.price;
      }
    };
    const minusQty = (id) => {
      const card = selectedCards.value.find((card2) => card2.id === id);
      if (card.qty > 1) {
        card.qty -= 1;
        card.totalPrice -= card.price;
        return;
      }
      const emptyCardIndex = selectedCards.value.findIndex(
        (card2) => card2.id === id
      );
      selectedCards.value.splice(emptyCardIndex, 1);
    };
    const clearAll = () => {
      selectedCards.value = [];
    };
    const numberFormat = (value) => {
      if (!value) {
        return "0";
      }
      return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ModalCart = __nuxt_component_0;
      const _component_CustomSearchInput = __nuxt_component_1;
      const _component_PrimevueDropdown = __nuxt_component_2;
      const _component_CustomPaginator = __nuxt_component_3;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_ModalCart, {
        title: "Cart",
        visible: unref(showModal),
        "onUpdate:visible": ($event) => isRef(showModal) ? showModal.value = $event : null
      }, {
        title: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p class="text-[#ABBBC2] text-[12px] leading-[15.6px] font-[400] underline cursor-pointer" data-v-16a7907f${_scopeId}> Clear all </p>`);
          } else {
            return [
              createVNode("p", {
                onClick: ($event) => clearAll(),
                class: "text-[#ABBBC2] text-[12px] leading-[15.6px] font-[400] underline cursor-pointer"
              }, " Clear all ", 8, ["onClick"])
            ];
          }
        }),
        content: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="mt-[20px] flex flex-col justify-between h-full" data-v-16a7907f${_scopeId}><div class="overflow-y-auto max-h-[83vh]" data-v-16a7907f${_scopeId}><table class="w-full" data-v-16a7907f${_scopeId}><thead class="sticky top-0 z-10 bg-[#1F1D2B]" data-v-16a7907f${_scopeId}><tr class="text-[14px] font-[400] leading-[19.6px] h-[25px] text-left" data-v-16a7907f${_scopeId}><th class="" data-v-16a7907f${_scopeId}>Item</th><th class="w-full" data-v-16a7907f${_scopeId}>Qty</th><th class="" data-v-16a7907f${_scopeId}>Price</th></tr><tr data-v-16a7907f${_scopeId}><th data-v-16a7907f${_scopeId}><div class="h-[1px] w-full bg-[#FFFFFF] opacity-[8%]" data-v-16a7907f${_scopeId}></div></th><th data-v-16a7907f${_scopeId}><div class="h-[1px] w-full bg-[#FFFFFF] opacity-[8%]" data-v-16a7907f${_scopeId}></div></th><th data-v-16a7907f${_scopeId}><div class="h-[1px] w-full bg-[#FFFFFF] opacity-[8%]" data-v-16a7907f${_scopeId}></div></th></tr></thead><tbody data-v-16a7907f${_scopeId}><!--[-->`);
            ssrRenderList(unref(selectedCards), (row, index2) => {
              _push2(`<!--[--><tr class="text-left text-[12px] align-top" data-v-16a7907f${_scopeId}><td class="pt-[23px] align-top w-auto h-auto" data-v-16a7907f${_scopeId}><img class="w-[44px] h-[60px]"${ssrRenderAttr("src", row.pic)} data-v-16a7907f${_scopeId}></td><td class="pt-[23px] align-top" data-v-16a7907f${_scopeId}><p class="text-[12px] font-[500] leading-[18px]" data-v-16a7907f${_scopeId}>${ssrInterpolate(row.name)}</p><p class="text-[12px] text-[#ABBBC2] font-[400] leading-[15.6px]" data-v-16a7907f${_scopeId}> $ ${ssrInterpolate(numberFormat(row.price.toFixed(2)))}</p></td><td class="text-[12px] font-[500] leading-[18px] pt-[23px] align-top" data-v-16a7907f${_scopeId}> $ ${ssrInterpolate(numberFormat(row.totalPrice.toFixed(2)))}</td></tr><tr class="text-left text-[12px]" data-v-16a7907f${_scopeId}><td class="pt-[10px]" data-v-16a7907f${_scopeId}><button class="cursor-pointer w-[54px] h-[54px] text-[18px] leading-[32.4px] font-[500] bg-[#363946] hover:bg-[#4c4f5a] transition rounded-[8px] flex justify-center items-center" data-v-16a7907f${_scopeId}> - </button></td><td class="pt-[10px] px-[8px]" data-v-16a7907f${_scopeId}><button class="w-full h-[54px] text-[18px] leading-[32.4px] font-[500] bg-[#363946] rounded-[8px] flex justify-center items-center" data-v-16a7907f${_scopeId}>${ssrInterpolate(row.qty)}</button></td><td class="pt-[10px]" data-v-16a7907f${_scopeId}><button class="cursor-pointer w-[54px] h-[54px] text-[18px] leading-[32.4px] font-[500] bg-[#363946] hover:bg-[#4c4f5a] transition rounded-[8px] flex justify-center items-center" data-v-16a7907f${_scopeId}> + </button></td></tr><!--]-->`);
            });
            _push2(`<!--]--></tbody></table></div><div class="bg-[#1F1D2B] pr-[29px] pl-[24px] pb-[48px] w-full sm:w-1/3 h-auto mt-auto absolute bottom-0 right-0 z-[51]" data-v-16a7907f${_scopeId}><div class="pt-[24px] flex justify-between items-center" data-v-16a7907f${_scopeId}><p class="text-[12px] font-[400] leading-[15.6px] text-[#ABBBC2]" data-v-16a7907f${_scopeId}> Total card amount </p><p class="text-[16px] font-[500] leading-[22.4px]" data-v-16a7907f${_scopeId}>${ssrInterpolate(totalCard.value)}</p></div><div class="py-[16px] flex justify-between items-center" data-v-16a7907f${_scopeId}><p class="text-[12px] font-[400] leading-[15.6px] text-[#ABBBC2]" data-v-16a7907f${_scopeId}> Total price </p><p class="text-[16px] font-[500] leading-[22.4px]" data-v-16a7907f${_scopeId}> $ ${ssrInterpolate(numberFormat(totalPrice.value.toFixed(2)))}</p></div><button class="shadow-[0px_8px_24px_rgba(234,124,105,0.3)] cursor-pointer w-full h-[54px] text-[12px] leading-[21.6px] font-[500] bg-[#EA7C69] shadow-[0px_8px_24px_rgba(234,124,105,0.3)] rounded-[8px] flex justify-center items-center" data-v-16a7907f${_scopeId}> Continue to Payment </button></div></div>`);
          } else {
            return [
              createVNode("div", { class: "mt-[20px] flex flex-col justify-between h-full" }, [
                createVNode("div", { class: "overflow-y-auto max-h-[83vh]" }, [
                  createVNode("table", { class: "w-full" }, [
                    createVNode("thead", { class: "sticky top-0 z-10 bg-[#1F1D2B]" }, [
                      createVNode("tr", { class: "text-[14px] font-[400] leading-[19.6px] h-[25px] text-left" }, [
                        createVNode("th", { class: "" }, "Item"),
                        createVNode("th", { class: "w-full" }, "Qty"),
                        createVNode("th", { class: "" }, "Price")
                      ]),
                      createVNode("tr", null, [
                        createVNode("th", null, [
                          createVNode("div", { class: "h-[1px] w-full bg-[#FFFFFF] opacity-[8%]" })
                        ]),
                        createVNode("th", null, [
                          createVNode("div", { class: "h-[1px] w-full bg-[#FFFFFF] opacity-[8%]" })
                        ]),
                        createVNode("th", null, [
                          createVNode("div", { class: "h-[1px] w-full bg-[#FFFFFF] opacity-[8%]" })
                        ])
                      ])
                    ]),
                    createVNode("tbody", null, [
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(selectedCards), (row, index2) => {
                        return openBlock(), createBlock(Fragment, { key: index2 }, [
                          createVNode("tr", { class: "text-left text-[12px] align-top" }, [
                            createVNode("td", { class: "pt-[23px] align-top w-auto h-auto" }, [
                              createVNode("img", {
                                class: "w-[44px] h-[60px]",
                                src: row.pic
                              }, null, 8, ["src"])
                            ]),
                            createVNode("td", { class: "pt-[23px] align-top" }, [
                              createVNode("p", { class: "text-[12px] font-[500] leading-[18px]" }, toDisplayString(row.name), 1),
                              createVNode("p", { class: "text-[12px] text-[#ABBBC2] font-[400] leading-[15.6px]" }, " $ " + toDisplayString(numberFormat(row.price.toFixed(2))), 1)
                            ]),
                            createVNode("td", { class: "text-[12px] font-[500] leading-[18px] pt-[23px] align-top" }, " $ " + toDisplayString(numberFormat(row.totalPrice.toFixed(2))), 1)
                          ]),
                          createVNode("tr", { class: "text-left text-[12px]" }, [
                            createVNode("td", { class: "pt-[10px]" }, [
                              createVNode("button", {
                                onClick: ($event) => minusQty(row.id),
                                class: "cursor-pointer w-[54px] h-[54px] text-[18px] leading-[32.4px] font-[500] bg-[#363946] hover:bg-[#4c4f5a] transition rounded-[8px] flex justify-center items-center"
                              }, " - ", 8, ["onClick"])
                            ]),
                            createVNode("td", { class: "pt-[10px] px-[8px]" }, [
                              createVNode("button", { class: "w-full h-[54px] text-[18px] leading-[32.4px] font-[500] bg-[#363946] rounded-[8px] flex justify-center items-center" }, toDisplayString(row.qty), 1)
                            ]),
                            createVNode("td", { class: "pt-[10px]" }, [
                              createVNode("button", {
                                onClick: ($event) => plusQty(row.id),
                                class: "cursor-pointer w-[54px] h-[54px] text-[18px] leading-[32.4px] font-[500] bg-[#363946] hover:bg-[#4c4f5a] transition rounded-[8px] flex justify-center items-center"
                              }, " + ", 8, ["onClick"])
                            ])
                          ])
                        ], 64);
                      }), 128))
                    ])
                  ])
                ]),
                createVNode("div", { class: "bg-[#1F1D2B] pr-[29px] pl-[24px] pb-[48px] w-full sm:w-1/3 h-auto mt-auto absolute bottom-0 right-0 z-[51]" }, [
                  createVNode("div", { class: "pt-[24px] flex justify-between items-center" }, [
                    createVNode("p", { class: "text-[12px] font-[400] leading-[15.6px] text-[#ABBBC2]" }, " Total card amount "),
                    createVNode("p", { class: "text-[16px] font-[500] leading-[22.4px]" }, toDisplayString(totalCard.value), 1)
                  ]),
                  createVNode("div", { class: "py-[16px] flex justify-between items-center" }, [
                    createVNode("p", { class: "text-[12px] font-[400] leading-[15.6px] text-[#ABBBC2]" }, " Total price "),
                    createVNode("p", { class: "text-[16px] font-[500] leading-[22.4px]" }, " $ " + toDisplayString(numberFormat(totalPrice.value.toFixed(2))), 1)
                  ]),
                  createVNode("button", { class: "shadow-[0px_8px_24px_rgba(234,124,105,0.3)] cursor-pointer w-full h-[54px] text-[12px] leading-[21.6px] font-[500] bg-[#EA7C69] shadow-[0px_8px_24px_rgba(234,124,105,0.3)] rounded-[8px] flex justify-center items-center" }, " Continue to Payment ")
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="grid grid-cols-[auto_1fr_auto] md:grid-cols-[auto_1fr_auto_auto] items-center md:gap-4" data-v-16a7907f><h1 class="col-span-2 justify-self-start text-[26px] leading-[36.4px] my-[30px] cursor-pointer order-1 md:col-span-1" data-v-16a7907f> Pokemon market </h1><div class="col-span-3 mb-[24px] md:mb-0 md:col-span-1 md:flex order-3 md:gap-4 md:justify-end md:order-2" data-v-16a7907f>`);
      _push(ssrRenderComponent(_component_CustomSearchInput, {
        "onUpdate:searchText": ($event) => nameValue.value = $event,
        onChange: ($event) => select(),
        placeholder: "Search by Name"
      }, null, _parent));
      _push(`</div><div class="justify-self-end md:col-span-1 md:flex md:justify-end w-fit order-2 md:order-3" data-v-16a7907f><div class="bg-[#EA7C69] shadow-[0px_8px_24px_rgba(234,124,105,0.3)] p-[8px] rounded-[8px] cursor-pointer" data-v-16a7907f><img${ssrRenderAttr("src", _imports_0)} alt="" data-v-16a7907f></div></div></div><div class="h-[1px] w-full bg-[#FFFFFF] opacity-[8%]" data-v-16a7907f></div><div class="grid grid-cols-[auto_1fr] max-[500px]:grid-cols-1 mb-[24px] items-center" data-v-16a7907f><h1 class="text-[18px] leading-[25.2px] my-[24px] w-fit" data-v-16a7907f>Choose Card</h1><div class="max-[500px]:justify-start flex justify-self-end justify-end items-center gap-[16px] w-full" data-v-16a7907f>`);
      _push(ssrRenderComponent(_component_PrimevueDropdown, {
        onChange: ($event) => (setValue.value = $event.value.name, select()),
        options: unref(setOptions),
        placeholder: "Set"
      }, null, _parent));
      _push(ssrRenderComponent(_component_PrimevueDropdown, {
        onChange: ($event) => (rarityValue.value = $event.value.name, select()),
        options: unref(rarityOptions),
        placeholder: "Rarity"
      }, null, _parent));
      _push(ssrRenderComponent(_component_PrimevueDropdown, {
        onChange: ($event) => (typeValue.value = $event.value.name, select()),
        options: unref(typeOptions),
        placeholder: "Type"
      }, null, _parent));
      _push(`</div></div><div class="flex flex-wrap gap-x-[16px] gap-y-[24px] justify-start h-[280px] max-[407px]:w-full max-[407px]:justify-center max-[598px]:justify-center" data-v-16a7907f>`);
      if (unref(countData) === 0) {
        _push(`<div class="" data-v-16a7907f>Data not found</div>`);
      } else if (unref(isLoading)) {
        _push(`<div class="" data-v-16a7907f>Loading</div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(countData) !== 0) {
        _push(`<!--[-->`);
        ssrRenderList(unref(cards), (card, index2) => {
          var _a;
          _push(`<div class="max-[407px]:w-full" data-v-16a7907f><img class="mt-0 w-[102px] h-[142px] rounded-[5px] z-10 justify-self-center max-[407px]:h-auto max-[407px]:max-w-[194.73px] max-[407px]:w-full"${ssrRenderAttr("src", card.images.small)} alt="" data-v-16a7907f><div class="relative flex flex-col items-center bg-[#1F1D2B] gap-[8px] w-fit rounded-b-[16px] max-[407px]:w-full max-[407px]:px-[16px]" data-v-16a7907f><div class="h-[40.42px] absolute top-[-40.42px] -z-1 w-full bg-[#1F1D2B] rounded-t-[16px]" data-v-16a7907f></div><span class="font-[500] text-[12px] leading-[18px] pt-[14px] max-[407px]:text-[14px] max-[407px]:leading-[21px]" data-v-16a7907f>${ssrInterpolate(card.name)}</span><div class="flex gap-[8px] text-[#ABBBC2] text-[12px] font-[400] leading-[15.6px] max-[407px]:text-[14px] max-[407px]:leading-[18.2px]" data-v-16a7907f><span class="" data-v-16a7907f> $ ${ssrInterpolate(numberFormat((_a = card.cardmarket) == null ? void 0 : _a.prices.averageSellPrice))}</span><span class="w-[4px] h-[4px] bg-[#474651] rounded-full justify-self-center mt-[8px]" data-v-16a7907f></span><span data-v-16a7907f>${ssrInterpolate(card.stock)} Cards</span></div><button class="${ssrRenderClass([{
            "bg-[#312f3c] hover:bg-[#4c4f5a] cursor-pointer": card.stock > 0,
            "bg-[#2E303E] cursor-not-allowed text-white opacity-50": card.stock <= 0
          }, "flex gap-[8px] items-center text-[12px] font-[500] leading-[21.6px] transition px-[27px] py-[8px] rounded-[8px] mx-[16px] mb-[16px] max-[407px]:text-[14px] max-[407px]:leading-[25.2px] max-[407px]:w-full max-[407px]:justify-center"])}" data-v-16a7907f><img class="w-[14px] h-[14px]"${ssrRenderAttr("src", _imports_0)} alt="" data-v-16a7907f> Add to cart </button></div></div>`);
        });
        _push(`<!--]-->`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="w-full flex justify-center pb-[24px]" data-v-16a7907f>`);
      _push(ssrRenderComponent(_component_CustomPaginator, {
        style: !unref(isLoading) && unref(countData) !== 0 ? null : { display: "none" },
        "onUpdate:currentPage": ($event) => (currentPage.value = $event, select()),
        currentPage: unref(currentPage),
        totalPages: unref(totalPage)
      }, null, _parent));
      _push(`</div></div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-16a7907f"]]);

export { index as default };
//# sourceMappingURL=index-CldT-FmF.mjs.map
