import React, { useContext, useState, useEffect } from 'react'
import exportedColors from '../../../styles/_exported-colors.module.scss'
import { string } from 'prop-types'
import { DarkContext } from '../DarkContext'

const CSSVariables = () => {
  const darkContextData = useContext(DarkContext)
  const [backgroundColor, setBackgroundColor] = useState(null)
  const [foregroundColor, setForegroundColor] = useState(null)

  useEffect(() => {
    const isDark = darkContextData.value === 'dark'
    setBackgroundColor(darkContextData.value)
    setForegroundColor(isDark ? 'light' : 'dark')
  }, [darkContextData])

  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
              :root{
                --color-background: ${exportedColors[backgroundColor]};
                --color-foreground: ${exportedColors[foregroundColor]};
              }
            `,
        }}
      />
    </>
  )
}

CSSVariables.propTypes = {
  mode: string,
}

export default CSSVariables
