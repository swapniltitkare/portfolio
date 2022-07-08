import { Box, Typography } from "@mui/material";
import React from "react";

import "../css/about.css";

import myImg from "../img/pic1.png";

const AboutSection = () => {
  return (
    <>
    <Box className='aboutMain' id='About'>


      <Box className="aboutSection">
        <div className="heading">About Me</div>
        <Box className="inner">
          <Box className="leftSide">
            <img src={myImg} alt="" />
          </Box>
          <Box className="rightSide">
            <h2>Developer And Designer</h2>
            <Typography className='intro'>
              {/* Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into */}
              Currently, a 3rd year Computer Engineering student at Vidyalankar Institute of Technology, Mumbai.
            
            </Typography>
          </Box>
        </Box>
      </Box>
      </Box>
    </>
  );
};

export default AboutSection;
