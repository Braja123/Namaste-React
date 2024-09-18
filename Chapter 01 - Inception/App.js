/*
Convert to React Element:

<div id="parent">
  <div id="child">
    <h1>I am from H1 tag</h1>
    <h1>I am from H1 tag Siblings</h1>
  </div>
</div>
*/
// React.createElement("Tag Name", {Attributes}, Children)
const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I am from H1 tag"),
    React.createElement("h1", {}, "I am from H1 tag Siblings"),
  ])
);

// - React.createElement(Object) => HTML(Browser Understand)
// - React.createElement is an "Object" while it is rendering into the DOM it converts itself into the HTML and puts up into the DOM

const heading = React.createElement(
  "h1",
  {
    id: "head1",
  },
  "Heading 1"
);
const heading2 = React.createElement(
  "h2",
  {
    id: "head2",
  },
  "Heading 2"
);

const container = React.createElement(
  "div",
  {
    id: "container",
  },
  // this is how we pass childrens inside element
  [heading, heading2]
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);
