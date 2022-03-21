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
 