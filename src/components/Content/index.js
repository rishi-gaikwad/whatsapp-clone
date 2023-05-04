import React from "react";

import "./style.css";

export default () => {
  return (
    <div className="chatIntro">
      <img
        src="http://web.whatsapp.com/img/intro-connection-light_c98cc75f2aa905314d74375a975d2cf2.jpg"
        alt=""
      />
      <h1>WhatsApp</h1>
      <h2>
        Top To New Chat.
        <br />
        Para reduzir o uso de dados, conecte seu telefone a uma rede Wi-Fi.
      </h2>
    </div>
  );
};
