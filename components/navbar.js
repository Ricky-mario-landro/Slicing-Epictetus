import Link from "next/link";
import { useState } from 'react';
import Container from '../components/Container';
export default function Navbar() {
    const [dropdown, setDropdown] = useState(false);
    const [Offcanvas, setOffcanvas] = useState(false);
    const [search, setSearch] = useState(false);
    const dropdownList = [
      { text: 'Internet', href: './Posts' },
      { text: 'Books', href: './Posts' },
      { text: 'Open Source', href: './Posts' }
    ]
    return (
        <nav className='py-10'>
        <Container>
          <div className="flex items-center">
          <div className='w-3/12 lg:hidden'>
            <button onClick={() => setOffcanvas(!Offcanvas)}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g opacity="0.4">
                    <path d="M3 12H21" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M3 6H21" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M3 18H21" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </g>
                </svg>
            </button>
          </div>
            <div className="lg:w-2/12 w-6/12 ">
              <Link href="/">
                <a className="flex items-center justify-center lg:justify-start">
                  <div className='bg-gray-500 rounded w-10 h-10 mr-4 flex shadow-2xl justify-center items-center'>E</div>
                  Epictetus
                </a>
              </Link>
            </div>
            <div className='w-3/12 lg:hidden text-right'>
              <button onClick={() => setSearch(!search)}>
                <svg className="inline-block" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g opacity="0.4">
                      <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M21 21L16.65 16.65" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </g>
                </svg>
              </button>
            </div>
            <div className={`bg-gradient-to-b from-gray-600 to-gray-600 w-full lg:w-7/12 lg:static lg:bg-none fixed top-0 h-full lg:h-auto p-10 lg:p-0 transition-all ${Offcanvas ? 'left-0' : '-left-full'}`}>
              <button 
                className='absolute top-10 right-10 lg:hidden'
                onClick={() => setOffcanvas(false)}
              >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
              </button>
              <ul className='flex lg:flex-row flex-col lg:space-x-14 lg:space-y-0 space-y-4 lg:items-center'>
                <li><Link href="./Posts"><a className='hover:underline'>UI Design</a></Link></li>
                <li><Link href="./Posts"><a className='hover:underline'>Front-End</a></Link></li>
                <li><Link href="./Posts"><a className='hover:underline'>Back-End</a></Link></li>
                <li className='relative'>
                  <a className='hover:underline cursor-pointer flex items-center' 
                    onClick={() => setDropdown(!dropdown)}>
                    Lainnya
                    <svg className='ml-2' width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4 6L8 10L12 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg> 
                  </a>
                  
                  {/* Dropdown Toggle */}
                  {dropdown && (
                    <ul className='absolute w-[200px] bg-800 rounded mt-4 shadow-2xl'>
                      {dropdownList.map(({ text, href }) => (
                      <li key={text} className='border-b border-white/5 last:border-none'>
                        <Link href={href}>
                          <a className='py-3 px-6 bg-gray-700 flex hover:bg-gray-700/60'>
                            {text}
                          </a>
                        </Link>
                      </li>
                    ))}
                    </ul>
                  )}
                </li>
              </ul>
            </div>
            <div className={`absolute lg:static w-full lg:w-3/12 lg:px-0 px-10 left-0 transition-all ${search ? 'top-10' : '-top-40'}`}>
              <input className='bg-gray-700 lg:rounded-full rounded-lg py-3 px-6 w-full bg-search pl-12' placeholder='Search'/>
              <button 
                className='absolute top-3 right-14 lg:hidden'
                onClick={() => setSearch(false)}
              >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
              </button>
            </div>
          </div>
        </Container>
      </nav>
    )
}