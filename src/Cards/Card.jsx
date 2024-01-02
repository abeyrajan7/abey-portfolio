import React from "react";
import './Card.css'
import BackgroundImage from '../Assets/background.jpg'

const Card = ({title, imageUrl, body}) => {
    return(
        <div className="card-container" >
            <div className="image-container">
                <img src={imageUrl} alt='image' />
            </div>
            <div className="details-box">
                <div className="care-title">
                    {title}
                </div>
                <div >
                    <p>{body}</p>
                </div>
            </div>
            <div className="btn">
                <button>
                    <a>
                        view more
                    </a>
                </button>
            </div>
        </div>
    );
}

export default Card;