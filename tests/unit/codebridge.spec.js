import { shallowMount } from "@vue/test-utils";
import CodebridgeDonuts from "@/components/CodebridgeDonuts";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";

let mock = new MockAdapter(axios);

const people = [{ id: 1, name: "Roger" }, { id: 2, name: "Brad" }];

describe("CodebridgeDonuts component", () => {
  let wrapper;

  beforeEach(() => {
    mock.onGet("http://localhost:3000/people").reply(200, people);

    wrapper = shallowMount(CodebridgeDonuts, {
      propsData: {
        total: 4
      }
    });
  });

  it("should create", () => {
    expect(wrapper.exists()).toBe(true);
  });

  it("should have some donuts", () => {
    const actual = wrapper.find("#total").text();
    expect(actual).toBe("4");
  });

  it("should have some people who can eat the donuts", () => {
    const actual = wrapper.findAll("#people li").length;
    expect(actual).toBe(2);
  });

  it("should not allow for negative donuts", () => {
    wrapper = shallowMount(CodebridgeDonuts, {
      propsData: {
        total: -2,
        people: people
      }
    });
    const actual = wrapper.find("#total").text();
    expect(actual).toBe("0");
  });
});
