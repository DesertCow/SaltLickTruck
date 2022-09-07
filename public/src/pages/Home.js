import React, { useState, useEffect } from "react";
import axios from "axios";
// import { loginRoute, registerRoute } from "../utils/apiRoutes";
import { useNavigate } from "react-router-dom";

function Home() {


  return (
    <div>
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


    </div>
  );

}

export default Home;