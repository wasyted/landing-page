import './Buttons.css';
import './Variables.css';
import './Header.css';
import { useMediaPredicate } from "react-media-hook";

function Header(){
  let logoUrl;
  const preferredTheme = useMediaPredicate("(prefers-color-scheme: dark)") ? "dark" : "light";
  if (preferredTheme === "dark") {
    logoUrl = '../src/assets/MWwhite.png';
  } else {
    logoUrl = '../src/assets/MW.png';
  }
  return(
    <>
      <header>
          <ul>
            <li className='activeLink'><a href="">Home</a></li>
            <li><a href="">About me</a></li>
            <li><a href="">Projects</a></li>
            <li><a href="">Contact</a></li>
          </ul>
          <ul>
            <li className='via'>// via email</li>
            <li><button id='headerContactButton' className='contactButton'>Contact me</button></li>
            <img src={logoUrl} alt="" srcSet="" />
          </ul>
      </header>
    </>
  )
}

export default Header;