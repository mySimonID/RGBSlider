'use client' // This is a client component

import panelStyles from './panel.module.css'

import { useEffect, useState } from 'react'

const NumberBar = ({ handleChange }) => {
  const [selectedNumber, setSelectedNumber] = useState(1)
  //
  useEffect(() => {
    handleChange(selectedNumber)
  }, [selectedNumber])
  //
  return (
    <div className={panelStyles.numberBar}>
      <button onClick={() => setSelectedNumber(1)}>1</button>
      <button onClick={() => setSelectedNumber(2)}>2</button>
      <button onClick={() => setSelectedNumber(3)}>3</button>
      <button onClick={() => setSelectedNumber(4)}>4</button>
    </div>
  )
}

export default NumberBar
