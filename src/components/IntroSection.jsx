import React from "react";
import "../css/intro.css";
import myImg from "../img/pic1.png";

import { Box, Typography, useMediaQuery } from "@mui/material";

const IntroSection = () => {
  const matches = useMediaQuery("(max-width:920px)");
  return (
    <>
      <Box className="introMain" id='Intro'>
        <Box className="introsection">
          {matches ? (
            <>
              <Box className="rightDiv">
                <img src={myImg} alt="" />
              </Box>

              <Box className="leftDiv">
                {/* <Typography className="leftDiv_1">Hello</Typography> */}
                <Typography className="leftDiv_2">Swapnil Titkare</Typography>
                {/* <Typography className="leftDiv_2">
                I'm
                <spam> Swapnil </spam>
                Titkare
              </Typography> */}

                {/* <Typography className="leftDiv_3">
                A passionate Web Developer
              </Typography> */}
              </Box>
            </>
          ) : (
            <>
              <Box className="leftDiv">
                <Typography className="leftDiv_1">Hello</Typography>
                <Typography className="leftDiv_2">
                  I'm
                  <spam> Swapnil </spam>
                  Titkare
                </Typography>
                <Typography className="leftDiv_3">
                  A passionate Web Developer
                </Typography>
              </Box>

              <Box className="rightDiv">
                <img src={myImg} alt="" />
              </Box>
            </>
          )}
        </Box>
      </Box>
    </>
  );
};

export default IntroSection;
