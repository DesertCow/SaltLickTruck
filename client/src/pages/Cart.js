// import { useQuery } from '@apollo/client';
// import { SubMenu_Q } from '../utils/queries';
import React from "react";
import { useNavigate } from "react-router-dom";
// import { Button } from 'react-bootstrap';


//* Component Import
// import Header from '../components/Header';
import SubMenu from '../components/SubMenu';
// import MainFooter from '../components/Footer';
import NavFooter from '../components/NavFooter';
// import LoadingSplash from '../components/LoadingSplash';

// function Sub_Menu({ menuNumber }) {
function Cart() {

  const navigate = useNavigate();

  const handleOrder = async (event) => {
    event.preventDefault();
    navigate("/user/orderSubmit");

  };

  const handleMenuReturn = async (event) => {
    event.preventDefault();
    navigate("/main_Menu");

  };


  return (
    <div>

      <h1 className="cartTitle text-center mt-4">Order</h1>
      <h1 className="cartTitle text-center mb-0">Summary</h1>
      <hr className="mt-0"></hr>
      <div>
        <div className="CartButtonZone mt-5">
          <table className="table table-striped table-dark table-hover p-5">
            <thead>
              <tr>
                <th scope="col">Item #</th>
                <th scope="col">Price</th>
                <th scope="col">Qty</th>
                <th scope="col">Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Brisket Sandwich</td>
                <td>1</td>
                <td>7.99</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Smoked Sasuge (1-lb)</td>
                <td>1</td>
                <td>12.99</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Baked Beans (1-qt)</td>
                <td>1</td>
                <td>3.99</td>
              </tr>
              <tr>
                <th scope="row"></th>
                <td></td>
                <td>Item Total:</td>
                <td>24.97</td>
              </tr>
            </tbody>
          </table>
          {/* <div className="d-flex flex-row mt-5">
            <button type="button" className="btn btn-info m-2 col menuBtn">Menu</button>
            <button type="button" className="btn btn-success m-2 col orderBtn">Order</button>
          </div> */}
          <div className="mt-5">
            <div className="mx-4 p-3 text-center orderBtn" onClick={(event) => handleOrder(event)}>Order</div>
            <div className="mx-4 p-3 text-center menuBtn" onClick={(event) => handleMenuReturn(event)}>Menu</div>
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