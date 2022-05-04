import React from 'react';
import {
    TouchableOpacity,
    Text,
    ImageBackground
} from 'react-native';

import { COLORS, FONTS, SIZES ,images} from "../constants";

const CategoryCard = ({ category, containerStyle ,data_type}) => {

    var outOff = 30;
    var value = 1;
    var result = (value * 100) / outOff;
    var result2 =((30 - 20) / 30) * 100;

    return (
        <TouchableOpacity>
            <ImageBackground
                source={category?.thumbnail|| images.bg_1}
                resizeMode="cover"
                style={{
                    height: '100%',
                    width: SIZES.width*0.9,
                    paddingVertical: SIZES.padding,
                    paddingHorizontal: SIZES.radius,
                    justifyContent: 'flex-end',
                    ...containerStyle
                }}
                imageStyle={{
                    borderRadius: SIZES.radius
                }}
            >
             <Text
                    style={{
                        color: COLORS.white,
                        ...FONTS.h2,
                    }}
                >
                    Subject: { data_type==='subjects'&& category?.subject}
                </Text>
                <Text
                    style={{
                        color: COLORS.white,
                        ...FONTS.h3,
                    }}
                >
                    {category?.title}
                </Text> 
               
                <Text
                    style={{
                        color: COLORS.white,
                        ...FONTS.h4,
                    }}
                >
                    Available days : {category?.available_days}
                </Text>
                <Text
                numberOfLines={6}
                    style={{
                        color: COLORS.white,
                        ...FONTS.h3,
                        marginTop: 10,
                        fontSize: 20,
                        color: COLORS.black
                    }}
                >
                    {!data_type==='subjects'&& category?.description}
                </Text>
                 <Text
                numberOfLines={6}
                    style={{
                        color: COLORS.white,
                        ...FONTS.h3,
                        marginTop: 10,
                        fontSize: 20,
                        color: COLORS.black
                    }}
                >
                   completed: {Math.round(result2)}%
                </Text>
            </ImageBackground>
        </TouchableOpacity>
    )
}

export default CategoryCard;