import { useState } from 'react';
import { experiencia, formacion_academica } from '../../data/data';
import './qualification.css';

export default function Qualification() {
  const [toggleState, setToggleState] = useState(1);

  const toogleTab = (index) => {
    setToggleState(index);
  }

  return (
    <>
      <section className='qualification section' id='qualification'>
        <h2 className='section_title'>Formación y Experiencia</h2>
        <span className='section_subtitle'>Mi formación académica y experiencia laboral se detalla a continuación</span>

        <div className='qualification_container container'>
          <div className='qualification_tabs'>
            <div className={toggleState === 0 ? 'qualification_button qualification_active button--flex' : 'qualification_button button--flex'} onClick={() => toogleTab(0)}>
              <i className='uil uil-graduation-cap qualification_icon'></i>{" "}
              Formación Académica
            </div>

            <div className={toggleState === 1 ? 'qualification_button qualification_active button--flex' : 'qualification_button button--flex'} onClick={() => toogleTab(1)}>
              <i className='uil uil-briefcase-alt qualification_icon'></i>{" "}
              Experiencia Laboral
            </div>
          </div>

          <div className='qualification_sections'>
            <div className={toggleState === 0 ? 'qualification_content qualification_content-active' : 'qualification_content'}>
              {
                formacion_academica.map((edu) => (
                  <div className='qualification_data' key={edu.id}>
                    {
                      edu.id % 2 === 0 ?
                        (
                          <>
                            <div></div>
                            <div className='central'>
                              <span className='qualification_rounder'></span>
                              <span className='qualification_line'></span>
                            </div>
                          </>
                        ) : (<></>)
                    }
                    <div>
                      <h3 className='qualification_title'>{edu.titulo}</h3>
                      <span className='qualification_subtitle'>
                        {edu.institucion}
                      </span>
                      <div className='qualification_calendar'>
                        <i className='uil uil-calendar-alt'></i> {edu.gestion}
                      </div>
                    </div>
                    {
                      edu.id % 2 === 1 ?
                        (
                          <>
                            <div className='central'>
                              <span className='qualification_rounder'></span>
                              <span className='qualification_line'></span>
                            </div>
                          </>
                        ) : (<></>)
                    }

                  </div>
                ))
              }
            </div>
            <div className={toggleState === 1 ? 'qualification_content qualification_content-active' : 'qualification_content'}>
              {
                experiencia.map((trabajo) => (
                  <div className='qualification_data' key={trabajo.id}>
                    {
                      trabajo.id % 2 === 0 ?
                        (
                          <>
                            <div></div>
                            <div className='central'>
                              <span className='qualification_rounder'></span>
                              <span className='qualification_line'></span>
                            </div>
                          </>
                        ) : (<></>)
                    }
                    <div>
                      <h3 className='qualification_title'>{trabajo.cargo} - {trabajo.materia}</h3>
                      <span className='qualification_subtitle'>
                        {trabajo.lugar}
                      </span>
                      <div className='qualification_calendar'>
                        <i className='uil uil-calendar-alt'></i> {trabajo.gestion}
                      </div>
                    </div>
                    {
                      trabajo.id % 2 === 1 ?
                        (
                          <>
                            <div className='central'>
                              <span className='qualification_rounder'></span>
                              <span className='qualification_line'></span>
                            </div>
                          </>
                        ) : (<></>)
                    }

                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
