import { useNavigation } from '@react-navigation/core'
import React, { useLayoutEffect } from 'react'
import {
    View,
    Text,
    Button,
    SafeAreaView,
    ImageBackground,
    TouchableOpacity,
    StatusBar,
    Image
} from 'react-native'

import LinearGradient from "react-native-linear-gradient";

import { images, COLORS, SIZES, FONTS } from "../constants";
import { TextButton } from "../components";

const LoginScreen = () => {
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);


    function renderHeader() {
        return (
            <View
                style={{
                    flex: 1,
                }}>
                <ImageBackground
                    source={images.loginBackground2}
                    style={{
                        flex: 1,
                        justifyContent: 'flex-end',
                    }}
                    resizeMode="cover"
                >
                    <Image
                        source={images.logo3}
                        resizeMode="contain"
                        style={{
                            width: SIZES.width * 0.9,
                            height: 400,
                            marginBottom: 330,
                            marginLeft: 20,
                        }}
                    />
                    <TextButton
                        label="GET STARTED"
                        buttonContainerStyle={{
                            height: 60,
                            width: 350,
                            marginBottom: 55,
                            marginLeft: 22,
                            borderRadius: 20,
                        }}
                        onPress={() => navigation.replace("Home")}
                    />
                </ImageBackground>
            </View>
        )
    }

    // function renderDetail() {
    //     return (
    //         // Button

    //         <View
    //             style={{
    //                 justifyContent: 'center',
    //             }}
    //         >
    //             {/* Header */}
    //             <CustomButton
    //                 buttonText="Get Started"
    //                 buttonContainerStyle={{
    //                     paddingVertical: 18,
    //                     borderRadius: 20,
    //                     margintop: 2,
    //                 }}
    //                 colors={[COLORS.darkGreen, COLORS.lime]}
    //                 onPress={() => { navigation.navigate("OnBoarding") }}
    //             />
    //         </View>
    //     )
    // }

    return (
        <View
            style={{
                flex: 1,
                backgroundColor: COLORS.black,
            }}
        >
            <StatusBar barStyle="light-content" />

            {/* Header */}
            {renderHeader()}

            {/* Detail */}
            {/* {renderDetail()} */}

        </View>
    );
}

export default LoginScreen;



