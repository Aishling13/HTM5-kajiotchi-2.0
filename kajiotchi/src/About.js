import childcry from './images/pixelimagechildcry.gif';
import './App.css';

function About() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={childcry} className="App-logo" alt="logo" />
        <p>
          Kajiotchi is <em>safe</em>.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default About;
