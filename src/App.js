import "./App.css";
import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import { HomePage } from "./HomePage";
import { About } from "./About";
import { AppBar } from "./AppBar";
import { Footer } from "./Footer";
import { Login } from "./Login";
import { Signup } from "./SignUp";
import { createContext, useEffect, useState } from "react";
import { UserContext } from "./UserContext";
import { EquipmentsList } from "./EquipmentList";
import { API } from "./global.js";
import { CardTravelOutlined } from "@mui/icons-material";
import { Cart } from "./Cart";

export default function App() {
  const [log, setLogin] = useState("");
  const [cart, setCart] = useState([]);
  const [logOut, setLogOut] = useState("");

  useEffect(() => {
    fetch(`${API}/users/logindb`)
      .then((data) => data.json())
      .then((data) => setLogin(data[0].userFromDB));
  }, []);

  const updateLogin = ({ data, cart, action }) => {
    fetch(`${API}/users/logindb?type=${action}`, {
      method: "PUT",
      body: JSON.stringify(data, cart),
      headers: { "Content-Type": "application/json" },
    })
      .then((data) => data.json())
      .then((cart) => console.log(cart))
      .then((user) => setLogin(user[0].userFromDB));
  };

  console.log(log);

  return (
    <div className="App">
      <UserContext.Provider value={[log, cart, updateLogin]}>
        <section className="router-container">
          <Switch>
            <Route exact path="/">
              <HomePage setLogin={setLogin} />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/login">
              <Login setLogin={setLogin} />
            </Route>
            <Route path="/signup">
              <Signup />
            </Route>
            <Route path="/products">
              <Products />
            </Route>
            <Route path="/logindb">
              <Cart setLogin={setLogin} />
            </Route>
            <Route exact path="**">
              Not found
            </Route>
          </Switch>
        </section>
      </UserContext.Provider>
    </div>
  );
}

function Products() {
  return (
    <div className="productspage-container">
      <AppBar />
      <div className="products-page">
        <EquipmentsList />
      </div>
      <Footer />
    </div>
  );
}
