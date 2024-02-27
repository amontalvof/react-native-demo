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
                    data={[]}
                    renderItem={({ item }) => {
                        return (
                            <View key={item.id} style={styles.card}>
                                <Text style={styles.cardText}>{item.type}</Text>
                                <Text style={styles.cardText}>{item.name}</Text>
                            </View>
                        );
                    }}
                    keyExtractor={(item) => item.id.toString()}
                    ItemSeparatorComponent={<View style={{ height: 16 }} />}
                    ListEmptyComponent={
                        <Text style={styles.emptyText}>No items found</Text>
                    }
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
        // marginBottom: 16,
    },
    cardText: {
        fontSize: 30,
    },
    emptyText: {
        fontSize: 20,
        color: '#000',
        textAlign: 'center',
        marginTop: 20,
    },
});
