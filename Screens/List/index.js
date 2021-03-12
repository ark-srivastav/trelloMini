import { StatusBar } from "expo-status-bar"
import React from "react"
import { View } from "react-native"
import { ScrollView } from "react-native-gesture-handler"
import { Loader } from "../../components"
import AddList from "./components/AddList"
import ListCard from "./components/ListCard"
import ListFunctions from "./ListFunctions"
export default List = ({ route, navigation }) => {
  const {
    //parameters from Boards Screen
    color,
    headerColor,

    //state
    data,
    loading,
    list,
    value,

    //constants
    width,
    height,
    maxHeight,

    //functions
    listCard,
    onChangeText,
    goToDetails,
  } = ListFunctions(route, navigation)

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
          showsHorizontalScrollIndicator={false}
        >
          {list &&
            list.map((each) => (
              <ListCard
                list={each}
                width={width}
                height={height}
                maxHeight={maxHeight}
                listCard={listCard}
                data={data}
                key={each.id + "list"}
                value={value}
                onChangeText={onChangeText}
                goToDetails={goToDetails}
              />
            ))}
          <AddList
            height={height}
            width={width}
            value={value}
            onChangeText={onChangeText}
          />
        </ScrollView>
      )}
    </View>
  )
}
