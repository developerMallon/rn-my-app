import React from 'react'
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native';

export default function Products() {

    const navigation = useNavigation();

    return (
        <View style={styles.container}>

            <Text>Products</Text>

            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Home")}>
                <Text>Go Home</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Login")}>
                <Text>Go Login</Text>
            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // justifyContent: 'center',
        // paddingHorizontal: 10,
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 10,
        marginVertical: 2,
    },
})