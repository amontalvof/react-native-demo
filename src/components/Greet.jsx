import { Text, View } from 'react-native';

const Greet = ({ name }) => {
    return (
        <View
            style={{
                flex: 1,
                backgroundColor: 'plum',
                padding: 60,
            }}
        >
            <Text>Hello {name}</Text>
        </View>
    );
};

export default Greet;
