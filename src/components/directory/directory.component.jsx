import React from "react";
import MenuItem from "../menu-item/menu-item";
import { createStructuredSelector } from "reselect";
import { selectDirectorySections } from "../../redux/directory/directory.selector";
import { connect } from "react-redux";
import { DirectoryMenuContainer } from "./directory.styles";

const Directory = ({ sections }) => (
  <DirectoryMenuContainer>
    {sections.map(({ id, ...sectionProps }) => (
      <MenuItem key={id} {...sectionProps} />
    ))}
  </DirectoryMenuContainer>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});

export default connect(mapStateToProps)(Directory);
