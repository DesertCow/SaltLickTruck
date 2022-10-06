
import { Button } from 'react-bootstrap';

const MainMenu = ({ finalArray = [] }) => {


  return (

    <div>
      <div className="d-flex flex-column min-vh-100">

        <h1 className="homeTitle text-center pt-4"> Salt Lick BBQ</h1>
        <h1 className="text-center pt-4 menuTitle"> Main Menu</h1>
        <hr className="mt-2 mb-3" />
        <ul className="text-center m-4">
          <li className="mainMenuBtns m-4"><Button variant="light">{finalArray[0]}</Button>{' '}</li>
          <li className="mainMenuBtns m-4"><Button variant="light">{finalArray[1]}</Button>{' '}</li>
          <li className="mainMenuBtns m-4"><Button variant="light">{finalArray[2]}</Button>{' '}</li>
          <li className="mainMenuBtns m-4"><Button variant="light">{finalArray[3]}</Button>{' '}</li>
          <li className="mainMenuBtns m-4"><Button variant="light">{finalArray[4]}</Button>{' '}</li>
          <li className="mainMenuBtns m-4"><Button variant="light">{finalArray[5]}</Button>{' '}</li>
          <li className="mainMenuBtns m-4"><Button variant="light">{finalArray[6]}</Button>{' '}</li>
          <li className="mainMenuBtns m-4"><Button variant="light">{finalArray[7]}</Button>{' '}</li>
          <li className="mainMenuBtns m-4"><Button variant="light">{finalArray[8]}</Button>{' '}</li>
        </ul>
      </div>
    </div>
  );
};

export default MainMenu;


//!========================= EOF =========================