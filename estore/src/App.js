import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductList from "./components/ProductList";
import AddProduct from "./components/AddProduct";
import { Route, Redirect, Switch, withRouter } from "react-router-dom";
import NavBar from "./components/NavBar";
import ProductDetail from "./components/ProductDetail";
import {
  getProductsActionCreator,
  getProductsActionAsyncCreator
} from "./actionCreators/product";
import { connect } from "react-redux";
import OfferList from "./components/OfferList";
import TryCatch from "./components/TryCatch";

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    //getProductsActionAsyncCreator()

    function getProductsFromApi(dispatch) {
      fetch("http://localhost:4000/products")
        .then(r => r.json())
        .then(products => dispatch(getProductsActionCreator(products)));
    }

    this.props.dispatch(getProductsFromApi);
  }

  render() {
    return (
      <div>
        <Header />
        <NavBar />
        <button onClick={() => {}}>Log me in</button>
        <Switch>
          <Route
            exact={true}
            path="/products"
            render={props => (
              <TryCatch>
                <ProductList {...props} prds={this.props.products} />
              </TryCatch>
            )}
          />
          <Route
            path="/products/new"
            render={props => {
              if (this.props.isLoggedIn) {
                return <AddProduct {...props} />;
              } else {
                return <Redirect to="/products" />;
              }
            }}
          />
          <Route path="/products/:id" component={ProductDetail} />
          <Route path="/offers" component={OfferList} />
          <Route render={() => <h1>Page not found</h1>} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

function mapStateToProps(wholeApplicationStateFromRedux) {
  return {
    products: wholeApplicationStateFromRedux.productState.products,
    isLoggedIn: wholeApplicationStateFromRedux.productState.isLoggedIn
  };
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch
  };
}

const connectedComponent = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default withRouter(connectedComponent(App));
