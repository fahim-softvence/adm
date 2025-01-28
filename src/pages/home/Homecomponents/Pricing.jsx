import React from "react";
import Pricingcard from "../../../shared/Pricingcard";

const Pricing = () => {
  return (
    <>
      <section className="pricing-section" id="pricing">
        <div className="section-padding-x">
          <h2 className="section-title">Pricing & Plans</h2>
          <p className="section-subtitle">
            Both a free trial and a free set of features for anyone who wants to
            use them. The more orders your company
          </p>

          <div className="pricing-cards">
            <Pricingcard
              title="Basic"
              description="Best for small business owners, startups who need a landing page
                for their business."
              price="99"
              list1="Up to 2 free recoveries within 10 miles."
              list2="Emergency fuel delivery (fuel cost extra)."
              list3="Battery jumpstart service (1 free per year)."
              list4="24/7 support via phone or chat."
            />

            <Pricingcard
              title="Premium"
              description="Best for small business owners, startups who need a landing page
                for their business."
              price="199"
              list1="Up to 5 free recoveries within 20 miles."
              list2="Emergency fuel delivery (fuel cost extra)."
              list3="Battery jumpstart service (1 free per year)."
              list4="24/7 support via phone or chat."
            />

            <Pricingcard
              title="Enterprise"
              description="Best for small business owners, startups who need a landing page
                for their business."
              price="299"
              list1="Up to 2 free recoveries within 10 miles."
              list2="Emergency fuel delivery (fuel cost extra)."
              list3="Battery jumpstart service (1 free per year)."
              list4="24/7 support via phone or chat."
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Pricing;
