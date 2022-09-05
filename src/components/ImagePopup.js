import React from 'react';

const ImagePopup = ({ onClose, card, isImageOpen }) => {
    return (
        <div className={`popup popup_image ${isImageOpen ? 'popup_active' : null}`} id="popup_image">
            <div className="popup__image-wrapper">
                <button className="popup__escape-button popup__escape-button_place_image" id="image_close"
                        type="button" onClick={onClose} />
                <img src={card.link} alt={card.name} className="popup__image" />
                <h3 className="popup__image-description">{card.name}</h3>
            </div>
        </div>
    );
};

export default ImagePopup;