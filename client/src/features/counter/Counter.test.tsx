import React           from "react";
import {render}        from "@testing-library/react";
import { Counter }     from "./Counter";
import { createStore } from "redux";
import { Provider }    from "react-redux";
import { store } from "../../store/store";


describe("Counter", () => {
  it("should render", () => {
    render(<Provider store={store}><Counter/></Provider>)
  });
});
