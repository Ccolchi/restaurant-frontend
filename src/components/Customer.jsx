import React, { useState } from "react";
import { Container, Row, Col, Table, Button, Modal, Form } from "react-bootstrap";
import '../css/ProductCards.css'


function Customer({card}) {
    const [Customer, setCustomer] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
  
    const agregarCliente = () => {
      const nuevoCliente = {
        nombre: nombre,
        email: email,
      };
      setCustomer([...Customer, nuevoCliente]);
      setShowModal(false);
      setNombre("");
      setEmail("");
    };
  
    const deleteUser = (index) => {
      const nuevosCustomer = [...Customer];
      nuevosCustomer.splice(index, 1);
      setCustomer(nuevosCustomer);
    };
  
    return (
      <Container>
      
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Email</th>
                  <th>Acciones</th>                 
                </tr>
              </thead>
              <tbody>
                {
                  <tr key={card.id}>
                    <td>{card.name}</td>
                    <td>{card.email}</td>
                    <td>
                      <Button variant="success " onClick={() => editUser(card.in)}><i class="bi bi-pencil"></i></Button>
                      
                    </td>
                    <td><Button variant="danger" onClick={() => deleteUser(card.in)}>Eliminar</Button></td>
                  </tr>
                }
              </tbody>
            </Table>
           

        {/*<Button variant="primary" onClick={() => setShowModal(true)}>Borrar Cliente</Button>*/}
        <Modal show={showModal} onHide={() => setShowModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Desea Borrar al Cliente</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group controlId="formNombre">
                <Form.Label>Nombre</Form.Label>
                <Form.Control type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
              </Form.Group>
              <Form.Group controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowModal(false)}>Cancelar</Button>
            <Button variant="primary" onClick={agregarCliente}>Borrar</Button>
          </Modal.Footer>
        </Modal>
      </Container>
    );
  }
  
  export default Customer