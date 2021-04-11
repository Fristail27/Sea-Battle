import Input from "antd/lib/input";
import Modal from "antd/lib/modal/Modal";
import React, {useState} from "react";

type  UpdateCardModalComponentType = {
    visible: boolean
    closeModal: () => void
    updateCard: (question:string, comment:string) => void
    initQuestion: string
    initComment: string
}

const UpdateCardModalComponent:React.FC<UpdateCardModalComponentType> = ({updateCard, visible, closeModal, initQuestion, initComment}) => {
    const [inputQuestion, setInputQuestion] = useState(initQuestion)
    const [inputComment, setInputComment] = useState(initComment)
    const onOkHandler = () => {
        updateCard(inputQuestion,inputComment)
        closeModal()
    }

    return (
        <Modal title="Update Card" visible={visible} onOk={onOkHandler} onCancel={closeModal}>
            <span>Введите вопрос</span>
            <div style={{width:'200px'}}>
                <Input value={inputQuestion} onChange={(e)=>setInputQuestion(e.currentTarget.value)} allowClear={true} size={"middle"}/>
            </div>
            <span>Введите комментарий</span>
            <div style={{width:'200px'}}>
                <Input value={inputComment} onChange={(e)=>setInputComment(e.currentTarget.value)} allowClear={true} size={"middle"}/>
            </div>
        </Modal>
    )
}

export default UpdateCardModalComponent