import { useEffect, useState } from "react"
import { getData, storeData, log } from "../../HelperTools"
import { data, keyName } from "../../Data"
export default BoardFunctions = (navigation) => {
  const [values, setValues] = useState({})
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    saveToCache() // for test
  }, [])

  const saveToCache = async () => {
    try {
      await storeData(keyName, data)
      setValues(data)
      const pp = await getData(keyName)
      log(["data", pp])
      setLoading(false)
    } catch (error) {}
  }
  const onPress = (boardId, color, headerColor, title) => {
    navigation.navigate("List", {
      boardId: boardId,
      data: values,
      color: color,
      headerColor: headerColor,
      title: title,
    })
    log(["---- pressed -----", boardId])
  }
  return {
    //states
    values,
    loading,

    //functions
    onPress,
  }
}
