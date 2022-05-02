import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/core'
import {
    View,
    Text
} from 'react-native'

import { WelcomeHeader } from "../components";

import { constants, images, SIZES, COLORS, FONTS } from "../constants";

const HomeMenu = () => {

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
            </View>
        </View>
    )
}

export default HomeMenu
