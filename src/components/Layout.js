import React from "react"

import Header from "../components/Header"
import Footer from "../components/Footer"
import styles from "./Layout.module.scss"

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Header />
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout
