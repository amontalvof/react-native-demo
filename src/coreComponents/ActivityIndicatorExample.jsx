import { ActivityIndicator, View } from 'react-native';

const ActivityIndicatorExample = () => {
    return (
        <View
            style={{
                flex: 1,
                backgroundColor: 'plum',
                padding: 60,
            }}
        >
            <ActivityIndicator size="small" color="midnightblue" />
            <ActivityIndicator size="large" color="midnightblue" animating />
            <ActivityIndicator
                size="large"
                color="midnightblue"
                animating={false} // default is true and in false it hides the indicator
            />
        </View>
    );
};

export default ActivityIndicatorExample;
