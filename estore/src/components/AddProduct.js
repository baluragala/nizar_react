import React, { Component } from "react";
import "./AddProduct.css";
import axios from "axios";
import { connect } from "react-redux";
import {
  changeTitleActionCreator,
  changePriceActionCreator,
  changeCategoryActionCreator,
  addProductActionCreator,
  addProductSuccessActionCreator,
  saveProductToApi
} from "../actionCreators/product";
import { withRouter } from "react-router-dom";

class AddProduct extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.assignStockElementRef = this.assignStockElementRef.bind(this);
    this.stockEleRef = null;
  }

  handleChange(e) {
    switch (e.target.name) {
      case "title":
        this.props.dispatch(changeTitleActionCreator(e.target.value));
        break;
      case "price":
        this.props.dispatch(changePriceActionCreator(e.target.value));
        break;
      case "category":
        this.props.dispatch(changeCategoryActionCreator(e.target.value));
        break;
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.dispatch(saveProductToApi.bind(this));
  }

  assignStockElementRef(eleRef) {
    this.stockEleRef = eleRef;
  }

  render() {
    return (
      <div className="add-product product">
        {this.props.isLoading ? <p>Loading..</p> : null}
        {this.props.product ? (
          <p>Product Saved Successfully - {this.props.product.id}</p>
        ) : null}
        <button onClick={() => (this.stockEleRef.value = Math.random() * 2000)}>
          Set Stock
        </button>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="title">Product Title</label>
          <input
            name="title"
            type="text"
            value={this.props.title}
            onChange={this.handleChange}
          />
          <label htmlFor="price">Product Price</label>
          <input
            name="price"
            type="number"
            value={this.props.price}
            onChange={this.handleChange}
          />
          <label htmlFor="category">Product category</label>
          <select
            name="category"
            value={this.props.category}
            onChange={this.handleChange}
          >
            {this.props.categories.map(c => (
              <option value={c} key={c}>
                {c}
              </option>
            ))}
          </select>
          <label htmlFor="stock">Product Stock</label>
          <input
            name="stock"
            type="number"
            ref={this.assignStockElementRef}
            defaultValue={999}
          />
          <button>Save</button>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    title: state.productState.title,
    price: state.productState.price,
    categories: state.productState.categories,
    category: state.productState.category,
    isLoading: state.productState.isLoading,
    product: state.productState.product
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

export default withRouter(connectedComponent(AddProduct));
