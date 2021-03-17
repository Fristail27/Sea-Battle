import {initialState, InitialStateType, packsReducer, setFilterPacksAC} from "../store/packs-Reducer";


const state = initialState
const packs = [
    {
        "_id": "6051f9eae180bf0004a9961e",
        "user_id": "5eecf82a3ed8f700042f1186",
        "user_name": "сам ты ВАлера",
        "private": false,
        "name": "new pack 2.0",
        "path": "/def",
        "grade": 0,
        "shots": 0,
        "cardsCount": 3,
        "type": "pack",
        "rating": 0,
        "created": "2021-03-17T12:45:30.333Z",
        "updated": "2021-03-17T12:45:30.333Z",
        "more_id": "5eecf82a3ed8f700042f1186",
        "__v": 0
    },
    {
        "_id": "6051f9d8e180bf0004a9961b",
        "user_id": "5eecf82a3ed8f700042f1186",
        "user_name": "сам ты ВАлера",
        "private": false,
        "name": "new pack 2.0",
        "path": "/def",
        "grade": 0,
        "shots": 0,
        "cardsCount": 8,
        "type": "pack",
        "rating": 0,
        "created": "2021-03-17T12:45:12.715Z",
        "updated": "2021-03-17T12:45:12.715Z",
        "more_id": "5eecf82a3ed8f700042f1186",
        "__v": 0
    },
    {
        "_id": "6051d506e180bf0004a99613",
        "user_id": "5f8a1dc21a391f2c38b14264",
        "user_name": "rozen19942810@gmail.com",
        "private": false,
        "name": "test",
        "path": "/def",
        "grade": 0,
        "shots": 0,
        "cardsCount": 0,
        "type": "pack",
        "rating": 0,
        "created": "2021-03-17T10:08:06.544Z",
        "updated": "2021-03-17T10:08:18.571Z",
        "more_id": "5f8a1dc21a391f2c38b14264",
        "__v": 0,
        "deckCover": null
    },
    {
        "_id": "6051d098e180bf0004a9960b",
        "user_id": "60432fc180e4a900047fa518",
        "user_name": "wrestling.workout22@gmail.com",
        "private": false,
        "name": "new pack 2.0",
        "path": "/def",
        "grade": 0,
        "shots": 0,
        "cardsCount": 0,
        "type": "pack",
        "rating": 0,
        "created": "2021-03-17T09:49:12.861Z",
        "updated": "2021-03-17T09:49:12.861Z",
        "more_id": "60432fc180e4a900047fa518",
        "__v": 0
    },
    {
        "_id": "6051d08fe180bf0004a9960a",
        "user_id": "60432fc180e4a900047fa518",
        "user_name": "wrestling.workout22@gmail.com",
        "private": false,
        "name": "new pack 2.0",
        "path": "/def",
        "grade": 0,
        "shots": 0,
        "cardsCount": 0,
        "type": "pack",
        "rating": 0,
        "created": "2021-03-17T09:49:03.746Z",
        "updated": "2021-03-17T09:49:03.746Z",
        "more_id": "60432fc180e4a900047fa518",
        "__v": 0
    },
    {
        "_id": "6051d083e180bf0004a99609",
        "user_id": "60432fc180e4a900047fa518",
        "user_name": "wrestling.workout22@gmail.com",
        "private": false,
        "name": "new pack 2.0",
        "path": "/def",
        "grade": 0,
        "shots": 0,
        "cardsCount": 0,
        "type": "pack",
        "rating": 0,
        "created": "2021-03-17T09:48:51.888Z",
        "updated": "2021-03-17T09:48:51.888Z",
        "more_id": "60432fc180e4a900047fa518",
        "__v": 0
    },
    {
        "_id": "6051cd2a9c02521f90fda223",
        "user_id": "6043de001aa2ac0004290ec8",
        "user_name": "gleb.evgenevichh@gmail.com",
        "private": false,
        "name": "Artur's task",
        "path": "/def",
        "grade": 0,
        "shots": 0,
        "cardsCount": 0,
        "type": "pack",
        "rating": 0,
        "created": "2021-03-17T09:34:34.133Z",
        "updated": "2021-03-17T09:34:34.133Z",
        "more_id": "6043de001aa2ac0004290ec8",
        "__v": 0
    },
    {
        "_id": "6051cb36e180bf0004a99607",
        "user_id": "602c30a890cc0f2484f1f3cc",
        "user_name": "Potapov.eo@mail.ru",
        "private": false,
        "name": "фффффффффф",
        "path": "/def",
        "grade": 0,
        "shots": 0,
        "cardsCount": 1,
        "type": "pack",
        "rating": 0,
        "created": "2021-03-17T09:26:14.741Z",
        "updated": "2021-03-17T09:26:36.715Z",
        "more_id": "602c30a890cc0f2484f1f3cc",
        "__v": 0
    },
    {
        "_id": "6051c94a9c02521f90fda222",
        "user_id": "6043de001aa2ac0004290ec8",
        "user_name": "gleb.evgenevichh@gmail.com",
        "private": false,
        "name": "Updated Artur's Pack",
        "path": "/def",
        "grade": 0,
        "shots": 0,
        "cardsCount": 0,
        "type": "pack",
        "rating": 0,
        "created": "2021-03-17T09:18:02.752Z",
        "updated": "2021-03-17T09:22:49.193Z",
        "more_id": "6043de001aa2ac0004290ec8",
        "__v": 0,
        "deckCover": null
    },
    {
        "_id": "6051c9499c02521f90fda221",
        "user_id": "6043de001aa2ac0004290ec8",
        "user_name": "gleb.evgenevichh@gmail.com",
        "private": false,
        "name": "Artur's task",
        "path": "/def",
        "grade": 0,
        "shots": 0,
        "cardsCount": 0,
        "type": "pack",
        "rating": 0,
        "created": "2021-03-17T09:18:01.493Z",
        "updated": "2021-03-17T09:18:01.493Z",
        "more_id": "6043de001aa2ac0004290ec8",
        "__v": 0
    }
]
const currentState:InitialStateType = {...state, cardPacks: packs}



test("packs-reducer/sort-ob-page-up", ()=>{
    const action = setFilterPacksAC("UP")
    const endState = packsReducer(currentState, action)
    expect(endState.cardPacks[0].cardsCount).toBe(8)
    expect(endState.cardPacks[1].cardsCount).toBe(3)
})

test("packs-reducer/sort-ob-page-down", ()=>{
    const action = setFilterPacksAC("DOWN")
    const endState = packsReducer(currentState, action)
    expect(endState.cardPacks[9].cardsCount).toBe(8)
    expect(endState.cardPacks[8].cardsCount).toBe(3)
})