import React from "react";
import ProductList from "../components/ProductList";
import Cart from "../components/Cart";
import Notification from "../components/Notification";
import "./styles/bootstrap.min.css";
import "./styles/style.css";

const App: React.FC = () => (
  <div className="container">
    <div className="page-header">
      <h1>Shopping Cart</h1>
    </div>
    <div className="row">
      <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
        <div className="panel panel-primary">
          <div className="panel-heading">
            <h1 className="panel-title">List Products</h1>
          </div>
          <div className="panel-body" id="list-product">
            <ProductList />
          </div>
        </div>
      </div>
      <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
        <div className="panel panel-danger">
          <div className="panel-heading">
            <h1 className="panel-title">Your Cart</h1>
          </div>
          <div className="panel-body">
            <Cart />
          </div>
        </div>
      </div>
    </div>
    <Notification />
  </div>
);

export default App;
