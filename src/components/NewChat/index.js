import React, { useState } from "react";

import { ArrowBack } from "@material-ui/icons";

import "./style.css";

export default ({ chatList, user, show, setShow }) => {
  const [list, setList] = useState([
    {
      id: 123,
      avatar:
        "https://cdn5.f-cdn.com/contestentries/1021089/23429701/59140a21875fc_thumb900.jpg",
      name: "Caio Agiani",
    },
    {
      id: 1234,
      avatar:
        "https://cdn5.f-cdn.com/contestentries/1021089/23429701/59140a21875fc_thumb900.jpg",
      name: "Lukas Agiani",
    },
    {
      id: 12345,
      avatar:
        "https://cdn5.f-cdn.com/contestentries/1021089/23429701/59140a21875fc_thumb900.jpg",
      name: "Hygor Agiani",
    },
  ]);

  return (
    <div className="newChat" style={{ left: show ? 0 : "-415px" }}>
      <div className="newChat--head">
        <div onClick={() => setShow(false)} className="newChat--backbutton">
          <ArrowBack style={{ color: "#FFF" }} />
        </div>
        <div className="newChat--headtitle">Chat</div>
      </div>

      <div className="newChat--list">
        {list.map((item, key) => (
          <div className="newChat--item" key={key}>
            <img
              className="newChat--itemavatar"
              src={item.avatar}
              alt={item.name}
            />
            <div className="newChat--itemname">{item.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
