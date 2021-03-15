import s from "./Cards.module.css"
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../store/store";
import {CardType} from "../../api/cards-api";
import React, {useEffect} from "react";
import {useParams} from "react-router-dom";
import {addCardTC, delCardTC, getCardsTC, updCardTC} from "../../store/cards-Reducer";
import {Paginator} from "../../common/paginator/Paginator";

export const Cards = () => {

    const dispatch = useDispatch()
    const cards = useSelector<AppRootStateType, Array<CardType>>(state => state.cards.cards as any)
    const {id} = useParams<{ id?: string }>()

    useEffect(() => {
        if (id) {
            dispatch(getCardsTC({cardsPack_id: id , pageCount:10}))
        }
    }, [])

    const addCard = () => {
        if (id) {
            dispatch(addCardTC({cardsPack_id: id, answer: "ans", question: "que"}))
        }
    }
    const deleteCard = (cardId: string, packId: string) => {
        dispatch(delCardTC(cardId, packId))
    }
    const updateCard = (cardId: string) => {
        if (id) {
            dispatch(updCardTC(id, {_id: cardId, comments: "new ans", question: "new que"}))
        }
    }

    return (<div>
            {/*<Paginator currentPage={}/>*/}
            <div className={s.cardsHeader}>
                <div>Question</div>
                <div>Answer</div>
                <div>Grade</div>
                <div>Created</div>
                <div>Updated</div>
                <div>
                    <button style={{margin: "10px"}} onClick={addCard}>Add</button>
                </div>
            </div>
            {cards.map(c => <div key={c._id} className={s.cards}>
                <div style={{width: "250px"}}>{c.question}</div>
                <div style={{width: "250px"}}>{c.answer}</div>
                <div style={{width: "250px"}}>{c.grade}</div>
                <div style={{width: "250px"}}>{c.created}</div>
                <div style={{width: "250px"}}>{c.updated}</div>
                <div className={s.buttons}>
                    <button style={{margin: "10px"}} onClick={() => deleteCard(c._id, c.cardsPack_id)}>Delete</button>
                    <button style={{margin: "10px"}} onClick={() => updateCard(c._id)}>Update</button>
                </div>
            </div>)}
        </div>
    )
}