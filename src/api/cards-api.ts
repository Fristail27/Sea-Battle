import {instance} from "./authApi";

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
    comments:string
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
export type GradeType = 1|2|3|4|5
type updatedGradeType = {
    _id: string
    cardsPack_id: string
    card_id: string
    user_id: string
    grade: GradeType
    shots: number
}
type GradeCardResponseType = {
    updatedGrade: updatedGradeType
}


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
    },
    gradeCard (grade: GradeType, card_id: string) {
        return instance.put<GradeCardResponseType>(`cards/grade`, {grade, card_id})
    }
}