import React from 'react';
import { View, Text, Image } from 'react-native';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { images, FONTS, SIZES, COLORS } from '../constants';

const AuthLayout = ({ title, subtitle, titleContainerStyle, children }) => {
	return (
		<View
			style={{
				flex: 1,
				paddingVertical: SIZES.padding,
				backgroundColor: COLORS.white
			}}
		>
			<KeyboardAwareScrollView
				keyboardDismissMode="on-drag"
				contentContainerStyle={{
					flex: 1,
					paddingHorizontal: SIZES.padding
				}}
			>
				{/* App Icon */}
				<View
					style={{
						alignItems: 'center'
					}}
				>
					<Image
						source={images.code1}
						resizeMode="contain"
						style={{
							marginTop: 10,
							height: 200,
							width: 200,
							borderRadius: 500
						}}
					/>
				</View>

				{/* title */}
				<View
					style={{
						marginTop: SIZES.padding,
						...titleContainerStyle
					}}
				>
					<Text
						style={{
							textAlign: 'center',
							...FONTS.h2
						}}
					>
						{title}
					</Text>
					<Text
						style={{
							textAlign: 'center',
							color: COLORS.darkGray,
							marginTop: SIZES.base,
							...FONTS.body3
						}}
					>
						{subtitle}
					</Text>
				</View>

				{/* Content */}
				{children}
			</KeyboardAwareScrollView>
		</View>
	);
};

export default AuthLayout;
