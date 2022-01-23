import colorMap from './_exported-colors.module.scss'

const modeToColor = (mode) => {
  return colorMap[mode]
}

export default modeToColor
