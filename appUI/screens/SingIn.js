import React, { useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/core';
import { View, Text, TouchableOpacity, Image } from 'react-native';
// import AsyncStorage from '@react-native-community/async-storage';

import { AuthLayout } from '../Authentication';
import { FONTS, SIZES, COLORS, icons } from '../constants';

import { FormInput, CustomSwitch, TextButton } from '../components';
import { utils } from '../utils';
import APIKit from '../helpers/apiKit';

const SignIn = () => {
	const [ email, setEmail ] = React.useState('');
	const [ password, setPassword ] = React.useState('');
	const [ emailError, setEmailError ] = React.useState('');

	const [ showPass, setShowPass ] = React.useState(false);
	const [ saveMe, setSaveMe ] = React.useState(false);

	const navigation = useNavigation();

	useLayoutEffect(() => {
		navigation.setOptions({
			headerShown: false
		});
	}, []);
	const storeData = async (value) => {
		console.log(value);

		try {
			const jsonValue = JSON.stringify(value);
			// await AsyncStorage.setItem('@storage_Key', jsonValue);
			navigation.navigate('Home');
		} catch (e) {
			// saving error
		}
	};
	const onPressLogin = () => {
		// const username = email;
		// const password = password;

		const payload = {
			username: email,
			password: password
		};
		console.log('send data', payload);

		const onSuccess = ({ data }) => {
			console.log('logged in', data);

			storeData(data);
		};

		const onFailure = (error) => {
			if (error.response) {
				console.log(error.response.data);
				// Toast.showWithGravity(error.response.data.message, Toast.LONG, Toast.TOP);
				setEmailError('error');
				console.log(error.response);
				// console.log(error.response.headers);
			}
			// this.setState({errors: error.response.data, isLoading: false});
		};

		// Show spinner when call is made

		APIKit.post('/auth/jwt/create', payload).then(onSuccess).catch(onFailure);
	};
	return (
		<AuthLayout title="Let's Sign You In" subtitle="Welcome to AppUI!!!">
			<View
				style={{
					flex: 1,
				}}
			>
				{/* Form inputs */}
				<FormInput
					label="UserName"
					keyboardType="email-address"
					autoCompleteType="email"
					onChange={(value) => {
						// Validate email
						// utils.validateE mail(value, setEmailError);
						setEmail(value);
					}}
					errorMsg={emailError}
					appendComponent={
						<View
							style={{
								justifyContent: 'center'
							}}
						>
							<Image
								source={email == '' || (email != '' && emailError == '') ? icons.correct : icons.cancel}
								style={{
									height: 20,
									width: 20,
									tintColor:
										email == ''
											? COLORS.gray
											: email != '' && emailError == '' ? COLORS.green : COLORS.red
								}}
							/>
						</View>
					}
				/>

				<FormInput
					label="Password"
					secureTextEntry={!showPass}
					autoCompleteType="password"
					containerStyle={{
						marginTop: SIZES.radius
					}}
					onChange={(value) => setPassword(value)}
					appendComponent={
						<TouchableOpacity
							style={{
								width: 40,
								alignItems: 'flex-end',
								justifyContent: 'center'
							}}
							onPress={() => setPassword(!showPass)}
						>
							<Image
								source={showPass ? icons.eye_close : icons.eye}
								style={{
									height: 20,
									width: 20,
									tintColor: COLORS.gray
								}}
							/>
						</TouchableOpacity>
					}
				/>

				{/* Save me & Forgot password */}
				<View
					style={{
						flexDirection: 'row',
						marginTop: SIZES.radius,
						justifyContent: 'space-between'
					}}
				>
					<CustomSwitch value={saveMe} onChange={(value) => setSaveMe(value)} />
					<TextButton
						label="Forgot Password?"
						buttonContainerStyle={{
							backgroundColor: null
						}}
						labelStyle={{
							color: COLORS.gray,
							...FONTS.body4
						}}
						onPress={() => navigation.navigate('ForgotPassword')}
					/>
				</View>

				{/* Sign In */}
				<TextButton
					label="Sign In"
					buttonContainerStyle={{
						height: 55,
						alignItems: 'center',
						marginTop: SIZES.padding * 1.5,
						borderRadius: SIZES.radius,
						backgroundColor: COLORS.primary
					}}
					onPress={() => onPressLogin()}
					// onPress={() => navigation.replace('Home')}
				/>
			</View>
		</AuthLayout>
	);
};

export default SignIn;
