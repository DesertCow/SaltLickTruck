

import { useNavigate } from "react-router-dom";
import menuPDF from '../img/Salt_Lick_Menu_DWood-PDF.pdf';

function Home() {

  const navigate = useNavigate();

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
          <button type="button" className="btn btn-primary" onClick={(event) => handleMainMenu(event)}>Order</button>
        </div>
        <div className="row px-5 py-3">
          <a href={menuPDF} className="btn btn-primary" download="Salt_Lick_Menu_DWood-PDF.pdf" target='_blank'>
            <button type="submit" className="btn btn-primary">PDF Menu</button>
          </a>
        </div>
        <div className="row px-5 py-3">
          <button type="button" className="btn btn-primary" onClick={(event) => handleLogin(event)}>Login</button>
        </div>
        <div className="row px-5 py-3">
          <button type="button" className="btn btn-primary" onClick={(event) => handleRegister(event)}>Sign Up</button>
        </div>
        <div className="row px-5 py-3">
          <button type="button" className="btn btn-primary" onClick={(event) => handleContact(event)}>Contact Information</button>
        </div>

      </div>

      {/* <!-- Footer --> */}
      <footer className="mt-auto mb-0">
        <ul className="pb-1 text-center">
          <li>
            <p>Made by 🌵 Desert-Cow 🐄</p>
          </li>
          <li>
            <p>© 2022 Monkey See Monkey Do LLC.</p>
          </li>
        </ul>
      </footer>

    </div>
  );

}

export default Home;