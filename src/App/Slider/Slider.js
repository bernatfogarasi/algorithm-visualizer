import React from "react";
import SliderRaw from "@material-ui/core/Slider";
import styled from "styled-components";

const Slider = styled((props) => (
  <SliderRaw
    marks={[
      {
        value: props.min,
        label: props.min,
      },
      {
        value: props.max,
        label: props.max,
      },
    ]}
    {...props}
  />
))`
  && {
    width: 200px;
    color: #66e1ff;
    margin-top: 10px;

    .MuiSlider-rail {
      height: 8px;
      border-radius: 5px;
    }
    .MuiSlider-track {
      height: 8px;
      border-radius: 5px;
    }
    .MuiSlider-thumb {
      height: 16px;
      width: 16px;
      background-color: "#fff";
      margin-top: -4px;
      margin-left: -8px;
      :focus,
      :hover,
      :active {
        box-shadow: none;
      }
    }
    .MuiSlider-mark {
      display: none;
    }
  }
`;

export default Slider;
