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
import AddCardModalComponent from "./addCardModal/AddCardModal";
import { Fragment } from "react";
import UpdateCardModalComponent from "./updateCardModal/UpdateCardModalComponent";

export const Cards = () => {

    const dispatch = useDispatch()
    const cards = useSelector<AppRootStateType, Array<CardType>>(state => state.cards.cards)
    const userId = useSelector<AppRootStateType, string | undefined>(state => state.auth.userData?._id)
    const cardsState = useSelector<AppRootStateType, InitialStateType>(state => state.cards)
    const statusApp = useSelector<AppRootStateType, RequestStatusType>(state => state.app.appStatus)
    const isAuth = useSelector<AppRootStateType, boolean>(state => state.auth.isAuth)
    const {id} = useParams<{ id?: string }>()
    const [rend, setRend] = useState<number>(0)
    const [addCardModalStatus, setAddCardModalStatus] = useState<boolean>(false)
    const [updateCardModalStatus, setUpdateCardModalStatus] = useState<boolean>(false)
    const [updateCardId, setUpdateCardId] = useState<string>('')
    const [initialQuestionForUpdate, setInQuestionForUpdate] = useState<string>('')
    const [initialCommentForUpdate, setInitialCommentForUpdate] = useState<string>('')

    const addCard = (question:string, answer: string) => {if (id) {dispatch(addCardTC({cardsPack_id: id, answer, question}))}}
    const deleteCard = (cardId: string, packId: string) => {dispatch(delCardTC(cardId, packId))}
    const updateCard = (question:string, comments:string) => {if (id) {dispatch(updCardTC(id, {_id: updateCardId, comments, question}))}}
    const openAddCardModal = () => {setAddCardModalStatus(true)}
    const openUpdateCardModal = (id:string, initialQuestion:string, initialComment:string) => {
        setUpdateCardId(id)
        setInQuestionForUpdate(initialQuestion)
        setInitialCommentForUpdate(initialComment)
        setUpdateCardModalStatus(true)
    }

    if (statusApp !== "loading" && rend !== 1) {
        setRend(1)
    }
    useEffect(() => {
        if(isAuth && id) {
            dispatch(getCardsTC({cardsPack_id: id as any, pageCount: cardsState.pageCount}))}
    }, [dispatch, id, cardsState.pageCount])

    if (!isAuth) {
        return <Redirect to={"/login"}/>
    }
    return (
        <Fragment>
            <Table pagination={{
                onChange: (page) => {
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
                   columns={columnsCreator(userId, cardsState, openAddCardModal, deleteCard, openUpdateCardModal)}
                   dataSource={dataForTableCreator(cards)}/>
            {addCardModalStatus && <AddCardModalComponent visible={addCardModalStatus} addCard={addCard}
                                                          closeModal={() => setAddCardModalStatus(false)}/>}
            {updateCardModalStatus &&<UpdateCardModalComponent
                updateCard={updateCard}
                closeModal={()=>setUpdateCardModalStatus(false)}
                visible={updateCardModalStatus}
                initQuestion={initialQuestionForUpdate}
                initComment={initialCommentForUpdate}
            />}
        </Fragment>
    )
}