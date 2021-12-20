import React from "react";
import ReactDOM, { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Expenses from "./route_practice/Expenses";
import Invoices from "./route_practice/Invoices";
import Invoice from "./route_practice/Invoice";
import Data from "./route_practice/Data";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
