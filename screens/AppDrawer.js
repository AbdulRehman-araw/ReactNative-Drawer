import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createDrawerNavigator} from '@react-navigation/drawer';


import CustomDrawer from '../components/CustomDrawer';
import Home from './Home';
import Contact from './Contact';
import Profile from './Profile';
import TermsConditions from './TermsConditions';


const Drawer = createDrawerNavigator();




const AppDrawer = () => {
  return (
    <Drawer.Navigator drawerContent={(props) => <CustomDrawer {...props}
    />}>
        <Drawer.Screen name='Home' component={Home} 
        options={{
            drawerType:'permanent',
            drawerActiveTintColor:'#FFFFF0',
            drawerInactiveTintColor:'#C4B454',
            drawerActiveBackgroundColor:'#C4B454',
            drawerInactiveBackgroundColor:'#FFFFF0',
           headerStyle: {
             backgroundColor: '#FFFFF0',
           },
           headerTintColor: '#C4B454',
           headerTitleStyle: {
             fontWeight: 'bold',
             color: '#C4B454'
           },
         }}
        />
        <Drawer.Screen name='Profile' component={Profile}
         options={{
            drawerActiveTintColor:'#FFFFF0',
            drawerInactiveTintColor:'#C4B454',
            drawerActiveBackgroundColor:'#C4B454',
            drawerInactiveBackgroundColor:'#FFFFF0',
           headerStyle: {
             backgroundColor: '#FFFFF0',
           },
           headerTintColor: '#C4B454',
           headerTitleStyle: {
             fontWeight: 'bold',
             color: '#C4B454'
           },
         }}
        />
        <Drawer.Screen name='Contact' component={Contact}
         options={{
            drawerActiveTintColor:'#FFFFF0',
            drawerInactiveTintColor:'#C4B454',
            drawerActiveBackgroundColor:'#C4B454',
            drawerInactiveBackgroundColor:'#FFFFF0',
           headerStyle: {
             backgroundColor: '#FFFFF0',
           },
           headerTintColor: '#C4B454',
           headerTitleStyle: {
             fontWeight: 'bold',
             color: '#C4B454'
           },
         }}
        />
        <Drawer.Screen name='Terms' component={TermsConditions}
         options={{
            drawerActiveTintColor:'#FFFFF0',
            drawerInactiveTintColor:'#C4B454',
            drawerActiveBackgroundColor:'#C4B454',
            drawerInactiveBackgroundColor:'#FFFFF0',
           headerStyle: {
             backgroundColor: '#FFFFF0',
           },
           headerTintColor: '#C4B454',
           headerTitleStyle: {
             fontWeight: 'bold',
             color: '#C4B454'
           },
         }}
        />
    </Drawer.Navigator>
  )
}

export default AppDrawer

const styles = StyleSheet.create({})