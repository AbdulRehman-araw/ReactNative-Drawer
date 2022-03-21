import React from 'react'
import { StyleSheet, Image, View, Text } from 'react-native'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import { TouchableOpacity } from 'react-native-gesture-handler'



const CustomDrawer = (props) => {
    return (
        <>
            <View style={{ backgroundColor: '#C4B454', minHeight: 170, marginBottom: 20, justifyContent: 'center', borderBottomLeftRadius: 20, borderBottomRightRadius: 20 }}>
                <Image source={require('../assets/avatar.png')} style={{ height: 80, width: 80, borderRadius: 100, marginLeft: 20 }} />
                <Text style={{ fontSize: 20, fontWeight: '400', paddingLeft: 30 }}>User </Text>
                <Text style={{ fontSize: 12, fontWeight: '500', paddingLeft: 30 }}>abc@gmail.com</Text>
            </View>

            <DrawerContentScrollView {...props}>
                <View style={{ flex: 1 }}>
                    <DrawerItemList  {...props} />
                </View>
            </DrawerContentScrollView>

            <View style={{ fontSize: 20, fontWeight: 'bold', paddingVertical: 20, paddingHorizontal: 15, backgroundColor: '#C4B454', borderTopLeftRadius: 20, borderTopRightRadius: 20 }}>
                <TouchableOpacity>
                    <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#FFFFF0' }}> Log Out</Text>
                </TouchableOpacity>
            </View>
        </>
    )
}

export default CustomDrawer

const styles = StyleSheet.create({})