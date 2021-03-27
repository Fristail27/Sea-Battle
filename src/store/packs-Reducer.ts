import {
    AddPackDataType, CardPackType, getCardPackParamsType, getCardPackResponseType, packsAPI, UpdatePackDataType
} from "../api/packs-api";
import {Dispatch} from "redux";
import {AppRootStateType} from "./store";
import {onChangeAppStatusAC} from "./app-Reducer";

export type InitialStateType = typeof initialState
type ActionType = GetPacksReturnType | SetSearchValueType | setSortTypeActionType | setFilterPacksActionType

const GET_CARDS_PACKS = "packs/GET-CARDS-PACKS"
const SET_SEARCH_VALUE = "packs/SET_SEARCH_VALUE"
const SET_SORT_TYPE = "packs/SET_SORT_TYPE"
const SET_SORT_PACKS_ON_PAGE = "packs/SET_SORT_PACKS_ON_PAGE"
export const initialState = {
    cardPacks: [] as Array<CardPackType>,
    cardPacksTotalCount: 0,
    maxCardsCount: 1000,
    minCardsCount: 0,
    page: 1,
    pageCount: 15,
    searchValue: "",
    sortPacks: "0updated"
}

export const packsReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case GET_CARDS_PACKS:
            return {...state, ...action.data}
        case SET_SEARCH_VALUE:
            return {...state, searchValue: action.value}
        case SET_SORT_TYPE:
            return {...state, sortPacks:action.value}
        case SET_SORT_PACKS_ON_PAGE:
            let copyCardPacks = [...state.cardPacks]
            const sortUp = (a:CardPackType,b:CardPackType)=>{
                if (a.cardsCount > b.cardsCount) {
                    return -1
                } else {
                    return 1
                }
            }
            const sortDown = (a:CardPackType,b:CardPackType)=>{
                if (a.cardsCount < b.cardsCount) {
                    return -1
                } else {
                    return 1
                }
            }
            let sortedCardPacks = copyCardPacks.sort(action.sortType === "UP" ? sortUp : sortDown)
            return {...state, cardPacks: sortedCardPacks}
        default:
            return state
    }
}

export const getPacksAC = (data: getCardPackResponseType) => ({type: GET_CARDS_PACKS, data} as const)
type GetPacksReturnType = ReturnType<typeof getPacksAC>

export const setSearchValueAC = (value: string) => ({type: SET_SEARCH_VALUE, value} as const)
type SetSearchValueType = ReturnType<typeof setSearchValueAC>

export const setSortTypeAC = (value: string) => ({type: SET_SORT_TYPE, value} as const)
type setSortTypeActionType = ReturnType<typeof setSortTypeAC>

export const setFilterPacksAC = (sortType: "UP" | "DOWN") => ({type: SET_SORT_PACKS_ON_PAGE, sortType} as const)
type setFilterPacksActionType = ReturnType<typeof setFilterPacksAC>

export const getPacksTC = (data?: getCardPackParamsType) => async (dispatch: Dispatch, getState: () => AppRootStateType) => {
    const params = getState().packs
    dispatch(onChangeAppStatusAC("loading"))
    const response = await packsAPI.getCardPacks({...data, sortPacks: params.sortPacks, pageCount: params.pageCount})
    dispatch(getPacksAC(response.data))
    dispatch(onChangeAppStatusAC("idle"))
}

export const addPackTC = (data: AddPackDataType) => async (dispatch: Dispatch<any>, getState: () => AppRootStateType) => {
    dispatch(onChangeAppStatusAC("loading"))
    const params = getState().packs
    await packsAPI.addPack(data)
    dispatch(getPacksTC({
        page: params.page, pageCount: params.pageCount, max: params.maxCardsCount, min: params.minCardsCount,
    }))
}

export const delPackTC = (id: string) => async (dispatch: Dispatch<any>, getState: () => AppRootStateType) => {
    dispatch(onChangeAppStatusAC("loading"))
    const params = getState().packs
    await packsAPI.deletePack(id)
    dispatch(getPacksTC({
        page: params.page, pageCount: params.pageCount, max: params.maxCardsCount, min: params.minCardsCount
    }))
}

export const updPackTC = (data: UpdatePackDataType) => async (dispatch: Dispatch<any>, getState: () => AppRootStateType) => {
    const params = getState().packs
    await packsAPI.updatePack(data)
    dispatch(getPacksTC(
        {
            page: params.page, pageCount: params.pageCount, max: params.maxCardsCount, min: params.minCardsCount
        }))
}

