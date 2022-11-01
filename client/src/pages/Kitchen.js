

import ListOfOrders from '../components/ListOfOrders';
import NavFooter from '../components/NavFooter';

import { useNavigate } from "react-router-dom";



function Kitchen() {

  const navigate = useNavigate();

  // let adminLoggedIn = true
  let adminLoggedIn = false

  //TODO: Enable Method to send user email to server to confirm if they have Admin Access

  function handleMainMenu(event) {
    event.preventDefault();
    navigate("/");

  }

  if (adminLoggedIn) {

    return (
      <div>
        <h1 className='NotAuthHeader text-center p-2'>Not Authorized to View This Page!</h1>
        <div className="row px-5 py-3">
          <div className="homeMenuBtn mt-5 p-2 text-center" onClick={(event) => handleMainMenu(event)}>Home</div>
        </div>
      </div>
    )
  }



  return (



    <div>
      <h1 className="kitchenPageTitle text-center mt-3">Kitchen Page</h1>
      <hr></hr>
      <h2 className="text-center mt-3 tableText">Orders Table</h2>
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

export default Kitchen;