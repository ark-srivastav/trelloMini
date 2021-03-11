import AsyncStorage from "@react-native-async-storage/async-storage"
import _ from "lodash"
// store the data in cache
const storeData = async (key, value) => {
  try {
    const jsonValue = JSON.stringify(value)
    await AsyncStorage.setItem(key, jsonValue)
    console.log("-----------saved successfully------------")
  } catch (e) {
    // saving error
  }
}
// get the data from cache in JSON format
const getData = async (key) => {
  try {
    setValues(cloneIt(data))
    const jsonValue = await AsyncStorage.getItem(key)
    console.log("----------fetched successfully---------")
    return jsonValue != null ? JSON.parse(jsonValue) : null
  } catch (e) {
    // error reading value
  }
}
//shallow clone
const cloneIt = (source) => {
  return _.clone(source)
}

//gives list of boards
//input expected -> array of boards
const findBoardsList = (boardsData, input) => {
  let result = []
  result = boardsData.filter((each) => each.title.includes(input))
  return result
}
//gives list of cards
const findCardsList = (cardsData, input) => {
  let result = []
  result = cardsData.filter((each) => each.title.includes(input))
  return result
}

//give list of cards and their respective list

export { storeData, getData, cloneIt, findBoardsList, findCardsList }
