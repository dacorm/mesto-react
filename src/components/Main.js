import React, {useEffect, useState} from 'react';
import {api} from "../utils/Api";
import Card from "./Card";

const Main = ({ onEditProfile, onAddPlace, onEditAvatar, onCardClick }) => {
    const [userAvatar, setUserAvatar] = useState('');
    const [userName, setUserName] = useState('');
    const [userDescription, setUserDescription] = useState('');
    const [cards, setCards] = useState([]);

    const fetchCards = async () => {
        try {
            const res = await api.getInitialCards();
            setCards(res);
        } catch (e) {
            console.warn(e)
        }
    }

    const fetchData = async () => {
        try {
            const res = await api.getUserInfo();
            setUserName(res.name);
            setUserDescription(res.description);
            setUserAvatar(res.avatar);
        } catch (e) {
            console.warn(e)
        }
    }

    useEffect(() => {
        fetchData();
        fetchCards();
    }, [])

    return (
        <>
            <section className="profile">
                <div className="profile__avatar">
                    <img src={userAvatar} alt="Ваша Аватарка" className="profile__avatar-image" onClick={onEditAvatar}/>
                </div>
                <div className="profile__info">
                    <h1 className="profile__name">{userName ?? 'Denis Utkin'} </h1>
                    <button className="profile__edit-button" type="button" onClick={onEditProfile} />
                    <p className="profile__workplace">{userDescription ?? 'Frontend developer'}</p>
                </div>
                <button className="profile__add-button" type="button" onClick={onAddPlace}/>
            </section>
            <section className="card">
                <ul className="card__items">
                    {
                        cards.map((card) => <Card card={card} key={card._id} title={card.name} image={card.link} likesCount={card.likes.length} onCardClick={onCardClick} />)
                    }
                </ul>
            </section>
        </>
    );
};

export default Main;