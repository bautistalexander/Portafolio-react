import { testimonios } from '../../data/data';

import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';



import './testimonials.css';

export default function Testimonials() {
  return (
    <>
      <section className='testimonial container section'>
        <h2 className='section_title'>Mis Estudiantes y Clientes</h2>
        <span className='section_subtitle'>Testimonios</span>

        <Swiper className='testimonial_container mySwiper'
          loop={true}
          grabCursor={true}
          spaceBetween={24}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            576: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 48,
            }
          }}
          modules={[Pagination]}
        >
          {
            testimonios.map((testimonio) => (
              <SwiperSlide className='testimonial_card' key={testimonio.id}>
                <img src={testimonio.imagen !== '' ? testimonio.imagen : '../../../incognito.png'} className='testimonial_img' />
                <h3 className='testimonial_name'>{testimonio.nombre_persona}</h3>
                <p className='testimonial_description'>{testimonio.descripcion}</p>
              </SwiperSlide>
            ))
          }
        </Swiper>
      </section>
    </>
  )
}
