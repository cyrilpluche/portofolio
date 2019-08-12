import React, {useEffect, useState} from 'react'
import {Router, Switch, Redirect} from 'react-router'
import {Route} from "react-router-dom"
import {history} from "./helpers/History"
import 'typeface-roboto'
import './style/Global.scss'
import './style/Spacing.scss'
import './style/Variables.scss'
import './style/Grid.scss'
import {Background} from "./components/background/Background"
import {Navbar} from "./components/navbar/Navbar"
import {HomePage} from "./components/home/Home.page"
import Contact from './components/contact/Contact'
import PortofolioPage from './components/portofolio/Portofolio.page'
import AboutPage from './components/about/About.page'
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

    const [isMobile, setIsMobile] = useState(window.innerWidth <= 1000)

    const handleResize = () => {
        setIsMobile(window.innerWidth <= 1000);
    }

    const navigate = link => {
        history.push('/' + link.url)
    }

    useEffect(() => {
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        }
    });

    return (
        <div id="index">
            <Navbar history={history} navigate={navigate} links={Object.values(pages)} isMobile={isMobile}/>
            <Router history={history}>
                <Switch>
                    <Route exact path="/home" component={() => <HomePage label={"cyril pluche"} />}/>
                    <Route exact path="/about" component={AboutPage}/>
                    <Route exact path="/portfolio" component={() => <PortofolioPage isMobile={isMobile}/>}/>
                    <Route exact path="/contact" component={() => <Contact isMobile={isMobile}/>}/>
                    <Route path='*' render={() => <Redirect to="/home" />}/>
                </Switch>
            </Router>
        </div>
    )
}

export default App

/*

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
        </div>

 */