import { Text, View, StyleSheet } from 'react-native';

const Greet = () => {
    return (
        <View style={styles.container}>
            <View style={[styles.box, styles.lightBlue]}>
                <Text>Lightblue box</Text>
            </View>
            <View style={[styles.box, styles.lightGreen]}>
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
    box: {
        width: 100,
        height: 100,
        padding: 10,
    },
    lightBlue: {
        backgroundColor: 'lightblue',
    },
    lightGreen: {
        backgroundColor: 'lightgreen',
    },
});

export default Greet;
