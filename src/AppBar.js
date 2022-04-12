import { useHistory } from "react-router-dom";
import { useContext, useState } from "react";
import { UserContext } from "./UserContext";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "fit-content",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
};

export function AppBar({ log }) {
  console.log(log);
  // console.log(logOut);

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
        <ul
          onClick={() => {
            history.push("/login");
          }}
        >
          {log}+
        </ul>
        {/* {logOut ? (
          <ul
            onClick={() => {
              setLogOut(false);
              // history.push("/login");
            }}
          >
            {log}+
          </ul>
        ) : (
          <ul
            onClick={() => {
              setLogOut(true);
              history.push("/login");
            }}
          >
            Login+
          </ul>
        )} */}
      </div>
    </div>
  );
}
