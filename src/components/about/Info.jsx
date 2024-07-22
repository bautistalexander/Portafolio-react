import { experiencia_general } from '../../data/data';

export default function Info() {
  return (
    <>
      <div className='about_info grid'>
        <div className='about_box'>
          <i className='bx bx-chalkboard about_icon' ></i>
          <h3 className='about_title'>Experiencia Docente</h3>
          <span className='about_subtitle'>{experiencia_general.años_experiencia_docencia}</span>
        </div>
        <div className='about_box'>
          <i className='bx bx-code-alt about_icon' ></i>
          <h3 className='about_title'>Experiencia Programando</h3>
          <span className='about_subtitle'>{experiencia_general.años_experiencia_programando}</span>
        </div>
        <div className='about_box'>
          <i className='bx bx-code-block about_icon' ></i>
          <h3 className='about_title'>Proyectos Realizados</h3>
          <span className='about_subtitle'>{experiencia_general.proyectos_completados}</span>
        </div>
      </div>
    </>
  )
}
