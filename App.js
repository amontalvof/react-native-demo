import { useEffect, useState } from 'react';
import {
    FlatList,
    SafeAreaView,
    StatusBar,
    StyleSheet,
    Text,
    View,
} from 'react-native';

export default function App() {
    const [postList, setPostList] = useState([]);
    const fetchData = async (limit = 10) => {
        try {
            const response = await fetch(
                `https://jsonplaceholder.typicode.com/posts?_limit=${limit}`
            );
            const data = await response.json();
            setPostList(data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchData(3);
        return () => {};
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.listContainer}>
                <FlatList
                    data={postList}
                    renderItem={({ item }) => {
                        return (
                            <View style={styles.card}>
                                <Text style={styles.titleText}>
                                    {item.title}
                                </Text>
                                <Text styles={styles.bodyText}>
                                    {item.body}
                                </Text>
                            </View>
                        );
                    }}
                    ItemSeparatorComponent={() => {
                        return <View style={{ height: 16 }} />;
                    }}
                    ListEmptyComponent={() => {
                        return (
                            <View style={styles.card}>
                                <Text>No data found</Text>
                            </View>
                        );
                    }}
                    ListHeaderComponent={() => {
                        return <Text style={styles.headerText}>Post List</Text>;
                    }}
                    ListFooterComponent={() => {
                        return (
                            <Text style={styles.footerText}>
                                Total: {postList.length}
                            </Text>
                        );
                    }}
                />
            </View>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: StatusBar.currentHeight,
    },
    listContainer: {
        flex: 1,
        paddingHorizontal: 16,
    },
    card: {
        backgroundColor: '#fff',
        padding: 16,
        borderRadius: 8,
        borderWidth: 1,
    },
    titleText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    bodyText: {
        fontSize: 16,
        color: '#666',
    },
    headerText: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 16,
    },
    footerText: {
        fontSize: 16,
        color: '#333',
        textAlign: 'center',
        marginTop: 16,
    },
});
