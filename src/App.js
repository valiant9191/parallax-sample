import React,{useState} from 'react'

import './App.css';

import img1 from './assets/img1.png'
import img2 from './assets/img2.png'
import img3 from './assets/img3.png'




function App() {

const [offSet,setOffSet]=useState()
const handleScroll = () =>{
  setOffSet(window.pageYOffset)
}

window.addEventListener('scroll',handleScroll)
  return (
    <div className='App'>
      <div className='zoom'>
        
        <img src={img3} alt='' id='img2' style={{width:(190- offSet * 0.2) + '%' , marginBottom:(20-offSet * 0.1)+"px",  marginLeft:(-200-offSet * 0.2)+"px",bottom:(0-offSet * 0.15) }}
        ></img> 
        <img src={img3} alt='' id='img3' style={{width:(165- offSet * 0.08) + '%' ,marginRight:(-450-offSet * 0.3)+"px", bottom:(0-offSet * 0.1) }}></img> 
        {/* <img src={img2} alt='' id='img1' style={{bottom:(500- offSet * 1.2) + 'px'}}></img> */}
      </div>

      <div className='content'>
        <h2>Parralax effect with React</h2>
        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
           The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',
            making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text,
             and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident,
              sometimes on purpose (injected humour and the like).
        </p>
      </div>
    </div>
  )
}


export default App;
