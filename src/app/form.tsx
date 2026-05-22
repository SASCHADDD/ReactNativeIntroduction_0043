import React, { useState } from "react";
import { Text,Alert, TextInput, View,TouchableOpacity, StyleSheet} from "react-native";

const form = () => {
    const [nama, setNama] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = () => {
        if (!nama || !username || !password) {
            Alert.alert('Error', 'Semua Harus Di isi')
            return
        }
        Alert.alert('Sukses', `Data Terkirim:\nNama: ${nama}\nUsername: ${username}\nPassword: ${password}`)
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Ini Halaman Form</Text>

            <View style={styles.inputGroup}>
                <Text style={styles.label}>Nama:</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Masukkan Nama"
                    value={nama}
                    onChangeText={(text) => setNama(text)}
                    autoCapitalize="none"
                />
            </View>
            <View style = {styles.inputGroup}>
                <Text style={styles.label}>Username:</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Masukkan Username"
                    value={username}
                    onChangeText={(text) => setUsername(text)}
                    autoCapitalize="none"
                />
            </View>
            <View style = {styles.inputGroup}>
                <Text style={styles.label}>Password:</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Masukkan Password"
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                    secureTextEntry={true}
                    autoCapitalize="none"
                />
            </View>

            <TouchableOpacity style= {styles.button} onPress={handleSubmit} activeOpacity={0.8}>
                <Text style={styles.buttonText}>Kirim</Text>
            </TouchableOpacity>

        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding:20,
        justifyContent: 'center',
        backgroundColor: '#f0f0f0',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    inputGroup: {
        marginBottom: 20,
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        borderRadius: 5,
    },
    button: {
        backgroundColor: '#007AFF',
        padding: 15,
        borderRadius: 5,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
})
export default form