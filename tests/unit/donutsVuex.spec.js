import { shallowMount, createLocalVue } from "@vue/test-utils";
import DonutsVuexComponent from "@/components/DonutsVuexComponent";
import Vuex from "vuex";

const localVue = createLocalVue();

localVue.use(Vuex);

describe("DonutsVuex", () => {
  let wrapper;
  let actions;

  beforeEach(() => {
    actions = {
      loadPeople: jest.fn()
    };
    let store = new Vuex.Store({
      state: {
        donutsTotal: 7,
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
      },
      actions
    });

    wrapper = shallowMount(DonutsVuexComponent, { localVue, store });
  });

  it("should create", () => {
    expect(wrapper).toBeDefined();
  });

  it("should have some donuts", () => {
    const actual = wrapper.find("#total").text();
    expect(actual).toContain("7");
  });

  it("should be some people", () => {
    const actual = wrapper.findAll("#people li").length;
    expect(actual).toBe(2);
  });

  it("should dispatch an action", () => {
    expect(actions.loadPeople).toHaveBeenCalled();
  });
});
