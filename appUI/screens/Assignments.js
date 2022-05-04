import React, { useLayoutEffect, useState, useCallback, useEffect } from 'react';
import { useNavigation } from '@react-navigation/core';
import { View, Text, StyleSheet, Linking, TouchableOpacity, FlatList, Button } from 'react-native';
import axios from 'axios';

import { WelcomeHeader, TextButton } from '../components';
import APIKit from '../helpers/apiKit';

import { constants, images, SIZES, COLORS, FONTS } from '../constants';
import DocumentPicker, {
	DirectoryPickerResponse,
	DocumentPickerResponse,
	isInProgress,
	types
} from 'react-native-document-picker';
const Assignments = () => {
	const navigation = useNavigation();
	const [ fileResponse, setFileResponse ] = useState([]);
	const [ links, setLinks ] = useState([]);

	useLayoutEffect(() => {
		navigation.setOptions({
			headerShown: false
		});
	}, []);
	const [ result, setResult ] = useState([]);

	useEffect(
		() => {
			console.log(JSON.stringify(result, null, 2));
		},
		[ result ]
	);

	const handleError = (err) => {
		if (DocumentPicker.isCancel(err)) {
			console.warn('cancelled');
			// User cancelled the picker, exit any dialogs or menus and move on
		} else if (isInProgress(err)) {
			console.warn('multiple pickers were opened, only the last will be considered');
		} else {
			throw err;
		}
	};
	const upload = () => {
		const pdf = result[0];

		const formData = new FormData();
		const new_uri = pdf.uri.replace('content://', 'file:///');
		console.log('🚀 ~ file: Assignments.js ~ line 54 ~ upload ~ new_uri', new_uri);
		formData.append('pdf_file', {
			uri: pdf.uri,
			type: pdf.type,
			name: 'pdf.name'
		});
		console.log('to pdf-->🚀', {
			uri: pdf.uri,
			type: pdf.type,
			name: 'pdf.name'
		});
		fetch('https://word-extraction.herokuapp.com/api/v1.0/keywords-extraction/', {
			method: 'POST',
			headers: {
				// Accept: 'application/json',
				'Content-Type': 'multipart/form-data'
			},
			body: formData
		})
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
				setLinks(data.links);
			})
			.catch((err) => console.error('ERR-->>', err));
	};

	return (
		<View>
			<View
				style={{
					marginTop: 19
				}}
			>
				<WelcomeHeader />
				<Text
					style={{
						...FONTS.h2,
						marginTop: SIZES.padding,
						marginLeft: SIZES.padding
					}}
				>
					|keywords-extraction
				</Text>

				<TextButton
					buttonContainerStyle={{
						width: SIZES.width * 0.8,
						marginInline: SIZES.width * 0.8,
						height: 55,
						alignItems: 'center',
						marginTop: SIZES.padding,
						marginLeft:SIZES.width * 0.1,
						borderRadius: SIZES.radius,
						backgroundColor: COLORS.primary
					}}
					label="please select pdf file"
					onPress={() => {
						DocumentPicker.pick({
							type: types.pdf
						})
							.then(setResult)
							.catch(handleError);
					}}
				/>

				<Text selectable>Result: {result && result[0]?.name}</Text>
				<TextButton
					label="Submit"
					buttonContainerStyle={{
						width: SIZES.width * 0.8,
						marginInline: SIZES.width * 0.8,
						height: 55,
						alignItems: 'center',
						marginTop: SIZES.padding,
						marginLeft:SIZES.width * 0.1,
						borderRadius: SIZES.radius,
						backgroundColor: COLORS.primary
					}}
					// onPress={() => onPressLogin()}
					onPress={() => upload()}
				/>
				{links && (
					<View>
						<FlatList
							data={links}
							renderItem={({ item }) => (
								<TouchableOpacity
									onPress={() =>
										Linking.canOpenURL(item).then((supported) => {
											if (supported) {
												Linking.openURL(item);
											} else {
												console.log("Don't know how to open URI: " + item);
											}
										})}
								>
									<Text style={styles.item}>{item}</Text>
								</TouchableOpacity>
							)}
						/>
					</View>
				)}
			</View>
		</View>
	);
};
const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 22
	},
	item: {
		padding: 10,
		fontSize: 18,
		height: 44
	}
});
export default Assignments;
