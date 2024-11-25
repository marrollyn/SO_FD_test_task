import React from "react";
import Header from "../components/header/Header";
import Sidebar from "../components/sidebar/Sidebar";
import "./LayoutPage.scss"

function LayoutPage({children}) {

    return (
        <>
            <Header/>
            <section className="main-content">
                <Sidebar/>
                {children}
            </section>
            
        </>
    )

}

export default LayoutPage;