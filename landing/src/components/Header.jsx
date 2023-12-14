import './Header.css';
import './Buttons.css';
import './Variables.css';

function Header(){
  return(
    <>
      <header>
          <ul>
            <li><img src="../public/logo.png" alt="" srcset="" /></li>
            <li>Link</li>
            <li>Link</li>
            <li>Link</li>
            <li>Link</li>
          </ul>
          <ul>
            <li>Link</li>
            <li><button className='contactButton'>Contact me</button></li>
          </ul>
      </header>
    </>
  )
}

export default Header;