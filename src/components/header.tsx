import { Container, makeStyles } from "@material-ui/core";
import React, { FC } from "react";

import vitaleLogo from "../assets/images/vitale_logo.png";

const useStyles = makeStyles(theme => ({
  colorContainer: {
    backgroundColor: theme.palette.background.paper,
  },
  headerStyles: {
    padding: "1.6rem 0",
    textAlign: "center",
    [theme.breakpoints.up("md")]: {
      textAlign: "left",
    },
  },
}));

const Header: FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.colorContainer}>
      <Container>
        <header className={classes.headerStyles}>
          <img src={vitaleLogo} alt="logo vitale" />
        </header>
      </Container>
    </div>
  );
};

export default Header;
