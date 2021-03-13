import React from "react"
import { View, ScrollView, StyleSheet, Text } from "react-native"
import AddCard from "./AddCard"
import Card from "./Card"
// to render the list card
export default ListCard = ({
  list,
  width,
  height,
  maxHeight,
  listCard,
  goToDetails,
  value,
  showInput,
  onAddPress,
  onChangeText,
  onCancelPress,
  onSavePress,
}) => {
  const styles = StyleSheet.create({
    container: {
      width: width,
      height: height,
      maxHeight: maxHeight,
      backgroundColor: "#fff",
      borderRadius: 5,
      marginHorizontal: 15,
      marginTop: 10,
      flex:1,
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
    <View
      style={[
        styles.container,
        card && card.length > 0 && { height: maxHeight },
      ]}
    >
      <View style={styles.title}>
        <Text style={styles.titleText}>{list.title}</Text>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        nestedScrollEnabled={true}
        contentContainerStyle={{ marginVertical: 40 , backgroundColor: card.length > 0 ?"#e0e0e0":"#fff", flex:1}}
      >
        {card &&
          card.map((each) => (
            <Card
              title={each.title}
              onPress={() => !showInput? goToDetails(each):null}
              key={each.id.toString() + "Card"}
            />
          ))}
      </ScrollView>
      <View style={styles.bottomContainer}>
        <AddCard
          text={"+ Add Card"}
          width={width}
          addCard={true}
          value={value}
          showInput={showInput}
          onChangeText={onChangeText}
          onAddPress={onAddPress}
          onCancelPress={onCancelPress}
          onSavePress={onSavePress}
          list={list}
        />
      </View>
    </View>
  )
}
