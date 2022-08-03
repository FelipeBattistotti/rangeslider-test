import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import {
  StyleSheet,
  View
} from 'react-native'
import { returnsTimeInString } from './src/utils/time'

export default function App() {

  /**
   * States
   */
  const [fromValue, setFromValue] = useState(0)
  const [toValue, setToValue] = useState(1439)
  const [fromValueStr, setFromValueStr] = useState('00:00')
  const [toValueStr, setToValueStr] = useState('23:59')

  /**
   * --- Functions
   */

  /**
   * Set FROM Hour Values
   * @param value number - from RangeSlider
   */
  const setFromHourValues = (value: number) => {
    setFromValue(value)
    setFromValueStr(returnsTimeInString(value))
  }

  /**
   * Set TO Hour Values
   * @param value number - from RangeSlider
   */
  const setToHourValues = (value: number) => {
    setToValue(value)
    setToValueStr(returnsTimeInString(value))
  }

  /**
   * JSX
   */
  return (
    <>
      <StatusBar style="auto" />
      <View style={styles.container0}>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container0: {
    flex: 1
  }
})
