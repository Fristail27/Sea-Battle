import Input from "antd/lib/input";
import Modal from "antd/lib/modal/Modal";
import React, {useState} from "react";

type  AddCardModalComponentType = {
    visible: boolean
    closeModal: () => void
    addCard: (question:string, answer: string) => void
}

const AddCardModalComponent:React.FC<AddCardModalComponentType> = ({addCard, visible, closeModal}) => {
    const [inputQueValue, setInputQueValue] = useState('')
    const [inputAnsValue, setInputAnsValue] = useState('')
    const onOkHandler = () => {
        addCard(inputQueValue, inputAnsValue)
        closeModal()
    }

    return (
        <Modal title="Add card" visible={visible} onOk={onOkHandler} onCancel={closeModal}>
            <span>Введите вопрос</span>
            <div style={{width:'200px'}}>
                <Input value={inputQueValue} onChange={(e)=>setInputQueValue(e.currentTarget.value)} allowClear={true} size={"small"}/>
            </div>
            <span>Введите ответ</span>
            <div style={{width:'200px'}}>
                <Input value={inputAnsValue} onChange={(e)=>setInputAnsValue(e.currentTarget.value)} allowClear={true} size={"small"}/>
            </div>
        </Modal>
    )
}

export default AddCardModalComponent