import React from "react";
import CollectionPreview from "../collection-preview/collection-preview.component";
import { createStructuredSelector } from "reselect";
import { selectShopItemsForPreview } from "../../redux/shop/shop.selector.js";
import { connect } from "react-redux";

const CollectionOverview = ({ collections }) => (
  <div className="collection-overview">
    {collections.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectShopItemsForPreview,
});

export default connect(mapStateToProps)(CollectionOverview);
