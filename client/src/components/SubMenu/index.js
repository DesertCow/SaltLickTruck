

// import { Button } from 'react-bootstrap';
import { SubMenu_Q, Item_Q } from '../../utils/queries';
import { useQuery } from '@apollo/client';
import LoadingSplash from '../LoadingSplash';
import React from 'react';
// import ReactDOM from 'react-dom';
// import Modal from 'react-modal';
import { useNavigate } from "react-router-dom";

const SubMenu = ({ menuNumber }) => {

  var finalArray = []
  let subtitle
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const navigate = useNavigate();

  //* Get Menu from Database based on Requested items#
  var { loading, data } = useQuery(SubMenu_Q, {
    variables: { menuId: menuNumber },
  });

  if (!loading) {
    //* Extract Menu List from GraphQL Response (data)
    // console.log("==================== GraphQL Data ==================== ");
    // console.log(data)

    data = String(JSON.stringify(data))
    var dataArray = data.split(":")


    // console.log("==================== Item ==================== ");
    // console.log(String(item))

    //* Parse Sub Menu Title
    var finalTitle = dataArray[4].split(",")[0]
    finalTitle = String(finalTitle.replace(/[^\w\s]/gi, ''))

    // console.log("==================== Final Title ==================== ");
    // console.log(finalTitle)

    var indexArray = dataArray[5].replace(/[^a-zA-Z0-9 ,]/g, '', '')

    var arrayOffset = parseInt(indexArray[0].concat(indexArray[1]))

    dataArray = String(dataArray[3])
    dataArray = dataArray.split(',')

    //* Loop Over Each Item to create Final List
    dataArray.forEach(parseGraphQL)
  }

  function parseGraphQL(item) {

    //* Remove special Chars
    item = item.replace(/[^\w\s]/gi, '')
    finalArray.push(String(item))

  }

  const displayItem = async (event, item, index) => {
    event.preventDefault()
    var location = index + arrayOffset

    navigate("/item/" + location);

  };

  var menuList = []
  finalArray.forEach(populateSubMenu);


  function populateSubMenu(item, index) {

    //* Create Buttons based off array
    menuList.push(<li key={item} onClick={(event) => displayItem(event, item, index)} className="subMenuBtns m-4 p-2"><div variant="light">{item}</div>{' '}</li>)
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
        <hr className="mt-0 mb-3" />
        <h1 className="text-center mt-3 pt-4 subMenuTitle"> ~ {finalTitle} ~</h1>
        {/* <h1 className="text-center pt-4 menuTitle">Menu</h1> */}
        {/* <hr className="mt-2 mb-3" /> */}
        <ul className="text-center mb-4">
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