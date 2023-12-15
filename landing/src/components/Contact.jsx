import './Contact.css'

export default function Contact(){
  return(
  <div className='contactSection'>
      <div className='contactSectionContainer' style={{position: 'relative', minHeight: '100dvh',}}>
          <h1 className='contactTitle'>Let's connect!</h1>
          <p>
            I believe in pushing boundaries
            of myself in the digital realm. 
            So, whether you're looking for a website that sings 
            or a developer who can hit the high notes, look no further! 
            Let's create some digital magic together, 
            because life's too short for boring websites 
            and out-of-tune code. 🎶✨
          </p>
          <div>
            <img className='topRightArrow'src="../src/assets/arrow-top-right.png" alt="" srcSet="" />
          </div>
      </div>
  </div>
  )
}