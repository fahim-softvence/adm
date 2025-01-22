import React from 'react';

const Plancard = ({ title, description, icon, link }) => {
  return (
    <div className="tm-services-card-item">
      <div className="tm-services-card-item-img-area">
        {icon ? (
          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="48" viewBox="0 0 50 48" fill="none">
            {icon}
          </svg>
        ) : (
          <div>No Icon Available</div>
        )}
      </div>
      <div className="tm-services-card-item-content-area">
        <h4>{title}</h4>
        <p>
          {description}
          {link && (
            <span className="tm-service-hidden-span">
              .....<a href={link}>Read More</a>
            </span>
          )}
        </p>
      </div>
    </div>
  );
};

export default Plancard;
