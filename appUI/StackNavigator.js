import React from 'react'
import { View, Text } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import Profile from './screens/Profile';
import LoginScreen from './screens/LoginScreen';
import Subjects from './screens/Subjects';
import Assignments from './screens/Assignments';
import HomeMenu from './screens/HomeMenu';
import SignIn from './screens/SingIn';
import ForgotPassword from './screens/ForgotPassword';
import Otp from './screens/Otp';
import AddImages from './screens/AddImages';
import AddBodyFacts from './screens/AddBodyFacts';
import Goals from './screens/Goals';
import CrudScreen from './screens/CrudScreen';

import Tabs from "./navigation/Tabs"

const Stack = createNativeStackNavigator();

const StackNavigator = () => {

    const user = true;

    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            {user ? (
                <>
                <Stack.Screen name="SignIn" component={SignIn} />
                <Stack.Screen name="Home" component={HomeScreen} component={Tabs} />
                <Stack.Screen name="CrudScreen" component={CrudScreen} />
                    <Stack.Screen name="HomeMenu" component={HomeMenu} />
                    <Stack.Screen name="Profile" component={Profile} />
                    <Stack.Screen name="Subjects" component={Subjects} />
                    <Stack.Screen name="Assignments" component={Assignments} />
                    <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
                    <Stack.Screen name="Otp" component={Otp} />
                    <Stack.Screen name="AddImages" component={AddImages} />
                    <Stack.Screen name="AddBodyFacts" component={AddBodyFacts} />
                    <Stack.Screen name="Goals" component={Goals} />
                </>
            ) : (
                <Stack.Screen name="Login" component={LoginScreen} />
            )}
        </Stack.Navigator>
    );
};

export default StackNavigator
