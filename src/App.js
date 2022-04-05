import "./App.css";
import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import { HomePage } from "./HomePage";
import { About } from "./About";
import { AppBar } from "./AppBar";
import { Footer } from "./Footer";

export default function App() {
  return (
    <div className="App">
      <section className="router-container">
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/products">
            <Products />
          </Route>
          <Route exact path="**">
            Not found
          </Route>
        </Switch>
      </section>
    </div>
  );
}

function Products() {
  return (
    <div className="productspage-container">
      <AppBar />
      <Footer />
    </div>
  );
}
