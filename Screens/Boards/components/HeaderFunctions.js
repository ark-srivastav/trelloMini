import { useState } from "react"

// input expected here is 
// array of boards
// and 
// array of cards

// output ->
// array of boards 
// array of card of list 'abc'
export default HeaderFunctions = () => {
    //search bar requirements
  const [input, setInput] = useState("")
  const [result, setResult]= useState([])

  //to show search bar or not
  const [showSearch, setSearch]= useState(false)  

  const searchResult=(text)=>{
      
  }
  const onChangeText=(text)=>{
      setInput(text)
      searchResult(text)
  }
  return{
    //states
    input,
    result,
    showSearch,

    //functions
    onChangeText
  }
}
