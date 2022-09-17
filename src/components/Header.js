import React, {useContext} from 'react';
import Logo from "../images/Vector.svg";
import {Link, useLocation} from "react-router-dom";
import CurrentUserContext from "../contexts/CurrentUserContext";

const Header = ({ isLoggedIn = false }) => {
    const location = useLocation();
    const profileContext = useContext(CurrentUserContext);
    const { email } = profileContext;

    return (
            <header className="header">
                <img src={Logo} alt="Логотип Место" className="header__logo" />
                <div className='header__wrapper'>
                    {email && <p className='header__text'>{email}</p>}
                    {isLoggedIn
                        ? (<Link to='/sign-in' className='header__link'>Выйти</Link>)
                        : location.pathname === '/sign-up'
                            ? (<Link to='/sign-in' className='header__link'>Войти</Link>)
                            : (<Link to='/sign-up' className='header__link'>Регистрация</Link>)
                    }
                </div>
            </header>
    );
};

export default Header;