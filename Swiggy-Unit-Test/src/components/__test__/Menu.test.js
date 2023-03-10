import "@testing-library/jest-dom";
import { render, waitFor, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { StaticRouter } from "react-router-dom/server";
import store from "../../store/store";
import { MENU_DATA } from "../../mocks/data";
import Header from "../Header";
import Body from "../Body";
import RestaurantMenu from "../RestaurantMenu";

global.fetch = jest.fn(() => {
  //"fetch" is a function that return a promise
  return Promise.resolve({
    // josn is a function that return a promise
    json: () => {
      return Promise.resolve(MENU_DATA);
    },
  });
});

test("Add items to cart", async () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
        <RestaurantMenu />
      </Provider>
    </StaticRouter>
  );

  await waitFor(() => body.getByTestId("menu"));

  const addBtn = body.getAllByTestId("addBtn");

  fireEvent.click(addBtn[0]);

  const cart = body.getByTestId("cart");

  expect(cart.innerHTML).toBe("Cart - 1 items");

});
