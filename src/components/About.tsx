import Navbar from './Navbar';
import '../styling/styles.css';

import headshot from '../media/headshot.png';

const About = () => {
    return ( 
        <div className="about bg-dark-indigo min-h-96">
            <Navbar />

            <div className="relative overflow-hidden text-white">
                <div className="container mx-auto flex flex-row justify-center items-center space-y-6 md:space-y-0 px-6 py-12">
                    <div className="flex flex-col items-center justify-center flex-[3] m-[2%] mb-[1%] mt-[10%]">
                        <div className="relative">
                            <img
                                src={headshot}
                                alt="profile"
                                className="w-40 h-40 md:w-full md:h-full rounded-full shadow-2xl border-8 border-white"
                                style= {{ width: '310%', }}
                            />
                        </div>
                        <h3 className="sm:text-2xl md:text-3xl lg:text-4xl font-dancingscript font-semibold mt-4">creator</h3>
                    </div>

                    {/* Text Section */}
                    <div className="flex-[7] max-w-2xl flex flex-col justify-center">
                        <h2 className="sm:text-4xl md:text-5xl lg:text-6xl font-varelaround text-center p-[5%]">
                            Hey I'm Khiet 
                        </h2>
                        <p className="mb-[2%] sm:text-1xl md:text-2xl lg:text-3xl font-varelaround leading-relaxed text-center">
                            I'm currently pursuing a path in computer science.   

                            Computer science allows me to leverage my logical problem-solving skills with creativity when 
                            designing solutions. On top of CS being a constantly expanding field, the reiterative process 
                            of learning, developing applications to help others, and reflecting makes programming each day a new adventure.
                        </p>
                        <p className="sm:text-1xl md:text-2xl lg:text-3xl font-varelaround leading-relaxed text-center">
                            Feel free to reach out to me at my <a href="https://www.linkedin.com/in/khiet-h-12605b257/" className="text-light-blue">linkedin</a> :)
                        </p>
                    </div>
                </div>
            </div>


            <div className="bg-indigo-900 text-white py-16">
                <div className="container mx-auto px-6">
                    <h2 className="sm:text-3xl md:text-4xl lg:text-5xl font-bold font-varelaround text-center mb-12">
                        some more about me...
                    </h2>

                    <div className="flex justify-center items-center">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 font-varelaround">
                        
                        <div className="group relative w-64 h-64 m-4">
                            <div className="relative w-full h-full transform-style preserve-3d transition-transform duration-700 group-hover:rotate-y-180">
                                <div className="absolute inset-0 flex flex-col justify-between p-4 opacity-100">
                                    <div className="text-center absolute inset-0 w-full h-full backface-hidden p-6 rounded-lg shadow-lg flex flex-col items-center justify-center" style={{ background: "radial-gradient(circle, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.6) 200%) #6366F1", }}>
                                        {/* <p className="text-lg">I AM AN</p> */}
                                        <h3 className="text-2xl font-semibold mb-2">mbti INFJ</h3>
                                    </div>
                                </div>
                                <div className="text-center absolute inset-0 flex flex-col justify-between p-4 opacity-0 hover:opacity-100 transition-opacity duration-200 ease-in-out">
                                    <div className="absolute inset-0 w-full h-full backface-hidden p-6 rounded-lg shadow-lg flex flex-col items-center justify-center" style={{ background: "radial-gradient(circle, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.6) 200%) #6366F1", }}>
                                        <p className="text-lg"><a href="https://www.16personalities.com/infj-personality" className="text-light-blue">advocate</a></p>
                                        <p className="text-lg">"quiet visionaries"</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="group relative w-64 h-64 m-4">
                            <div className="relative w-full h-full transform-style preserve-3d transition-transform duration-700 group-hover:rotate-y-180">
                                <div className="absolute inset-0 flex flex-col justify-between p-4 opacity-100">
                                    <div className="text-center absolute inset-0 w-full h-full backface-hidden p-6 rounded-lg shadow-lg flex flex-col items-center justify-center" style={{ background: "radial-gradient(circle, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.6) 200%) #6366F1", }}>
                                        {/* <p className="text-lg">I CAN TYPE</p> */}
                                        <h3 className="text-2xl font-semibold mb-2">i can type ~130wpm</h3>    
                                    </div>
                                </div>
                                <div className="text-center absolute inset-0 flex flex-col justify-between p-4 opacity-0 hover:opacity-100 transition-opacity duration-200 ease-in-out">
                                    <div className="absolute inset-0 w-full h-full backface-hidden p-6 rounded-lg shadow-lg flex flex-col items-center justify-center" style={{ background: "radial-gradient(circle, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.6) 200%) #6366F1", }}>
                                        <p className="text-lg">playing piano for a decade has improved my dexterity</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="group relative w-64 h-64 m-4">
                            <div className="relative w-full h-full transform-style preserve-3d transition-transform duration-700 group-hover:rotate-y-180">
                                <div className="absolute inset-0 flex flex-col justify-between p-4 opacity-100">
                                    <div className="text-center absolute inset-0 w-full h-full backface-hidden p-6 rounded-lg shadow-lg flex flex-col items-center justify-center" style={{ background: "radial-gradient(circle, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.6) 200%) #6366F1", }}>
                                        {/* <p className="text-lg">i could listen to music forever</p> */}
                                        <h3 className="text-2xl font-semibold mb-2">i could listen to music forever</h3>    
                                    </div>
                                </div>
                                <div className="text-center absolute inset-0 flex flex-col justify-between p-4 opacity-0 hover:opacity-100 transition-opacity duration-200 ease-in-out">
                                    <div className="absolute inset-0 w-full h-full backface-hidden p-6 rounded-lg shadow-lg flex flex-col items-center justify-center" style={{ background: "radial-gradient(circle, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.6) 200%) #6366F1", }}>
                                        <p className="text-lg">i write piano covers for my favorite songs</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="group relative w-64 h-64 m-4">
                            <div className="relative w-full h-full transform-style preserve-3d transition-transform duration-700 group-hover:rotate-y-180">
                                <div className="absolute inset-0 flex flex-col justify-between p-4 opacity-100">
                                    <div className="text-center absolute inset-0 w-full h-full backface-hidden p-6 rounded-lg shadow-lg flex flex-col items-center justify-center" style={{ background: "radial-gradient(circle, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.6) 200%) #6366F1", }}>
                                        <h3 className="text-2xl font-semibold mb-2">i like going out</h3>    
                                    </div>
                                </div>
                                <div className="text-center absolute inset-0 flex flex-col justify-between p-4 opacity-0 hover:opacity-100 transition-opacity duration-200 ease-in-out">
                                    <div className="absolute inset-0 w-full h-full backface-hidden p-6 rounded-lg shadow-lg flex flex-col items-center justify-center" style={{ background: "radial-gradient(circle, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.6) 200%) #6366F1", }}>
                                        <p className="text-lg">...whether to jog, see friends, or take a break</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    </div>



                </div>
            </div>
            
        </div>
    );
}
 
export default About;