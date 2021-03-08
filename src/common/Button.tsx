import React from "react";
import {RequestStatusType} from "../store/reg-Reducer";

type ButtonPropsType = {
    name: string
    onClick: () => void
    status: RequestStatusType
}

export const Button: React.FC<ButtonPropsType> = ({name, onClick, status}) => {
    return (
        <div>
            <button disabled={status === "loading"} style={{cursor:"pointer"}} onClick={onClick}>{name}</button>
        </div>
    )
}