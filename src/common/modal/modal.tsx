import React from "react";
import s from "./modal.module.css"
import {NavLink} from "react-router-dom";


export const Modal = (props:any) => {
    return (
    <div className={s.shadow}
         onClick={() => props.setModalStatus({modalStatus:false, currentPack_id:null})}
    >
            <div className={s.modal}>
                <NavLink to={`/cards/${props.currentId}`} style={{margin: "10px"}}>Show Cards</NavLink>
                <NavLink to={`/learn-cards/${props.currentId}`} style={{margin: "10px"}}>Learn Cards</NavLink>
            </div>
        </div>
    )
}