import React, { useState } from "react";

const Faq = () => {
  const faqs = [
    {
      id: 1,
      question: "What types of breakdowns do you handle?",
      answer:
        "We handle a wide range of breakdowns, including flat batteries, flat tires, engine failure, and accidents.",
    },
    {
      id: 2,
      question: "Do you offer 24/7 breakdown recovery?",
      answer:
        "Yes, we provide 24/7 breakdown recovery to ensure you’re never left stranded, no matter the time or place.",
    },
    {
      id: 3,
      question: "Do I need to pay upfront?",
      answer:
        "Payment options depend on your chosen plan or service. For pay-as-you-go services, payment is required upfront. Members on a subscription plan can access services without upfront charges.",
    },
    {
      id: 4,
      question: "How can I pay for the service?",
      answer:
        "We accept all major payment methods, including credit/debit cards, mobile payments, and online transfers, for your convenience.",
    },
    {
      id: 5,
      question: "Will my car be taken to a repair garage?",
      answer:
        "Yes, if required. We can tow your car to a nearby repair garage or a location of your choice, depending on your situation and preferences.",
    },
  ];

  const [activeFAQ, setActiveFAQ] = useState(null);
  const toggleAccordion = (id) => {
    setActiveFAQ(activeFAQ === id ? null : id);
  };
  return (
    <>
      <div class="section-padding-x m-bottom">
        <div class="tm-faq-section">
          <div class="tm-faq-row">
            <div class="tm-faq-col">
              <div class="car-contact-text-element-header">
                <p class="tm-common-sub-heading">Questions & Answers</p>
                <h3 class="tm-common-heading">
                  Frequently Asked <br class="d-none d-md-block" />
                  Questions
                </h3>
                <p class="tm-common-para">
                  Turpis lacus mi arcu mauris lorem non risus. Vel sodales
                  facilisis quis <br class="d-none d-xxl-block" />
                  quam tincidunt semper neque sit nisl.
                </p>
              </div>
            </div>
            <div className="tm-faq-col">
              <div className="accordion tm-accordion" id="faqAccordion">
                {faqs.map((faq) => (
                  <div className="accordion-item" key={faq.id}>
                    <h2 className="accordion-header" id={`heading${faq.id}`}>
                      <button
                        className={`accordion-button ${
                          activeFAQ === faq.id ? "" : "collapsed"
                        }`}
                        type="button"
                        onClick={() => toggleAccordion(faq.id)}
                        aria-expanded={activeFAQ === faq.id ? "true" : "false"}
                        aria-controls={`collapse${faq.id}`}
                      >
                        {faq.question}
                        <span
                          className={`icon-plus ${
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
                          className={`icon-minus ${
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
                      className={`accordion-collapse collapse ${
                        activeFAQ === faq.id ? "show" : ""
                      }`}
                      aria-labelledby={`heading${faq.id}`}
                      data-bs-parent="#faqAccordion"
                    >
                      <div className="accordion-body">{faq.answer}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="tm-need-more-help">
                <h3>Need More Help?</h3>
                <p>
                  Sem morbi netus mauris purus eros blandit tristique at
                  maecenas. Eu tellus enim.
                </p>
                <a
                  className="tm-contact-gmail"
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
