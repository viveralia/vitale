import React, { FC } from "react";

import AboutCompanyList from "../components/about-company-list";
import FeatureList from "../components/feature-list";
import Hero from "../components/hero";
import Layout from "../components/layout";
import SEO from "../components/seo";
import TestimonialList from "../components/testimonial-list";

const IndexPage: FC = () => {
  return (
    <Layout>
      <SEO title="Agua a tu alcance" />
      <Hero />
      <FeatureList />
      <AboutCompanyList />
      <TestimonialList />
    </Layout>
  );
};

export default IndexPage;
