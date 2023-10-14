import { Text, View, StyleSheet } from 'react-native';

const Greet = () => {
    return (
        <View style={styles.container}>
            <View style={[styles.box, styles.lightBlue]}>
                <Text style={{ borderRadius: 10, backgroundColor: 'red' }}>
                    Lightblue box
                </Text>
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
        width: '25%',
        height: '25%',
        // padding: 10,
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
});

export default Greet;
