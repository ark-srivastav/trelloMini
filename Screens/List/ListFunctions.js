import { useEffect, useState } from "react"
import { Dimensions } from "react-native"
import { keyName } from "../../Data"
import { getData, log, findLists, findCardsList } from "../../HelperTools"
export default ListFunctions = (route, navigation) => {
  const { boardId, color, headerColor, title } = route.params
  const [data, setData] = useState({})
  const [loading, setLoading] = useState(true)
  const [list, setList] = useState([])
  const width = Dimensions.get("window").width * 0.75
  const height = Dimensions.get("window").height * 0.25
  useEffect(() => {
    abc()
  }, [])
  const abc = () => {
    navigation.setOptions({
      title: title,
      headerStyle: {
        backgroundColor: headerColor,
      },
    })
    getDataSet()
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
    //  log([" list data !! ",findCardsList(list.id, data)])
    return findCardsList(list.id, data)
  }

  return {
    //parameters from Boards Screen
    color,
    headerColor,

    //state
    data,
    loading,
    list,

    //constants
    width,
    height,

    //functions
    listCard,
  }
}
