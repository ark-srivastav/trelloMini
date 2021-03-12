import AsyncStorage from "@react-native-async-storage/async-storage"
import _ from "lodash"
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
  try{
    let cardList= data && data.list && data.list.filter(each=> each.id===ListId)[0].cid
    let result=[]
    result= cardList && cardList.map(eachCardId=> data && data.cards && data.cards.filter(each=> each.id===eachCardId)[0])
    return result
  }
  catch(err){
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

export {
  storeData,
  getData,
  cloneIt,
  findBoardsList,
  findCardsList,
  log,
  findLists,
}
