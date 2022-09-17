import React from 'react';

const Login = () => {
    return (
        <div>
            <div className='login'>
                <div className='login__up-wrapper'>
                    <h1 className='login__title'>Вход</h1>
                    <form className='login__form'>
                        <input type="email" className='login__input' placeholder='Email'/>
                        <input type="password" className='login__input' placeholder='Пароль'/>
                    </form>
                </div>
                <button className='login__button'>Войти</button>
            </div>
        </div>
    );
};

export default Login;