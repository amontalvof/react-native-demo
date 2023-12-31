import { View } from 'react-native';

const ViewExample = () => {
    return (
        <View style={{ flex: 1, backgroundColor: 'plum' }}>
            <View
                style={{ width: 200, height: 200, backgroundColor: 'gold' }}
            />
            <View
                style={{
                    width: 200,
                    height: 200,
                    backgroundColor: 'lightgreen',
                }}
            />
            <View
                style={{
                    width: 200,
                    height: 200,
                    backgroundColor: 'lightblue',
                }}
            />
        </View>
    );
};

export default ViewExample;
