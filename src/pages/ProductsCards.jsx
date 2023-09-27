import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Container, Row, Col, Button, Toast } from 'react-bootstrap'
import ProdCard from '../components/ProdCard.jsx'

import Card from 'react-bootstrap/Card';
import Nav from "react-bootstrap/Nav";

import Carrousel from '../components/Carrousel.jsx';
import appConfig from '../config.js'
import '../css/ProductCards.css'


const ProdCards = () => {
    const navigate = useNavigate();
  
    const [productsCards, setProductsCards] = useState([])

    const [toastMsg, setToastMsg] = useState({ show: false, msg: '' })
      
    // useEffect de Array vacío, se ejecuta SOLO al montar para recuperar las productcards disponibles
    useEffect(() => {
      (async () => {
        try {
          // setLoading(true)
          const data = await fetch(`${appConfig.API_BASE_URL}/${appConfig.GET_PRODUCTS_ENDPOINT}`)
          const dataJson = await data.json()
          setProductsCards(dataJson.data)
          // setLoading(false)
        } catch (err) {
          setToastMsg({ show: true, msg: err.message })
          // setLoading(false)
        }
      })()
  
      return () => {}
    }, []);
  
    return (    
     <>    
        <Carrousel />
        <Container className="mt-3 mb-3 p-3 bg-light container-blocks">
        <Card>
          <Card.Header>
            <Nav variant="tabs" defaultActiveKey="#comidas">
              <Nav.Item>
                <Nav.Link href="#comidas" className="title-menu">
                  Menús del día
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Card.Header>
          <Row>
            {/* Insertamos el componente ProdCard, pasándole las props necesarias */}
            <Col className="cards_grid">
              {productsCards.map(card => <ProdCard key={card._id} card={card} />)}
            </Col>
          </Row>
        </Card>

          <Toast show={toastMsg.show} delay={3000} onClose={() => setToastMsg({ show: false, msg: '' })} autohide style={{ position: 'fixed', bottom: '1em', right: '1em', zIndex: '1000', backgroundColor: '#333', color: '#fff'}}>
            <Toast.Header>
              {/* <img src="imagen" className="rounded me-2" alt="RollingCode" /> */}
              <i className="fa fa-shopping-cart fa-2x"></i>&nbsp;
              <strong className="me-auto">Carrito</strong>
              <small>Ahora</small>
            </Toast.Header>
            
            <Toast.Body>{toastMsg.msg}</Toast.Body>
          </Toast>
        </Container>
      </>
    );

  };
  
  export default ProdCards