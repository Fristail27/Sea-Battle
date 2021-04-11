import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../store/store";
import {CardPackType, UpdatePackDataType} from "../../api/packs-api";
import React, {useEffect, useState} from "react";
import {
    addPackTC,
    delPackTC,
    getPacksTC,
    InitialStateType,
    updPackTC
} from "../../store/packs-Reducer";
import {PanelForPacks} from "../../common/panelForPacks/PanelForPacks";
import {RequestStatusType} from "../../store/app-Reducer";
import 'antd/dist/antd.css';
import {Table} from "antd";
import {dataForPackTableCreator, packColumnsCreator} from "../../utils/packUtils/ColumnsForPackTable";
import { Modal } from "../../common/modal/modal";
import AddPackModalComponent from "./addPackModal/AddPackModal";
import UpdatePackModalComponent from "./updatePackModal/UpdatePackModalContainer";

type ModalStatusType = {
    modalStatus: boolean
    currentPack_id: string|null
}

export const Packs = () => {
    const dispatch = useDispatch()
    const statusApp = useSelector<AppRootStateType, RequestStatusType>(state => state.app.appStatus)
    const isAuth = useSelector<AppRootStateType, boolean>(state => state.auth.isAuth)
    const userId = useSelector<AppRootStateType, string | undefined>(state => state.auth.userData?._id)
    const cardPacks = useSelector<AppRootStateType, Array<CardPackType>>(state => state.packs.cardPacks)
    const cardPacksState = useSelector<AppRootStateType, InitialStateType>(state => state.packs)
    const [rend, setRend] = useState<number>(0)
    const [modalStatus, setModalStatus] = useState<ModalStatusType>({modalStatus:false, currentPack_id:null})
    const [addPackModalStatus, setAddPackModalStatus] = useState<boolean>(false)
    const [updatePackModalStatus, setUpdatePackModalStatus] = useState<boolean>(false)
    const [updatePackId, setUpdatePackId] = useState<string>('')
    const [inValForUpdate, setInValForUpdate] = useState<string>('')

    const addPack = (name:string) => {
        dispatch(addPackTC({name}))
    }
    const openAddPackModal = () => {
        setAddPackModalStatus(true)
    }
    const openUpdatePackModal = (id:string, oldPackName:string) => {
        setInValForUpdate(oldPackName)
        setUpdatePackId(id)
        setUpdatePackModalStatus(true)

    }
    const delPack = (id: string) => {
        dispatch(delPackTC(id))
    }
    const updatePack = (name: string) => {
        dispatch(updPackTC({
            _id: updatePackId,
            name
        }))
    }

    if (statusApp !== "loading" && rend !== 1) {
        setRend(1)
    }

    useEffect(() => {
        if (statusApp !== "loading" && isAuth) {
            dispatch(getPacksTC())
        }
    }, [rend, dispatch, isAuth])

    return (
        <div>
            <PanelForPacks/>
            <Table
                pagination={{
                    onChange: (page) => {
                        dispatch(getPacksTC({page: page, packName: cardPacksState.searchValue}))
                    },
                    position: ['bottomCenter'],
                    defaultPageSize: 15,
                    total: cardPacksState.cardPacksTotalCount,
                    showSizeChanger: false,
                    current: cardPacksState.page
                }}
                    size={"small"}
                   loading={statusApp === "loading"}
                   bordered
                   columns={packColumnsCreator(userId, cardPacks, openAddPackModal, delPack, openUpdatePackModal, setModalStatus)}
                   dataSource={dataForPackTableCreator(cardPacks)}
            />
            {addPackModalStatus &&<AddPackModalComponent addPack={addPack} closeModal={()=>setAddPackModalStatus(false)} visible={addPackModalStatus}/>}
            {updatePackModalStatus &&<UpdatePackModalComponent
                updatePack={updatePack}
                closeModal={()=>setUpdatePackModalStatus(false)}
                visible={updatePackModalStatus}
                initValue={inValForUpdate}
            />}
            {modalStatus.modalStatus && <Modal currentId={modalStatus.currentPack_id} setModalStatus={setModalStatus}/>}
        </div>
    )
}
