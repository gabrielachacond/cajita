import React from "react";
import "./styles.css";
import backGround from "./img/overworld_bg.jpg";
import question from "./img/question.PNG";
import honguito from "./img/mushroom.png";
import flor from "./img/fire_flower.png";
import moneda from "./img/coin.png";

const array = [moneda, flor, honguito];

function handleClick(e) {
  console.log("Haz click para ver la imagen");
  return;
  const randomElement = array[Math.floor(Math.random() * array.length)];
}
/*aplicar el random para que muestre una imagen*/

export default function App() {
  return (
    <div className="App">
      <img
        onClick={this.handleClick}
        className="cajita"
        src={question}
        alt="cajita"
      />
      <img className="item" src={moneda} alt="item" />
      <img src={backGround} alt="backGround" />
    </div>
  );
}
