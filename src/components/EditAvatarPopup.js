import React, {useRef} from 'react';
import PopupWithForm from "./PopupWithForm";

const EditAvatarPopup = ({ isOpen, onClose, onUpdateAvatar }) => {
    const inputRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();

        onUpdateAvatar({
            avatar: inputRef.current.value,
        });
    }

    return (
        <PopupWithForm
            name={'avatar'}
            title={'Обновить аватар'}
            isOpen={isOpen}
            onClose={onClose}
            btnText={'Сохранить'}
            onSubmit={handleSubmit}
        >
            <fieldset className="form">
                <label className="form__input-label">
                    <input ref={inputRef} type="url" className="form__input" placeholder="Ссылка на аватар" id="avatar"
                           name="avatar_link" required/>
                    <span className="form__input-error avatar-error"/>
                </label>
            </fieldset>
        </PopupWithForm>
    );
};

export default EditAvatarPopup;