import Input from "antd/lib/input";
import Modal from "antd/lib/modal/Modal";
import React, {useState} from "react";

type  UpdatePackModalComponentType = {
    visible: boolean
    closeModal: () => void
    updatePack: (name:string) => void
    initValue: string
}

const UpdatePackModalComponent:React.FC<UpdatePackModalComponentType> = ({updatePack, visible, closeModal, initValue}) => {
    const [inputValue, setInputValue] = useState(initValue)
    const onOkHandler = () => {
        updatePack(inputValue)
        closeModal()
    }

    return (
        <Modal title="Basic Modal" visible={visible} onOk={onOkHandler} onCancel={closeModal}>
            <span>Введите название</span>
            <div style={{width:'200px'}}>
                <Input value={inputValue} onChange={(e)=>setInputValue(e.currentTarget.value)} allowClear={true} size={"small"}/>
            </div>
        </Modal>
    )
}

export default UpdatePackModalComponent