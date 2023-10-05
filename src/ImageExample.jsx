import { Image, ImageBackground, Text, View } from 'react-native';
import logoImg from '../assets/adaptive-icon.png';

const ImageExample = () => {
    return (
        <View style={{ flex: 1, backgroundColor: 'plum', padding: 60 }}>
            {/* <Image source={logoImg} style={{ width: 300, height: 300 }} /> */}
            <Image
                source={{ uri: 'https://picsum.photos/300' }}
                style={{ width: 300, height: 300 }}
            />
            <ImageBackground source={logoImg} style={{ flex: 1 }}>
                <Text>IMAGE TEXT</Text>
            </ImageBackground>
        </View>
    );
};

export default ImageExample;
