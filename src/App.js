import React, {useState} from 'react'
import 'typeface-roboto'
import './App.scss'
import './Spacing.scss'
import Portofolio from './components/Portofolio'
import {Background} from "./components/background/Background"
import {Navbar} from "./components/navbar/Navbar"
import {DesignName} from "./components/home/DesignName"
import Contact from './components/Contact'
import { createBrowserHistory } from "history"


function App() {

    const [page, setPage] = useState("home")
    const [opacityTransition, setOpacityTransition] = useState(true)
    const history = createBrowserHistory()
    const pages = ["contact", "portofolio", "home"]

    history.listen( location =>  {
        console.log(opacityTransition)
        setOpacityTransition(true)
        setTimeout(() => {
            setOpacityTransition(false)
            console.log(opacityTransition)
        }, 2000)
    })

    return (
        <div className="index">
            <Background page={page} />
            <Navbar history={history} pages={pages} page={page} navigate={setPage}/>
            <DesignName label={"cyril pluche"} isEnter={page === "home"}/>
            <Portofolio hidden={page !== "portofolio"} />
            <Contact hidden={page !== "contact"} />
        </div>
    )
}

export default App
