import React, { useState } from "react";
import useContactData from "../../../hooks/useContactData";

const Faq = () => {
  const {section} = useContactData("Contact Us", "Question and Answer")


  const [activeFAQ, setActiveFAQ] = useState(null);
  const toggleAccordion = (id) => {
    setActiveFAQ(activeFAQ === id ? null : id);
  };
  return (
    <>
      <div className="section-padding-x m-bottom">
        <div className="tm-faq-section">
          <div className="tm-faq-row">
            <div className="tm-faq-col">
              <div className="car-contact-text-element-header">
                <p className="tm-common-sub-heading">{section?.section_name}</p>
                <h3 className="tm-common-heading">
                 {section?.title}
                </h3>
                <p className="tm-common-para">
                  {section?.description}
                </p>
              </div>
            </div>
            <div classNameName="tm-faq-col">
              <div classNameName="accordion tm-accordion" id="faqAccordion">
                {section?.question_and_answer?.map((faq) => (
                  <div classNameName="accordion-item" key={faq.id}>
                    <h2 classNameName="accordion-header" id={`heading${faq.question}`}>
                      <button
                        classNameName={`accordion-button ${
                          activeFAQ === faq.id ? "" : "collapsed"
                        }`}
                        type="button"
                        onClick={() => toggleAccordion(faq.id)}
                        aria-expanded={activeFAQ === faq.id ? "true" : "false"}
                        aria-controls={`collapse${faq.answer}`}
                      >
                        {faq.question}
                        <span
                          classNameName={`icon-plus ${
                            activeFAQ === faq.id ? "d-none" : ""
                          }`}
                        >
                       
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="25"
                            viewBox="0 0 24 25"
                            fill="none"
                          >
                            <path
                              d="M12 5.5V19.5"
                              stroke="#252C32"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M5 12.5H19"
                              stroke="#252C32"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>
                        <span
                          classNameName={`icon-minus ${
                            activeFAQ === faq.id ? "" : "d-none"
                          }`}
                        >
                       
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="25"
                            viewBox="0 0 24 25"
                            fill="none"
                          >
                            <path
                              d="M5 12.5H19"
                              stroke="#252C32"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>
                      </button>
                    </h2>
                    <div
                      id={`collapse${faq.id}`}
                      classNameName={`accordion-collapse collapse ${
                        activeFAQ === faq.id ? "show" : ""
                      }`}
                      aria-labelledby={`heading${faq.id}`}
                      data-bs-parent="#faqAccordion"
                    >
                      <div classNameName="accordion-body">{faq.answer}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div classNameName="tm-need-more-help">
                <h3>Need More Help?</h3>
                <p>
                  Sem morbi netus mauris purus eros blandit tristique at
                  maecenas. Eu tellus enim.
                </p>
                <a
                  classNameName="tm-contact-gmail"
                  href="mailto:hi@electema.com?cc=cc@example.com&bcc=bcc@example.com&subject=Inquiry&body=Demo email"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Faq;
