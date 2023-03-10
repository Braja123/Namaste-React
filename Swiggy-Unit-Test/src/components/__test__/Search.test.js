import "@testing-library/jest-dom";
import { render, waitFor, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { StaticRouter } from "react-router-dom/server";
import store from "../../store/store";
import Body from "../Body";
import { RESTAURANT_DATA } from "../../mocks/data";

global.fetch = jest.fn(() => {
  //"fetch" is a function that return a promise
  return Promise.resolve({
    // josn is a function that return a promise
    json: () => {
      return Promise.resolve(RESTAURANT_DATA);
    },
  });
});

test("Shimmer should load on Homepage", () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );
  // console.log(body);
  const shimmer = body.getByTestId("shimmer");
  console.log(shimmer);
  // expect(shimmer.children).toBeInTheDocument();  //"toBeInTheDocument" came from "@testing-library/jest-dom" library
  expect(shimmer.children.length).toBe(10);
});

test("Restaurants should load on Homepage", async () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );

  await waitFor(() => body.getByTestId("search-btn"));

  const resList = body.getByTestId("res-list");

  expect(resList.children.length).toBe(15);
});

test("Search for string(food) on Homepage", async () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );
  await waitFor(() => body.getByTestId("search-btn"));

  const input = body.getByTestId("search-input");

  fireEvent.change(input, {
    // "target" is the (e.target.value) in the component
    target: {
      value: "lucky",
    },
  });

  const searchBtn = body.getByTestId("search-btn");

  fireEvent.click(searchBtn);

  const resList = body.getByTestId("res-list");

  expect(resList.children.length).toBe(2);
});
