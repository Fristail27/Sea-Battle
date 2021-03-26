import s from "./Cards.module.css"
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../store/store";
import {CardType} from "../../api/cards-api";
import React, {useEffect, useState} from "react";
import {Redirect, useParams} from "react-router-dom";
import {addCardTC, delCardTC, getCardsTC, InitialStateType, updCardTC} from "../../store/cards-Reducer";
import {Paginator} from "../../common/paginator/Paginator";
import {RequestStatusType} from "../../store/app-Reducer";
import {Card} from "./Card/Card";

export const Cards = () => {

    const dispatch = useDispatch()
    const cards = useSelector<AppRootStateType, Array<CardType>>(state => state.cards.cards)
    const userId = useSelector<AppRootStateType, string | undefined>(state => state.auth.userData?._id)
    const cardsState = useSelector<AppRootStateType, InitialStateType>(state => state.cards)
    const statusApp = useSelector<AppRootStateType, RequestStatusType>(state => state.app.appStatus)
    const isAuth = useSelector<AppRootStateType, boolean>(state => state.auth.isAuth)
    const {id} = useParams<{ id?: string }>()
    const [rend, setRend] = useState<number>(0)

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
            dispatch(updCardTC(id, {_id: cardId, comments: "new comment", question: "new que"}))
        }
    }

    if (statusApp !== "loading" && rend !== 1) {
        setRend(1)
    }

    useEffect(() => {
        if (id && statusApp !== "loading" && isAuth) {
            dispatch(getCardsTC({cardsPack_id: id, pageCount: cardsState.pageCount}))
        }
    }, [rend, isAuth, dispatch, id, cardsState.pageCount])

    if (!isAuth) {
        return <Redirect to={"/login"}/>
    }

    return (<div>
            <Paginator clickHandler={(n: number) => dispatch(getCardsTC({
                page: n,
                cardsPack_id: id,
                pageCount: cardsState.pageCount
            } as any))}
                       paginatorSize={10} pagesCount={Math.ceil(cardsState.cardsTotalCount / cardsState.pageCount)}
                       currentPage={cardsState.page}/>
            <div className={s.cardsHeader}>
                <div>Question</div>
                <div>Answer</div>
                <div>Grade</div>
                <div>Updated</div>
                <div>
                    <button disabled={userId !== cardsState.packUserId} style={{margin: "10px"}} onClick={addCard}>Add
                    </button>
                </div>
            </div>
            {cards.map(c => <Card key={c._id} _id={c._id} answer={c.answer} cardsPack_id={c.cardsPack_id}
                                  grade={c.grade} question={c.question} updated={c.updated} userId={userId}
                                  updateCard={updateCard} deleteCard={deleteCard} cardsState={cardsState}/>)}
        </div>
    )
}