import React, {useState} from 'react';
import PropTypes from 'prop-types';

function Item({label, selectItem, active}) {

    return (
        <div
            className={["abel clickable menu-item text-l t-grey my-1", active ? "menu-item-active" : null].join(" ")}
            onMouseOver={selectItem}
        >
            {label}
        </div>
    )
}

function ItemTitle({label}) {
    return (
        <div className="abel menu-item text-m t-grey-light pb-1">{label}</div>
    )
}

export function MenuScroll({items, selectItem, activeItem}) {

    const isActive = item => {
        return activeItem && item === activeItem
    }

    return (
        <React.Fragment>
            {items.map((item, index) => (
                <div className="mb-3" key={index}>
                    <ItemTitle label={item.title}/>
                    {item.items.map((itemChild, indexChild) => (
                        <Item label={itemChild.menuTitle} selectItem={() => selectItem(itemChild)} key={indexChild} active={isActive(itemChild)}/>
                    ))}
                </div>
            ))}
        </React.Fragment>
    );
}

MenuScroll.propTypes = {
    items: PropTypes.array,
};

MenuScroll.defaultProps = {
    items: []
}