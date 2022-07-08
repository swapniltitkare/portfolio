import React from "react";

import "../css/skills.css";
import SkillSet from '../components/SkillSet'
import { Box, Typography, LinearProgress,useMediaQuery } from "@mui/material";
// import LinearProgress, { LinearProgressProps } from '@mui/material/LinearProgress';



const SkillsSection = () => {
    const matches = useMediaQuery("(max-width:920px)");
  return (
    <>
      <Box className="Skills" id='Skills'>
        <Typography className="heading">Skills</Typography>

        <Box className="skillsSection">
          {SkillSet.map((skill) => (
              <Box className="skill" key={skill.id}>
                <Typography style={{padding: "1px 0 1px 0", fontWeight:600}}>{skill.name}</Typography>
                <LinearProgress
                  variant="determinate"
                  className='progressBar'
                  value={skill.percentage}
                  style={{ width: '100%', height: 10}}
                />
                {/* <Typography>{skill.percentage}%</Typography> */}
              </Box>
          ))}
        </Box>
      </Box>
    </>
  );
};

export default SkillsSection;
