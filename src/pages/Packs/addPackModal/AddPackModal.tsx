import Input from "antd/lib/input";
import Modal from "antd/lib/modal/Modal";
import React, {useState} from "react";

type  AddPackModalComponentType = {
    visible: boolean
    closeModal: () => void
    addPack: (name:string) => void
}

const AddPackModalComponent:React.FC<AddPackModalComponentType> = ({addPack, visible, closeModal}) => {
    const [inputValue, setInputValue] = useState('')
    const onOkHandler = () => {
        addPack(inputValue)
        closeModal()
    }

    return (
        <Modal title="Add pack" visible={visible} onOk={onOkHandler} onCancel={closeModal}>
            <span>Введите название</span>
            <div style={{width:'200px'}}>
                <Input value={inputValue} onChange={(e)=>setInputValue(e.currentTarget.value)} allowClear={true} size={"middle"}/>
            </div>
        </Modal>
    )
}

export default AddPackModalComponent