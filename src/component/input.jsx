import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNewTask, AddTask } from "../app/storeSlices/todoListSlice";

export default function Input() {
  const dispatch = useDispatch();
  const currentTask = useSelector((store) => store.todoList.currentTask);
  return (
    <>
      <div className="flex flex-row justify-center">
        <input
          type="text"
          className="w-96 h-8 ml-4 p-2 border border-gray-300 rounded-md
        focus:outline-none focus:border-blue-500"
          onChange={(e) => {
            dispatch(addNewTask(e.target.value));
          }}
        />

        <button
          disabled={!currentTask}
          className="w-20 h-8 mb-4 text-sm bg-yellow-500 ml-2
         text-gray-900 rounded-full font-semibold disabled:opacity-50
           hover:bg-yellow-400 transition duration-150"
          onClick={() => {
            console.log(currentTask);
            dispatch(AddTask());
          }}
        >
          Add
        </button>
      </div>
    </>
  );
}
