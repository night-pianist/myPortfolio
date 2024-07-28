import React from 'react';
import { useInView } from 'react-intersection-observer';
import '../styling/landing.css';

interface AnimatedTextProps {
    text: string;
  }  

const AnimatedText: React.FC<AnimatedTextProps> = ({ text }) => {
    const { ref: ref, inView: inView } = useInView({ triggerOnce: true, threshold: 0.3 });
    return (
        <div className="flex">
        {text.split('').map((char: string, index: number) => (
            <span
                key={index}
                ref={ref}
                className={`animated-div inline-block transform ${inView ? 'animate-title' : ''}`}
                style={{ 
                    animationDelay: `${index * 0.1}s`,
                    textShadow: '0 0 10px rgba(255, 255, 255, 0.7)', 
                }}
            >
                {char === ' ' ? '\u00A0' : char}
            </span>
        ))}
        </div>
    );
};

export default AnimatedText;
