import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// console.log("this is elem", document.getElementById("root"));

// const elem = document.getElementById("root");
// console.log({ elem });

// const el = React.createElement("div", {}, "asdfasdfsadf");
// console.log({ el });

const root = ReactDOM.createRoot(document.getElementById("root"));
// console.log({ root });

// const element = <div>1stelemt</div>;

// const list = (
//   <ul>
//     <li>1</li>
//     <li>2</li>
//     <li>4</li>
//     <li>5</li>
//   </ul>
// );

// function Example() {
//   return <span>HELLO I am span</span>;
// }
// function NewEx(params) {
//   return <h1>hhh</h1>;
// }

// const SecondEx = () => {
//   return <div> div </div>;
// };

root.render(
  // <div>
  //   <Example />
  //   <NewEx />
  //   <SecondEx />
  // </div>
  <App />
);
