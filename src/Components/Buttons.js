import React from "react";
import Data from "./Data";

const Buttons = ({ filterItem, setItem, menuItems }) => {
  return (
    <>
      <div className="d-flex justify-content-center">
        {menuItems.map((Val, id) => {
          return (
            <button
              className="btn btn-secondary mx-2"
              onClick={() => filterItem(Val)}
              key={id}
            >
              {Val}
            </button>
          );
        })}
        <button
          className="btn btn-secondary"
          onClick={() => setItem(Data)}
        >
          Показать все
        </button>
      </div>
    </>
  );
};

export default Buttons;