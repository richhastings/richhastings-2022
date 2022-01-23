import React, { useContext, useEffect, useState } from 'react'
import { DarkContext } from '../DarkContext'

import styles from './Nav.module.scss'
import LightModeSVG from '../../asset/icon/light-mode.svg'
import DarkModeSVG from '../../asset/icon/dark-mode.svg'

const Nav = () => {
  const darkContextData = useContext(DarkContext)
  const [mode, setMode] = useState(null)

  const toggleMode = () => {
    const isDark = mode === 'dark'
    darkContextData.set(isDark ? 'light' : 'dark')
  }

  useEffect(() => {
    setMode(darkContextData.value)
  }, [darkContextData.value])

  const SVGs = {
    light: <DarkModeSVG />,
    dark: <LightModeSVG />,
  }

  return (
    <div className={styles.Nav}>
      <button onClick={toggleMode}>{SVGs[mode]}</button>
    </div>
  )
}

export default Nav
