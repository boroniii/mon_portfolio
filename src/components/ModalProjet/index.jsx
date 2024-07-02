import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import Carousel from 'react-bootstrap/Carousel';

function ModalProjet(projet) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      
      <img className="projet_logo" src={process.env.PUBLIC_URL + projet.projet.logo} alt={projet.title} onClick={handleShow}/>
      

      <Modal show={show} onHide={handleClose} size="xl" contentClassName="modalProjet__body">
        <Modal.Header closeButton>
          <Modal.Title>{projet.projet.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div className='modalProjet__content'>
                <Carousel>
                    {
                        projet.projet.images.map((image) =>
                            <Carousel.Item key={image}>
                                <img className='carousel__image' src={process.env.PUBLIC_URL + image} alt={projet.projet.title}/>
                            </Carousel.Item>
                        )
                    }
                </Carousel>
                <div className='projet__info'>
                    <p className="projet__desc">{projet.projet.description}</p>
                    <div className='projet__competences'>
                        <ul>
                        {
                            projet.projet.competences.map((comp) =>
                                <li key={comp}>{comp}</li>
                            )
                        }
                        </ul>
                    </div>
                </div>
                <a className="projet__url" href={projet.projet.url}>lien vers {projet.projet.title}</a>
                <div className="projet__tags">
                {
                    projet.projet.tags.map((tag)=>
                        <span className="projet__tag" key={projet.projet.title+tag}>{tag}</span>
                    )
                }
                </div>
            </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalProjet;