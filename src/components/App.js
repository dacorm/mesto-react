import '../index.css'
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import {useState} from "react";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {
    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
    const [selectedCard, setSelectedCard] = useState({});
    const [isImageOpen, setIsImageOpen] = useState(false);

    const handleCardClick = (obj) => {
        setIsImageOpen(true);
        setSelectedCard(obj);
    }

    const closeAllPopups = () => {
        setIsEditProfilePopupOpen(false);
        setIsAddPlacePopupOpen(false);
        setIsEditAvatarPopupOpen(false);
        setIsImageOpen(false);
    }

    const handleEditAvatarClick = () => {
        setIsEditAvatarPopupOpen(true);
    }

    const handleEditProfileClick = () => {
        setIsEditProfilePopupOpen(true);
    }

    const handleAddPlaceClick = () => {
        setIsAddPlacePopupOpen(true);
    }

    return (
        <div>
            <div className="page">
                <Header/>
                <Main
                    onAddPlace={handleAddPlaceClick}
                    onEditProfile={handleEditProfileClick}
                    onEditAvatar={handleEditAvatarClick}
                    onCardClick={handleCardClick}
                />
                <Footer/>
                <PopupWithForm title={'Редактировать профиль'} name={'profile'} isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}>
                    <fieldset className="form">
                        <label className="form__input-label">
                            <input type="text" className="form__input" placeholder="Ваше Имя"
                                   id="fullName"
                                   name="name" minLength="2" maxLength="40" required/>
                            <span className="form__input-error fullName-error"/>
                        </label>
                        <label className="form__input-label">
                            <input type="text" className="form__input" placeholder="Место работы"
                                   id="workplace" name="workplace" minLength="2" maxLength="200" required/>
                            <span className="form__input-error workplace-error"/>
                        </label>
                    </fieldset>
                </PopupWithForm>
                <PopupWithForm title={'Новое место'} name={'place'} isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}>
                    <fieldset className="form">
                        <label className="form__input-label">
                            <input type="text" className="form__input" placeholder="Название" id="name"
                                   name="new_place"
                                   minLength="2" maxLength="30" required/>
                            <span className="form__input-error name-error"/>
                        </label>
                        <label className="form__input-label">
                            <input type="url" className="form__input" placeholder="Ссылка на картинку" id="link"
                                   name="place_link" required/>
                            <span className="form__input-error link-error"/>
                        </label>
                    </fieldset>
                </PopupWithForm>
                <ImagePopup onClose={closeAllPopups} card={selectedCard} isImageOpen={isImageOpen} />
                <PopupWithForm title={'Вы уверены?'} name={'confirm'}>
                    <form className="popup__form" name="confirm_form" id="place_confirm" noValidate>
                        <h2 className="popup__form-title popup__form-title_confirm">Вы уверены?</h2>
                        <button className="popup__save-button" type="submit">Да</button>
                    </form>
                </PopupWithForm>
                <PopupWithForm name={'avatar'} title={'Обновить аватар'} isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}>
                    <fieldset className="form">
                        <label className="form__input-label">
                            <input type="url" className="form__input" placeholder="Ссылка на аватар" id="avatar"
                                   name="avatar_link" required/>
                            <span className="form__input-error avatar-error"/>
                        </label>
                    </fieldset>
                </PopupWithForm>
            </div>
        </div>
    );
}

export default App;
