import React, { useState, useMemo } from "react";
import api from "../../services/api";
import "./styles.css";
import Camera from "../../assets/camera.svg";

const New = ({ history }) => {
  const [thumbnail, setThumbnail] = useState(null);
  const [company, setCompany] = useState("");
  const [techs, setTechs] = useState("");
  const [price, setPrice] = useState("");

  const preview = useMemo(() => {
    return thumbnail ? URL.createObjectURL(thumbnail) : null;
  }, [thumbnail]);

  const handleSubmit = async e => {
    e.preventDefault();
    const user_id = localStorage.getItem("@id");
    const data = new FormData();

    data.append("thumbnail", thumbnail);
    data.append("company", company);
    data.append("techs", techs);
    data.append("price", price);

    await api.post("/spots", data, {
      headers: { user_id }
    });

    history.push("/dasboard");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label id="thumbnail" style={{ backgroundImage: `url(${preview})` }}>
        <input type="file" onChange={e => setThumbnail(e.target.files[0])} />
        <img src={Camera} alt="Camera" />
      </label>
      <label htmlFor="company">EMPRESA *</label>
      <input
        type="text"
        id="company"
        placeholder="Sua empresa incrivel"
        value={company}
        onChange={e => setCompany(e.target.value)}
      />
      <label htmlFor="techs">TECNOLOGIAS *</label>
      <input
        type="text"
        id="techs"
        placeholder="Quais tecnologias usam?"
        value={techs}
        onChange={e => setTechs(e.target.value)}
      />
      <label htmlFor="price">EMPRESA *</label>
      <input
        type="text"
        id="price"
        placeholder="Valor cobrado por dia?"
        value={price}
        onChange={e => setPrice(e.target.value)}
      />
      <button type="submit">CADASTRAR</button>
    </form>
  );
};

export default New;
