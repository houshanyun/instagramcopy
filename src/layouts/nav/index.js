import React, { useState } from "react";
import FormInput from "./FormInput";
import Logo from "./Logo";
import Modal from "./Modal";
import Icons from "../../assets/Icons";
import UserSetting from "./User";
import { Link, Outlet } from "react-router-dom";

const Nav = () => {

    const [click, setClick] = useState([true, false, false, false, false, false])
    const [open, setOpen] = useState(false)

    function initClick() {
        setClick([false, false, false, false, false, false])
    }

    function handleIcons(position) {
        if (click[position] && (window.location.pathname === "/Message")) {
            return click[1] ? initClick() : handleClickBoolean(1)
        } else if (click[position] && (window.location.pathname === "/")) {
            return click[0] ? initClick() : handleClickBoolean(0)
        } else if (click[position] && (window.location.pathname === "/Guide")) {
            return click[3] ? initClick() : handleClickBoolean(3)
        } else {
            return click[position] ? initClick() : handleClickBoolean(position)
        }
    }

    function handleClickBoolean(position) {
        const clickBoolean = click.map(
            (item, index) => index === position ? !item : false
        )
        setClick(clickBoolean);
        return clickBoolean;
    }
    function handleClick(position) {
        switch (position) {
            case `${Icons[0][0]}`:
                click[0] ? initClick() : handleClickBoolean(0)
                console.log(click);
                break;
            case `${Icons[1][0]}`:
                click[1] ? initClick() : handleClickBoolean(1)
                break;
            case `${Icons[2][0]}`:
                setOpen(true)
                return handleIcons(2);
                // click[2] ? initClick() : handleClickBoolean(2)
                // break;
            case `${Icons[3][0]}`:
                click[3] ? initClick() : handleClickBoolean(3)
                break;
            case `${Icons[4][0]}`:
                return handleIcons(4);
            case `${Icons[5][0]}`:
                click[5] ? initClick() : handleClickBoolean(5)
                break;
            default:
                return initClick()
        }
    }

    return (
        <nav className="nav">
            {open && <Modal
                modal={setOpen}
                click={click}
                setClick={setClick}
                handleClickBoolean={handleClickBoolean}
                initClick={initClick}
                handleIcons={handleIcons}
            />}
            <div className="navWrap">
                <Logo />
                <FormInput />
                <ul className="navItems">
                    <li onClick={() => handleClick(Icons[0][0])}>
                        <Link to="/">
                            {click[0] ? Icons[0][2] : Icons[0][1]}
                        </Link>
                    </li>
                    <li onClick={() => handleClick(Icons[1][0])}>
                        <Link to="/Message">
                            {click[1] ? Icons[1][2] : Icons[1][1]}
                        </Link>
                    </li>
                    <li onClick={() => handleClick(Icons[2][0])}>
                        {click[2] ? Icons[2][2] : Icons[2][1]}
                    </li>
                    <li onClick={() => handleClick(Icons[3][0])}>
                        <Link to="/Guide">
                            {click[3] ? Icons[3][2] : Icons[3][1]}
                        </Link>
                    </li>
                    <li onClick={() => handleClick(Icons[4][0])}>
                        {click[4] ? Icons[4][2] : Icons[4][1]}
                        {
                            click[4] &&
                            <div className="heartContent"></div>
                        }
                    </li>
                    <li onClick={() => handleClick(Icons[5][0])}>
                        {
                            <div className={click[5]
                                ? "user active"
                                : "user"}>{click[5] && <UserSetting />}
                            </div>
                        }
                    </li>
                </ul>
                <Outlet />

            </div>
        </nav>
    )
}

export default Nav;