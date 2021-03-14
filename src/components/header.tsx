import { Container, makeStyles } from "@material-ui/core";
import React, { FC } from "react";

import vitaleLogo from "../images/vitale_logo.png";

const useStyles = makeStyles(theme => ({
  headerStyles: {
    margin: "1.6rem",
    textAlign: "center",
    [theme.breakpoints.up("md")]: {
      textAlign: "left",
    },
  },
}));

const Header: FC = () => {
  const classes = useStyles();

  return (
    <Container>
      <header className={classes.headerStyles}>
        <img src={vitaleLogo} alt="logo vitale" />
      </header>
    </Container>
  );
};

export default Header;
