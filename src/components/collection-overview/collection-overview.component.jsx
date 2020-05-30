import React from "react";
import CollectionPreview from "../collection-preview/collection-preview.component";
import { createStructuredSelector } from "reselect";
import { selectShopItemsForPreview } from "../../redux/shop/shop.selector.js";
import { connect } from "react-redux";
import { CollectionOverviewContainer } from "./collection-overview.styles";

const CollectionOverview = ({ collections }) => (
  <CollectionOverviewContainer>
    {collections.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
    ))}
  </CollectionOverviewContainer>
);

const mapStateToProps = createStructuredSelector({
  collections: selectShopItemsForPreview,
});

export default connect(mapStateToProps)(CollectionOverview);
