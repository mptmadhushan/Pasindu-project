import React, { useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/core';
import { View, Text, ScrollView, SafeAreaView, StyleSheet, Image, TextInput } from 'react-native';

import { shadow } from 'react-native-shadow-2';
import { FlatList } from 'react-native-gesture-handler';
import Animated, {
	Extrapolate,
	interpolate,
	useAnimatedScrollHandler,
	useAnimatedStyle,
	useSharedValue
} from 'react-native-reanimated';

import { WelcomeHeader, CategoryCard, VerticalImageCard } from '../components';

import { constants, images, SIZES, COLORS, FONTS, dummydata } from '../constants';
import APIKit, { setClientToken } from '../helpers/apiKit';

const HomeScreen = () => {
	const navigation = useNavigation();
	const [ assignment, setAssignment ] = React.useState('');
	const [ theArray, setTheArray ] = React.useState('');
	useLayoutEffect(() => {
		navigation.setOptions({
			headerShown: false
		});
		setClientToken(
			'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjUxOTkzNTI2LCJqdGkiOiJlZDBjOTRlMGM4Njg0MmU1ODI4NWM0NTI0NmJlMjgzMiIsInVzZXJfaWQiOjF9.g8de3LnNuiHnDyXnXXcuRzQ8avW-zXBfpjWWbuD1aec'
		);
		getAssignments();
	}, []);
	const getAssignments = () => {
		const onSuccess = ({ data }) => {
			console.log('logged in', data.assignment_details.assignment_set);
			setAssignment(data.assignment_details.assignment_set);
		};

		const onFailure = (error) => {
			if (error.response) {
				console.log(error.response.data);
				// Toast.showWithGravity(error.response.data.message, Toast.LONG, Toast.TOP);

				console.log(error.response);
				// console.log(error.response.headers);
			}
			// this.setState({errors: error.response.data, isLoading: false});
		};

		// Show spinner when call is made

		APIKit.get('/assignment-scheddule/').then(onSuccess).catch(onFailure);
	};
	const scrollViewRef = React.useRef();

	return (
		<View style={{height:SIZES.height}}>
			<Animated.ScrollView>
				<View
					style={{
						marginTop: 5
					}}
				>
					{/* Welcome Text */}
					<WelcomeHeader />

					<View
						style={{
							marginTop: 10
						}}
					>
						<ScrollView horizontal={true} style={{ width: SIZES.width }}>
							<FlatList
								data={assignment}
								numColumns={30}
								scrollEnabled={false}
								listKey="categories"
								keyExtractor={(item) => `categories-${item.id}`}
								contentContainerStyle={{
									marginTop: SIZES.radius
								}}
								renderItem={({ item, index }) => (
									<CategoryCard
										moveToNextDay={(d) => {
											console.log('clicked', d);
											setTheArray((oldArray) => [ ...oldArray, item ]);
										}}
										data_type={'home'}
										category={item}
										containerStyle={{
											height: SIZES.height * 0.3,
											width: SIZES.width * 0.8,
											// width: (SIZES.width - SIZES.padding * 2 - SIZES.radius) / 2,
											marginLeft: (index + 1) % 2 == 0 ? SIZES.radius : SIZES.padding
										}}
									/>
								)}
							/>
						</ScrollView>
					</View>
					{/* {theArray && ( */}
						<Text
							style={{
								textAlign: 'center',
								color: COLORS.lightOrange,
								...FONTS.h2,
								paddingTop: 10
							}}
						>
							Upcoming
						</Text>
					{/* )} */}
					<View
						style={{
							marginTop: 10
						}}
					>
						{/* {theArray && ( */}
						<ScrollView horizontal={true} style={{ width: SIZES.width }}>
							<FlatList
								data={theArray}
								numColumns={30}
								scrollEnabled={false}
								listKey="categories"
								keyExtractor={(item) => `categories-${item.id}`}
								contentContainerStyle={{
									marginTop: SIZES.radius
								}}
								renderItem={({ item, index }) => (
									<CategoryCard
										moveToNextDay={() => {
											console.log('clicked');
										}}
										data_type={'moved'}
										category={item}
										containerStyle={{
											height: SIZES.height * 0.3,
											width: SIZES.width * 0.8,
											// width: (SIZES.width - SIZES.padding * 2 - SIZES.radius) / 2,
											marginTop: 20,
											marginLeft: (index + 1) % 2 == 0 ? SIZES.radius : SIZES.padding
										}}
									/>
								)}
							/>
						</ScrollView>
						{/* )} */}
					</View>
				</View>
			</Animated.ScrollView>
		</View>
	);
};

export default HomeScreen;
