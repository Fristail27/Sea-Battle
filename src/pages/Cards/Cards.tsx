import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../store/store";
import {CardType} from "../../api/cards-api";
import React, {useEffect, useState} from "react";
import {Redirect, useParams} from "react-router-dom";
import {addCardTC, delCardTC, getCardsTC, InitialStateType, updCardTC} from "../../store/cards-Reducer";
import {RequestStatusType} from "../../store/app-Reducer";
import {Button, Table} from "antd";
import 'antd/dist/antd.css';
import moment from "moment";
import {DeleteOutlined, Loading3QuartersOutlined, PlusCircleOutlined} from "@ant-design/icons";

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

    const data = cards.map(el => {
        return {
            key: el._id,
            question: el.question,
            answer: el.answer,
            grade: el.grade,
            updated: el.updated,
            btnAdd: el._id,
            cardPackId:el.cardsPack_id
        }
    })

    if (statusApp !== "loading" && rend !== 1) {setRend(1)}
    const columns = [
        {
            title: 'Question',
            dataIndex: 'question',
            key: 'question',
            align: 'center' as const
        },
        {
            title: 'Answer',
            dataIndex: 'answer',
            key: 'answer',
            align: 'center' as const
        },
        {
            title: 'Grade',
            dataIndex: 'grade',
            key: 'grade',
            align: 'center' as const
        },
        {
            title: 'Updated',
            key: 'updated',
            dataIndex: 'updated',
            align: 'center' as const,
            render: (text:string)=>{
                return moment(text).startOf('hour').fromNow()
            }
        },
        {
            key: 'btnAdd',
            title:  <Button type="primary" icon={<PlusCircleOutlined />} onClick={addCard} disabled={userId !== cardsState.packUserId}>Add</Button>,
            dataIndex: 'btnAdd',
            render: (text:any, record:any) => {
                return <span>
                <Button
                    danger
                    icon={<DeleteOutlined />}
                    type="primary"
                    disabled={userId !== cardsState.packUserId}
                    onClick={() => deleteCard(text,record.cardPackId)}
                >Delete</Button>
                <Button icon={<Loading3QuartersOutlined />} type="primary" onClick={() => updateCard(text)} disabled={userId !== cardsState.packUserId}>Update</Button>
            </span>
            },
        },
    ];
    useEffect(() => {
        if (id && statusApp !== "loading" && isAuth) {
            dispatch(getCardsTC({cardsPack_id: id, pageCount: cardsState.pageCount}))
        }
    }, [rend, isAuth, dispatch, id, cardsState.pageCount])

    if (!isAuth) {
        return <Redirect to={"/login"}/>
    }

    return (
        <div>
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
               columns={columns}
               dataSource={data} />
        </div>
    )
}