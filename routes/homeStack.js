import React from "react"
import { createStackNavigator } from "react-navigation-stack"
import Home from "../screens/home"
import Review from "../screens/review"
import Header from "../shared/header"

const screens = {
  Home: {
    screen: Home,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => (
          <Header navigation={navigation} title="Game Review" />
        ),
      }
    },
  },
  Review: {
    screen: Review,
    navigationOptions: {
      title: "Review Details",
    },
  },
}

const HomeStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerStyle: { backgroundColor: "#ddd" },
    headerTintColor: "#444",
  },
})

export default HomeStack
