import Carousel from 'react-bootstrap/Carousel';



function CarrouselProjet({images}){



    return(
        <Carousel>
            {
                images.map((image) =>
                    <Carousel.Item key={"item"+image}>
                        <img src={image} key={"img"+image} alt=''/>
                    </Carousel.Item>
                )
            }
        </Carousel>


    )
}

export default CarrouselProjet