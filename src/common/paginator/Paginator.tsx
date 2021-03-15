import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getPacksTC} from "../../store/packs-Reducer";
import s from "./Paginator.module.css"
import {AppRootStateType} from "../../store/store";

type PaginatorPropsType = {
    pagesCount: number
    currentPage: number
    paginatorSize: number
}

export const Paginator: React.FC<PaginatorPropsType> = (props) => {
    const lastPagBlock = Math.ceil(props.pagesCount / props.paginatorSize)
    const searchValue = useSelector<AppRootStateType, string>(state => state.packs.searchValue)
    const [currentPaginatorBlock, setCurrentPaginatorBlock] = useState<number>(0)
    const dispatch = useDispatch()

    const Line:React.FC = () => {
        const arr = []
        for (let i = 1; i <= props.pagesCount; i++) {
            arr.push(i)
        }
        return (
            <div className={s.nums}>
                {arr.map((p, i) => {
                    if ((p >= currentPaginatorBlock * props.paginatorSize) && (p < currentPaginatorBlock * props.paginatorSize + props.paginatorSize)) {
                        if ((p) === props.currentPage) {
                            return <span key={i} className={s.currentNum}>{p}</span>
                        } else {
                            return <span onClick={() => dispatch(getPacksTC(null as any, p, searchValue))} key={i}
                                         className={s.num}>{p}</span>
                        }
                    } else {return null}
                })}
            </div>
        )
    }
    return (
        <div className={s.main}>
            <Line/>
            <div className={s.btns}>
                <div className={s.startButtons}>
                    {(currentPaginatorBlock !== 0) && <button onClick={() => setCurrentPaginatorBlock(0)}>to start</button>}
                    {(currentPaginatorBlock !== 0) && <button onClick={() => setCurrentPaginatorBlock(currentPaginatorBlock - 1)}>back</button>}
                </div>
                <div className={s.endButtons}>
                    {(currentPaginatorBlock !== lastPagBlock - 1) && <button onClick={() => setCurrentPaginatorBlock(currentPaginatorBlock + 1)}>next</button>}
                    {(currentPaginatorBlock !== lastPagBlock - 1) && <button onClick={() => setCurrentPaginatorBlock(lastPagBlock - 1)}>to end</button>}
                </div>
            </div>
        </div>
    )
}