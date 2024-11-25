import logo from "../../assets/icons/header_logo.svg";
import React from "react";
// import { ReactComponent as MyIcon } from "../../assets/icons/header_logo.svg";
import "./Header.scss"
import Input from "../ui/input/Input"
import { ReactComponent as SearchIcon } from "../../assets/icons/search_icon.svg";
import { ReactComponent as SettingIcon } from "../../assets/icons/settings_icon.svg";
import ButtonIcon from "../ui/buttonIcon/ButtonIcon";
import avatar from "../../assets/avatar.png"
import data from "../../mocks/user.json";


function Header() {
    const user = data[0];

    return (
        <header className="header">
            <a className="header__logo" href="#0"><img src={logo} alt="logo" width={174} height={24} /></a>
            <div className="header__content-box">
                <Input
                    classNameBox={"header__input-box"}
                    classNameInput={"header__input"}
                    icon={logo}
                    placeholder="Введите текст..." >
                    <ButtonIcon className="header__input-button">
                        <SearchIcon fill="var(--icon-dsbl-clr)" />
                    </ButtonIcon>
                </Input>
                <div className="header__user-box">
                    <a className="header-user__link"  href="#0">
                        <img className="header-user__avatar" src={avatar} alt="user avatar" />
                        <p className="header-user__name">{user.name}</p>
                    </a>
                    <ButtonIcon
                        className={"header-user__setting-btn"}>
                        <SettingIcon/>
                    </ButtonIcon>
                </div>

            </div>

        </header>

    );
}


export default Header;