import { Container, Grid, Typography, makeStyles } from "@material-ui/core";
import React, { FC } from "react";

import companyLists from "../constants/company-lists";
import AboutCompanyItem from "./about-company-item";

const useStyles = makeStyles(theme => ({
  section: {
    backgroundColor: theme.palette.background.paper,
    paddingBottom: "2rem",
    paddingTop: "2rem",
    [theme.breakpoints.up("md")]: {
      paddingBottom: "3.5rem",
      paddingTop: "3.5rem",
    },
  },
  title: {
    paddingBottom: "3rem",
    [theme.breakpoints.up("md")]: {
      fontSize: "2rem",
      margin: "0rem auto",
      maxWidth: "871px",
      paddingBottom: "4rem",
      textAlign: "center",
    },
  },
}));

const AboutCompanyList: FC = () => {
  const classes = useStyles();

  return (
    <section className={classes.section}>
      <Container>
        <Typography variant="h2" className={classes.title}>
          Producimos, comercializamos y distribuimos soluciones de
          almacenamiento de agua.
        </Typography>
        <Grid container spacing={4}>
          {companyLists.map((list, index) => (
            <AboutCompanyItem
              key={index}
              number={index + 1}
              title={list.title}
              content={list.content}
              image={list.image}
              alt={list.alt}
            />
          ))}
        </Grid>
      </Container>
    </section>
  );
};

export default AboutCompanyList;
