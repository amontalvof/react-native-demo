import { Text, View } from 'react-native';

const TextExample = () => {
    return (
        <View style={{ flex: 1, backgroundColor: 'plum', padding: 60 }}>
            <Text>
                <Text style={{ color: 'white' }}>Hello</Text> world!
            </Text>
        </View>
    );
};

export default TextExample;
