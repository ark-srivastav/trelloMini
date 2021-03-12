import React from "react"
import { ActivityIndicator, View , Text} from "react-native"

export default Loader = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems:"center" }}>
      <ActivityIndicator size="large" color="#00ff00"/>
    </View>
  )
}
