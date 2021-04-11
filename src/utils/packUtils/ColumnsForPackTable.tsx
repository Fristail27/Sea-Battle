import moment from "moment";
import {Button} from "antd";
import {DeleteOutlined, Loading3QuartersOutlined, PlusCircleOutlined, WindowsOutlined} from "@ant-design/icons";
import React from "react";
import {CardPackType} from "../../api/packs-api";

export const packColumnsCreator = (
    userId: string | undefined,
    cardsState: Array<CardPackType>,
    openAddPackModal: () => void,
    deletePack: (cardPackId: string) => void,
    openUpdatePackModal: (id: string, name:string) => void,
    openModal: (modalObj:{modalStatus:boolean, currentPack_id:string|null}) => void
) => {
    let columns = [
        {
            title: <h2>Pack Name</h2>,
            dataIndex: 'packName',
            key: 'packName',
            align: 'center' as const,
            sorter: (a:any, b:any) => {
                if(a.packName > b.packName) {return 1} else return -1
            },
        },
        {
            title: <h2>Count</h2>,
            dataIndex: 'cardsCount',
            key: 'cardsCount',
            align: 'center' as const,
            sorter: (a:any, b:any) => {
                if(a.cardsCount > b.cardsCount) {return 1} else return -1
            },
        },
        {
            title: <h2>Updated</h2>,
            key: 'updated',
            dataIndex: 'updated',
            align: 'center' as const,
            render: (text:string)=>{
                return moment(text).calendar();
            },
            sorter: (a:any, b:any) => {
                if(a.updated > b.updated) {return 1} else return -1
            },
        },
        {
            key: 'btnAdd',
            title: <Button type="primary" icon={<PlusCircleOutlined/>} onClick={openAddPackModal} disabled={!userId}>Add</Button>,
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
                        <Button icon={<Loading3QuartersOutlined/>} type="primary" onClick={() => openUpdatePackModal(record.key, record.packName)}
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

const obj = {
    "Id": "Id1",
    "IsSkipped": "true",
    "Order": "1",
    "MaterialLoad": [ {
        "Id": "Id1",
        "Channels": {
            "PointLabel": "PointLabel1",
            "Channel": {
                "Id": "Id1",
                "Label": "Label1"
            }
        },
        "Material": {
            "Id": "Id1",
            "Label": "Label1"
        },
        "Uom": {
            "Id": "Id1",
            "Label": "Label1"
        }
    }
    ],
    "MaterialUnload": [ {
        "Id": "Id1",
        "Channels": {
            "PointLabel": "PointLabel4",
            "Channel": {
                "Id": "Id4",
                "Label": "Label4"
            }
        },
        "Material": {
            "Id": "Id4",
            "Label": "Label4"
        },
        "Uom": {
            "Id": "Id4",
            "Label": "Label4"
        }
    }
    ],
    "Stage": {
        "Id": "Id1",
        "Label": "Label1"
    }
}
