import { makeStyles, Typography } from "@material-ui/core";
import React, { FC, ReactNode } from "react";

interface FeatureProps {
  Icon: ReactNode;
  content: string;
  title: string;
}

const useStyles = makeStyles(() => ({
  imageStyle: {
    height: "38px",
    width: "38px",
  },
  titleStyle: {
    fontSize: "0.0625 rem",
  },
}));

const Feature: FC<FeatureProps> = ({ content, Icon, title }) => {
  const classes = useStyles();
  return (
    <>
      <Icon color="primary" className={classes.imageStyle} />
      <Typography variant="h6" component="h2" className={classes.titleStyle}>
        {title}
      </Typography>
      <Typography>{content}</Typography>
    </>
  );
};

export default Feature;
