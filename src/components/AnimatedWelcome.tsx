import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import '../styling/landing.css';

interface AnimatedTextProps {
    text: string;
    onAnimationEnd?: () => void;
}  

const AnimatedText: React.FC<AnimatedTextProps> = ({ text, onAnimationEnd }) => {
    const { ref: ref, inView: inView } = useInView({ triggerOnce: true, threshold: 0.3 });
    
    useEffect(() => {
        if (inView && onAnimationEnd) {
          const animationDuration = text.length * 0.1 * 1000; // Calculate based on animation delay
          const timer = setTimeout(() => {
            onAnimationEnd();
          }, animationDuration);
          return () => clearTimeout(timer);
        }
      }, [inView, onAnimationEnd, text.length]);
    
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
