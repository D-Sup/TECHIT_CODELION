import React, { useState } from "react";

function MenuList(props) {
  const MenuListItem = ["좋아요!", "정말 좋아요!", "최고에요!", "미쳤어요!!"];

  let color = "";
  return (
    <ul className="container-list">
      {MenuListItem.map((e, index) => {
        if (props.mood === e) {
          color = "skyblue";
        } else {
          color = "";
        }
        return (
          <li key={index}>
            <button
              className="btn-item"
              onClick={() => {
                props.ItemClick(e);
              }}
              style={{ backgroundColor: color }}
            >
              기분이: {e}
            </button>
          </li>
        );
      })}
    </ul>
  );
}

export default MenuList;