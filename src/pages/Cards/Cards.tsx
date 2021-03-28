import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../store/store";
import {CardType} from "../../api/cards-api";
import React, {useEffect, useState} from "react";
import {Redirect, useParams} from "react-router-dom";
import {addCardTC, delCardTC, getCardsTC, InitialStateType, updCardTC} from "../../store/cards-Reducer";
import {RequestStatusType} from "../../store/app-Reducer";
import {Table} from "antd";
import 'antd/dist/antd.css';
import { columnsCreator, dataForTableCreator } from "../../utils/cardsUtils/ColumnsForTable";

export const Cards = () => {

    const dispatch = useDispatch()
    const cards = useSelector<AppRootStateType, Array<CardType>>(state => state.cards.cards)
    const userId = useSelector<AppRootStateType, string | undefined>(state => state.auth.userData?._id)
    const cardsState = useSelector<AppRootStateType, InitialStateType>(state => state.cards)
    const statusApp = useSelector<AppRootStateType, RequestStatusType>(state => state.app.appStatus)
    const isAuth = useSelector<AppRootStateType, boolean>(state => state.auth.isAuth)
    const {id} = useParams<{ id?: string }>()
    const [rend, setRend] = useState<number>(0)

    const addCard = () => {if (id) {dispatch(addCardTC({cardsPack_id: id, answer: "ans", question: "que"}))}}
    const deleteCard = (cardId: string, packId: string) => {dispatch(delCardTC(cardId, packId))}
    const updateCard = (cardId: string) => {if (id) {dispatch(updCardTC(id, {_id: cardId, comments: "new comment", question: "new que"}))}}

    if (statusApp !== "loading" && rend !== 1) {
        setRend(1)
    }
    console.log(id)
    useEffect(() => {
        if(isAuth && id) {
            console.log(123)
            dispatch(getCardsTC({cardsPack_id: id as any, pageCount: cardsState.pageCount}))}
    }, [dispatch, id, cardsState.pageCount])

    if (!isAuth) {
        return <Redirect to={"/login"}/>
    }
    return (
        <Table pagination={{
            onChange: (page)=> {
                dispatch(getCardsTC({
                    page,
                    cardsPack_id: id,
                    pageCount: cardsState.pageCount
                } as any))
            },
            position: ['bottomCenter'],

        }}
               loading={statusApp === "loading"}
               bordered
               columns={columnsCreator(userId, cardsState, addCard, deleteCard, updateCard)}
               dataSource={dataForTableCreator(cards)} />
    )
}