import React from 'react';
import './Card.css';

const PortfolioCard = ({ title, imageUrl, body, showMore, toggleShowMore }) => {
  const truncatedBody = showMore ? body : body.substring(0, 250) + '...';
  const cardHeight = showMore ? '64.6rem' : '48rem';

  return (
    <div className="card text-center" style={{ height: cardHeight }}>
      <div className="overflow">
        <div className="inner">
          <img src={imageUrl} alt="Image 1" className="card-img-top img" />
        </div>
      </div>
      <div className="card-body text-dark">
        <h4 className="card-title">{title}</h4>
        <p className="card-text text-secondary">
          <h6>{truncatedBody}</h6>
        </p>
        <button
          className="btn btn-outline-success"
          onClick={toggleShowMore}
        >
          {showMore ? 'Show less' : 'Show more'}
        </button>
      </div>
    </div>
  );
};

export default PortfolioCard;