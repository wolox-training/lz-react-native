import React from "react";
import "./styles.css";
import { MARCAR_COMO_LEIDO } from "./strings";

const Notification = ({ show, notification, markAsRead }) => (
  <div className={`${show}_notification`}>
    <button type="button" className="mark_notif" onClick={markAsRead}>
      {MARCAR_COMO_LEIDO}
    </button>
    {notification.map(elem => (
      <div key={elem.id} className="notification">
        <h1>{elem.reason}</h1>
        <h1>{elem.body}</h1>
        <h1>{elem.created_at}</h1>
      </div>
    ))}
  </div>
);

export default Notification;
