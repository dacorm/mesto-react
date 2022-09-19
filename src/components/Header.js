import React, {useState} from 'react';
import Logo from "../images/Vector.svg";
import {Link, Route, Routes, useLocation} from "react-router-dom";

const Header = ({email, logout}) => {
    const [isPopupOpened, setIsPopupOpened] = useState(false);
    const location = useLocation();

    const togglePopup = () => {
        setIsPopupOpened(!isPopupOpened);
    }

    return (
        <>
            {
                isPopupOpened && (
                    <div className='header__popup'>
                        {email && <p className='header__popup-text'>{email}</p>}
                        <Link to='/sign-in'
                              className='header__link'
                              onClick={() => {
                                  logout();
                                  togglePopup();
                              }}>
                            Выйти
                        </Link>
                    </div>
                )
            }
            <header className="header">
                <img src={Logo} alt="Логотип Место" className="header__logo"/>
                <div className='header__wrapper'>
                    {email && <p className='header__text'>{email}</p>}
                    <Routes>
                        <Route path='/sign-up' element={<Link to='/sign-in'
                                                              className={`header__link ${location.pathname === '/' ? 'header__link_invisible' : ''}`}>
                            Войти
                        </Link>}/>
                        <Route path='/sign-in' element={<Link to='/sign-up'
                                                              className={`header__link ${location.pathname === '/' ? 'header__link_invisible' : ''}`}>
                            Регистрация
                        </Link>}/>
                        <Route path='/' element={<Link to='/sign-in'
                                                       className={`header__link ${location.pathname === '/' ? 'header__link_invisible' : ''}`}
                                                       onClick={logout}>
                            Выйти
                        </Link>}/>
                    </Routes>
                    {location.pathname === '/' && <div className='burger' onClick={togglePopup}>
                        <span
                            className={`burger__line burger__line_first ${isPopupOpened ? 'burger__line_first_opened' : ''}`}/>
                        <span
                            className={`burger__line burger__line_second ${isPopupOpened ? 'burger__line_second_opened' : ''}`}/>
                        <span
                            className={`burger__line burger__line_third ${isPopupOpened ? 'burger__line_third_opened' : ''}`}/>
                    </div>}
                </div>
            </header>
        </>
    );
};

export default Header;