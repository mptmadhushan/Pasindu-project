import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/core'
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    TextInput
} from 'react-native'

import { WelcomeHeader } from "../components";

import { constants, images, SIZES, COLORS, FONTS, icons } from "../constants";
import { AuthLayout, AuthLayout2 } from "../Authentication";
import {
    FormInput,
    CustomSwitch,
    TextButton
} from "../components";

const AddBodyFacts = () => {


    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);

    return (
        <AuthLayout2
            title="Getting Started"
            subtitle="Please fill below details!!"
            titleContainerStyle={{
                marginTop: 15
            }}
        >
            <FormInput
                label="Weight"
                keyboardType="default"
                autoCompleteType="email"
                placeholder="kg"
                onChange={(value) => {

                }}
            />

            <FormInput
                label="Fat"
                keyboardType="email-address"
                autoCompleteType="email"
                placeholder="%"
                onChange={(value) => {

                }}
            />

            <FormInput
                label="Neck"
                keyboardType="email-address"
                autoCompleteType="email"
                placeholder="cm"
                onChange={(value) => {

                }}
            />

            <FormInput
                label="Shoulder"
                keyboardType="email-address"
                autoCompleteType="email"
                placeholder="cm"
                onChange={(value) => {

                }}
            />

            <FormInput
                label="Chest"
                keyboardType="email-address"
                autoCompleteType="email"
                placeholder="cm"
                onChange={(value) => {

                }}
            />

            <FormInput
                label="Biceps"
                keyboardType="email-address"
                autoCompleteType="email"
                placeholder="cm"
                onChange={(value) => {

                }}
            />

            <TextButton
                label="Save"
                buttonContainerStyle={{
                    height: 55,
                    alignItems: 'center',
                    marginTop: 26,
                    borderRadius: SIZES.radius,
                    backgroundColor: COLORS.primary
                }}
                onPress={() => navigation.replace("AddImages")}
            />

        </AuthLayout2>

    )
}

export default AddBodyFacts
