import React from "react";
import './Card.css'

import { Card, Container, Row, Col } from 'react-bootstrap';

const PortfolioCard = ({title, imageUrl, body}) => {
    return(
    <div className="card text-center">
      <div alt="institute image" className="overflow">
        <div className="inner">
        <img src={imageUrl} alt="Image 1" className="card-img-top img"/>
        </div>
      </div>
      <div className="card-body text-dark">
        <h4 className="card-title">Card Title</h4>
        <p className="card-text text-secondary">
          {body}
        </p>
        <a href="#" className="btn btn-outline-success">More Details</a>
      </div>

    </div>
    );
}

export default PortfolioCard;