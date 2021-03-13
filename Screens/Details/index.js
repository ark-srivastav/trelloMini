import { StatusBar } from "expo-status-bar"
import React from "react"
import { View, Text, Alert, TouchableOpacity } from "react-native"
import { log, deleteCard } from "../../HelperTools"

export default Details = ({ route, navigation }) => {
  const { card } = route.params

  // takes card object
  const header = (card) => {
    return (
      <View>
        <Text>{card.title}</Text>
        <View style={{ flexDirection: "row" }}>
          <Text>{card.boardTitle}</Text>
          <Text> in list </Text>
          <Text>{card.listTitle}</Text>
        </View>
      </View>
    )
  }

  const deleteConfirm = () => {
    return Alert.alert(
      "Delete Card",
      "All actions will be removed from the activity feed. There is no undo",
      [
        {
          text: "Cancel",
          onPress: () => log("Cancel Pressed"),
          style: "cancel",
        },
        {
          text: "Yes, delete",
          onPress: () => {
            log("OK Pressed")
            deleteCard(card)
            navigation.navigate("Boards")
          },
        },
      ],
      { cancelable: true }
    )
  }
  const del = () => {
    return (
      <View>
        <TouchableOpacity onPress={deleteConfirm}>
          <Text style={{ color: "red" }}>Delete</Text>
        </TouchableOpacity>
      </View>
    )
  }
  return (
    <View style={{ backgroundColor: "#fff", flex: 1 }}>
      <StatusBar
        style="auto"
        barStyle="light-content"
        backgroundColor={"#fff"}
      />
      {header(card)}
      {del()}
    </View>
  )
}
