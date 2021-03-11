import { StatusBar } from "expo-status-bar"
import React, { useEffect } from "react"
import { View, Text, Dimensions } from "react-native"
import { ScrollView } from "react-native-gesture-handler"
import { data } from "../../Data"
export default List = ({ route, navigation }) => {
  const { boardId, data } = route.params
  const ind = boardId - 1
  const width = Dimensions.get("window").width * 0.75
  const height = Dimensions.get("window").height * 0.25
  useEffect(() => {
    navigation.setOptions({
      title: data.boards[ind].title,
      headerStyle: {
        backgroundColor: data.boards[ind].headerColor,
      },
    })
  }, [])
  const listCompo = (each) => {
    return (
      <View
        key={each.id + "cards"}
        style={{
          width: width,
          height: height,
          backgroundColor: "#fff",
          borderRadius: 10,
          marginHorizontal: 15,
          marginTop: 20,
        }}
      ></View>
    )
  }
  const addList = () => {
    return (
      <View
        key="addCard123"
        style={{
          width: width,
          minHeight:height/10,
          maxHeight:height/3,
          backgroundColor: "#fff",
          borderRadius: 5,
          marginHorizontal: 15,
          marginTop: 10,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ color: "#9ae18a" }}>Add shit</Text>
      </View>
    )
  }
  return (
    <View style={{ backgroundColor: data.boards[ind].color, flex: 1 }}>
      <StatusBar
        style="auto"
        barStyle="light-content"
        backgroundColor={data.boards[ind].headerColor}
      />
      <ScrollView horizontal={true}>
        {data &&
          data.list &&
          data.list.map((each) => {
            if (each.boardId === boardId) {
              return listCompo(each)
            }
          })}
        {addList()}
      </ScrollView>
    </View>
  )
}
