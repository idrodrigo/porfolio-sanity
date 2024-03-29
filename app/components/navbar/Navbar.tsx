'use client'

import { useState } from 'react';
import Link from 'next/link';
import './Navbar.css';

type Props = {
  pages: string[];
};

const Navbar: React.FC<Props> = ({ pages }) => {

  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  const handleHomeClick = () => {
    if (window.location.pathname === '/') {
      window.location.reload();
    }
  };

  return (
    <>
      <div className='nav-ghost'>
        <nav className='nav-container border-b border-b-gray-200 md:mx-14 mx-12'>
          <div className='logo'>
            <Link
              href='/'
              className="omega font-Comic img-pro bg-gradient-to-r 
            from-green-400 to-blue-400 
              bg-clip-text text-transparent text-3xl px-2"
              onClick={handleHomeClick}
            >
              {/* &#60;&Omega;&#62; */}
              &#60;&#47;&#62;
              {/* &#60;◉~◉&#62; */}

            </Link>
          </div>

          <div role='links' className={`links ${clicked ? 'active' : ''}`}>
            {pages.map((pag) => (
              <Link
                onClick={handleClick}
                href={`/${pag.toLocaleLowerCase()}`}
                key={pag}
                className="text-lg font-Roboto text-blue-500 px-3 transition hover:text-blue-700 hover:underline hover:decoration-teal-400"
              >
                {pag}
              </Link>
            ))}
          </div>

          <div className='burguer'>
            <div className='burger'>
              <div
                role='burger'
                onClick={handleClick}
                className={`icon nav-icon-5 ${clicked ? 'open' : ''}`}
              >
                <span />
                <span />
                <span />
              </div>
            </div>
          </div>

          <div
            role='bgdiv'
            className={`md:mx-14 mx-11 border-b border-b-gray-300 bgdiv initial ${clicked ? ' active' : ''}`}
          />
        </nav>
      </div>
    </>
  );
}

export default Navbar;
