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
import Fade from "react-reveal/Fade";

const Section = (props) => {
  const { title, description, leftBtn, rightBtn, backgroundImg } = props;
  return (
    <SectionWrapper backgroundImg={backgroundImg}>
      <Fade bottom>
        <ItemText>
          <ItemH1>{title}</ItemH1>
          <ItemSubtext>{description}</ItemSubtext>
        </ItemText>
      </Fade>
      <Fade>
        <ButtonGroupWrapper>
          <ButtonGroup>
            <LeftButton>{leftBtn}</LeftButton>
            {rightBtn && <RightButton>{rightBtn}</RightButton>}
          </ButtonGroup>
          <DownArrow src="./images/down-arrow.svg" />
        </ButtonGroupWrapper>
      </Fade>
    </SectionWrapper>
  );
};

export default Section;
