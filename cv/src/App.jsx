import './App.css'
import { CV } from './CV/CV';
import { useState } from 'react';
import Hero from './components/Hero/Hero.jsx';
import About from './components/About/About.jsx';
import Achievements from './components/Achievements/Achievements.jsx';
import Contact from './components/Contact/Contact.jsx'
import Experiencia from './components/Experiencia/Experiencia';
import Education from './components/Education/Education';

const { hero, achievements, education, experience } = CV;


function App() {

  const [ data, setData ] = useState(true);

  return (
    <div className='App'>
      <div className='left'>
        <div className="Intro">
          <Hero hero={ hero }/>
        </div>
        <div className='About'>
          <About about={ hero }/>
        </div>
        <div className='Achievements'>
          <Achievements achievements={ achievements }/>
        </div>
        <div className='Contact'>
          <Contact contact={ hero }/>
        </div>
      </div>
      <div className='right'>
        <div className='buttons'>
          <button className='btn' onClick={ () => setData( true ) }>Experiencia</button>
          <button className='btn' onClick={ () => setData( false )}>Estudios</button>
        </div>
        <div className='infoData'>
        { ( data ) ?  <Experiencia experiencies={ experience }/> : <Education education={ education }/>}
        </div>
      </div>
    </div>
  )
}

export default App
