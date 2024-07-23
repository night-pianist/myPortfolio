import { useNavigate, Link } from 'react-router-dom';
import '../styling/landing.css';
import logo from '../media/logo.png'
import bg from '../media/bg.png'

const LandingPage = () => {
    const navigate = useNavigate();

    const logoOnClick = () => { navigate('/'); } // go to the landing page
    const aboutOnClick = () => { navigate('/about'); } // go to the about page
    const creationsOnClick = () => { navigate('/creations'); } // go to the creations page

    return ( 
        <div className="landing-page">
            <img 
                src={bg} 
                alt="bg" 
                style={{ zIndex: '-10'}}
                className="bg-pic" 
            />
            <div className="navbar relative flex items-center">
                <img 
                    src={logo} 
                    alt="logo" 
                    className="logo h-[5%] w-[5%] m-3" 
                    onClick={logoOnClick}
                />
                <div className="btns-container absolute top-0 right-0 flex justify-end space-x-4" style={{ padding: '1%'}}>
                    <button // about button 
                        className="about-btn bg-ice-blue sm:text-sm md:text-md lg:text-lg rounded-md"
                        style={{ padding: '5%' }}
                        onClick={aboutOnClick}
                    > 
                        creations
                    </button>
                    <button // creations button
                        className="creation-btn bg-ice-blue sm:text-sm md:text-md lg:text-lg rounded-md"
                        style={{ padding: '5%' }}
                        onClick={creationsOnClick}
                    >
                        about
                    </button>
                </div>
            </div>
            <div className="welcome">
                <h1 
                    className="sm:text-3xl md:text-4xl lg:text-5xl text-white" 
                    style={{ marginLeft: '3%' }} 
                >
                    welcome
                </h1>
                <h1 
                    className="welcome sm:text-3xl md:text-4xl lg:text-5xl text-white" 
                    style={{ marginLeft: '3%' }} 
                >
                    to my canvas!
                </h1>
            </div>
            <div className="main-content">
                
            </div>
        </div>
     );
}
 
export default LandingPage;