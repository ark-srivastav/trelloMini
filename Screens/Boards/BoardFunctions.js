import { useEffect, useState } from "react"
import { getData, storeData, log } from "../../HelperTools"
import { data, keyName } from "../../Data"
export default BoardFunctions = (navigation) => {
  const [values, setValues] = useState({})
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    basicSetUp() // for test
  }, [])

  const basicSetUp = async () => {
    try {
      let savedData= await getData(keyName)
      if(savedData && Object.keys(savedData).length === 0 && savedData.constructor === Object){
        await storeData(keyName, data)
        savedData= data
      }
      setValues(savedData)
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
  }
  return {
    //states
    values,
    loading,

    //functions
    onPress,
  }
}
