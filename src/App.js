import './App.css';
import Button from './components/Button.js';
import freeCodeCampLogo from './images/logo.png';

function App() {

  const clicManager = () =>{
    console.log('clic');
  }

  const resetCounter = () =>{
    console.log('restart');
  }

  return (
    <div className='App'>
      <div className='freecodecamp-logo-container'>
        <img 
          className='freecodecamp-logo'
          src={freeCodeCampLogo}
          alt='Logo freecodecamp' />
      </div>
      <div className='container-counter'>
        <Button 
          text='Clic'
          buttonClic={true}
          clicManager={clicManager} />
        <Button 
          text='Restart'
          buttonClic={false}
          clicManager={resetCounter} />
      </div>
    </div>
  );
}

export default App;
