import Card from 'react-bootstrap/Card';
import { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { BsFillCartPlusFill } from "react-icons/bs";

function ProdCard({card}) {
  const [cantidad, setCantidad] = useState(1);



  const handleCantidad = (event) => {
    const cantidad = Number(event.target.value);
    if (cantidad > 0 && cantidad <= datos.stock) setCantidad(cantidad);
  }


  return (
           <Card className="mb-2" style={{ width: '100%' }}>
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
                      </Card.Footer>
                  </Card>

            </Card.Body>
          </Card>
    )
  }
 export default ProdCard