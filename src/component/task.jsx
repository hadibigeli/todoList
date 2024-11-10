import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  EditTask,
  DeleteTask,
  AddAfterEditTask,
  MoveUp,
  DoneTask,
  MoveDown,
  WriteEditTask,
} from "../app/storeSlices/todoListSlice";

export default function Task({ title = "", time = "", done = false, id = 0 }) {
  const dispatch = useDispatch();
  const [moveUpBtnActive, setMoveUpBtnActive] = useState(true);
  const [moveDownBtnActive, setMoveDownBtnActive] = useState(true);
  const tasks = useSelector((store) => store.todoList.list);

  return (
    <>
      <div
        className="w-full bg-gray-800 flex items-center sm:flex sm:flex-row lg:flex 2sm:flex-col
       justify-between gap-4 p-4 rounded-lg mb-3 shadow-lg  
          "
      >
        <div
          className="2sm:flex 2sm:flex-row 2sm:gap-2  sm:flex sm:flex-row lg:flex
         lg:flex-row"
        >
          <input
            checked={done}
            type="checkbox"
            className="form-checkbox h-5 w-5 text-blue-500"
            onClick={() => {
              dispatch(DoneTask(id));
              console.log(tasks[id].done);
            }}
          />
          {tasks[id].editFlag ? (
            <input
              className="w-96 h-8 bg-gray-700 text-white border
             border-gray-600 rounded-lg px-3 focus:outline-none focus:ring-2
              focus:ring-blue-500"
              type="text"
              onChange={(e) => {
                dispatch(WriteEditTask(e.target.value));
              }}
            />
          ) : (
            <span
              className={`text-white ${
                tasks[id].done ? "line-through text-gray-500" : ""
              }`}
            >
              {title}
            </span>
          )}
        </div>
        <span className="text-gray-400">{time}</span>
        <div
          className="w-full sm:w-[10em] flex items-center justify-center gap-2 sm:grid sm:grid-cols-2      
         lg:flex-row lg:flex lg:justify-center 2sm:flex-row
          2sm:justify-around "
        >
          <button
            className="w-20 self-center justify-center text-center sm:w-12 2sm:w-10 
             sm:m-1 sm:text-[0.5rem]  text-[0.7rem]  sm:justify-self-center
             bg-red-600 text-white rounded-lg 2sm:text-[0.3rem]
            px-3 py-1 2sm:px-1 2sm:py-1   -150"
            onClick={() => dispatch(DeleteTask())}
          >
            Delete
          </button>
          {!tasks[id].editFlag && (
            <button
              className="w-20 sm:w-12 2sm:w-10  sm:text-[0.5rem] 2sm:text-[0.3rem] sm:justify-self-center
               text-[0.7rem] bg-yellow-500 text-white rounded-lg px-3 py-1 2sm:px-1 
               2sm:py-1 -150"
              onClick={() => dispatch(EditTask({ id }))}
            >
              Edit
            </button>
          )}
          {tasks[id].editFlag && (
            <button
              className="w-20 sm:w-12 2sm:w-10  sm:text-[0.5rem] text-[0.7rem] sm:justify-self-center
               bg-green-600 text-white rounded-lg px-3 py-1
                2sm:px-1 2sm:py-1 -150 2sm:text-[0.3rem]"
              onClick={() => dispatch(AddAfterEditTask({ id }))}
            >
              Add
            </button>
          )}
          <button
            disabled={!moveUpBtnActive}
            className={`w-20 sm:w-12 2sm:w-10  sm:text-[0.5rem] text-[0.7rem] whitespace-nowrap sm:justify-self-center sm:whitespace-normal
               bg-gray-600 text-white  2sm:text-[0.3rem] rounded-lg px-3 py-1 2sm:px-1 2sm:py-1 -150 ${
                 !moveUpBtnActive ? "opacity-50 cursor-not-allowed" : ""
               }`}
            onClick={() => {
              if (id === 1) {
                setMoveUpBtnActive(!moveUpBtnActive);
              } else {
                dispatch(MoveUp({ id }));
              }
            }}
          >
            Up
          </button>
          <button
            disabled={!moveDownBtnActive}
            className={`w-20 sm:w-12 2sm:w-10  sm:text-[0.5rem] sm:whitespace-normal sm:justify-self-center
              text-[0.7rem] whitespace-nowrap bg-gray-600 2sm:text-[0.3rem] text-white rounded-lg px-3
               py-1 2sm:px-1 2sm:py-1 -150 ${
                 !moveDownBtnActive ? "opacity-50 cursor-not-allowed" : ""
               }`}
            onClick={() => {
              if (id === tasks.length - 1) {
                setMoveDownBtnActive(!moveDownBtnActive);
              } else {
                dispatch(MoveDown({ id }));
              }
            }}
          >
            Down
          </button>
        </div>
      </div>
    </>
  );
}
