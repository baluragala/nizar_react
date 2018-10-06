import React from "react";
import { shallow, mount, render } from "../enzyme";
import ProductList from "./ProductList";
import ProductListItem from "./ProductListItem";

let wrapper, title, prds;

// beforeEach(() => {
//   title = "iphone";
//   prds = [
//     { id: 1, title: "P1", price: 100 },
//     { id: 2, title: "P2", price: 200 },
//     { id: 3, title: "P3", price: 300 }
//   ];
//   wrapper = shallow(<ProductList prds={prds} title={title} />);
// });

// afterEach(() => {
//   prds = null;
//   title = null;
//   wrapper = null;
// });

describe("Product List", () => {
  it("should render 3 Product List items", () => {
    const title = "iphone";
    const prds = [
      { id: 1, title: "P1", price: 100 },
      { id: 2, title: "P2", price: 200 },
      { id: 3, title: "P3", price: 300 }
    ];
    const wrapper = render(<ProductList prds={prds} title={title} />);
    console.log(wrapper.debug());
    // console.log(wrapper.debug());
    // expect(wrapper.find(ProductListItem).length).toEqual(3);
  });
});
