import { useEffect, useState } from 'react';
import {
    FlatList,
    SafeAreaView,
    StatusBar,
    StyleSheet,
    Text,
    View,
    ActivityIndicator,
    TextInput,
    Button,
} from 'react-native';

export default function App() {
    const [postList, setPostList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [refreshing, setRefreshing] = useState(false);
    const [postBody, setPostBody] = useState('');
    const [postTitle, setPostTitle] = useState('');
    const [isPosting, setIsPosting] = useState(false);

    const fetchData = async (limit = 10) => {
        try {
            const response = await fetch(
                `https://jsonplaceholder.typicode.com/posts?_limit=${limit}`
            );
            const data = await response.json();
            setPostList(data);
            setIsLoading(false);
        } catch (error) {
            console.error(error);
        }
    };

    const handleRefresh = () => {
        setRefreshing(true);
        fetchData(5);
        setRefreshing(false);
    };

    const addPost = async () => {
        setIsPosting(true);
        const response = await fetch(
            'https://jsonplaceholder.typicode.com/posts',
            {
                method: 'POST',
                body: JSON.stringify({
                    title: postTitle,
                    body: postBody,
                    userId: 1,
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            }
        );
        const newPost = await response.json();
        setPostList([newPost, ...postList]);
        setPostTitle('');
        setPostBody('');
        setIsPosting(false);
    };

    useEffect(() => {
        fetchData(3);
        return () => {};
    }, []);

    if (isLoading) {
        return (
            <SafeAreaView style={styles.container}>
                <ActivityIndicator size="large" color="#0000ff" />
                <Text>Loading...</Text>
            </SafeAreaView>
        );
    }

    return (
        <SafeAreaView style={styles.container}>
            <>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Post Title"
                        value={postTitle}
                        onChangeText={setPostTitle}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Post Body"
                        value={postBody}
                        onChangeText={setPostBody}
                    />
                    <Button
                        title={isPosting ? 'Posting...' : 'Add Post'}
                        onPress={addPost}
                        disabled={isPosting}
                    />
                </View>
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
                            return (
                                <Text style={styles.headerText}>Post List</Text>
                            );
                        }}
                        ListFooterComponent={() => {
                            return (
                                <Text style={styles.footerText}>
                                    Total: {postList.length}
                                </Text>
                            );
                        }}
                        refreshing={refreshing}
                        onRefresh={handleRefresh}
                    />
                </View>
            </>
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
    inputContainer: {
        backgroundColor: '#fff',
        padding: 16,
        borderRadius: 8,
        borderWidth: 1,
        margin: 16,
        width: '90%',
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 8,
        padding: 8,
        borderRadius: 8,
    },
});
