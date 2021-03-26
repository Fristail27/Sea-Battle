import React from "react";
import s from "./Card.module.css";
import {InitialStateType} from "../../../store/cards-Reducer";


type CardPropsType = {
    question: string
    answer: string
    grade: number
    updated: string
    userId?: string
    cardsState: InitialStateType
    _id: string
    cardsPack_id: string
    deleteCard: (id: string, packId: string) => void
    updateCard: (id: string) => void
}

export const Card:React.FC<CardPropsType> = (props) => {

    const splitUpdFunc = (str: string) => {
        const temp = str.split('.')
        return temp[0].replace('T', ' ')
    }

    return (
        <div className={s.card}>
            <div className={s.text}>{props.question}</div>
            <div className={s.text}>{props.answer}</div>
            <div className={s.text}>{props.grade}</div>
            <div className={s.text}>{splitUpdFunc(props.updated)}</div>
            <div className={s.buttons}>
                <button disabled={props.userId !== props.cardsState.packUserId} style={{margin: "10px"}}
                        onClick={() => props.deleteCard(props._id, props.cardsPack_id)}>Delete
                </button>
                <button disabled={props.userId !== props.cardsState.packUserId} style={{margin: "10px"}}
                        onClick={() => props.updateCard(props._id)}>Update
                </button>
            </div>
        </div>
    )
}