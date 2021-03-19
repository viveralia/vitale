import { Container, Grid, makeStyles, Typography } from "@material-ui/core";
import React, { FC } from "react";

import testimonials from "./constants/testimonials";
import Testimonial from "./testimonial";

const useStyles = makeStyles(theme => ({
  section: {
    padding: "2rem 0",
  },
  title: {
    fontSize: "1.375",
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
        <Typography variant="h6" component="h2" className={classes.title}>
          Nuestros clientes opinan
        </Typography>
        <Grid container spacing={6}>
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
