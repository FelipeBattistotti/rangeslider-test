import React from 'react'
import { StatusBar } from 'expo-status-bar'
import {
  StyleSheet,
  View
} from 'react-native'

export default function App() {

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
