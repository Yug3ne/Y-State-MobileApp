import FontAwesome from '@expo/vector-icons/FontAwesome'
import React from 'react'
import { Tabs } from 'expo-router'

const TabsLayout = () => {
  return (
    <Tabs >
        <Tabs.Screen
        name='home'
        options={{
            title:'Home',
            tabBarIcon: ({ color }) => <FontAwesome size={24} name="home" color={color} />,
            headerShown: false,
            headerTitle: 'Home'
        }} 
        />
         <Tabs.Screen
        name='inbox'
        options={{
            title:'Inbox',
            tabBarIcon: ({ color }) => <FontAwesome size={24} name="inbox" color={color} />,
            // headerShown: false,
            headerTitle: 'Inbox'
        }} 
        />
        <Tabs.Screen
        name='favourite'
        options={{
            title:'Favourite',
            tabBarIcon: ({ color }) => <FontAwesome size={24} name="heart" color={color} />,
            // headerShown: false,
            headerTitle: 'Favourite'
        }} 
        />
        <Tabs.Screen
        name='settings'
        options={{
            title:'Settings',
            tabBarIcon: ({ color }) => <FontAwesome size={24} name="cog" color={color} />,
            // headerShown: false,
            headerTitle: 'Settings'
        }} 
        />
    </Tabs>
  )
}

export default TabsLayout