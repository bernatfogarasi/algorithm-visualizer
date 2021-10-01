import styled from "styled-components";

const Bar = styled.div.attrs(({ count, value }) => ({
  style: {
    background: "#66e1ff",
    width: 100 / count + "%",
    height: (value / count) * 200 + "px",
    display: "inline-block",
  },
}))``;

export default Bar;
