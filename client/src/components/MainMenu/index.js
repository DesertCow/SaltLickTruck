
import { Button } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";

const MainMenu = ({ finalArray }) => {

  const navigate = useNavigate();

  var menuList = []
  // var menuItems = []

  const subMenuRequest = async (buttonNum, event) => {
    event.preventDefault()
    navigate("/sub_menu/" + buttonNum);

  };


  finalArray.forEach(newMenuItem);



  function newMenuItem(item, index) {

    menuList.push(<li key={item} className="mainMenuBtns m-4 p-3"><div onClick={(event) => subMenuRequest(index + 1, event)} variant="light">{item}</div>{' '}</li>)
  }

  // console.log("==================== Menu ==================== ");
  // console.log(menuList);

  return (

    <div>
      <div className="d-flex flex-column min-vh-100">

        <h1 className="homeTitle text-center pt-4"> Salt Lick BBQ</h1>
        <h1 className="text-center pt-4 menuTitle"> Main Menu</h1>
        <hr className="mt-2 mb-3" />
        <ul className="text-center mb-5">
          <div className="mb-4">
            {/* <ol style={{ listStyleType: "none" }}>{menuList}</ol> */}
            {menuList}
          </div>
        </ul>
      </div>



    </div>
  );
};

export default MainMenu;


//!========================= EOF =========================