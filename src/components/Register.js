import React, {useState} from 'react';
import { Link, useNavigate } from "react-router-dom";
import InfoToolTip from "./InfoToolTip";

const Register = ({ handleRegister, isOk, isOpen, onClose }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        handleRegister(password, email);
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }

    return (
        <div>
            <div className='register'>
                <div className='register__up-wrapper'>
                    <h1 className='register__title'>Регистрация</h1>
                    <form className='register__form'>
                        <input type="email"
                               className='register__input'
                               placeholder='Email'
                               value={email}
                               onChange={handleEmailChange}/>
                        <input type="password"
                               className='register__input'
                               placeholder='Пароль'
                               value={password}
                               onChange={handlePasswordChange} />
                    </form>
                </div>
                <div className='register__down-wrapper'>
                    <button className='register__button' type='submit' onClick={handleSubmit}>Зарегистрироваться</button>
                    <p className='register__text'>Уже зарегистрированы? <Link to='/sign-in' className='register__text'>Войти</Link></p>
                </div>
            </div>
            <InfoToolTip isOk={isOk} isOpen={isOpen} onClose={onClose} />
        </div>
    );
};

export default Register;