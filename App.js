// create heading using react
const heading = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { key: "child", id: "child" }, [
    React.createElement("h1", { key: "h1" }, "I'm h1 tag"),
    React.createElement("h2", { key: "h2" }, "I'm h2 tag"),
  ]),

  React.createElement("div", { key: "child2", id: "child2" }, [
    React.createElement("h1", { key: "h1" }, "I'm h1 tag"),
    React.createElement("h2", { key: "h2" }, "I'm h2 tag"),
  ]),
]);

// create root using reactDOM
const root = ReactDOM.createRoot(document.getElementById("root"));

// render the heading
root.render(heading);
