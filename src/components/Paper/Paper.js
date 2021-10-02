import styled from "styled-components";
import MuiPaper from "@material-ui/core/Paper";
import theme from "config/theme";

const Paper = styled((props) => <MuiPaper {...props} />)`
  && {
    background-color: ${({ theme }) => theme.colors.front[0]};
  }
`;

export default Paper;
