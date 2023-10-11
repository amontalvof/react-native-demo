import { StatusBar, View } from 'react-native';

const StatusBarExample = () => {
    return (
        <View
            style={{
                flex: 1,
                backgroundColor: 'plum',
                padding: 60,
            }}
        >
            <StatusBar barStyle="light-content" hidden />
        </View>
    );
};

export default StatusBarExample;
