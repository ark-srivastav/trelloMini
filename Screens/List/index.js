import { StatusBar } from "expo-status-bar"
import React, { useEffect, useState } from "react"
import { View, Text, Dimensions } from "react-native"
import { ScrollView } from "react-native-gesture-handler"
import { Loader } from "../../components"
import { keyName } from "../../Data"
import { getData, log, findLists, findCardsList } from "../../HelperTools"
import AddCard from "./components/AddCard"
import Card from "./components/Card"
import ListFunctions from "./ListFunctions"
export default List = ({ route, navigation }) => {
  // const { boardId, color, headerColor, title } = route.params
  // const [data, setData] = useState({})
  // const [loading, setLoading] = useState(true)
  // const [list, setList] = useState([])
  // const width = Dimensions.get("window").width * 0.75
  // const height = Dimensions.get("window").height * 0.25
  // useEffect(() => {
  //   abc()
  // }, [])
  // const abc = () => {
  //   navigation.setOptions({
  //     title: title,
  //     headerStyle: {
  //       backgroundColor: headerColor,
  //     },
  //   })
  //   getDataSet()
  // }
  // //get the data from cache
  // const getDataSet = async () => {
  //   try {
  //     let data = await getData(keyName)
  //     setData(data)
  //     setList(findLists(boardId, data))
  //     setLoading(false)
  //   } catch (error) {
  //     log("Error at Rendering Lists !!", error)
  //   }
  // }

  const {
    //parameters from Boards Screen
    color,
    headerColor,

    //state
    loading,
    list,

    //constants
    width,
    height,

    //functions
    listCard,
  } = ListFunctions(route, navigation)

  const listCompo = (each) => {
   // const  cardX = listCard(each)
    return (
      <View
        key={each.id + "cards"}
        style={{
          width: width,
          height: height,
          backgroundColor: "#fff",
          borderRadius: 5,
          marginHorizontal: 15,
          marginTop: 10,
        }}
      >
        <View
          style={{ position: "absolute", top: 0, padding: 10, width: width }}
        >
          <Text style={{ fontWeight: "bold", fontSize: 16 }}>{each.title}</Text>
        </View>
        <ScrollView>
          {/* {cardX &&
            cardX.map((each) => (
              <Card title={each.title} key={each.id + "ioio"} />
            ))} */}
        </ScrollView>
        <View
          style={{
            position: "absolute",
            bottom: 0,
            paddingVertical: 10,
            width: width,
            alignItems: "center",
          }}
        >
          <AddCard text={"+ Add Card"} />
        </View>
      </View>
    )
  }
  const addList = () => {
    return (
      <View
        key="addCard123"
        style={{
          width: width,
          minHeight: height / 10,
          maxHeight: height / 3,
          backgroundColor: "#fff",
          borderRadius: 5,
          marginHorizontal: 15,
          marginTop: 10,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <AddCard text={"Add List"} />
      </View>
    )
  }
  return (
    <View style={{ backgroundColor: color, flex: 1 }}>
      <StatusBar
        style="auto"
        barStyle="light-content"
        backgroundColor={headerColor}
      />
      {loading ? (
        <Loader />
      ) : (
        <ScrollView
          horizontal={true}
          pagingEnabled={true}
          disableIntervalMomentum={true}
          // just the twice of marginHorizontal of cards being populated
          snapToInterval={width + 30}
        >
          {list && list.map((each) => listCompo(each))}
          {addList()}
        </ScrollView>
      )}
    </View>
  )
}
