import { useLayoutEffect } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const AboutScreen = (props) => {
    const { route } = props;
    const navigation = useNavigation();
    const { name } = route?.params;

    useLayoutEffect(() => {
        navigation.setOptions({
            title: name,
        });
    }, [navigation, name]);

    return (
        <View style={styles.container}>
            <Text style={styles.text}>About {name}</Text>
            <Button
                title="Update params"
                onPress={() => navigation.setParams({ name: 'Ipsum' })}
            />
            <Button
                title="Go to Home"
                onPress={() => navigation.navigate('Home', { result: 'World' })}
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
