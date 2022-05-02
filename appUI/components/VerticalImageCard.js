import React from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity
} from 'react-native'

import { SIZES, COLORS, FONTS, icons } from "../constants";

const VerticalImageCard = ({ containerStyle, course }) => {
    return (
        <TouchableOpacity
            style={{
                width: 103,
                ...containerStyle
            }}
        >
            {/* Thumbnail */}
            <Image
                source={course.thumbnail}
                resizeMode="cover"
                style={{
                    width: "100%",
                    height: 125,
                    marginBottom: SIZES.radius,
                    borderRadius: SIZES.radius,
                }}
            />
            <View
                style={{
                    flexShrink: 1,
                    paddingHorizontal: SIZES.radius,
                }}
            >
                <Text
                    style={{
                        flex: 1,
                        ...FONTS.h3,
                        fontSize: 15,
                        marginLeft: 17,
                    }}
                >
                    {course.title}
                </Text>
            </View>

        </TouchableOpacity>
    )
}

export default VerticalImageCard;