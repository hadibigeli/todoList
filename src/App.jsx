import React from "react";
import Input from "./component/input";
import AddTaskBtn from "./component/addTaskBtn";

export default function App() {
  return (
    <>
      <div className="w-full bg-slate-900 pt-5 flex-col">
        <Input />
        <AddTaskBtn />
      </div>
    </>
  );
}
