import React from "react";
import Contact from "../../../assets/car-contact.png"
import useContactData from "../../../hooks/useContactData";

const Getin = () => {
  const {section} = useContactData("Contact Us", "Contact Us")
  return (
    <>
      <section className="section-padding-x m-top m-bottom">
        <div className="car-contact-section">
          <div className="car-contact-row">
            <div className="car-contact-col">
              <div className="car-contact-text-element">
                <div className="car-contact-text-element-header">
                  <p className="tm-common-sub-heading">Get In Touch</p>
                  <h3 className="tm-common-heading">
                    {section?.title}
                  </h3>
                  <p className="tm-common-para">
                    {section?.description}
                  </p>
                </div>
                <div className="car-contact-text-element-footer">
                  <div className="tm-car-contact-way">
                    <div className="tm-car-contact-way-img-area">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="33"
                        height="33"
                        viewBox="0 0 33 33"
                        fill="none"
                      >
                        <path
                          d="M29.5614 23.1288V27.1288C29.5629 27.5002 29.4869 27.8677 29.3381 28.2079C29.1894 28.5482 28.9712 28.8536 28.6975 29.1046C28.4239 29.3557 28.1009 29.5468 27.7491 29.6658C27.3973 29.7847 27.0246 29.8289 26.6548 29.7955C22.5519 29.3497 18.6108 27.9477 15.1481 25.7021C11.9265 23.655 9.19522 20.9237 7.1481 17.7021C4.89474 14.2238 3.49242 10.2635 3.05477 6.14215C3.02145 5.77344 3.06527 5.40183 3.18343 5.05098C3.3016 4.70013 3.49153 4.37773 3.74112 4.10431C3.99072 3.83088 4.29451 3.61243 4.63316 3.46284C4.9718 3.31326 5.33789 3.23583 5.7081 3.23548H9.7081C10.3552 3.22911 10.9825 3.45825 11.4731 3.88019C11.9637 4.30213 12.2842 4.88808 12.3748 5.52881C12.5436 6.8089 12.8567 8.06578 13.3081 9.27548C13.4875 9.75271 13.5263 10.2714 13.42 10.77C13.3136 11.2686 13.0666 11.7263 12.7081 12.0888L11.0148 13.7821C12.9128 17.1202 15.6767 19.8841 19.0148 21.7821L20.7081 20.0888C21.0706 19.7303 21.5283 19.4833 22.0269 19.3769C22.5255 19.2706 23.0442 19.3094 23.5214 19.4888C24.7311 19.9402 25.988 20.2533 27.2681 20.4221C27.9158 20.5135 28.5073 20.8398 28.9301 21.3388C29.353 21.8379 29.5777 22.4749 29.5614 23.1288Z"
                          stroke="white"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>

                    <div className="tm-car-contact-way-text-area">
                      <h3>Call Us</h3>
                      <a href="tel:+6286464442222">+62 864 6444 2222</a>
                    </div>
                  </div>
                  <div className="tm-contact-devider"></div>
                  <div className="tm-car-contact-way">
                    <div className="tm-car-contact-way-img-area">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="33"
                        height="33"
                        viewBox="0 0 33 33"
                        fill="none"
                      >
                        <path
                          d="M29.4274 16.521H21.4274L18.7607 20.521H13.4274L10.7607 16.521H2.76074"
                          stroke="white"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M7.36074 7.33449L2.76074 16.5212V24.5212C2.76074 25.2284 3.04169 25.9067 3.54179 26.4068C4.04189 26.9069 4.72016 27.1878 5.42741 27.1878H26.7607C27.468 27.1878 28.1463 26.9069 28.6464 26.4068C29.1465 25.9067 29.4274 25.2284 29.4274 24.5212V16.5212L24.8274 7.33449C24.6066 6.89021 24.2663 6.51632 23.8447 6.25487C23.4231 5.99341 22.9369 5.85476 22.4407 5.85449H9.74741C9.2513 5.85476 8.76509 5.99341 8.34347 6.25487C7.92184 6.51632 7.58151 6.89021 7.36074 7.33449Z"
                          stroke="white"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                    <div className="tm-car-contact-way-text-area">
                      <h3>Email</h3>
                      <a href="mailto:hi@electema.com?cc=cc@example.com&bcc=bcc@example.com&subject=Inquiry&body=Demo email">
                        hi@electema.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="car-contact-col">
              <div className="car-contact-col-img-area">
                <img src={section?.image_url} alt="" srcset="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Getin;
