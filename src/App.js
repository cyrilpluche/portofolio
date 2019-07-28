import React, {useEffect, useState} from 'react'
import {createBrowserHistory} from "history"
import 'typeface-roboto'
import './style/Global.scss'
import './style/Spacing.scss'
import './style/Variables.scss'
import './style/Grid.scss'
import {Background} from "./components/background/Background"
import {Navbar} from "./components/navbar/Navbar"
import {DesignName} from "./components/home/DesignName"
import Contact from './components/Contact'
import Portofolio from './components/Portofolio'
import AboutMe from './components/AboutMe'
import {pages} from "./Enum";

const Page = ({content, active}) => {

    const getVisibility = () => (
        active ? "show-content" : "hide-content"
    )

    return (
        <div className={["page", getVisibility()].join(" ")}>
            {content}
        </div>
    )
}

function App() {

    const history = createBrowserHistory()

    const navLinks = [
        {url: pages.HOME, label: "Home", transition: "bot-active", navColor: "color-white", background: 'bg-primary'},
        {url: pages.ABOUT_ME, label: "About Me", transition: "top-active", navColor: "color-black", background: 'bg-secondary'},
        {url: pages.PORTFOLIO, label: "Portfolio", transition: "top-active", navColor: "color-black", background: 'bg-secondary'},
        {url: pages.CONTACT, label: "Contact", transition: "top-active-quarter", navColor: "color-black", background: 'bg-secondary'},

    ]

    const [activeLink, setActiveLink] = useState(navLinks[0])
    const [opacityTransition, setOpacityTransition] = useState(true)
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 1000)

    const handleResize = () => {
        setIsMobile(window.innerWidth <= 1000);
    }

    useEffect(() => {
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        }
    });

    history.listen(location => {
        setOpacityTransition(true)
        setTimeout(() => {
            setOpacityTransition(false)
        }, 2000)
    })

    const isPageActive = (page) => {
        return page === activeLink.url
    }

    return (
        <div className="index">
            <Background transition={activeLink.transition}/>
            <Navbar isMobile={isMobile} history={history} links={navLinks} activeLink={activeLink}
                    navigate={setActiveLink}/>
            <div className="page-container">
                <Page content={<DesignName label={"cyril pluche"} active={isPageActive(pages.HOME)}/>}
                      active={isPageActive(pages.HOME)}/>
                <Page content={<Portofolio isMobile={isMobile}/>} active={isPageActive(pages.PORTFOLIO)}/>
                <Page content={<AboutMe isMobile={isMobile}/>} active={isPageActive(pages.ABOUT_ME)}/>
                <Page content={<Contact isMobile={isMobile}/>} active={isPageActive(pages.CONTACT)}/>
            </div>
            {/*<DesignName label={"cyril pluche"} isEnter={activeLink.url === pages.HOME}/>
            <Portofolio hidden={activeLink.url !== pages.PORTOFOLIO} />
            <Contact hidden={activeLink.url !== pages.CONTACT} />
            <AboutMe hidden={activeLink.url !== pages.ABOUT_ME} />*/}
        </div>
    )
}

export default App
