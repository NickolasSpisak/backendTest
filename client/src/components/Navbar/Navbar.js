import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Typography } from "@material-ui/core";

import memories from "../../images/memories.jpeg";
import useStyles from "./styles.js";

const Navbar = () => {
  const classes = useStyles();

  return (
    <AppBar className={classes.appBar} position="static" color="inherit">
      <div className={classes.brandContainer}>
        <Typography
          componant={Link}
          to="/"
          className={classes.heading}
          variant="h2"
          align="center"
        >
          Memories
        </Typography>
      </div>

      <img className={classes.image} src={memories} alt="icon" height="60" />
    </AppBar>
  );
};
export default Navbar;
