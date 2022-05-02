import React from 'react';
import {
    View,
    Image,
    TouchableOpacity,
    Text,
    StyleSheet,
    TouchableWithoutFeedback
} from "react-native";

import { createBottomTabNavigator, BottomTabBar } from '@react-navigation/bottom-tabs';
import { LinearGradient } from 'expo-linear-gradient'

import { HomeScreen, Profile, Assignments, Subjects, HomeMenu } from "../screens";
import { COLORS, FONTS, icons } from "../constants";

const Tab = createBottomTabNavigator();

// const TabBarCustomButton = ({ children, onPress }) => {
//     return (
//         <TouchableOpacity
//             style={{
//                 top: -30,
//                 justifyContent: 'center',
//                 alignItems: 'center',
//                 ...styles.shadow
//             }}
//             onPress={onPress}
//         >
//             <LinearGradient
//                 colors={[COLORS.primary, COLORS.secondary]}
//                 style={{
//                     width: 70,
//                     height: 70,
//                     borderRadius: 35
//                 }}
//             >
//                 {children}
//             </LinearGradient>
//         </TouchableOpacity>
//     )
// }


const Tabs = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                "tabBarShowLabel": false,
                "tabBarStyle": [
                    {
                        "display": "flex"
                    },
                    null
                ]
            }}
        >
            <Tab.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View
                            style={{
                                alignItems: 'center',
                                justifyContent: 'center',
                                paddingTop: 15
                            }}
                        >
                            <Image
                                source={icons.home}
                                resizeMode="contain"
                                style={{
                                    width: 30,
                                    height: 30,
                                    tintColor: focused ? COLORS.primary : COLORS.black
                                }}
                            />
                            <Text
                                style={{
                                    color: focused ? COLORS.primary : COLORS.black,
                                    fontSize: 12,
                                }}
                            >HomeScreen</Text>
                        </View>
                    )
                }}
            />
            <Tab.Screen
                name="Subjects"
                component={Subjects}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View
                            style={{
                                alignItems: 'center',
                                justifyContent: 'center',
                                paddingTop: 15
                            }}
                        >
                            <Image
                                source={icons.nutrition}
                                resizeMode="contain"
                                style={{
                                    width: 30,
                                    height: 30,
                                    tintColor: focused ? COLORS.primary : COLORS.black,
                                }}
                            />
                            <Text
                                style={{
                                    color: focused ? COLORS.primary : COLORS.black,
                                    fontSize: 12
                                }}
                            >Subjects</Text>
                        </View>
                    )
                }}
            />
            <Tab.Screen
                name="HomeMenu"
                component={HomeMenu}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View
                            style={{
                                alignItems: 'center',
                                justifyContent: 'center',
                                top: -30,
                                ...styles.shadow,
                                width: 70,
                                height: 70,
                                borderRadius: 35,
                                borderColor: COLORS.black,
                            }}
                            backgroundColor={COLORS.primary}
                        >
                            <Image
                                source={icons.code}
                                resizeMode="contain"
                                style={{
                                    width: 90,
                                    height: 90,
                                    tintColor: focused ? COLORS.white : COLORS.lightGray1
                                }}
                            />
                        </View>
                    ),
                }}
            />
            <Tab.Screen
                name="Assignments"
                component={Assignments}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View
                            style={{
                                alignItems: 'center',
                                justifyContent: 'center',
                                paddingTop: 15
                            }}
                        >
                            <Image
                                source={icons.training}
                                resizeMode="contain"
                                style={{
                                    width: 30,
                                    height: 30,
                                    tintColor: focused ? COLORS.primary : COLORS.black
                                }}
                            />
                            <Text
                                style={{
                                    color: focused ? COLORS.primary : COLORS.black,
                                    fontSize: 12
                                }}
                            >Assignments</Text>
                        </View>
                    )
                }}
            />
            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View
                            style={{
                                alignItems: 'center',
                                justifyContent: 'center',
                                paddingTop: 15
                            }}
                        >
                            <Image
                                source={icons.home}
                                resizeMode="contain"
                                style={{
                                    width: 30,
                                    height: 30,
                                    tintColor: focused ? COLORS.primary : COLORS.black
                                }}
                            />
                            <Text
                                style={{
                                    color: focused ? COLORS.primary : COLORS.black,
                                    fontSize: 12
                                }}
                            >Profile</Text>
                        </View>
                    )
                }}
            />
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    shadow: {
        shadowColor: COLORS.black,
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5
    }
})

export default Tabs;