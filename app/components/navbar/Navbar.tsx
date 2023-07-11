'use client'
import { useState } from 'react'
import Link from 'next/link'
import './Navbar.css'

type Page = {
    title: string;
    slug: string;
};


export default function Navbar({ pages }: { pages: Page[] }) {
    const [clicked, setClicked] = useState(false)
    const handleClick = () => {
        setClicked(!clicked)
    }
    return (
        <>


            <div className='nav-ghost'>
                <nav className='nav-container border-b-2 border-b-green-400'>
                    <div className='logo'>
                        <Link
                            href='/'
                            className="omega font-Comic img-pro bg-gradient-to-r 
            from-green-400 to-blue-700 
              bg-clip-text text-transparent text-3xl px-2">
                            &#60; &Omega; &#62;
                        </Link>
                    </div>

                    <div role={'links'} className={`links ${clicked ? 'active' : ''}`}>
                        <Link
                            onClick={handleClick}
                            href='/'
                            className="nav text-center font-extrabold text-blue-700 border-gray-200 rounded-xl px-3 border bg-blue-100/50 md:bg-white"
                        >Home
                        </Link>
                        {
                            pages.map(link =>
                                <Link
                                    onClick={handleClick}
                                    href={`/${link.slug}`}
                                    key={link.title}
                                    className="nav text-center font-extrabold text-blue-700 border-gray-200 rounded-xl px-3 border bg-blue-100/50 md:bg-white"
                                >
                                    {link.title}
                                </Link>)
                        }
                    </div>
                    <div className='burguer'>
                        <div className='burger'>
                            <div
                                role="burger"
                                onClick={handleClick}
                                className={`icon nav-icon-5 ${clicked ? 'open' : ''}`}
                            >
                                <span />
                                <span />
                                <span />
                            </div>
                        </div>
                    </div>
                    <div role={'bgdiv'} className={`border-b-2 border-b-green-400 bgdiv initial ${clicked ? ' active' : ''}`} />
                </nav>
            </div>
        </>
    )
}

