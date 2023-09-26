import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap'


const Registro = () => {
    const navigate = useNavigate()
    const [alertError, setAlertError] = useState('')
    const [frm, setFrm] = useState({
        nombre: "",
        apellido: "",
        telefono: "",
        direccion: "",
        email: "",
        password: ""
      });
      

    //const [frm, setFrm] = useState({ email: '', password: '' })
    
    // useEffect con array vacío, se ejecuta SOLO al montar
    useEffect(() => {
      (async () => {
      })();
  
      return () => {}
    }, [])
  
    // Cada vez que hay un cambio de contenido en los campos del formulario,
    // actualizamos el objeto frm
    const handleChange = (event) => {
        setFrm({...frm, [event.target.name]: event.target.value});
      };
      
    const handleSubmit = async (e) => {
      // Evitamos que el navegador siga su secuencia habitual, manejaremos nosotros el formulario
      e.preventDefault()
  
      // Generamos referencia al objeto de formulario en el DOM para chequear validez.
      const frmElement = e.currentTarget
      if (!frmElement.checkValidity()) {
        setAlertError('Por favor, complete los campos requeridos')
        frmElement.querySelector('input[type=email]').focus()
      } else {
        // Aunque el HTML nos indique formulario válido, podemos agregar más controles aquí
        if (frm.password.length > 0 && frm.password.length < 6) {
          setAlertError('La clave debe tener entre 6 y 12 caracteres')
          frmElement.querySelector('input[type=password]').focus()
        } else {
          // Si todo está bien, realizamos una solicitud POST a la API, enviando el contenido del formulario
          setAlertError('')
  
          const resultado = await fetch('https://rolling55ibackend-production.up.railway.app/api/users/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(frm)
          })
          const resultadoJson = await resultado.json();
  
          // Si la API responde con un OK, quiere decir que la autenticación fue exitosa, disponemos de datos
          // de usuario, incluyendo un token, los almacenamos en localStorage.
          if (resultadoJson.status == 'OK') {
            localStorage.setItem('cart_user', JSON.stringify(resultadoJson.data));
            navigate('/giftcards', { replace: true });
          } else {
            // Si hubo algún problema, el objeto data contendrá el mensaje de error, lo mostramos y volvemos al formulario
            setAlertError(resultadoJson.data)
            frmElement.querySelector('input[type=email]').focus()
          }
        }
      }
    }
  
    return (
      <>
          {[""].map((variant) => (
            <Alert key={variant} variant={variant}>
              <Container className="container-fluid">
                
                <Row>
                  
                  <Col className="container-sesion">
                    
                    <Row style={{width: '40%'}}>
                      <h3>Registrarse</h3>
                      <Col className="col-md-12" >
                        <Row className="card p-4" style={{ width: "100%" }}>
                          <Form noValidate onSubmit={handleSubmit}>
                            <Form.Group className="mb-3 p">
                                <Form.Label>Nombre</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Nombre"
                                        value={frm.nombre}
                                        name="nombre"
                                        maxLength={32}
                                        required
                                        autoFocus
                                        onChange={handleChange}
                                    />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Apellido</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Apellido"
                                        value={frm.apellido}
                                        name="apellido"
                                        maxLength={32}  
                                        required
                                        onChange={handleChange}
                                    />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Teléfono</Form.Label>
                                    <Form.Control
                                        type="tel"
                                        placeholder="Teléfono"
                                        value={frm.telefono}
                                        name="telefono"
                                        maxLength={10}
                                        required
                                        onChange={handleChange}
                                    />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Dirección</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Dirección"
                                        value={frm.direccion}
                                        name="direccion"
                                        maxLength={100}
                                        required
                                        onChange={handleChange}
                                    />
                            </Form.Group>


                            <Form.Group className="mb-3">
                                <Form.Label>Email</Form.Label>
                                    <Form.Control
                                        type="email"
                                        placeholder="ejemplo@email.com"
                                        value={frm.email}
                                        name="email"
                                        maxLength={32}
                                        required
                                        autoFocus
                                        onChange={handleChange}
                                    />
                                </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Contraseña</Form.Label>
                                    <Form.Control
                                        type="password"
                                        value={frm.password}
                                        name="password"
                                        maxLength={12}
                                        required
                                        onChange={handleChange}
                                    />
                            </Form.Group>

                            <Button className='sesion-button ' type="submit" variant="warning">
                                Registrar
                            </Button>
                          
{/* Esta caja de alerta solo aparece si alertError contiene algún texto */}
                            {alertError && (
                              <Alert
                                className="mt-3 mb-0"
                                key="warning"
                                variant="warning"
                              >
                                {alertError}
                              </Alert>
                            )}
                          </Form>
                        </Row>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Container>
            </Alert>
          ))}
      </>
    );
  }

export default Registro