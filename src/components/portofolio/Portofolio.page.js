import React, {useState} from 'react'
import {MenuScroll} from "./MenuScroll";
import {MenuContent, MenuDialog} from "./MenuContent";
import "./style.scss"
import {experiences} from '../../data/Portofolio'

const PortofolioPage = ({isMobile}) => {

    const [selectedItem, setSelectedItem] = useState(experiences[0].items[0])
    const [open, setOpen] = useState(false);

    const handleSelectItem = item => {
        setSelectedItem(item)
        setOpen(true)
    }

    return (
        <React.Fragment>
            <div className="page-container-fixed nav-space container-row">
                <div className="grid-12-6">
                    <MenuScroll onClick={handleSelectItem} items={experiences} activeItem={selectedItem}/>
                </div>
                {isMobile ? <MenuDialog open={open} setOpen={setOpen} item={selectedItem}/> : (
                    <div className="grid-12-6">
                        <MenuContent item={selectedItem} isMobile={false}/>
                    </div>
                )}
            </div>
        </React.Fragment>
    )
}

export default PortofolioPage
/*
{isMobile ? <MenuDialog open={open} setOpen={setOpen} item={selectedItem}/> : (
                <div className="grid-12-6 scroll">
                    <MenuContent item={selectedItem} isMobile={false}/>
                </div>
            )}
 */