import React, { useEffect, useState, Fragment } from "react";
import { Link } from "react-router-dom";
import api from "../../services/api";
import "./styles.css";

const Dashboard = () => {
  const [spots, setSpots] = useState([]);

  useEffect(() => {
    const loadSposts = async () => {
      const user_id = localStorage.getItem("@id");
      const response = await api.get("/dashboard", {
        headers: { user_id }
      });
      setSpots(response.data);
    };
    loadSposts();
  }, []);
  return (
    <Fragment>
      <ul className="spot-list">
        {spots.map(spot => (
          <li key={spot._id}>
            <header style={{ backgroundImage: `url(${spot.thumbnail_url})` }} />
            <strong>{spot.company}</strong>
            <span>{spot.price ? `R$ ${spot.price} por dia` : "GRATUITO"}</span>
          </li>
        ))}
      </ul>
      <Link to="/new">
        <button>Cadastrar novo spot</button>
      </Link>
    </Fragment>
  );
};

export default Dashboard;
