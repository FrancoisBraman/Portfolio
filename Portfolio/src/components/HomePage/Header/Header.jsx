import './Header.css';
import { useState } from 'react';

function Header() {

  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <header className='nav_bar'>
        <h1 className='nav-item' onClick={handleClick}>François Braman</h1>
          {!isOpen &&
          <div className='nav_item'>
            <a className='nav_item-links' href="/realisations">Réalisations</a>
            <a className='nav_item-links' href="/cv">Curriculum vitae</a>
          </div>
          }
      </header>
    </>
  )
}

export default Header