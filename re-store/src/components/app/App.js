import React from "react";
import { Route, Switch } from "./react-router-dom";
import ShopHeader from "../shop-header";
import { HomePage, CartPage } from "../pages";
import "./App.css";

const App = () => {
  return (
    // Чтобы один из внутренних Роутеров срабатывал
    <main role="main" className="container">
      <ShopHeader numItems={5} total={210} />
      <Switch>
        {/* Ссылка на HomePage */}
        <Route
          path="/"
          component={HomePage}
          // Чтобы только точно совпадение с прямым слешом совпадало
          // Для переноса на HomePage
          exact
        />
        <Route path="/cart" component={CartPage} />
      </Switch>
    </main>
  );
};

export default App;
