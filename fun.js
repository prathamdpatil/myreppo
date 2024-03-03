import React from "react";
import ReactDOM from "react-dom";
const hj=React.createElement("div",{id:"parent"},React.createElement("div",{id:"child"},React.createElement("h1",{},"hii pratham")));

const rj=ReactDOM.createRoot(document.getElementById("root"));

rj.render(hj);