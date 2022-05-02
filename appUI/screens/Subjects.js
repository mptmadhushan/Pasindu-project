import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/core'
import {
    View,
    Text
} from 'react-native'


import { FlatList } from "react-native-gesture-handler";
import Animated, {
    Extrapolate,
    interpolate,
    useAnimatedScrollHandler,
    useAnimatedStyle,
    useSharedValue
} from 'react-native-reanimated';

import { WelcomeHeader, CategoryCard, VerticalImageCard } from "../components";

import { constants, images, SIZES, COLORS, FONTS, dummydata } from "../constants";


const Subjects = () => {

    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);

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
                            data={dummydata.subjectlist}
                            numColumns={1}
                            scrollEnabled={false}
                            listKey="categories"
                            keyExtractor={item => `categories-${item.id}`}
                            contentContainerStyle={{
                                marginTop: SIZES.radius
                            }}
                            renderItem={({ item, index }) => (
                                <CategoryCard
                                    category={item}
                                    containerStyle={{
                                        height: 120,
                                        width: 360,
                                        marginTop: SIZES.padding * 0.5,
                                        marginRight: 13,
                                        marginLeft: 13,
                                    }}
                                />
                            )}
                        />
                    </View>
                </View>
            </Animated.ScrollView>
        </View>
    )
}

export default Subjects
