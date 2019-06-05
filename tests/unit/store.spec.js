import { actions, mutations } from "@/store";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import flushPromises from "flush-promises";

let mock = new MockAdapter(axios);

const people = [
  {
    id: 1,
    name: "Brad"
  },
  {
    id: 2,
    name: "Roger"
  }
];

const commit = jest.fn();

describe("actions", () => {
  const { loadPeople } = actions;
  mock.onGet("http://localhost:3000/people").reply(200, people);

  it("loadPeople", async () => {
    loadPeople({ commit });
    await flushPromises();
    expect(commit).toHaveBeenCalledWith("UPDATE_PEOPLE", people);
  });
});

describe("mutations", () => {
  const { UPDATE_PEOPLE } = mutations;
  let state = {
    people: []
  };
  it("UPDATE_PEOPLE", () => {
    UPDATE_PEOPLE(state, people);
    expect(state.people).toBe([people]);
  });
});
