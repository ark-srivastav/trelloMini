const keyName = "data"
const data = {
  //move list index logic using listId index
  // position list done by listId array index postions
  boards: [
    { title: "Board 1", id: 1, listId: [2,1], color:"#423C2D", headerColor:"#30260f"},
    { title: "Board 2", id: 2, listId: [3] ,color:"#B45628",  headerColor:"#873e1c"},
    { title: "Board 3", id: 3, listId: [4] , color: "#5EBA7D",headerColor:"#1f9647" },
    { title: "Board 4", id: 4, listId: [] , color:"#234553", headerColor:"#1a353f"},
  ],
  //move card index logic using cid index
  list: [
    { title: "List One", id: 1, position: 1, boardId: 1, cid: ["l11", "l12", "l13", "l14"] },
    { title: "List Two", id: 2, position: 2, boardId: 1, cid: [] },
    { title: "List Three", id: 3, position: 3, boardId: 1, cid: [] },
    { title: "List Four", id: 4, position: 4, boardId: 1, cid: [] },
  ],
  cards: [
    {
      title: "card 1",
      id: "l11",
      boardId: 1,
      listId: 1,
      listTitle:"List One",
      boardTitle:"Board 1",
      //postion: 1,
    },
    {
      title: "card 2",
      id: "l12",
      boardId: 1,
      listId: 1,
      listTitle:"List One",
      boardTitle:"Board 1",
      // postion: 2,
    },
    {
      title: "card 3",
      id: "l13",
      boardId: 1,
      listId: 1,
      listTitle:"List One",
      boardTitle:"Board 1",
      //postion: 3,
    },
    {
      title: "card 4",
      id: "l14",
      boardId: 1,
      listId: 1,
      listTitle:"List One",
      boardTitle:"Board 1",
      //postion: 4,
    },
  ],
}
export { data, keyName }
