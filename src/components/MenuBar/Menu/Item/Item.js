import React from "react";
import { useState } from "react";
import ButtonRaw from "@material-ui/core/Button";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MenuItemRaw from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 10px;
  display: inline-block;
`;

const DropdownButton = styled((props) => <ButtonRaw {...props} />)`
  && {
    color: ${({ theme }) => theme.colors.front[0]};
    font-family: inherit;
    &.Mui-disabled {
      color: ${({ theme }) => theme.colors.back[2]};
    }
  }
`;

const MenuItem = styled((props) => <MenuItemRaw {...props} />)`
  && {
    font-family: inherit;
    padding: 10px 10px;
  }
`;

const MenuItemIcon = styled((props) => <img alt="" {...props} />)`
  width: 25px;
  padding-right: 20px;
`;

export default function Item({ label, to, disabled, dropdownItems }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);

  const rotateChevron = open ? "rotate(180deg)" : "rotate(0)";

  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Wrapper>
      {dropdownItems ? (
        <>
          <DropdownButton onClick={handleOpen}>
            {label}
            <ExpandMoreIcon
              style={{
                transform: rotateChevron,
                transition: "all 0.2s linear",
              }}
            />
          </DropdownButton>
          <Popper open={open} anchorEl={anchorEl}>
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList>
                  {dropdownItems.map((dropdownItem) => (
                    <MenuItem
                      key={dropdownItem.label}
                      component={Link}
                      to={dropdownItem.to}
                      onClick={handleClose}
                      disabled={Boolean(dropdownItem.disabled)}
                    >
                      <MenuItemIcon src={dropdownItem.iconSource} />
                      {dropdownItem.label}
                    </MenuItem>
                  ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Popper>
        </>
      ) : (
        <DropdownButton component={Link} to={to} disabled={disabled}>
          {label}
        </DropdownButton>
      )}
    </Wrapper>
  );
}
