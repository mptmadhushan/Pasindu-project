import React, { useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/core';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { FONTS, COLORS, SIZES, icons, images } from '../constants';

const WelcomeHeader = ({ onPress }) => {
	const navigation = useNavigation();

	useLayoutEffect(() => {
		navigation.setOptions({
			headerShown: false
		});
	}, []);

	return (
		<View
			style={{
				flexDirection: 'row',
				marginTop: 40,
				marginBottom: 10,
				paddingHorizontal: SIZES.padding,
				alignItems: 'center'
			}}
		>
			{/* Greetings */}
			<View
				style={{
					flex: 1
				}}
			>
				<Text
					style={{
						...FONTS.h2
					}}
				>
					Welcome!!
				</Text>
			</View>
			{/* Avatar */}
			<TouchableOpacity
				style={{
					flexDirection: 'row',
					alignItems: 'center',
                    justifyContent:'center',
                    alignSelf:'center'
				}}
			>
				<Text
					style={{
						...FONTS.h4
					}}
				>
					LogOut
				</Text>
				{/* <Image
					source={icons.cancel}
					resizeMode="contain"
					style={{
						width: 30,
						height: 30,
						borderRadius: SIZES.padding
					}}
					onPress={() => navigation.navigate('Profile')}
				/> */}
			</TouchableOpacity>
		</View>
	);
};

export default WelcomeHeader;
