import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { HashLink } from 'react-router-hash-link';
import MobileMenu from './MobileMenu';

const Header = () => {

  const [menu, setMenu] = useState(false);

  return (
    <nav>
      <div className={`mobile-menu ${menu? "mobile-menu-act": ""}`}>
        <MobileMenu menu={menu} setMenu={setMenu} />
      </div>
        <h1>Aftab</h1>
        <div className='links'>
            <HashLink to={"/#"}>Home</HashLink>
            <HashLink to={"/#about"}>About</HashLink>
            <HashLink to={"/#skills"}>Skills</HashLink>
        </div>
        <div className="open-menu" onClick={() => setMenu(true)}><FaBars /></div>
    </nav>
  );

}

export default Header;