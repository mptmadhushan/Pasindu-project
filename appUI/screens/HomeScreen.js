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

	useLayoutEffect(() => {
		navigation.setOptions({
			headerShown: false
		});
		setClientToken(
			'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjUxODg1MTU3LCJqdGkiOiI4ZmI3ZjA0YTVjMjU0YjhlYTA4NDIxNTQ4MWQzMWUxMiIsInVzZXJfaWQiOjJ9.dU8onJR2x8JMRY_fcM925VuDwyuK1NRDR8dfU-UZ-V0'
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
		<View>
			<Animated.ScrollView>
				<View
					style={{
						marginTop: 5
					}}
				>
					{/* Welcome Text */}
					<WelcomeHeader />

					{/* <View
						style={{
							marginBottom: 40,
							shadowColor: COLORS.black,
							shadowOffset: {
								width: 0,
								height: 10
							},
							shadowOpacity: 0.25,
							shadowRadius: 3.84,

							elevation: 5
						}}
					>
						<FlatList
							horizontal
							data={assignment}
							listKey="category"
							keyExtractor={(item) => `category-${item.id}`}
							showsHorizontalScrollIndicator={false}
							contentContainerStyle={{
								marginTop: SIZES.padding
							}}
							renderItem={({ item, index }) => (
								<VerticalImageCard
									containerStyle={{
										marginLeft: index == 0 ? SIZES.padding : SIZES.radius,
										// marginRight: index == dummydata.length - 1 ? SIZES.padding : 0
									}}
									course={item}
								/>
							)}
						/>
					</View> */}

					<View
						style={{
							marginTop: SIZES.padding * 0.9
						}}
					>
						<ScrollView horizontal={true} style={{ width: SIZES.width }}>
							<FlatList
								data={assignment}
								numColumns={2}
								scrollEnabled={false}
								listKey="categories"
								keyExtractor={(item) => `categories-${item.id}`}
								contentContainerStyle={{
									marginTop: SIZES.radius
								}}
								renderItem={({ item, index }) => (
									<CategoryCard
										data_type={'home'}
										category={item}
										containerStyle={{
											height: SIZES.height * 0.5,
											width: SIZES.width * 0.8,
											// width: (SIZES.width - SIZES.padding * 2 - SIZES.radius) / 2,
											marginTop: SIZES.radius,
											marginLeft: (index + 1) % 2 == 0 ? SIZES.radius : SIZES.padding
										}}
									/>
								)}
							/>
						</ScrollView>
					</View>
				</View>
			</Animated.ScrollView>
		</View>
	);
};

export default HomeScreen;
