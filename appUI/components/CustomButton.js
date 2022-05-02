import React from 'react';
import {
    View,
    Text,
    TouchableOpacity
} from 'react-native';

import { COLORS } from "../constants";

import LinearGradient from "react-native-linear-gradient";


const CustomButton = ({ buttonText, buttonContainerStyle, colors, onPress }) => {

    if (colors > 0) {
        return (
            <TouchableOpacity
                onPress={onPress}
            >
                <LinearGradient
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                    colors={colors}
                    style={{
                        ...buttonContainerStyle,
                    }}
                >
                    <Text
                        style={{
                            textAlign: 'center',
                            color: COLORS.white
                        }}
                    >
                        {buttonText}
                    </Text>
                </LinearGradient>
            </TouchableOpacity>
        )
    } else {
        return (
            <TouchableOpacity
                onPress={onPress}
            >
                <Text
                    style={{
                        textAlign: 'center',
                        color: COLORS.white
                    }}
                >
                    {buttonText}
                </Text>
            </TouchableOpacity>
        )
    }
}

export default CustomButton;
