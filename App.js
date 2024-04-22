import { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    Button,
    StyleSheet,
    Image,
    KeyboardAvoidingView,
} from 'react-native';

export default function App() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});

    const validateForm = () => {
        let internalErrors = {};
        if (!username) {
            internalErrors.username = 'Username is required';
        }
        if (!password) {
            internalErrors.password = 'Password is required';
        }
        return Object.keys(internalErrors).length === 0;
    };
    return (
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
            <View style={styles.form}>
                <Image
                    source={require('./assets/adaptive-icon.png')}
                    style={styles.image}
                />
                <Text style={styles.label}>Username</Text>
                <TextInput
                    placeholder="Enter your username"
                    style={styles.input}
                    value={username}
                    onChange={setUsername}
                />
                {errors.username && (
                    <Text style={styles.errorText}>{errors.username}</Text>
                )}
                <Text style={styles.label}>Password</Text>
                <TextInput
                    placeholder="Enter your password"
                    style={styles.input}
                    secureTextEntry
                    value={password}
                    onChange={setPassword}
                />
                {errors.password && (
                    <Text style={styles.errorText}>{errors.password}</Text>
                )}
                <Button title="Login" onPress={() => {}} />
            </View>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 20,
        backgroundColor: '#f5f5f5',
    },
    form: {
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    label: {
        fontSize: 16,
        marginBottom: 5,
        fontWeight: 'bold',
    },
    input: {
        height: 40,
        borderColor: '#ddd',
        borderWidth: 1,
        marginBottom: 15,
        padding: 10,
        borderRadius: 5,
    },
    image: {
        width: 200,
        height: 400,
        alignSelf: 'center',
        marginBottom: 50,
    },
    errorText: {
        color: 'red',
        marginBottom: 10,
    },
});
