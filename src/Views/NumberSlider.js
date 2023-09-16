'use client' // This is a client component

import panelStyles from './panel.module.css'

import { useState } from 'react'

const NumberSlider = ({ title, onChange }) => {
  const [number, setNumber] = useState(128)

  const changeValue = ev => {
    setNumber(ev.target.value)
    onChange(ev.target.value)
  }
  return (
    <div className={panelStyles.container}>
      <div className={panelStyles.title}>
        <label>{title}</label>
      </div>
      <div className={panelStyles.numberInner}>
        <div className={panelStyles.number}>
          <label>{number}</label>
        </div>
        <div className={panelStyles.sliderPanel}>
        <input
          className={panelStyles.slider}
          type='range'
          orient='vertical'
          value={number}
          onChange={ev => changeValue(ev)}
          min='0'
          max='255'
        />
        </div>
      </div>
    </div>
  )
}

export default NumberSlider
