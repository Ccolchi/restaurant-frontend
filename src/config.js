/**
 * Archivo general de configuración.
 * Un simple objeto con distintas constantes, se puede importar para utilizar en cualquier componente que se necesite
 */

const appConfig = {
    API_BASE_URL: 'http://localhost:5000',
    GET_PRODUCTS_ENDPOINT: 'api/products',
    GET_USERS_ENDPOINT: 'api/users/list_users',
    POST_USERS_REGISTER: 'api/users/register',
    POST_USERS_LOGIN: 'api/users/login',
    ADD_CART_ENDPOINT: 'api/users/cart/add'
}

export default appConfig