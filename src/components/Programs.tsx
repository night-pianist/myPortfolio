import Navbar from './Navbar';
import AnimatedText from './AnimatedWelcome';

const Programs = () => {
    return (
        <div className="programs bg-dark-indigo">
            <Navbar />

            <div className="container mx-auto text-center py-8">
                <div className="flex justify-center items-center" style={{ marginBottom: '5%', marginTop: '5%'}}>
                    <h1 className="font-dancingscript text-white sm:text-6xl md:text-7xl lg:text-8xl">
                        <AnimatedText text="coding to..." speed={0.05}/>
                    </h1>
                </div>
            </div>
        </div>
     );
}
 
export default Programs;

/* coding to.. 

revolutionize learning

raise mental health awareness   

empower women



*/