import './App.scss';

import projets from './datas/projets.json';
import Competences from './components/Competences';

import Header from './components/Header';
import Footer from './components/Footer';
import Form from './components/Form';
import Projet from './components/Projet';

import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import arrowDown from './assets/arrowDown.webp';
import paint from './assets/background/paint.webp';

function App() {

  return (
    <div className="App">
      
      <main className='main'>
        <section id="accueil">
          <div className="accueil_bg">
            <h1>PICARD KEVIN</h1>
            <p>Développeur Front-end</p>
          </div>
          <img className='accueil_arrow' src={arrowDown} alt='fleche vers le bas' height='50px' width='50px'/>
        </section>
        <Header/>
        <section id="presentation">
          <h2>Présentation</h2>
          <p className='presentation_p'>Passionné par le développement web front-end et le design, je mets un point d'honneur à créer des interfaces utilisateur intuitives, accessibles et esthétiques. Fort d'une expérience solide en HTML, CSS et JavaScript, ainsi que des frameworks modernes tels que React, je transforme les idées en réalités digitales dynamiques et responsives.</p>
          <p className='presentation_p'>Mon approche est centrée sur l'humain : je m'efforce de comprendre les besoins et les attentes des utilisateurs finaux pour concevoir des expériences qui leur sont véritablement utiles. En outre, je suis profondément engagé en faveur de l'accessibilité numérique, veillant à ce que mes projets soient utilisables par tous, y compris les personnes en situation de handicap.</p>
          <p className='presentation_p'>Si vous recherchez un développeur capable de réaliser un site web dynamique, responsive et centré sur l'utilisateur, je serais ravi de collaborer avec vous. N'hésitez pas à me <a className='presentation_a' href='#contact'>contacter</a> pour discuter de vos projets et de la manière dont je peux vous aider à les concrétiser.</p>
        </section>

        <section id='projets_intro'>
          <h2 className='projets__h2'>Mes Projets</h2>
        </section>
        <section id="projets">
          <div className="projets__container">
            <Tabs fill>
            {
              projets.map((projet)=>
                <Tab eventKey={projet.short} title={projet.short}>
                  <Projet {...projet} key={projet.title} />
                </Tab>
              )
            }
            </Tabs>
          </div>
        </section> 
        <section id="competences">
          <img className='competences__img' src={paint} alt="pots de peinture"/>
          <div className='competences__right'>
            <h2 className='competences__h2'>Competences</h2>
            <div className='competences_frontend'>
              <h3 className='competences__h3'>Frontend</h3>
              <Competences/>
            </div>
            <div className='comp_div competences_backend'>
              <h3 className='competences__h3'>Backend</h3>
              <ul>
                <li>Node.js</li>
                <li>Express</li>
                <li>Mongoose</li>
                <li>Sharp</li>
                <li>Multer</li>
              </ul>
            </div>
            <div className='comp_div competences_database'>
              <h3 className='competences__h3'>Database</h3>
              <ul>
                <li>MongoDB</li>
                <li>Firebase</li>
                <li>MySQL</li>
              </ul>
            </div>
            <div className='comp_div competences_gestion'>
              <h3 className='competences__h3'>Gestion de projet</h3>
              <ul>
                <li>Notion.so</li>
                <li>Methodes agiles</li>
                <li>Methode SCRUM</li>
              </ul>
            </div>
          </div>
        </section>  
        <section id="contact">
        <h2>Contact</h2>
        <p>Vous avez un projet ? Discutons-en !</p>
          <Form/>
        </section>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
