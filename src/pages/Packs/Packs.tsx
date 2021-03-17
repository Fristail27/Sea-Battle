import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../store/store";
import {CardPackType, UpdatePackDataType} from "../../api/packs-api";
import s from "./Packs.module.css"
import React, {useEffect, useState} from "react";
import {addPackTC, delPackTC, getPacksTC, setFilterPacksAC, updPackTC} from "../../store/packs-Reducer";
import {NavLink} from "react-router-dom";
import { PanelForPacks } from "../../common/panelForPacks/PanelForPacks";
import {RequestStatusType} from "../../store/app-Reducer";


export const Packs = () => {
    const dispatch = useDispatch()
    const statusApp = useSelector<AppRootStateType, RequestStatusType>(state => state.app.appStatus)
    const cardPacks = useSelector<AppRootStateType, Array<CardPackType>>(state => state.packs.cardPacks)
    const authMeId = useSelector<AppRootStateType, any>(state => state.auth.userData?._id)
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

    if (statusApp !=="loading" && rend !== 1) {
        setRend(1)
    }
    useEffect(() => {
        if (statusApp !=="loading") {
            dispatch(getPacksTC(null as any))
        }
    }, [rend, dispatch])
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
                <div>created</div>
                <div>updated</div>
                <div>
                    <button style={{margin: "10px"}} onClick={addPack}>add</button>
                </div>
            </div>
            {cardPacks.map((cp) => <div key={cp._id} className={s.packs}>
                <div style={{width: "300px"}}>{cp.name}</div>
                <div style={{width: "300px"}}>{cp.cardsCount}</div>
                <div style={{width: "300px"}}>{cp.created}</div>
                <div style={{width: "300px"}}>{cp.updated}</div>
                <div className={s.buttons}>
                    {(authMeId === cp.user_id) && <button style={{margin: "10px"}} onClick={() => delPack(cp._id)}>delete</button>}
                    {(authMeId === cp.user_id) &&<button style={{margin: "10px"}}
                            onClick={() => updatePack({_id: cp._id, name: "Extra new"})}>update
                    </button>}
                    <NavLink to={`/cards/${cp._id}`} style={{margin: "10px"}}>cards</NavLink>
                </div>
            </div>)}
        </div>
    )
}