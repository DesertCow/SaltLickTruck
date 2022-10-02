
import { useQuery } from '@apollo/client';
import { MainMenu_Q } from '../utils/queries';
import React, { useState } from "react";

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

  const { login, data } = useQuery(MainMenu_Q)

  // console.log("\n\nRESPONDSE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
  // console.log(response)

  console.log("\n\n=========== Login ===========")
  console.log(login)
  console.log("=========== DATA ===========")
  const finalData = String(JSON.stringify(data))
  var dataArray = finalData.split(":")
  dataArray = String(dataArray[1])
  var dataArray2 = dataArray.split(',')
  // dataArray = dataArray.split(" ")
  // console.log(finalData.length)
  // var dataArray2 = dataArray.split("}")
  // console.log(JSON.parse(dataArray[0]))
  console.log("=========== Final ===========")
  console.log(dataArray2[1])

  // dataArray2[0] = dataArray2[0].split('"')

  // for (let i = 0; i < data.length; i++) {
  //   console.log(data[i].category_name)
  // }

  return (

    <div className="d-flex flex-column min-vh-100">

      <h1 className="homeTitle text-center pt-4"> Salt Lick BBQ</h1>
      <h1 className="text-center pt-4"> Main Menu!</h1>
      <ul>
        <li>{dataArray2[0].split('"')}</li>
        <li>{dataArray2[1]}</li>
        <li>{dataArray2[2]}</li>
        <li>{dataArray2[3]}</li>
        <li>{dataArray2[4]}</li>
        <li>{dataArray2[5]}</li>
        <li>{dataArray2[6]}</li>
        <li>{dataArray2[8]}</li>
        <li>{dataArray2[9]}</li>
        <li>{dataArray2[10]}</li>
      </ul>


    </div>

  )

}

export default Main_Menu;