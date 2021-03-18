import React, { FC } from "react";

import AboutCompanyList from "../components/about-company-list";
import FeatureList from "../components/feature-list";
import Hero from "../components/hero";
import Layout from "../components/layout";

const IndexPage: FC = () => {
  return (
    <Layout>
      <Hero />
      <FeatureList />
      <AboutCompanyList />
    </Layout>
  );
};

export default IndexPage;
