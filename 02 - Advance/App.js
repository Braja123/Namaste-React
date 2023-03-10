import React, {createElement as ce} from "react";
import ReactDOM from "react-dom/client";

// const heading = ce(
//   'h1',
//   {id: 'title', key: "1"},
//   "Heading 1"
// )

// console.log(heading);

// const heading2 = ce(
//   'h2',
//   {id: 'title', key: "2"},
//   'Heading2'
// )

// // If we have create a div and inside that we have 2 headings
// const container = ce(
//   'div',
//   {id: 'container'},
//   [heading, heading2]
// )

// const HeaderComponent = () => (
//   <div>
//     <h1>Namaste React Functional Component</h1>
//     <h2>This is a h2 tag</h2>
//   </div>
// )

// This is known as react element
// const heading = (
//   <h1 id="title" key="h2">Namaste react</h1>
// )

const Title = () => (
  <h1 id="title" key="h2">Namaste react</h1>
)

// can write with return statement
const HeaderComponent = () => {
  return (
    <div>
      <h1>Namaste React Functional Component</h1>
      <h2>This is a h2 tag</h2>
      {console.log("hello sanu")}
      {/* Any piece of JS code will work here */}
      {1+2}
      {/* {Title()} */}
      <Title />
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeaderComponent />);

