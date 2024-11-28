import React, { useState, useEffect } from "react";
import "./Sidebar.scss"
import ButtonIcon from "../ui/buttonIcon/ButtonIcon";
import SidebarItem from "./sidebarItem/SidebarItem";
import data from '../../mocks/sidebarItems.json';
import { ReactComponent as SidebarNavIcon } from "../../assets/icons/sidebar_nav.svg"
import { ReactComponent as SidebarFavIcon } from "../../assets/icons/sidebar_favorite.svg"
import Input from "../ui/input/Input";
import { ReactComponent as FilterSidebarIcon } from "../../assets/icons/filter_icon.svg"
import { ReactComponent as PicSidebarIcon } from "../../assets/icons/pic_icon.svg"

function Sidebar() {

    const [isOpen, setIsOpen] = useState(true);
    const [isFavSelected, setFavSelected] = useState(false);

    const handleFavClick = () => {
        setFavSelected(prev => !prev);
    };

    function changeSidebarOpen() {
        setIsOpen(prev => !prev);
    }

    const handleResize = () => {
        if (window.innerWidth <= 991) { 
            setIsOpen(false);
        } else {
            setIsOpen(true);
        }
    };

    useEffect(() => {

        window.addEventListener('resize', handleResize);

        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <nav className="sidebar">
            <section className="sidebar__nav-buttons">
                <ButtonIcon
                    className="nav-button__item nav-button__item-menu"
                    width="24"
                    height="24"
                    onClick={changeSidebarOpen}>
                    <SidebarNavIcon fill={isOpen ? "var(--icon-accent-clr)" : "var(--icon-dflt-clr)"} />
                </ButtonIcon>
                <ButtonIcon
                    className="nav-button__item nav-button__item-fav"
                    width="24"
                    height="24"
                    onClick={handleFavClick}>
                    <SidebarFavIcon
                        fill={isFavSelected ? "var(--important-marker-clr)" : "var(--icon-dflt-clr)"} />
                </ButtonIcon>
            </section>
            {isOpen && (<section className={`sidebar__menu ${isOpen ? 'sidebar__menu-visible' : ''}`}>
                <div className="sidebar__menu-search">
                    <Input
                        classNameInput="sidebar__menu-search__input"
                        classNameBox=""
                        type="text"
                        placeholder="Поиск по меню"
                    >
                        <ButtonIcon className="sidebar__menu__input-button">
                            <FilterSidebarIcon fill="var(--icon-dsbl-clr)"/>
                        </ButtonIcon>
                    </Input>
                    <ButtonIcon className="sidebar__menu__pic-button">
                        <PicSidebarIcon/>
                    </ButtonIcon>
                </div>
                <nav className="sidebar__menu-nav">
                    <ul className="sidebar__menu-list">
                        {data.map((item, index) => (
                            <SidebarItem
                                key={index}
                                item={item.name}
                            />
                        ))}
                    </ul>
                </nav>
            </section>)}
        </nav>
    )
}

export default Sidebar;