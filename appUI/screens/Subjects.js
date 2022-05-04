import React, { useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/core';
import { View, Text } from 'react-native';

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

const Subjects = () => {
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

					<View
						style={{
							marginTop: SIZES.padding * 0.5
						}}
					>
						<FlatList
							data={assignment}
							numColumns={1}
							scrollEnabled={false}
							listKey="categories"
							keyExtractor={(item) => `categories-${item.id}`}
							contentContainerStyle={{
								marginTop: SIZES.radius
							}}
							renderItem={({ item, index }) => (
								<CategoryCard
									data_type={'subjects'}
									category={item}
									containerStyle={{
										height: SIZES.height * 0.2,
										width: 360,
										marginTop: SIZES.padding * 0.5,
										marginRight: 13,
										marginLeft: 13
									}}
								/>
							)}
						/>
					</View>
				</View>
			</Animated.ScrollView>
		</View>
	);
};

export default Subjects;
