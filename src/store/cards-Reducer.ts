import {
    AddCardDataType, cardsAPI, CardType, GetCardsParamsType, GetCardsResponseType, UpdateCardDataType
} from "../api/cards-api";
import {Dispatch} from "redux";
import {AppRootStateType} from "./store";

export type InitialStateType = typeof initialState
type ActionType = getCardsReturnType

const GET_CARDS = "cards/GET-CARDS"

const initialState = {
    cards: [] as Array<CardType>,
    cardsTotalCount: 0,
    maxGrade: 10,
    minGrade: 0,
    page: 1,
    pageCount: 4,
    packUserId: ""
}

export const cardsReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case "cards/GET-CARDS":
            return {...state, ...action.data}
        default:
            return state
    }
}

const getCards = (data: GetCardsResponseType) => {
    return {
        type: GET_CARDS,
        data
    } as const
}
type getCardsReturnType = ReturnType<typeof getCards>

export const getCardsTC = (data: GetCardsParamsType, ) => (dispatch: Dispatch) => {
    cardsAPI.getCards(data).then((response) => {
        dispatch(getCards(response.data))
    })
}

export const addCardTC = (data: AddCardDataType) => (dispatch: Dispatch<any>, getState: () => AppRootStateType) => {
    //@ts-ignore
    const state = getState().cards
    cardsAPI.addCard(data).then(() => {
        dispatch(getCardsTC({
            cardsPack_id: data.cardsPack_id,
            max: state.maxGrade,
            min: state.minGrade,
            page: state.page,
            pageCount: state.pageCount
        }))
    })
}

export const delCardTC = (cardId: string, packId: string) => (dispatch: Dispatch<any>, getState: () => AppRootStateType) => {
    //@ts-ignore
    const state = getState().cards
    cardsAPI.deleteCard(cardId).then(() => {
        dispatch(getCardsTC({
            cardsPack_id: packId,
            max: state.maxGrade,
            min: state.minGrade,
            page: state.page,
            pageCount: state.pageCount
        }))
    })
}

export const updCardTC = (packId: string, data: UpdateCardDataType) => (dispatch: Dispatch<any>, getState: () => AppRootStateType) => {
    //@ts-ignore
    const state = getState().cards
    cardsAPI.updateCard(data).then(() => {
        dispatch(getCardsTC({
            cardsPack_id: packId,
            max: state.maxGrade,
            min: state.minGrade,
            page: state.page,
            pageCount: state.pageCount
        }))
    })
}