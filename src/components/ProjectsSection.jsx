import React from "react";
import { Link } from 'react-router-dom';

import "../css/projects.css";
import ProjectSet from "./ProjectSet";

import {
  Box,
  useMediaQuery,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@mui/material";

const ProjectsSection = () => {
  return (
    <>
      <Box className="projectSection" id='Projects'>
        <h2>Work</h2>
        <Box className="projects ">
          {ProjectSet.map((project) => (
              <Card className="project" key={project.name}>
                <CardMedia
                  component="img"
                  height="140"
                  className="ProjectImage"
                  image={require(`../img/ProjectImg/${project.projectImg}`)}
                  alt=""
                />
                <CardContent className="projectDetails">
                  <Typography
                    className="projectTitle"
                    gutterBottom
                    variant="h5"
                    component="div"
                  >
                    {project.name}
                  </Typography>
                  {/* <Typography variant="body2" color="text.secondary">
                    {project.description}
                  </Typography> */}
                  <CardActions>
                  {/* <Link>
                    <Button  size="large">Share</Button>
                  </Link> */}
                    <Button className="projectBtn" size="large" onClick={() => {window.open(`${project.projectLink}`)}}>Check Out</Button>
                  </CardActions>
                </CardContent>

                {/* <CardActions>
                  <Button size="small">Share</Button>
                  <Button size="small">Learn More</Button>
                </CardActions> */}
              </Card>
          ))}
        </Box>
      </Box>
    </>
  );
};

export default ProjectsSection;
