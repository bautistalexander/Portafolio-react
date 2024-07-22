import { useState } from 'react';
import { servicios } from '../../data/data';
import './services.css';

export default function Services() {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  }

  return (
    <>
      <section className='services section' id='services'>
        <h2 className='section_title'>Servicios</h2>
        <span className='section_subtitle'>Que te ofrezco</span>
        <div className='services_container container grid'>
          {
            servicios.lista_servicios.map((servicio) => (
              <div className='services_content' key={servicio.id}>
                <div>
                  <i className={ servicio.icono === '' ? 'bx bx-book-content services_icon' : servicio.icono + ' services_icon'}></i>
                  <h3 className='services_title'>
                    {servicio.nombre_servicio}
                  </h3>
                </div>

                <span className='services_button' onClick={() => toggleTab(servicio.id)}>
                  Ver más
                  <i className='uil uil-arrow-right services_button-icon'></i>
                </span>

                <div className={toggleState === servicio.id ? 'services_modal active-modal' : 'services_modal'}>
                  <div className='services_modal-content'>
                    <i className='uil uil-times services_modal-close' onClick={() => toggleTab(0)}></i>
                    <h3 className='services_modal-title'>{servicio.nombre_servicio}</h3>
                    <p className='services_modal-description'>{servicio.descripcion}</p>
                    {
                      servicio.lista.map((s) => (
                        <ul className='services_modal-services' key={s}>
                          <li className='services_modal-service'>
                            <i className='uil uil-check-circle services_modal-icon'></i>
                            <p className='services_modal-info'>{s}</p>
                          </li>
                        </ul>
                      ))
                    }
                  </div>
                </div>
              </div>
            ))
          }

        </div>
      </section>
    </>
  )
}
