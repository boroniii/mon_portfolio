import Carousel from 'react-bootstrap/Carousel';
import './Projet.scss'

function Projet(props){
    
    return(
        <article className='projet__article'>
            <div className='projet__line'></div>
            <h3 className="projet__title">{props.title}</h3>
            <Carousel>
                {
                    props.images.map((image) =>
                        <Carousel.Item key={image}>
                            <img className='carousel__image' src={process.env.PUBLIC_URL + image} alt={props.title}/>
                        </Carousel.Item>
                    )
                }
            </Carousel>

            <div className='projet__info'>
                <p className="projet__desc">{props.description}</p>
                <div className='projet__competences'>
                    <ul>
                    {
                        props.competences.map((comp) =>
                            <li key={comp}>{comp}</li>
                        )
                    }
                    </ul>
                </div>
            </div>
            <a className="projet__url" href={props.url}>lien vers {props.title}</a>
            <div className="projet__tags">
            {
                props.tags.map((tag)=>
                    <span className="projet__tag" key={props.title+tag}>{tag}</span>
                )
            }
            </div>
        </article>
    )
}

export default Projet