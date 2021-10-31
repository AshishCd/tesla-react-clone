import React from "react";
import { Container } from "./styles";
import Section from "../Section/Section";
import { carsData } from "./carsData";

const Home = () => {
  return (
    <Container>
      {carsData.map((car) => {
        return (
          <Section
            key={car.id}
            title={car.title}
            description={car.description}
            leftBtn={car.leftBtn}
            rightBtn={car.rightBtn}
            backgroundImg={car.image}
          />
        );
      })}
    </Container>
  );
};

export default Home;
