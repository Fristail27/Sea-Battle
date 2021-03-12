const ON_CHANGE_APP_STATUS = "App/ON_CHANGE_APP_STATUS"
export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'

const initialState = {
    appStatus: 'loading' as RequestStatusType
}

type InitialStateType = typeof initialState
export type OnChangeAppStatusActionType = {
    type: typeof ON_CHANGE_APP_STATUS
    status: RequestStatusType
}
type ActionsType = OnChangeAppStatusActionType

export const appReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case ON_CHANGE_APP_STATUS:
            return {
                ...state,
                appStatus: action.status
            }
        default:
            return state
    }
}



export const onChangeAppStatusAC = (status:RequestStatusType):OnChangeAppStatusActionType => ({type: ON_CHANGE_APP_STATUS, status})


