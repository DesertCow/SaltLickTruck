
import { useQuery } from '@apollo/client';
import { MainMenu_Q } from '../utils/queries';
import React, { useState } from "react";
import { Button } from 'react-bootstrap';

function Main_Menu() {

  // const { data } = await axios.get(mainMenuRoute, {
  //   username,
  //   password,
  // });

  const [values, setValues] = useState({ email: "", password: "", accessToken: "VOID" });

  // const response = await fetch(mainMenuRoute, {
  //   crossDomain: true,
  //   method: 'GET',
  //   headers: { 'Content-Type': 'application/json' },
  // });

  var { login, data } = useQuery(MainMenu_Q)

  // console.log("\n\nRESPONDSE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
  // console.log(response)

  console.log("\n\n=========== Login ===========")
  console.log(login)
  console.log("=========== DATA ===========")
  var finalData = String(JSON.stringify(data))
  var dataArray = finalData.split(":")
  dataArray = String(dataArray[1])
  var dataArray2 = dataArray.split(',')
  // dataArray = dataArray.split(" ")
  // console.log(finalData.length)
  // var dataArray2 = dataArray.split("}")
  // console.log(JSON.parse(dataArray[0]))
  console.log("=========== Final ===========")
  // console.log(dataArray2[0].substring(2))

  //* Cleanup Data
  // TODO: Must be a better way to pass data via GraphQL
  var finalArray = []
  finalArray[0] = dataArray2[0].substring(2, dataArray2[0].length - 1)
  // finalArray[1] = String(dataArray2[1].substring(1, dataArray2[1].length - 1))
  // finalArray[2] = String(dataArray2[2].substring(1, dataArray2[2].length - 1))
  // finalArray[3] = String(dataArray2[3].substring(1, dataArray2[3].length - 1))
  // finalArray[4] = String(dataArray2[4].substring(1, dataArray2[4].length - 1))
  // finalArray[5] = String(dataArray2[5].substring(1, dataArray2[5].length - 1))
  // finalArray[6] = String(dataArray2[6].substring(1, dataArray2[6].length - 1))
  // finalArray[7] = String(dataArray2[7].substring(1, dataArray2[7].length - 1))
  // finalArray[8] = String(dataArray2[8].substring(1, dataArray2[8].length - 3))
  // finalArray[0] = String(dataArray2[0].split('"'))
  // finalArray[0] = String(temp)

  // dataArray2[0] = dataArray2[0].split('"')

  // for (let i = 0; i < data.length; i++) {
  //   console.log(data[i].category_name)
  // }

  return (

    <div className="d-flex flex-column min-vh-100">

      <h1 className="homeTitle text-center pt-4"> Salt Lick BBQ</h1>
      <h1 className="text-center pt-4 menuTitle"> Main Menu</h1>
      <hr className="mt-2 mb-3" />
      <ul className="text-center m-4">
        <li className="mainMenuBtns m-4"><Button variant="light">{finalArray[0]}</Button>{' '}</li>
        <li className="mainMenuBtns m-4"><Button variant="light">{dataArray2[1]}</Button>{' '}</li>
        <li className="mainMenuBtns m-4"><Button variant="light">{dataArray2[2]}</Button>{' '}</li>
        <li className="mainMenuBtns m-4"><Button variant="light">{dataArray2[3]}</Button>{' '}</li>
        <li className="mainMenuBtns m-4"><Button variant="light">{dataArray2[4]}</Button>{' '}</li>
        <li className="mainMenuBtns m-4"><Button variant="light">{dataArray2[5]}</Button>{' '}</li>
        <li className="mainMenuBtns m-4"><Button variant="light">{dataArray2[6]}</Button>{' '}</li>
        <li className="mainMenuBtns m-4"><Button variant="light">{dataArray2[7]}</Button>{' '}</li>
        <li className="mainMenuBtns m-4"><Button variant="light">{dataArray2[8]}</Button>{' '}</li>
      </ul>


    </div>

  )

}

export default Main_Menu;