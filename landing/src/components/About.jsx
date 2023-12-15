import './About.css';
import Fade from 'react-reveal/Fade';

function About(){
  return(
    <>
      <div className="aboutContainer">
        <Fade delay={400}>
          <h2 style={{fontStyle: 'italic', opacity: '0.5'}}>{'"Can a musician, gamer and car enthusiast become a web-dev?"'}</h2>
        </Fade>
        <Fade delay={800}>
          <h1>Well i did anyway!</h1>
        </Fade>
        <Fade delay={1200}>
          <p className='heroText'>
            I've been studying Informatics Engineering since 2021
            but gotten into full-stack development since it allowed me to deploy all
            my creativity, both to solve problems and creating art... (yeah my webpages i consider my art).
          </p>
        </Fade>
        <Fade bottom delay={1400}>
          <div>
            <div>
              <p>
                Hailing from the land of tango, mate, and the occasional soccer-induced 
                heart attack (thanks, Messi), I'm a proud Argentine with a passion for 
                creating digital symphonies.
              </p>
            </div>
            <img src="../src/assets/messi.png" alt="" />
          </div>
        </Fade>
        <Fade bottom>
          <div className='mateContainer'>
            <div className='mate'>
              <img src="../src/assets/mate.jpg" alt="" />
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
        <div>
          <p>
            I believe in pushing boundaries, 
            both in the digital realm and on the fretboard. 
            So, whether you're looking for a website that sings 
            or a developer who can hit the high notes, look no further! 
            Let's create some digital magic together, 
            because life's too short for boring websites 
            and out-of-tune code. 🎶✨
          </p>
        </div>
      </div>
    </>
  )
}

export default About;