import React from "react";
import useServiceData from "../../../hooks/useServiceData";

const Jumpservice = () => {
  const { section } = useServiceData("Services", "Jumpstart Service");
  return (
    <>
      <section className="section-padding-x text-img-container m-top m-bottom">
        <div className="img-container">
          <img src={section?.image_url} alt="Serphoto" />
        </div>
        <div className="text-container">
          <div className="section-title mt-4">Jumpstart Service</div>
          <div className="section-text mt-3">
            Our Jumpstart Service is the quick and reliable solution when your
            car battery fails. Whether you’re stuck at home, work, or on the
            road, our trained technicians will arrive promptly to jumpstart your
            vehicle and get you moving again.
          </div>
          <div className="section-text mt-3">
            We cater to all types of vehicles, including petrol, diesel, hybrid,
            and electric models. If your battery cannot be revived, we’ll guide
            you on the next steps, including battery replacement if required.
          </div>

          <div className="about-benefits">
            <div className="item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="31"
                height="31"
                viewBox="0 0 31 31"
                fillRule="none"
              >
                <path
                  d="M29.7945 15.5C29.7945 23.5035 23.2413 30 15.1473 30C7.05319 30 0.5 23.5035 0.5 15.5C0.5 7.49647 7.05319 1 15.1473 1C23.2413 1 29.7945 7.49647 29.7945 15.5Z"
                  stroke="#252C32"
                />
                <path
                 fillRule="evenodd"
                  clipRule="evenodd"
                  d="M15.2912 12.678L18.8793 13.2211C19.0994 13.2544 19.2063 13.4471 19.1178 13.6515L17.677 16.9822C17.5886 17.1866 17.3384 17.3252 17.1182 17.2919C16.898 17.2586 16.7912 17.0659 16.8796 16.8615C17.2223 16.0694 16.3663 15.2933 15.6114 15.7117L11.6851 17.8881C11.517 17.9813 11.3052 17.9205 11.2121 17.7524C11.1189 17.5844 11.1796 17.3726 11.3477 17.2794L15.274 15.103C16.0289 14.6846 15.8243 13.5473 14.971 13.4182C14.7508 13.3849 14.644 13.1922 14.7324 12.9878C14.8208 12.7834 15.071 12.6447 15.2912 12.678Z"
                  fill="#252C32"
                />
              </svg>
              <span> Fast Response Time. </span>
            </div>

            <div className="item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="31"
                height="31"
                viewBox="0 0 31 31"
                fillRule="none"
              >
                <path
                  d="M29.7945 15.5C29.7945 23.5035 23.2413 30 15.1473 30C7.05319 30 0.5 23.5035 0.5 15.5C0.5 7.49647 7.05319 1 15.1473 1C23.2413 1 29.7945 7.49647 29.7945 15.5Z"
                  stroke="#252C32"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M15.2912 12.678L18.8793 13.2211C19.0994 13.2544 19.2063 13.4471 19.1178 13.6515L17.677 16.9822C17.5886 17.1866 17.3384 17.3252 17.1182 17.2919C16.898 17.2586 16.7912 17.0659 16.8796 16.8615C17.2223 16.0694 16.3663 15.2933 15.6114 15.7117L11.6851 17.8881C11.517 17.9813 11.3052 17.9205 11.2121 17.7524C11.1189 17.5844 11.1796 17.3726 11.3477 17.2794L15.274 15.103C16.0289 14.6846 15.8243 13.5473 14.971 13.4182C14.7508 13.3849 14.644 13.1922 14.7324 12.9878C14.8208 12.7834 15.071 12.6447 15.2912 12.678Z"
                  fill="#252C32"
                />
              </svg>
              <span> Experienced Technicians. </span>
            </div>
            <div className="item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="31"
                height="31"
                viewBox="0 0 31 31"
                fillRule="none"
        
              >
                <path
                  d="M29.7945 15.5C29.7945 23.5035 23.2413 30 15.1473 30C7.05319 30 0.5 23.5035 0.5 15.5C0.5 7.49647 7.05319 1 15.1473 1C23.2413 1 29.7945 7.49647 29.7945 15.5Z"
                  stroke="#252C32"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M15.2912 12.678L18.8793 13.2211C19.0994 13.2544 19.2063 13.4471 19.1178 13.6515L17.677 16.9822C17.5886 17.1866 17.3384 17.3252 17.1182 17.2919C16.898 17.2586 16.7912 17.0659 16.8796 16.8615C17.2223 16.0694 16.3663 15.2933 15.6114 15.7117L11.6851 17.8881C11.517 17.9813 11.3052 17.9205 11.2121 17.7524C11.1189 17.5844 11.1796 17.3726 11.3477 17.2794L15.274 15.103C16.0289 14.6846 15.8243 13.5473 14.971 13.4182C14.7508 13.3849 14.644 13.1922 14.7324 12.9878C14.8208 12.7834 15.071 12.6447 15.2912 12.678Z"
                  fill="#252C32"
                />
              </svg>
              <span> Available 24/7. </span>
            </div>
            <div className="item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="31"
                height="31"
                viewBox="0 0 31 31"
                fill="none"
              >
                <path
                  d="M29.7945 15.5C29.7945 23.5035 23.2413 30 15.1473 30C7.05319 30 0.5 23.5035 0.5 15.5C0.5 7.49647 7.05319 1 15.1473 1C23.2413 1 29.7945 7.49647 29.7945 15.5Z"
                  stroke="#252C32"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M15.2912 12.678L18.8793 13.2211C19.0994 13.2544 19.2063 13.4471 19.1178 13.6515L17.677 16.9822C17.5886 17.1866 17.3384 17.3252 17.1182 17.2919C16.898 17.2586 16.7912 17.0659 16.8796 16.8615C17.2223 16.0694 16.3663 15.2933 15.6114 15.7117L11.6851 17.8881C11.517 17.9813 11.3052 17.9205 11.2121 17.7524C11.1189 17.5844 11.1796 17.3726 11.3477 17.2794L15.274 15.103C16.0289 14.6846 15.8243 13.5473 14.971 13.4182C14.7508 13.3849 14.644 13.1922 14.7324 12.9878C14.8208 12.7834 15.071 12.6447 15.2912 12.678Z"
                  fill="#252C32"
                />
              </svg>
              <span> Affordable Rates </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Jumpservice;
