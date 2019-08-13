import React, {useState} from 'react';
import PropTypes from 'prop-types';
import "./style.scss"
import {SocialMedia} from "../contact/Contact";

const Link = ({link, activeLink}) => {
    const isActive = () => {
        return activeLink ? link.url === activeLink : false
    }

    return (
        <div className={["link", isActive() ? "link-active" : null].join(' ')}>
            {link.label.toUpperCase()}
        </div>
    )
}

Link.propTypes = {
    link: PropTypes.object.isRequired,
    activeLink: PropTypes.string,
};

const NavLinks = ({links, activeLink, navigate}) => {
    return (
        <React.Fragment>
            {links.map((link, index) => (
                <div onClick={() => navigate(link)} key={index}>
                    <Link link={link} activeLink={activeLink}/>
                </div>
            ))}
        </React.Fragment>
    )
}

const NavMobile = ({isMobile, history, links, activeLink, navigate}) => {
    const [open, setOpen] = useState(false);
    const [visible, setVisible] = useState(false);

    history.listen(location => {
        console.log('location moved')
        setVisible(false)
        setTimeout(() => {
            console.log('closing the portal')
            setOpen(false)
        }, 400)
    })

    const handleNavigate = link => {
        navigate(link)
    }

    const handleOpen = value => {
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

    return (
        <React.Fragment>
            <div className="navbar-container justify-between">
                <div className="pl-1">
                    <SocialMedia isMobile={isMobile}/>
                </div>
                <i onClick={() => handleOpen(true)} className="navbar-icon material-icons text-xxl p-1">menu</i>
            </div>
            {open ? (
                <div id="navbar-dialog" className={visible ? "navbar-dialog-fade" : ""}>
                    <div className="container-row-reverse">
                        <i onClick={() => handleOpen(false)}
                           className="navbar-icon material-icons text-xxl p-1">clear</i>
                    </div>
                    <div className="navbar-dialog-content">
                        <NavLinks links={links} activeLink={activeLink} navigate={handleNavigate}/>
                    </div>
                </div>
            ) : null}
        </React.Fragment>
    )
}

export const Navbar = ({history, links, navigate, isMobile}) => {

    const [activeLink, setActiveLink] = useState(history.location.pathname.substring(1, history.location.pathname.length));

    history.listen(location => {
        let url = location.pathname
        setActiveLink(url.substring(1, url.length))
    })

    return (
        <React.Fragment>
            {isMobile ? (
                <NavMobile isMobile={isMobile} history={history} links={links} activeLink={activeLink}
                           navigate={navigate}/>
            ) : (
                <div className="navbar-container justify-between">
                    <div className="pl-1">
                        <SocialMedia isMobile={isMobile}/>
                    </div>
                    <div className="container-row">
                        <NavLinks links={links} activeLink={activeLink} navigate={navigate}/>
                    </div>
                </div>
            )}
        </React.Fragment>
    );
}

Navbar.propTypes = {
    history: PropTypes.object,
    navigate: PropTypes.func,
    links: PropTypes.array,
    isMobile: PropTypes.bool,
};