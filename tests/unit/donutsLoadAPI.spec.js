import { shallowMount } from "@vue/test-utils";
import DonutsLoadAPIComponent from "@/components/DonutsLoadAPIComponent";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";

let mock = new MockAdapter(axios);

describe("DonutsLoadAPI", () => {
  let wrapper;

  mock.onGet("http://localhost:3000/people").reply(200, [
    {
      id: 1,
      name: "Brad"
    },
    {
      id: 2,
      name: "Roger"
    }
  ]);

  beforeEach(() => {
    wrapper = shallowMount(DonutsLoadAPIComponent, {
      propsData: {
        donutsTotal: 5
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
