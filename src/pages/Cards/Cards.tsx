import s from "./Cards.module.css"
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../store/store";
import {CardType} from "../../api/cards-api";
import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {addCardTC, delCardTC, getCardsTC, InitialStateType, updCardTC} from "../../store/cards-Reducer";
import {Paginator} from "../../common/paginator/Paginator";
import {RequestStatusType} from "../../store/app-Reducer";

export const Cards = () => {

    const dispatch = useDispatch()
    const cards = useSelector<AppRootStateType, Array<CardType>>(state => state.cards.cards)
    const cardsState = useSelector<AppRootStateType, InitialStateType>(state => state.cards)
    const statusApp = useSelector<AppRootStateType, RequestStatusType>(state => state.app.appStatus)
    const {id} = useParams<{ id?: string }>()
    const [rend, setRend] = useState<number>(0)

    if (statusApp !=="loading" && rend !== 1) {
        setRend(1)
    }

    useEffect(() => {
        if (id && statusApp !=="loading") {
            dispatch(getCardsTC({cardsPack_id: id}))
        }
    }, [rend, dispatch])

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
            <Paginator clickHandler={(n:number)=>dispatch(getCardsTC({page:n, cardsPack_id: id} as any))} paginatorSize={10} pagesCount={Math.ceil(cardsState.cardsTotalCount/cardsState.pageCount)} currentPage={cardsState.page}/>
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