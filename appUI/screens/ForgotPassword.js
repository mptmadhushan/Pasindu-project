import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/core'
import {
    View,
    Text,
    TouchableOpacity,
    Image
} from 'react-native';

import { AuthLayout } from "../Authentication";
import { FONTS, SIZES, COLORS, icons } from "../constants";

import {
    FormInput,
    TextButton
} from "../components";
import { utils } from "../utils";

const ForgotPassword = () => {


    const [email, setEmail] = React.useState("")
    const [emailError, setEmailError] = React.useState("")

    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);

    function isEnableSendEmail() {
        return email != "" && emailError == ""
    }

    return (
        <AuthLayout
            title="Password Recovery"
            subtitle="Please enter your email address to recover you password"
            titleContainerStyle={{
                marginTop: -20,
            }}
        >
            {/* Form Input */}
            <View
                style={{
                    flex: 1,
                    marginTop: SIZES.padding * 2
                }}
            >
                <FormInput
                    label="Email"
                    keyboardType="email-address"
                    autoCompleteType="email"
                    onChange={(value) => {
                        // Validate email
                        utils.validateEmail(value, setEmailError)
                        setEmail(value);
                    }}
                    errorMsg={emailError}
                    appendComponent={
                        <View
                            style={{
                                justifyContent: 'center'
                            }}
                        >
                            <Image
                                source={email == "" || (email != "" && emailError == "")
                                    ? icons.correct : icons.cancel}
                                style={{
                                    height: 20,
                                    width: 20,
                                    tintColor: email == "" ?
                                        COLORS.gray : (email != "" && emailError == "")
                                            ? COLORS.green : COLORS.red
                                }}
                            />
                        </View>
                    }
                />
            </View>

            {/* Button */}
            <TextButton
                label="Send Email"
                disabled={isEnableSendEmail() ? false : true}
                buttonContainerStyle={{
                    height: 55,
                    alignItems: 'center',
                    marginBottom: 200,
                    borderRadius: SIZES.radius,
                    backgroundColor: isEnableSendEmail() ? COLORS.primary : COLORS.transparentPrimary
                }}
                onPress={() => navigation.navigate("Otp")}
            />

        </AuthLayout>
    )
}

export default ForgotPassword;