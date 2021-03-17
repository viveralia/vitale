import React, { FC } from "react";

import FeatureList from "../components/feature-list";
import Hero from "../components/hero";
import Layout from "../components/layout";

const IndexPage: FC = () => {
  return (
    <Layout>
      <Hero />
      <FeatureList />
    </Layout>
  );
};

export default IndexPage;
