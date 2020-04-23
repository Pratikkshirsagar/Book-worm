import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput, FlatList } from 'react-native';
import BookCount from '../components/BookCount';
import CustomActionButton from '../components/CustomActionButton';
import firebase from 'firebase/app';
import 'firebase/database';

import { Ionicons } from '@expo/vector-icons';
import colors from '../assets/colors';

export default function App(props) {
  // const [totalCount, setTotalCount] = useState(0);
  // const [readingCount, setReadingCount] = useState(0);
  // const [readCount, setReadCount] = useState(0);
  const [currentUser, setCurrentUser] = useState('');
  const [isAddNewBookVisible, setIsAddNewBookVisible] = useState(false);
  const [textInputData, setTextInputData] = useState('');
  const [books, setBooks] = useState([]);
  const [booksReading, setBooksReading] = useState([]);
  const [booksRead, setBooksRead] = useState([]);

  const setCurrentUserFun = async (user) => {
    try {
      let currentUserData = await firebase.database().ref('users').child(user.uid).once('value');
      setCurrentUser(currentUserData.val());
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const { navigation } = props;
    const user = navigation.getParam('user');
    setCurrentUserFun(user);
  }, []);

  const showAddNewBook = () => {
    setIsAddNewBookVisible(true);
  };

  const hideNewBook = () => {
    setIsAddNewBookVisible(false);
  };

  const addBook = async (book) => {
    console.log(book);
    try {
      const snapshot = await firebase
        .database()
        .ref('books')
        .child(currentUser.uid)
        .orderByChild('name')
        .equalTo(book)
        .once('value');

      if (snapshot.exists()) {
        alert('Unable to add as book already exist');
      } else {
        const key = await firebase.database().ref('books').child(currentUser.uid).push().key;
        const response = await firebase
          .database()
          .ref('books')
          .child(currentUser.uid)
          .child(key)
          .set({ name: book, read: false });

        setBooks([...books, book]);
        setBooksReading([...booksReading, book]);
        setIsAddNewBookVisible(false);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const markAsRead = (selectedBook, index) => {
    let newbooks = books.filter((book) => book !== selectedBook);
    let newbooksReading = booksReading.filter((book) => book !== selectedBook);

    setBooks(newbooks);
    setBooksReading(newbooksReading);
    setBooksRead([...booksRead, selectedBook]);
  };

  const renderItem = (item, index) => {
    return (
      <View style={styles.listItemContainer}>
        <View style={styles.listItemTitleContainer}>
          <Text>{item}</Text>
        </View>
        <CustomActionButton style={styles.markAsReadButton} onPress={() => markAsRead(item, index)}>
          <Text style={styles.markAsReadButtonText}>Mark as Read</Text>
        </CustomActionButton>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <SafeAreaView />
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Book Worm</Text>
      </View>
      <View style={styles.container}>
        {isAddNewBookVisible && (
          <View style={styles.textInputContainer}>
            <TextInput
              onChangeText={(text) => setTextInputData(text)}
              style={styles.textInput}
              placeholder="Enter Book Name"
              placeholderTextColor="grey"
            />
            <CustomActionButton
              style={styles.checkmarkButton}
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
            <View style={styles.listEmptyComponent}>
              <Text style={styles.listEmptyComponentText}>Not Reading Any Books</Text>
            </View>
          }
        />

        <CustomActionButton
          position="right"
          style={styles.addNewBookButton}
          onPress={showAddNewBook}
        >
          <Text style={styles.addNewBookButtonText}>+</Text>
        </CustomActionButton>
      </View>

      <View style={styles.footer}>
        <BookCount title="Total" count={books.length} />
        <BookCount title="Reading" count={booksReading.length} />
        <BookCount title="Read" count={booksRead.length} />
      </View>
      <SafeAreaView />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 70,
    borderBottomWidth: 0.5,
    borderBottomColor: colors.borderColor,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    fontSize: 24,
  },
  textInputContainer: {
    height: 50,
    flexDirection: 'row',
  },
  textInput: {
    flex: 1,
    backgroundColor: colors.bgTextInput,
    paddingLeft: 5,
  },
  checkmarkButton: {
    backgroundColor: colors.bgSuccess,
  },
  listItemContainer: {
    height: 50,
    flexDirection: 'row',
  },
  listItemTitleContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 5,
  },
  listEmptyComponent: {
    marginTop: 50,
    alignItems: 'center',
  },
  listEmptyComponentText: {
    fontWeight: 'bold',
  },
  markAsReadButton: {
    width: 100,
    backgroundColor: colors.bgSuccess,
  },
  markAsReadButtonText: {
    fontWeight: 'bold',
    color: 'white',
  },
  addNewBookButton: {
    backgroundColor: colors.bgPrimary,
    borderRadius: 25,
  },
  addNewBookButtonText: {
    color: 'white',
    fontSize: 30,
  },
  footer: {
    height: 70,
    flexDirection: 'row',
    borderTopWidth: 0.5,
    borderTopColor: colors.borderColor,
  },
});
