import { useHistory } from "react-router-dom";

export function AppBar() {
  const history = useHistory();
  return (
    <div className="appbar-container">
      <div className="logo-container">
        <img className="logo" src="logo.png" alt="logo" />
      </div>
      <div className="appbar-items">
        <ul onClick={() => history.push("/")}>Home</ul>
        <ul onClick={() => history.push("/about")}>About</ul>
        <ul onClick={() => history.push("/products")}>Products</ul>
      </div>
      <div className="log-items">
        <ul>Cart</ul>
        <ul>Login</ul>
      </div>
    </div>
  );
}
