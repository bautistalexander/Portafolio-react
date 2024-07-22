import { redes_sociales } from '../../data/data';


export default function Social() {
  return (
    <>
      <div className='home_social'>
        {
          redes_sociales.map((red) => (
            <a href={red.link} className='home_social-icon' target='_blank' key={red.nombre_red_social}>
              <i className={red.icono}></i>
            </a>

          ))
        }
      </div>
    </>
  )
}
