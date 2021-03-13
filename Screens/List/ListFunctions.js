import { useEffect, useState } from "react"
import { Dimensions } from "react-native"
import { keyName } from "../../Data"
import {
  getData,
  log,
  findLists,
  findCardsList,
  addCard,
} from "../../HelperTools"
export default ListFunctions = (route, navigation) => {
  const { boardId, color, headerColor, title } = route.params
  const [data, setData] = useState({})
  const [loading, setLoading] = useState(true)
  const [showInput, setShow] = useState(false)
  const [list, setList] = useState([])
  const [value, setValue] = useState("")
  const width = Dimensions.get("window").width * 0.75
  const height = Dimensions.get("window").height * 0.25
  const [maxHeight, setMaxHeight] = useState(
    Dimensions.get("window").height * 0.7
  )
  useEffect(() => {
    basicSet()
  }, [])
  //set the title and color of header and also fetch values from cache
  const basicSet = () => {
    navigation.setOptions({
      title: title,
      headerStyle: {
        backgroundColor: headerColor,
      },
    })
    getDataSet()
  }
  //user input for list or card
  const onChangeText = (text) => {
    setValue(text)
  }
  const onCancelPress = () => {
    setValue("")
    setShow((prevState) => !prevState)
    setMaxHeight((prevState) => prevState * 1.333)
  }
  const onSavePress = (list) => {
    setShow((prevState) => !prevState)
    setMaxHeight((prevState) => prevState * 1.333)
    list && addCard(list.boardTitle, list.boardId, list.id, list.title, value)
    navigation.navigate("Boards")
  }

  //trigger display of Input and other components to enter card/list
  const onAddPress = () => {
    setShow((prevState) => !prevState)
    setMaxHeight((prevState) => prevState * 0.75)
  }

  //get the data from cache
  const getDataSet = async () => {
    try {
      let data = await getData(keyName)
      setData(data)
      setList(findLists(boardId, data))
      setLoading(false)
    } catch (error) {
      log("Error at Rendering Lists !!", error)
    }
  }
  // returns array of cards present in the List
  const listCard = (list) => {
    return findCardsList(list.id, data)
  }

  //to show details of a card of a list
  const goToDetails = (card) => {
    navigation.navigate("Details", {
      card: card,
    })
  }

  return {
    //parameters from Boards Screen
    color,
    headerColor,

    //state
    data,
    loading,
    list,
    //for input purpose states
    value,
    showInput,

    //constants
    width,
    height,
    maxHeight,

    //functions
    listCard,
    onChangeText,
    goToDetails,
    onAddPress,
    onCancelPress,
    onSavePress,
  }
}
