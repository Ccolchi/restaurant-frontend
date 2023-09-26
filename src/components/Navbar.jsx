import {Navbar, Nav, Container} from "react-bootstrap";
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';

function Nbar () {
  return (
    <>
      <Navbar expand="lg" bg="dark" sticky="top">
        <Container>
          <Navbar.Brand href="/">
            <ion-icon name="fast-food"></ion-icon>RollingRestó
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="">
              <Nav.Link href="/Menus">Menu</Nav.Link>
            <Nav.Link href="/Registro">Registro</Nav.Link>
              <Nav.Link href="/Login">Login</Nav.Link>
                <Button className="btn-cart" variant="primary" href="/Cart">
                <div className="btn-icon">
                  <ion-icon name="cart" className="cart-icon"></ion-icon>
                  <Badge bg="secondary">0</Badge>
                </div>
                <span className="visually-hidden">unread messages</span>
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Nbar