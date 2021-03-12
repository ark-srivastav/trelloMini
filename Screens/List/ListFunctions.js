import { useEffect, useState } from "react"
import { Dimensions } from "react-native"
import { keyName } from "../../Data"
import { getData, log, findLists, findCardsList } from "../../HelperTools"
export default ListFunctions = (route, navigation) => {
  const { boardId, color, headerColor, title } = route.params
  const [data, setData] = useState({})
  const [loading, setLoading] = useState(true)
  const [list, setList] = useState([])
  const [value, setValue] = useState("")
  const width = Dimensions.get("window").width * 0.75
  const height = Dimensions.get("window").height * 0.25
  const maxHeight = Dimensions.get("window").height * 0.75
  useEffect(() => {
    basicSet()
  }, [])
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
    //for input purpose
    value,

    //constants
    width,
    height,
    maxHeight,

    //functions
    listCard,
    onChangeText,
    goToDetails,
  }
}
