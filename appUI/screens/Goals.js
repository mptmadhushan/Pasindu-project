import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/core'
import {
    View,
    Text
} from 'react-native'

import { WelcomeHeader } from "../components";

import { constants, images, SIZES, COLORS, FONTS } from "../constants";

const Goals = () => {

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
                    marginTop: 19
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
            </View>
        </View>
    )
}

export default Goals
