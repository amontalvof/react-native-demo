import { Image, Pressable, Text, View } from 'react-native';
import logoImg from '../assets/adaptive-icon.png';

const PressableExample = () => {
    return (
        <View
            style={{
                flex: 1,
                backgroundColor: 'plum',
                paddingTop: 200,
                paddingLeft: 60,
            }}
        >
            <Pressable
                onPressIn={() => console.log('onPressIn')}
                onPress={() => console.log('onPress')}
                onLongPress={() => console.log('onLongPress')}
                onPressOut={() => console.log('onPressOut')}
            >
                <Image source={logoImg} style={{ width: 300, height: 300 }} />
            </Pressable>
        </View>
    );
};

export default PressableExample;
