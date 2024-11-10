import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [{ title: "", done: false, time: Date(), editFlag: false }],
  currentTask: "",
  currentAfterEditTask: "",
};

export const todoListSlice = createSlice({
  name: "todoList",
  initialState,
  reducers: {
    EditTask: (state, action) => {
      state.list[action.payload.id].title = " ";
      state.list[action.payload.id].time = "";
      state.list[action.payload.id].editFlag = true;
    },
    addNewTask: (state, action) => {
      state.currentTask = action.payload;
      console.log(state.currentTask);
    },
    WriteEditTask: (state, action) => {
      state.currentAfterEditTask = action.payload;
    },
    AddAfterEditTask: (state, action) => {
      state.list[action.payload.id].title = state.currentAfterEditTask;
      state.list[action.payload.id].time = Date().toString();
      state.list[action.payload.id].done = false;
      state.list[action.payload.id].editFlag = false;
      state.currentAfterEditTask = "";
    },
    AddTask: (state) => {
      state.list.push({
        title: state.currentTask,
        done: false,
        time: Date().toString(),
      });
    },
    DeleteTask: (state, action) => {
      state.list.splice(action.payload, 1);
    },
    DoneTask: (state, action) => {
      state.list[action.payload].done = !state.list[action.payload].done;
      // test code
      if (state.list[action.payload].done === true) {
        const DoneTask = state.list[action.payload];
        state.list.splice(action.payload, 1);
        // DoneTask.done = true;
        state.list.push(DoneTask);
      }
    },
    MoveDown: (state, action) => {
      // alert(action.id)

      if (action.payload.id > state.list.length - 1) {
        return;
      } else {
        [state.list[action.payload.id], state.list[action.payload.id + 1]] = [
          state.list[action.payload.id + 1],
          state.list[action.payload.id],
        ];
      }
    },
    MoveUp: (state, action) => {
      if (action.payload.id < 1) {
        return;
      } else {
        [state.list[action.payload.id], state.list[action.payload.id - 1]] = [
          state.list[action.payload.id - 1],
          state.list[action.payload.id],
        ];
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  EditTask,
  AddTask,
  DeleteTask,
  DoneTask,
  addNewTask,
  AddAfterEditTask,
  MoveUp,
  MoveDown,
  WriteEditTask,
} = todoListSlice.actions;

export default todoListSlice.reducer;
