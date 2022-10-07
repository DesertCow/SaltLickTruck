

const LoadingSplash = () => {


  return (

    <div className="">
      <div className="d-flex justify-content-center">
        {/* <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div> */}
        <div className="spinner-border text-light loadingSpinner" role="status">
          <span className="sr-only"></span>
        </div>

        {/* <div class="spinner-grow" style="width: 3rem; height: 3rem;" role="status">
          <span class="sr-only">Loading...</span>
        </div> */}
      </div>
      <div className="text-center">
        <h1 className="LoadingText">LOADING...</h1>
      </div>
    </div>
    // <div className="m-4 p-2 container h-100">
    //   <div className="row h-100 justify-content-center align-items-center">
    //     <h1 className="col-12 justify-content-center">Loading... </h1>
    //     <div className="spinner-border ml-auto justify-content-center" role="status" aria-hidden="true"></div>
    //   </div>



    // </div >
  );
};

export default LoadingSplash;


//!========================= EOF =========================