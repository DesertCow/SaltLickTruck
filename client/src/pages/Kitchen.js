

import ListOfOrders from '../components/ListOfOrders';
import NavFooter from '../components/NavFooter';

import { useNavigate } from "react-router-dom";
import Auth from '../utils/auth';



function Kitchen() {

  const navigate = useNavigate();

  if (Auth.adminCheck()) {

    return (

      <div>
        <h1 className="kitchenPageTitle text-center mt-3">Kitchen Page</h1>
        <hr></hr>
        <h2 className="text-center mt-3 tableText">Order List</h2>
        <hr></hr>
        <div className="mb-5">
          <ListOfOrders />
        </div>

        <footer className="mt-5">
          {/* <MainFooter /> */}
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

export default Kitchen;