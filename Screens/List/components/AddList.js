import React, { useState } from "react"
import { View } from "react-native"
import AddCard from "./AddCard"
export default AddList = ({ height, width , value, onChangeText }) => {
  const [showInput, setShow]=useState(false)
  return (
    <View
      key="addCard"
      style={{
        width: width,
        minHeight: height / 10,
        maxHeight: height / 3,
        backgroundColor: "#fff",
        borderRadius: 5,
        marginHorizontal: 15,
        marginTop: 10,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <AddCard text={"Add List"} />
    </View>
  )
}
