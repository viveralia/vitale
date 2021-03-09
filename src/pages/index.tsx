import Button from "@material-ui/core/Button";
import React, { FC } from "react";

import Layout from "../components/layout";

const IndexPage: FC = () => {
  return (
    <Layout>
      <p color="textSecondary">Home page</p>
      <Button variant="contained" color="primary">
        Hello World
      </Button>
    </Layout>
  );
};

export default IndexPage;
