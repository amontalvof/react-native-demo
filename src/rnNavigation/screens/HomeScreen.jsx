import { Text, View, StyleSheet, Button } from 'react-native';

const HomeScreen = (props) => {
    const { navigation, route } = props;
    const { result } = route?.params;
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Home {result}</Text>
            <Button
                title="Go to About"
                onPress={() =>
                    navigation.navigate('About', {
                        name: 'Lorem',
                    })
                }
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
    },
});

export default HomeScreen;
