import Nav from "react-bootstrap/Nav";

function Footer() {
  return (
    <div className="footer">
      <div className="content-footer">
        <div className="content-log justify-content-center bg-dark">
          <h3 className="footer_title">
            <ion-icon name="fast-food"></ion-icon>MenuRest
          </h3>
          <Nav
            className="content-redes justify-content-center bg-dark"
            activeKey="/home"
          >
            <Nav.Item>
              <div className="line"></div>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="link-1">
                <ion-icon name="logo-instagram"></ion-icon>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-2">
                <ion-icon name="logo-facebook"></ion-icon>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-3">
                <ion-icon name="logo-whatsapp"></ion-icon>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <div className="line"></div>
            </Nav.Item>
          </Nav>
        </div>
        <div className="content-contact">
          <h4>Contáctanos</h4>
          <p>Tel: 3579416479</p>
          <p>Email: menurest@gmail.com</p>
          <p>Dir: Av. La Principal 1234</p>
        </div>
      </div>
      <div className="line"></div>
      <p className="text-center mt-2 mb-4">Todos los derechos reservados</p>
    </div>
  );
}

export default Footer;
