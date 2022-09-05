import React, {useContext} from 'react';
import Card from "./Card";
import CurrentUserContext from "../contexts/CurrentUserContext";

const Main = ({ onEditProfile, onAddPlace, onEditAvatar, onCardClick, onCardLike, onCardDelete, cards }) => {
    const profileContext = useContext(CurrentUserContext);
    const { name, avatar, about } = profileContext;

    return (
        <>
            <section className="profile">
                <div className="profile__avatar">
                    <img src={avatar} alt="Ваша Аватарка" className="profile__avatar-image" onClick={onEditAvatar}/>
                </div>
                <div className="profile__info">
                    <h1 className="profile__name">{name ?? 'Denis Utkin'} </h1>
                    <button className="profile__edit-button" type="button" onClick={onEditProfile} />
                    <p className="profile__workplace">{about ?? 'Frontend developer'}</p>
                </div>
                <button className="profile__add-button" type="button" onClick={onAddPlace}/>
            </section>
            <section className="card">
                <ul className="card__items">
                    {
                        cards.map((card) => (<Card
                            card={card}
                            key={card._id}
                            title={card.name}
                            image={card.link}
                            likesCount={card.likes.length}
                            onCardClick={onCardClick}
                            onCardLike={onCardLike}
                            onCardDelete={onCardDelete}
                        />))
                    }
                </ul>
            </section>
        </>
    );
};

export default Main;