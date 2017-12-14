import React, { Component } from "react";
import "./styles.css";
import { Link } from "react-router-dom";
import defaultImg from "../../assets/photos/default.png";

class Book_detail extends Component {
  render() {
    return (
      <div className="mainContainer">
        <Link className="back" to="/">
          {"<- Volver"}
        </Link>
        <div className="info">
          <img src={defaultImg} />
          <button className="rent_button" type="button">
            Alquilar
          </button>
        </div>
        <div className="suggest">
          <h1 className="topic">Sugerencias</h1>
        </div>
        <hr class="barrier" />
        <div className="comments">
          <h1 className="topic">Comentarios</h1>
          <form>
            <input type="text" className="input_comments" />
            <button className="send_button" type="button">
              Enviar
            </button>
          </form>
        </div>
        <hr class="barrier" />
      </div>
    );
  }
}

export default Book_detail;
