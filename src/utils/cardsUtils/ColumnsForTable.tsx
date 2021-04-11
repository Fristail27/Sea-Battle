import moment from "moment";
import {Button} from "antd";
import {DeleteOutlined, Loading3QuartersOutlined, PlusCircleOutlined} from "@ant-design/icons";
import React from "react";
import {InitialStateType} from "../../store/cards-Reducer";
import {CardType} from "../../api/cards-api";

export const columnsCreator = (
    userId: string | undefined,
    cardsState: InitialStateType,
    openAddCardModal: () => void,
    deleteCard: (text: any, cardPackId: string) => void,
    openUpdateCardModal: (id: string, question:string, initialComment:string) => void
) => {
    let columns = [
        {
            title: <h2>Question</h2>,
            dataIndex: 'question',
            key: 'question',
            align: 'center' as const,
            render: (text:any, record:any)=> {
                return (
                    <div>
                        <span>{text}</span>
                        <br/>
                        <span style={{fontSize:11, color:'gray'}}>{record.comments}</span>
                    </div>
                )
            }
        },
        {
            title: <h2>Answer</h2>,
            dataIndex: 'answer',
            key: 'answer',
            align: 'center' as const
        },
        {
            title: <h2>Grade</h2>,
            dataIndex: 'grade',
            key: 'grade',
            align: 'center' as const
        },
        {
            title: <h2>Updated</h2>,
            key: 'updated',
            dataIndex: 'updated',
            align: 'center' as const,
            render: (text:string)=>{
                return moment(text).calendar();
            }
        },
        {
            key: 'btnAdd',
            title:  <Button type="primary" icon={<PlusCircleOutlined />} onClick={openAddCardModal}
                            disabled={userId !== cardsState.packUserId}
            >Add</Button>,
            dataIndex: 'btnAdd',
            align: 'center' as const,
            render: (text:any, record:any) => {
                return <span>
        <Button
            danger
            icon={<DeleteOutlined />}
            type="primary"
            disabled={userId !== cardsState.packUserId}
            onClick={() => deleteCard(text,record.cardPackId)}
        >Delete</Button>
    <Button icon={<Loading3QuartersOutlined />} type="primary" onClick={() => openUpdateCardModal(text, record.question, record.comments)}
            disabled={userId !== cardsState.packUserId}
    >Update</Button>
    </span>
            },
        },
    ];
    return columns
}

export const dataForTableCreator = (cards:Array<CardType>) => {
   return cards.map(el => {
        return {
            key: el._id,
            question: el.question,
            answer: el.answer,
            grade: el.grade,
            updated: el.updated,
            btnAdd: el._id,
            cardPackId:el.cardsPack_id,
            comments:el.comments
        }
    })
}