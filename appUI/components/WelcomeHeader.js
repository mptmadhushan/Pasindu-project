import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/core";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { FONTS, COLORS, SIZES, icons, images } from "../constants";
import AsyncStorage from "@react-native-async-storage/async-storage";

const WelcomeHeader = ({ onPress }) => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const removeValue = async () => {
    try {
      await AsyncStorage.removeItem("@MyApp_key");
      navigation.navigate("SignIn");
    } catch (e) {
      // remove error
    }

    console.log("Done.");
  };
  return (
    <View
      style={{
        flexDirection: "row",
        marginTop: 40,
        marginBottom: 10,
        paddingHorizontal: SIZES.padding,
        alignItems: "center",
      }}
    >
      {/* Greetings */}
      <View
        style={{
          flex: 1,
        }}
      >
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Home");
          }}
        >
          <Text
            style={{
              ...FONTS.h2,
            }}
          >
            Welcome!!
          </Text>
        </TouchableOpacity>
      </View>
      {/* Avatar */}
      <TouchableOpacity
        onPress={() => {
          removeValue();
        }}
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          alignSelf: "center",
        }}
      >
        <Text
          style={{
            ...FONTS.h4,
          }}
        >
          LogOut
        </Text>
        {/* <Image
					source={icons.cancel}
					resizeMode="contain"
					style={{
						width: 30,
						height: 30,
						borderRadius: SIZES.padding
					}}
					onPress={() => navigation.navigate('Profile')}
				/> */}
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("NotificationScreen");
        }}
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          alignSelf: "center",
        }}
      >
        <Image
          source={icons.bell}
          style={{
            height: 20,
            width: 20,
            marginLeft: 10,
            tintColor: COLORS.red,
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default WelcomeHeader;
