import React, { useState } from "react";
import {
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  IconButton,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import { HashLink } from "react-router-hash-link";
import { NavLink  } from "react-router-dom";

import NavLinks from "./NavLinks";

const DrawerComp = () => {
  const [openDraw, setDraw] = useState(false);

  return (
    <>
      <Drawer open={openDraw} onClose={() => setDraw(false)}>
        <List>
          {NavLinks.map((navlink, index) => (
            <ListItemButton onClick={() => setDraw(false)} key={index}>
              <ListItemIcon>
                <ListItemText className="TextColor">
                <a href={navlink.id}>{navlink.name}</a>
                </ListItemText>
              </ListItemIcon>
            </ListItemButton>
          ))}
        </List>
      </Drawer>
      <IconButton
        sx={{ color: "white", marginLeft: "auto" }}
        onClick={() => setDraw(!openDraw)}
      >
        <MenuIcon />
      </IconButton>
    </>
  );
};

export default DrawerComp;
