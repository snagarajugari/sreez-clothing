import React from "react";
import CollectionItem from "../collection-item/collection-item.component";
import {
  CollectionPreviewContainer,
  CollectionPreviewTitle,
  PreviewContainer,
} from "./collection-preview.styles";
import { withRouter } from "react-router-dom";

const CollectionPreview = ({ title, items, routeName, match, history }) => (
  <div>
    <CollectionPreviewContainer>
      <CollectionPreviewTitle
        onClick={() => history.push(`${match.url}/${routeName}`)}
      >
        {title}
      </CollectionPreviewTitle>
      <PreviewContainer>
        {items
          .filter((item, idx) => idx < 4)
          .map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </PreviewContainer>
    </CollectionPreviewContainer>
  </div>
);

export default withRouter(CollectionPreview);
