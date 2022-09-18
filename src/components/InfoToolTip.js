import React from 'react';
import good from '../images/good.svg';
import bad from '../images/bad.svg';
import {useLocation, useNavigate} from "react-router-dom";

const InfoToolTip = ({ onClose, isOpen, isOk, error }) => {
    const navigate = useNavigate()
    const location = useLocation();

    const closePopup = () => {
        if (isOk) {
            onClose();
            if (location.pathname === '/sign-up') {
                navigate('/sign-in')
            }
        } else {
            onClose();
        }
    }

    return (
        <div className={`popup ${isOpen ? 'popup_active' : ''}`}>
            <div className="popup__form-container">
                <button className="popup__escape-button" type="button" onClick={closePopup}/>
                {isOk && (<>
                    <img src={good} alt="Регистрация прошла успешно иконка" className='popup__icon'/>
                    <p className='popup__text'>Вы успешно зарегистрировались!</p>
                </>)}
                {!isOk && (<>
                    <img src={bad} alt="Что-то пошло не так иконка" className='popup__icon'/>
                    <p className='popup__text'>{error}</p>
                </>)}
            </div>
        </div>
    );
};

export default InfoToolTip;