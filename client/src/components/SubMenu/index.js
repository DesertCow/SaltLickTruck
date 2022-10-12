

import { Button } from 'react-bootstrap';
import { SubMenu_Q, Item_Q } from '../../utils/queries';
import { concat, useQuery } from '@apollo/client';
import LoadingSplash from '../LoadingSplash';
import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
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
    data = String(JSON.stringify(data))
    var dataArray = data.split(":")
    var menuTitle = dataArray[4].split(",")
    var finalTitle = menuTitle[0]

    console.log("==================== menuTitle ### ==================== ");
    // console.log(String(item))


    finalTitle = String(finalTitle.replace(/[^\w\s]/gi, ''))
    console.log(finalTitle)

    var indexArray = dataArray[5].replace(/[^a-zA-Z0-9 ,]/g, '', '')

    console.log(indexArray.length)
    console.log(indexArray[0])
    console.log(indexArray[1])
    console.log(indexArray[2])

    var finalIndexArray = []
    var finalArrayIndex = 0

    // for (let i = 0; i < indexArray.length; i++) {

    //   var tempNumber = 0;

    //   if (indexArray[i] != ",") {
    //     // finalIndexArray[i] = 
    //     console.log(indexArray[i])
    //     tempNumber = concat(tempNumber, indexArray[i])
    //   }
    //   else {

    //     console.log("Final" + tempNumber)
    //     finalIndexArray[finalArrayIndex] = tempNumber;
    //     finalArrayIndex = finalArrayIndex++
    //   }
    // }

    // menuTitle = String(menuTitle.replace(/[^\w\s]/gi, ''))

    console.log("==================== menuTitle # ==================== ");
    // console.log(String(item))
    console.log(menuTitle)

    dataArray = String(dataArray[3])
    dataArray = dataArray.split(',')



    dataArray.forEach(parseGraphQL)
  }

  function parseGraphQL(item) {

    //* Remove special Chars
    item = item.replace(/[^\w\s]/gi, '')
    finalArray.push(String(item))

    console.log("==================== Item ==================== ");
    console.log(String(item))
    console.log(finalArray)
  }

  const displayItem = async (event, item) => {
    event.preventDefault()
    console.log("Item Requested! [" + item + "]")
    // console.log(event)

    // navigate("/item/" + item);

    // var { loading, data } = useQuery(Item_Q, {
    //   variables: { menuId: menuNumber },
    // });

    // navigate("/sub_menu/" + buttonNum);

  };

  var menuList = []
  finalArray.forEach(populateSubMenu);


  function populateSubMenu(item, index) {

    //* Create Buttons based off array
    menuList.push(<li key={item} onClick={(event) => displayItem(event, item)} className="mainMenuBtns m-4"><Button variant="light">{item}</Button>{' '}</li>)
  }

  if (loading) {

    return (
      <LoadingSplash />
    )

  }



  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  menuList.pop()

  return (

    <div>
      <div className="d-flex flex-column min-vh-100">

        <h1 className="homeTitle text-center pt-4"> Salt Lick BBQ</h1>
        <hr className="mt-2 mb-3" />
        <h1 className="text-center pt-4 menuTitle"> {finalTitle}</h1>
        {/* <h1 className="text-center pt-4 menuTitle">Menu</h1> */}
        <hr className="mt-2 mb-3" />
        <ul className="text-center m-4">
          <div>
            {menuList}
          </div>
        </ul>
      </div>
      {/* <div>
        <button onClick={openModal}>Open Modal</button>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
          <button onClick={closeModal}>close</button>
          <div>I am a modal</div>
          <form>
            <input />
            <button>tab navigation</button>
            <button>stays</button>
            <button>inside</button>
            <button>the modal</button>
          </form>
        </Modal>
      </div> */}



    </div>


  );

};

export default SubMenu;


//!========================= EOF =========================