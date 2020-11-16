import './Home.css';
import childcry from 'images/pixelimagechildcry.gif';
import childblue from 'images/childblue.gif';
import childorange from 'images/childorange.gif';
import childpurple from 'images/childpurple.gif';
import childred from 'images/childred.gif';

function ImageBanner() {
  const images = [childblue, childcry, childorange, childcry, childpurple, childcry, childred];
  return ( 
    <div className='ImageBanner'>
      {images.map(img => <ImageContainer imageSrc={img}/>)}
    </div>
  )
}

function ImageContainer({imageSrc}) {
  return ( 
    <div className='ImageContainer'>
      <img src={imageSrc} className="Image"/>
    </div>
  )
}
export default ImageBanner;