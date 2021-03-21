import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../store/store";
import {CardType, GradeType} from "../../api/cards-api";
import {useParams} from "react-router-dom";
import {getCardsTC, setCardGradeTC} from "../../store/cards-Reducer";
import {RequestStatusType} from "../../store/app-Reducer";
import s from "./LearnCards.module.css"

const getCard = (cards: CardType[]) => {
    const sum = cards.reduce((acc, card) => acc + (6 - card.grade) * (6 - card.grade), 0);
    const rand = Math.random() * sum;
    const res = cards.reduce((acc: { sum: number, id: number }, card, i) => {
            const newSum = acc.sum + (6 - card.grade) * (6 - card.grade);
            return {sum: newSum, id: newSum < rand ? i : acc.id}
        }
        , {sum: 0, id: -1});
    console.log('test: ', sum, rand, res)

    return cards[res.id + 1];
}

export const LearnCards = () => {

    const cards = useSelector<AppRootStateType, Array<CardType>>(state => state.cards.cards)
    const statusApp = useSelector<AppRootStateType, RequestStatusType>(state => state.app.appStatus)
    const {id} = useParams<{ id: string }>()
    const [first, setFirst] = useState(true)
    const [show, setShow] = useState(false)
    const [card, setCard] = useState<CardType>({
        answer: "", question: "", cardsPack_id: "", grade: 0, shots: 0,
        user_id: "", created: "", updated: "", _id: ""
    })
    const dispatch = useDispatch()

    useEffect(() => {
        if (first) {
            dispatch(getCardsTC({cardsPack_id: id}))
            setFirst(false)
        }
        if (cards.length > 0) {
            setCard(getCard(cards))
        }
    }, [id, first, cards])

    const setGrade = (grade: GradeType) => {
        dispatch(setCardGradeTC(grade, card._id))
        setShow(false)
    }

    return <div className={s.learnCards}>
        <div>
            <div>Question: {card.question}</div>
            {show && <div>Answer: {card.answer}</div>}
        </div>
        <div>
            <button disabled={statusApp === "loading"} onClick={() => setGrade(1)}>1</button>
            <button disabled={statusApp === "loading"} onClick={() => setGrade(2)}>2</button>
            <button disabled={statusApp === "loading"} onClick={() => setGrade(3)}>3</button>
            <button disabled={statusApp === "loading"} onClick={() => setGrade(4)}>4</button>
            <button disabled={statusApp === "loading"} onClick={() => setGrade(5)}>5</button>
        </div>
        <div>
            <button onClick={() => setShow(true)}>Show Answer</button>
        </div>
        <div>Shots: {card.shots}</div>
    </div>
}