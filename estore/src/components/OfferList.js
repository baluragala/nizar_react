import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getOffersFromApi } from "../actionCreators/offer";

class OfferList extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.dispatch(getOffersFromApi.bind(this));
  }

  render() {
    return (
      <div>
        {this.props.offers.map(o => (
          <p>{o}</p>
        ))}
      </div>
    );
  }
}

function mapStateToProps(appState) {
  return {
    isLoading: appState.offerState.isLoading,
    offers: appState.offerState.offers
  };
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch
  };
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(OfferList)
);
