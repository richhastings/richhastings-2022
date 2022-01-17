import React, { useContext } from 'react'

import styles from './Main.module.scss'

const Main = ({ children }) => {
  return <main className={styles.Main}>{children}</main>
}

export default Main
