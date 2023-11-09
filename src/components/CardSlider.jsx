import React, {useState} from 'react'
import "./cardSlider.css"
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

function CardSlider({slides}) {

  const [slide, setSlide] = useState(0)

  let moveRight = () => {
    console.log('clicked');
    if(slide < slides.length-3){
      setSlide(slide+1)
      console.log(slide);
    }
    console.log();
  }

  let moveLeft = () => {
    if(slide > 0){
      setSlide(slide-1)
    }
  }

  const slideStyle = {
    transform: `translateX(-${slide * 100}%)`
  }

  return (
    <div className='outerContainer'>
      <div className='container' >
        {slides.map((s) => {
          return(
            <img key={s.id} style={slideStyle}  className='slidImg' src={s.img} />
          ) 
        })}
      </div>
      <ArrowBackIosIcon className='arrowLeft' onClick={moveLeft}/>
      <ArrowForwardIosIcon className='arrowRight' onClick={moveRight}/>
    </div>
  )
}

export default CardSlider
