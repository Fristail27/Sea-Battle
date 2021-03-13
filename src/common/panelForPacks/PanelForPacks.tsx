import React from "react";
import s from "./PanelForPacks.module.css"
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../store/store";
import {getPacksTC, InitialStateType, setSearchValueAC} from "../../store/packs-Reducer";
import {Paginator} from "../paginator/Paginator";

export const PanelForPacks = () => {
    const dispatch = useDispatch()
    const pack = useSelector<AppRootStateType, InitialStateType>(state => state.packs)
    const searchValue = useSelector<AppRootStateType, string>(state => state.packs.searchValue)
    const pagesCount = Math.ceil(pack.cardPacksTotalCount / pack.pageCount)

    return (
        <div className={s.panel}>
            <div className={s.search}>
                <input value={searchValue} onChange={e=>dispatch(setSearchValueAC(e.currentTarget.value))}/>
                <button onClick={()=>dispatch(getPacksTC(null as any,1,searchValue))}>find</button>
            </div>
            <div className={s.paginator}>
                <Paginator paginatorSize={10} currentPage={pack.page} pagesCount={pagesCount}/>
            </div>
        </div>
    )
}
