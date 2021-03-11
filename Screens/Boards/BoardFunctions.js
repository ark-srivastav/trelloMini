import { useEffect, useState } from "react"
import { getData, storeData, cloneIt } from "../../HelperTools"
import { data, keyName } from "../../Data"
export default BoardFunctions = (filter) => {
  const [values, setValues] = useState({})
  const [loading, setLoading]=useState(true)
  useEffect(() => {
    console.log("start useEffect at bfunc")
    saveToCache() // for test
  }, [])

  const saveToCache = async () => {
    try {
      await storeData(keyName, data)
      await setValues(data)
      console.log(values,"-----------------data loaded")
      setLoading(false)
    } catch (error) {}
  }
  const onPress = (index) => {
    console.log("---- pressed -----", index)
    console.log("listIDs---->")
  }
  return {
    //states
    values,
    loading,

    //functions
    onPress,
  }
}
