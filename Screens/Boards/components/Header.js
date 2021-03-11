import React from "react"
import { View } from "react-native"
import { Input } from "../../../components"
import HeaderFunctions from "./HeaderFunctions"

export default Header = () => {
  const { input, showSearch, result, onChangeText } = HeaderFunctions()
  const title = () => {
    return (
      <View style={{ flexDirection: "row", justifyContent:"flex-end" }}>
        <Text>BOARDS</Text>
        
      </View>
    )
  }
  return (
    <View style={{ flexDirection: "row" }}>
      {showSearch ? (
        <Input value={input} onChangeText={onChangeText} />
      ) : (
        title()
      )}
    </View>
  )
}
