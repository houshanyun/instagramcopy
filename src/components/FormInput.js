import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { ImCross } from "react-icons/im";
import UpContent from "./UpContent";


const FormInput = ({ handleClick }) => {
    const [inputFocus, setInputFocus] = useState(true)
    function handleFocus() {
        handleClick()
        return inputFocus ? setInputFocus(false) : setInputFocus(true);
    }
    return (
        <form action="" className="searchInput">
            {
                inputFocus
                ?   <>
                        <input type="search" id="search" placeholder="搜尋" onFocus={handleFocus}/>
                        <span className="searchIcon"><AiOutlineSearch/></span>
                    </>
                :   <>
                        <input type="search" id="searchFocus" placeholder="搜尋" onBlur={handleFocus}/>
                        <span className="clearIcon"><ImCross/></span>
                        <UpContent />
                    </>
            }
        </form>
    )
}

export default FormInput;