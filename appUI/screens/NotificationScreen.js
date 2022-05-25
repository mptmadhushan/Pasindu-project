import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/core";
import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  ImageBackground,
  StyleSheet,
  Image,
  TextInput,
} from "react-native";

import { shadow } from "react-native-shadow-2";
import { FlatList } from "react-native-gesture-handler";
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";

import { WelcomeHeader, CategoryCard, VerticalImageCard } from "../components";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  constants,
  images,
  SIZES,
  COLORS,
  FONTS,
  dummydata,
} from "../constants";
import APIKit, { setClientToken } from "../helpers/apiKit";

const Item = ({ title, available_days }) => (
  <ImageBackground
    source={images.bg_2}
    resizeMode="cover"
    style={{
      height: SIZES.height * 0.1,
      width: SIZES.width * 0.9,
      padding: 5,
      margin: SIZES.width * 0.05,
      justifyContent: "flex-end",
    }}
    imageStyle={{
      borderRadius: SIZES.radius,
    }}
  >
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.title2}>Available Days: {available_days}</Text>
  </ImageBackground>
);
const HomeScreen = () => {
  const navigation = useNavigation();
  const [assignment, setAssignment] = React.useState("");
  const [user, setUser] = React.useState("");
  const [theArray, setTheArray] = React.useState("");
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
    getData();
  }, []);

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem("@storage_Key");
      console.log("🚀 HomeScreen.js", value);
      setClientToken(value);
      getAssignments();
      if (value !== null) {
        // value previously stored
      }
    } catch (e) {
      // error reading value
    }
  };

  const getAssignments = () => {
    const onSuccess = ({ data }) => {
      console.log("logged in", data.assignment_details.assignment_set);
      setAssignment(data.assignment_details.assignment_set);
    };

    const onFailure = (error) => {
      if (error.response) {
        // console.log(error.response.data);
        // Toast.showWithGravity(error.response.data.message, Toast.LONG, Toast.TOP);
        // console.log(error.response);
        // console.log(error.response.headers);
      }
      // this.setState({errors: error.response.data, isLoading: false});
    };

    // Show spinner when call is made

    APIKit.get("/assignment-scheddule/").then(onSuccess).catch(onFailure);
  };
  const scrollViewRef = React.useRef();
  const renderItem = ({ item }) => (
    <Item title={item.title} available_days={item.available_days} />
  );
  return (
    <View style={{ height: SIZES.height }}>
      <Animated.ScrollView>
        <View
          style={{
            marginTop: 5,
          }}
        >
          {/* Welcome Text */}
          <WelcomeHeader />
          <SafeAreaView style={styles.container}>
            <FlatList
              data={assignment}
              renderItem={renderItem}
              keyExtractor={(item) => item.id}
            />
          </SafeAreaView>
          {/* <View
            style={{
              marginTop: 10,
            }}
          >
            <View
              style={{ width: SIZES.width, height: SIZES.height * 0.8 }}
            >
              <FlatList
                data={assignment}
                numColumns={30}
                listKey="categories"
                keyExtractor={(item) => `categories-${item.id}`}
                contentContainerStyle={{
                  marginTop: SIZES.radius,
                }}
                renderItem={({ item, index }) => (
                  <View
                    style={{ width: SIZES.width * 0.8, backgroundColor: "red" }}
                  >
                    <Text>hi</Text>
                  </View>
                  // <CategoryCard
                  // 	moveToNextDay={(d) => {
                  // 		console.log('clicked', d);
                  // 		setTheArray((oldArray) => [ ...oldArray, item ]);
                  // 	}}
                  // 	data_type={'home'}
                  // 	category={item}
                  // 	containerStyle={{
                  // 		height: SIZES.height * 0.3,
                  // 		width: SIZES.width * 0.8,
                  // 		// width: (SIZES.width - SIZES.padding * 2 - SIZES.radius) / 2,
                  // 		marginLeft: (index + 1) % 2 == 0 ? SIZES.radius : SIZES.padding
                  // 	}}
                  // />
                )}
              />
            </View>
          </View>

          <Text
            style={{
              textAlign: "center",
              color: COLORS.lightOrange,
              ...FONTS.h2,
              paddingTop: 10,
            }}
          >
            {theArray && "Upcoming"}
          </Text> */}
        </View>
      </Animated.ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    backgroundColor: "#FF6600",
    padding: 20,
    marginVertical: 8,
    borderRadius: 5,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
    color: "#fff",
  },
  title2: {
    fontSize: 22,
    color: "#fff",
  },
});
export default HomeScreen;
