import React from 'react';
import PropTypes from 'prop-types';

const Item = ({label, selectItem, active}) => {

    return (
        <div
            className={["container-row justify-end clickable menu-item text-l my-1", active ? "menu-item-active" : null].join(" ")}
            onMouseOver={selectItem}
        >
            {label}
        </div>
    )
}

const Title = ({label}) => {
    return (
        <div className="container-row justify-end uppercase menu-item text-m color-light pb-1">{label}</div>
    )
}

export const MenuScroll = ({items, onClick, activeItem}) => {

    const isActive = item => {
        return activeItem && item === activeItem
    }

    return (
        <div className="container container-col content-center">
            <div id="menu-scroll" className="scroll">
            {items.map((item, index) => (
                <div className="full-width mb-3 text-end" key={index}>
                    <Title label={item.title}/>
                    {item.items.map((itemChild, indexChild) => (
                        <Item label={itemChild.menuTitle} selectItem={() => onClick(itemChild)} key={indexChild} active={isActive(itemChild)}/>
                    ))}
                </div>
            ))}
            </div>
        </div>
    );
}

MenuScroll.propTypes = {
    items: PropTypes.array,
};

MenuScroll.defaultProps = {
    items: []
}