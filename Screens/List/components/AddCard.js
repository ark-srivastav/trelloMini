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
    <>
      <Input
        value={value}
        onChangeText={onChangeText}
        placeholder={addCard ? "Card Name..." : "List Name..."}
        color={"#00cc00"}
        width={width}
      />
      <View
        style={{
          width: width / 2,
          justifyContent: "space-between",
          flexDirection: "row",
          alignItems: "center",
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
    </>
  ) : (
    <TouchableOpacity onPress={onAddPress}>
      <Text style={{ color: "#9ae18a", fontWeight: "bold" }}> {text} </Text>
    </TouchableOpacity>
  )
}
