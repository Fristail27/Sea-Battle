const initialState = {
    succeedRegister: false as boolean
}

type InitialStateType = typeof initialState

type ActionsType = RegisterActionType

export const registrationReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case "SET-REGISTER":
            return {...state, succeedRegister: action.succeedRegister}
        default:
            return state
    }
}

const registerAC = (succeedRegister: boolean) => {
    return {
        type: "SET-REGISTER",
        succeedRegister
    } as const
}

type RegisterActionType = ReturnType<typeof registerAC>

