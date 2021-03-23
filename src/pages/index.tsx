import React, { FC, useState } from "react";

import AboutCompanyList from "../components/about-company-list";
import FeatureList from "../components/feature-list";
import FinalCallToAction from "../components/final-call-to-action";
import Hero from "../components/hero";
import Layout from "../components/layout";
import QuotationRequest from "../components/quotation-request";
import SEO from "../components/seo";
import TestimonialList from "../components/testimonial-list";

const IndexPage: FC = () => {
  const [open, setOpen] = useState(false);
  const [amount, setAmount] = useState(30);

  return (
    <Layout>
      <SEO title="Agua a tu alcance" />
      <Hero setOpen={setOpen} setAmount={setAmount} amount={amount} />
      <FeatureList />
      <AboutCompanyList />
      <TestimonialList />
      <FinalCallToAction setOpen={setOpen} />
      <QuotationRequest open={open} setOpen={setOpen} amount={amount} />
    </Layout>
  );
};

export default IndexPage;
