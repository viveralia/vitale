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
    image: LanguageIcon,
    title: "Calidad internacional",
  },
  {
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis",
    image: NaturePeopleIcon,
    title: "Amigable con el ambiente",
  },
  {
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis",
    image: BugReportIcon,
    title: "Evita microorganismos",
  },
  {
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis",
    image: WbSunnyIcon,
    title: "Bloquea rayos UV",
  },
];

const useStyles = makeStyles(theme => ({
  colorContainer: {
    backgroundColor: "rgba(34, 60, 83, 0.025);",
  },
  gridStyle: {
    padding: "1rem 1.5rem",
    [theme.breakpoints.up("lg")]: {
      flexWrap: "nowrap",
    },
  },
  sectionStyle: {
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
    <div className={classes.colorContainer}>
      <Container component="section" className={classes.sectionStyle}>
        <Grid container spacing={3} className={classes.gridStyle}>
          {featurelist.map((feature, index) => {
            return (
              <Feature
                key={index}
                title={feature.title}
                content={feature.content}
                Icon={feature.image}
              />
            );
          })}
        </Grid>
      </Container>
    </div>
  );
};

export default FeatureList;
