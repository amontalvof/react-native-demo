import { StyleSheet, Text, View, Platform, Image } from 'react-native';

const PokemonCard = (props) => {
    const { name, image, type, hp, moves, weaknesses } = props;
    return (
        <View style={styles.card}>
            <View style={styles.nameContainer}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.hp}>❤️{hp}</Text>
            </View>
            <Image
                source={image}
                accessibilityLabel={`${name} pokemon`}
                style={styles.image}
                resizeMode="contain"
            />
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
    nameContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 32,
    },
    name: {
        fontSize: 30,
        fontWeight: 'bold',
    },
    hp: {
        fontSize: 22,
    },
    image: {
        width: '100%',
        height: 200,
        marginBottom: 16,
    },
});

export default PokemonCard;
