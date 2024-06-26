import { useState } from 'react';
import {
    StyleSheet,
    SafeAreaView,
    StatusBar,
    TextInput,
    Text,
    Switch,
    View,
} from 'react-native';

export const RnInput = () => {
    const [name, setName] = useState('');
    const [isDarkMode, setIsDarkMode] = useState(false);
    return (
        <SafeAreaView style={styles.container}>
            <TextInput
                style={styles.input}
                value={name}
                onChangeText={setName}
                placeholder="Enter your name"
                autoCorrect={false}
                autoCapitalize="none"
                // secureTextEntry
                // keyboardType="numeric"
            />
            <TextInput
                style={[styles.input, styles.multilineText]}
                placeholder="Message"
                multiline
            />
            <Text style={styles.text}>My name is {name}</Text>
            <View style={styles.switchContainer}>
                <Text style={styles.text}>Dark Mode</Text>
                <Switch
                    value={isDarkMode}
                    onValueChange={() =>
                        setIsDarkMode((prevState) => !prevState)
                    }
                    trackColor={{ false: '#767577', true: '#81b0ff' }}
                    thumbColor="#f4f3f4"
                />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: StatusBar.currentHeight,
    },
    input: {
        height: 40,
        margin: 12,
        padding: 10,
        borderWidth: 1,
    },
    text: {
        fontSize: 20,
        padding: 10,
    },
    multilineText: {
        minHeight: 100,
        textAlignVertical: 'top',
    },
    switchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
    },
});
