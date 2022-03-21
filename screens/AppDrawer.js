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
    />} initialRouteName='Profile'>
        <Drawer.Screen name='Home' component={Home} 
        options={{
            drawerActiveTintColor:'#FFFFF0',
            drawerInactiveTintColor:'#C4B454',
            drawerActiveBackgroundColor:'#C4B454',
            drawerInactiveBackgroundColor:'#FFFFF0',
           headerStyle: {
             backgroundColor: '#C4B454',
           },
           headerTintColor: '#FFFFF0',
           headerTitleStyle: {
             fontWeight: 'bold',
             color: '#FFFFF0'
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
                backgroundColor: '#C4B454',
              },
              headerTintColor: '#FFFFF0',
              headerTitleStyle: {
                fontWeight: 'bold',
                color: '#FFFFF0'
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
                backgroundColor: '#C4B454',
              },
              headerTintColor: '#FFFFF0',
              headerTitleStyle: {
                fontWeight: 'bold',
                color: '#FFFFF0'
              },
         }}
        />
        <Drawer.Screen name='Terms & Conditions' component={TermsConditions}
         options={{
            drawerActiveTintColor:'#FFFFF0',
            drawerInactiveTintColor:'#C4B454',
            drawerActiveBackgroundColor:'#C4B454',
            drawerInactiveBackgroundColor:'#FFFFF0',
            headerStyle: {
                backgroundColor: '#C4B454',
              },
              headerTintColor: '#FFFFF0',
              headerTitleStyle: {
                fontWeight: 'bold',
                color: '#FFFFF0'
              },
         }}
        />
    </Drawer.Navigator>
  )
}

export default AppDrawer

const styles = StyleSheet.create({})