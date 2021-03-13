import {
    AddPackDataType, CardPackType, getCardPackParamsType, getCardPackResponseType, packsAPI, UpdatePackDataType
} from "../api/packs-api";
import {Dispatch} from "redux";
import {AppRootStateType} from "./store";
import {onChangeAppStatusAC} from "./app-Reducer";

export type InitialStateType = typeof initialState
type ActionType = GetPacksReturnType | SetSearchValueType

const GET_CARDS_PACKS = "packs/GET-CARDS-PACKS"
const SET_SEARCH_VALUE = "packs/SET_SEARCH_VALUE"
const initialState = {
    cardPacks: [] as Array<CardPackType>,
    cardPacksTotalCount: 0,
    maxCardsCount: 1000,
    minCardsCount: 0,
    page: 1,
    pageCount: 10,
    searchValue: "",
}

export const packsReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case GET_CARDS_PACKS:
            return {...state, ...action.data}
        case SET_SEARCH_VALUE:
            return {...state, searchValue: action.value}
        default:
            return state
    }
}

export const getPacksAC = (data: getCardPackResponseType) => {
    return {
        type: GET_CARDS_PACKS,
        data
    } as const
}
type GetPacksReturnType = ReturnType<typeof getPacksAC>

export const setSearchValueAC = (value:string) => ({type: SET_SEARCH_VALUE, value} as const)
type SetSearchValueType = ReturnType<typeof setSearchValueAC>

export const getPacksTC = (data?: getCardPackParamsType, pageNumber:number = 1, searchValue:string="") => (dispatch: Dispatch) => {
    dispatch(onChangeAppStatusAC("loading"))
    packsAPI.getCardPacks(data, pageNumber, searchValue).then((response) => {
        dispatch(getPacksAC(response.data))
        dispatch(onChangeAppStatusAC("idle"))
    })
}

export const addPackTC = (data: AddPackDataType) => (dispatch: Dispatch<any>, getState: () => AppRootStateType) => {
    const params = getState().packs
    packsAPI.addPack(data).then(() => {
        dispatch(getPacksTC({
            page: params.page,
            pageCount: params.pageCount,
            max: params.maxCardsCount,
            min: params.minCardsCount,
        }))
    })
}

export const delPackTC = (id: string) => (dispatch: Dispatch<any>, getState: () => AppRootStateType) => {
    const params = getState().packs
    packsAPI.deletePack(id).then(() => {
        dispatch(getPacksTC({
            page: params.page,
            pageCount: params.pageCount,
            max: params.maxCardsCount,
            min: params.minCardsCount
        }))
    })
}

export const updPackTC = (data: UpdatePackDataType) => (dispatch: Dispatch<any>, getState: () => AppRootStateType) => {
    const params = getState().packs
    packsAPI.updatePack(data).then(() => {
        dispatch(getPacksTC(
            {
            page: params.page,
            pageCount: params.pageCount,
            max: params.maxCardsCount,
            min: params.minCardsCount
        }
        ))
    })
}

