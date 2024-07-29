import logo from '../media/logo.png';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();
    const logoOnClick = () => { navigate('/'); } // go to the landing page
    const aboutOnClick = () => { navigate('/about'); } // go to the about page
    const creationsOnClick = () => { navigate('/creations'); } // go to the creations page

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
                    <button // about button 
                        className="about-btn tracking-wide text-white font-varelaround sm:text-md md:text-lg lg:text-xl rounded-md cursor-pointer"
                        style={{ 
                            padding: '3%',
                            margin: '10%',
                            textShadow: `0 0 5px rgba(255, 255, 255, 0.5)`,
                            filter: 'drop-shadow(0 0 7px rgba(115, 189, 255, 1.0))'
                        }}
                        onClick={aboutOnClick}
                    > 
                        creations
                    </button>
                    <button // creations button
                        className="creation-btn tracking-wide text-white font-varelaround sm:text-md md:text-lg lg:text-xl rounded-md cursor-pointer"
                        style={{ 
                            padding: '3%',
                            margin: '10%',
                            textShadow: `0 0 5px rgba(255, 255, 255, 0.5)`,
                            filter: 'drop-shadow(0 0 7px rgba(115, 189, 255, 1.0))'
                        }}
                        onClick={creationsOnClick}
                    >
                        about
                    </button>
                </div>
            </div>
        </div>
     );
}
 
export default Navbar;