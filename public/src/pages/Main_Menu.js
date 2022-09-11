

import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import axios from "axios";

import { mainMenuRoute, allUsersRoute } from "../utils/apiRoutes";



async function Main_Menu() {

  // const { data } = await axios.get(mainMenuRoute, {
  //   username,
  //   password,
  // });

  const response = await fetch(mainMenuRoute, {
    crossDomain: true,
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  });


  console.log("\n\nRESPONDSE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
  console.log(response)

  return (

    <div className="d-flex flex-column min-vh-100">

      <h1 className="homeTitle text-center pt-4"> Salt Lick BBQ</h1>
      <h1 className="text-center pt-4"> Main Menu!</h1>


    </div>

  )


}

export default Main_Menu;