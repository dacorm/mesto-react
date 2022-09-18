import React, {useEffect} from 'react';
import {useNavigate} from "react-router-dom";
import {useFormAndValidation} from "../hooks/useFormAndValidation";
import InfoToolTip from "./InfoToolTip";

const Login = ({ handleLogin, isLoggedIn, isOk, isOpen, onClose, error }) => {
    const {values, handleChange, errors, isValid, setValues, resetForm} = useFormAndValidation({
        email: '',
        password: ''
    })
    const navigate = useNavigate();

    // чтобы если пользователь просто ввел
    // /sign-in в url, его редиректило на мейн
    useEffect(() => {
      if (isLoggedIn) {
          navigate('/')
      }
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isValid) {
            handleLogin(values.password, values.email);
        }
        resetForm();
    }

    useEffect(() => {
        if (isLoggedIn) navigate('/')
    }, [isLoggedIn])


    return (
        <div>
            <div className='login'>
                <div className='login__up-wrapper'>
                    <h1 className='login__title'>Вход</h1>
                    <form className='login__form'>
                        <label className="form__input-label">
                            <input type="email"
                                   name='email'
                                   required={true}
                                   className='login__input'
                                   placeholder='Email'
                                   value={values.email || ''}
                                   onChange={handleChange}/>
                            <span className={`form__input-error ${isValid ? '' : 'form__input-error_active'}`}>{errors.email}</span>
                        </label>
                        <label className="form__input-label">
                            <input type="password"
                                   name='password'
                                   required={true}
                                   className='login__input'
                                   placeholder='Пароль'
                                   value={values.password || ''}
                                   onChange={handleChange} />
                            <span className={`form__input-error ${isValid ? '' : 'form__input-error_active'}`}>{errors.password}</span>
                        </label>
                    </form>
                </div>
                <button className={`login__button ${isValid ? '' : 'login__button_disabled'}`} disabled={!isValid} onClick={handleSubmit}>Войти</button>
            </div>
            <InfoToolTip isOk={isOk} isOpen={isOpen} error={error} onClose={onClose} />
        </div>
    );
};

export default Login;