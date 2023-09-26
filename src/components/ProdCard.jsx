import Card from 'react-bootstrap/Card';
import { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { BsFillCartPlusFill } from "react-icons/bs";

function ProdCard({ user, card, updateProd, ShowAdd }) {
  const [cantidad, setCantidad] = useState(1);



  const handleCantidad = (event) => {
    const cantidad = Number(event.target.value);
    if (cantidad > 0 && cantidad <= datos.stock) setCantidad(cantidad);
  }


  return (
           <Card className="mb-2" style={{ width: '100%' }}>
            {/*<Card.Header><h2 className="titulo">Platos en el Menú</h2></Card.Header>*/}
               <Card.Body>
         
                  <Card>
                      <Card.Img variant="top"src={card.image}style={{ width: '275px', float: 'left', marginRight: '0.5em' }} />
                      <Card.Body>
                          <Card.Title>{card.title}</Card.Title>
                          <Card.Text>{card.description}</Card.Text>
                      </Card.Body>
                      <Card.Footer>
                          <small className="text-muted">${card.price}</small>
                          <Form.Control type="number" value={cantidad} onChange={handleCantidad} style={{ float: 'left', width: '4em', marginRight: '0.5em' }} />
                          <Button variant="success" onClick={() => handleCarrito(datos, cantidad)}>
                          <BsFillCartPlusFill style={{ marginRight: '0.5em' }} />Pedir
                          </Button>
                          {/*<Button variant="link" className="btn-pedir"> Pedir </Button>*/}
                          {/*}
                          {user.hasOwnProperty('token') && showAdd && <button className="btn btn-secondary" onClick={() => { updateProd(card) }} style={{ width: '64px' }}><i className="fa fa-cart-plus fa-2x"></i></button>}
                          {user.hasOwnProperty('token') && !showAdd && <button className="btn btn-secondary" onClick={() => { updateProd(card) }} style={{ width: '48px' }}><i className="fa fa-solid fa-trash"></i></button>}
                          */}
                      </Card.Footer>
                  </Card>

            </Card.Body>
          </Card>
    )
  }
 export default ProdCard