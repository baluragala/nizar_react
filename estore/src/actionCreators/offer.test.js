import { getOffersFromApi, getOffers, getOffersSuccess } from "./offer";

describe("Offer Action Creators", () => {
  it("should fetch products and dispatch them", async () => {
    const mockDispatch = jest.fn();
    fetch = jest.fn();
    fetch.mockReturnValue(
      new Promise((resolve, reject) => {
        console.log("mock1");
        resolve({
          json() {
            console.log("mock2");
            return Promise.resolve(["BOGOF", "FLAT 50"]);
          }
        });
      })
    );
    await getOffersFromApi(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledTimes(2);
    expect(mockDispatch).toHaveBeenLastCalledWith(
      getOffersSuccess(["BOGOF", "FLAT 50"])
    );
  });
});
