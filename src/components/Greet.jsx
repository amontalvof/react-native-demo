import { Text, View, StyleSheet } from 'react-native';

const Greet = () => {
    return (
        <View style={styles.container}>
            <View style={styles.darkMode}>
                <Text style={styles.darkModeText}>
                    Style inheritance{' '}
                    <Text style={styles.boldText}>in bold</Text>
                </Text>
            </View>
            <View style={[styles.box, styles.lightBlue, styles.boxShadow]}>
                <Text style={{ borderRadius: 10, backgroundColor: 'red' }}>
                    Lightblue box
                </Text>
            </View>
            <View style={[styles.box, styles.lightGreen, styles.androidShadow]}>
                <Text>Lightgreen box</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'plum',
        padding: 60,
    },
    darkMode: {
        backgroundColor: 'black',
    },
    darkModeText: {
        color: 'white',
    },
    boldText: {
        fontWeight: 'bold',
    },
    box: {
        width: 250,
        height: 250,
        paddingHorizontal: 10,
        paddingVertical: 20,
        marginVertical: 10,
        borderWidth: 2,
        borderColor: 'purple',
        borderStyle: 'solid',
        borderRadius: 10,
    },
    lightBlue: {
        backgroundColor: 'lightblue',
    },
    lightGreen: {
        backgroundColor: 'lightgreen',
    },
    boxShadow: {
        shadowColor: '#333333',
        shadowOffset: { width: 6, height: 6 },
        shadowOpacity: 0.6,
        shadowRadius: 4,
    },
    androidShadow: {
        elevation: 10,
    },
});

export default Greet;
