import { useState} from 'react';
import {FaBars, FaTimes} from "react-icons/fa";
import logo from '../assets/logo.png';

// Company Data
const basicInfo = {
    name: 'MBlogs',
    logo: logo,
}

// Navbar Data
const navLinks = [
    {
        title: 'Home',
        link: '/'
    },
    {
        title: 'Category of Blogs',
        link: '/categories'
    },
    {
        title: 'All Blogs',
        link: '/blogs'
    },
    {
        title: 'Contact Us',
        link: '/contact'
    },

]

// Login Link Data
const logData = [
    {
        title: 'Login',
        link: '/login'
    },
    {
        title: 'Register',
        link: '/register'
    },
]


const Navbar = () => {

    const [open, setOpen] = useState(false) // State for Mobile Menu

    // Handle Mobile Menu
    const handleMenu =() =>{
        setOpen(prev => !prev)
        console.log(open)
    }

    return (
        <div
            className={`bg-black md:bg-black/70 w-full fixed top-0 left-0 z-10 shadow-md transition-all duration-300`}
        >
            <div className="mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">

                    {/* Logo Section */}
                    <div className="flex items-center gap-x-1">
                        <a href="/">
                            <img src={basicInfo.logo} alt="" width={70} height={60}/>
                        </a>
                        <p className='text-white text-xl md:text-2xl font-serif'>{basicInfo.name}</p>
                    </div>

                    {/*  Medium Device Menu: Menubar  */}
                    <div className="hidden md:block">
                        <div className="flex ml-10 items-baseline space-x-4">
                            {navLinks.map((link, index) => (
                                <a key={index}
                                   className='
                                   text-white hover:text-[#A7D378] transition-all
                                   duration-500 px-3 py-2 rounded-md text-md font-serif'
                                   href={link.link}
                                >
                                    {link.title}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/*  Medium Device Menu: Login section  */}
                    <div className="hidden md:block">
                        <div className="flex ml-10 items-baseline space-x-4">
                            {logData.map((link, index) => (
                                <a key={index}
                                   className='
                                   text-white hover:text-[#A7D378] transition-all
                                   duration-500 px-3 py-2 rounded-md text-md font-serif'
                                   href={link.link}
                                >
                                    {link.title}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/*  Hamburger Button  */}
                    <div className="-mr-2 flex md:hidden">
                        <button
                            type='button'
                            onClick={handleMenu}
                            className='
                            inline-flex items-center justify-center p-2 rounded-md
                            text-gray-400 hover:text-white hover:bg-gray-700
                            focus:outline-none focus:ring-2 focus:ring-offset-2
                            focus:ring-offset-gray-800 focus:ring-white'
                        >
                            <span className='sr-only'>Open Main Menu</span>
                            {open === true ? <FaTimes /> : <FaBars />}
                        </button>
                    </div>
                </div>
            </div>

            {/*  Mobile Menu  */}
            {
                open ? (
                    <div className='md:hidden'>
                        <div className='ox-2 pt-2 pb-3 space-y-1 sm:px-3'>
                            {navLinks.map((link, index) => (
                                <a key={index}
                                   className='
                                   text-white hover:text-yellow-500 text-lg block
                                   px-3 py-2 rounded-md font-bold pl-10'
                                   href={link.link}
                                >
                                    {link.title}
                                </a>
                            ))}
                        </div>
                    </div>
                ) : null
            }
        </div>
    );
};

export default Navbar;