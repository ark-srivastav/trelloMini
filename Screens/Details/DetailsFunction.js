import { Alert } from "react-native"
import { log , deleteCard} from "../../HelperTools"

export default DetailsFunction = (navigation, route) => {
  const { card } = route.params
  const deleteFunction = () => {
    return Alert.alert(
      "Delete Card",
      "All actions will be removed from the activity feed. There is no undo",
      [
        {
          text: "Cancel",
          onPress: () => log("Cancel Pressed"),
          style: "cancel",
        },
        {
          text: "Yes, delete",
          onPress: () => {
            log("OK Pressed")
            deleteCard(card)
            navigation.navigate("Boards")
          },
        },
      ],
      { cancelable: true }
    )
  }
  return {
    //object
    card,
    //function
    deleteFunction,
  }
}
