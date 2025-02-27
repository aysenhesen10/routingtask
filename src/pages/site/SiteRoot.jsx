import React from 'react'
import { Outlet } from 'react-router'
import Header from '../../layout/site/Header/Header'
import Footer from '../../layout/site/Footer/Footer'

const SiteRoot = () => {
  return (
  <React.Fragment>
    <Header/>
    <Outlet/>
    <Footer/>
  </React.Fragment>
  )
}

export default SiteRoot;