import React from 'react';

const Plancard = ({ title, description, icon, link }) => {
  return (
    <div className="tm-services-card-item">
      <div className="tm-services-card-item-img-area">
        {icon ? (
          <img className='tm-services-card-icon' src={icon} alt="" />
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
