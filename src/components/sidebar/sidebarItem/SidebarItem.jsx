import React, {useState} from "react";
import "./SidebarItem.scss"
import ButtonIcon from "../../ui/buttonIcon/ButtonIcon";
import { ReactComponent as SidebarItemIcon } from "../../../assets/icons/sidebar_item.svg"

function SidebarItem({item}) {

    const [isOpen, setIsOpen] = useState(false);

    function changeItemOpen() {
        setIsOpen(!isOpen);
    }

    return (
        <li 
        className={`sidebar__menu-item ${isOpen ? 'sidebar__menu-item--open' : ''}`}>
            <ButtonIcon
            width={16}
            className="sidebar-item__button-icon"
            onClick={changeItemOpen}>
                <SidebarItemIcon
                fill="var(--icon-dsbl-clr)"/>
            </ButtonIcon>
            <p className="sidebar-item__item">{item}</p>
        </li>
    )

}

export default SidebarItem;