import React from 'react';
import { FaTimes } from 'react-icons/fa';
import { HashLink } from 'react-router-hash-link';

const MobileMenu = ({ setMenu }) => {

  return (
    <>
        <div className='mobile-menu'>
            <h2 className="mobile-name">Aftab.</h2>
            <HashLink className='mobile-a' onClick={() => setMenu(false)} to={"/#"}>Home</HashLink>
            <HashLink className='mobile-a' onClick={() => setMenu(false)} to={"/#about"}>About</HashLink>
            <HashLink className='mobile-a' onClick={() => setMenu(false)} to={"/#skills"}>Skills</HashLink>
            <HashLink className='mobile-a' onClick={() => setMenu(false)} to={"/#projects"}>Projects</HashLink>
            <div className="mobile-close" onClick={() => setMenu(false)}><FaTimes /></div>
        </div>
    </>
  );

}

export default MobileMenu;