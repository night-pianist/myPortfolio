import { useNavigate, Link } from 'react-router-dom';
import '../styling/landing.css';
import logo from '../media/logo.png'

const LandingPage = () => {
    const navigate = useNavigate();

    const logoOnClick = () => { navigate('/'); } // go to the landing page
    const aboutOnClick = () => { navigate('/about'); } // go to the about page
    const creationsOnClick = () => { navigate('/creations'); } // go to the creations page

    return ( 
        <div className="landing-page">
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
            <div className="content">
                <h1 
                    className="sm:text-3xl md:text-4xl lg:text-5xl text-white" 
                    style={{ margin: '3%' }} 
                >
                    hey! i'm khiet 
                </h1>
            </div>
        </div>
     );
}
 
export default LandingPage;