import logo from './media/sampleLogo.png';
import { useNavigate } from 'react-router-dom';
import './styles.css';

const LandingPage = () => {
    const navigate = useNavigate();

    const aboutOnClick = () => { navigate('/about'); }
    // const creationsOnClick = () => { navigate('/creations'); }

    return ( 
        <div className="landing-page">
            <img src={logo} alt="home" className="home-icon w-20 h-20 inline-flex mx-5 my-5" />
            
            <button 
                className="about-btn bg-green-300 mx-5 my-5 p-3 absolute right-0"
                onClick={aboutOnClick}
            > 
                about
            </button>
            <button className="creation-btn bg-green-300 mx-5 my-5 p-3 absolute right-24">
                creation
            </button>
        </div>
     );
}
 
export default LandingPage;