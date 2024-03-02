import { View, Text, SectionList } from 'react-native';
import groupedPokemonList from './grouped-data.json';

const SectionListComponent = ({ styles }) => {
    return (
        <SectionList
            sections={groupedPokemonList}
            renderItem={({ item }) => {
                return (
                    <View key={item.id} style={styles.card}>
                        <Text style={styles.cardText}>{item}</Text>
                    </View>
                );
            }}
            renderSectionHeader={({ section }) => {
                return (
                    <Text style={styles.sectionHeaderText}>{section.type}</Text>
                );
            }}
            ItemSeparatorComponent={() => <View style={{ height: 16 }} />}
            SectionSeparatorComponent={() => <View style={{ height: 16 }} />}
        />
    );
};

export default SectionListComponent;
