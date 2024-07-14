import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Redirect } from 'expo-router'

const Welcome = () => {
  return (
    <SafeAreaView className='h-full bg-gray-200 flex-1 items-center justify-center'>
        <Text>Welcome to Y-State</Text>
        {/* <Redirect href={'/home'}/> */}
        
    </SafeAreaView>
  )
}

export default Welcome