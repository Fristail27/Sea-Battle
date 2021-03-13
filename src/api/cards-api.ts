import axios from "axios";

export type GetCardsParamsType = {
    cardAnswer?: string
    cardQuestion?: string
    cardsPack_id: string
    min?: number
    max?: number
    sortCards?: string
    page?: number
    pageCount?: number
}
export type AddCardDataType = {
    cardsPack_id: string
    question?: string
    answer?: string
    grade?: number
    shots?: number
    rating?: number
    answerImg?: string
    questionImg?: string
    questionVideo?: string
    answerVideo?: string
    type?: string
}
export type UpdateCardDataType = {
    _id: string
    question?: string
    comments?: string
}
export type CardType = {
    answer: string
    question: string
    cardsPack_id: string
    grade: number
    shots: number
    user_id: string
    created: string
    updated: string
    _id: string
}
export type GetCardsResponseType = {
    cards: Array<CardType>
    cardsTotalCount: number
    maxGrade: number
    minGrade: number
    page: number
    pageCount: number
    packUserId: string
}

const instance = axios.create({
    baseURL: "https://neko-back.herokuapp.com/2.0/",
    withCredentials: true
})

export const cardsAPI = {
    getCards (data: GetCardsParamsType) {
        return instance.get<GetCardsResponseType>(`cards/card`, {params: data})
    },
    addCard (data: AddCardDataType) {
        return instance.post(`cards/card`, {card: data})
    },
    deleteCard (id: string) {
        return instance.delete(`cards/card?id=${id}`)
    },
    updateCard (data: UpdateCardDataType) {
        return instance.put(`cards/card`, {card: data})
    }
}