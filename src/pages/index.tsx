import React, { FC, useState } from "react";

import AboutCompanyList from "../components/about-company-list";
import FeatureList from "../components/feature-list";
import FinalCallToAction from "../components/final-call-to-action";
import Hero from "../components/hero";
import Layout from "../components/layout";
import QuotationRequest from "../components/quotation-request";
import SEO from "../components/seo";
import TestimonialList from "../components/testimonial-list";

export interface Quotation {
  capacity: string;
  delivery: string;
  email: string;
  name: string;
  phone: string;
  quantity: number;
}

export const initialQuotation: Quotation = {
  capacity: "1,100 lts",
  delivery: "",
  email: "",
  name: "",
  phone: "",
  quantity: 35,
};

const IndexPage: FC = () => {
  const [open, setOpen] = useState(false);
  const [quotation, setQuotation] = useState(initialQuotation);

  const changeQuantity = (newQuantity: number) => {
    setQuotation({ ...quotation, quantity: newQuantity });
  };

  return (
    <Layout>
      <SEO title="Agua a tu alcance" />
      <Hero
        setOpen={setOpen}
        changeQuantity={changeQuantity}
        quantity={quotation.quantity}
      />
      <FeatureList />
      <AboutCompanyList />
      <TestimonialList />
      <FinalCallToAction setOpen={setOpen} />
      <QuotationRequest
        open={open}
        setOpen={setOpen}
        setQuotation={setQuotation}
        quotation={quotation}
      />
    </Layout>
  );
};

export default IndexPage;
