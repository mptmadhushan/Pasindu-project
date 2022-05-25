import React, { useEffect, useState } from "react";
import {
  FlatList,
  Modal,
  Pressable,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import styles from "./CrudStyle";
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  getDoc,
  collection,
  doc,
  deleteDoc,
  getDocs,
  addDoc,
  updateDoc,
} from "firebase/firestore/lite";
export default function LocationScreen() {
  const [entityTitle, setEntityTitle] = useState("");
  const [entityDesc, setEntityDesc] = useState("");
  const [selectedItem, setItem] = useState("");
  const [entityTitleUp, setEntityTitleUp] = useState("");
  const [entityDescUp, setEntityDescUp] = useState("");
  const [entities, setEntities] = useState([]);
  const [colors, setColors] = useState([{ name: "Loading...", id: "initial" }]);
  const [modalVisible, setModalVisible] = useState(false);
  // const entityRef = db.firestore().collection('entities');
  const userID = "123";
  const firebaseConfig = {
    apiKey: "AIzaSyBcMrPk8lgzKeApc7HAT_inL4AavrDq5qg",
    authDomain: "notes-app-89d2f.firebaseapp.com",
    projectId: "notes-app-89d2f",
    storageBucket: "notes-app-89d2f.appspot.com",
    databaseURL: "https://notes-app-89d2f.firebaseio.com",
    messagingSenderId: "1031773313369",
    appId: "1:1031773313369:web:69b48d354d209ff1ead448",
    measurementId: "G-4TK1P9HQE8",
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  useEffect(() => {
    getCities();
  }, []);

  async function getCities() {
    const citiesCol = collection(db, "locations");

    const citySnapshot = await getDocs(citiesCol);
    const cityList = citySnapshot.docs.map((doc) => doc.data());
    // citySnapshot.forEach((doc) => {
    // 	// console.log(doc.id, '=>🚀', doc.data());
    // });
    setColors(citySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    // console.log('🚀 ~ cityList', cityList);
    setEntities(cityList);
    return cityList;
  }
  async function onAddButtonPress() {
    console.log("🎎 es");
    const data = {
      latitudes: entityTitle,
      longitudes: entityDesc,
    };
    const citiesCol = collection(db, "locations");
    const res = await addDoc(citiesCol, data);
    setEntityTitle("");
    setEntityDesc("");
    getCities();
  }
  async function updateData() {
    console.log("selectedItem --<", selectedItem);
    const data = {
      latitudes: entityTitleUp,
      longitudes: entityDescUp,
    };

    const docRef = doc(db, `locations/${selectedItem.id}`);
    const docSnap = await getDoc(docRef);
    await updateDoc(docRef, data);
    console.log("🚀 ~updateData ~ res", docSnap);
    getCities();
    setModalVisible(false);
  }
  async function deleteData() {
    console.log("selectedItem --<", selectedItem);

    const docRef = doc(db, `locations/${selectedItem.id}`);
    const docSnap = await getDoc(docRef);
    await deleteDoc(docRef);
    console.log("🚀 ~updateData ~ res", docSnap);
    getCities();
    setModalVisible(false);
  }
  function onUpdateButtonPress(item) {
    console.log("🎎 es", item);
    setModalVisible(true);
    setEntityTitleUp(item.latitudes);
    setEntityDescUp(item.longitudes);
    setItem(item);
  }

  const renderEntity = ({ item, index }) => {
    return (
      <View style={styles.entityContainer}>
        <TouchableOpacity
          key={item.id}
          onPress={() => onUpdateButtonPress(item)}
        >
          <Text style={styles.entityText}>
            {index + 1}.latitudes: {item.latitudes}
          </Text>
          <Text style={styles.entityText}>longitudes: {item.longitudes}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.buttonText}>Add</Text>

            <View style={{ display: "flex", flexDirection: "row" }}>
              <TextInput
                style={{
                  borderRadius: 10,
                  borderWidth: 1,
                  borderColor: "#aaaa",
                  padding: 5,
                  margin: 2,
                }}
                placeholder="Update Longitudes"
                placeholderTextColor="#aaaaaa"
                onChangeText={(text) => setEntityTitleUp(text)}
                value={entityTitleUp}
                underlineColorAndroid="transparent"
                autoCapitalize="none"
              />
              <TextInput
                style={{
                  borderRadius: 10,
                  borderWidth: 1,
                  borderColor: "#aaaa",
                  padding: 5,
                  margin: 2,
                }}
                placeholder="Update Latitudes"
                placeholderTextColor="#aaaaaa"
                onChangeText={(text) => setEntityDescUp(text)}
                value={entityDescUp}
                underlineColorAndroid="transparent"
                autoCapitalize="none"
              />
            </View>
            <View style={styles.updateButton}>
              <TouchableOpacity style={styles.button} onPress={updateData}>
                <Text style={styles.buttonText}>Update</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button} onPress={deleteData}>
                <Text style={styles.buttonText}>Delete</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.button}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.buttonText}>Close</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="longitudes"
          placeholderTextColor="#aaaaaa"
          onChangeText={(text) => setEntityTitle(text)}
          value={entityTitle}
          underlineColorAndroid="transparent"
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholder="latitudes"
          placeholderTextColor="#aaaaaa"
          onChangeText={(text) => setEntityDesc(text)}
          value={entityDesc}
          underlineColorAndroid="transparent"
          autoCapitalize="none"
        />
        <TouchableOpacity style={styles.button} onPress={onAddButtonPress}>
          <Text style={styles.buttonText}>Add</Text>
        </TouchableOpacity>
      </View>
      {colors && (
        <View style={styles.listContainer}>
          <FlatList
            data={colors}
            renderItem={renderEntity}
            keyExtractor={(item) => item.id}
            removeClippedSubviews={true}
          />
        </View>
      )}
    </View>
  );
}
