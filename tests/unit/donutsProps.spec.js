import { shallowMount } from "@vue/test-utils";
import DonutsPropsComponent from "@/components/DonutsPropsComponent";

describe("DonutsProps", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(DonutsPropsComponent, {
      propsData: {
        donutsTotal: 5,
        people: [
          {
            id: 1,
            name: "Brad"
          },
          {
            id: 2,
            name: "Roger"
          }
        ]
      }
    });
  });

  it("should create", () => {
    expect(wrapper).toBeDefined();
  });

  it("should have some donuts", () => {
    const actual = wrapper.find("#total").text();
    expect(actual).toContain("5");
  });

  it("should be some people", () => {
    const actual = wrapper.findAll("#people li").length;
    expect(actual).toBe(2);
  });
});
