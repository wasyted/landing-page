import './Hero.scss'
import { useMediaPredicate } from 'react-media-hook';
import Fade from 'react-reveal/Fade';
import Jump from 'react-reveal/Jump';
import ContactButton from './ContactButton';


function Hero(){
  let logoUrl;
  const preferredTheme = useMediaPredicate("(prefers-color-scheme: dark)") ? "dark" : "light";
  if (preferredTheme === "dark") {
    logoUrl = '../src/assets/MWfxwhite.png';
  } else {
    logoUrl = '../src/assets/MWfx.png';
  }
  return(
    <div className='fullscreen'>
      <div className="heroContainer">
        <div> 
           <h1 className='heroTitle'>
              <Fade delay={200} left>
                <div>
                  Hello, <span className='fancy'>I'm Matías</span>,
                </div>
              </Fade>
              <Fade delay={300} left>Full-stack dev</Fade><Fade delay={600} left>and part-time</Fade><Fade delay={800} left>rockstar! 🚀</Fade>
            </h1>
            <Fade delay={900}>
              <div className='contactContainer'>
                {/* <button className="contactButton">Contact me</button> */}
                <ContactButton width='150px'/>
                <p>// via email</p>
              </div>
            </Fade>
          </div>
          <Fade delay={800}>
            <div>
              <img src={logoUrl} alt="" srcSet="" />
            </div>
          </Fade>
      </div>
      <div className='arrowDownContainer'>
        <Fade delay={2000}>
          <Jump duration={3000} forever>
            <div className='arrowDown'>
              <img src="../src/assets/Arrow-down.svg.png" alt="" />
            </div>
          </Jump>
          <Jump duration={3000} forever>
            <div className='arrowDown'>
              <img src="../src/assets/Arrow-down.svg.png" alt="" />
            </div>
          </Jump>
        </Fade>
      </div>
    </div>
  )
}

export default Hero;