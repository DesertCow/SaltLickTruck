// import { useQuery } from '@apollo/client';
// import { SubMenu_Q } from '../utils/queries';
import React from "react";
import { useNavigate } from "react-router-dom";
// import { Button } from 'react-bootstrap';
import { useCart } from "react-use-cart";

import { CHECKOUT } from '../utils/mutations';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';

//* Component Import
// import Header from '../components/Header';
import SubMenu from '../components/SubMenu';
// import MainFooter from '../components/Footer';
import NavFooter from '../components/NavFooter';
// import LoadingSplash from '../components/LoadingSplash';

function Cart() {

  const navigate = useNavigate();

  const [userCheckout, { error, data }] = useMutation(CHECKOUT);

  const handleCheckout = async (event) => {
    event.preventDefault();


    let login = Auth.getToken()

    login = JSON.parse(login)


    // console.log(JSON.stringify(items))
    // let FinalCart = items
    // let FinalCart = JSON.stringify(items)
    // console.log("======== Items Array ========")
    // console.log(FinalCart)
    // console.log(JSON.parse(FinalCart))

    console.log(items)

    let qlItems = []
    let qlPrices = []
    let qlQty = []
    // let qlCustomerName = []

    let itemCount = items.length
    // console.log("LOGIN@@@@@@@@@@@@@")
    // console.log(login.user.customerName)
    // let qlCustomerName = "HARD CODE NAME"

    for (let i = 0; i < itemCount; i++) {

      qlItems[i] = items[i].name
      qlPrices[i] = items[i].price
      qlQty[i] = items[i].quantity
      // qlCustomerName[i] = login.customerName


    }

    // console.log("Item Count = " + itemCount)

    // let qlItems = ["1/2 LB Pork Ribs", "Chopped Beef", "Soda", "Homemade Pecan Pie"]
    // let qlPrices = [11.95, 13.95, 2.50, 6.45]
    // let qlQty = [1, 1, 2, 1]

    const { data } = await userCheckout({
      variables: { items: qlItems, prices: qlPrices, qty: qlQty, customerName: login.user.customerName },
    });

    console.log("========= Order Recived! =========")
    console.log("Order ID: " + data.checkout)


    if (data.checkout) {
      emptyCart();
      navigate("/user/orderSubmit");
    }
    // navigate("/user/orderSubmit");
    // navigate("/user/checkout");

  };

  const handleMenuReturn = async (event) => {
    event.preventDefault();
    navigate("/main_Menu");

  };

  const handleCartClear = async (event) => {
    event.preventDefault();
    // navigate("/main_Menu");
    // console.log("Cart Clear!")

    emptyCart();

  };

  const { addItem, totalItems, items, emptyCart, cartTotal } = useCart();

  // console.log("======== Cart Array [" + totalItems + "] ======= ")
  // console.log("Total Cost: $" + cartTotal)
  // console.log(totalItems)
  // console.log(items)

  //* Construct Table from CartArray

  // console.log(items.length)

  let cartTableHTML = []

  //* Table Header
  // cartTableHTML.push()
  cartTableHTML.push(

  )

  for (let i = 0; i < items.length; i++) {

    // console.log("Item (" + i + ")" + JSON.stringify(items[i]))

    // cartTableHTML.push(<li key={items[i]} className="m-2 p-2">{items[i].name}</li>)
    cartTableHTML.push(<tr key={items[i].id}><th scope="row" className="py-2 px-3">{items[i].name}</th><td>$ {items[i].price}</td><td className="text-center">{items[i].quantity}</td><td>${items[i].price}</td></tr>)

  }

  return (
    <div>

      <h1 className="cartTitle text-center mt-4">Order</h1>
      <h1 className="cartTitle text-center mb-0">Summary</h1>
      <hr className="mt-0"></hr>
      <div>
        <div className="mt-3">
          <table className="table cartTableTitle table-sm table-striped table-info table-hover p-5">
            <thead className="text-center">
              <tr>
                <th scope="col" className="p-2">Item #</th>
                <th scope="col">Price</th>
                <th scope="col">Qty</th>
                <th scope="col">Total</th>
              </tr>
            </thead>
            <tbody className="cartTableText">
              {cartTableHTML}
              {/* <tr>
                <th scope="row"></th>
                <td></td>
                <td className="cartTotalText">Item Total:</td>
                <td className="cartTotalText">$ {cartTotal}</td>
              </tr> */}
            </tbody>
          </table>

          <div className="d-flex justify-content-center">
            <div className="cartTotalBox p-4 text-center">
              <h1 className="cartTotalText">Item Total: ${cartTotal}</h1>
            </div>
          </div>

          <hr></hr>
          <div className="mt-5">
            <div className="mx-4 p-3 text-center orderBtn" onClick={(event) => handleCheckout(event)}>Checkout</div>
            <div className="mx-4 mt-4 p-3 text-center menuBtn" onClick={(event) => handleMenuReturn(event)}>Menu</div>
            <div className="mx-4 mt-4 p-3 text-center clearBtn" onClick={(event) => handleCartClear(event)}>Clear Cart</div>
          </div>
        </div>
      </div>

      <footer className="mt-5">
        {/* <MainFooter /> */}
        <NavFooter />
      </footer>

      <div>

      </div>

    </div>



  )

}

export default Cart;