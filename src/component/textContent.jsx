import React, { useRef } from "react";
import { useReducer } from "react";
import { initiate, reducer } from "./helpList";

export default function TextContent() {
  const inputValue = useRef("");
  const [state, dispatch] = useReducer(reducer, initiate);

  function checkHandler(index) {
    dispatch({ type: "CHECKED_ITEM", payload: { id: index } });
  }

  function deleteHandler(index) {
    dispatch({
      type: "DELETE_ITEM",
      payload: { delId: index },
    });
  }

  return (
    <>
      <div className="p-4 bg-gray-900 text-white min-h-screen">
        <input
          type="text"
          onChange={(e) => {
            inputValue.current = e.target.value;
            console.log(e.target.value);
          }}
          className="w-full p-2 mb-4 bg-gray-800 text-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter item"
        />

        <button
          className="w-full p-2 mb-4 text-white bg-blue-600 rounded-lg hover:bg-blue-500 disabled:bg-gray-700 disabled:cursor-not-allowed"
          disabled={state === ""}
          onClick={() => {
            dispatch({
              type: "ADD_ITEM",
              payload: { value: inputValue.current },
            });
          }}
        >
          Click Here
        </button>

        <div className="space-y-4">
          {state.map((item, index) => {
            if (item.content) {
              return (
                <div
                  key={item.id}
                  className="flex items-center justify-between p-4 bg-gray-800 border border-gray-700 rounded-lg"
                >
                  <input
                    type="checkbox"
                    onClick={() => checkHandler(item.id)}
                    className="form-checkbox h-5 w-5 text-blue-500"
                  />
                  <p className={`flex-1 px-4 text-sm ${item.checked ? "line-through text-gray-500" : "text-white"}`}>
                    {item.content}
                  </p>
                  <button
                    className="p-1 text-xs bg-red-600 text-white rounded hover:bg-red-500 transition duration-150"
                    onClick={() => deleteHandler(item.id)}
                  >
                    Delete
                  </button>
                </div>
              );
            }
            return null;
          })}
        </div>
      </div>
    </>
  );
}
