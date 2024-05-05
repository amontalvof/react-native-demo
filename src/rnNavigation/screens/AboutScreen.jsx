import { Text, View, StyleSheet, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const AboutScreen = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Text style={styles.text}>AboutScreen</Text>
            <Button
                title="Go to Home"
                onPress={() => navigation.navigate('Home')}
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

export default AboutScreen;
