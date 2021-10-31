import React, { useState, useCallback } from "react";
import {
  Container,
  Logo,
  Menu,
  RightMenu,
  CustomMenu,
  BurgerNav,
  BurgerNavLi,
  BurgerNavUl,
  CloseButton,
  CloseButtonWrapper,
} from "./styles";
import { selectCars } from "../../features/car/carSlice";
import { useSelector } from "react-redux";

function Header() {
  const [burgerStatus, setBurgerStatus] = useState(false);
  const cars = useSelector(selectCars);
  const handleMenuClick = useCallback(() => {
    setBurgerStatus(!burgerStatus);
  }, [burgerStatus]);

  return (
    <Container>
      <a href="#">
        <Logo src="./images/logo.svg" />
      </a>
      <Menu>
        {cars &&
          cars.map((car) => {
            return (
              <a href="#" key={car}>
                {car}
              </a>
            );
          })}
      </Menu>
      <RightMenu>
        <a href="#">Shop</a>
        <a href="#">Tesla Account</a>
        <CustomMenu onClick={() => handleMenuClick()} />
      </RightMenu>
      <BurgerNav show={burgerStatus}>
        <CloseButtonWrapper>
          <CloseButton onClick={() => handleMenuClick()} />
        </CloseButtonWrapper>
        <BurgerNavUl>
          {cars &&
            cars.map((car) => {
              return (
                <BurgerNavLi key={car}>
                  <a href="#">{car}</a>
                </BurgerNavLi>
              );
            })}
          <BurgerNavLi>
            <a href="#">{"Existing Inventory"}</a>
          </BurgerNavLi>
          <BurgerNavLi>
            <a href="#">{"Used Inventory"}</a>
          </BurgerNavLi>
          <BurgerNavLi>
            <a href="#">{"Trade-In"}</a>
          </BurgerNavLi>
          <BurgerNavLi>
            <a href="#">{"CyberTruck"}</a>
          </BurgerNavLi>
          <BurgerNavLi>
            <a href="#">{"Roadster"}</a>
          </BurgerNavLi>
          <BurgerNavLi>
            <a href="#">{"Semi"}</a>
          </BurgerNavLi>
        </BurgerNavUl>
      </BurgerNav>
    </Container>
  );
}

export default Header;
