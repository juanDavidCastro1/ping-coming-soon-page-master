import "./App.css";
import logo from "./assets/logo.svg";
import illustrationDashboard from "./assets/illustration-dashboard.png";
import { useRef, useState } from "react";

function App() {
  const [isValidEmail, setIsValidEmail] = useState(true);

  const inputEmail = useRef();

  function validateEmail(e) {
    e.preventDefault();

    if (inputEmail.current.value === "") return;

    const re = /\S+@\S+\.\S+/;

    const isValidEmail = re.test(inputEmail.current.value);

    setIsValidEmail(isValidEmail);
  }

  return (
    <main className="ping">
      <img className="ping__logo" src={logo} alt="Logo Ping" />

      <h1 className="ping__title">
        We are launching <span className="ping__title-soon">soon!</span>
      </h1>

      <p className="ping__description">Subscribe and get notified</p>

      <div className="ping__input-container">
        <div
          className={`ping__input-field ${
            isValidEmail ? "" : "ping__input-field--error"
          }`}
        >
          <input
            className="ping__input"
            type="email"
            placeholder="Your email addres..."
            ref={inputEmail}
          />
        </div>
        {isValidEmail ? (
          ""
        ) : (
          <small className="ping__input--error">
            Please provide a valid emails addres
          </small>
        )}

        <button className="ping__button" onClick={validateEmail}>
          Notify Me
        </button>
      </div>

      <img
        className="ping__dashboard"
        src={illustrationDashboard}
        alt="Illustration Dashboard"
      />

      <footer className="footer">
        <div className="footer__icons">
          <span className="footer__icon">
            <i className="fa-brands fa-facebook-f"></i>
          </span>
          <span className="footer__icon">
            <i className="fa-brands fa-twitter"></i>
          </span>
          <span className="footer__icon">
            <i className="fa-brands fa-instagram"></i>
          </span>
        </div>
        <p className="footer__description">
          &copy; Copyright Ping. All rights reserved.
        </p>
      </footer>
    </main>
  );
}

export default App;
