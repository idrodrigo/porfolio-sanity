'use client'
import { useState } from 'react';
import Link from 'next/link';
import './Navbar.css';

type Page = {
  title: string;
  slug: string;
};

type NavbarProps = {
  pages: Page[];
};

export default function Navbar({ pages }: NavbarProps) {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <>
      <div className='nav-ghost'>
        <nav className='nav-container border-b-2 border-b-blue-700 md:mx-14 mx-12'>
          <div className='logo'>
            <Link href='/' className="omega font-Comic img-pro bg-gradient-to-r 
            from-green-400 to-blue-700 
              bg-clip-text text-transparent text-3xl px-2">
              &#60; &Omega; &#62;
            </Link>
          </div>

          <div role='links' className={`links ${clicked ? 'active' : ''}`}>
            <Link
              onClick={handleClick}
              href='/'
              className="nav font-extrabold text-blue-700 px-3  "
            >
              Home
            </Link>
            <Link
              onClick={handleClick}
              href='/projects'
              className="nav font-extrabold text-blue-700 px-3  "
            >
              Projects
            </Link>
            {pages.map((link) => (
              <Link
                onClick={handleClick}
                href={`/${link.slug}`}
                key={link.title}
                className="nav font-extrabold text-blue-700 px-3"
              >
                {link.title}
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
            className={`md:mx-14 mx-11 border-b-2 border-b-blue-700 bgdiv initial ${clicked ? ' active' : ''}`}
          />
        </nav>
      </div>
    </>
  );
}

