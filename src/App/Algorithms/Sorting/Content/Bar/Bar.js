import styled from "styled-components";

const Bar = styled.div.attrs(({ count, value, theme }) => ({
  style: {
    background: theme.colors.highlight[1],
    width: 100 / count + "%",
    height: (value / count) * 300 + "px",
    display: "inline-block",
  },
}))``;

export default Bar;
