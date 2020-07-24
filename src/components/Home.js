// src/components/Home.js

import React from "react";
import { Link } from "react-router-dom";

export default function Home() {

  return (
    <div className="home">
      <Link className="home-link" to="/nasaphoto" >See Nasa photo of the day!</Link>
    </div>
  );
}