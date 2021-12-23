import { Outlet, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h2>Bookkeeper!</h2>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem"
        }}
      >
        <Link to="/invoices">Invoices</Link> |{" "}
        <Link to="/expenses">Expenses</Link>
      </nav>
      <Outlet></Outlet>
    </div>
  );
}

export default App;
