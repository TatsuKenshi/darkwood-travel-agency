import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./pages/about/About";
import Checkout from "./pages/checkout/Checkout";
import Tours from "./pages/tours/Tours";
import Tour from "./pages/tour/Tour";
// import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
  <BrowserRouter>
    <Navbar></Navbar>
    <Routes>
      <Route path="/" element={<App />}>
        {/* <Route path="/expenses" element={<Expenses />} />
        <Route path="/invoices" element={<Invoices />}>
          <Route
            index
            element={
              <main style={{ padding: "1rem" }}>
                <p>Select an invoice</p>
              </main>
            }
          />
          <Route path=":invoiceId" element={<Invoice />} />
        </Route>
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's Nothing Here!</p>
            </main>
          }
        /> */}
      </Route>
      <Route path="/about" element={<About />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/tours" element={<Tours />}>
        <Route path=":tourId" element={<Tour />} />
      </Route>
      <Route
        path="*"
        element={
          <main style={{ padding: "1rem" }}>
            <p>There's Nothing Here!</p>
          </main>
        }
      />
    </Routes>
    <Footer></Footer>
  </BrowserRouter>,
  document.getElementById("root")
);
