import './Home.css';
import KajiotchiLogo from 'images/kajiotchi-title2.png';

function Title() {
  return ( 
    <div className='Title'>
     <img src={KajiotchiLogo} alt="Kajiotchi Logo" className='Logo'/>
    </div>
  )
}

export default Title;