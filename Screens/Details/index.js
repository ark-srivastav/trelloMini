import { StatusBar } from "expo-status-bar"
import React from "react"
import { View, Text, TouchableOpacity , StyleSheet} from "react-native"
import DetailsFunction from "./DetailsFunction"

export default Details = ({ route, navigation }) => {
  const { card, deleteFunction } = DetailsFunction(navigation, route)
  // const { card } = route.params

  // takes card object
  const header = (card) => {
    return (
      <View style={{marginHorizontal:20}}>
        <Text style={styles.headerText}>{card.title}</Text>
        <View style={{ flexDirection: "row", marginTop:10 }}>
          <Text style={styles.bottomText}>{card.boardTitle}</Text>
          <Text style={styles.middleText}> in list </Text>
          <Text style={styles.bottomText}>{card.listTitle}</Text>
        </View>
      </View>
    )
  }

  const deleteOption = () => {
    return (
      <View>
        <View style={{ borderWidth: 0.3, borderColor: "#4E4E4E", marginVertical:20 }} />
        <TouchableOpacity onPress={deleteFunction} style={{marginHorizontal:20}}>
          <Text style={{ color: "red" }}>Delete this card...</Text>
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
      {deleteOption()}
    </View>
  )
}
const styles = StyleSheet.create({
  headerText: {
    fontWeight: "bold",
    fontSize: 20,
    color:"#080011"
  },
  bottomText: {
    fontWeight: "bold",
    fontStyle: "italic",
    color:"#080011",
    fontSize: 18,
  },
  middleText:{
    fontWeight: "bold",
    fontSize:18,
    marginHorizontal:5,
    color:"#080011"
  }
})
