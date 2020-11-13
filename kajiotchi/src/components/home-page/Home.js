import './Home.css';
import Title from './Title';
import StartButton from './StartButton';
import ImageBanner from './ImageBanner';

function Home() {
  return (
    <div className='HomeContainer'>
      <Title/>
      <StartButton/>
      <ImageBanner/>
    </div>
  );
}

export default Home;
