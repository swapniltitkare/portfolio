import {
  Typography,
  AppBar,
  Toolbar,
  Tabs,
  Tab,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Link } from "react-scroll";
import { HashLink } from "react-router-hash-link";

import React, { useState } from "react";
import DrawerComp from "./DrawerComp";
import NavLinks from "./NavLinks";

import "../css/nav.css";

const Navbar = () => {
  const [link, setLink] = useState(0);

  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      <AppBar className="nav" sx={{ background: "#063970" }}>
        <Toolbar>
          <Typography sx={{ fontSize: "1.6rem" }}>Swapnil</Typography>

          {isMatch ? (
            <>
              <DrawerComp />
            </>
          ) : (
            <Tabs
              textColor="inherit"
              value={link}
              onChange={(e,value) => setLink(value)}
              indicatorColor="secondary"
              sx={{ marginLeft: "auto" }}
            >
              {NavLinks.map((navlink) => (
                <Tab key={navlink.id} label={navlink.name} href={navlink.id} />
              ))}
            </Tabs>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

{
  /* <HashLink to={`#${navlink.id}`}>{navlink.name}</HashLink> */
}
{
  /* <Tab
label={
  <Link className='navTabLink' to={navlink.id} spy={true} offset={50} duration={500}>
    {navlink.name}
  </Link>
}
/> */
}

export default Navbar;
