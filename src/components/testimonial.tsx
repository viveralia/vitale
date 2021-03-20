import { Avatar, makeStyles, Typography } from "@material-ui/core";
import React, { FC } from "react";

interface TestimonialProps {
  content: string;
  designation: string;
  image: string;
  name: string;
}

const useStyles = makeStyles(theme => ({
  avatar: {
    display: "block",
    height: theme.spacing(7),
    margin: "1rem auto",
    width: theme.spacing(7),
  },
  card: {
    backgroundColor: theme.palette.background.paper,
    borderRadius: "10px",
    boxShadow: "6px 6px 25px 8px rgba(196, 196, 196, 0.2)",
  },
  content: {
    padding: "3rem 2rem",
  },
  designation: {
    fontSize: "0.875rem",
    textAlign: "center",
  },
  name: {
    textAlign: "center",
  },
  triangle: {
    borderLeft: "20px solid transparent",
    borderRight: "20px solid transparent",
    borderTop: "20px solid #FFFFFF",
    height: 0,
    margin: "0 auto",
    width: 0,
  },
}));

const Testimonial: FC<TestimonialProps> = ({
  content,
  designation,
  name,
  image,
}) => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.card}>
        <Typography className={classes.content}>{content}</Typography>
      </div>
      <div className={classes.triangle}></div>
      <Avatar alt="image" src={image} className={classes.avatar} />
      <Typography variant="h4" className={classes.name}>
        {name}
      </Typography>
      <Typography className={classes.designation}>{designation}</Typography>
    </>
  );
};

export default Testimonial;
