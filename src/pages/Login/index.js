import React, { useState, Fragment } from "react";
import api from "../../services/api";
//import "./styles.css";

const Login = ({ history }) => {
  const [email, setEmail] = useState("");

  const handleSubmit = async e => {
    e.preventDefault();
    const response = await api.post("/sessions", {
      email: email
    });
    const { _id } = response.data;
    localStorage.setItem("@id", _id);
    history.push("/dashboard");
  };

  const handleChange = e => {
    setEmail(e.target.value);
  };

  return (
    <Fragment>
      <p>
        Ofereça <strong>spots </strong>para programadores e encontre
        <strong> talentos</strong> para sua empresa
      </p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">E-MAIL *</label>
        <input
          type="email"
          id="email"
          value={email}
          placeholder="Seu melhor e-mail"
          onChange={handleChange}
        />
        <button type="submit">Entar</button>
      </form>
    </Fragment>
  );
};
export default Login;
