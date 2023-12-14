import './Hero.css'

function Hero(){
  return(
    <>
      <div className="heroContainer">
        <div> 
          <h1 className='heroTitle'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h1> 
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus nostrum id deserunt architecto ullam corporis natus sint quae corrupti</p>
          <div className='contactContainer'>
            <button className="contactButton">Contact me</button>
            <p>// via email</p>
          </div>
        </div>
        <div>
          <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque similique eum autem veritatis obcaecati labore iusto dolores natus vitae consequatur et minima id doloribus aspernatur recusandae adipisci a, asperiores molestias!</div>
        </div>
      </div>
    </>
  )
}

export default Hero;