import React from 'react';
import './index.scss';
import { Link } from 'react-router-dom'
import { ReactComponent as MoreVert } from 'assets/icons/more-vert.svg';
import { ReactComponent as LikesHeart } from 'assets/icons/likes-heart.svg';

const Card = ({ img, title, id }) => {
    return (
        <div className="card__container" id={id}>
            <div className="card__likes">
                <button className="card__likes-button">
                    <LikesHeart className="card__likes-heart" />
                </button>
                <p>1.3k</p>
            </div>
            <img className="card__img" src={img} alt={title} />
            <div className="card__details">
                <h2>{title}</h2>
                <Link to="/moredetails">
                    <MoreVert className="card__more-vert" />
                </Link>
            </div>
        </div>
    );
}

export default Card;