
import { useQuery } from '@apollo/client';
import { SubMenu_Q } from '../utils/queries';
import React, { useState } from "react";
import { Button } from 'react-bootstrap';

//* Component Import
// import Header from '../components/Header';
import SubMenu from '../components/SubMenu';
import MainFooter from '../components/Footer';
import LoadingSplash from '../components/LoadingSplash';

// function Sub_Menu({ menuNumber }) {
function Sub_Menu() {

  // const { loadingUser, userData } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
  //   variables: { username: userParam },
  // });

  let menuNumber = 2

  console.log(menuNumber)

  return (
    <div>

      <div className="d-flex flex-column min-vh-100">
        <SubMenu menuNumber={menuNumber} />
      </div>

      <footer className="mt-auto mb-0">
        <MainFooter />
      </footer>

      <div>

      </div>

    </div>



  )

}

export default Sub_Menu;