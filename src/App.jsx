import React from "react";
import { useState } from "react";

export default function App() {
  const [newItem, setnewItem] = useState("");
  const [itemLists, setItemLists] = useState([]);
  const [btnActive, setBtnActive] = useState(true);
  const [id, setId] = useState(0);

  const deleteItemsId = (id) => {
    const newArray = itemLists.filter((item) => item.id !== id);
    setItemLists(newArray);
  };

  const clickHandler = () => {
    setId(id + 1);
    const data = {
      id: id,
      content: newItem,
    };

    if (data.content !== "") setItemLists((oldlist) => [data, ...oldlist]);
  };

  return (
    <>
      <section
        className="container"
        style={{
          margin: "0 auto",
          border: "1px solid black",
          height: "auto",
          minHeight: " 500px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
          width: "auto",
          maxWidth: "400px",
          backgroundColor: "whitesmoke",
          boxShadow: "1px 2px 1px ",
        }}
      >
        <h1>Todo Lists</h1>

        <div
          className="inputContainer"
          style={{ display: "flex", flexDirection: "row", gap: "0.5em" }}
        >
          <input
            style={{
              width: "300px",
              height: "30px",
              borderRadius: "0.5em",
              border: "none",
            }}
            type="text"
            placeholder="todo list ..."
            onChange={(e) => {
              if (e.target.value) {
                setnewItem(e.target.value);
                setBtnActive(false);
              } else {
                setBtnActive(true);
              }
            }}
          />

          <button
            onClick={clickHandler}
            disabled={btnActive}
            style={{ width: "3rem", borderRadius: "0.4em" }}
          >
            Add
          </button>
        </div>

        <ul
          style={{
            minWidth: "350px",
            backgroundColor: "whitesmoke",
            borderRadius: '0.5rem',
            border:'none',
            display: "flex",
            flexDirection: "column",
            gap : '0.5em',
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          {itemLists.map((item) => {
            return (
              <>
                {
                  <li
                    style={{
                      textDecoration: "none",
                      height: "1.5em",
                      width: "320px",
                      listStyle: "none",
                      backgroundColor: "white",
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "0.5em",
                    }}
                    key={item.id}
                  >
                    <div
                      style={{
                        width: "300px",
                        height: "1.5em",
                        textAlign: "center",
                        borderColor:'transparent',
                        background:'white'
                      }}
                    >
                      {item.content}
                    </div>

                    <button
                      className="delete"
                      id={item.id}
                      style={{
                        backgroundColor: "whitesmoke",
                        border: 'none',
                        height: "100%",
                        borderRadius: "0.3rem",
                        boxShadow : '1px 1px 1px grey'
                      }}
                      onClick={() => deleteItemsId(item.id)}
                    >
                      delete
                    </button>
                  </li>
                }
              </>
            );
          })}
        </ul>
      </section>
    </>
  );
}
