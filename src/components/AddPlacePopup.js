import React, {useEffect, useState} from 'react';
import PopupWithForm from "./PopupWithForm";
import {useFormAndValidation} from "../hooks/useFormAndValidation";

const AddPlacePopup = ({ isOpen, onClose, onAddPlace }) => {
    const {values, handleChange, errors, isValid, setValues, resetForm} = useFormAndValidation({
        name: '',
        link: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault();

        if (isValid) {
            onAddPlace({
                name: values.name,
                link: values.link
            });
        }
    }

    useEffect(() => {
        if (!isOpen) {
            resetForm();
        }
    }, [isOpen])

    return (
        <PopupWithForm
            title={'Новое место'}
            name={'place'}
            isOpen={isOpen}
            onClose={onClose}
            btnText={'Сохранить'}
            onSubmit={handleSubmit}
            isValid={isValid}
        >
            <fieldset className="form">
                <label className="form__input-label">
                    <input type="text" className="form__input" placeholder="Название" id="name"
                           name="name" value={values.name || ''} onChange={handleChange}
                           minLength="2" maxLength="30" required/>
                    <span className={`form__input-error ${isValid ? '' : 'form__input-error_active'}`}>{errors.name}</span>
                </label>
                <label className="form__input-label">
                    <input type="url" className="form__input" placeholder="Ссылка на картинку" id="link"
                           value={values.link || ''} onChange={handleChange}
                           name="link" required/>
                    <span className={`form__input-error ${isValid ? '' : 'form__input-error_active'}`}>{errors.link}</span>
                </label>
            </fieldset>
        </PopupWithForm>
    );
};

export default AddPlacePopup;