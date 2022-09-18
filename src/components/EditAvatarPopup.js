import React, {useEffect} from 'react';
import PopupWithForm from "./PopupWithForm";
import {useFormAndValidation} from "../hooks/useFormAndValidation";

const EditAvatarPopup = ({ isOpen, onClose, onUpdateAvatar }) => {
    const {values, handleChange, errors, isValid, setValues, resetForm} = useFormAndValidation({
        avatar: ''
    })


    const handleSubmit = (e) => {
        e.preventDefault();

        if (isValid) {
            onUpdateAvatar({
                avatar: values.avatar,
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
            name={'avatar'}
            title={'Обновить аватар'}
            isOpen={isOpen}
            onClose={onClose}
            btnText={'Сохранить'}
            onSubmit={handleSubmit}
            isValid={isValid}
        >
            <fieldset className="form">
                <label className="form__input-label">
                    <input type="url"
                           className="form__input"
                           placeholder="Ссылка на аватар"
                           id="avatar"
                           name="avatar"
                           required value={values.avatar || ''}
                           onChange={handleChange}/>
                    <span className={`form__input-error ${isValid ? '' : 'form__input-error_active'}`}>{errors.avatar}</span>
                </label>
            </fieldset>
        </PopupWithForm>
    );
};

export default EditAvatarPopup;