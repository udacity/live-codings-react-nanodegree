import React from "react";
import { shallow, mount } from "enzyme";
import App from "./App";

it("renders without crashing", () => {
  expect(shallow(<App />));
});

it("adiciona uma tarefa", () => {
  const test = mount(<App />);
  expect(test.state().items.length).toBe(0);
  test.find("form input").node.value = "Nova tarefa";
  test.find("form button").node.click();
  expect(test.state().items.length).toBe(1);
});

it("atualiza uma tarefa para done", () => {
  const test = mount(<App />);

  // adiciona uma tarefa
  expect(test.state().items.length).toBe(0);
  test.find("form input").node.value = "Nova tarefa";
  test.find("form button").node.click();
  expect(test.state().items[0].status).toBe("To Do");

  // atualiza a mesma tarefa para done
  test
    .find(".list-items li input")
    .simulate("change", { target: { checked: true } });
  expect(test.state().items[0].status).toBe("Done");
});

it("atualiza uma tarefa para done e to do", () => {
  const test = mount(<App />);

  // adiciona uma tarefa
  expect(test.state().items.length).toBe(0);
  test.find("form input").node.value = "Nova tarefa";
  test.find("form button").node.click();
  expect(test.state().items[0].status).toBe("To Do");

  // atualiza a mesma tarefa para done
  test
    .find(".list-items li input")
    .simulate("change", { target: { checked: true } });
  expect(test.state().items[0].status).toBe("Done");

  // atualiza a mesma tarefa para to do
  test
    .find(".list-items li input")
    .simulate("change", { target: { checked: false } });
  expect(test.state().items[0].status).toBe("To Do");
});
