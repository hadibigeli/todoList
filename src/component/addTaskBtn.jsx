import React from "react";
import { AddTask } from "../app/storeSlices/todoListSlice";
import { useSelector, useDispatch } from "react-redux";
import Task from "./task";

export default function AddTaskBtn() {
  const dispatch = useDispatch();
  const tasks = useSelector((store) => store.todoList.list);
  const currentTask = useSelector((store) => store.todoList.currentTask);

  return (
    <div className="p-4 bg-gray-900 min-h-screen text-white">
      <section
        className="w-full  bg-gray-800  flex flex-col 
      gap-4 rounded-lg overflow-auto shadow-inner"
      >
        {tasks.map((task, index) => {
          if (index > 0) {
            return (
              <div
                key={index}
                className="p-4 bg-gray-700 shadow rounded-lg flex items-center"
              >
                <Task
                  title={task.title}
                  time={task.time}
                  done={task.done}
                  id={index}
                />
              </div>
            );
          }
          return null;
        })}
      </section>
    </div>
  );
}
