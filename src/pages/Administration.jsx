import {Navbar, Nav, Container , Col} from "react-bootstrap";
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Customer from '../components/Customer.jsx'
import appConfig from '../config.js'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import '../css/ProductCards.css'

const Administration = () => {

  const navigate = useNavigate();
  
  const [users, setUsers] = useState([])

  const [toastMsg, setToastMsg] = useState({ show: false, msg: '' })
    
  // useEffect de Array vacío, se ejecuta SOLO al montar para recuperar las productcards disponibles
  useEffect(() => {
    (async () => {
      try {
        const data = await fetch(`${appConfig.API_BASE_URL}/${appConfig.GET_USERS_ENDPOINT}`)
        const dataJson = await data.json()
        setUsers(dataJson.data)
      } catch (err) {
        setToastMsg({ show: true, msg: err.message })
      }
    })()

    return () => {}
  }, []);



  return (
    <>
         <Col className="content-text text-center mt-5">
             <h3>Pagina de Administracion</h3>
             <br></br>
         </Col>
    <div class="mt-3 mb-3 p-3 bg-ligth container tab-container">     
    <Tabs
      defaultActiveKey="users"
      id="admin-tab"
      className="mb-3"
    >
      <Tab eventKey="users" title="Usuarios">
      {users.map(card => <Customer key={card._id} card={card} />)}
      </Tab>
      <Tab eventKey="dishes" title="Platos">
        <div> </div>
      </Tab>
    </Tabs>
    </div>
      
        
      

    </>
  );
}

export default Administration