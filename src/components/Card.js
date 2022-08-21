import React from 'react';
import trash from "../images/Trash.svg";


const Card = ({ image, myKey, title, likesCount, onCardClick, card }) => {
    return (
        <li className="card__item" key={myKey}>
            <img src={trash} alt="Корзина"
                 className="card__item-thrash" />
            <img src={image} alt={title}
                 className="card__item-image" onClick={() => onCardClick(card)} />
            <div className="card__item-description">
                <h2 className="card__item-title">{title}</h2>
                <div className="card__item-like-container">
                    <button className="card__item-like-button" type="button"/>
                    <p className="card__item-like-counter">{likesCount}</p>
                </div>
            </div>
        </li>
    );
};

export default Card;