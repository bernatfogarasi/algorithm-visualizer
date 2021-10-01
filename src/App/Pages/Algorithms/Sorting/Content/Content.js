import React, { useState } from "react";
import styled from "styled-components";
import ActionButton from "App/ActionButton";
import Parameter from "App/Parameter";
import Select from "App/Select";
import SelectItem from "App/SelectItem";
import Slider from "App/Slider";
import GridRaw from "@material-ui/core/Grid";
import { createArray, shuffle, swap } from "./utilities";
import algorithms from "./algorithms";
import Bar from "./Bar";

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

const Content = () => {
  const presets = {
    count: {
      default: 20,
      max: 100,
      min: 5,
      step: 10,
    },
    speed: {
      default: 50,
      max: 100,
      min: 1,
      step: 1,
    },
  };

  const [sorting, setSorting] = useState(false);
  const [sortId, setSortId] = useState(0);
  const [count, setCount] = useState(presets.count.default);
  const [numbers, setNumbers] = useState(
    shuffle(createArray(presets.count.default))
  );
  const [speed, setSpeed] = useState(presets.speed.default);

  const performAction = ({ type, items }) => {
    if (type === "swap") {
      setNumbers((previousNumbers) => {
        let copyNumbers = [...previousNumbers];
        swap(copyNumbers, items[0], items[1]);
        return copyNumbers;
      });
    }
    if (type === "comparison") {
    }
  };

  const preformActions = (actions) => {
    let i = 0;
    let n = actions.length;
    const iterate = () => {
      performAction(actions[i]);
      i++;
      if (i !== n) {
        setTimeout(iterate, 1000 / speed);
      }
    };
    iterate();
  };

  const handleSortButtonClick = (event) => {
    setSorting(true);
    let actions = algorithms[sortId].func([...numbers]);
    preformActions(actions);
  };

  const handleStopButtonClick = (event) => {
    setSorting(false);
  };

  const handleShuffleButtonClick = (event) => {
    setNumbers(shuffle(createArray(count)));
  };

  const handleSortIdChange = (event) => {
    setSortId(event.target.value);
  };

  const handleCountChange = (event, newValue) => {
    if (count !== newValue) {
      setCount(newValue);
      setNumbers(shuffle(createArray(newValue)));
    }
  };

  const handleSpeedChange = (event, newValue) => {
    setSpeed(newValue);
  };

  return (
    <Grid container>
      <Grid item xs="auto">
        <ActionButton onClick={handleSortButtonClick}>Sort</ActionButton>
      </Grid>
      <Grid item xs="auto">
        <ActionButton onClick={handleStopButtonClick}>Stop</ActionButton>
      </Grid>
      <Grid item xs="auto">
        <ActionButton onClick={handleShuffleButtonClick}>Shuffle</ActionButton>
      </Grid>
      <GridBreak />
      <Grid item xs="auto">
        <Parameter label="Algorithm">
          <Select value={sortId} onChange={handleSortIdChange}>
            {algorithms.map((algorithm, sortId) => (
              <SelectItem key={sortId} value={sortId}>
                {algorithm.label}
              </SelectItem>
            ))}
          </Select>
        </Parameter>
      </Grid>
      <Grid item xs="auto">
        <Parameter label="Count" value={count}>
          <Slider
            defaultValue={presets.count.default}
            min={presets.count.min}
            max={presets.count.max}
            step={presets.count.step}
            onChange={handleCountChange}
          />
        </Parameter>
      </Grid>
      <Grid item xs="auto">
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
      <GridBreak />
      <Grid item xs={12}>
        {numbers.map((number, index) => (
          <Bar key={index} count={count} value={number} />
        ))}
      </Grid>
    </Grid>
  );
};

export default Content;
