import { datos_personales, redes_sociales } from '../../data/data';
import './footer.css';

export default function Footer() {
  return (
    <>
      <footer className='footer' id='footer'>
        <div className='footer_container container'>
          <h1 className='footer_title'>{datos_personales.ape_paterno}</h1>

          <ul className='footer_list'>
            <li className=''>
              <a href='#about' className='footer_link'>A cerca de mi</a>
            </li>
            <li className=''>
              <a href='#projects' className='footer_link'>Proyectos</a>
            </li>
            <li className=''>
              <a href='#qualification' className='footer_link'>Formación y Experiencia</a>
            </li>
          </ul>

          <div className='footer_social'>
            {
              redes_sociales.map((red) => (
                <a href={red.link} className='footer_social-link' target='_blank' key={red.nombre_red_social}>
                  <i className={red.icono}></i>
                </a>
              ))
            }
          </div>

          <span className='footer_copy'>&#169; {datos_personales.ape_paterno}. Todos los Derechos Reservados</span>
        </div>
      </footer>
    </>
  )
}
