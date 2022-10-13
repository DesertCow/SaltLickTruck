
import { Button } from 'react-bootstrap';
import { Item_Q } from '../../utils/queries';
import { useQuery } from '@apollo/client';
import LoadingSplash from '../LoadingSplash';
import { useNavigate } from "react-router-dom";

import NavFooter from '../NavFooter';


const ItemMenu = ({ menuItemNumber }) => {

  let inStock
  const navigate = useNavigate();
  menuItemNumber = window.location.href.split(`item/`, 2)
  menuItemNumber = parseInt(menuItemNumber[1])
  // let itemPicture = "../../img/PlaceHolder_BBQ_Item_IMG.jpg"

  // console.log("==================== menuItemNumber ==================== ");
  // console.log(menuItemNumber)

  var { loading, data } = useQuery(Item_Q, {
    variables: { itemId: menuItemNumber },
  });

  // data = String(JSON.stringify(data))

  if (!loading) {

    // data = data[0]
    // console.log("==================== Item Data ==================== ");
    // console.log(data[1])
    // console.log(data.getItemInfo)

    // var itemName = data.itemName

    if (data.getItemInfo.inStock) {
      inStock = "True"
    }
    else {
      inStock = "False"
    }

  }

  if (loading) {

    return (
      <LoadingSplash />
    )

  }

  const previousMenu = async (event) => {
    event.preventDefault();
    navigate(-1);
    console.log("Previous Menu!")

  };

  const addToCart = async (event) => {
    event.preventDefault();
    // navigate("/main_Menu");
    console.log("Add to Cart!")

  };



  return (

    <div>
      {/* <h1>Menu Item Screen!</h1> */}
      {/* <h1>{menuItemNumber}</h1> */}
      {/* <h1>{data}</h1> */}
      <div className="">
        <h1 className="text-center mt-5 dishTitle">~ {data.getItemInfo.itemName} ~</h1>
        <hr></hr>
        <div className="text-center">
          <img className="itemPhoto" src={require("../../img/PlaceHolder_BBQ_Item_IMG.jpg")} alt="Tasty BBQ"></img>
        </div>
        <hr></hr>
        <h1 className="text-left m-5 dishPrice">Price: ${data.getItemInfo.itemPrice}</h1>
        {/* <h1 className="text-left m-5 dishPrice">Available {inStock}</h1> */}
        <div className="mx-5 qtyClass col-auto my-1">
          <label className="mr-sm-2 sr-only" htmlFor="inlineFormCustomSelect">Amount: </label>
          <select className="custom-select mr-sm-2 pt-2 m-1" id="inlineFormCustomSelect">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </div>
        <div className="d-flex">
          <div className="m-5">
            <div className="addBtn p-3" onClick={(event) => addToCart(event)}>ADD</div>
          </div>
          <div className="m-5">
            <div className="addBtn text-center p-3" onClick={(event) => previousMenu(event)}>Previous Menu</div>
          </div>

        </div>
      </div>
      <footer className="mt-5">
        <NavFooter />
      </footer>
    </div>

  )

};

export default ItemMenu;


//!========================= EOF =========================