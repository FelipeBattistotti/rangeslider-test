import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import {
  StyleSheet,
  View,
  Text
} from 'react-native'
import { returnsTimeInString } from './src/utils/time'

import RangeSlider from './src/RangeSlider'

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
        <View style={styles.containerRangeSlider1}>
          <RangeSlider
            min={0}
            max={1439}
            initialFromValue={0}
            styleSize={18}
            showValueLabels //
            showRangeLabels={false}
            knobSize={44}
            fromKnobColor='#224488'
            toKnobColor='#224488'
            inRangeBarColor='#2255BB'
            valueLabelsBackgroundColor='#224488'
            fromValueOnChange={value => setFromHourValues(value)}
            toValueOnChange={value => setToHourValues(value)}
            labelFormatter={value => returnsTimeInString(value)}
          />
        </View>
        <View style={styles.containerRangeSlider2}>
          <Text style={styles.textRangeSlider}>
            {fromValueStr}
          </Text>
          <Text style={styles.textRangeSliderBottom}>
            Horário
          </Text>
          <Text style={[styles.textRangeSlider, styles.textRangeSliderRight]}>
            {toValueStr}
          </Text>
        </View>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container0: {
    flex: 1
  },
  containerRangeSlider1: {
    marginTop: 200,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly'
  },
  containerRangeSlider2: {
    marginTop: -20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  textRangeSlider: {
    marginRight: '12%',
    fontSize: 16,
    color: '#001122'
  },
  textRangeSliderRight: {
    marginRight: '0%',
    marginLeft: '12%'
  },
  textRangeSliderBottom: {
    fontSize: 14,
    color: '#A7BDC9',
    textAlign: 'center'
  }
})
