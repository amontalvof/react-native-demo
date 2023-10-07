import { Button, View } from 'react-native';

const ButtonExample = () => {
    return (
        <View style={{ flex: 1, backgroundColor: 'plum', padding: 60 }}>
            <Button
                title="Press"
                color="midnightblue"
                disabled
                onPress={() => console.log('button pressed')}
            />
        </View>
    );
};

export default ButtonExample;
