import { useNavigate } from 'react-router-dom';
import './styles.css';

const LandingPage = () => {
    const navigate = useNavigate();

    const aboutOnClick = () => { navigate('/about'); }
    // const creationsOnClick = () => { navigate('/creations'); }

    return ( 
        <div className="landing-page">
            <button 
                className="about-btn bg-green-300 mx-5 my-5 p-3 absolute right-0"
                onClick={aboutOnClick}
            > 
                about
            </button>
            <button className="creation-btn bg-green-300 mx-5 my-5 p-3 absolute right-24">
                creations
            </button>
        </div>
     );
}
 
export default LandingPage;