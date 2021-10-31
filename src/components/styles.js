import styled from "styled-components";

export const SectionWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-image: ${(props) => `url("./images/${props.backgroundImg}")`};
`;

export const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
`;

export const ItemH1 = styled.h1``;

export const ItemSubtext = styled.p``;

export const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 30px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const LeftButton = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  height: 40px;
  width: 256px;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  opacity: 0.85;
  text-transform: uppercase;
  font-size: 12px;
  cursor: pointer;
  margin: 8px;
`;

export const RightButton = styled(LeftButton)`
  background-color: #fff;
  opacity: 0.65;
  color: #000;
`;

export const DownArrow = styled.img`
  height: 40px;
  animation: animateDown infinite 1.5s;
`;

export const ButtonGroupWrapper = styled.div``;
