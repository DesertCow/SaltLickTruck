
import { useQuery } from '@apollo/client';
import { MainMenu_Q } from '../utils/queries';
import React, { useState } from "react";
import { Button } from 'react-bootstrap';

//* Component Import
// import Header from '../components/Header';
import MainMenu from '../components/MainMenu';
import MainFooter from '../components/Footer';

function Main_Menu() {



  //* Get Menu from Database
  var { loadingMenu, data } = useQuery(MainMenu_Q)
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
  finalArray[0] = dataArray[0].substring(2, dataArray[0].length - 1)
  finalArray[1] = String(dataArray[1]).substring(1, String(dataArray[1]).length - 1)
  finalArray[2] = String(dataArray[2]).substring(1, String(dataArray[2]).length - 1)
  finalArray[3] = String(dataArray[3]).substring(1, String(dataArray[3]).length - 1)
  finalArray[4] = String(dataArray[4]).substring(1, String(dataArray[4]).length - 1)
  finalArray[5] = String(dataArray[5]).substring(1, String(dataArray[5]).length - 1)
  finalArray[6] = String(dataArray[6]).substring(1, String(dataArray[6]).length - 1)
  finalArray[7] = String(dataArray[7]).substring(1, String(dataArray[7]).length - 1)
  finalArray[8] = String(dataArray[8]).substring(1, String(dataArray[8]).length - 3)

  // if (!user?.username) {
  if (false) {
    return (
      <h4 className="m-4 p-2">
        You need to be logged in to see this. Use the navigation links above to
        sign up or log in!
      </h4>
    );
  }

  //TODO: Add loading screen/color/icon
  if (loadingMenu) {
    return (

      <div className="m-4 p-2 container h-100">
        <div className="row h-100 justify-content-center align-items-center">
          <h className="col-12 justify-content-center">Loading... </h>
          <div class="spinner-border ml-auto justify-content-center" role="status" aria-hidden="true"></div>
        </div>

      </div>
    )

  }


  //TODO: Enable menu buttons to be dynamically generated depending on how many items in Database
  //TODO: Instead of the hard coding below...
  return (
    <div>

      <div className="d-flex flex-column min-vh-100">
        <MainMenu finalArray={finalArray} />
      </div>

      <footer className="mt-auto mb-0">
        <MainFooter />
      </footer>

    </div>



  )

}

export default Main_Menu;