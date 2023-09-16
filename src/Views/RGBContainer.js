'use client' // This is a client component

import panelStyles from './panel.module.css'

import { useEffect, useState } from 'react'
import NumberSlider from '@/Views/NumberSlider'

const RGBContainer = () => {
  const [red, setRed] = useState(128)
  const [green, setGreen] = useState(128)
  const [blue, setBlue] = useState(128)

  const [panelColor, setPanelColor] = useState({
    backgroundColor: `rgba(${red}, ${green}, ${blue},1 )`
  })
  //
  //
  const onChangeRed = newValue => {
    setRed(newValue)
  }
  const onChangeGreen = newValue => {
    setGreen(newValue)
  }
  const onChangeBlue = newValue => {
    setBlue(newValue)
  }
  //
  useEffect(() => {
    setPanelColor({ backgroundColor: `rgba(${red}, ${green}, ${blue} )` })
  }, [red, green, blue])
  //
  return (
    <div className={panelStyles.rgbPanel}>
      <div className={panelStyles.colourPanelContainer}>
        <div className={panelStyles.colourPanel} style={panelColor} />
      </div>
      <div className={panelStyles.rgbPanelNumberRow}>
        <NumberSlider title='Red' onChange={onChangeRed} />
        <NumberSlider title='Green' onChange={onChangeGreen} />
        <NumberSlider title='Blue' onChange={onChangeBlue} />
      </div>
    </div>
  )
}

export default RGBContainer
