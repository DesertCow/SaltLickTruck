
import { Button } from 'react-bootstrap';

const MainMenu = ({ finalArray }) => {

  console.log("==================== Passed Array ==================== ");
  console.log(finalArray[8])

  // const menuList = finalArray.map((menu) => (
  //   <li>
  //     {finalArray}
  //   </li>
  // ));

  var menuList = []
  // var menuItems = []

  finalArray.forEach(newMenuItem);


  function newMenuItem(item) {
    console.log("======================== ITEM ======================== ")
    console.log(item)
    menuList.push(<li key={item} className="mainMenuBtns m-4"><Button variant="light">{item}</Button>{' '}</li>)
  }

  console.log("==================== Menu ==================== ");
  console.log(menuList[8]);

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