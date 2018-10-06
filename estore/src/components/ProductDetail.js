import React, { Component } from "react";
import {
  getProductActionCreator,
  getProductSuccessActionCreator,
  getProductFailureActionCreator
} from "../actionCreators/product";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class ProductDetail extends Component {
  constructor(props) {
    super(props);
    this.goBack = this.goBack.bind(this);
  }

  componentDidMount() {
    function getProductFromApi(dispatch) {
      dispatch(getProductActionCreator());
      fetch(`http://localhost:4000/products/${this.props.match.params.id}`)
        .then(r => r.json())
        .then(product => dispatch(getProductSuccessActionCreator(product)))
        .catch(error => dispatch(getProductFailureActionCreator(error)));
    }

    this.props.dispatch(getProductFromApi.bind(this));
  }
  goBack() {
    //imperative
    this.props.history.go(-1);
  }

  goToAddProduct = () => {
    this.props.history.push("/products/new");
  };

  goForward = () => {
    this.props.history.go(1);
  };

  render() {
    return (
      <div>
        <h1>Product Detail - {this.props.match.params.id}</h1>
        {this.props.isLoading ? <p>Please wait...</p> : null}
        {JSON.stringify(this.props.product)}
        <button onClick={this.goBack}>Back</button>
        <button onClick={this.goToAddProduct}>Add New</button>
        <button onClick={this.goForward}>Forward</button>
      </div>
    );
  }
}

function mapStateToProps(appState) {
  return {
    isLoading: appState.productState.isLoading,
    product: appState.productState.product
  };
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch
  };
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(ProductDetail)
);
