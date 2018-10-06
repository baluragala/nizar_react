import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

//import React from "react";

// function ProductListItem(props) {
//   const { item, productClicked } = props;
//   return (
//     <div style={Styles.item} onClick={() => productClicked(item.title)}>
//       <h2>{item.title}</h2>
//       <h3>{item.price}</h3>
//     </div>
//   );
// }

class ProductListItem extends Component {
  constructor(props) {
    super(props);
    console.log("constructor");
  }

  render() {
    console.log("render");
    const { item, productClicked } = this.props;
    return (
      <div
        style={Styles.item}
        onMouseEnter={() => console.log("mouse")}
        onClick={e => {
          console.log(e);
          productClicked(item.title);
        }}
      >
        <h2>
          <Link to={`/products/${item.id}`}>{item.title}</Link>
        </h2>
        <h3>{item.price}</h3>
      </div>
    );
  }
  componentDidMount() {
    console.log("componentDidMount");
  }

  shouldComponentUpdate(nextProps, nextState) {
    //console.log(nextProps, this.props);
    return nextProps.item.price != this.props.item.price;
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate");
  }
}

ProductListItem.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string,
    price: PropTypes.number
  }).isRequired,
  productClicked: PropTypes.func.isRequired
};

ProductListItem.defaultProps = {
  item: {
    title: "default product title",
    price: 0
  }
};

export default ProductListItem;

const Styles = {
  item: {
    border: "1px solid",
    margin: 20,
    backgroundColor: "lightgrey",
    padding: 20
  }
};
