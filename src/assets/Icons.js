import { v4 } from "uuid";
import { AiOutlineHome, AiFillHome } from "react-icons/ai";
import {
    FaRegPaperPlane,
    FaPaperPlane,
    FaRegPlusSquare,
    FaPlusSquare,
    FaRegCompass,
    FaCompass,
    FaRegHeart,
    FaHeart
} from "react-icons/fa";

const Icons = [
    [v4(), <AiOutlineHome />, <AiFillHome />],
    [v4(), <FaRegPaperPlane />, <FaPaperPlane />],
    [v4(), <FaRegPlusSquare />, <FaPlusSquare />],
    [v4(), <FaRegCompass />, <FaCompass />],
    [v4(), <FaRegHeart />, <FaHeart />],
    [v4(), undefined]

]

export default Icons;