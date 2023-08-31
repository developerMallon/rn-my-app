import React from 'react'
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native';

export default function Home() {

    const navigation = useNavigation();

    return (
        <View style={styles.container}>

            <Text style={styles.title}>Home</Text>

            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Products")}>
                <Text style={styles.buttonText}>Go Products</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Login")}>
                <Text style={styles.buttonText}>Go Login</Text>
            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        marginBottom: 14,
        fontSize: 20,
    },
    input: {
        width: '90%',
        height: 45,
        backgroundColor: '#A7A7A7',
        borderRadius: 4,
        marginBottom: 14,
        padding: 8,
    },
    button: {
        width: '90%',
        height: 45,
        backgroundColor: '#B0060E',
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 14
    },
    buttonText: {
        fontSize: 20,
        color: '#FFF'
    }
})