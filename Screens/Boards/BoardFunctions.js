import { useEffect, useState } from "react"
import { getData, storeData } from "../../HelperTools"
import { data, keyName } from "../../Data"
export default BoardFunctions = (navigation) => {
  const [values, setValues] = useState({})
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    basicSetUp() // for test
  }, [])

  // fetch the data from cache if already present
  // or fetch the dummy data present as JSON in the data folder then
  const basicSetUp = async () => {
    try {
      let savedData = await getData(keyName)
      if (
        !(
          savedData &&
          Object.keys(savedData).length === 0 &&
          savedData.constructor === Object
        )
      ) {
        await storeData(keyName, data)
        savedData = data
      }
      setValues(savedData)
      setLoading(false)
    } catch (error) {}
  }

  // move to List screen and pass params
  const onPress = (boardId, color, headerColor, title) => {
    navigation.navigate("List", {
      boardId: boardId,
      data: values,
      color: color,
      headerColor: headerColor,
      title: title,
    })
  }
  return {
    //states
    values,
    loading,

    //functions
    onPress,
  }
}
