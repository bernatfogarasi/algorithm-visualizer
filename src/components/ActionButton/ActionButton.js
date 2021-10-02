import styled from "styled-components";
import ButtonRaw from "@material-ui/core/Button";

const ActionButton = styled((props) => (
  <ButtonRaw variant="contained" {...props} />
))`
  && {
    background-color: ${({ theme }) => theme.colors.highlight[1]};
    color: ${({ theme }) => theme.colors.front[0]};
    font-size: 16pt;
    padding: 0px 10px;

    :hover {
      background-color: ${({ theme }) => theme.colors.highlight[2]};
    }
  }
`;

export default ActionButton;
