import React, {useState} from "react";
import s from "./Pack.module.css";
import {NavLink} from "react-router-dom";
import {CardPackType, UpdatePackDataType} from "../../../api/packs-api";

type CardPropsType = {
    disabled: boolean
    cp: CardPackType
    updatePack: (c: UpdatePackDataType) => void
    delPack: (id: string) => void
}

export const Pack: React.FC<CardPropsType> = ({disabled, cp, updatePack, delPack}) => {

    const splitUpdFunc = (cp: CardPackType) => {
        const temp = cp.updated.split('.')
        return temp[0].replace('T', ' ')
    }
    const [show, setShow] = useState(false)


    return (
        <div className={s.pack}>
            <div className={s.name}>{cp.name}</div>
            <div className={s.text}>{cp.cardsCount}</div>
            <div className={s.text}>{splitUpdFunc(cp)}</div>
            <div className={s.buttons}>
                <button disabled={disabled} style={{margin: "10px"}}
                        onClick={() => delPack(cp._id)}>delete
                </button>
                <button disabled={disabled} style={{margin: "10px"}}
                        onClick={() => updatePack({_id: cp._id, name: "Extra new"})}>update
                </button>
                <button onClick={() => setShow(true)}>Cards</button>
                {
                    show && <div className={s.shadow} onClick={() => setShow(false)}>
                        <div className={s.modal}>
                            <NavLink to={`/cards/${cp._id}`} style={{margin: "10px"}}>Show Cards</NavLink>
                            <NavLink to={`/learn-cards/${cp._id}`} style={{margin: "10px"}}>Learn Cards</NavLink>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}