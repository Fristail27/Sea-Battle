import moment from "moment";
import {Button} from "antd";
import {DeleteOutlined, Loading3QuartersOutlined, PlusCircleOutlined, WindowsOutlined} from "@ant-design/icons";
import React from "react";
import {CardPackType} from "../../api/packs-api";

export const packColumnsCreator = (
    userId: string | undefined,
    cardsState: Array<CardPackType>,
    addPack: () => void,
    deletePack: (cardPackId: string) => void,
    updateCard: (obj: any) => void,
    openModal: (modalObj:{modalStatus:boolean, currentPack_id:string|null}) => void
) => {
    let columns = [
        {
            title: <h2>Pack Name</h2>,
            dataIndex: 'packName',
            key: 'packName',
            align: 'center' as const
        },
        {
            title: <h2>Count</h2>,
            dataIndex: 'cardsCount',
            key: 'cardsCount',
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
            title: <Button type="primary" icon={<PlusCircleOutlined/>} onClick={addPack} disabled={!userId}>Add</Button>,
            dataIndex: 'btnAdd',
            align: 'center' as const,
            render: (text: any, record: any) => {
                return (
                    <span>
                        <Button
                            danger
                            icon={<DeleteOutlined/>}
                            type="primary"
                            disabled={userId !== record.user_id}
                            onClick={() => deletePack(record.key)}
                        >Delete</Button>
                        <Button icon={<Loading3QuartersOutlined/>} type="primary" onClick={() => updateCard({_id: record.key, name: "Extra new"})}
                                disabled={userId !== record.user_id}>Update
                        </Button>
                        <Button icon={<WindowsOutlined />} type="dashed"
                                onClick={() => openModal({modalStatus:true, currentPack_id:record.key})}>
                            Cards</Button>
                    </span>
                )
            },
        },
    ];
    return columns
}

export const dataForPackTableCreator = (cardPacks:Array<CardPackType>) => {
   return cardPacks.map(el => {
        return {
            key: el._id,
            packName: el.name,
            cardsCount: el.cardsCount,
            updated: el.updated,
            user_id: el.user_id,
        }
    })
}