import { Container, Grid, makeStyles } from "@material-ui/core";
import React, { FC } from "react";

import featureLists from "../constants/feature-lists";
import Feature from "./feature";

const useStyles = makeStyles(theme => ({
  section: {
    paddingBottom: "2rem",
    paddingTop: "2rem",
    [theme.breakpoints.up("md")]: {
      paddingBottom: "3.5rem",
      paddingTop: "3.5rem",
    },
  },
}));

const FeatureList: FC = () => {
  const classes = useStyles();

  return (
    <section className={classes.section}>
      <Container>
        <Grid container spacing={4}>
          {featureLists.map((list, index) => {
            return (
              <Grid item xs={12} md={6} lg={3} key={index}>
                <Feature
                  title={list.title}
                  content={list.content}
                  Icon={list.icon}
                />
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </section>
  );
};

export default FeatureList;
