const initialState = {}

type InitialStateType = typeof initialState

type ActionsType = any

export const appReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        default:
            return state
    }
}
