import React from "react";
import { withRouter } from "react-router-dom";
import {
  MenuItemContent,
  MenuItemContainer,
  MenuItemBackgroundImage,
  MenuItemTitle,
  MenuItemSubTitle,
} from "./menu-item.styles";

const MenuItem = ({ title, imageUrl, size, linkUrl, match, history }) => {
  return (
    <MenuItemContainer
      size={size}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      <MenuItemBackgroundImage
        className="background-image"
        imageUrl={imageUrl}
      />
      <MenuItemContent className="content">
        <MenuItemTitle>{title.toUpperCase()}</MenuItemTitle>
        <MenuItemSubTitle>SHOP NOW</MenuItemSubTitle>
      </MenuItemContent>
    </MenuItemContainer>
  );
};

export default withRouter(MenuItem);
