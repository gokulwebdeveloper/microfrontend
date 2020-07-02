import React from "react";
import ReactDOM from "react-dom";
import Form from "./js/components/Form";

const wrapper = document.getElementById("container2");
wrapper ? ReactDOM.render(<Form />, wrapper) : false;