import React, { useState } from 'react';
import logo from '../media/logo.png';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();
    const logoOnClick = () => { navigate('/'); } // go to the landing page
    const aboutOnClick = () => { navigate('/about'); } // go to the about page
    // const creationsOnClick = () => { navigate('/creations'); } // go to the creations page

    const [isOpen, setIsOpen] = useState(false);

    const toggleCreations = () => {
        setIsOpen(!isOpen);
    };

    return ( 
        <div className="navbar absolute w-[99%] gradient-shadow">
            <div className="relative flex items-center">
                <img
                    src={logo} 
                    alt="logo" 
                    className="logo z-10 h-[5%] w-[5%] m-[1%] cursor-pointer" 
                    onClick={logoOnClick}
                    style={{
                        filter: 'drop-shadow(0 0 10px rgba(115, 189, 255, 0.5))'
                    }}                    
                />
                <div className="btns-container z-10 absolute top-0 right-0 flex justify-end space-x-4" style={{ padding: '1%'}}>
                    <button // creations button 
                        className="about-btn tracking-wide text-white font-bold font-varelaround sm:text-md md:text-lg lg:text-xl rounded-md cursor-pointer"
                        style={{ 
                            padding: '3%',
                            margin: '10%',
                            textShadow: `0 0 5px rgba(255, 255, 255, 0.5)`,
                            filter: 'drop-shadow(0 0 7px rgba(115, 189, 255, 1.0))'
                        }}
                        onClick={toggleCreations}
                    > 
                        creations
                    </button>
                    {isOpen && (
                        <div 
                            className="absolute -left-[44%] top-[65%] p-[1%] text-white font-varelaround sm:text-xs md:text-sm lg:text-md"
                            style={{ 
                                textShadow: `0 0 5px rgba(255, 255, 255, 0.5)`,
                                filter: 'drop-shadow(0 0 5px rgba(115, 189, 255, 0.5))'
                            }}
                        >
                            <a href="/artwork" className="block px-4 py-2 hover:italic">
                                art
                            </a>
                            <a href="/programs" className="block px-4 py-2 hover:italic">
                                programs
                            </a>
                            <a href="/cad-models" className="block px-4 py-2 hover:italic">
                                cad models
                            </a>
                        </div>
                    )}

                    <button // about button
                        className="creation-btn tracking-wide text-white font-bold font-varelaround sm:text-md md:text-lg lg:text-xl rounded-md cursor-pointer"
                        style={{ 
                            padding: '3%',
                            margin: '10%',
                            textShadow: `0 0 5px rgba(255, 255, 255, 0.5)`,
                            filter: 'drop-shadow(0 0 7px rgba(115, 189, 255, 1.0))'
                        }}
                        onClick={aboutOnClick}
                    >
                        about
                    </button>
                </div>
            </div>
        </div>
     );
}
 
export default Navbar;