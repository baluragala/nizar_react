import { combineReducers } from "redux";
import { productReducer } from "./product";
import offerReducer from "./offer";

const rootReducer = combineReducers({
  productState: productReducer,
  offerState: offerReducer
});

export default rootReducer;
