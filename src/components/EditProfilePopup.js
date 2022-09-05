import React, {useContext, useEffect, useState} from 'react';
import CurrentUserContext from "../contexts/CurrentUserContext";
import PopupWithForm from "./PopupWithForm";

const EditProfilePopup = ({isOpen, onClose, onUpdateUser}) => {
    const [name, setName] = useState('');
    const [workplace, setWorkplace] = useState('');
    const currentUser = useContext(CurrentUserContext);

    function handleSubmit(e) {
        e.preventDefault();

        onUpdateUser({
            name,
            about: workplace,
        });

    }

    useEffect(() => {
        setName('');
        setWorkplace('');
    }, [isOpen])

    useEffect(() => {
        if (currentUser.name && currentUser.about) {
            setName(currentUser.name);
            setWorkplace(currentUser.about);
        }
    }, [currentUser])

    const onNameChange = (e) => {
        setName(e.target.value)
    }

    const onWorkplaceChange = (e) => {
        setWorkplace(e.target.value)
    }

    return (
        <PopupWithForm
            title={'Редактировать профиль'}
            name={'profile'}
            isOpen={isOpen}
            onClose={onClose}
            btnText={'Сохранить'}
            onSubmit={handleSubmit}
        >
            <fieldset className="form">
                <label className="form__input-label">
                    <input type="text" className="form__input" placeholder="Ваше Имя"
                           id="fullName" value={name} onChange={onNameChange}
                           name="name" minLength="2" maxLength="40" required/>
                    <span className="form__input-error fullName-error"/>
                </label>
                <label className="form__input-label">
                    <input type="text" className="form__input" placeholder="Место работы" value={workplace} onChange={onWorkplaceChange}
                           id="workplace" name="workplace" minLength="2" maxLength="200" required/>
                    <span className="form__input-error workplace-error"/>
                </label>
            </fieldset>
        </PopupWithForm>
    );
};

export default EditProfilePopup;