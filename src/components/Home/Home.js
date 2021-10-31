import React from "react";
import { Container } from "./styles";
import Section from "../Section";

const Home = () => {
  return (
    <Container>
      <Section
        title={"Model S"}
        description={"Order online for Touchless Delivery"}
        leftBtn={"Custom order"}
        rightBtn={"Existing Inventory"}
        backgroundImg={"model-s.jpg"}
      />
      <Section
        title={"Model Y"}
        description={"Order online for Touchless Delivery"}
        leftBtn={"Custom order"}
        rightBtn={"Existing Inventory"}
        backgroundImg={"model-y.jpg"}
      />
      <Section
        title={"Model 3"}
        description={"Order online for Touchless Delivery"}
        leftBtn={"Custom order"}
        rightBtn={"Existing Inventory"}
        backgroundImg={"model-3.jpg"}
      />
      <Section
        title={"Model x"}
        description={"Order online for Touchless Delivery"}
        leftBtn={"Custom order"}
        rightBtn={"Existing Inventory"}
        backgroundImg={"model-x.jpg"}
      />
      <Section
        title={"Lowest Cost Solar Panel in America"}
        description={"Order online for Touchless Delivery"}
        leftBtn={"Order Now"}
        rightBtn={"Learn More"}
        backgroundImg={"solar-panel.jpg"}
      />
      <Section
        title={"Solar for new Roofs"}
        description={"Order online for Touchless Delivery"}
        leftBtn={"Order Now"}
        rightBtn={"Learn More"}
        backgroundImg={"solar-roof.jpg"}
      />
      <Section
        title={"Accessories"}
        description={"Order online for Touchless Delivery"}
        leftBtn={"Shop Now"}
        backgroundImg={"accessories.jpg"}
      />
    </Container>
  );
};

export default Home;
