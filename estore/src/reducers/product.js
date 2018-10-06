import {
  GET_PRODUCTS,
  CHANGE_TITLE,
  CHANGE_PRICE,
  CHANGE_CATEGORY,
  GET_PRODUCT_SUCCESS,
  GET_PRODUCT,
  GET_PRODUCT_FAILURE,
  ADD_PRODUCT,
  ADD_PRODUCT_SUCCESS,
  ADD_PRODUCT_FAILURE
} from "../actionTypes/product";

const initialState = {
  products: [],
  isLoggedIn: true,
  title: "tshirt",
  price: 200,
  categories: ["mobiles", "laptops", "clothing", "others"],
  category: "clothing"
};
export function productReducer(prevState = initialState, action) {
  console.log(prevState, action);
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...prevState,
        isLoggedIn: true,
        products: action.products
      };
    case CHANGE_TITLE:
      return { ...prevState, title: action.title };
    case CHANGE_PRICE:
      return { ...prevState, price: action.price };
    case CHANGE_CATEGORY:
      return { ...prevState, category: action.category };
    case GET_PRODUCT:
      return { ...prevState, isLoading: true };
    case GET_PRODUCT_SUCCESS:
      return { ...prevState, product: action.product, isLoading: false };
    case GET_PRODUCT_FAILURE:
      return { ...prevState, error: action.error, isLoading: false };
    case ADD_PRODUCT:
      return { ...prevState, isLoading: true };
    case ADD_PRODUCT_SUCCESS:
      return { ...prevState, product: action.product, isLoading: false };
    case ADD_PRODUCT_FAILURE:
      return { ...prevState, error: action.error, isLoading: false };
    default:
      return prevState;
  }
}
