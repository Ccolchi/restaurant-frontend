import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Container, Row, Col, Form, Button, Toast } from 'react-bootstrap'
import appConfig from '../config.js'


const Registro = () => {
    const navigate = useNavigate()
    const [toastMsg, setToastMsg] = useState({ show: false, msg: '' })
    const [frm, setFrm] = useState({
        name: "",
        address: "",
        email: "",
        password: ""
      });
    
    useEffect(() => {
      (async () => {
      })();
  
      return () => {}
    }, [])
  
    // Actualizamos el objeto frm cada vez que hay un cambio de contenido en los campos del formulario
 
    const handleChange = (event) => {
        setFrm({...frm, [event.target.name]: event.target.value});
      };
      
    const handleSubmit = async (e) => {
      // Evitamos que el navegador siga su secuencia habitual, manejaremos nosotros el formulario
      e.preventDefault()
  
      // Generamos referencia al objeto de formulario en el DOM para chequear validez.
      const frmElement = e.currentTarget 
      if (!frmElement.checkValidity()) {
        setToastMsg('Por favor, complete los campos requeridos')
        frmElement.querySelector('input[type=email]').focus()
      } else {
          if (frm.password.length > 0 && frm.password.length < 6) {
            setToastMsg('La clave debe tener entre 6 y 12 caracteres')
          frmElement.querySelector('input[type=password]').focus()
        } else {
          setToastMsg('')
  
          // Si todo está bien, realizamos una solicitud POST a la API, enviando el contenido del formulario  
          const resultado = await fetch(`${appConfig.API_BASE_URL}/${appConfig.POST_USERS_REGISTER}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(frm)
          })
          const resultadoJson = await resultado.json();
  

          // Si la API responde con un OK, quiere decir que el regidtro fue exitos

          if (resultadoJson.status == 'OK') {
            navigate('/Menus', { replace: true });
          } else {
            // Si hubo algún problema, el objeto data contendrá el mensaje de error, lo mostramos y volvemos al formulario
            setToastMsg(resultadoJson.data)
            frmElement.querySelector('input[type=email]').focus()
          }
        }
      }
    }
  
    return (
      <>
      <Container className="container-fluid ">
        <Row>
          <Col className="container-sesion">
            <Row className="card p-3 mt-5" style={{width: '50%'}}>
              <Form noValidate onSubmit={handleSubmit}>
                
              <Form.Group className="mb-3">
                  <Form.Label>Nombre</Form.Label>
                  <Form.Control type="text" value={frm.name} name="name" maxLength={50} required onChange={handleChange} />
                </Form.Group>
                
                <Form.Group className="mb-3">
                  <Form.Label>Direccion</Form.Label>
                  <Form.Control type="text" value={frm.address} name="address" maxLength={60} required onChange={handleChange} />
                </Form.Group>                
                             
                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Email" value={frm.email} name="email" maxLength={32} required autoFocus onChange={handleChange} />
                </Form.Group>
                
                <Form.Group className="mb-3">
                  <Form.Label>Clave</Form.Label>
                  <Form.Control type="password" value={frm.password} name="password" maxLength={12} required onChange={handleChange} />
                </Form.Group>
                
                <Button type="submit" variant="warning">Registrar</Button>
              </Form>
            </Row>
          </Col>
        </Row>
      </Container>
      </>
    );
  }

export default Registro