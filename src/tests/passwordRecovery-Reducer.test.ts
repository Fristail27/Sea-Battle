import { initialState, onChangeInputAC, passwordRecoveryReducer } from "../store/passwordRecovery-Reducer"

const state = initialState

test("password-recovery-reducer/email_input", ()=>{
    const action = onChangeInputAC("testValue")
    const endState = passwordRecoveryReducer(state, action)
    expect(endState.valueOfInputEmail).toBe("testValue")
})