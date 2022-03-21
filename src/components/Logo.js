import Icons from "../assets/Icons"
import { Link } from "react-router-dom"
const Logo = ({ handleClick }) => {

    return (
        <div className="logo" onClick={() => handleClick(Icons[0][0])}>
            <Link to="/">codeReact</Link>
        </div>
    )
}

export default Logo;