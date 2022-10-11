
import { Button } from 'react-bootstrap';

const SubMenu = ({ menuNumber }) => {

  console.log("==================== menuNumber ==================== ");
  // console.log(String(menuNumber))
  console.log(menuNumber)



  return (

    <div>
      <div className="d-flex flex-column min-vh-100">

        <h1 className="homeTitle text-center pt-4"> Salt Lick BBQ</h1>
        <h1 className="text-center pt-4 menuTitle"> Sub {menuNumber} Menu</h1>
        <hr className="mt-2 mb-3" />
        <ul className="text-center m-4">
          <div>
            {/* <ol style={{ listStyleType: "none" }}>{menuList}</ol> */}
            {/* {menuList} */}
          </div>
        </ul>
      </div>



    </div>


  );

};

export default SubMenu;


//!========================= EOF =========================