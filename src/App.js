import React, { useState } from "react";
import Header from "./components/Header";
import { Redirect, Switch, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Products from "./components/Products";
import { DataProvider } from "./components/DataProvider";
import Details from "./components/Details/Details";
import Cart from "./components/Cart";

function App() {

  const [search, setSearch] = useState("");

  return (
    <DataProvider>
      <>
        <Switch>
          <Route>

            <Header setSearch={setSearch} />
            <Switch>
              {/* <Route exact path="/" component={Home} /> */}
              <Route exact path="/" component={() => <Products search={search} />} />
              <Route exact path="/products/:id" component={Details} />
              <Route exact path="/cart" component={Cart} />
              
              <Products />
            </Switch>
            <Footer />
            
          </Route>
        </Switch>
      </>
    </DataProvider>
  );
}

export default App;
