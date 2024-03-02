import { View, Text, FlatList } from 'react-native';
import pokemonList from './data.json';

const FlatListComponent = ({ styles }) => {
    return (
        <FlatList
            data={pokemonList}
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
    );
};

export default FlatListComponent;
