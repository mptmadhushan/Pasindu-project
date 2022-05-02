import React from 'react';
import {
    View,
    Text,
    Image
} from 'react-native';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { WelcomeHeader, CategoryCard, VerticalImageCard } from "../components";

import { constants, images, SIZES, COLORS, FONTS, dummydata } from "../constants";

const AuthLayout2 = ({ title, subtitle, titleContainerStyle, children }
) => {
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
                <WelcomeHeader />

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
                        }} >
                        {subtitle}
                    </Text>
                </View>

                {/* Content */}
                {children}
            </KeyboardAwareScrollView >
        </View >
    )
}

export default AuthLayout2;