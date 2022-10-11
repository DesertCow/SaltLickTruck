
import { Button } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";

const MainMenu = ({ finalArray }) => {

  const navigate = useNavigate();

  console.log("==================== Passed Array ==================== ");
  console.log(finalArray[8])

  // const menuList = finalArray.map((menu) => (
  //   <li>
  //     {finalArray}
  //   </li>
  // ));

  var menuList = []
  // var menuItems = []

  const subMenuRequest = async (buttonNum, event) => {
    event.preventDefault()
    console.log("Menu Click!")
    console.log(event.target)
    // const menuID = 3
    navigate("/sub_menu/" + buttonNum);

  };


  finalArray.forEach(newMenuItem);



  function newMenuItem(item, index) {
    console.log("======================== ITEM ======================== ")
    console.log(item)
    // let buttonNum = index
    menuList.push(<li key={item} className="mainMenuBtns m-4"><Button onClick={(event) => subMenuRequest(index + 1, event)} variant="light">{item}</Button>{' '}</li>)
  }

  console.log("==================== Menu ==================== ");
  console.log(menuList);

  return (

    <div>
      <div className="d-flex flex-column min-vh-100">

        <h1 className="homeTitle text-center pt-4"> Salt Lick BBQ</h1>
        <h1 className="text-center pt-4 menuTitle"> Main Menu</h1>
        <hr className="mt-2 mb-3" />
        <ul className="text-center m-4">
          <div>
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