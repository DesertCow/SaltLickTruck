// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { loginRoute, registerRoute } from "../utils/apiRoutes";
import { useNavigate } from "react-router-dom";

function Home() {

  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    navigate("/Login");

  };

  const handleRegister = async (event) => {
    event.preventDefault();
    navigate("/Register");

  };

  const handleContact = async (event) => {
    event.preventDefault();
    navigate("/Contact");

  };

  const downloadPDF = async (event) => {
    event.preventDefault();
    // navigate("/Contact");
    console.log("Trigger PDF Download...");

  };

  const handleMainMenu = async (event) => {
    event.preventDefault();
    navigate("/Main_Menu");

  };

  return (
    <div className="d-flex flex-column min-vh-100">
      <h1 className="homeTitle text-center pt-4"> Salt Lick BBQ</h1>

      <div className="text-center">
        <img src={require("../img/Food_Truck_Icon.png")}
          className="homePageTruck"
          alt="Truck Logo" />
      </div>

      <div className="text-center homeMenu row d-flex align-items-center justify-content-center">
        <row className="row px-5 py-3">
          <button type="button" className="btn btn-primary" onClick={(event) => handleMainMenu(event)}>Order</button>
        </row>
        <row className="row px-5 py-3">
          {/* <form method="get" className="btn btn-primary" action="../img/Salt_Lick_Menu_DWood-PDF.pdf">
          <form method="get" className="btn btn-primary" onClick={(event) => downloadPDF(event)}>
            <button type="submit" className="btn btn-primary">PDF Menu</button>
          </form> */}
          <button type="button" className="btn btn-primary" onClick={(event) => downloadPDF(event)}>PDF Menu</button>
        </row>
        <row className="row px-5 py-3">
          <button type="button" className="btn btn-primary" onClick={(event) => handleLogin(event)}>Login</button>
        </row>
        <row className="row px-5 py-3">
          <button type="button" className="btn btn-primary" onClick={(event) => handleRegister(event)}>Sign Up</button>
        </row>
        <row className="row px-5 py-3">
          <button type="button" className="btn btn-primary" onClick={(event) => handleContact(event)}>Contact Information</button>
        </row>

      </div>

      {/* <footer class="footer align-items-center"> */}
      {/* <!-- Footer --> */}
      {/* <footer class="text-center text-lg-start bg-light text-muted"> */}
      <footer class="mt-auto mb-0">
        <ul class="pb-1 text-center">
          <li>
            <p>Made by 🌵 Desert-Cow 🐄</p>
          </li>
          <li>
            <p>© 2022 Monkey See Monkey Do LLC.</p>
          </li>
        </ul>
      </footer>

    </div>
  );

}

export default Home;