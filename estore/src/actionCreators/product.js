import {
  GET_PRODUCT,
  GET_PRODUCTS,
  ADD_PRODUCT,
  CHANGE_TITLE,
  CHANGE_PRICE,
  CHANGE_CATEGORY,
  GET_PRODUCT_SUCCESS,
  GET_PRODUCT_FAILURE,
  ADD_PRODUCT_SUCCESS,
  ADD_PRODUCT_FAILURE
} from "../actionTypes/product";

import axios from "axios";

export function getProductsActionCreator(products) {
  return {
    type: GET_PRODUCTS,
    products
  };
}

// export function getProductsActionAsyncCreator(){
//   return function(){

//   }
// }

export function getProductActionCreator() {
  return {
    type: GET_PRODUCT
  };
}

export function getProductSuccessActionCreator(product) {
  return {
    type: GET_PRODUCT_SUCCESS,
    product
  };
}

export function getProductFailureActionCreator(error) {
  return {
    type: GET_PRODUCT_FAILURE,
    error
  };
}

export function addProductActionCreator() {
  return {
    type: ADD_PRODUCT
  };
}

export function addProductSuccessActionCreator(product) {
  return {
    type: ADD_PRODUCT_SUCCESS,
    product
  };
}
export function addProductFailureActionCreator(error) {
  return {
    type: ADD_PRODUCT_FAILURE,
    error
  };
}

export function changeTitleActionCreator(title) {
  return {
    type: CHANGE_TITLE,
    title
  };
}

export function changePriceActionCreator(price) {
  return {
    type: CHANGE_PRICE,
    price
  };
}

export function changeCategoryActionCreator(category) {
  return {
    type: CHANGE_CATEGORY,
    category
  };
}

export async function saveProductToApi(dispatch) {
  dispatch(addProductActionCreator());
  const { title, price, category } = this.props;
  let response = await axios.post("http://localhost:4000/products", {
    title,
    price,
    category,
    stock: this.stockEleRef.value
  });
  dispatch(addProductSuccessActionCreator(response.data));
}
