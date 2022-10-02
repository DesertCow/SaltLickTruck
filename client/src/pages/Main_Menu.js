
import { useQuery } from '@apollo/client';
import { MainMenu_Q } from '../utils/queries';
import React, { useState } from "react";
import { Button } from 'react-bootstrap';

function Main_Menu() {

  //* Get Menu from Database
  var { data } = useQuery(MainMenu_Q)

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

  return (

    <div className="d-flex flex-column min-vh-100">

      <h1 className="homeTitle text-center pt-4"> Salt Lick BBQ</h1>
      <h1 className="text-center pt-4 menuTitle"> Main Menu</h1>
      <hr className="mt-2 mb-3" />
      <ul className="text-center m-4">
        <li className="mainMenuBtns m-4"><Button variant="light">{finalArray[0]}</Button>{' '}</li>
        <li className="mainMenuBtns m-4"><Button variant="light">{finalArray[1]}</Button>{' '}</li>
        <li className="mainMenuBtns m-4"><Button variant="light">{finalArray[2]}</Button>{' '}</li>
        <li className="mainMenuBtns m-4"><Button variant="light">{finalArray[3]}</Button>{' '}</li>
        <li className="mainMenuBtns m-4"><Button variant="light">{finalArray[4]}</Button>{' '}</li>
        <li className="mainMenuBtns m-4"><Button variant="light">{finalArray[5]}</Button>{' '}</li>
        <li className="mainMenuBtns m-4"><Button variant="light">{finalArray[6]}</Button>{' '}</li>
        <li className="mainMenuBtns m-4"><Button variant="light">{finalArray[7]}</Button>{' '}</li>
        <li className="mainMenuBtns m-4"><Button variant="light">{finalArray[8]}</Button>{' '}</li>
      </ul>


    </div>

  )

}

export default Main_Menu;