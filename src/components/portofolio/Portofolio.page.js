import React, {useState} from 'react'
import {MenuScroll} from "./MenuScroll";
import {MenuContent, MenuDialog} from "./MenuContent";
import "./style.scss"
import {experiences} from '../../data/Portofolio'

const PortofolioPage = ({isMobile}) => {

    const [selectedItem, setSelectedItem] = useState(experiences[0].items[0])
    const [open, setOpen] = useState(false);
    const [visible, setVisible] = useState(false);

    const handleOpen = value => {
        console.log(value)
        if (value) {
            setOpen(value)

            setTimeout(() => {
                setVisible(value)
            }, 50)
        } else {
            setVisible(value)

            setTimeout(() => {
                setOpen(value)

            }, 400)
        }
    }

    const handleSelectItem = item => {
        setSelectedItem(item)
        handleOpen(true)
    }

    return (
        <React.Fragment>
            <div className="nav-space"/>
            {!isMobile ? (
                <div className="page-container container-row scroll-hidden">
                    <div className="grid-12-6 scroll">
                        <MenuScroll onClick={handleSelectItem} items={experiences} activeItem={selectedItem}/>
                    </div>
                    <div className="grid-12-6 scroll">
                        <MenuContent item={selectedItem} isMobile={false}/>
                    </div>
                </div>
            ) : (
                <div className="page-container container-col align-center scroll-x-hidden">
                    <MenuScroll onClick={handleSelectItem} items={experiences} activeItem={selectedItem}/>
                    <MenuDialog visible={visible} open={open} setOpen={handleOpen} item={selectedItem}/>
                </div>
            )}
        </React.Fragment>
    )
}

export default PortofolioPage