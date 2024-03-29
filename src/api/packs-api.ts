import {instance} from "./authApi";

export type getCardPackParamsType = {
    packName?: string,
    min?: number,
    max?: number,
    sortPacks?: string,
    page?: number,
    pageCount?: number,
    user_id?: string
}
export type AddPackDataType = {
    name?: string
    deckCover?: string
    private?: boolean
}
export type UpdatePackDataType = {
    _id: string
    name?: string
}
export type CardPackType = {
    _id: string
    user_id: string
    name: string
    cardsCount: number
    created: string
    updated: string
}
export type getCardPackResponseType = {
    cardPacks: Array<CardPackType>
    cardPacksTotalCount: number
    maxCardsCount: number
    minCardsCount: number
    page: number
    pageCount: number
}

export const packsAPI = {
    getCardPacks (data?: getCardPackParamsType) {
        return instance.get<getCardPackResponseType>(`cards/pack`,{params: data})
    },
    addPack (data: AddPackDataType) {
        return instance.post(`cards/pack`, {cardsPack: data})
    },
    deletePack (id: string) {
        return instance.delete(`cards/pack?id=${id}`)
    },
    updatePack (data: UpdatePackDataType) {
        return instance.put(`cards/pack`, {cardsPack: data})
    }
}