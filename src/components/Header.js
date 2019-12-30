import React from "react"
import { Link } from "gatsby"

import styles from "./Header.module.scss"

const Header = () => {
  return (
    <header className={styles.header}>
      <h1>
        <Link to="/" className={styles.title}>
          Bootcamp
        </Link>
      </h1>
      <nav>
        <ul className={styles.navList}>
          <li>
            <Link to="/" className={styles.navItem}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/blog" className={styles.navItem}>
              Blog
            </Link>
          </li>
          <li>
            <Link to="/about" className={styles.navItem}>
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" className={styles.navItem}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
