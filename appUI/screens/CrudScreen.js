import React, { useEffect, useState } from 'react';
import { FlatList, Keyboard, Text, TextInput, TouchableOpacity, View } from 'react-native';
import styles from './CrudStyle';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, addDoc, updateDoc } from 'firebase/firestore/lite';
export default function HomeScreen(props) {
	const [ entityTitle, setEntityTitle ] = useState('');
	const [ entityDesc, setEntityDesc ] = useState('');
	const [ entityText, setEntityText ] = useState('');
	const [ entities, setEntities ] = useState([]);

	// const entityRef = db.firestore().collection('entities');
	const userID = '123';
	const firebaseConfig = {
		apiKey: 'AIzaSyBcMrPk8lgzKeApc7HAT_inL4AavrDq5qg',
		authDomain: 'notes-app-89d2f.firebaseapp.com',
		projectId: 'notes-app-89d2f',
		storageBucket: 'notes-app-89d2f.appspot.com',
		databaseURL: 'https://notes-app-89d2f.firebaseio.com',
		messagingSenderId: '1031773313369',
		appId: '1:1031773313369:web:69b48d354d209ff1ead448',
		measurementId: 'G-4TK1P9HQE8'
	};
	
	const app = initializeApp(firebaseConfig);
	const db = getFirestore(app);

	useEffect(() => {
		getCities();
	}, []);

	async function getCities() {
		const citiesCol = collection(db, 'notes');

		const citySnapshot = await getDocs(citiesCol);
		const cityList = citySnapshot.docs.map((doc) => doc.data());
		console.log('🚀 ~ cityList', cityList);
		setEntities(cityList);
		return cityList;
	}
	async function onAddButtonPress() {
		console.log('🎎 es');
		const data = {
			title: entityTitle,
			desc: entityDesc
		};
		const citiesCol = collection(db, 'notes');
		const res = await addDoc(citiesCol, data);

		console.log('🎎 res', res);
		getCities();
	}
	async function onUpdateButtonPress() {
		console.log('🎎 es');
		const data = {
			title: entityTitle,
			desc: entityDesc
		};
		// const citiesCol = collection(db, 'notes');
		// const res = await updateDoc(citiesCol, data);
		const washingtonRef = collection(db, 'notes');

		// Set the "capital" field of the city 'DC'
		await updateDoc('M21losVfwvFwWHggTlAT', {
			title: 'updated'
		});
		console.log('🎎 res');
		// getCities();
	}

	const renderEntity = ({ item, index }) => {
		return (
			<View style={styles.entityContainer}>
				<TouchableOpacity onPress={onUpdateButtonPress}>
					<Text style={styles.entityText}>
						{index}. {item.title}
					</Text>
					<Text style={styles.entityText}>{item.desc}</Text>
				</TouchableOpacity>
			</View>
		);
	};

	return (
		<View style={styles.container}>
			<View style={styles.formContainer}>
				<TextInput
					style={styles.input}
					placeholder="Add Title"
					placeholderTextColor="#aaaaaa"
					onChangeText={(text) => setEntityTitle(text)}
					value={entityTitle}
					underlineColorAndroid="transparent"
					autoCapitalize="none"
				/>
				<TextInput
					style={styles.input}
					placeholder="Add Description"
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
			{entities && (
				<View style={styles.listContainer}>
					<FlatList
						data={entities}
						renderItem={renderEntity}
						keyExtractor={(item) => item.id}
						removeClippedSubviews={true}
					/>
				</View>
			)}
		</View>
	);
}
