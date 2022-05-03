import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/core'
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    ImageBackground
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

const Profile = () => {

    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);

    return (
        <View>
            <Animated.ScrollView>
                {/* Profile Header section */}
                <View
                    style={{
                        marginTop: 60,
                        alignItems: 'center',
                    }}
                >
                    <Text
                        style={{
                            ...FONTS.h1
                        }}
                    >
                        Profile
                    </Text>
                    <TouchableOpacity>
                        <Image
                            source={images.profileimage}
                            resizeMode="contain"
                            style={{
                                width: 90,
                                height: 90,
                                borderRadius: SIZES.padding,
                                marginTop: SIZES.padding
                            }}
                        />
                    </TouchableOpacity>
                    <Text
                        style={{
                            ...FONTS.h2,
                            marginTop: SIZES.padding
                        }}
                    >
                        John Doe
                    </Text>
                    <Text
                        style={{
                            color: COLORS.darkGray2,
                            ...FONTS.h3
                        }}
                    >
                        @john_doe
                    </Text>
                </View>

                {/* Profile Card Section */}
                <TouchableOpacity
                    onPress={() => navigation.navigate("Assignments")}
                >
                    <View
                        style={{
                            marginTop: SIZES.padding * 0.5,
                            marginRight: 13,
                            marginLeft: 13,
                        }}
                    >
                        <ImageBackground
                            source={images.bg_5}
                            resizeMode="cover"
                            style={{
                                height: 100,
                                justifyContent: 'flex-end',
                            }}
                            imageStyle={{
                                borderRadius: SIZES.radius
                            }}
                        >
                            <Text
                                style={{
                                    color: COLORS.white,
                                    ...FONTS.h3,
                                    marginTop: SIZES.padding,
                                    fontSize: 18,
                                    paddingLeft: 10,
                                    paddingBottom: 10
                                }}
                            >Assignments</Text>
                        </ImageBackground>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => navigation.navigate("Subjects")}
                >
                    <View
                        style={{
                            marginTop: SIZES.padding * 0.5,
                            marginRight: 13,
                            marginLeft: 13,
                        }}
                    >
                        <ImageBackground
                            source={images.bg_4}
                            resizeMode="cover"
                            style={{
                                height: 100,
                                justifyContent: 'flex-end',
                            }}
                            imageStyle={{
                                borderRadius: SIZES.radius
                            }}
                        >
                            <Text
                                style={{
                                    color: COLORS.white,
                                    ...FONTS.h3,
                                    marginTop: SIZES.padding,
                                    fontSize: 18,
                                    paddingLeft: 10,
                                    paddingBottom: 10
                                }}
                            >Subjects</Text>
                        </ImageBackground>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => navigation.navigate("Goals")}
                >
                    <View
                        style={{
                            marginTop: SIZES.padding * 0.5,
                            marginRight: 13,
                            marginLeft: 13,
                        }}
                    >
                        <ImageBackground
                            source={images.bg_3}
                            resizeMode="cover"
                            style={{
                                height: 100,
                                justifyContent: 'flex-end',
                            }}
                            imageStyle={{
                                borderRadius: SIZES.radius
                            }}
                        >
                            <Text
                                style={{
                                    color: COLORS.white,
                                    ...FONTS.h3,
                                    marginTop: SIZES.padding,
                                    fontSize: 18,
                                    paddingLeft: 10,
                                    paddingBottom: 10
                                }}
                            >Notes</Text>
                        </ImageBackground>
                    </View>
                </TouchableOpacity>

            </Animated.ScrollView>
        </View>
    )
}

export default Profile
