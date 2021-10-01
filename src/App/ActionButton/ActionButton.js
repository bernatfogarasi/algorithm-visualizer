import styled from "styled-components";
import ButtonRaw from "@material-ui/core/Button";

const ActionButton = styled((props) => (
  <ButtonRaw variant="contained" {...props} />
))`
  && {
    background-color: #66e1ff;
    color: white;
    font-size: 16pt;
    padding: 0px 10px;

    :hover {
      background-color: #55bed8;
    }
  }
`;

export default ActionButton;
