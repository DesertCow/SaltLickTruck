

import { useNavigate } from "react-router-dom";
import menuPDF from '../img/Salt_Lick_Menu_DWood-PDF.pdf';
import MainFooter from '../components/Footer';

//* React Toastify
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// var fileDownload = require('js-file-download');

function Home() {

  const navigate = useNavigate();

  // require(menuPDF);
  // var menuPDF = require('../img/Salt_Lick_Menu_DWood-PDF.pdf');

  //* Toastify Config
  const toastOptions = {
    position: "top-center",
    autoClose: 2000,
    pauseOnHover: false,
    draggable: true,
    theme: "dark",
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    navigate("/login");

  };

  const handleRegister = async (event) => {
    event.preventDefault();
    navigate("/register");

  };

  const handleContact = async (event) => {
    event.preventDefault();
    navigate("/contact");

  };

  const handleMainMenu = async (event) => {
    event.preventDefault();
    navigate("/main_Menu");

  };

  // const pdfDownload = async (event) => {
  //   event.preventDefault();
  //   toast.info("Menu Download Started!", toastOptions);
  //   // fileDownload(menuPDF, "Salt_Lick_Menu_DWood-PDF.pdf");
  //   fileDownload(menuPDF, "Salt_Lick_Menu_DWood-PDF.pdf");

  //   // navigate("/main_Menu");

  // };

  return (
    <div className="d-flex flex-column min-vh-100">
      <h1 className="homeTitle text-center mt-5"> Salt Lick BBQ</h1>

      <div className="text-center">
        <img src={require("../img/Food_Truck_Icon.png")}
          className="homePageTruck"
          alt="Truck Logo" />
      </div>

      <div className="text-center homeMenu row d-flex align-items-center justify-content-center">
        <div className="row px-5 py-3">
          <div className="homeMenuBtn p-2" onClick={(event) => handleMainMenu(event)}>Order</div>
        </div>
        <div className="row px-5 py-3">
          {/* <div className="homeMenuBtn p-2" onClick={(event) => pdfDownload(event)}>PDF Menu</div> */}
          <a href={menuPDF} className="pdfDownload" download="Salt_Lick_Menu_DWood-PDF.pdf" target='_blank' rel="noreferrer">
            <h1 type="submit" className="pdfDownloadText m-2">Menu Download (PDF)</h1>
          </a>
        </div>
        <div className="row px-5 py-3">
          <div className="homeMenuBtn p-2" onClick={(event) => handleLogin(event)}>Login</div>
        </div>
        <div className="row px-5 py-3">
          <div className="homeMenuBtn p-2" onClick={(event) => handleRegister(event)}>Sign Up</div>
        </div>
        <div className="row px-5 py-3">
          <div className="homeMenuBtn p-2" onClick={(event) => handleContact(event)}>Contact Information</div>
        </div>

      </div>

      <footer className="mt-auto mb-0">
        <MainFooter />
      </footer>
    </div>
  );

}

export default Home;