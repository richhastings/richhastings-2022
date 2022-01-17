import React from 'react'
import { node, bool } from 'prop-types'

const DarkContext = React.createContext()

const DarkContextProvider = ({ children, isDark }) => (
  <DarkContext.Provider value={{ value: isDark.value, set: isDark.set }}>
    {children}
  </DarkContext.Provider>
)

DarkContextProvider.propTypes = {
  children: node.isRequired,
  isDark: bool,
}

export { DarkContext, DarkContextProvider }
