import { useState, useEffect } from 'react';
import { proy_mat } from '../../data/data';

export default function Projects() {
  const [item, setItem] = useState('frontend');
  const [projects, setProjects] = useState([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (item === 'todo') {
      setProjects(proy_mat.proyectos);
    } else {
      const newProjects = proy_mat.proyectos.filter((p) => {
        return p.categoria === item;
      })
      setProjects(newProjects);
    }
  }, [item]);

  const handleClick = (e, index) => {
    setItem(e.target.textContent);
    setActive(index);
  };

  return (
    <div>
      <div className='project_filters'>
        {
          proy_mat.categorias_nav.map((category, index) => (
            <span className={active === index ? 'project_item project_item-active' : 'project_item'} key={index} onClick={(e) => handleClick(e, index)} >{category}</span>
          ))
        }
      </div>

      <div className='project_container container grid'>
        {
          projects.map((proy) => (
            <div className='project_card' key={proy.id}>
              <img src={proy.imagen} className='project_img' />
              <h3 className='project_title'>{proy.titulo}</h3>
              <div className='project_tecnology'>
                <div>
                  {
                    proy.tecnologias.map((t) => (
                      <img key={t.id_tec} src={t.icono} title={t.nom_tecnologia}/>
                    ))
                  }
                </div>
                <div>
                  <a href={proy.demo} className='project_button' target='_blank'>
                    Ver {proy.categoria} <i className='bx bx-right-arrow-alt project_button-icon'></i>
                  </a>
                  {
                    proy.link_github !== '' ? <a title='ver código'href={proy.link_github} className='link_github' target='_blank'><img src={'../../../icons_tecnology/github.png'} alt="" /></a> : null
                  }
                </div>
              </div>
            </div>

          ))
        }
      </div>
    </div>
  )
}
