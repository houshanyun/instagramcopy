import { useState } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight  } from "react-icons/ai";

const Friends = () => {

    const [arrow, setArrow] = useState([false, true])

    function imgActive(e) {
        const images = document.querySelector(".friendWrap")
        if (e.target.className === "arrowLeft") {
            images.classList.toggle("active")
            setArrow(() => [false, true])
        } else {
            images.classList.toggle("active")
            setArrow(() => [true, false])
        }
    }
    return (
        <div className="friendGroup">
            {arrow[0] && <span className="arrowLeft" onClick={imgActive}><AiOutlineArrowLeft className="eventPass"/></span>}
            {arrow[1] && <span className="arrowRight" onClick={imgActive}><AiOutlineArrowRight className="eventPass"/></span>}
            <div className="friendWrap">
                <div className="friendItem">
                    <img src="https://picsum.photos/id/230/100/100" alt="" />
                    <h3>aaaaaaa</h3>
                </div>
                <div className="friendItem">
                    <img src="https://picsum.photos/id/231/100/100" alt="" />
                    <h3>aaaaaaa</h3>
                </div>
                <div className="friendItem">
                    <img src="https://picsum.photos/id/232/100/100" alt="" />
                    <h3>aaaaaaa</h3>
                </div>
                <div className="friendItem">
                    <img src="https://picsum.photos/id/233/100/100" alt="" />
                    <h3>aaaaaaa</h3>
                </div>
                <div className="friendItem">
                    <img src="https://picsum.photos/id/234/100/100" alt="" />
                    <h3>aaaaaaa</h3>
                </div>
                <div className="friendItem">
                    <img src="https://picsum.photos/id/235/100/100" alt="" />
                    <h3>aaaaaaa</h3>
                </div>
                <div className="friendItem">
                    <img src="https://picsum.photos/id/236/100/100" alt="" />
                    <h3>aaaaaaa</h3>
                </div>
                <div className="friendItem">
                    <img src="https://picsum.photos/id/237/100/100" alt="" />
                    <h3>aaaaaaa</h3>
                </div>
                <div className="friendItem">
                    <img src="https://picsum.photos/id/238/100/100" alt="" />
                    <h3>aaaaaaa</h3>
                </div>
                <div className="friendItem">
                    <img src="https://picsum.photos/id/238/100/100" alt="" />
                    <h3>aaaaaaa</h3>
                </div>
                <div className="friendItem">
                    <img src="https://picsum.photos/id/238/100/100" alt="" />
                    <h3>aaaaaaa</h3>
                </div>
            </div>
        </div>
    )
}

export default Friends;