export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'
type InitialStateType = typeof initialState
export type OnChangeAppStatusActionType = ReturnType<typeof onChangeAppStatusAC>
export type SetErrorActionType = ReturnType<typeof setErrorAC>
type ActionsType = OnChangeAppStatusActionType | SetErrorActionType

const ON_CHANGE_APP_STATUS = "App/ON_CHANGE_APP_STATUS"
const SET_ERROR = "reg/SET-ERROR"

const initialState = {
    appStatus: 'loading' as RequestStatusType,
    error: undefined as string | undefined
}

export const appReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case ON_CHANGE_APP_STATUS:
            return {...state, appStatus: action.status}
        case "reg/SET-ERROR":
            return {...state, error: action.error}
        default:
            return state
    }
}

export const onChangeAppStatusAC = (status: RequestStatusType) => ({type: ON_CHANGE_APP_STATUS, status} as const)
export const setErrorAC = (error: string) => ({type: SET_ERROR, error} as const)
