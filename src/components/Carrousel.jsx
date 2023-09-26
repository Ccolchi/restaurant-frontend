import Carousel from "react-bootstrap/Carousel";


function Carrousel() {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://eatifier-main.s3.us-east-2.amazonaws.com/descuento_25_mito_Mesa_de_trabajo_1_01_3e16770d64.jpg"
          alt="First slide"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://eatifier-main.s3.us-east-2.amazonaws.com/promo_3x2_3584e5389b.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default Carrousel