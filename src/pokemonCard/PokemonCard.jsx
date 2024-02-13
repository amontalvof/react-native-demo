import { StyleSheet, Text, View, Platform, Image } from 'react-native';

const PokemonCard = (props) => {
    const { name, image, type, hp, moves, weaknesses } = props;
    return (
        <View style={styles.card}>
            <View>
                <Text>{name}</Text>
                <Text>{hp}</Text>
            </View>
            {/* <Image source={image} accessibilityLabel={`${name} pokemon`} /> */}
            <View>
                <Text>{type}</Text>
            </View>
            <View>
                <Text>{moves.join(', ')}</Text>
            </View>
            <View>
                <Text>{weaknesses.join(', ')}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: 'white',
        borderRadius: 16,
        borderWidth: 2,
        padding: 16,
        margin: 16,
        ...Platform.select({
            ios: {
                shadowOffset: { width: 2, height: 2 },
                shadowColor: '#333',
                shadowOpacity: 0.3,
                shadowRadius: 4,
            },
            android: {
                elevation: 5,
            },
        }),
    },
});

export default PokemonCard;
