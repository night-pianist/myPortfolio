import { useNavigate, Link } from 'react-router-dom';
import '../styling/landing.css';
import logo from '../media/logo.png'

const LandingPage = () => {
    const navigate = useNavigate();

    const logoOnClick = () => { navigate('/'); } // go to the landing page
    const aboutOnClick = () => { navigate('/about'); } // go to the about page
    const creationsOnClick = () => { navigate('/creations'); } // go to the creations page

    return ( 
        <div className="landing-page flex">
            <img 
                src={logo} 
                alt="logo" 
                className="logo h-[4%] w-[4%] m-3" 
                onClick={logoOnClick}
            />
            <button // about button 
                className="about-btn bg-green-300 mx-5 my-5 p-3 absolute right-0 rounded-md"
                onClick={aboutOnClick}
            > 
                about
            </button>

            <button // creations button
                className="creation-btn bg-green-300 mx-5 my-5 p-3 absolute right-24 rounded-md"
                onClick={creationsOnClick}
            >
                creations
            </button>
        </div>
     );
}
 
export default LandingPage;