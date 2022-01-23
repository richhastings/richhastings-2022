import React from 'react'
import { node, object } from 'prop-types'

const DarkContext = React.createContext()

const DarkContextProvider = ({ children, data }) => (
  <DarkContext.Provider value={{ value: data.value, set: data.set }}>
    {children}
  </DarkContext.Provider>
)

DarkContextProvider.propTypes = {
  children: node.isRequired,
  data: object,
}

export { DarkContext, DarkContextProvider }
