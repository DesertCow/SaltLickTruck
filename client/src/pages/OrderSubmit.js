import React from "react";


//* Component Import
import NavFooter from '../components/NavFooter';
// import LoadingSplash from '../components/LoadingSplash';
import Auth from '../utils/auth';
import { useNavigate } from "react-router-dom";

import { UserOrderList_Q } from '../utils/queries';
import { ORDER_UPDATE_Q } from '../utils/mutations';
import { useQuery, useMutation } from '@apollo/client';




function OrderSubmit() {

  const navigate = useNavigate();
  var userOrderList = []

  const [orderUpdate, { orderData }] = useMutation(ORDER_UPDATE_Q);

  let currentUser = Auth.getToken()
  currentUser = JSON.parse(currentUser)


  function newUserOrderRow(item, index) {

    // orderList.push(<li key={item} className="mainMenuBtns m-4 p-3"><div onClick={(event) => subMenuRequest(index + 1, event)} variant="light">{item}</div>{' '}</li>)
    // orderList.push(<li key={item} className="mainMenuBtns m-4 p-3"><div variant="light">{item}</div>{' '}</li>)

    var orderArray = item.split("|")
    var itemArray = orderArray[1].split(",")
    var qtyArray = orderArray[2].split(",")

    var finalItemsArray = []

    // console.log("==== Index ====")
    // console.log(item)

    itemArray.forEach(finalItemGroom);

    function finalItemGroom(item, index) {

      finalItemsArray.push(<li key={item} className="orderItems m-1 p-1">
        <div>
        </div>({qtyArray[index]}x) - {item}</li>)

      // console.log("Item At " + index)
      // console.log(item)

    }


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

    userOrderList.push(
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
          <h1 className="mt-0 col text-center mt-4 statusText">Status: {orderArray[3]}</h1>
          {/* <div className="dropdown mt-3 col text-center">
            <button className="btn btn-warning dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              Update Status
            </button>
            <ul className="dropdown-menu p-2 dropMenuKitchen">
              <li><p className="dropdown-item submittedDrop text-center mt-2" onClick={(event) => updateOrderStatus(index, event, "Submitted", String(orderArray[0]))}>Submitted</p></li>
              <li><p className="dropdown-item submittedWIP text-center mt-2" onClick={(event) => updateOrderStatus(index, event, "WIP", String(orderArray[0]))}>WIP</p></li>
              <li><p className="dropdown-item submittedReady text-center mt-2" onClick={(event) => updateOrderStatus(index, event, "Ready", String(orderArray[0]))}>Ready</p></li>
              <li><p className="dropdown-item submittedPickedUp text-center mt-2" onClick={(event) => updateOrderStatus(index, event, "Picked Up", String(orderArray[0]))}>Picked Up</p></li >
            </ul >
          </div > */}
        </div >

      </li >)


  }


  // console.log("Current User =" + JSON.stringify(currentUser))
  // console.log("Current User = " + currentUser.user.customerName)


  // var { loading, data } = useQuery(UserOrderList_Q({ userName: currentUser.user.customerName }))

  var { loading, data } = useQuery(UserOrderList_Q, {
    variables: { userName: currentUser.user.customerName },
  });

  if (!loading) {


    // console.log("Raw Order Data: " + JSON.stringify(data))

    // console.log("Number of User Orders: " + data.getAllUserOrders.length)
    // console.log("User Order Data: " + data.getAllUserOrders[0])

    // Create New Order Item for each users Order 
    data.getAllUserOrders.forEach(newUserOrderRow);

  }

  if (Auth.loggedIn() && !loading) {

    return (

      <div>

        <h1 className="userNameOrderSubmit text-center mt-4 p-3">{currentUser.user.customerName}</h1>
        <h1 className="submitTitle text-center mt-0 p-0"> ~~ Order's ~~</h1>
        <hr></hr>

        <ul className='mx-2 p-2' id="listOfOrdersID">
          {/* <h1>test List of orders</h1> */}
          {userOrderList}
        </ul>

        {/* <div>
          <div className="progress m-5 barH">
            <div className="progress-bar progress-bar-striped proBar1 progress-bar-animated" role="progressbar" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
          <div className="progress m-5 barH">
            <div className="progress-bar progress-bar-striped bg-success proBar2 progress-bar-animated" role="progressbar" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
          <div className="progress m-5 barH">
            <div className="progress-bar progress-bar-striped bg-info proBar3 progress-bar-animated" role="progressbar" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
          <div className="progress m-5 barH">
            <div className="progress-bar progress-bar-striped bg-warning proBar4 progress-bar-animated" role="progressbar" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
          <div className="progress mx-4 barH readyBar">
            <div className="progress-bar progress-bar-striped bg-warning proBar5 progress-bar-animated" role="progressbar" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">Order Ready!</div>
          </div>
        </div> */}


        <footer className="mt-5">
          <NavFooter />
        </footer>

      </div>

    )
  }

  //* Return if user does not have admin access

  return (
    <div>
      <h1 className='NotAuthHeader text-center p-2'>Not Authorized to View This Page!</h1>
      <div className="row px-5 py-3">
        <div className="homeMenuBtn mt-5 p-2 text-center" onClick={(event) => navigate("/")}>Home</div>
      </div>
      <div className="row px-5 py-3">
        <div className="homeMenuBtn mt-5 p-2 text-center" onClick={(event) => navigate("/login")}>Login</div>
      </div>
    </div>
  )

}

export default OrderSubmit;