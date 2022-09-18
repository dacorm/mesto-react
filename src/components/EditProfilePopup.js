import React, {useContext, useEffect, useState} from 'react';
import CurrentUserContext from "../contexts/CurrentUserContext";
import PopupWithForm from "./PopupWithForm";
import {useFormAndValidation} from "../hooks/useFormAndValidation";

const EditProfilePopup = ({isOpen, onClose, onUpdateUser}) => {
    const {values, handleChange, errors, isValid, setValues, resetForm} = useFormAndValidation({
        name: '',
        workplace: '',
    })
    const currentUser = useContext(CurrentUserContext);

    function handleSubmit(e) {
        e.preventDefault();

        if (isValid) {
            onUpdateUser({
                name: values.name,
                about: values.workplace,
            });
        }

    }

    useEffect(() => {
        if (currentUser.name && currentUser.about) {
            setValues({
                name: currentUser.name,
                workplace: currentUser.about
            });
        }
        if (!isOpen) {
            resetForm();
        }
    }, [isOpen])

    return (
        <PopupWithForm
            title={'Редактировать профиль'}
            name={'profile'}
            isOpen={isOpen}
            onClose={onClose}
            btnText={'Сохранить'}
            onSubmit={handleSubmit}
            isValid={isValid}
        >
            <fieldset className="form">
                <label className="form__input-label">
                    <input type="text" className="form__input" placeholder="Ваше Имя"
                           id="fullName" value={values.name || ''} onChange={handleChange}
                           name="name" minLength="2" maxLength="40" required/>
                    <span className={`form__input-error ${isValid ? '' : 'form__input-error_active'}`}>{errors.name}</span>
                </label>
                <label className="form__input-label">
                    <input type="text" className="form__input" placeholder="Место работы" value={values.workplace || ''} onChange={handleChange}
                           id="workplace" name="workplace" minLength="2" maxLength="200" required/>
                    <span className={`form__input-error ${isValid ? '' : 'form__input-error_active'}`}>{errors.workplace}</span>
                </label>
            </fieldset>
        </PopupWithForm>
    );
};

export default EditProfilePopup;