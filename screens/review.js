import React from "react"
import { View, Text, Image, StyleSheet, ImageBackground } from "react-native"
import { globalStyles, images } from "../styles/global"
import Card from "../shared/card"

export default function Review({ navigation }) {
  const rating = navigation.getParam("rating")
  return (
    <ImageBackground
      source={require("../assets/game_bg.png")}
      style={globalStyles.container}
    >
      <Card>
        <Text>{navigation.getParam("title")}</Text>
        <Text>{navigation.getParam("body")}</Text>
        <View style={styles.rating}>
          <Text>rating: </Text>
          <Image source={images.ratings[rating]} />
        </View>
      </Card>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  rating: {
    flexDirection: "row",
    justifyContent: "center",
    paddingTop: 16,
    marginTop: 16,
    borderTopWidth: 1,
    borderTopColor: "#eee",
  },
})
