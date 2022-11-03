import { Button } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
// import { useMutation } from '@apollo/client';

import { OrderList_Q } from '../../utils/queries';
import { ORDER_UPDATE_Q } from '../../utils/mutations';
import { useQuery, useMutation } from '@apollo/client';

import LoadingSplash from '../../components/LoadingSplash';


import React, { useState } from 'react';

// const MainMenu = ({ finalArray }) => {
const ListOfOrders = () => {

  var orderList = []
  const [orderUpdate, { orderData }] = useMutation(ORDER_UPDATE_Q);
  const [orderColor, setOrderColor] = useState("#fc7ace");

  function newOrderRow(item, index) {

    // orderList.push(<li key={item} className="mainMenuBtns m-4 p-3"><div onClick={(event) => subMenuRequest(index + 1, event)} variant="light">{item}</div>{' '}</li>)
    // orderList.push(<li key={item} className="mainMenuBtns m-4 p-3"><div variant="light">{item}</div>{' '}</li>)

    var orderArray = item.split("|")
    var itemArray = orderArray[1].split(",")
    var qtyArray = orderArray[2].split(",")

    var finalItemsArray = []

    // console.log("==== Index ====")
    // console.log(item)

    itemArray.forEach(finalItemGroom);

    // console.log("==== orderArray ====")
    // console.log(orderArray[3])

    let initalColor

    switch (orderArray[3]) {
      case "Submitted":
        initalColor = "#31a531"
        break;
      case "WIP":
        initalColor = "#fff200"
        break;
      case "Ready":
        initalColor = "#00ff00"
        break;
      case "Picked Up":
        initalColor = "#a1a1a1"
        break;
      default:
      // code block
    }

    function finalItemGroom(item, index) {

      finalItemsArray.push(<li key={item} className="orderItems m-1 p-1">
        <div>
        </div>({qtyArray[index]}x) - {item}</li>)

      // console.log("Item At " + index)
      // console.log(item)

    }

    // function updateOrderStatus(index, event, status) {
    const updateOrderStatus = async (index, event, status, orderNumber) => {

      // console.log("Update Order Status!")
      // console.log(event)
      // console.log(" ==== Target ==== ")
      // console.log(event.target.style.backgroundColor)
      // console.log(event)
      // console.log(index)
      // console.log(status)
      // console.log(orderNumber)

      let blockColor = "#bec1be"

      var orderListEL = document.getElementById("listOfOrdersID").childNodes;

      switch (status) {
        case "Submitted":
          // code block
          blockColor = "#31a531"
          // console.log("Submitted = " + status + " | Color = " + blockColor)
          orderListEL[index].style.backgroundColor = blockColor;
          // setOrderColor(blockColor)
          break;
        case "WIP":
          blockColor = "#fff200"
          // console.log("Submitted = " + status + " | Color = " + blockColor)
          orderListEL[index].style.backgroundColor = blockColor;
          // setOrderColor(blockColor)
          break;
        case "Ready":
          blockColor = "#00ff00"
          // console.log("Submitted = " + status + " | Color = " + blockColor)
          orderListEL[index].style.backgroundColor = blockColor;
          // setOrderColor(blockColor)
          break;
        case "Picked Up":
          blockColor = "#a1a1a1"
          // console.log("Submitted = " + status + " | Color = " + blockColor)
          orderListEL[index].style.backgroundColor = blockColor;
          // setOrderColor(blockColor)
          break;
        default:
        // code block
      }

      const { data } = await orderUpdate({
        variables: { orderNumber: orderNumber, newOrderStatus: status },
      });



    }

    orderList.push(
      <li key={item} className="orderRow p-3 mx-2 mb-4" style={{ backgroundColor: initalColor }}>
        <div className="orderStatusBox p-2">
          <h1 className="mt-0">Order Number: {orderArray[0]}</h1>
        </div>
        <div className="customerNameBox p-2 m-2 d-flex">
          <h1 className="mt-0 col">Customer: {orderArray[5]}</h1>
          <h1 className="mt-0">Paid: {orderArray[4]}</h1>
        </div>
        <hr></hr>

        <h1 className="mt-3 itemsTitle text-center">Items:
          <div className='text-left m-0'>
            {finalItemsArray}
          </div>
        </h1>
        <div className="d-flex statusBox mt-4 px-2 pb-3">
          <h1 className="mt-0 col bordertext-center mt-4 statusText">Status: {orderArray[3]}</h1>
          <div className="dropdown mt-3 col text-center">
            <button className="btn btn-warning dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              Update Status
            </button>
            <ul className="dropdown-menu p-2 dropMenuKitchen">
              <li><p className="dropdown-item submittedDrop text-center mt-2" onClick={(event) => updateOrderStatus(index, event, "Submitted", String(orderArray[0]))}>Submitted</p></li>
              <li><p className="dropdown-item submittedWIP text-center mt-2" onClick={(event) => updateOrderStatus(index, event, "WIP", String(orderArray[0]))}>WIP</p></li>
              <li><p className="dropdown-item submittedReady text-center mt-2" onClick={(event) => updateOrderStatus(index, event, "Ready", String(orderArray[0]))}>Ready</p></li>
              <li><p className="dropdown-item submittedPickedUp text-center mt-2" onClick={(event) => updateOrderStatus(index, event, "Picked Up", String(orderArray[0]))}>Picked Up</p></li >
            </ul >
          </div >
        </div >

      </li >)

  }


  //TODO: Get Each Order From Database
  var { loading, data } = useQuery(OrderList_Q)



  if (!loading) {

    // console.log("GET ALL ORDERS!")
    // console.log(data.getAllOrders)

    // console.log("GEt All Orders!")
    // console.log(data.getAllOrders[1])

    data.getAllOrders.forEach(newOrderRow);

  }

  // console.log(data[0])


  //TODO: Create a row for each order and fill with order data
  // data.forEach(newOrderRow);


  //TODO: Add DropDown/Button to update order status

  if (loading) {

    return (
      <div>
        <LoadingSplash />

        <footer className="mt-5">
          {/* <MainFooter /> */}
          {/* <NavFooter /> */}
        </footer>
      </div>

    )

  }


  return (
    <ul className='mx-2 p-2' id="listOfOrdersID">
      {/* <h1>test List of orders</h1> */}
      {orderList}
    </ul>
  )
};

export default ListOfOrders;


//!========================= EOF ========================= 