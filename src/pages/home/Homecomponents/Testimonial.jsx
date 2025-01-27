import React from "react";
import Slider from "react-slick";
import Avatar from "../../../assets/avatar.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useHomeData from "../../../hooks/useHomeData";

const Testimonial = () => {
  const { section } = useHomeData("Home", "Customer Testimonials");

  const settings = {
    infinite: true,
    arrows: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="testimonial-section">
      <div className="section-padding-x">
        <h2 className="section-title">{section?.title}</h2>
        <p className="section-subtitle">{section?.description}</p>
        <Slider {...settings}>
          {section?.customer_review && section.customer_review.length > 0 ? (
            section.customer_review.map((testimonial, index) => (
              <div key={index} className="testimonial-item">
                <div className="stars">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M12 1.25C12.2668 1.25 12.5134 1.39168 12.6478 1.6221L15.989 7.34985L22.1834 8.91209C22.4402 8.97684 22.6437 9.17215 22.719 9.42598C22.7943 9.67981 22.7302 9.95455 22.5504 10.1488L18.318 14.7204L19.9122 21.836C19.9735 22.1096 19.8771 22.3946 19.6622 22.5747C19.4473 22.7549 19.1499 22.8001 18.8912 22.692L12 19.8128L5.10881 22.692C4.85009 22.8001 4.55269 22.7549 4.33782 22.5747C4.12295 22.3946 4.02652 22.1096 4.08782 21.836L5.68203 14.7204L1.44966 10.1488C1.26979 9.95455 1.20568 9.67981 1.281 9.42598C1.35631 9.17215 1.55988 8.97684 1.81661 8.91209L8.01099 7.34985L11.3522 1.6221C11.4866 1.39168 11.7333 1.25 12 1.25Z"
                          fill="#F4C700"
                        />
                      </svg>
                    </span>
                  ))}
                </div>
                <p>{testimonial?.review}</p>
                <div className="testimonial-author">
                  <img src={testimonial?.customer_image_url} alt="John D" />
                  <div className="author-details">
                    <h4>{testimonial.customer_name}</h4>
                    <p>{testimonial.customer_position}</p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div>No testimonials available</div>
          )}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonial;
