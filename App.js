import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => {
  return <h1>Namste React Title</h1>;
};

const HeadingComponent = () => {
  return (
    <div className="container">
      <Title />
      <h1>Namste React Functional Component</h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
