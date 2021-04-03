import React        from 'react'
import {render, screen}     from '@testing-library/react'
import { AppAlert } from "./AppAlert";
import { Provider } from "react-redux";
import { store }    from "../../../store/store";


const renderWithRedux = (
  component,
  store
) => {
  return {
    ...render(<Provider store={store}>{component}</Provider>),
    store,
  };
};

describe("AppAlert", () => {
  it("should render", () => {
    renderWithRedux(<AppAlert/>, store)
  })

  it("shouldn't show anything with initial state", () => {
    renderWithRedux(<AppAlert/>, store)

    expect(screen.queryByText(/Error:/i)).toBeNull()
  })
})
