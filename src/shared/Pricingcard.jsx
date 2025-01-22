import React from "react";

const Pricingcard = ({
  title,
  description,
  price,
  list1,
  list2,
  list3,
  list4,
}) => {
  return (
    <>
      <div class="pricing-card">
        <h3>{title}</h3>
        <div class="price">${price}</div>
        <p>{description}</p>
        <button class="btn-custom">Get Started</button>
        <ul>
          <li>{list1}</li>
          <li>{list2}</li>
          <li>{list3}</li>
          <li>{list4}</li>
        </ul>
      </div>
    </>
  );
};

export default Pricingcard;
