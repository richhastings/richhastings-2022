import React, { useContext } from 'react'
import { DarkContext } from '../DarkContext'

import styles from './Nav.module.scss'

const Nav = () => {
  const isDark = useContext(DarkContext)
  return (
    <div className={styles.Nav}>
      <p>{isDark.value ? 'Dark' : 'Light'}</p>
      <button onClick={() => isDark.set(!isDark.value)}>clicky</button>
    </div>
  )
}

export default Nav
