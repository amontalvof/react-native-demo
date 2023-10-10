import { Alert, Button, View } from 'react-native';

const AlertExample = () => {
    const text = 'Invalid data!';
    return (
        <View
            style={{
                flex: 1,
                backgroundColor: 'plum',
                padding: 60,
            }}
        >
            <Button title="Alert 1" onPress={() => Alert.alert(text)} />
            <Button
                title="Alert 2"
                onPress={() => Alert.alert(text, 'DOB incorrect')}
            />
            <Button
                title="Alert 3"
                onPress={() =>
                    Alert.alert(text, 'DOB incorrect', [
                        {
                            text: 'Cancel',
                            onPress: () => console.log('Cancel Pressed'),
                        },
                        {
                            text: 'OK',
                            onPress: () => console.log('OK Pressed'),
                        },
                    ])
                }
            />
        </View>
    );
};

export default AlertExample;
