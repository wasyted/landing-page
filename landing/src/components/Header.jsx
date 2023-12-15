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
            <li className='activeLink'>Home</li>
            <li>About me</li>
            <li>Projects</li>
            <li>Contact</li>
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