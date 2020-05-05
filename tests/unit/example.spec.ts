import { expect } from "chai";
import { shallowMount } from "@vue/test-utils";
import Actions from "@/components/home/Actions.vue";

describe("Actions.vue", () => {
  it("renders props.msg when passed", () => {
    const msg = "new message";
    const wrapper = shallowMount(Actions, {
      propsData: { msg }
    });
    expect(wrapper.text()).to.include(msg);
  });
});
