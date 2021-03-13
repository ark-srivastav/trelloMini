import React from "react"
import { View, TouchableOpacity, Text } from "react-native"
import { Input } from "../../../components"
// Common Component present at bottom of listCards and used to add card or list
export default AddCard = ({
  text,
  showInput,
  value,
  onAddPress,
  onCancelPress,
  onSavePress,
  onChangeText,
  addCard,
  addList,
  width,
  list,
}) => {
  return addCard && showInput ? (
    <View style={{backgroundColor:"#fff", borderRadius:5, elevation:5,flex:1, width:width*0.6}}>
      <Input
        value={value}
        onChangeText={onChangeText}
        placeholder={addCard ? "Card Name..." : "List Name..."}
        color={"#00cc00"}
        width={width}
      />
      <View
        style={{
          flex:1,
          justifyContent: "space-between",
          flexDirection: "row",
          alignItems: "center",
          backgroundColor:"#fff",
          marginVertical:5,
          marginHorizontal:5
        }}
      >
        <TouchableOpacity
          disabled={!value.length}
          onPress={() => onSavePress(list)}
  
        >
          <Text
            style={{
              color: value.length > 0 ? "#57A63C" : "#6B7B89",
              fontSize: 12,
            }}
          >
            Save
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onCancelPress}>
          <Text style={{ color: "#47AFCD", fontSize: 12 }}>Cancel</Text>
        </TouchableOpacity>
      </View>
    </View>
  ) : (
    <TouchableOpacity onPress={onAddPress}>
      <Text style={{ color: "#9ae18a", fontWeight: "bold" }}> {text} </Text>
    </TouchableOpacity>
  )
}
