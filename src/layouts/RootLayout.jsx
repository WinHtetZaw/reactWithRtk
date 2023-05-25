import { Outlet } from "react-router-dom"

const RootLayout = () => {
  return (
    <div>
        <nav>
            navbar
        </nav>
        <main>
            <Outlet/>
        </main>
    </div>
  )
}

export default RootLayout