import { Text, View, StyleSheet } from 'react-native';

const Greet = ({ name }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Hello {name}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'plum',
        padding: 60,
    },
    title: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
    },
});

export default Greet;
