import { useState } from 'react';
import { useInView } from 'react-intersection-observer'; // scrolling effect
import '../styling/styles.css';
import AnimatedText from './AnimatedWelcome';
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';

// images
import bg from '../media/bg.png';
import pinkArrow from '../media/arrows/pinkArrow.png';
import lavenderArrow from '../media/arrows/lavenderArrow.png';
import skyArrow from '../media/arrows/skyArrow.png';
import tealArrow from '../media/arrows/tealArrow.png';

import programs from '../media/programs.png';
import cad from '../media/cad.png';
import art from '../media/art.png';

const LandingPage = () => {
    const { ref: ref1, inView: inView1 } = useInView({ triggerOnce: true, threshold: 0.6 });
    const { ref: ref2, inView: inView2 } = useInView({ triggerOnce: true, threshold: 0.6 });
    const { ref: ref3, inView: inView3 } = useInView({ triggerOnce: true, threshold: 0.6 });
    const { ref: ref4, inView: inView4 } = useInView({ triggerOnce: true, threshold: 0.6 });

    const navigate = useNavigate();
    const clickToArt = () => { navigate('/illustrations'); }
    const clickToCode = () => { navigate('/programs'); }
    const clickToCad = () => { navigate('/cad-models'); }
    const clickToAbout = () => { navigate('/about'); }

    const [showTypingText, setShowTypingText] = useState(false);

    const handleAnimationEnd = () => {
        setShowTypingText(true);
    };

    return ( 
        <div className="landing-page">
            <img 
                src={bg} 
                alt="bg" 
                className="bg-pic absolute h-screen w-screen bg-cover bg-center bg-no-repeat -z-10" 
            />
            <Navbar />
            <div className="welcome min-h-screen flex flex-col items-center justify-center">
                <h1 className="font-bold font-dancingscript sm:text-welcomeSizeSm md:text-welcomeSizeMd lg:text-welcomeSizeLg text-white">
                    <AnimatedText text="welcome" speed={0.1} />
                </h1>
            </div>
            <div className="transition"></div>
            <div className="main-content min-h-screen bg-dark-indigo text-white sm:text-6xl md:text-7xl lg:text-8xl flex flex-col items-center" style={{ padding: '3%'}}>
                <div style={{ marginBottom: '7%', marginTop: '2%'}}>
                    <h1 className="font-dancingscript">
                        <AnimatedText text="im khiet and i..." speed={0.05} onAnimationEnd={handleAnimationEnd} />
                    </h1>
                </div>
                <div className="flex flex-col overflow-hidden text-center"> 
                    <div onClick={clickToCode} ref={ref1} className={`relative group flex items-center cursor-pointer animated-div ${inView1 ? 'animate-left' : ''}`}>
                        <img 
                            src={pinkArrow} 
                            alt="bg" 
                            className="-z-10" 
                            style={{ 
                                width: '75vw',   
                                display: 'block',
                            }}
                        />
                        <p className="absolute text-center w-full group-hover:scale-110 transition-transform duration-500 ease-in-out">
                            <span 
                                className="font-dancingscript sm:text-6xl md:text-7xl lg:text-8xl text-pink"
                                style={{
                                    textShadow: `0 0 5px rgba(255, 255, 255, 0.4)`,
                                    filter: 'drop-shadow(0 0 7px rgba(214, 136, 193, 0.4))',
                                    lineHeight: '1'
                                }}
                            >
                                code
                            </span>
                        </p>
                        <span className="ml-[2%]">
                            <img 
                                src={programs} 
                                alt="bg" 
                                className="opacity-0 group-hover:opacity-100 group-hover:drop-shadow-small-blue-glow transition-opacity duration-500 ease-in-out rounded-md" 
                                style={{ 
                                    width: '65%',   
                                }}
                            />
                        </span>
                    </div>
                    <div onClick={clickToCad} ref={ref2} className={`cursor-pointer relative group flex items-center justify-end animated-div m-0 p-0 ${inView2 ? 'animate-right' : ''}`} style={{ width: '100vw' }}>
                        <span className="pl-[3%]">
                            <img 
                                src={cad} 
                                alt="bg" 
                                className="opacity-0 group-hover:opacity-100 group-hover:drop-shadow-small-blue-glow transition-opacity duration-500 ease-in-out rounded-md" 
                                style={{ 
                                    width: '105%',   
                                }}
                            />
                        </span>
                        <img 
                            src={lavenderArrow} 
                            alt="bg" 
                            className=" -z-10" 
                            style={{ 
                                width: '75vw',  
                            }}
                        />
                        <p className="absolute text-center w-full group-hover:scale-110">
                            <span 
                                className="font-dancingscript sm:text-6xl md:text-7xl lg:text-8xl text-lavender"
                                style={{
                                    textShadow: `0 0 5px rgba(255, 255, 255, 0.4)`,
                                    filter: 'drop-shadow(0 0 7px rgba(151, 115, 224, 0.4))'
                                }}
                            >
                                cad
                            </span>
                        </p>
                    </div>
                    <div onClick={clickToArt} ref={ref3} className={`cursor-pointer relative group flex items-center animated-div ${inView3 ? 'animate-left' : ''}`} style={{ width: '100vw' }}>
                        <img 
                            src={skyArrow} 
                            alt="bg" 
                            className=" -z-10" 
                            style={{ 
                                width: '75vw',
                                 
                            }}
                        />
                        <p className="absolute text-center w-full group-hover:scale-110">
                            <span 
                                className="font-dancingscript sm:text-6xl md:text-7xl lg:text-8xl text-sky"
                                style={{
                                    textShadow: `0 0 5px rgba(255, 255, 255, 0.4)`,
                                    filter: 'drop-shadow(0 0 7px rgba(47, 145, 211, 0.4))'
                                }}
                            >
                                illustrate
                            </span>
                        </p>
                        <span className="ml-[2%]">
                            <img 
                                src={art} 
                                alt="bg" 
                                className="opacity-0 group-hover:opacity-100 group-hover:drop-shadow-small-blue-glow transition-opacity duration-500 ease-in-out rounded-md" 
                                style={{ 
                                    width: '85%',   
                                }}
                            />
                        </span>
                    </div>
                    {/* <div onClick={clickToAbout} ref={ref4} className={`cursor-pointer relative flex items-center justify-end animated-div ${inView4 ? 'animate-right' : ''}`} style={{ width: '100vw' }}>
                        <img 
                            src={tealArrow} 
                            alt="bg" 
                            className=" -z-10" 
                            style={{ 
                                width: '75vw',
                                 
                            }}
                        /> */}
                        {/* <p className="absolute text-center w-full hover:scale-110">
                            <span 
                                className="font-dancingscript sm:text-6xl md:text-7xl lg:text-8xl text-teal"
                                style={{
                                    textShadow: `0 0 5px rgba(255, 255, 255, 0.4)`,
                                    filter: 'drop-shadow(0 0 7px rgba(45, 205, 194, 0.4))'
                                }}
                            >
                                love music 
                            </span>  */}
                            { /* add spining 3d gifs or something? like https://useplink.com/en/ */ }
                        {/* </p> */}
                    {/* </div> */}
                </div>
            </div>
        </div>
     );
}
 
export default LandingPage;