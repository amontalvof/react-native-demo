import { StyleSheet, View, SafeAreaView, StatusBar } from 'react-native';
import FlatListComponent from './FlatListComponent';
import SectionListComponent from './SectionListComponent';

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
                {/* <FlatListComponent styles={styles} /> */}
                <SectionListComponent styles={styles} />
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
    sectionHeaderText: {
        fontSize: 24,
        fontWeight: 'bold',
        backgroundColor: '#f5f5f5',
        padding: 8,
    },
});
