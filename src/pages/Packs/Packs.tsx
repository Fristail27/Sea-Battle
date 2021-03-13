import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../store/store";
import {CardPackType, UpdatePackDataType} from "../../api/packs-api";
import s from "./Packs.module.css"
import React, {useEffect} from "react";
import {addPackTC, delPackTC, getPacksTC, updPackTC} from "../../store/packs-Reducer";
import {NavLink, useParams} from "react-router-dom";


export const Packs = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getPacksTC({pageCount: 10}))
    }, [])
    const cardPacks = useSelector<AppRootStateType, Array<CardPackType>>(state => state.packs.cardPacks)
    const addPack = () => {
        dispatch(addPackTC({name: "New Pack"}))
    }
    const delPack = (id: string) => {
        dispatch(delPackTC(id))
    }
    const updatePack = (data: UpdatePackDataType) => {
        dispatch(updPackTC(data))
    }

    return (
        <div>
            <div className={s.packsHeader}>
                <div>Name</div>
                <div>cardsCount</div>
                <div>created</div>
                <div>updated</div>
                <div>
                    <button style={{margin: "10px"}} onClick={addPack}>add</button>
                </div>
            </div>
            {cardPacks.map(cp => <div className={s.packs}>
                <div style={{width: "300px"}}>{cp.name}</div>
                <div style={{width: "300px"}}>{cp.cardsCount}</div>
                <div style={{width: "300px"}}>{cp.created}</div>
                <div style={{width: "300px"}}>{cp.updated}</div>
                <div className={s.buttons}>
                    <button style={{margin: "10px"}} onClick={() => delPack(cp._id)}>delete</button>
                    <button style={{margin: "10px"}}
                            onClick={() => updatePack({_id: cp._id, name: "Extra new"})}>update
                    </button>
                    <NavLink to={`/cards/${cp._id}`} style={{margin: "10px"}}>cards</NavLink>
                </div>
            </div>)}
        </div>
    )
}