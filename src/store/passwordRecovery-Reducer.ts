const initialState = {
    valueOfInputEmail: null as string | null
}

const ON_CHANGE_INPUT = "passwordRecovery/ON_CHANGE_INPUT"

type InitialStateType = typeof initialState

type onChangeInputActionType = {
    type: typeof ON_CHANGE_INPUT
    value: string
}
type ActionsType = onChangeInputActionType

export const passwordRecoveryReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case ON_CHANGE_INPUT:
            return {
                ...state,
                valueOfInputEmail: action.value
            }
        default:
            return state
    }
}


const onChangeInputAC = (value:string):onChangeInputActionType => ({type: ON_CHANGE_INPUT, value})

