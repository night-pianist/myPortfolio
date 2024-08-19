import Navbar from './Navbar';
import '../styling/styles.css';

import logo from '../media/logo.png';

const About = () => {
    return ( 
        <div className="about bg-dark-indigo min-h-96">
            <Navbar />

            <div className="relative overflow-hidden min-h-screen text-white">
                <div className="container mx-auto flex flex-row justify-center items-center space-y-6 md:space-y-0 px-6 py-12">
                    <div className="flex flex-col items-center justify-center flex-[3] m-[2%] mb-[1%] mt-[10%]">
                        <div className="relative">
                            <img
                                src={logo}
                                alt="profile"
                                className="w-48 h-48 md:w-full md:h-full rounded-full shadow-2xl border-8 border-white"
                                style= {{ width: '310%', }}
                            />
                        </div>
                        <h3 className="sm:text-2xl md:text-3xl lg:text-4xl font-dancingscript font-semibold mt-4">creator</h3>
                    </div>

                    {/* Text Section */}
                    <div className="flex-[7] max-w-2xl flex flex-col justify-center">
                        <h2 className="sm:text-4xl md:text-5xl lg:text-6xl font-varelaround text-center p-[5%]">
                            Hey I'm Khiet :) 
                        </h2>
                        <p className="sm:text-1xl md:text-2xl lg:text-3xl font-varelaround leading-relaxed text-center">
                            I'm currently pursuing a path in software engineering. For me, computer science is math and art.  

                            Computer science allows me to leverage my logical problem-solving skills with creativity when 
                            designing solutions. On top of CS being a constantly expanding field, the reiterative process 
                            of learning, creating applications, and reflecting makes programming each day a new adventure.
                        </p>
                    </div>
                </div>
            </div>


            <div className="bg-indigo-800 text-white py-16">
                <div className="container mx-auto px-6">
                    <h2 className="sm:text-3xl md:text-4xl lg:text-5xl font-bold font-varelaround text-center mb-12">
                        some more about me...
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Card 1 */}
                        <div className="group relative w-64 h-64 perspective">

                            <div className="relative w-full h-full transform-style-3d transition-transform duration-700 group-hover:rotate-y-180">
                                {/* Front Side */}
                                <div className="absolute w-full h-full backface-hidden bg-indigo-700 p-6 rounded-lg shadow-lg flex flex-col items-center justify-center">
                                    <h3 className="text-2xl font-semibold mb-2">Favorite Books</h3>
                                    <p className="text-lg">Explore my love for literature</p>
                                </div>
                                {/* Back Side */}
                                <div className="absolute w-full h-full backface-hidden bg-indigo-900 p-6 rounded-lg shadow-lg flex flex-col items-center justify-center rotate-y-180">
                                    <p className="text-lg">
                                        I enjoy reading both fiction and non-fiction. Some favorites include
                                        "Sapiens," "1984," and works by Maya Angelou.
                                    </p>
                                </div>
                            </div>

                        </div>

                    {/* Repeat similar cards for other fun facts */}
                    </div>
                </div>
            </div>
            
        </div>
    );
}
 
export default About;