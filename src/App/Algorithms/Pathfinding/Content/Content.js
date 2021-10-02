import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ActionButton from "components/ActionButton";
import GridRaw from "@material-ui/core/Grid";
import Parameter from "components/Parameter";
import Select from "components/Select";
import SelectItem from "components/SelectItem";
import Slider from "components/Slider";
import algorithms from "./algorithms";
import mazeAlgorithms from "./mazeAlgorithms";
import { v4 as uuidv4 } from "uuid";
import { equalArrays, randomInteger } from "./utilities";

const Grid = styled(GridRaw)`
  && {
    text-align: left;
    .MuiGrid-item {
      padding: 20px 30px;
    }
  }
`;

const GridBreak = styled.div`
  width: 100%;
`;

const Wrapper = styled.div`
  width: calc(100%-20px);
  padding-top: ${(props) => props.aspectRatio * 100 + "%"};
  position: relative;
  border: 10px solid ${({ theme }) => theme.colors.highlight[2]};
`;

const TileTable = styled((props) => (
  <table {...props}>
    <tbody>{props.children}</tbody>
  </table>
))`
  border-collapse: collapse;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;

const TileRow = styled.tr``;

const Tile = styled.td.attrs(({ isStart, isEnd, filled, theme }) => ({
  style: {
    background: isStart
      ? "green"
      : isEnd
      ? "red"
      : filled === 1
      ? theme.colors.highlight[1]
      : theme.colors.front[0],
    //border: "1px solid white",
  },
}))``;

const Content = () => {
  const presets = {
    speed: {
      default: 50,
      min: 10,
      max: 100,
      step: 1,
    },
    density: {
      default: 30,
      min: 1,
      max: 100,
      step: 1,
    },
    resolution: {
      default: 10,
      min: 1,
      max: 50,
      step: 1,
    },
    aspectRatio: {
      default: 0.3,
      min: 0.1,
      max: 1,
      step: 0.1,
    },
  };
  const aspectRatio = 1 / 3;

  const [algorithmId, setAlgorithmId] = useState(0);
  const [mazeAlgorithmId, setMazeAlgorithmId] = useState(0);
  const [speed, setSpeed] = useState(presets.speed.default);
  const [density, setDensity] = useState(presets.density.default);
  const [resolution, setResolution] = useState(presets.resolution.default);
  const [dimensions, setDimensions] = useState([0, 0]);
  const [tiles, setTiles] = useState([[]]);
  const [startPosition, setStartPosition] = useState([0, 0]);
  const [endPosition, setEndPosition] = useState([0, 0]);

  const calculateDimentions = () => {
    setDimensions([
      Math.round(resolution),
      Math.round(resolution / aspectRatio),
    ]);
  };

  const createTiles = () => {
    let row;
    let newTiles = [];
    for (let i = 0; i < dimensions[0]; i++) {
      row = [];
      for (let j = 0; j < dimensions[1]; j++) {
        row.push({
          id: uuidv4(),
          filled: Math.random() < density / 100 ? 1 : 0,
        });
      }
      newTiles.push(row);
    }
    setTiles(newTiles);
  };

  const placeEnd = () => {
    setEndPosition([
      randomInteger(0, dimensions[0] - 1),
      randomInteger(0, dimensions[1] - 1),
    ]);
  };

  const placeStart = () => {
    setEndPosition([
      randomInteger(0, dimensions[0] - 1),
      randomInteger(0, dimensions[1] - 1),
    ]);
  };

  useEffect(calculateDimentions, [resolution]);

  useEffect(createTiles, [dimensions, density]);

  const handleAngorithmIdChange = (event) => {
    setAlgorithmId(event.target.value);
  };

  const handleMazeAngorithmIdChange = (event) => {
    setMazeAlgorithmId(event.target.value);
  };

  const handleSpeedChange = (event, newValue) => {
    setSpeed(newValue);
  };

  const handleDensityChange = (event, newValue) => {
    setDensity(newValue);
  };

  const handleResolutionChange = (event, newValue) => {
    setResolution(newValue);
  };

  const handleNewMazeClicked = () => {
    createTiles();
  };

  return (
    <Grid container>
      {/*<Grid item xs="auto" key={0}>
        <ActionButton onClick={null}>Find Path</ActionButton>
      </Grid>
      <Grid item xs="auto" key={1}>
        <ActionButton onClick={handleNewMazeClicked}>New Maze</ActionButton>
      </Grid>
      <GridBreak />
      <Grid item xs="auto" key={2}>
        <Parameter label="Algorithm">
          <Select value={algorithmId} onChange={handleAngorithmIdChange}>
            {algorithms.map((algorithm, index) => (
              <SelectItem key={algorithm.label} value={index}>
                {algorithm.label}
              </SelectItem>
            ))/}
          </Select>
        </Parameter>
      </Grid>
      <Grid item xs="auto" key={3}>
        <Parameter label="Maze algorithm">
          <Select
            value={mazeAlgorithmId}
            onChange={handleMazeAngorithmIdChange}
          >
            {mazeAlgorithms.map((mazeAlgorithm, index) => (
              <SelectItem key={mazeAlgorithm.label} value={index}>
                {mazeAlgorithm.label}
              </SelectItem>
            ))}
          </Select>
        </Parameter>
      </Grid>
      <Grid item xs="auto" key={4}>
        <Parameter label="Speed" value={speed}>
          <Slider
            defaultValue={presets.speed.default}
            min={presets.speed.min}
            max={presets.speed.max}
            step={presets.speed.step}
            onChange={handleSpeedChange}
          />
        </Parameter>
      </Grid>
      <Grid item xs="auto" key={5}>
        <Parameter label="Density" value={density}>
          <Slider
            defaultValue={presets.density.default}
            min={presets.density.min}
            max={presets.density.max}
            step={presets.density.step}
            onChange={handleDensityChange}
          />
        </Parameter>
      </Grid>
      <Grid item xs="auto" key={6}>
        <Parameter label="Resolution" value={resolution}>
          <Slider
            defaultValue={presets.resolution.default}
            min={presets.resolution.min}
            max={presets.resolution.max}
            step={presets.resolution.step}
            onChange={handleResolutionChange}
          />
        </Parameter>
      </Grid>
      <GridBreak />
      <Grid item xs={12} key={7}>
        <Wrapper aspectRatio={aspectRatio}>
          <TileTable dimensions={dimensions}>
            {tiles.map((row, rowIndex) => (
              <TileRow key={rowIndex}>
                {row.map((item, columnIndex) => (
                  <Tile
                    key={item.id}
                    filled={item.filled}
                    isStart={equalArrays(startPosition, [
                      rowIndex,
                      columnIndex,
                    ])}
                    isEnd={equalArrays(endPosition, [rowIndex, columnIndex])}
                  ></Tile>
                ))}
              </TileRow>
                  ))}
          </TileTable>
        </Wrapper>
                </Grid>*/}
    </Grid>
  );
};

export default Content;
