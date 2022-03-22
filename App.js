import AppLoading from "expo-app-loading";
import React, { useState } from "react";
import { Text, Image } from "react-native";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import { Asset, useAssets, useFonts } from "expo-asset";
//if we use useAssets and useFonts hooks, those codes are not needed anymore.
// const loadFonts = (fonts) => fonts.map((font) => Font.loadAsync(font));
// const loadImages = (images) =>
//   images.map((image) => {
//     if (typeof asset === "string") {
//       return Image.prefetch(image);
//     } else {
//       return Asset.loadAsync(image);
//     }
//   });

export default function App() {
  const [assets] = useAssets([require("./picture.png")]);
  const [loaded] = Font.useFonts(Ionicons.font);
  // const [ready, setReady] = useState(false);
  // const onFinish = () => setReady(true);
  // const startLoading = async () => {
  //   const fonts = loadFonts([Ionicons.font]);
  //   const images = loadImages([
  //     require("./picture.png"),
  //     "https://d33wubrfki0l68.cloudfront.net/b152eb4214943f96e83c4babde026b12221e68f1/a20c2/img/oss_logo.png",
  //   ]);
  //   await Promise.all([...fonts, ...images]);
  // };
  if (!assets || !loaded) {
    return (
      <AppLoading
      // startAsync={startLoading}
      // onFinish={onFinish}
      // onError={console.error}
      />
    );
  }
  return <Text>We are done loading!</Text>;
}
