import React, {useState, useEffect} from 'react'
import {MenuScroll} from "./portofolio/MenuScroll";
import {MenuContent, MenuDialog} from "./portofolio/MenuContent";
import "./portofolio/Portofolio.scss"
import {experiences} from '../data/Portofolio'

const Portofolio = ({isMobile}) => {

    const [items] = useState(experiences)
    const [selectedItem, setSelectedItem] = useState(experiences[0].items[0])
    const [open, setOpen] = useState(false);

    const handleSelectItem = item => {
        setSelectedItem(item)
        setOpen(true)
    }

    return (
        <div className="container container-row">
            <div className="grid-12-6">
                <MenuScroll selectItem={handleSelectItem} items={items} activeItem={selectedItem}/>
            </div>
            {isMobile ? <MenuDialog open={open} setOpen={setOpen} item={selectedItem}/> : (
                <div className="grid-12-6">
                    <MenuContent item={selectedItem} isMobile={false}/>
                </div>
            )}
        </div>
    )
}

export default Portofolio