import { Outlet } from 'react-router-dom'
import { Fragment } from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

export default function Public() {
  return (
    <Fragment>
        <NavBar />
        <Outlet />
        <Footer />

    </Fragment>
  )
}
