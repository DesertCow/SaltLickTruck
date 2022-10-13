import React from "react";


//* Component Import
import NavFooter from '../components/NavFooter';
import LoadingSplash from '../components/LoadingSplash';


function OrderSubmit() {


  return (
    <div>

      <h1 className="submitTitle text-center mt-4 p-3">Order Submitted!</h1>

      {/* <footer className="mt-5">
        <NavFooter />
      </footer> */}

      <div>
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
      </div>

    </div>



  )

}

export default OrderSubmit;