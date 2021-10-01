import React from "react";
import AntIconSource from "./assets/ant.png";
import WaveIconSource from "./assets/wave.png";
import WaterIconSource from "./assets/water.png";
import PathIconSource from "./assets/path.png";
import FabricIconSource from "./assets/fabric.png";
import SortIconSource from "./assets/sort.png";
import Item from "./Item";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  text-align: right;
  padding: 0px 10px;
`;

const Menu = () => {
  return (
    <Wrapper>
      <Item label="Home" to="/"></Item>
      <Item
        label="Algorithms"
        dropdownItems={[
          {
            iconSource: PathIconSource,
            label: "Pathfinding",
            to: "/algorithms/pathfinding",
            disabled: false,
          },
          {
            iconSource: SortIconSource,
            label: "Sorting",
            to: "/algorithms/sorting",
            disabled: false,
          },
        ]}
      ></Item>
      <Item
        label="Simulations"
        dropdownItems={[
          {
            iconSource: AntIconSource,
            label: "Ant",
            to: "/simulations/ants",
            disabled: true,
          },
          {
            iconSource: FabricIconSource,
            label: "Fabric",
            to: "/simulations/fabric",
            disabled: true,
          },
          {
            iconSource: WaterIconSource,
            label: "Water",
            to: "/simulations/water",
            disabled: true,
          },
          {
            iconSource: WaveIconSource,
            label: "Wave",
            to: "/simulations/waves",
            disabled: true,
          },
        ]}
      ></Item>
      <Item label="About" to="/about" disabled="true"></Item>
      <Item label="Contact" to="/contact"></Item>
    </Wrapper>
  );
};

export default Menu;
