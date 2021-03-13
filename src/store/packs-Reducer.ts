import {
    AddPackDataType, CardPackType, getCardPackParamsType, getCardPackResponseType, packsAPI, UpdatePackDataType
} from "../api/packs-api";
import {Dispatch} from "redux";
import {AppRootStateType} from "./store";

export type InitialStateType = typeof initialState
type ActionType = GetPacksReturnType

const GET_CARDS_PACKS = "packs/GET-CARDS-PACKS"
const initialState = {
    cardPacks: [] as Array<CardPackType>,
    cardPacksTotalCount: 0,
    maxCardsCount: 1000,
    minCardsCount: 0,
    page: 1,
    pageCount: 10
}

export const packsReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case "packs/GET-CARDS-PACKS":
            return {...state, ...action.data}
        default:
            return state
    }
}

const getPacks = (data: getCardPackResponseType) => {
    return {
        type: GET_CARDS_PACKS,
        data
    } as const
}
type GetPacksReturnType = ReturnType<typeof getPacks>

export const getPacksTC = (data: getCardPackParamsType) => (dispatch: Dispatch) => {
    packsAPI.getCardPacks(data).then((response) => {
        dispatch(getPacks(response.data))
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
        dispatch(getPacksTC({
            page: params.page,
            pageCount: params.pageCount,
            max: params.maxCardsCount,
            min: params.minCardsCount
        }))
    })
}

