import React from "react";
import {
  SectionWrapper,
  ItemH1,
  ItemText,
  ItemSubtext,
  ButtonGroup,
  LeftButton,
  RightButton,
  DownArrow,
  ButtonGroupWrapper,
} from "./styles";

const Section = (props) => {
  const { title, description, leftBtn, rightBtn, backgroundImg } = props;
  return (
    <SectionWrapper backgroundImg={backgroundImg}>
      <ItemText>
        <ItemH1>{title}</ItemH1>
        <ItemSubtext>{description}</ItemSubtext>
      </ItemText>
      <ButtonGroupWrapper>
        <ButtonGroup>
          <LeftButton>{leftBtn}</LeftButton>
          {rightBtn && <RightButton>{rightBtn}</RightButton>}
        </ButtonGroup>
        <DownArrow src="./images/down-arrow.svg" />
      </ButtonGroupWrapper>
    </SectionWrapper>
  );
};

export default Section;
