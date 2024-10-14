import {  Text, View } from 'react-native'
import React from 'react'
import styles from './header.styles'
import { HeaderProps } from '../../types/components'

const Header = (props:HeaderProps) => {
  const {title}=props
  return (
    <View style={styles.root}>
      <Text style={styles.title}>{title}</Text>
    </View>
  )
}

export default Header

