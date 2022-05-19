import React, { useState } from "react";
import { TouchableOpacity, Text, Linking, ImageBackground } from "react-native";

import { COLORS, FONTS, SIZES, images } from "../constants";
import TextButton from "../components/TextButton";
import OpenPdf from "react-native-open-pdf";

const CategoryCard = ({
  category,
  containerStyle,
  data_type,
  moveToNextDay,
}) => {
  const [postponed, setPostponed] = useState(false);
  //get progress
  var progress = ((30 - category?.available_days) / 30) * 100;
  var progress2 = ((29 - category?.available_days) / 30) * 100;
  const nextDay = () => {
    setPostponed(true);
  };
  return (
    <TouchableOpacity>
      <ImageBackground
        source={category?.thumbnail || images.bg_1}
        resizeMode="cover"
        style={{
          height: "100%",
          width: SIZES.width * 0.9,
          paddingVertical: SIZES.padding,
          paddingHorizontal: SIZES.radius,
          justifyContent: "flex-end",
          ...containerStyle,
        }}
        imageStyle={{
          borderRadius: SIZES.radius,
        }}
      >
        <Text
          style={{
            color: COLORS.white,
            ...FONTS.h3,
          }}
        >
          {data_type === "home" && `Subject: ${category?.subject}`}
        </Text>
        <Text
          style={{
            color: COLORS.white,
            ...FONTS.h4,
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
          Available days :{" "}
          {data_type === "moved"
            ? category?.available_days - 1
            : category?.available_days}
        </Text>
        <Text
          numberOfLines={3}
          style={{
            color: COLORS.white,
            ...FONTS.body5,
            marginTop: 10,

            color: COLORS.black,
          }}
        >
          {data_type === "moved" && category?.description}
        </Text>
        <Text
          numberOfLines={6}
          style={{
            color: COLORS.white,
            ...FONTS.h4,
            marginTop: 10,
            fontSize: 20,
            color: COLORS.black,
          }}
        >
          completed:{" "}
          {data_type === "moved" ? Math.round(progress) : Math.round(progress2)}
          %
        </Text>

        {data_type === "home" && (
          <TextButton
            label="Move to next day"
            buttonContainerStyle={{
              height: 25,
              alignItems: "center",
              borderRadius: SIZES.radius,
              backgroundColor: COLORS.primary,
            }}
            labelStyle={{
              color: COLORS.white,
              ...FONTS.body4,
            }}
            onPress={() => moveToNextDay("hey")}
          />
        )}
        {data_type === "home" && (
          <TextButton
            label="Download Pdf"
            buttonContainerStyle={{
              height: 30,
              alignItems: "center",
              marginTop: 4,
              borderRadius: SIZES.radius,
              backgroundColor: COLORS.primary,
            }}
            labelStyle={{
              color: COLORS.white,
              ...FONTS.body4,
            }}
            onPress={
              () =>
                OpenPdf.open(
                  "https://word-extraction.herokuapp.com/" + category.file
                )
              // Linking.canOpenURL('https://word-extraction.herokuapp.com/'+category.file).then((supported) => {
              // 	if (supported) {
              // 		Linking.openURL('https://word-extraction.herokuapp.com/'+category.file);
              // 	} else {
              // 		console.log("Don't know how to open URI: " + category.file);
              // 	}
              // })
            }
          />
        )}
        {data_type === "moved" && (
          <TextButton
            label="Time doubled"
            buttonContainerStyle={{
              height: 35,
              alignItems: "center",
              marginTop: 5,
              borderRadius: SIZES.radius,
              backgroundColor: COLORS.primary,
            }}
            labelStyle={{
              color: COLORS.white,
              ...FONTS.body4,
            }}
          />
        )}
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default CategoryCard;
