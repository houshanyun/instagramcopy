import { AiOutlinePicture } from "react-icons/ai";

const Modal = ({ modal, handleIcons}) => {
    function close() {
        handleIcons(2)
        modal(false)
    }
    return (
        <div className="modalWrap" onClick={close}>
            <span className="close" onClick={close}>&times;</span>
            <div className="newPost">
                <h2>創建新帖</h2>
                <div className="picWrap">
                    <picture>
                        <AiOutlinePicture className="imageIcon"/>
                    </picture>
                    <h3>在此處拖動相片和影片</h3>
                </div>
                <div className="inputFileStyle">
                    <span className="inputName">從電腦選擇檔案</span>
                    <input type="file" name="imageUpdate" className="imageUpdate"/>
                </div>
            </div>
        </div>
    )
}

export default Modal;