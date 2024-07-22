import './scrollUp.css';

export default function ScrollUp() {
  window.addEventListener('scroll', () => {
    const scrollUp = document.querySelector('.scrollup');
    if (window.scrollY >= 560) {
      scrollUp.classList.add('show-scroll');
    } else {
      scrollUp.classList.remove('show-scroll');
    }
  });
  return (
    <a href='#' className='scrollup'>
      <i className='uil uil-arrow-up scrollup_icon'></i>
    </a>
  )
}
