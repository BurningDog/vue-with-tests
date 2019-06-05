import { shallowMount } from "@vue/test-utils";
import DonutsComponent from "@/components/DonutsComponent";

describe("Donuts", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(DonutsComponent);
  });

  it("should create", () => {
    expect(wrapper).toBeDefined();
  });

  it("should have some donuts", () => {
    const actual = wrapper.find("#total").text();
    expect(actual).toContain("1");
  });

  it("should be some people", () => {
    const actual = wrapper.findAll("#people li").length;
    expect(actual).toBe(2);
  });
});
