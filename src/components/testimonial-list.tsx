import { Container, Grid, makeStyles, Typography } from "@material-ui/core";
import React, { FC } from "react";

import testimonials from "../constants/testimonials";
import Testimonial from "./testimonial";

const useStyles = makeStyles(theme => ({
  section: {
    paddingBottom: "2rem",
    paddingTop: "2rem",
    [theme.breakpoints.up("md")]: {
      paddingBottom: "3.5rem",
      paddingTop: "3.5rem",
    },
  },
  title: {
    paddingBottom: "2rem",
    textAlign: "center",
    [theme.breakpoints.up("md")]: {
      fontSize: "2rem",
    },
  },
}));

const TestimonialList: FC = () => {
  const classes = useStyles();
  return (
    <section className={classes.section}>
      <Container>
        <Typography variant="h2" className={classes.title}>
          Nuestros clientes opinan
        </Typography>
        <Grid container spacing={4}>
          {testimonials.map((testimonial, index) => {
            return (
              <Grid item xs={12} md={4} key={index}>
                <Testimonial
                  content={testimonial.content}
                  designation={testimonial.designation}
                  name={testimonial.name}
                  image={testimonial.image}
                />
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </section>
  );
};

export default TestimonialList;
