import React from "react";
import { shallow, mount } from "../enzyme";
import ProductListItem from "./ProductListItem";
import { Link } from "react-router-dom";

let item, productClicked, wrapper;

beforeEach(() => {
  item = { title: "iphone", price: 999, id: 1 };
  productClicked = jest.fn();
  wrapper = shallow(
    <ProductListItem item={item} productClicked={productClicked} />
  );
});

afterEach(() => {
  item = null;
  productClicked = null;
  wrapper = null;
});

describe("Product List Item", () => {
  it("should have a link with product title", () => {
    //console.log(wrapper.debug());
    const linkWrapper = wrapper.find(Link);
    //console.log(linkWrapper.props());
    expect(linkWrapper.props().children).toEqual(item.title);
    expect(linkWrapper.props().to).toEqual(`/products/${item.id}`);
  });

  it("should call productClick function when clicked on wrapper", () => {
    wrapper.simulate("click");
    expect(productClicked).toHaveBeenCalledTimes(1);
    expect(productClicked).toHaveBeenCalledWith(item.title);
  });
});
