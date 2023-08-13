import { Outlet } from "react-router-dom"
import Footer from "../compronents/footer/Footer"
import { Navbar } from "../compronents/footer/nav/Navbar"

const Main = () => {
  return (
    <>
    <Navbar/>
        <Outlet/>
        <Footer/>
    </>
  )
}

export default Main