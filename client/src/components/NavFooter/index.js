import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';


const NavFooter = () => {


  return (

    <div className="mb-0 mt-4">

      <Navbar className="NavBarClass" fixed="bottom" expand="lg" variant="light" bg="light">
        <Container className="justify-content-center p-0">
          <Nav className="d-flex flex-row p-0">
            <Nav.Link className="col mx-4" href="/">
              <div className="text-center">
                <img src={require("../../img/Home_Icon.png")} className="navFooterHomeIcon" alt="Home Icon" />
              </div>
            </Nav.Link>
            <Nav.Link className="col mx-4" href="/main_Menu">
              <div className="text-center">
                <img src={require("../../img/Restauran_Menu_Icon.png")} className="navFooterHomeIcon" alt="Home Icon" />
              </div>
            </Nav.Link>
            <Nav.Link className="col mx-4" href="/user/cart">
              <div className="text-center">
                <img src={require("../../img/Take_Out_Icon.png")} className="navFooterHomeIcon" alt="Home Icon" />
              </div>
            </Nav.Link>
            <Nav.Link className="col mx-4" href="/user/profile">
              <div className="text-center">
                <img src={require("../../img/Account_Icon.png")} className="navFooterHomeIcon" alt="Home Icon" />
              </div>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

    </div>
  );
};

export default NavFooter;


//!========================= EOF =========================