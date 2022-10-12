

import { Button } from 'react-bootstrap';
import { SubMenu_Q } from '../../utils/queries';
import { useQuery } from '@apollo/client';
import LoadingSplash from '../LoadingSplash';

const SubMenu = ({ menuNumber }) => {

  var finalArray = []

  //* Get Menu from Database based on Requested items#
  var { loading, data } = useQuery(SubMenu_Q, {
    variables: { menuId: menuNumber },
  });

  if (!loading) {
  //* Extract Menu List from GraphQL Response (data)
  // console.log("==================== GraphQL Data ==================== ");
  data = String(JSON.stringify(data))
  var dataArray = data.split(":")
  var menuTitle = String(dataArray[4])

  menuTitle = String(menuTitle.replace(/[^\w\s]/gi, ''))

  dataArray = String(dataArray[3])
  dataArray = dataArray.split(',')

  dataArray.forEach(parseGraphQL)
  }
  
  function parseGraphQL(item) {

    //* Remove special Chars
    item = item.replace(/[^\w\s]/gi, '')
    finalArray.push(String(item))

    // console.log("==================== Item ==================== ");
    // console.log(String(item))
    // console.log(finalArray)
  }

  var menuList = []
  finalArray.forEach(populateSubMenu);


  function populateSubMenu(item) {

    //* Create Buttons based off array
    menuList.push(<li key={item} className="mainMenuBtns m-4"><Button variant="light">{item}</Button>{' '}</li>)
  }

  if (loading) {

    return (
      <LoadingSplash />
    )

  }

  menuList.pop()

  return (

    <div>
      <div className="d-flex flex-column min-vh-100">

        <h1 className="homeTitle text-center pt-4"> Salt Lick BBQ</h1>
        <hr className="mt-2 mb-3" />
        <h1 className="text-center pt-4 menuTitle"> {menuTitle}</h1>
        {/* <h1 className="text-center pt-4 menuTitle">Menu</h1> */}
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