import React from 'react';
import Logo from "../images/Vector.svg";

const Header = () => {
    return (
            <header className="header">
                <img src={Logo} alt="Логотип Место" className="header__logo" />
            </header>
    );
};

export default Header;