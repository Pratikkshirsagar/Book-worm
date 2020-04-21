import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  FlatList,
} from 'react-native';
import BookCount from './components/BookCount';
import CustomActionButton from './components/CustomActionButton';

import { Ionicons } from '@expo/vector-icons';

export default function App() {
  const [totalCount, setTotalCount] = useState(0);
  const [readingCount, setReadingCount] = useState(0);
  const [readCount, setReadCount] = useState(0);
  const [isAddNewBookVisible, setIsAddNewBookVisible] = useState(false);
  const [textInputData, setTextInputData] = useState('');
  const [books, setBooks] = useState([]);

  const showAddNewBook = () => {
    setIsAddNewBookVisible(true);
  };

  const hideNewBook = () => {
    setIsAddNewBookVisible(false);
  };

  const addBook = (book) => {
    setBooks([...books, book]);
    setTotalCount(totalCount + 1);
    setReadingCount(readingCount + 1);
    setIsAddNewBookVisible(false);
  };

  const markAsRead = (selectedBook, index) => {
    let newList = books.filter((book) => book !== selectedBook);
    setBooks(newList);
    setReadingCount(readingCount - 1);
    setReadCount(readCount + 1);
  };

  const renderItem = (item, index) => {
    return (
      <View style={{ height: 50, flexDirection: 'row' }}>
        <View style={{ flex: 1, justifyContent: 'center', paddingLeft: 5 }}>
          <Text>{item}</Text>
        </View>
        <CustomActionButton
          style={{ width: 100, backgroundColor: '#a5deba' }}
          onPress={() => markAsRead(item, index)}
        >
          <Text style={{ fontWeight: 'bold', color: 'white' }}>Mark as Read</Text>
        </CustomActionButton>
      </View>
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <SafeAreaView />
      <View
        style={{
          height: 70,
          borderBottomWidth: 0.5,
          borderBottomColor: '#E9E9E9',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Text style={{ fontSize: 24 }}>Book Worm</Text>
      </View>
      <View style={{ flex: 1 }}>
        {isAddNewBookVisible && (
          <View style={{ height: 50, flexDirection: 'row' }}>
            <TextInput
              onChangeText={(text) => setTextInputData(text)}
              style={{ flex: 1, backgroundColor: '#ececec', paddingLeft: 5 }}
              placeholder="Enter Book Name"
              placeholderTextColor="grey"
            />
            <CustomActionButton
              style={{ backgroundColor: '#a5deba' }}
              onPress={() => addBook(textInputData)}
            >
              <Ionicons name="ios-checkmark" color="white" size={40} />
            </CustomActionButton>

            <CustomActionButton>
              <Ionicons name="ios-close" color="white" size={40} onPress={hideNewBook} />
            </CustomActionButton>
          </View>
        )}

        <FlatList
          data={books}
          renderItem={({ item, index }) => renderItem(item, index)}
          keyExtractor={(item, index) => index.toString()}
          ListEmptyComponent={
            <View style={{ marginTop: 50, alignItems: 'center' }}>
              <Text style={{ fontWeight: 'bold' }}>Not Reading Any Books</Text>
            </View>
          }
        />

        <CustomActionButton
          position="right"
          style={{ backgroundColor: '#AAD1E6', borderRadius: 25 }}
          onPress={showAddNewBook}
        >
          <Text style={{ color: 'white', fontSize: 30 }}>+</Text>
        </CustomActionButton>
      </View>

      <View
        style={{
          height: 70,
          borderTopWidth: 0.5,
          borderTopColor: '#E9E9E9',
          flexDirection: 'row',
        }}
      >
        <BookCount title="Total" count={totalCount} />
        <BookCount title="Reading" count={readingCount} />
        <BookCount title="Read" count={readCount} />
      </View>
      <SafeAreaView />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
