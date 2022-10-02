
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
  // console.log(dataArray2[0].substring(2))

  //* Cleanup Data
  // TODO: Must be a better way to pass data via GraphQL
  
  dataArray2[0] = String(dataArray2[0].substring(2, dataArray2[0].length - 1))
  dataArray2[1] = String(dataArray2[1].substring(1, dataArray2[1].length - 1))
  dataArray2[2] = String(dataArray2[2].substring(1, dataArray2[2].length - 1))
  dataArray2[3] = String(dataArray2[3].substring(1, dataArray2[3].length - 1))
  dataArray2[4] = String(dataArray2[4].substring(1, dataArray2[4].length - 1))
  dataArray2[5] = String(dataArray2[5].substring(1, dataArray2[5].length - 1))
  dataArray2[6] = String(dataArray2[6].substring(1, dataArray2[6].length - 1))
  dataArray2[7] = String(dataArray2[7].substring(1, dataArray2[7].length - 1))
  dataArray2[8] = String(dataArray2[8].substring(1, dataArray2[8].length - 3))
  // dataArray2[0] = String(dataArray2[0].split('"'))
  // dataArray2[0] = String(temp)

  // dataArray2[0] = dataArray2[0].split('"')

  // for (let i = 0; i < data.length; i++) {
  //   console.log(data[i].category_name)
  // }

  return (

    <div className="d-flex flex-column min-vh-100">

      <h1 className="homeTitle text-center pt-4"> Salt Lick BBQ</h1>
      <h1 className="text-center pt-4"> Main Menu!</h1>
      <ul>
        <li>{dataArray2[0]}</li>
        <li>{dataArray2[1]}</li>
        <li>{dataArray2[2]}</li>
        <li>{dataArray2[3]}</li>
        <li>{dataArray2[4]}</li>
        <li>{dataArray2[5]}</li>
        <li>{dataArray2[6]}</li>
        <li>{dataArray2[7]}</li>
        {/* <li>{dataArray2[8].split('[')}</li> */}
        <li>{dataArray2[8]}</li>
      </ul>


    </div>

  )

}

export default Main_Menu;