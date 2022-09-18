import React from 'react';
import Logo from "../images/Vector.svg";
import {Link, Route, Routes} from "react-router-dom";

const Header = ({ email, logout }) => {

    return (
            <header className="header">
                <img src={Logo} alt="Логотип Место" className="header__logo" />
                <div className='header__wrapper'>
                    {email && <p className='header__text'>{email}</p>}
                    <Routes>
                        <Route path='/sign-up' element={<Link to='/sign-in'
                                                              className='header__link'>
                            Войти
                        </Link>}/>
                        <Route path='/sign-in' element={<Link to='/sign-up'
                                                              className='header__link'>
                            Регистрация
                        </Link>}/>
                        <Route path='/' element={<Link to='/sign-in'
                                                       className='header__link'
                                                       onClick={logout}>
                            Выйти
                        </Link>}/>
                    </Routes>
                </div>
            </header>
    );
};

export default Header;