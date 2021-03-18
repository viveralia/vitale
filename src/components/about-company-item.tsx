import {
  Grid,
  makeStyles,
  Typography,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import React, { FC } from "react";

interface AboutCompanyItemProps {
  alt: string;
  content: string;
  image: string;
  number: number;
  title: string;
}
const useStyles = makeStyles(theme => ({
  content: {
    [theme.breakpoints.up("md")]: {
      fontSize: "1.5rem",
    },
  },
  imageStyle: {
    width: "100%",
  },
  title: {
    color: "#000",
    fontSize: "1.125rem",
    [theme.breakpoints.up("md")]: {
      fontSize: "2rem",
    },
  },
}));

const AboutCompanyItem: FC<AboutCompanyItemProps> = ({
  title,
  content,
  image,
  alt,
  number,
}) => {
  const classes = useStyles();
  const theme = useTheme();
  const isMdOrAbove = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <Grid item>
      <Grid
        container
        alignItems="center"
        spacing={isMdOrAbove ? 6 : 0}
        direction={number % 2 === 0 ? "row-reverse" : "row"}
      >
        <Grid item xs={12} md={6}>
          <img src={image} alt={alt} className={classes.imageStyle} />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h6" component="h3" className={classes.title}>
            {title}
          </Typography>
          <Typography color="textSecondary" className={classes.content}>
            {content}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default AboutCompanyItem;
