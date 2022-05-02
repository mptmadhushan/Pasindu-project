import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/core'
import {
    View,
    Text,
    TouchableOpacity,
    Image
} from 'react-native'
import { FONTS, COLORS, SIZES, images } from '../constants';


const WelcomeHeader = ({ onPress }) => {

    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);

    return (
        <View
            style={{
                flexDirection: 'row',
                marginTop: 40,
                marginBottom: 10,
                paddingHorizontal: SIZES.padding,
                alignItems: 'center'
            }}
        >
            {/* Greetings */}
            <View
                style={{
                    flex: 1,
                }}
            >
                <Text
                    style={{
                        ...FONTS.h2
                    }}
                >Welcome!!</Text>
                <Text
                    style={{
                        color: COLORS.darkGray2,
                        ...FONTS.h3
                    }}
                >John Doe</Text>
            </View>
            {/* Avatar */}
            <TouchableOpacity>
                <Image
                    source={images.profileimage}
                    resizeMode="contain"
                    style={{
                        width: 60,
                        height: 60,
                        borderRadius: SIZES.padding,
                    }}
                    onPress={() => navigation.navigate("Profile")}
                />
            </TouchableOpacity>
        </View>
    )
}

export default WelcomeHeader;
