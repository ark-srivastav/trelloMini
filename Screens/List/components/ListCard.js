import React from "react"
import { View, ScrollView, StyleSheet, Text , TouchableOpacity} from "react-native"
import { findCardsList, log } from "../../../HelperTools"
import AddCard from "./AddCard"
import Card from "./Card"

export default ListCard = ({ list, width, height,maxHeight, listCard , goToDetails}) => {
  const styles = StyleSheet.create({
    container: {
      width: width,
      height: height,
      maxHeight:maxHeight,
      backgroundColor: "#fff",
      borderRadius: 5,
      marginHorizontal: 15,
      marginTop: 10,
    },
    title: {
      position: "absolute",
      top: 0,
      padding: 10,
      width: width,
    },
    titleText: {
      fontWeight: "bold",
      fontSize: 16,
    },
    bottomContainer: {
      position: "absolute",
      bottom: 0,
      paddingVertical: 10,
      width: width,
      alignItems: "center",
    },
  })

  const card = listCard(list)
  return (
    <View style={[styles.container, card && card.length>0 && {height: maxHeight}]}>
      <View style={styles.title}>
        <Text style={styles.titleText}>{list.title}</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator ={false} contentContainerStyle={{marginVertical:40}}>
        {card &&
          card.map((each) => 
          <Card title={each.title} onPress={()=>goToDetails(each)} key={each.id.toString() + "Card"} />
          )}
      </ScrollView>
      <View style={styles.bottomContainer}>
        <AddCard text={"+ Add Card"} />
      </View>
    </View>
  )
}
