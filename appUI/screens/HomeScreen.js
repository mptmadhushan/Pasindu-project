import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/core'
import {
    View,
    Text,
    SafeAreaView,
    StyleSheet,
    Image,
    TextInput
} from 'react-native'

import { shadow } from "react-native-shadow-2";
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

const HomeScreen = () => {

    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);

    const scrollViewRef = React.useRef()


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
                            marginBottom: 40,
                            shadowColor: COLORS.black,
                            shadowOffset: {
                                width: 0,
                                height: 10,
                            },
                            shadowOpacity: 0.25,
                            shadowRadius: 3.84,

                            elevation: 5
                        }}
                    >
                        <FlatList
                            horizontal
                            data={dummydata.progressImages}
                            listKey="category"
                            keyExtractor={item => `category-${item.id}`}
                            showsHorizontalScrollIndicator={false}
                            contentContainerStyle={{
                                marginTop: SIZES.padding
                            }}
                            renderItem={({ item, index }) => (
                                <VerticalImageCard
                                    containerStyle={{
                                        marginLeft: index == 0 ? SIZES.padding : SIZES.radius,
                                        marginRight: index == dummydata.categories.length - 1 ? SIZES.padding : 0
                                    }}
                                    course={item}
                                />
                            )}
                        />
                    </View>


                    <View
                        style={{
                            marginTop: SIZES.padding * 0.5
                        }}
                    >
                        <FlatList
                            data={dummydata.categories}
                            numColumns={2}
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
                                        height: 110,
                                        width: (SIZES.width - (SIZES.padding * 2) - SIZES.radius) / 2,
                                        marginTop: SIZES.radius,
                                        marginLeft: (index + 1) % 2 == 0 ? SIZES.radius : SIZES.padding
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




export default HomeScreen;
