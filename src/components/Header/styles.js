import styled from "styled-components";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";

export const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
`;

export const Logo = styled.img``;

export const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  a {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: no-wrap;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

export const RightMenu = styled.div`
  display: flex;
  align-items: center;
  a {
    font-weight: 600;
    text-transform: uppercase;
    margin-right: 10px;
  }
`;

export const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
`;

export const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background-color: #fff;
  width: 300px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.2s;
`;

export const BurgerNavUl = styled.ul`
  list-style: none;
`;

export const BurgerNavLi = styled.li`
  padding: 15px 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  width: 100%;
  text-align: left;
  a {
    font-weight: 600;
  }
`;

export const CloseButton = styled(CloseIcon)`
  cursor: pointer;
`;

export const CloseButtonWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
`;
