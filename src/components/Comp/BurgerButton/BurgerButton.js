import React,{ useState } from 'react'
import './styles.scss'

function BurgerButton({click,cstyle,colorChange}) {
    const [status, setStatus] = useState('close');
  return (
    <nav>
      <div
        className="BurgerMenu__container"
        role="button"
        // onClick={() => setStatus(status === 'open' ? 'close' : 'open')}
        onClick={click}


      >
        <i className={!colorChange?'close':'open'}></i>
        <i className={!colorChange?'close':'open'}></i>
        <i className={!colorChange?'close':'open'}></i>
      </div>
    </nav>
  )
}

export default BurgerButton