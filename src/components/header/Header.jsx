
import { useState } from 'react';
import './header.css';

export default function Header() {
  // Change background header
  window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY >= 80) {
      header.classList.add('scroll-header');
    } else {
      header.classList.remove('scroll-header');
    }
  });


  const [showToggleMenu, setShowToggleMenu] = useState(false);
  const [activeNav, setActiveNav] = useState('#home');

  return (
    <header className='header'>
      <nav className='nav container'>
        <a href='index.html' className={showToggleMenu ? 'nav_logo ocultar' : 'nav_logo'}>BAUTISTA</a>

        <div className={
          showToggleMenu ? 'nav_menu show_menu' : 'nav_menu'
        }>
          <ul className='nav_list grid'>
            <li className='nav_item'>
              <a href='#home' className={activeNav === '#home' ? 'nav_link active-link':'nav_link'} onClick={() => setActiveNav('#home')}>
                <i className='uil uil-estate nav_icon'></i>
                Principal
              </a>
            </li>

            <li className='nav_item'>
              <a href='#about' className={activeNav === '#about' ? 'nav_link active-link':'nav_link'} onClick={() => setActiveNav('#about')}>
                <i className='uil uil-user nav_icon'></i>
                A cerca de mi
              </a>
            </li>

            <li className='nav_item'>
              <a href='#skills' className={activeNav === '#skills' ? 'nav_link active-link':'nav_link'} onClick={() => setActiveNav('#skills')}>
                <i className='uil uil-file-alt nav_icon'></i>
                Habilidades
              </a>
            </li>

            <li className='nav_item'>
              <a href='#services' className={activeNav === '#services' ? 'nav_link active-link':'nav_link'} onClick={() => setActiveNav('#services')}>
                <i className='uil uil-briefcase-alt nav_icon'></i>
                Servicios
              </a>
            </li>

            <li className='nav_item'>
              <a href='#projects' className={activeNav === '#projects' ? 'nav_link active-link':'nav_link'} onClick={() => setActiveNav('#projects')}>
                <i className='uil uil-scenery nav_icon'></i>
                Proyectos
              </a>
            </li>

            <li className='nav_item'>
              <a href='#contact' className={activeNav === '#contact' ? 'nav_link active-link':'nav_link'} onClick={() => setActiveNav('#contact')}>
                <i className='uil uil-message nav_icon'></i>
                Contactos
              </a>
            </li>
          </ul>
          <i className='uil uil-times nav_close' onClick={() => setShowToggleMenu(!showToggleMenu)}></i>
        </div>
        <div className={showToggleMenu ? 'nav_toggle ocultar' : 'nav_toggle'} onClick={() => {setShowToggleMenu(!showToggleMenu)}}>
          <i className='uil uil-apps'></i>
        </div>
      </nav>
    </header>
  )
}
