import React, {useState} from 'react'
import {MenuScroll} from "./portofolio/MenuScroll";
import {MenuContent} from "./portofolio/MenuContent";
import "./portofolio/Portofolio.scss"
import {experiences} from '../data/Portofolio'

function Portofolio({hidden}) {

    const [items] = useState(experiences)
    const [selectedItem, setSelectedItem] = useState(null)

    return (
        <div className={["portofolio-container web", hidden ? "hide-content" : "show-content"].join(" ")}>
            <div className="menu-scroll">
                <MenuScroll selectItem={setSelectedItem} items={items} activeItem={selectedItem}/>
            </div>
            <div className="menu-content">
                {selectedItem ? <MenuContent item={selectedItem}/> : null}
                {}
            </div>
        </div>
    )
}

export default Portofolio