import { Button } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
// import { useMutation } from '@apollo/client';

import { OrderList_Q } from '../../utils/queries';
import { ORDER_UPDATE_Q } from '../../utils/mutations';
import { useQuery, useMutation } from '@apollo/client';

import LoadingSplash from '../../components/LoadingSplash';




// const MainMenu = ({ finalArray }) => {
const ListOfOrders = () => {

  var orderList = []
  const [orderUpdate, { orderData }] = useMutation(ORDER_UPDATE_Q);

  function newOrderRow(item, index) {

    // orderList.push(<li key={item} className="mainMenuBtns m-4 p-3"><div onClick={(event) => subMenuRequest(index + 1, event)} variant="light">{item}</div>{' '}</li>)
    // orderList.push(<li key={item} className="mainMenuBtns m-4 p-3"><div variant="light">{item}</div>{' '}</li>)

    var orderArray = item.split("|")
    var itemArray = orderArray[1].split(",")
    var qtyArray = orderArray[2].split(",")

    var finalItemsArray = []

    // console.log("==== Order Array ====")
    // console.log(orderArray)

    itemArray.forEach(finalItemGroom);

    function finalItemGroom(item, index) {

      finalItemsArray.push(<li key={item} className="orderItems m-1 p-1">
        <div>
        </div>({qtyArray[index]}x) - {item}</li>)

      // console.log("Item At " + index)
      // console.log(item)

    }

    // function updateOrderStatus(index, event, status) {
    const updateOrderStatus = async (index, event, status) => {

      console.log("Update Order Status!")
      console.log(event)
      console.log(index)
      console.log(status)

      let hardCodeID = "6361f6e600d73d6598fb59c4"

      const { data } = await orderUpdate({
        variables: { orderNumber: hardCodeID, newOrderStatus: status },
      });



    }

    // console.log("finalItemsArray")
    // console.log(finalItemsArray)

    orderList.push(
      <li key={item} className="orderRow p-3 mx-2 mb-4">
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
        {/* <h1 className="mt-0">QTY: {orderArray[2]}</h1> */}
        {/* <div className="updateStatusBox m-2 p-2">
          <div className="dropdown mt-3">
            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Dropdown button
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <p className="dropdown-item" >Submitted</p>
              <p className="dropdown-item" >WIP</p>
              <p className="dropdown-item" >Ready</p>
              <p className="dropdown-item" >Complete</p>
            </div>
          </div>
        </div> */}
        <div className="d-flex statusBox mt-4 px-2 pb-3">
          <h1 className="mt-0 col bordertext-center mt-4 statusText">Status: {orderArray[3]}</h1>
          <div className="dropdown mt-3 col text-center">
            <button className="btn btn-warning dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              Update Status
            </button>
            <ul className="dropdown-menu p-2 dropMenuKitchen">
              <li><p className="dropdown-item submittedDrop text-center mt-2" onClick={(event) => updateOrderStatus(index, event, "Submitted")}>Submitted</p></li>
              <li><p className="dropdown-item submittedWIP text-center mt-2" onClick={(event) => updateOrderStatus(index, event, "WIP")}>WIP</p></li>
              <li><p className="dropdown-item submittedReady text-center mt-2" onClick={(event) => updateOrderStatus(index, event, "Ready")}>Ready</p></li>
              <li><p className="dropdown-item submittedPickedUp text-center mt-2" onClick={(event) => updateOrderStatus(index, event, "Picked Up")}>Picked Up</p></li>
            </ul>
          </div>
        </div>

      </li >)

    // console.log(" ====== Order Array ======")
    // console.log(orderArray)
    // console.log(" ====== ITEM Array ======")
    // console.log(itemArray)
    // console.log(" ====== QTY Array ======")
    // console.log(qtyArray)

    // console.log(item)
    // console.log(index)
  }


  //TODO: Get Each Order From Database
  var { loading, data } = useQuery(OrderList_Q)



  if (!loading) {

    // console.log("GET ALL ORDERS!")
    // console.log(data.getAllOrders)

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
    <ul className='mx-2 p-2'>
      {/* <h1>test List of orders</h1> */}
      {orderList}
    </ul>
  )
};

export default ListOfOrders;


//!========================= EOF ========================= 