const heading = React.createElement("h1", {
  id: "das",

}, "ahsdkjhas")

React.createElement('div', {className: "hgas"}, [heading]);

const root = ReactDOM.createRoot(document.getElementById("root"))

import {createBrowserRouter, RouterProvider} from "react-router-dom";





useEffect(() => {
  let timer = setTimeout(() => {
    console.log("asjdklas");
  }, 5000);

  return () => {
    clearTimeout(timer);
  }
})