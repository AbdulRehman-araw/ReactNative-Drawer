import React from 'react';
import { StyleSheet} from 'react-native';

//drawer navigation
import { NavigationContainer } from '@react-navigation/native';
// import { createDrawerNavigator} from '@react-navigation/drawer';

//screens 
// import Profile from './screens/Profile'
// import TermsConditions from './screens/TermsConditions'
// import Home from './screens/Home';
// import Contact from './screens/Contact';
import AppDrawer from './screens/AppDrawer';



// const Drawer = createDrawerNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <AppDrawer/>
      {/* <Drawer.Navigator >
      <Drawer.Screen name="Home" component={Home} 
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
      <Drawer.Screen name="Profile" component={Profile} 
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
      <Drawer.Screen name="Terms" component={TermsConditions} 
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
      <Drawer.Screen name="Contacts" component={Contact} 
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
    </Drawer.Navigator> */}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
 