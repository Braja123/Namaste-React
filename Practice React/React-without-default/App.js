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

const container = React.createElement('div', {
  id: "container"
},
// this is how we pass childrens inside element
[heading, heading2]
)
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);