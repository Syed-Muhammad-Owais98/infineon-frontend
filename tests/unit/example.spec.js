import { shallowMount } from "@vue/test-utils";
import Vue from "vue";
import ElementUI from "element-ui";
import Home from "@/views/Home.vue";
import store from "@/store";

Vue.use(ElementUI);

describe("Home.vue", () => {
  it("renders props.msg when passed", () => {
    const wrapper = shallowMount(Home, {
      mocks: {
        $store: store
      }
    });
    expect(wrapper).toMatchSnapshot();
  });
});
