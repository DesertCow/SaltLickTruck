
import { useQuery } from '@apollo/client';
import { MainMenu_Q } from '../utils/queries';
import { useNavigate } from "react-router-dom";
// import React, { useState } from "react";
// import { Button } from 'react-bootstrap';

//* Component Import
// import Header from '../components/Header';
import MainMenu from '../components/MainMenu';
// import SubMenu from '../components/SubMenu';
// import MainFooter from '../components/Footer';
import NavFooter from '../components/NavFooter';
import LoadingSplash from '../components/LoadingSplash';

import Auth from '../utils/auth';

function Main_Menu() {

  const navigate = useNavigate();

  //* Get Menu from Database
  var { loading, data } = useQuery(MainMenu_Q)
  // const { loadingUser, userData } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
  //   variables: { username: userParam },
  // });

  //* Extract Menu List from GraphQL Response (data)
  data = String(JSON.stringify(data))
  var dataArray = data.split(":")
  dataArray = String(dataArray[1])
  dataArray = dataArray.split(',')

  //* Massage Title data to get clean menu Titles
  // TODO: Must be a better way to pass data via GraphQL
  var finalArray = []

  dataArray.forEach(parseGraphQL)

  async function parseGraphQL(item) {
    await finalArray.push(String(item).substring(1, String(item).length - 1))
  }

  finalArray[0] = dataArray[0].substring(2, dataArray[0].length - 1)
  finalArray[finalArray.length - 1] = dataArray[finalArray.length - 1].substring(1, dataArray[finalArray.length - 1].length - 3)

  // if (!loading) {
  //   console.log("==================== Final Array ==================== ");
  //   console.log(finalArray)
  // }

  let login = Auth.getToken()

  // if (!user?.username) {
  // if (true) {
  if (login == null) {
    return (

      <div>
        <h1 className='mainMenuNotLogged text-center p-3'>You need to be logged in to see the live menu, please register or login.</h1>
        <div className="row px-5 py-3">
          <div className="homeMenuBtn mt-5 p-2 text-center" onClick={(event) => navigate("/login")}>Login</div>
        </div>
        <div className="row px-5 py-3">
          <div className="homeMenuBtn mt-5 p-2 text-center" onClick={(event) => navigate("/register")}>Register</div>
        </div>
      </div>
    );
  }

  if (loading) {

    return (
      <div>
        <LoadingSplash />

        <footer className="mt-5">
          {/* <MainFooter /> */}
          <NavFooter />
        </footer>
      </div>

    )

  }

  return (
    <div>

      <div className="d-flex flex-column min-vh-100">
        <MainMenu finalArray={finalArray} />
      </div>

      <footer className="mt-5">
        {/* <MainFooter /> */}
        <NavFooter />
      </footer>

    </div>



  )

}

export default Main_Menu;