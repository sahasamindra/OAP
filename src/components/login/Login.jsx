import React from "react";
import style from "./Login.module.css";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className={style.body}>
      <div className={style.container}>
        <h1>Welcome to OAP</h1>
        <div className={style.greenBar}>Please Log In to continue</div>
        <input type="text" placeholder="E-mail/Mobile" />
        <input type="password" placeholder="Password" />
        <div className={style.forgot}>
          Forgot Password? <Link to="#">Click Here</Link>
        </div>
        <br />
        <button className={style.button} type="button">
          Login
        </button>
        <div className={style.forgot}>
          Please <Link to="/">Click Here</Link> to go back.
        </div>
      </div>
    </div>
  );
}
