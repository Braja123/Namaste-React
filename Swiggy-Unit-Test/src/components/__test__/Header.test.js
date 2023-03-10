import { render } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import store from "../../store/store";
import { StaticRouter } from "react-router-dom/server";

test("Logo should load on rendering header", () => {
  // render header
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );

  // Check if logo is loaded
  const logo = header.getAllByTestId("logo");

  // console.log(logo[0]);

  expect(logo[0].src).toBe("http://localhost/dummy.png");
});

test("Online status should be green", () => {
  // render header
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );

  // Check if online or not
  const onlineStatus = header.getByTestId("online-status"); //here we can use "getAllByTestId" also but if we will use then in "expect" we need to add "arr[0]" to get the first object.

  console.log(onlineStatus);

  expect(onlineStatus.innerHTML).toBe("😁");

  // Check if online or not
});


test("Cart should have 0 items on rendering header", () => {
  // render header
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );

  // Check if logo is loaded
  const cart = header.getByTestId("cart");

  // console.log(logo[0]);

  expect(cart.innerHTML).toBe("Cart - 0 items");
});