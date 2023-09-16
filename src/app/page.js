'use client' // This is a client component
import styles from './page.module.css'
import panelStyles from '../Views/panel.module.css'

import NumberBar from '@/Views/NumberBar'
import RGBContainer from '@/Views/RGBContainer'

import { useEffect, useState } from 'react'

export default function Home () {
  //
  const [numPanels, setNumPanels] = useState(1)
  const [containers, setContainers] = useState(undefined)
  //
  const handleNumberChange = number => {
    setNumPanels(number)
  }
  //
  useEffect(() => {
    const newContainers = []
    for (var i = 0; i < numPanels; i++) {
      newContainers.push(
        <div className={panelStyles.rgbContainer}>
          <RGBContainer />
        </div>
      )
    }
    setContainers(newContainers)
  }, [numPanels])
  //
  return (
    <main className={styles.main}>
      {/* <NumberBar handleChange={handleNumberChange} /> */}

      <div className={styles.rgbPanelContainer}>{containers}</div>
    </main>
  )
}
