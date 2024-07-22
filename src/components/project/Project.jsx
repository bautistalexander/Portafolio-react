import './project.css';
import Projects from './Projects';
import { proy_mat } from '../../data/data';

export default function Project() {
  return (
    <>
      <section className='project section' id='projects'>
        <h2 className='section_title'>Proyectos</h2>
        <span className='section_subtitle'>{proy_mat.introduccion}</span>
        <Projects />
      </section>
    </>
  )
}
