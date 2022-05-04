import React, { useLayoutEffect, useState, useCallback, useEffect } from 'react';
import { useNavigation } from '@react-navigation/core';
import { View, Text, Button } from 'react-native';
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
			method: 'post',
			headers: {
				'Content-Type': 'multipart/form-data'
			},
			body: formData
		})
			.then((res) => {
				const data = JSON.parse(res);
				console.log('resp', res);
				console.log('resp data', data);
			})
			.catch(function(error) {
				console.log('There has been a problem with your fetch operation: ' + error.message);
				throw error;
			});
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

				<Button
					title="open picker for single selection of pdf file"
					onPress={() => {
						DocumentPicker.pick({
							type: types.pdf
						})
							.then(setResult)
							.catch(handleError);
					}}
				/>

				{/* <Text selectable>Result: {JSON.stringify(result, null, 2)}</Text> */}
				<TextButton
					label="Submit"
					buttonContainerStyle={{
						height: 55,
						alignItems: 'center',
						marginTop: SIZES.padding * 6,
						borderRadius: SIZES.radius,
						backgroundColor: COLORS.primary
					}}
					// onPress={() => onPressLogin()}
					onPress={() => upload()}
				/>
			</View>
		</View>
	);
};

export default Assignments;
