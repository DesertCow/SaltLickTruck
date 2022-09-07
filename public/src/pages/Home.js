import React, { useState, useEffect } from "react";
import axios from "axios";
// import { loginRoute, registerRoute } from "../utils/apiRoutes";
import { useNavigate } from "react-router-dom";

function Home() {


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
          <button type="button" className="btn btn-primary">Order</button>
        </row>
        <row className="row px-5 py-3">
          <button type="button" className="btn btn-primary">PDF Menu</button>
        </row>
        <row className="row px-5 py-3">
          <button type="button" className="btn btn-primary">Login</button>
        </row>
        <row className="row px-5 py-3">
          <button type="button" className="btn btn-primary">Sign Up</button>
        </row>
        <row className="row px-5 py-3">
          <button type="button" className="btn btn-primary">Contact Information</button>
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