import { createStructuredSelector } from "reselect";
import { selectIsCollectionsFetching } from "../../redux/shop/shop.selector";
import { compose } from "redux";
import { connect } from "react-redux";
import WithSpinner from "../with-spinner/with-spinner.component";
import CollectionOveriew from "./collection-overview.component";

const mapStateToProps = createStructuredSelector({
  isFetching: selectIsCollectionsFetching,
});

const CollectionsOverviewContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionOveriew);

export default CollectionsOverviewContainer;
