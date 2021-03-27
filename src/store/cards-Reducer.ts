import {
    AddCardDataType, cardsAPI, CardType, GetCardsParamsType, GetCardsResponseType, GradeType, UpdateCardDataType
} from "../api/cards-api";
import {Dispatch} from "redux";
import {AppRootStateType} from "./store";
import {onChangeAppStatusAC} from "./app-Reducer";

export type InitialStateType = typeof initialState
type ActionType = getCardsReturnType | setCardGradeReturnType

const GET_CARDS = "cards/GET-CARDS"
const SET_CARD_GRADE = "cards/SET-CARD-GRADE"

const initialState = {
    cards: [] as Array<CardType>,
    cardsTotalCount: 0,
    maxGrade: 10,
    minGrade: 0,
    page: 1,
    pageCount: 1000,
    packUserId: ""
}

export const cardsReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case "cards/GET-CARDS":
            return {...state, ...action.data}
        case "cards/SET-CARD-GRADE":
            return {
                ...state,
                cards: state.cards.map(c => c._id === action.id ? {...c, grade: action.grade, shots: action.shots} : c)
            }
        default:
            return state
    }
}

const getCards = (data: GetCardsResponseType) => ({type: GET_CARDS, data} as const)
type getCardsReturnType = ReturnType<typeof getCards>

const setCardGrade = (id: string, grade: GradeType, shots: number) => ({
    type: SET_CARD_GRADE,
    id,
    grade,
    shots
} as const)
type setCardGradeReturnType = ReturnType<typeof setCardGrade>

export const getCardsTC = (data: GetCardsParamsType) => async (dispatch: Dispatch, getState: () => AppRootStateType) => {
    dispatch(onChangeAppStatusAC("loading"))
    const params = getState().cards
    const response = await cardsAPI.getCards(data)
    dispatch(getCards({...response.data, pageCount: params.pageCount}))
    dispatch(onChangeAppStatusAC("succeeded"))
}

export const addCardTC = (data: AddCardDataType) => async (dispatch: Dispatch<any>, getState: () => AppRootStateType) => {
    dispatch(onChangeAppStatusAC("loading"))
    const state = getState().cards
    await cardsAPI.addCard(data)
    dispatch(getCardsTC({
        cardsPack_id: data.cardsPack_id, max: state.maxGrade, min: state.minGrade, page: state.page,
        pageCount: state.pageCount
    }))
    // dispatch(onChangeAppStatusAC("succeeded"))
}

export const delCardTC = (cardId: string, packId: string) => async (dispatch: Dispatch<any>, getState: () => AppRootStateType) => {
    dispatch(onChangeAppStatusAC("loading"))
    const state = getState().cards
    await cardsAPI.deleteCard(cardId)
    dispatch(getCardsTC({
        cardsPack_id: packId, max: state.maxGrade, min: state.minGrade, page: state.page, pageCount: state.pageCount
    }))
    // dispatch(onChangeAppStatusAC("succeeded"))
}

export const updCardTC = (packId: string, data: UpdateCardDataType) => async (dispatch: Dispatch<any>, getState: () => AppRootStateType) => {
    dispatch(onChangeAppStatusAC("loading"))
    const state = getState().cards
    await cardsAPI.updateCard(data)
    dispatch(getCardsTC({
        cardsPack_id: packId, max: state.maxGrade, min: state.minGrade, page: state.page, pageCount: state.pageCount
    }))
    // dispatch(onChangeAppStatusAC("succeeded"))
}

export const setCardGradeTC = (grade: GradeType, id: string) => async (dispatch: Dispatch<any>) => {
    dispatch(onChangeAppStatusAC("loading"))
    const response = await cardsAPI.gradeCard(grade, id)
    dispatch(setCardGrade(id, response.data.updatedGrade.grade, response.data.updatedGrade.shots))
    dispatch(onChangeAppStatusAC("succeeded"))
}