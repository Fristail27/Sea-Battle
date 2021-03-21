import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../store/store";
import {CardPackType, UpdatePackDataType} from "../../api/packs-api";
import s from "./Packs.module.css"
import React, {useEffect, useState} from "react";
import {addPackTC, delPackTC, getPacksTC, setFilterPacksAC, updPackTC} from "../../store/packs-Reducer";
import {PanelForPacks} from "../../common/panelForPacks/PanelForPacks";
import {RequestStatusType} from "../../store/app-Reducer";
import {Pack} from "../../common/pack/Pack";


export const Packs = () => {

    const dispatch = useDispatch()
    const statusApp = useSelector<AppRootStateType, RequestStatusType>(state => state.app.appStatus)
    const userId = useSelector<AppRootStateType, string | undefined>(state => state.auth.userData?._id)
    const cardPacks = useSelector<AppRootStateType, Array<CardPackType>>(state => state.packs.cardPacks)
    const [rend, setRend] = useState<number>(0)

    const addPack = () => {
        dispatch(addPackTC({name: "New Pack"}))
    }
    const delPack = (id: string) => {
        dispatch(delPackTC(id))
    }
    const updatePack = (data: UpdatePackDataType) => {
        dispatch(updPackTC(data))
    }

    if (statusApp !== "loading" && rend !== 1) {
        setRend(1)
    }

    useEffect(() => {
        if (statusApp !== "loading") {
            dispatch(getPacksTC())
        }
    }, [rend])

    return (
        <div>
            <PanelForPacks/>
            <div className={s.packsHeader}>
                <div>Name</div>
                <div>
                    cardsCount
                    <button onClick={()=> dispatch(setFilterPacksAC("UP"))}>Up</button>
                    <button onClick={()=> dispatch(setFilterPacksAC("DOWN"))}>Down</button>
                </div>
                <div>Created</div>
                <div>Updated</div>
                <div>
                    <button style={{margin: "10px"}} onClick={addPack}>add</button>
                </div>
            </div>
            {cardPacks.map((cp) => <Pack key={cp._id} disabled={userId !== cp.user_id} cp={cp} delPack={delPack}
                                         updatePack={updatePack}/>)}
        </div>
    )
}