import {Dispatch} from "redux"

export function errHandlerInTC(dispatch: Dispatch<any>, err: any, setAppStatusAC: any, setErrAC?: any) {

    dispatch(setAppStatusAC("failed"))
    if (setErrAC) {
        if (err.response) {
            dispatch(setErrAC(err.response.data.error))
        } else {
            dispatch(setErrAC(err.message))
        }
    }
}