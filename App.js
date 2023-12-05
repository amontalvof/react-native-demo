import { StyleSheet, View } from 'react-native';

export default function App() {
    return (
        // <View style={{ backgroundColor: 'plum', flex: 1 }}></View>
        <View style={styles.container}></View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'plum',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
