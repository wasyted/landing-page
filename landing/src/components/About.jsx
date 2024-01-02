import './About.css';
import Fade from 'react-reveal/Fade';

function About(){
  return(
    <div>
      <h1 className='sectionHeader'>About me</h1>
      <div className="aboutContainer">

        <Fade bottom fraction={0.5}>
          <div className='messiContainer'>
            <div className='messiTextContainer'>
              <h3><i>{'"Can a musician, gamer and car enthusiast become a web-dev?"'}</i></h3>
              <h1>Well i did anyway! ↴</h1>
              <p className='heroText'>
                I've been studying Informatics Engineering since 2021
                but gotten into full-stack development since it allowed me to deploy all
                my creativity.
              </p>
              <p>
                Hailing from the land of tango, mate, and the occasional soccer-induced 
                heart attack (thanks, Messi), I'm a proud Argentine with a passion for coding
                and problem solving.
              </p>
            </div>
            <div className='messi'>
              <img src="../src/assets/messi.png" alt="" />
              <div className="messiOverlay"></div>
            </div>
          </div>
        </Fade>
        <Fade bottom>
          <div className='mateContainer'>
            <div className='mate'>
              <img src="../src/assets/mate.png" alt="" />
              <div className='mateOverlay'></div>
            </div>
            <div className='mateTextContainer'>
              <h2>
                Here, have a <span className='fancy'>'Mate</span> with me!
              </h2>
              <p>
                They say I'm "creative" – I say I'm just a web wizard with 
                a knack for turning ideas into interactive reality. 
              </p>
              <p>
                My coding skills are sharper than Messi's dribbles, 
                and my websites are smoother than a tango on a moonlit 
                Buenos Aires street.
              </p>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  )
}

export default About;