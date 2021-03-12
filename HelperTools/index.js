import AsyncStorage from "@react-native-async-storage/async-storage"
import _ from "lodash"
import { keyName } from "../Data"
// store the data in cache
const log = (res) => {
  console.log("\n***************     ###########        ***********\n")
  console.log(...res)
  console.log("\n***************     ###########        ***********\n")
}
const storeData = async (key, value) => {
  try {
    const jsonValue = JSON.stringify(value)
    await AsyncStorage.setItem(key, jsonValue)
    // log(["saved successfully", key, value, jsonValue])
    // log(["key ", key])
    // log(["value ", value])
    // log(["jsonva  ", jsonValue])
    log("-- saved successfully")
  } catch (e) {
    log(e)
    // saving error
  }
}
// get the data from cache in JSON format
const getData = async (key) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key)
    log("--fetched successfully--")
    return jsonValue != null ? JSON.parse(jsonValue) : null
  } catch (e) {
    log(e)
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
const findCardsList = (ListId, data) => {
  try {
    let cardList =
      data && data.list && data.list.filter((each) => each.id === ListId)[0].cid
    let result = []
    result =
      cardList &&
      cardList.map(
        (eachCardId) =>
          data &&
          data.cards &&
          data.cards.filter((each) => each.id === eachCardId)[0]
      )
    return result
  } catch (err) {
    log(["Error in findCardsList", err, ListId, data])
  }
}

//give list of specific board in the order of listIds present in the board obj
const findLists = (boardId, data) => {
  let board =
    data && data.boards && data.boards.filter((each) => each.id === boardId)
  let listId = board[0].listId

  let result = []
  result =
    listId &&
    listId.map(
      (eachListId) =>
        data &&
        data.list &&
        data.list.filter((each) => each.id === eachListId)[0]
    )
  return result
}
//update the cid array and get new obj for list
//update the list array and get new data set
const deleteCard = async (card) => {
  try {
    let data = await getData(keyName)
    let tempdata = {}
    let listId = card.listId
    //get the original list obj from array of list in the data set
    let updatedListObj =
      data && data.list.filter((each) => each.id === listId)[0]
    // update the cid (card id) array of original list obj by filtering the target card id
    let updatedCid =
      updatedListObj &&
      updatedListObj.cid &&
      updatedListObj.cid.filter((each) => each !== card.id)
    // blast the original object and then update its cid property with new cid array
    updatedListObj = { ...updatedListObj, cid: updatedCid }

    //filter the list array
    let tempList =
      data && data.list && data.list.filter((each) => each.id !== listId)

    //append the tempList with updatedListObj ( data.list is an array of List objs )
    tempList.push(updatedListObj)
    // blast the original data and overwrite the list attribute with tempList
    tempdata = { ...data, list: tempList }

    await storeData(keyName, tempdata)
  } catch (err) {
    log(["Error at deleteCard func", err])
  }
}
const generateID = () => {
  return Date.now().toString(36) + Math.random().toString(36).substr(2)
}

export {
  storeData,
  getData,
  cloneIt,
  findBoardsList,
  findCardsList,
  log,
  findLists,
  deleteCard,
  generateID,
}
