import '../index.css'
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import {useEffect, useState} from "react";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import {api} from "../utils/Api";
import CurrentUserContext from "../contexts/CurrentUserContext";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import AddPlacePopup from "./AddPlacePopup";

function App() {
    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
    const [selectedCard, setSelectedCard] = useState({});
    const [isImageOpen, setIsImageOpen] = useState(false);
    const [currentUser, setCurrentUser] = useState({});
    const [cards, setCards] = useState([]);

    const fetchCards = async () => {
        try {
            const res = await api.getInitialCards();
            setCards(res);
        } catch (e) {
            console.warn(e)
        }
    }

    const handleCardLike = async (card) => {
        const isLiked = card.likes.some(i => i._id === currentUser._id);
        try {
            const resChangeLikeStatus = await api.changeLikeCardStatus(card, !isLiked);
            setCards((state) => state.map((c) => c._id === card._id ? resChangeLikeStatus : c));
        } catch (error) {
            console.warn(error);
        }
    }

    const handleDeleting = async (card) => {
        try {
            await api.deleteCard(card._id);
            setCards((newArray) => newArray.filter((item) => card._id !== item._id))
            closeAllPopups();
        } catch (error) {
            console.warn(error);
        }
    }

    useEffect(() => {
        fetchCards();
    }, [])

    const handleUserUpdate = async (obj) => {
        try {
            const changedProfile = await api.setUserInfo(obj);
            setCurrentUser(changedProfile);
            closeAllPopups();
        } catch (e) {
            console.warn(e)
        }
    }

    const handleAvatarUpdate = async (obj) => {
        try {
            const avatarChanged = await api.changeAvatar(obj);
            setCurrentUser(avatarChanged);
            closeAllPopups();
        } catch (e) {
            console.warn(e)
        }
    }

    const handleAddPlace = async (obj) => {
        try {
            const newPlace = api.addNewCard(obj);
            setCards([newPlace, ...cards]);
            closeAllPopups();
        } catch (e) {
            console.warn(e)
        }
    }

    const fetchData = async () => {
        try {
            const profileObject = await api.getUserInfo();
            setCurrentUser(profileObject);
        } catch (error) {
            console.warn(error);
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

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
        <CurrentUserContext.Provider value={currentUser}>
            <div>
                <div className="page">
                    <Header/>
                    <Main
                        onAddPlace={handleAddPlaceClick}
                        onEditProfile={handleEditProfileClick}
                        onEditAvatar={handleEditAvatarClick}
                        onCardClick={handleCardClick}
                        closePopup={closeAllPopups}
                        cards={cards}
                        onCardLike={handleCardLike}
                        onCardDelete={handleDeleting}
                    />
                    <Footer/>
                    <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUserUpdate} />
                    <AddPlacePopup isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} onAddPlace={handleAddPlace}/>
                    <ImagePopup onClose={closeAllPopups} card={selectedCard} isImageOpen={isImageOpen}/>
                    <PopupWithForm
                        title={'Вы уверены?'}
                        name={'confirm'}
                        btnText={'Да'}
                    >
                    </PopupWithForm>
                    <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} onUpdateAvatar={handleAvatarUpdate} />
                </div>
            </div>
        </CurrentUserContext.Provider>
    );
}

export default App;
