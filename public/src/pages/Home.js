// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { loginRoute, registerRoute } from "../utils/apiRoutes";
import { useNavigate } from "react-router-dom";

function Home() {

  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    navigate("/login");

  };

  const handleRegister = async (event) => {
    event.preventDefault();
    navigate("/register");

  };

  const handleContact = async (event) => {
    event.preventDefault();
    navigate("/contact");

  };

  const downloadPDF = async (event) => {
    event.preventDefault();
    navigate("/pdf_menu_download");
    console.log("Trigger PDF Download...");

  };

  const handleMainMenu = async (event) => {
    event.preventDefault();
    navigate("/main_Menu");

  };

  return (
    <div className="d-flex flex-column min-vh-100">
      <h1 className="homeTitle text-center mt-5"> Salt Lick BBQ</h1>

      <div className="text-center">
        <img src={require("../img/Food_Truck_Icon.png")}
          className="homePageTruck"
          alt="Truck Logo" />
      </div>

      <div className="text-center homeMenu row d-flex align-items-center justify-content-center">
        <div className="row px-5 py-3">
          <button type="button" className="btn btn-primary" onClick={(event) => handleMainMenu(event)}>Order</button>
        </div>
        <div className="row px-5 py-3">
          {/* <form method="get" className="btn btn-primary" action="../img/Salt_Lick_Menu_DWood-PDF.pdf">
          <form method="get" className="btn btn-primary" onClick={(event) => downloadPDF(event)}>
            <button type="submit" className="btn btn-primary">PDF Menu</button>
          </form> */}
          <button type="button" className="btn btn-primary" onClick={(event) => downloadPDF(event)}>PDF Menu</button>
        </div>
        <div className="row px-5 py-3">
          <button type="button" className="btn btn-primary" onClick={(event) => handleLogin(event)}>Login</button>
        </div>
        <div className="row px-5 py-3">
          <button type="button" className="btn btn-primary" onClick={(event) => handleRegister(event)}>Sign Up</button>
        </div>
        <div className="row px-5 py-3">
          <button type="button" className="btn btn-primary" onClick={(event) => handleContact(event)}>Contact Information</button>
        </div>

      </div>

      {/* <footer class="footer align-items-center"> */}
      {/* <!-- Footer --> */}
      {/* <footer class="text-center text-lg-start bg-light text-muted"> */}
      <footer className="mt-auto mb-0">
        <ul className="pb-1 text-center">
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