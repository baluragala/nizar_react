import offerReducer from "./offer";
import { getOffersSuccess } from "../actionCreators/offer";

describe("OfferReducer", () => {
  it("should have initial state set", () => {
    const initialState = {
      isLoading: false,
      offers: []
    };

    const stateFromReducer = offerReducer(undefined, {});
    expect(stateFromReducer).toEqual(initialState);
  });

  it("should have offers set when GET_OFFERS action dispatched", () => {
    const prevState = {
      isLoading: false,
      offers: []
    };
    const offers = ["BOGOF", "FLAT50"];
    const action = getOffersSuccess(offers);
    const nextState = offerReducer(prevState, action);
    expect(nextState.offers).toEqual(offers);
  });
});
