import ProgressBar from 'react-bootstrap/ProgressBar';

function Competences(){

    return(      
        <div className='competences__div__progress'>
            <ProgressBar now={90} label={<i className="devicon-html5-plain"/>} striped variant="html" />
            <ProgressBar now={85} label={<i className="devicon-css3-plain"/>} striped variant="css"/>
            <ProgressBar now={80} label={<i className="devicon-javascript-plain"/>} striped variant="js" />
            <ProgressBar now={75} label={<i className="devicon-react-original"/>} striped variant="react"/>
            <ProgressBar now={70} label={<i className="devicon-sass-original"></i>} striped variant="sass"/>
        </div>
    )
}


          
export default Competences