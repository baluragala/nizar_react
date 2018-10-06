import {
  GET_OFFERS,
  GET_OFFERS_SUCCESS,
  GET_OFFERS_FAILURE
} from "../actionTypes/offer";

export function getOffers() {
  return {
    type: GET_OFFERS
  };
}

export function getOffersSuccess(offers) {
  return { type: GET_OFFERS_SUCCESS, offers };
}

export function getOffersFailure(error) {
  return { type: GET_OFFERS_FAILURE, error };
}

export async function getOffersFromApi(dispatch) {
  dispatch(getOffers());
  try {
    const offers = await fetch("http://localhost:4000/offers").then(r =>
      r.json()
    );
    dispatch(getOffersSuccess(offers));
  } catch (error) {
    dispatch(getOffersFailure(error));
  }
}
