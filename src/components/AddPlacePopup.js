import React, {useState} from 'react';
import PopupWithForm from "./PopupWithForm";

const AddPlacePopup = ({ isOpen, onClose, onAddPlace }) => {
    const [name, setName] = useState('');
    const [link, setLink] = useState('');

    const handleNameChange = (e) => {
        setName(e.target.value)
    }

    const handleLinkChange = (e) => {
        setLink(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        onAddPlace({
            name,
            link
        });
        setName('');
        setLink('');
    }

    return (
        <PopupWithForm
            title={'Новое место'}
            name={'place'}
            isOpen={isOpen}
            onClose={onClose}
            btnText={'Сохранить'}
            onSubmit={handleSubmit}
        >
            <fieldset className="form">
                <label className="form__input-label">
                    <input type="text" className="form__input" placeholder="Название" id="name"
                           name="new_place" value={name} onChange={handleNameChange}
                           minLength="2" maxLength="30" required/>
                    <span className="form__input-error name-error"/>
                </label>
                <label className="form__input-label">
                    <input type="url" className="form__input" placeholder="Ссылка на картинку" id="link"
                           value={link} onChange={handleLinkChange}
                           name="place_link" required/>
                    <span className="form__input-error link-error"/>
                </label>
            </fieldset>
        </PopupWithForm>
    );
};

export default AddPlacePopup;