import Data from './Data';
import ScrollDown from './ScrollDown';
import Social from './Social';
import './home.css';

import { imagenes} from '../../data/data';

export default function Home() {
  return (
    <>
      <section className='home section' id='home'>
        <div className='home_container container grid'>
          <div className='home_content grid'>
            <Social />
            <div className='home_img' style={{backgroundImage: `url(${imagenes.img1})`}}></div>
          <Data />
        </div>
        <ScrollDown />
      </div>
    </section >
    </>
  )
}
