import { Link, makeStyles } from "@material-ui/core";
import React, { FC, ReactNode } from "react";

export interface SocialNetworkProps {
  Icon: ReactNode;
  path: string;
}
const useStyles = makeStyles(theme => ({
  icon: {
    color: theme.palette.background.paper,
    fontSize: "1.5rem",
    marginRight: "1rem",
  },
}));

const SocialNetwork: FC<SocialNetworkProps> = ({ Icon, path }) => {
  const classes = useStyles();
  return (
    <Link href={path} target="_blank" rel="noopener noreferrer">
      <Icon className={classes.icon} />
    </Link>
  );
};

export default SocialNetwork;
