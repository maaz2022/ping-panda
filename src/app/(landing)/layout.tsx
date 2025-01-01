import { ReactNode } from "react"
import { NavBar } from "../components/Navbar"

const Layout = ({children}: {children: ReactNode}) => {
    return (
      <>
        <NavBar/>
        {children}
      </>
    )
}
export default Layout