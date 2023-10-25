import logo from '../assets/logo.svg'
import izq from '../assets/desktop/image-hero-left.png';
import der from '../assets/desktop/image-hero-right.png';

import '../styles/navbar.scss';
import Group from './Group';

export default function NavBar() {
  return (
    <header className='navbar'>

      <img className='navbar__logo' src= {logo} alt="" />

      <div className='navbar__grid'>
        <img className='navbar__img imgLeft' src= {izq} alt="" />
        <img className='navbar__img imgRight' src= {der} alt="" />
        <div className="group">
         {/*  Group Chat for Everyone  */}
          <Group />
        </div>
       
      </div>


    </header>
  )
}
