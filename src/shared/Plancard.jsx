import React, { useState } from 'react';

const Plancard = ({ title, description, icon }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleDescription = () => {
    setIsExpanded((prev) => !prev);
  };

  const truncatedDescription = description?.slice(0, 150);

  return (
    <div className="tm-services-card-item">
      <div className="tm-services-card-item-img-area">
        {icon ? (
          <img className="tm-services-card-icon" src={icon} alt="" />
        ) : (
          <div>No Icon Available</div>
        )}
      </div>
      <div className="tm-services-card-item-content-area">
        <h4>{title}</h4>
        <p className={`tm-description ${isExpanded ? 'expanded' : ''}`}>
          {isExpanded ? description : truncatedDescription}...
        </p>
        <button onClick={toggleDescription} className="read-more-btn">
          {isExpanded ? 'Read Less...' : 'Read More....'}
        </button>
      </div>
    </div>
  );
};

export default Plancard;
