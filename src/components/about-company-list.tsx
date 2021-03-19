import { Container, Grid, Typography, makeStyles } from "@material-ui/core";
import React, { FC } from "react";

import rectangle1 from "../assets/images/Rectangle 1.png";
import rectangle2 from "../assets/images/Rectangle 2.png";
import rectangle3 from "../assets/images/Rectangle 3.png";
import AboutCompanyItem from "./about-company-item";

const companyList = [
  {
    alt: "Tinaco de Vitale en carretera",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo arcu blandit aliquam risus lectus senectus.",
    image: rectangle1,
    title: "Capacidad de entrega",
  },
  {
    alt: "Camión lleno de tinacos sobre carretera",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Convallis lectus diam nibh laoreet placerat.",
    image: rectangle2,
    title: "Más de 20 años de experiencia",
  },
  {
    alt: "Varios tinacos de vitale en producción",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Augue tincidunt placerat amet neque.",
    image: rectangle3,
    title: "Proyectos sociales y gubernamentales",
  },
];

const useStyles = makeStyles(theme => ({
  sectionStyle: {
    backgroundColor: theme.palette.background.paper,
    padding: "3rem 0",
  },
  title: {
    fontSize: "1.375rem",
    paddingBottom: "3rem",
    [theme.breakpoints.up("md")]: {
      fontSize: "2rem",
      margin: "2rem auto",
      maxWidth: "871px",
      textAlign: "center",
    },
  },
}));

const AboutCompanyList: FC = () => {
  const classes = useStyles();

  return (
    <section className={classes.sectionStyle}>
      <Container>
        <Typography variant="h6" component="h2" className={classes.title}>
          Producimos, comercializamos y distribuimos soluciones de
          almacenamiento de agua.
        </Typography>
        <Grid container spacing={6}>
          {companyList.map((list, index) => (
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
