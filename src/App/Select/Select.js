import styled from "styled-components";
import SelectRaw from "@material-ui/core/Select";
import InputBaseRaw from "@material-ui/core/InputBase";

const InputBase = styled(InputBaseRaw)`
  && {
    border: 1px solid lightgray;
    padding: 10px;
    border-radius: 4px;
    width: 150px;
  }
  .MuiInputBase-input {
    background-color: transparent;
    :focus {
      background-color: transparent;
    }
  }
`;

const Select = styled((props) => (
  <SelectRaw input={<InputBase />} variant="outlined" {...props} />
))`
  height: 40px;
  margin-top: 10px;
`;

export default Select;
