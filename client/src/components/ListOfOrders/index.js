import { Button } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";

// const MainMenu = ({ finalArray }) => {
const ListOfOrders = () => {

  var orderList = []

  function newOrderRow(item, index) {

    // orderList.push(<li key={item} className="mainMenuBtns m-4 p-3"><div onClick={(event) => subMenuRequest(index + 1, event)} variant="light">{item}</div>{' '}</li>)
    orderList.push(<li key={item} className="mainMenuBtns m-4 p-3"><div variant="light">{item}</div>{' '}</li>)
  }


  //TODO: Get Each Order From Database

  

  //TODO: Create a row for each order and fill with order data

  //TODO: Add DropDown/Button to update order status




  return (
    <div>
      <h1>test List of orders</h1>
    </div>
  )
};

export default ListOfOrders;


//!========================= EOF ========================= 