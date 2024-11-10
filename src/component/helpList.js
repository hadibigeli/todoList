export const initiate = [
  {
    id: 0,
    content: "",
    doneFlag: false,
  },
];

export function reducer(state, action) {
  console.log(state);

  switch (action.type) {
    case "CHECKED_ITEM":
      {
        let newState = [...state];

        newState.map((item) => {
          if (item.id === action.payload.id) {
            item.doneFlag = true;
          } else {
            item.doneFlag = false;
          }
        });
        return newState;
      }
      break;

    case "ADD_ITEM":
      {
        let inputText = action.payload.value;
        let newState = [...state];
        if (inputText !== "") {
          const val = {
            id: Math.random().toString().substring(5),
            content: inputText,
            doneFlag: false,
          };
          newState.push(val);
          console.log(inputText);
          inputText = ''
        } 

        return newState;
      }

      break;

    case "DELETE_ITEM":
      {
        let newState = state.filter((item) => {
          if (item.id === action.payload.delId) {
            item = "";
          } else {
            return item;
          }
        });
        return newState;
      }
      break;

    default:
  }
}
