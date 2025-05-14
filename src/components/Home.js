import {React, useState, useEffect, useRef} from 'react'
import { Mail } from 'lucide-react'

function Home() {
  const [displayText, setDisplayText] = useState("");
  const fullName = "Kunal";
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Reset animation states
          setDisplayText("");
          setIsTypingComplete(false);
        }
      },
      { threshold: 0.6 }
    );

    const currentRef = sectionRef.current;
    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);
  
  // Typewriter effect for name
  useEffect(() => {
    if (displayText.length < fullName.length) {
      const timeout = setTimeout(() => {
        setDisplayText(fullName.substring(0, displayText.length + 1));
      }, 150);
      
      return () => clearTimeout(timeout);
    } else {
      setIsTypingComplete(true);
    }
  }, [displayText]);

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center">
      <div className="text-center max-w-4xl mx-auto px-6">
        {/* Main heading with typewriter effect */}
        <h1 className="text-6xl font-bold text-white mb-6">
          hi, <span className="text-emerald-400">{displayText}</span>
          <span className={`border-r-4 border-emerald-400 ${isTypingComplete ? 'animate-pulse' : ''}`}></span> here.
        </h1>
        
        {/* Subheading with animation */}
        <div className={`transition-all duration-1000 transform ${isTypingComplete ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <p className="text-3xl text-gray-400 mb-8">
            I create stuff sometimes.
          </p>
          
          {/* Description paragraph with animation */}
          <p className="text-lg text-gray-400 mb-10 max-w-3xl mx-auto leading-relaxed
            transition-all duration-1000 delay-300 transform 
            ${isTypingComplete ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}">
            I'm a software developer from Bengaluru, India. I'm fascinated by large-scale, high-impact products 
            and contributed to major feature launches in industry-leading services.
          </p>
          
          {/* let's connect button with animation */}
          <div className={`transition-all duration-1000 delay-500 transform ${isTypingComplete ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <a 
              href="mailto:kunalsrivastava0301@gmail.com" 
              className="inline-flex items-center space-x-2 border-2 border-emerald-400 text-emerald-400 px-6 py-3 rounded-lg hover:bg-emerald-400 hover:text-slate-900 transition-all duration-300 font-medium"
            >
              <Mail size={20} />
              <span>Let's connect</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home