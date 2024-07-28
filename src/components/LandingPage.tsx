import { useNavigate, Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer'; // scrolling effect
import '../styling/landing.css';
import logo from '../media/logo.png';
import bg from '../media/bg.png';
import leftArrow from '../media/leftArrow.png';
import rightArrow from '../media/rightArrow.png';
import AnimatedText from './AnimatedWelcome';

const LandingPage = () => {
    const navigate = useNavigate();

    const logoOnClick = () => { navigate('/'); } // go to the landing page
    const aboutOnClick = () => { navigate('/about'); } // go to the about page
    const creationsOnClick = () => { navigate('/creations'); } // go to the creations page

    const { ref: ref1, inView: inView1 } = useInView({ triggerOnce: true, threshold: 0.3 });
    const { ref: ref2, inView: inView2 } = useInView({ triggerOnce: true, threshold: 0.3 });
    const { ref: ref3, inView: inView3 } = useInView({ triggerOnce: true, threshold: 0.3 });
    const { ref: ref4, inView: inView4 } = useInView({ triggerOnce: true, threshold: 0.3 });

    return ( 
        <div className="landing-page">
            <img 
                src={bg} 
                alt="bg" 
                className="bg-pic absolute h-screen w-screen bg-cover bg-center bg-no-repeat -z-10" 
            />
            <div className="navbar absolute w-[99%] gradient-shadow">
                <div className="relative flex items-center">
                    <img
                        src={logo} 
                        alt="logo" 
                        className="logo h-[5%] w-[5%] m-3 cursor-pointer" 
                        onClick={logoOnClick}
                    />
                    <div className="btns-container absolute top-0 right-0 flex justify-end space-x-4" style={{ padding: '1%'}}>
                        <button // about button 
                            className="about-btn tracking-wide text-white sm:text-sm md:text-md lg:text-lg rounded-md cursor-pointer"
                            style={{ 
                                padding: '5%',
                                textShadow: `0 0 5px rgba(115, 189, 255, 1.0)` 
                            }}
                            onClick={aboutOnClick}
                        > 
                            creations
                        </button>
                        <button // creations button
                            className="creation-btn tracking-wide text-white sm:text-sm md:text-md lg:text-lg rounded-md cursor-pointer"
                            style={{ 
                                padding: '5%',
                                textShadow: `0 0 5px rgba(115, 189, 255, 1.0)` 
                            }}
                            onClick={creationsOnClick}
                        >
                            about
                        </button>
                    </div>
                </div>
            </div>
            <div className="welcome min-h-screen flex items-center justify-center">
                <h1 className="font-bold font-dancingscript sm:text-welcomeSizeSm md:text-welcomeSizeMd lg:text-welcomeSizeLg text-white">
                    <AnimatedText text="welcome" />
                </h1>
            </div>
            <div className="transition"></div>
            <div className="main-content p-5 min-h-screen bg-dark-indigo text-white sm:text-6xl md:text-7xl lg:text-8xl flex flex-col items-center" style={{ padding: '3%'}}>
                <div className="title font-dancingscript" style={{ marginBottom: '15%'}}>
                    <AnimatedText text="im khiet!" />
                </div>
                <div className="overflow-hidden text-center"> 
                    <div ref={ref1} className={`relative flex items-center animated-div ${inView1 ? 'animate-left' : ''}`} style={{ width: '100vw' }}>
                        <img 
                            src={leftArrow} 
                            alt="bg" 
                            className=" -z-10" 
                            style={{ 
                                width: '75vw',
                                 
                            }}
                        />
                        <p className="absolute text-center w-full">an artist</p>
                    </div>
                    <div ref={ref2} className={`relative flex items-center justify-end animated-div ${inView2 ? 'animate-right' : ''}`} style={{ width: '100vw' }}>
                        <img 
                            src={rightArrow} 
                            alt="bg" 
                            className=" -z-10" 
                            style={{ 
                                width: '75vw',
                                 
                            }}
                        />
                        <p className="absolute text-center w-full">a programmer</p>
                    </div>
                    <div ref={ref3} className={`relative flex items-center animated-div ${inView3 ? 'animate-left' : ''}`} style={{ width: '100vw' }}>
                        <img 
                            src={leftArrow} 
                            alt="bg" 
                            className=" -z-10" 
                            style={{ 
                                width: '75vw',
                                 
                            }}
                        />
                        <p className="absolute text-center w-full">a CAD technician</p>
                    </div>
                    <div ref={ref4} className={`relative flex items-center justify-end animated-div ${inView4 ? 'animate-right' : ''}`} style={{ width: '100vw' }}>
                        <img 
                            src={rightArrow} 
                            alt="bg" 
                            className=" -z-10" 
                            style={{ 
                                width: '75vw',
                                 
                            }}
                        />
                        <p className="absolute text-center w-full">a music lover</p>
                    </div>
                    {/* <div ref={ref4} className={`animated-div ${inView4 ? 'animate-right' : ''}`}>
                        <p>a music lover</p>
                    </div> */}
                </div>
            </div>
        </div>
     );
}
 
export default LandingPage;