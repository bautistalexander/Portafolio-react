import { frontend } from '../../data/data';

export default function Frontend() {
  return (
    <>
      <div className='skills_content'>
        <h3 className='skills_title'>Desarrollador Frontend</h3>
        <div className='skills_box'>
          {/* <div className='skills_group'> */}
          {
            frontend.map((tecnology) => (
              <div className='skills_data' key={tecnology.nombre}>
                <i className='bx bx-badge-check'></i>
                <div className=''>
                  <h3 className='skills_name'>{tecnology.nombre}</h3>
                  <span className='skills_level'>{tecnology.nivel}</span>
                </div>
              </div>
            ))
          }
          {/* </div> */}
        </div>
      </div>
    </>
  )
}
