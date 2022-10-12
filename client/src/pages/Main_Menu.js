
import { useQuery } from '@apollo/client';
import { MainMenu_Q } from '../utils/queries';
import React, { useState } from "react";
import { Button } from 'react-bootstrap';

//* Component Import
// import Header from '../components/Header';
import MainMenu from '../components/MainMenu';
import SubMenu from '../components/SubMenu';
import MainFooter from '../components/Footer';
import LoadingSplash from '../components/LoadingSplash';

function Main_Menu() {



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

  // if (!user?.username) {
  if (false) {
    return (
      <h4 className="m-4 p-2">
        You need to be logged in to see this. Use the navigation links above to
        sign up or log in!
      </h4>
    );
  }

  if (loading) {

    return (
      <LoadingSplash />
    )

  }

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