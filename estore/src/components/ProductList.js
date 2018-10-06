import React, { Component } from "react";
import ProductListItem from "./ProductListItem";
import queryString from "query-string";
import TryCatch from "./TryCatch";

class ProductList extends Component {
  constructor(props) {
    super(props);
    //this.state = { title: "NA" };
    this.onProductClicked = this.onProductClicked.bind(this);
    // console.log(this.props.location);
    // console.log(queryString.parse(this.props.location.search));
    // console.log(props);
  }

  onProductClicked(title) {
    //this.props.prds[2] = { ...this.props.prds[2], price: 1999 };
    //console.log(this.props.prds[2]);
    //this.setState({ title });
  }

  render() {
    return (
      <div>
        <h1>
          Products(
          {this.props.title} is clicked)
        </h1>
        {this.props.prds.map(p => (
          <ProductListItem
            key={p.id}
            item={p}
            someprop={1}
            p1={"a"}
            productClicked={this.onProductClicked}
          />
        ))}
      </div>
    );
  }
}

export default ProductList;
