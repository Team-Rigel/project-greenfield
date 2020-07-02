import React from "react";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./Home";
import Product from "./Product";
import Questions from './questions/Questions'
import ProductInfo from "./overviewComponents/productInfo";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/productinfo/:id">
            <ProductInfo />
          </Route>
          <Route path="/product/:id">
            <Product />
          </Route>
          <Route path="/questions">
            <Questions />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

/*

All routes will be added to this router/switch statement

TODO:
'/product/:id' will have to trigger a request to get product info and update state accordingly, thus rendering the new page with the new info

*/