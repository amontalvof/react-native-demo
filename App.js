import {
    StyleSheet,
    View,
    Text,
    ScrollView,
    SafeAreaView,
    StatusBar,
    FlatList,
} from 'react-native';
import pokemonList from './src/rnList/data.json';

export default function App() {
    return (
        <SafeAreaView style={styles.container}>
            {/* <ScrollView style={styles.scrollView}>
                {pokemonList.map((pokemon) => {
                    console.log(pokemon.id);
                    return (
                        <View key={pokemon.id} style={styles.card}>
                            <Text style={styles.cardText}>{pokemon.type}</Text>
                            <Text style={styles.cardText}>{pokemon.name}</Text>
                        </View>
                    );
                })}
            </ScrollView> */}
            <View style={styles.scrollView}>
                <FlatList
                    data={pokemonList}
                    renderItem={({ item }) => {
                        console.log(item.id);
                        return (
                            <View key={item.id} style={styles.card}>
                                <Text style={styles.cardText}>{item.type}</Text>
                                <Text style={styles.cardText}>{item.name}</Text>
                            </View>
                        );
                    }}
                    keyExtractor={(item) => item.id.toString()}
                    // horizontal
                />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        paddingTop: StatusBar.currentHeight,
    },
    scrollView: {
        paddingHorizontal: 16,
    },
    card: {
        backgroundColor: 'white',
        padding: 16,
        borderRadius: 8,
        borderWidth: 1,
        margin: 16,
    },
    cardText: {
        fontSize: 30,
    },
});
