import React, {ChangeEvent, useEffect, useState} from "react";
import s from "./PanelForPacks.module.css"
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../store/store";
import {getPacksTC, InitialStateType, setSearchValueAC, setSortTypeAC} from "../../store/packs-Reducer";
import {Paginator} from "../paginator/Paginator";

type TypeSelectValue = "updated" | "name" | "cardsCount"
type OrderSelectValueType = "0" | "1"

export const PanelForPacks = () => {
    const dispatch = useDispatch()
    const pack = useSelector<AppRootStateType, InitialStateType>(state => state.packs)
    const searchValue = useSelector<AppRootStateType, string>(state => state.packs.searchValue)
    const pagesCount = Math.ceil(pack.cardPacksTotalCount / pack.pageCount)
    const [typeSelectValue, setTypeSelectValue] = useState<TypeSelectValue>("updated")
    const [orderSelectValue, setOrderSelectValue] = useState<OrderSelectValueType>("0")
    const changeOrderHandler = (e:ChangeEvent<HTMLSelectElement>)=> {
        setOrderSelectValue(e.currentTarget.value as OrderSelectValueType)
        dispatch(setSortTypeAC(`${orderSelectValue}${typeSelectValue}`))
    }
    const changeTypeHandler = (e:ChangeEvent<HTMLSelectElement>)=> {
        setTypeSelectValue(e.currentTarget.value as TypeSelectValue)
        dispatch(setSortTypeAC(`${orderSelectValue}${typeSelectValue}`))

    }
    useEffect(()=>{
        if (pack.sortPacks !== `${orderSelectValue}${typeSelectValue}`)
        dispatch(setSortTypeAC(`${orderSelectValue}${typeSelectValue}`))
    },[typeSelectValue, orderSelectValue])
    return (
        <div className={s.panel}>
            <div className={s.search}>
                <input value={searchValue} onChange={e=>dispatch(setSearchValueAC(e.currentTarget.value))}/>
                <button onClick={()=>dispatch(getPacksTC(null as any,1,searchValue))}>find</button>
            </div>
            <div>
                Сортировать:
                <select onChange={changeTypeHandler} value={typeSelectValue} name="" id="">
                    <option value="updated"> По дате обновления</option>
                    <option value="name">По имени</option>
                    <option value="cardsCount">По количеству карт</option>
                </select>
                <select onChange={changeOrderHandler} value={orderSelectValue} name="" id="">
                    <option value={"0"}>По убыванию</option>
                    <option  value={"1"}>По возрастанию</option>
                </select>
                <button onClick={()=> {dispatch(getPacksTC({sortPacks: `${orderSelectValue}${typeSelectValue}`}))}}>Sort</button>
            </div>
            <div className={s.paginator}>
                <Paginator paginatorSize={10} currentPage={pack.page} pagesCount={pagesCount}/>
            </div>
        </div>
    )
}
