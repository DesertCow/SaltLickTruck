

import { Button } from 'react-bootstrap';
import { SubMenu_Q } from '../../utils/queries';
import { useQuery } from '@apollo/client';
import LoadingSplash from '../LoadingSplash';

const SubMenu = ({ menuNumber }) => {

  var finalArray = []

  console.log("==================== menuNumber ==================== ");
  // console.log(String(menuNumber))
  console.log(menuNumber)

  //* Get Menu from Database based on Requested items#
  var { loading, data } = useQuery(SubMenu_Q, {
    variables: { menuId: menuNumber },
  });

  //* Extract Menu List from GraphQL Response (data)
  console.log("==================== GraphQL Data ==================== ");
  data = String(JSON.stringify(data))
  var dataArray = data.split(":")
  // console.log(dataArray)
  dataArray = String(dataArray[1])
  dataArray = dataArray.split(',')

  dataArray.forEach(parseGraphQL)



  function parseGraphQL(item) {
    // console.log("~~~ Before")
    item = item.replace(/[^\w\s]/gi, '')

    // console.log(item)
    finalArray.push(String(item))
    // console.log(String(item).substring(1, String(item).length - 1))
    // item = String(item)
    // String(item).split("\"")
    // console.log("~~~ After")
    // console.log("==================== Item ==================== ");
    // console.log(String(item))
    // console.log(finalArray)
  }

  console.log("==================== Final Array ==================== ");
  console.log(finalArray)
  // var dataArray = data.split(":")
  // dataArray = String(dataArray[1])
  // dataArray = dataArray.split(',')

  var menuList = []
  finalArray.forEach(populateSubMenu);


  function populateSubMenu(item) {
    // console.log("======================== ITEM ======================== ")
    // console.log(item)
    menuList.push(<li key={item} className="mainMenuBtns m-4"><Button variant="light">{item}</Button>{' '}</li>)
  }

  if (loading) {

    return (
      <LoadingSplash />
    )

  }



  return (

    <div>
      <div className="d-flex flex-column min-vh-100">

        <h1 className="homeTitle text-center pt-4"> Salt Lick BBQ</h1>
        <h1 className="text-center pt-4 menuTitle"> Sub {menuNumber} Menu</h1>
        <hr className="mt-2 mb-3" />
        <ul className="text-center m-4">
          <div>
            {menuList}
          </div>
        </ul>
      </div>



    </div>


  );

};

export default SubMenu;


//!========================= EOF =========================