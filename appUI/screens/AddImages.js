import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/core'
import {
    View,
    Text
} from 'react-native'

import { WelcomeHeader, TextButton } from "../components";

import { constants, images, SIZES, COLORS, FONTS } from "../constants";

const AddImages = () => {

    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);

    return (
        <View>
            <View
                style={{
                    marginTop: 5
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
                    Add Images
                </Text>


                <TextButton
                    label="Add Photos"
                    buttonContainerStyle={{
                        height: 55,
                        marginHorizontal: SIZES.padding,
                        alignItems: 'center',
                        marginTop: SIZES.padding * 7,
                        borderRadius: SIZES.radius,
                        backgroundColor: COLORS.primary
                    }}
                    onPress={() => navigation.replace("OnBoarding")}
                />

            </View>
        </View>
    )
}

export default AddImages
