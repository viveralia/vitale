import { Container, Grid, makeStyles } from "@material-ui/core";
import BugReportIcon from "@material-ui/icons/BugReport";
import LanguageIcon from "@material-ui/icons/Language";
import NaturePeopleIcon from "@material-ui/icons/NaturePeople";
import WbSunnyIcon from "@material-ui/icons/WbSunny";
import React, { FC } from "react";

import Feature from "./feature";

const featurelist = [
  {
    content:
      "Seguimos los más altos estándares de calidad en nuestros productos.",
    icon: LanguageIcon,
    title: "Calidad internacional",
  },
  {
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis",
    icon: NaturePeopleIcon,
    title: "Amigable con el ambiente",
  },
  {
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis",
    icon: BugReportIcon,
    title: "Evita microorganismos",
  },
  {
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis",
    icon: WbSunnyIcon,
    title: "Bloquea rayos UV",
  },
];

const useStyles = makeStyles(theme => ({
  container: {
    paddingBottom: "1rem",
    paddingTop: "1rem",
    [theme.breakpoints.up("md")]: {
      paddingBottom: "3.5rem",
      paddingTop: "3.5rem",
    },
  },
}));

const FeatureList: FC = () => {
  const classes = useStyles();

  return (
    <div>
      <Container component="section">
        <Grid container spacing={5} className={classes.container}>
          {featurelist.map((feature, index) => {
            return (
              <Feature
                key={index}
                title={feature.title}
                content={feature.content}
                Icon={feature.icon}
              />
            );
          })}
        </Grid>
      </Container>
    </div>
  );
};

export default FeatureList;
