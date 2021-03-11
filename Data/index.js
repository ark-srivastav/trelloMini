const keyName = "data"
const data = {
  //move list index logic using listId index
  // position list done by listId array index postions
  boards: [
    { title: "b1", id: 1, listId: [1, 2], color:"#423C2D", headerColor:"#30260f"},
    { title: "b2", id: 2, listId: [2, 3] ,color:"#B45628",  headerColor:"#873e1c"},
    { title: "b3", id: 3, listId: [2, 4] , color: "#5EBA7D",headerColor:"#1f9647" },
    { title: "b4", id: 4, listId: [] , color:"#234553", headerColor:"#1a353f"},
  ],
  //move card index logic using cid index
  list: [
    { title: "l1", id: 1, position: 1, boardId: 1, cid: ["l11", "l12", "l13", "l14"] },
    { title: "l2", id: 2, position: 2, boardId: 1, cid: [] },
    { title: "l3", id: 3, position: 3, boardId: 1, cid: [] },
    { title: "l4", id: 4, position: 4, boardId: 1, cid: [] },
  ],
  cards: [
    {
      title: "c1",
      id: "l11",
      boardId: 1,
      listId: 1,
      listTitle:"l1",
      boardTitle:"b1",
      //postion: 1,
    },
    {
      title: "c2",
      id: "l12",
      boardId: 1,
      listId: 1,
      listTitle:"l1",
      boardTitle:"b1",
      // postion: 2,
    },
    {
      title: "c3",
      id: "l13",
      boardId: 1,
      listId: 1,
      listTitle:"l1",
      boardTitle:"b1",
      //postion: 3,
    },
    {
      title: "c4",
      id: "l14",
      boardId: 1,
      listId: 1,
      listTitle:"l1",
      boardTitle:"b1",
      //postion: 4,
    },
  ],
}
export { data, keyName }
