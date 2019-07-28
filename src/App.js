import React, {useState} from 'react'
import { createBrowserHistory } from "history"
import 'typeface-roboto'
import './App.scss'
import './Spacing.scss'
import {Background} from "./components/background/Background"
import {Navbar} from "./components/navbar/Navbar"
import {DesignName} from "./components/home/DesignName"
import Contact from './components/Contact'
import Portofolio from './components/Portofolio'
import AboutMe from './components/AboutMe'
import {pages} from "./Enum";


function App() {

    const history = createBrowserHistory()

    const navLinks = [
        {url: pages.CONTACT, label: "Contact", background: "top-active-quarter", navColor: "color-black"},
        {url: pages.PORTOFOLIO, label: "Portfolio", background: "top-active", navColor: "color-black"},
        {url: pages.ABOUT_ME, label: "About Me", background: "top-active", navColor: "color-black"},
        {url: pages.HOME, label: "Home", background: "bot-active", navColor: "color-white"}
    ]

    const [activeLink, setActiveLink] = useState(navLinks[3])
    const [opacityTransition, setOpacityTransition] = useState(true)

    history.listen( location =>  {
        setOpacityTransition(true)
        setTimeout(() => {
            setOpacityTransition(false)
        }, 2000)
    })

    return (
        <div className="index">
            <Background background={activeLink.background} />
            <Navbar history={history} links={navLinks} activeLink={activeLink} navigate={setActiveLink}/>
            <DesignName label={"cyril pluche"} isEnter={activeLink.url === pages.HOME}/>
            <Portofolio hidden={activeLink.url !== pages.PORTOFOLIO} />
            <Contact hidden={activeLink.url !== pages.CONTACT} />
            <AboutMe hidden={activeLink.url !== pages.ABOUT_ME} />
        </div>
    )
}

export default App
