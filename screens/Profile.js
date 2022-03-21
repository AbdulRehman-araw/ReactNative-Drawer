import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const Profile = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', position: 'relative', backgroundColor: '#FFFFF0' }}>
      {/* <View style={{flex:1, backgroundColor:'#FFFFF0', maxheight: 10, width: "100%",}}>
        </View> */}

      <Image source={require('../assets/avatar.png')} style={{ height: 150, width: 150, borderRadius: 100, position: 'absolute', top: '5%', zIndex: 1 }} />

      <View style={{ backgroundColor: '#C4B454', height: '80%', width: '100%', bottom: 0, position: 'absolute', borderTopLeftRadius:30, borderTopRightRadius:30, alignContent: 'flex-start' }}>
        <View style={{alignSelf:'center', borderRadius:20,paddingVertical:10, marginTop: 110 ,}}>
          <Text style={{color: '#FFFFF0',  fontSize:20}}> Email: abc@gmail.com</Text>
        </View>
        <View style={{alignSelf:'center',  borderRadius:20,paddingVertical:10, }}>
          <Text style={{color: '#FFFFF0',  fontSize:20}}> Name: user name</Text>
        </View>
        <View style={{alignSelf:'center', borderRadius:20,paddingVertical:10,}}>
          <Text style={{color: '#FFFFF0', fontSize:20}}> Ph.No: 0300-1234567</Text>
        </View>
      </View>

    </View>
  )
}

export default Profile

const styles = StyleSheet.create({})